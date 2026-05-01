import React from 'react';
import { ShieldAlert, CheckCircle } from 'lucide-react';

const myths = [
  {
    id: 1,
    myth: "EVMs can be hacked via Bluetooth or Wi-Fi.",
    fact: "EVMs used in India are stand-alone machines. they have no internet, Bluetooth, or Wi-Fi connectivity. They are not connected to any network at any point."
  },
  {
    id: 2,
    myth: "If NOTA gets the most votes, the election is cancelled.",
    fact: "Currently in India, if NOTA gets the highest number of votes, the candidate with the second-highest number of votes is declared the winner."
  },
  {
    id: 3,
    myth: "Your vote can be traced back to you via the serial number.",
    fact: "Voting is completely anonymous. While the serial number on the ballot unit is logged, it is never linked to the voter's identity in the final count."
  }
];

export default function MythBuster() {
  return (
    <section aria-labelledby="myth-buster-title">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 id="myth-buster-title">Election Myth Buster</h2>
        <p>Separating facts from rumors to ensure an informed electorate.</p>
      </div>

      <div className="myth-buster-container">
        {myths.map((item) => (
          <div key={item.id} className="myth-card-wrapper">
            <article className="glass-panel myth-box" aria-label={`Myth: ${item.myth}`}>
              <span className="label-myth" aria-hidden="true">
                <ShieldAlert size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                Common Myth
              </span>
              <p style={{ margin: 0, color: 'white', fontWeight: 500 }}>{item.myth}</p>
            </article>

            <article className="glass-panel fact-box" aria-label={`Fact: ${item.fact}`}>
              <span className="label-fact" aria-hidden="true">
                <CheckCircle size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                The Fact
              </span>
              <p style={{ margin: 0, color: 'var(--text-main)' }}>{item.fact}</p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
