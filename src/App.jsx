import React, { useState } from 'react';
import { BookOpen, Calendar, MessageSquare, ShieldCheck, AlertTriangle, CheckSquare } from 'lucide-react';
import Timeline from './components/Timeline';
import Quiz from './components/Quiz';
import Chat from './components/Chat';
import MythBuster from './components/MythBuster';
import VoterGuide from './components/VoterGuide';
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
      case 'myths':
        return <MythBuster />;
      case 'guide':
        return <VoterGuide />;
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

      <nav className="nav-tabs" aria-label="Main Navigation">
        <button 
          className={`nav-tab ${activeTab === 'timeline' ? 'active' : ''}`}
          onClick={() => setActiveTab('timeline')}
          aria-current={activeTab === 'timeline' ? 'page' : undefined}
        >
          <Calendar size={20} />
          Election Timeline
        </button>
        <button 
          className={`nav-tab ${activeTab === 'quiz' ? 'active' : ''}`}
          onClick={() => setActiveTab('quiz')}
          aria-current={activeTab === 'quiz' ? 'page' : undefined}
        >
          <BookOpen size={20} />
          Interactive Quiz
        </button>
        <button 
          className={`nav-tab ${activeTab === 'chat' ? 'active' : ''}`}
          onClick={() => setActiveTab('chat')}
          aria-current={activeTab === 'chat' ? 'page' : undefined}
        >
          <MessageSquare size={20} />
          Election Assistant Chat
        </button>
        <button 
          className={`nav-tab ${activeTab === 'myths' ? 'active' : ''}`}
          onClick={() => setActiveTab('myths')}
          aria-current={activeTab === 'myths' ? 'page' : undefined}
        >
          <AlertTriangle size={20} />
          Myth Buster
        </button>
        <button 
          className={`nav-tab ${activeTab === 'guide' ? 'active' : ''}`}
          onClick={() => setActiveTab('guide')}
          aria-current={activeTab === 'guide' ? 'page' : undefined}
        >
          <CheckSquare size={20} />
          Voter Guide
        </button>
      </nav>

      <main className="content-area">
        {renderContent()}
      </main>

      <section className="glass-panel" style={{ marginTop: '3rem', borderLeft: '4px solid var(--blue-accent)' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ShieldCheck size={18} color="var(--blue-accent)" /> 
          Verified Resources
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <a href="https://voters.eci.gov.in/" target="_blank" rel="noopener noreferrer" className="quick-reply-btn" style={{ textDecoration: 'none' }}>
            Search Name in Voter List (ECI)
          </a>
          <a href="https://www.google.com/search?q=nearest+polling+station" target="_blank" rel="noopener noreferrer" className="quick-reply-btn" style={{ textDecoration: 'none' }}>
            Find My Polling Station (Google)
          </a>
          <a href="https://voterportal.eci.gov.in/" target="_blank" rel="noopener noreferrer" className="quick-reply-btn" style={{ textDecoration: 'none' }}>
            Register to Vote
          </a>
        </div>
      </section>

      <footer style={{ marginTop: '4rem', textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid var(--panel-border)', paddingTop: '2rem' }}>
        <p>© 2026 DemocraLearn India. Built for Civic Empowerment 🇮🇳</p>
      </footer>
    </div>
  );
}

export default App;
