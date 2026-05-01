import React, { useState } from 'react';
import { RotateCw, ChevronRight } from 'lucide-react';

const flashcards = [
  {
    id: 1,
    question: "What is the minimum voting age in India?",
    answer: "18 years. The 61st Constitutional Amendment Act (1988) lowered the voting age from 21 to 18 years."
  },
  {
    id: 2,
    question: "What does VVPAT stand for?",
    answer: "Voter Verifiable Paper Audit Trail. It provides feedback to voters using a slip of paper, allowing them to verify that their vote was cast correctly."
  },
  {
    id: 3,
    question: "Who conducts the Lok Sabha elections in India?",
    answer: "The Election Commission of India (ECI), an autonomous constitutional authority."
  },
  {
    id: 4,
    question: "What is the Model Code of Conduct (MCC)?",
    answer: "A set of guidelines issued by the ECI to regulate political parties and candidates prior to elections, ensuring free and fair polling."
  },
  {
    id: 5,
    question: "What does NOTA stand for?",
    answer: "None Of The Above. It's a ballot option that allows voters to express their disapproval of all the candidates in the fray."
  }
];

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    }, 150);
  };

  const currentCard = flashcards[currentIndex];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h2>Interactive Flashcards</h2>
        <p>Click the card to reveal the answer. Test your knowledge about Indian elections!</p>
      </div>

      <div className="flashcard-container">
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
          <div className="flashcard-face glass-panel">
            <h3 style={{ color: 'var(--accent-saffron)', fontSize: '1.5rem', marginBottom: '1rem' }}>Question {currentIndex + 1} of {flashcards.length}</h3>
            <p style={{ fontSize: '1.25rem', color: 'white' }}>{currentCard.question}</p>
            <div style={{ position: 'absolute', bottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
              <RotateCw size={16} /> Click to flip
            </div>
          </div>
          
          <div className="flashcard-face flashcard-back glass-panel">
            <h3 style={{ color: 'var(--accent-green)', fontSize: '1.5rem', marginBottom: '1rem' }}>Answer</h3>
            <p style={{ fontSize: '1.1rem', color: 'white' }}>{currentCard.answer}</p>
          </div>
        </div>
      </div>

      <div className="quiz-controls">
        <button className="primary-btn" onClick={handleNext} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          Next Question <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
