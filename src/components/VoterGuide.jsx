import React, { useState } from 'react';
import { CheckSquare, Square, Info } from 'lucide-react';

const checklistItems = [
  { id: 1, text: "Verify name in Electoral Roll (voters.eci.gov.in)", category: "Pre-Election" },
  { id: 2, text: "Locate your Polling Station", category: "Pre-Election" },
  { id: 3, text: "Carry your EPIC (Voter ID) or 12 alternative documents", category: "Election Day" },
  { id: 4, text: "Check your polling date and time", category: "Election Day" },
  { id: 5, text: "Verify the VVPAT slip after casting your vote", category: "At Polling Booth" }
];

export default function VoterGuide() {
  const [checked, setChecked] = useState([]);

  const toggle = (id) => {
    setChecked(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const progress = Math.round((checked.length / checklistItems.length) * 100);

  return (
    <div className="glass-panel" style={{ maxWidth: '700px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2>Personalized Voter Guide</h2>
        <p>Your step-by-step checklist for a smooth voting experience.</p>
      </div>

      <div style={{ marginBottom: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span>Readiness Progress</span>
          <span>{progress}%</span>
        </div>
        <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ width: `${progress}%`, height: '100%', background: 'var(--accent-green)', transition: 'width 0.3s ease' }} />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {checklistItems.map(item => (
          <button 
            key={item.id} 
            onClick={() => toggle(item.id)}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              background: checked.includes(item.id) ? 'rgba(19, 136, 8, 0.1)' : 'var(--panel-bg)',
              border: `1px solid ${checked.includes(item.id) ? 'var(--accent-green)' : 'var(--panel-border)'}`,
              padding: '1rem',
              borderRadius: '12px',
              cursor: 'pointer',
              textAlign: 'left',
              width: '100%',
              color: 'var(--text-main)',
              transition: 'all 0.2s ease'
            }}
          >
            {checked.includes(item.id) ? <CheckSquare color="var(--accent-green)" /> : <Square color="var(--text-muted)" />}
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block' }}>{item.category}</span>
              <span style={{ fontSize: '1rem', fontWeight: 500 }}>{item.text}</span>
            </div>
          </button>
        ))}
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start', padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', color: 'var(--blue-accent)' }}>
        <Info size={20} style={{ flexShrink: 0 }} />
        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-main)' }}>
          <strong>Pro Tip:</strong> You can download the 'Voter Helpline' app from the Play Store for real-time tracking of your constituency details.
        </p>
      </div>
    </div>
  );
}
