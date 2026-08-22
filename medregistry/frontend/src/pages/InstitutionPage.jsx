import React, { useState } from 'react';
import { CheckCircle2, Building2, MapPin, Users, Award, ExternalLink, Plus, GraduationCap } from 'lucide-react';
import { institutionData } from '../data/mockData';

export function InstitutionPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('Overview');
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div style={{ padding: '24px 32px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Institution Hero Cover Banner (LinkedIn Company Page Style) */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ height: '160px', background: 'linear-gradient(135deg, #0f172a 0%, #0f766e 100%)', position: 'relative' }}>
          <div style={{ position: 'absolute', right: '20px', bottom: '16px', color: '#ffffff', fontSize: '12px', fontWeight: 600, backgroundColor: 'rgba(0,0,0,0.4)', padding: '4px 12px', borderRadius: '12px' }}>
            Established 1926 • NMC Recognized
          </div>
        </div>

        <div style={{ padding: '0 28px 24px', marginTop: '-45px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-end' }}>
              <div 
                style={{ 
                  width: '96px', 
                  height: '96px', 
                  borderRadius: '12px', 
                  backgroundColor: '#ffffff', 
                  border: '4px solid #ffffff',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0f766e'
                }}
              >
                <Building2 size={44} />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
                    {institutionData.name}
                  </h2>
                  <CheckCircle2 size={18} color="#0f766e" style={{ fill: '#dcfce7' }} title="NMC Recognized Public Medical College" />
                </div>
                <div style={{ fontSize: '13px', color: '#475569', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={14} color="#64748b" /> {institutionData.address}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
              <button 
                onClick={() => setIsFollowing(!isFollowing)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  backgroundColor: isFollowing ? '#dcfce7' : '#0f766e',
                  color: isFollowing ? '#15803d' : '#ffffff',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {isFollowing ? '✓ Following' : '+ Follow Institution'}
              </button>

              <button 
                onClick={() => alert("Visiting Official KEM Hospital Portal...")}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 18px',
                  borderRadius: '20px',
                  border: '1px solid #0f766e',
                  color: '#0f766e',
                  backgroundColor: 'transparent',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                <ExternalLink size={15} /> Official Portal
              </button>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #f1f5f9', marginTop: '20px', paddingTop: '14px', display: 'flex', gap: '24px', fontSize: '13px' }}>
            <span style={{ color: '#475569' }}><strong style={{ color: '#0f766e' }}>12,450+</strong> Registered Alumni</span>
            <span style={{ color: '#475569' }}><strong style={{ color: '#0f766e' }}>8,210</strong> Active Practitioners</span>
            <span style={{ color: '#475569' }}><strong style={{ color: '#0f766e' }}>98.5%</strong> NMC Verification Rate</span>
          </div>

          {/* Sub-tabs */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
            {['Overview', 'Updates & Bulletins', 'Alumni Directory', 'Clinical Pathways'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '6px 16px',
                  borderRadius: '16px',
                  fontSize: '13px',
                  fontWeight: 600,
                  backgroundColor: activeTab === tab ? '#0f172a' : '#ffffff',
                  color: activeTab === tab ? '#ffffff' : '#475569',
                  border: '1px solid #cbd5e1',
                  cursor: 'pointer'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'Overview' && (
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="card" style={{ padding: '20px 24px' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                About Seth GS Medical College & KEM Hospital
              </h3>
              <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, margin: 0 }}>
                Founded in 1926, Seth Gordhandas Sunderdas Medical College (GSMC) and King Edward Memorial (KEM) Hospital are among the premier medical institutions in India. Providing tertiary care to over 1.8 million outpatients annually, KEM Hospital is renowned for medical education, clinical research, and residency training across specialties.
              </p>
            </div>

            <div className="card" style={{ padding: '20px 24px' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={18} color="#0f766e" /> Accreditations & Recognitions
              </h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {institutionData.accreditations.map((acc, i) => (
                  <span key={i} className="badge" style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '12px', padding: '6px 12px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={13} /> {acc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="card" style={{ padding: '18px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
                Institutional Stats
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#475569' }}>Type</span>
                  <span style={{ fontWeight: 600, color: '#0f172a' }}>{institutionData.type}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#475569' }}>Affiliation</span>
                  <span style={{ fontWeight: 600, color: '#0f172a' }}>{institutionData.affiliation}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Alumni Directory' && (
        <div className="card" style={{ padding: '20px' }}>
          <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>
            KEM Hospital Alumni Network
          </h3>
          <p style={{ fontSize: '13px', color: '#475569', marginBottom: '16px' }}>
            Connect with doctors, specialists, and alumni who graduated from KEM Hospital.
          </p>
          <button onClick={() => onNavigate('network')} className="btn btn-primary" style={{ padding: '8px 20px', borderRadius: '20px', backgroundColor: '#0f766e', color: '#ffffff', border: 'none', cursor: 'pointer' }}>
            Open Full Alumni Directory
          </button>
        </div>
      )}

    </div>
  );
}

export default InstitutionPage;
