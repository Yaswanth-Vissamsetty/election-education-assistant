import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

const predefinedResponses = {
  "how to register": "To register to vote in India, you need to fill out Form 6. You can do this online through the Voter Helpline App or the National Voters' Services Portal (NVSP). You must be an Indian citizen and 18 years old on the qualifying date (January 1st of the year).",
  "what is evm": "EVM stands for Electronic Voting Machine. It consists of a Control Unit and a Balloting Unit. EVMs make voting faster, eliminate invalid votes, and reduce paper waste.",
  "what is vvpat": "VVPAT (Voter Verifiable Paper Audit Trail) is an independent verification system for EVMs. It prints a paper slip with the candidate's name and symbol you voted for, visible through a glass window for 7 seconds before falling into a sealed box.",
  "model code of conduct": "The Model Code of Conduct (MCC) is a set of guidelines issued by the ECI. It comes into force the moment election dates are announced and regulates the conduct of parties and candidates to ensure a level playing field.",
  "nota": "NOTA means 'None Of The Above'. It allows a voter to officially reject all candidates. Even if NOTA gets the highest votes, the candidate with the next highest votes is declared the winner.",
  "default": "I'm your AI Election Assistant! I can help you understand the Indian election process, EVMs, VVPATs, voter registration, and more. Try asking 'How to register' or 'What is an EVM?'"
};

const quickReplies = [
  "How to register to vote?",
  "What is an EVM?",
  "What is VVPAT?",
  "Explain Model Code of Conduct"
];

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your Indian Election Assistant. How can I help you understand the democratic process today?", sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text = inputText) => {
    if (!text.trim()) return;

    // Add user message
    const newUserMsg = { id: Date.now(), text, sender: 'user' };
    setMessages(prev => [...prev, newUserMsg]);
    setInputText("");

    // Simulate bot thinking and responding
    setTimeout(() => {
      const lowercaseQuery = text.toLowerCase();
      let botReply = predefinedResponses["default"];

      if (lowercaseQuery.includes("register") || lowercaseQuery.includes("vote")) {
        botReply = predefinedResponses["how to register"];
      } else if (lowercaseQuery.includes("evm")) {
        botReply = predefinedResponses["what is evm"];
      } else if (lowercaseQuery.includes("vvpat")) {
        botReply = predefinedResponses["what is vvpat"];
      } else if (lowercaseQuery.includes("model code") || lowercaseQuery.includes("mcc")) {
        botReply = predefinedResponses["model code of conduct"];
      } else if (lowercaseQuery.includes("nota")) {
         botReply = predefinedResponses["nota"];
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: botReply, sender: 'bot' }]);
    }, 600);
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

      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
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
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="send-btn" onClick={() => handleSend()}>
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
