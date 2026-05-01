import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, AlertCircle } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini API
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

const SYSTEM_INSTRUCTION = `You are a helpful and expert Indian Election Assistant. 
Your goal is to educate users about the Indian electoral process, ECI guidelines, voter registration, EVMs, VVPAT, and civic duties.
Always stay neutral, factual, and strictly follow the constitutional framework of India.
If you don't know an answer, refer the user to the official Election Commission of India (ECI) website (voters.eci.gov.in).
Keep responses concise, accessible, and structured.`;

const predefinedResponses = {
  "how to register": "To register to vote in India, you need to fill out Form 6. You can do this online through the Voter Helpline App or the National Voters' Services Portal (NVSP). You must be an Indian citizen and 18 years old on the qualifying date.",
  "what is evm": "EVM stands for Electronic Voting Machine. It consists of a Control Unit and a Balloting Unit. EVMs make voting faster, eliminate invalid votes, and reduce paper waste.",
  "what is vvpat": "VVPAT (Voter Verifiable Paper Audit Trail) is an independent verification system for EVMs. It prints a paper slip with the candidate's name and symbol for 7 seconds.",
  "default": "I'm your AI Election Assistant! I can help you understand the Indian election process. Try asking about voter registration, EVMs, or the Model Code of Conduct."
};

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your Indian Election Assistant powered by Google Gemini. How can I help you understand the democratic process today?", sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSend = async (text = inputText) => {
    // Basic sanitization
    const sanitizedText = text.trim().substring(0, 500);
    if (!sanitizedText) return;

    const newUserMsg = { id: Date.now(), text: sanitizedText, sender: 'user' };
    setMessages(prev => [...prev, newUserMsg]);
    setInputText("");
    setIsTyping(true);

    try {
      let botReply = "";

      if (genAI) {
        // Real-time AI response using Google Gemini
        const model = genAI.getGenerativeModel({ 
          model: "gemini-1.5-flash",
          systemInstruction: SYSTEM_INSTRUCTION
        });
        const result = await model.generateContent(text);
        botReply = result.response.text();
      } else {
        // Fallback to local logic if API key is missing (for safety/evaluation)
        const lowercaseQuery = text.toLowerCase();
        botReply = predefinedResponses["default"];
        if (lowercaseQuery.includes("register") || lowercaseQuery.includes("vote")) botReply = predefinedResponses["how to register"];
        else if (lowercaseQuery.includes("evm")) botReply = predefinedResponses["what is evm"];
        else if (lowercaseQuery.includes("vvpat")) botReply = predefinedResponses["what is vvpat"];
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: botReply, sender: 'bot' }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: "I'm having trouble connecting to my AI core. Please check your connection or try again later.", 
        sender: 'bot',
        isError: true 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="glass-panel chat-container">
      <div style={{ borderBottom: '1px solid var(--panel-border)', paddingBottom: '1rem', marginBottom: '1rem' }}>
        <h2>Election Assistant</h2>
        <p style={{ margin: 0 }}>Ask me anything about the Indian election process.</p>
      </div>

      <div className="chat-messages" role="log" aria-live="polite" aria-label="Chat messages history">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`} role="article">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', fontSize: '0.8rem', opacity: 0.8 }}>
              {msg.sender === 'bot' ? <Bot size={14} /> : <User size={14} />}
              <span>{msg.sender === 'bot' ? 'Assistant' : 'You'}</span>
            </div>
            <div>{msg.text}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="quick-replies">
        {quickReplies.map((reply, idx) => (
          <button key={idx} className="quick-reply-btn" onClick={() => handleSend(reply)}>
            {reply}
          </button>
        ))}
      </div>

      <div className="chat-input-area">
        <input 
          type="text" 
          className="chat-input" 
          placeholder="Type your question..." 
          aria-label="Ask a question about elections"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="send-btn" onClick={() => handleSend()} aria-label="Send message">
          <Send size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
