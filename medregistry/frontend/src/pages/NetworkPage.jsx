import React, { useState } from 'react';
import { 
  CheckCircle2, 
  UserPlus, 
  Users, 
  Search, 
  Building2, 
  Award, 
  UserCheck, 
  MessageSquare, 
  MapPin,
  HeartPulse,
  Brain,
  Stethoscope,
  Scissors,
  Microscope
} from 'lucide-react';
import { alumniNetwork } from '../data/mockData';

export function NetworkPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('peers');
  const [searchQuery, setSearchQuery] = useState('');
  const [specialty, setSpecialty] = useState('All Specialties');
  const [institution, setInstitution] = useState('All Institutions');
  const [roleFilter, setRoleFilter] = useState('All Roles');
  const [connectedIds, setConnectedIds] = useState({});

  const handleConnect = (id) => {
    setConnectedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const specialtyCircles = [
    { id: 'sc-1', name: 'Indian Cardiology Research Forum', members: '4,820 members', category: 'Cardiology', Icon: HeartPulse },
    { id: 'sc-2', name: 'Neurosurgery & Stroke Network', members: '2,940 members', category: 'Neurology', Icon: Brain },
    { id: 'sc-3', name: 'Medical Students NEET-PG & USMLE Prep', members: '18,500 members', category: 'Education', Icon: Stethoscope },
    { id: 'sc-4', name: 'Minimally Invasive Surgery Club', members: '3,210 members', category: 'Surgery', Icon: Scissors },
    { id: 'sc-5', name: 'Oncology & Radiation Research Group', members: '5,100 members', category: 'Oncology', Icon: Microscope },
  ];

  const medicalColleges = [
    { id: 'mc-1', name: 'AIIMS, New Delhi', location: 'New Delhi', alumniCount: '8,450 Alumni & Doctors', avatar: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=200' },
    { id: 'mc-2', name: 'Seth GS Medical College & KEM Hospital', location: 'Mumbai', alumniCount: '12,450 Alumni & Doctors', avatar: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=200' },
    { id: 'mc-3', name: 'Christian Medical College (CMC)', location: 'Vellore', alumniCount: '6,900 Alumni & Doctors', avatar: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=200' },
    { id: 'mc-4', name: 'PGIMER', location: 'Chandigarh', alumniCount: '5,300 Alumni & Doctors', avatar: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=200' }
  ];

  return (
    <div style={{ padding: '24px 32px', maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Top Banner Dashboard */}
      <div className="card" style={{ padding: '24px', background: 'linear-gradient(135deg, #0f172a 0%, #0f766e 100%)', color: '#ffffff', borderRadius: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 700, margin: 0, letterSpacing: '-0.02em' }}>
              My Medical Network
            </h2>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px', margin: 0 }}>
              Connect with verified doctors, residents, and medical students across top healthcare institutions
            </p>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.08)', padding: '10px 18px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '18px', fontWeight: 700 }}>1,280</div>
              <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Connections</div>
            </div>
            <div style={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.08)', padding: '10px 18px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#f59e0b' }}>3</div>
              <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Pending Requests</div>
            </div>
            <div style={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.08)', padding: '10px 18px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '18px', fontWeight: 700 }}>14</div>
              <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Specialty Circles</div>
            </div>
          </div>
        </div>

        {/* Sub-Navigation Pills */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
          {[
            { id: 'peers', label: 'Discover Professionals & Students', icon: Users },
            { id: 'colleges', label: 'Medical Colleges & Hospitals', icon: Building2 },
            { id: 'circles', label: 'Specialty Circles & Groups', icon: Award }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 18px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: 600,
                  backgroundColor: isActive ? '#ffffff' : 'rgba(255,255,255,0.1)',
                  color: isActive ? '#0f766e' : '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={16} /> {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* SEARCH AND FILTERS BAR */}
      <div className="card" style={{ padding: '16px 20px', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '260px', position: 'relative' }}>
          <Search size={16} color="#64748b" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search doctors, medical students, institutions, or specialties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px 10px 40px',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              fontSize: '13px',
              color: '#0f172a',
              outline: 'none'
            }}
          />
        </div>

        <select 
          value={specialty} 
          onChange={(e) => setSpecialty(e.target.value)}
          style={{ padding: '9px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px', color: '#334155', outline: 'none', backgroundColor: '#ffffff' }}
        >
          <option value="All Specialties">All Specialties</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Neurology">Neurology</option>
          <option value="Oncology">Oncology</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Internal Medicine">Internal Medicine</option>
        </select>

        <select 
          value={institution} 
          onChange={(e) => setInstitution(e.target.value)}
          style={{ padding: '9px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px', color: '#334155', outline: 'none', backgroundColor: '#ffffff' }}
        >
          <option value="All Institutions">All Institutions</option>
          <option value="KEM Hospital, Mumbai">KEM Hospital, Mumbai</option>
          <option value="AIIMS, New Delhi">AIIMS, New Delhi</option>
          <option value="Apollo Hospitals">Apollo Hospitals</option>
          <option value="Grant Medical College">Grant Medical College</option>
        </select>

        <select 
          value={roleFilter} 
          onChange={(e) => setRoleFilter(e.target.value)}
          style={{ padding: '9px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px', color: '#334155', outline: 'none', backgroundColor: '#ffffff' }}
        >
          <option value="All Roles">All Roles</option>
          <option value="Senior Doctors">Senior Doctors</option>
          <option value="Residents">Residents</option>
          <option value="Medical Students">MBBS Students</option>
        </select>
      </div>

      {/* TAB CONTENT: DISCOVER PEERS */}
      {activeTab === 'peers' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a' }}>
              Recommended Medical Professionals & Students
            </h3>
            <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 500 }}>Showing 24 verified network profiles</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {alumniNetwork.map((doc) => {
              const isConnected = connectedIds[doc.id];
              return (
                <div 
                  key={doc.id} 
                  className="card" 
                  style={{ 
                    padding: '0', 
                    overflow: 'hidden', 
                    display: 'flex', 
                    flexDirection: 'column',
                    justify: 'space-between',
                    transition: 'box-shadow 0.2s ease'
                  }}
                >
                  {/* Card Header */}
                  <div style={{ height: '64px', background: 'linear-gradient(135deg, #0f766e 0%, #334155 100%)' }} />

                  <div style={{ padding: '0 16px 16px', marginTop: '-32px', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img 
                      src={doc.avatar} 
                      alt={doc.name} 
                      style={{ 
                        width: '64px', 
                        height: '64px', 
                        borderRadius: '50%', 
                        border: '3px solid #ffffff', 
                        objectFit: 'cover',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
                      }} 
                    />

                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '8px' }}>
                      <h4 
                        style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', margin: 0, cursor: 'pointer' }}
                        onClick={() => onNavigate('profile')}
                      >
                        {doc.name}
                      </h4>
                      {doc.verified && (
                        <CheckCircle2 size={14} color="#0f766e" style={{ fill: '#dcfce7' }} title="Verified Practitioner" />
                      )}
                    </div>

                    <div style={{ fontSize: '11px', fontWeight: 600, color: '#0f766e', marginTop: '3px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {doc.title}
                    </div>

                    <div style={{ fontSize: '12px', color: '#475569', marginTop: '4px' }}>
                      {doc.institution}
                    </div>

                    <div style={{ fontSize: '11px', color: '#64748b', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Users size={12} color="#64748b" /> 14 mutual connections
                    </div>

                    <div style={{ marginTop: 'auto', paddingTop: '16px', width: '100%', display: 'flex', gap: '8px' }}>
                      <button 
                        onClick={() => handleConnect(doc.id)}
                        style={{ 
                          flex: 1,
                          padding: '8px 12px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: 600,
                          backgroundColor: isConnected ? '#dcfce7' : '#0f766e',
                          color: isConnected ? '#15803d' : '#ffffff',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px'
                        }}
                      >
                        {isConnected ? <UserCheck size={14} /> : <UserPlus size={14} />}
                        {isConnected ? 'Connected' : 'Connect'}
                      </button>

                      <button
                        onClick={() => onNavigate('messages')}
                        style={{
                          padding: '8px',
                          borderRadius: '50%',
                          border: '1px solid #cbd5e1',
                          backgroundColor: '#ffffff',
                          color: '#475569',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        title="Send Message"
                      >
                        <MessageSquare size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB CONTENT: MEDICAL COLLEGES */}
      {activeTab === 'colleges' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {medicalColleges.map((mc) => (
            <div key={mc.id} className="card" style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '18px' }}>
              <img 
                src={mc.avatar} 
                alt={mc.name} 
                style={{ width: '76px', height: '76px', borderRadius: '8px', objectFit: 'cover' }} 
              />
              <div style={{ flex: 1 }}>
                <h4 
                  style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', margin: 0, cursor: 'pointer' }}
                  onClick={() => onNavigate('institution')}
                >
                  {mc.name}
                </h4>
                <div style={{ fontSize: '12px', color: '#64748b', marginTop: '3px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={13} color="#64748b" /> {mc.location}
                </div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px', fontWeight: 500 }}>
                  {mc.alumniCount}
                </div>

                <button 
                  onClick={() => onNavigate('institution')}
                  style={{ 
                    marginTop: '10px', 
                    padding: '6px 14px', 
                    borderRadius: '16px', 
                    border: '1px solid #0f766e', 
                    color: '#0f766e',
                    backgroundColor: 'transparent',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  View Institution Page
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB CONTENT: SPECIALTY CIRCLES */}
      {activeTab === 'circles' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
          {specialtyCircles.map((circle) => {
            const Icon = circle.Icon;
            return (
              <div key={circle.id} className="card" style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '18px' }}>
                <div style={{ padding: '12px', backgroundColor: '#ccfbf1', borderRadius: '8px', color: '#0f766e' }}>
                  <Icon size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                    {circle.name}
                  </h4>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                    {circle.members}
                  </div>
                  <button
                    onClick={() => alert(`Joined ${circle.name}`)}
                    style={{
                      marginTop: '10px',
                      padding: '5px 14px',
                      borderRadius: '16px',
                      backgroundColor: '#0f766e',
                      color: '#ffffff',
                      fontSize: '11px',
                      fontWeight: 600,
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Join Circle
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}

export default NetworkPage;
