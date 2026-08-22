import React from 'react';
import { Filter, Bookmark, FileText, ArrowRight, Microscope, GraduationCap, Calendar, UserPlus } from 'lucide-react';
import { institutionalUpdates, upcomingMeetings, suggestedPeers } from '../data/mockData';

export function HubPage({ onNavigate }) {
  return (
    <div style={{ padding: '24px 32px', display: 'flex', gap: '28px' }}>
      {/* Main Feed Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {/* Institutional Updates Section */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px' }}>
            <div>
              <h2 className="font-serif" style={{ fontSize: '32px', color: '#1c2826', fontWeight: 700 }}>
                Institutional Updates
              </h2>
              <p style={{ color: '#5b6b6c', fontSize: '14px', marginTop: '2px' }}>
                KEM Hospital & Associated Research Centers
              </p>
            </div>
            <button 
              style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700, color: '#5b6b6c', letterSpacing: '0.5px' }}
              onClick={() => alert("Filtering Institutional Updates Feed...")}
            >
              FILTER FEED <Filter size={14} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {institutionalUpdates.map((item) => (
              <div key={item.id} className="card" style={{ position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span className="badge badge-policy">{item.type}</span>
                    <span style={{ fontSize: '12px', color: '#88999b' }}>{item.time}</span>
                  </div>
                  <button style={{ color: '#88999b' }} title="Bookmark">
                    <Bookmark size={18} />
                  </button>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1c2826', marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#5b6b6c', lineHeight: 1.6, marginBottom: '16px' }}>
                  {item.excerpt}
                </p>

                {item.attachment && (
                  <div 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px', 
                      backgroundColor: '#f6f8f8', 
                      border: '1px solid #e1e7e7', 
                      borderRadius: '6px', 
                      padding: '10px 14px',
                      maxWidth: '340px',
                      cursor: 'pointer'
                    }}
                    onClick={() => alert(`Downloading ${item.attachment.name}...`)}
                  >
                    <FileText size={20} color="#0e5c63" />
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#1c2826' }}>
                        {item.attachment.name}
                      </div>
                      <div style={{ fontSize: '11px', color: '#88999b' }}>
                        {item.attachment.size}
                      </div>
                    </div>
                  </div>
                )}

                {item.actionText && (
                  <button 
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '6px', 
                      color: '#0e5c63', 
                      fontSize: '12px', 
                      fontWeight: 700,
                      letterSpacing: '0.4px'
                    }}
                    onClick={() => alert("Submission guidelines window opening...")}
                  >
                    {item.actionText} <ArrowRight size={14} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Network Pathways Section */}
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1c2826', marginBottom: '16px' }}>
            Network Pathways
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {/* Card 1 */}
            <div 
              className="card" 
              style={{ cursor: 'pointer', transition: 'border-color 0.2s ease' }}
              onClick={() => onNavigate('opportunities')}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <Microscope size={24} color="#0e5c63" />
                <span className="badge badge-verified" style={{ backgroundColor: '#e2f4eb', color: '#0d7348' }}>
                  3 Matches
                </span>
              </div>
              <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#1c2826', marginBottom: '4px' }}>
                Clinical Trials
              </h4>
              <p style={{ fontSize: '13px', color: '#5b6b6c' }}>
                Active recruitment phases in your specialty.
              </p>
            </div>

            {/* Card 2 */}
            <div 
              className="card" 
              style={{ cursor: 'pointer', transition: 'border-color 0.2s ease' }}
              onClick={() => onNavigate('network')}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <GraduationCap size={24} color="#b66113" />
                <span className="badge badge-upcoming" style={{ backgroundColor: '#ffeedb', color: '#b66113' }}>
                  1 Upcoming
                </span>
              </div>
              <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#1c2826', marginBottom: '4px' }}>
                Academic Boards
              </h4>
              <p style={{ fontSize: '13px', color: '#5b6b6c' }}>
                Positions on review committees opening soon.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar Widgets */}
      <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Upcoming Meetings Widget */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={18} color="#0e5c63" />
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1c2826' }}>Upcoming Meetings</h3>
            </div>
            <button 
              style={{ fontSize: '12px', color: '#5b6b6c', fontWeight: 600 }}
              onClick={() => alert("Viewing full meetings calendar...")}
            >
              View All
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {upcomingMeetings.map((m) => (
              <div key={m.id} style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <div style={{ 
                  backgroundColor: '#f1f5f5', 
                  borderRadius: '6px', 
                  padding: '8px 10px', 
                  textAlign: 'center',
                  minWidth: '50px'
                }}>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: '#5b6b6c', letterSpacing: '0.5px' }}>{m.month}</div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#1c2826' }}>{m.day}</div>
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#1c2826' }}>{m.title}</div>
                  <div style={{ fontSize: '12px', color: '#88999b' }}>{m.time} | {m.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Peers Widget */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <UserPlus size={18} color="#0e5c63" />
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1c2826' }}>Suggested Peers</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '16px' }}>
            {suggestedPeers.map((peer) => (
              <div key={peer.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img 
                    src={peer.avatar} 
                    alt={peer.name} 
                    style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover' }} 
                  />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#1c2826' }}>{peer.name}</div>
                    <div style={{ fontSize: '11px', color: '#88999b' }}>{peer.dept}</div>
                  </div>
                </div>
                <button 
                  style={{ color: '#0e5c63', padding: '4px' }}
                  title="Add Peer"
                  onClick={() => alert(`Connection request sent to ${peer.name}`)}
                >
                  <UserPlus size={18} />
                </button>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid #edf1f1', paddingTop: '12px', textAlign: 'center' }}>
            <button 
              style={{ fontSize: '12px', fontWeight: 600, color: '#5b6b6c' }}
              onClick={() => onNavigate('network')}
            >
              Browse Directory
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HubPage;
