import React from 'react';
import { CheckCircle2, MessageSquare, Calendar, GraduationCap, Award, MapPin, Building2, FileText, Share2, Briefcase, ExternalLink, ShieldCheck } from 'lucide-react';
import { currentUser } from '../data/mockData';

export function ProfilePage({ onNavigate }) {
  const profile = {
    name: currentUser.name,
    verified: true,
    degree: currentUser.degree,
    regNumber: currentUser.regNumber,
    specialty: currentUser.specialty,
    experience: currentUser.experience,
    location: currentUser.location,
    avatar: currentUser.avatar,
    institution: currentUser.institution,
    headline: 'Senior Consultant & HOD Cardiology | DM Specialist | AIIMS Delhi',
    about: 'Board-certified Cardiologist with over 18 years of clinical experience in interventional cardiology, acute coronary care, and post-operative cardiac guidelines. Passionate about medical education and integrating diagnostic AI in cardiology.',
    experienceList: [
      {
        role: 'Head of Department & Senior Consultant',
        institution: 'AIIMS New Delhi',
        period: '2016 - Present',
        duties: [
          'Leading interventional cardiology team in high-volume catheterization lab.',
          'Pioneered post-op cardiology care guidelines across regional hospital networks.',
          'Supervising DM Cardiology fellows and medical residents.'
        ]
      },
      {
        role: 'Associate Professor',
        institution: 'PGIMER Chandigarh',
        period: '2010 - 2016',
        duties: [
          'Led clinical trials in acute coronary syndrome and stent outcomes.'
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
        validity: 'Lifetime Fellow'
      }
    ]
  };

  return (
    <div style={{ padding: '24px 32px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Hero LinkedIn Style Profile Card */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {/* Cover Image Banner */}
        <div style={{ height: '140px', background: 'linear-gradient(135deg, #0f766e 0%, #0f172a 100%)' }} />

        <div style={{ padding: '0 28px 24px', marginTop: '-50px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative' }}>
              <img 
                src={profile.avatar} 
                alt={profile.name} 
                style={{ 
                  width: '116px', 
                  height: '116px', 
                  objectFit: 'cover', 
                  borderRadius: '50%',
                  border: '4px solid #ffffff',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                }} 
              />
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
              <button 
                onClick={() => onNavigate('messages')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 18px',
                  borderRadius: '20px',
                  backgroundColor: '#0f766e',
                  color: '#ffffff',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <MessageSquare size={15} /> Send Message
              </button>

              <button 
                onClick={() => alert(`Consultation request sent to ${profile.name}`)}
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
                <Calendar size={15} /> Request Consult
              </button>
            </div>
          </div>

          <div style={{ marginTop: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
                {profile.name}
              </h2>
              {profile.verified && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '11px', fontWeight: 600, color: '#15803d', backgroundColor: '#dcfce7', padding: '2px 8px', borderRadius: '12px' }}>
                  <CheckCircle2 size={12} /> Verified Practitioner
                </span>
              )}
            </div>

            <p style={{ fontSize: '14px', fontWeight: 600, color: '#0f766e', marginTop: '4px' }}>
              {profile.headline}
            </p>

            <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#475569', marginTop: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Building2 size={14} color="#64748b" /> {profile.institution}
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={14} color="#64748b" /> {profile.location}
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ShieldCheck size={14} color="#64748b" /> Reg No: {profile.regNumber}
              </span>
            </div>

            <div style={{ borderTop: '1px solid #f1f5f9', marginTop: '16px', paddingTop: '12px', display: 'flex', gap: '24px', fontSize: '13px' }}>
              <span style={{ color: '#475569' }}><strong style={{ color: '#0f766e' }}>1,280</strong> Connections</span>
              <span style={{ color: '#475569' }}><strong style={{ color: '#0f766e' }}>342</strong> Profile Views</span>
              <span style={{ color: '#475569' }}><strong style={{ color: '#0f766e' }}>24</strong> Clinical Cases</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="card" style={{ padding: '20px 24px' }}>
        <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
          About
        </h3>
        <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, margin: 0 }}>
          {profile.about}
        </p>
      </div>

      {/* Clinical Experience */}
      <div className="card" style={{ padding: '20px 24px' }}>
        <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Briefcase size={18} color="#0f766e" /> Clinical Experience
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {profile.experienceList.map((exp, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ padding: '10px', backgroundColor: '#ccfbf1', borderRadius: '8px', color: '#0f766e' }}>
                <Building2 size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                  {exp.role}
                </h4>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f766e', marginTop: '2px' }}>
                  {exp.institution}
                </div>
                <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                  {exp.period}
                </div>

                <ul style={{ paddingLeft: '18px', marginTop: '8px', fontSize: '13px', color: '#475569', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {exp.duties.map((duty, dIdx) => (
                    <li key={dIdx}>{duty}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Licensing */}
      <div className="card" style={{ padding: '20px 24px' }}>
        <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <GraduationCap size={18} color="#0f766e" /> Education & Medical Licensing
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {profile.education.map((edu, eIdx) => (
            <div key={eIdx} style={{ display: 'flex', gap: '12px', padding: '14px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <Award size={22} color="#0f766e" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                  {edu.degree || edu.title}
                </h4>
                <div style={{ fontSize: '12px', color: '#475569', marginTop: '2px' }}>
                  {edu.institution || edu.issuer}
                </div>
                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 500, marginTop: '4px' }}>
                  {edu.completed || edu.validity}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ProfilePage;
