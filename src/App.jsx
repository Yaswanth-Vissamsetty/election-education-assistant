import React, { useState } from 'react';
import { BookOpen, Calendar, MessageSquare, ShieldCheck } from 'lucide-react';
import Timeline from './components/Timeline';
import Quiz from './components/Quiz';
import Chat from './components/Chat';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('timeline');

  const renderContent = () => {
    switch (activeTab) {
      case 'timeline':
        return <Timeline />;
      case 'quiz':
        return <Quiz />;
      case 'chat':
        return <Chat />;
      default:
        return <Timeline />;
    }
  };

  return (
    <div className="app-container">
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <ShieldCheck size={48} color="#ff9933" />
          <h1>DemocraLearn India</h1>
          <ShieldCheck size={48} color="#138808" />
        </div>
        <p style={{ fontSize: '1.2rem' }}>Your Interactive Guide to the Indian Election System</p>
      </header>

      <nav className="nav-tabs">
        <button 
          className={`nav-tab ${activeTab === 'timeline' ? 'active' : ''}`}
          onClick={() => setActiveTab('timeline')}
        >
          <Calendar size={20} />
          Election Timeline
        </button>
        <button 
          className={`nav-tab ${activeTab === 'quiz' ? 'active' : ''}`}
          onClick={() => setActiveTab('quiz')}
        >
          <BookOpen size={20} />
          Interactive Quiz
        </button>
        <button 
          className={`nav-tab ${activeTab === 'chat' ? 'active' : ''}`}
          onClick={() => setActiveTab('chat')}
        >
          <MessageSquare size={20} />
          Election Assistant Chat
        </button>
      </nav>

      <main className="content-area">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
