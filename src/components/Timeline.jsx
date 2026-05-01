import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const timelineEvents = [
  {
    id: 1,
    title: 'Notification of Election',
    description: 'The Election Commission of India (ECI) announces the election schedule. The Model Code of Conduct comes into effect immediately.',
    icon: '📜'
  },
  {
    id: 2,
    title: 'Filing of Nominations',
    description: 'Candidates submit their nomination papers along with an affidavit detailing their assets, liabilities, and criminal records (if any).',
    icon: '✍️'
  },
  {
    id: 3,
    title: 'Scrutiny and Withdrawal',
    description: 'The Returning Officer scrutinizes the nominations. Candidates are given a window to withdraw their candidacy if they choose to.',
    icon: '🔍'
  },
  {
    id: 4,
    title: 'Campaign Period',
    description: 'Candidates and political parties campaign to win voter support. Campaigning officially ends 48 hours before the polling day.',
    icon: '📢'
  },
  {
    id: 5,
    title: 'Polling Day',
    description: 'Voters cast their votes using Electronic Voting Machines (EVMs) and verify them using Voter Verifiable Paper Audit Trail (VVPAT) systems.',
    icon: '🗳️'
  },
  {
    id: 6,
    title: 'Counting & Results',
    description: 'EVMs are opened in the presence of candidates/agents, votes are counted, and the candidate with the highest votes is declared the winner (First Past the Post).',
    icon: '🏆'
  }
];

export default function Timeline() {
  return (
    <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>The Election Process</h2>
      
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div key={event.id} className="timeline-item glass-panel" style={{ marginBottom: '1.5rem', marginLeft: '2rem' }}>
            <div className="timeline-icon">
              {index === 0 ? <CheckCircle2 size={16} /> : <Circle size={16} />}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '2rem' }}>{event.icon}</span>
              <h3 style={{ margin: 0 }}>Step {event.id}: {event.title}</h3>
            </div>
            <p style={{ margin: 0 }}>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
