import React, { useState } from 'react';
import { CheckCircle2, MessageSquare, Calendar, GraduationCap, Award, ShieldCheck } from 'lucide-react';
import { peerProfiles, currentUser } from '../data/mockData';

export function ProfilePage({ onNavigate }) {
  const [profileView, setProfileView] = useState('anjali-menon'); // default to Dr. Anjali Menon matching Screenshot 3

  const isSelf = profileView === 'self';
  const profile = isSelf 
    ? {
        name: currentUser.name,
        verified: true,
        degree: currentUser.degree,
        regNumber: currentUser.regNumber,
        specialty: currentUser.specialty,
        experience: currentUser.experience,
        location: currentUser.location,
        avatar: currentUser.avatar,
        experienceList: [
          {
            role: 'Head of Department & DM Specialist',
            institution: 'AIIMS New Delhi',
            period: '2016 - Present',
            duties: [
              'Leading interventional cardiology team in high-volume catheterization lab.',
              'Pioneered post-op cardiology care guidelines across regional hospitals.',
              'Mentoring DM Cardiology fellows and post-graduate residents.'
            ]
          },
          {
            role: 'Associate Professor',
            institution: 'PGIMER Chandigarh',
            period: '2010 - 2016',
            duties: [
              'Supervised clinical trials in acute coronary syndrome and stent outcomes.'
            ]
          }
        ],
        education: [
          {
            degree: 'DM Cardiology',
            institution: 'AIIMS New Delhi',
            completed: 'Completed 2010'
          },
          {
            degree: 'MD Internal Medicine',
            institution: 'KEM Hospital, Mumbai',
            completed: 'Completed 2006'
          },
          {
            title: 'Fellow of American College of Cardiology (FACC)',
            issuer: 'ACC USA',
            validity: 'Lifetime'
          }
        ]
      }
    : peerProfiles['anjali-menon'];

  return (
    <div style={{ padding: '24px 32px' }}>
      {/* Profile view switcher pill */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button 
          style={{ 
            padding: '6px 14px', 
            borderRadius: '20px', 
            fontSize: '12px', 
            fontWeight: 700,
            backgroundColor: profileView === 'anjali-menon' ? '#0e5c63' : '#e1e7e7',
            color: profileView === 'anjali-menon' ? '#ffffff' : '#5b6b6c'
          }}
          onClick={() => setProfileView('anjali-menon')}
        >
          View Dr. Anjali Menon (Screenshot 3)
        </button>
        <button 
          style={{ 
            padding: '6px 14px', 
            borderRadius: '20px', 
            fontSize: '12px', 
            fontWeight: 700,
            backgroundColor: profileView === 'self' ? '#0e5c63' : '#e1e7e7',
            color: profileView === 'self' ? '#ffffff' : '#5b6b6c'
          }}
          onClick={() => setProfileView('self')}
        >
          View My Profile (Dr. Rajesh Sharma)
        </button>
      </div>

      <div style={{ display: 'flex', gap: '32px' }}>
        {/* Left Column: Doctor Profile Card & Contact */}
        <div style={{ width: '300px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="card" style={{ textAlign: 'center', padding: '24px 20px' }}>
            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '16px' }}>
              <img 
                src={profile.avatar} 
                alt={profile.name} 
                style={{ width: '130px', height: '130px', objectFit: 'cover', borderRadius: '4px' }} 
              />
              <div style={{ 
                position: 'absolute', 
                bottom: '-10px', 
                left: '50%', 
                transform: 'translateX(-50%)',
                backgroundColor: '#0e5c63',
                color: '#ffffff',
                fontSize: '10px',
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: '3px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                whiteSpace: 'nowrap'
              }}>
                <CheckCircle2 size={12} /> VERIFIED
              </div>
            </div>

            <h2 className="font-serif" style={{ fontSize: '24px', color: '#1c2826', fontWeight: 700, marginTop: '8px' }}>
              {profile.name}
            </h2>
            <p style={{ fontSize: '13px', color: '#5b6b6c', marginBottom: '20px' }}>
              {profile.degree}
            </p>

            <div style={{ borderTop: '1px solid #edf1f1', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                <span style={{ color: '#88999b', fontWeight: 700 }}>REG. NUMBER</span>
                <span style={{ color: '#1c2826', fontWeight: 700 }}>{profile.regNumber}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                <span style={{ color: '#88999b', fontWeight: 700 }}>SPECIALTY</span>
                <span style={{ color: '#1c2826', fontWeight: 700 }}>{profile.specialty}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                <span style={{ color: '#88999b', fontWeight: 700 }}>EXPERIENCE</span>
                <span style={{ color: '#1c2826', fontWeight: 700 }}>{profile.experience}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                <span style={{ color: '#88999b', fontWeight: 700 }}>LOCATION</span>
                <span style={{ color: '#1c2826', fontWeight: 700 }}>{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="card">
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#1c2826', marginBottom: '14px' }}>
              Contact Actions
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button 
                style={{ 
                  width: '100%', 
                  padding: '10px', 
                  backgroundColor: '#0e5c63', 
                  color: '#ffffff', 
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onClick={() => onNavigate('messages')}
              >
                <MessageSquare size={16} /> Message
              </button>
              <button 
                style={{ 
                  width: '100%', 
                  padding: '10px', 
                  border: '1px solid #0e5c63', 
                  color: '#0e5c63', 
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onClick={() => alert(`Consultation request sent to ${profile.name}`)}
              >
                <Calendar size={16} /> Request Consult
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Clinical Experience & Education */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Clinical Experience */}
          <div>
            <h2 className="font-serif" style={{ fontSize: '26px', color: '#1c2826', fontWeight: 700, marginBottom: '16px' }}>
              Clinical Experience
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {profile.experienceList.map((exp, idx) => (
                <div key={idx} className="card" style={{ position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <div>
                      <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#1c2826' }}>
                        {exp.role}
                      </h3>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#0e5c63' }}>
                        {exp.institution}
                      </div>
                    </div>
                    <span style={{ 
                      fontSize: '11px', 
                      fontWeight: 700, 
                      backgroundColor: '#f1f5f5', 
                      padding: '4px 8px', 
                      borderRadius: '3px',
                      color: '#5b6b6c'
                    }}>
                      {exp.period}
                    </span>
                  </div>

                  <ul style={{ paddingLeft: '18px', marginTop: '10px', fontSize: '13px', color: '#5b6b6c', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {exp.duties.map((duty, dIdx) => (
                      <li key={dIdx}>{duty}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h2 className="font-serif" style={{ fontSize: '26px', color: '#1c2826', fontWeight: 700, marginBottom: '16px' }}>
              Education & Certifications
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {profile.education.map((edu, eIdx) => (
                <div key={eIdx} className="card" style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  {edu.title ? (
                    <Award size={24} color="#0e5c63" style={{ flexShrink: 0, marginTop: '2px' }} />
                  ) : (
                    <GraduationCap size={24} color="#0e5c63" style={{ flexShrink: 0, marginTop: '2px' }} />
                  )}
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#1c2826', marginBottom: '2px' }}>
                      {edu.degree || edu.title}
                    </h4>
                    <div style={{ fontSize: '12px', color: '#5b6b6c', marginBottom: '4px' }}>
                      {edu.institution || edu.issuer}
                    </div>
                    <div style={{ fontSize: '11px', color: '#88999b', fontWeight: 600 }}>
                      {edu.completed || edu.validity}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
