import React, { useState } from 'react';
import { CheckCircle2, UserPlus } from 'lucide-react';
import { alumniNetwork } from '../data/mockData';

export function NetworkPage({ onNavigate }) {
  const [specialty, setSpecialty] = useState('All Specialties');
  const [institution, setInstitution] = useState('All Institutions');
  const [batchYear, setBatchYear] = useState('');
  const [connectedIds, setConnectedIds] = useState({});

  const handleConnect = (id, name) => {
    setConnectedIds((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div style={{ padding: '24px 32px', display: 'flex', gap: '28px' }}>
      {/* Left Filters */}
      <div style={{ width: '260px', flexShrink: 0 }}>
        <div className="filter-panel">
          <h3 className="filter-title">Filters</h3>

          <div className="filter-group">
            <label className="filter-label">SPECIALTY</label>
            <select 
              className="filter-select"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            >
              <option value="All Specialties">All Specialties</option>
              <option value="Oncology">Oncology</option>
              <option value="Neurology">Neurology</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Orthopedics">Orthopedics</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">INSTITUTION</label>
            <select 
              className="filter-select"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
            >
              <option value="All Institutions">All Institutions</option>
              <option value="KEM Hospital, Mumbai">KEM Hospital, Mumbai</option>
              <option value="AIIMS, New Delhi">AIIMS, New Delhi</option>
              <option value="Tata Memorial Center">Tata Memorial Center</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">BATCH YEAR</label>
            <input 
              type="text" 
              className="filter-input"
              placeholder="e.g. 2010"
              value={batchYear}
              onChange={(e) => setBatchYear(e.target.value)}
            />
          </div>

          <button 
            className="btn-reset-filters"
            onClick={() => {
              setSpecialty('All Specialties');
              setInstitution('All Institutions');
              setBatchYear('');
            }}
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Main Directory Area */}
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '20px' }}>
          <h2 className="font-serif" style={{ fontSize: '32px', color: '#1c2826', fontWeight: 700 }}>
            Alumni Network
          </h2>
          <span style={{ fontSize: '13px', color: '#5b6b6c', fontWeight: 600 }}>
            Showing 24 verified professionals
          </span>
        </div>

        {/* Doctor Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {alumniNetwork.map((doc) => (
            <div key={doc.id} className="card" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <img 
                src={doc.avatar} 
                alt={doc.name} 
                style={{ width: '80px', height: '80px', borderRadius: '4px', objectFit: 'cover', flexShrink: 0 }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <h3 
                    style={{ fontSize: '17px', fontWeight: 700, color: '#0e5c63', cursor: 'pointer' }}
                    onClick={() => onNavigate('profile')}
                  >
                    {doc.name}
                  </h3>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', fontSize: '10px', color: '#0d7348', backgroundColor: '#e2f4eb', padding: '1px 6px', borderRadius: '3px', fontWeight: 700 }}>
                    <CheckCircle2 size={10} /> Verified
                  </span>
                </div>

                <div style={{ fontSize: '11px', fontWeight: 700, color: '#5b6b6c', textTransform: 'uppercase', letterSpacing: '0.4px', marginTop: '2px' }}>
                  {doc.title}
                </div>
                <div style={{ fontSize: '12px', color: '#1c2826', marginTop: '2px' }}>
                  {doc.institution}
                </div>
                <div style={{ fontSize: '11px', color: '#88999b', marginTop: '2px' }}>
                  Reg. No: {doc.regNo}
                </div>

                <button 
                  style={{ 
                    marginTop: '12px', 
                    padding: '6px 16px', 
                    backgroundColor: connectedIds[doc.id] ? '#e2f4eb' : '#0e5c63', 
                    color: connectedIds[doc.id] ? '#0d7348' : '#ffffff', 
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                  onClick={() => handleConnect(doc.id, doc.name)}
                >
                  {connectedIds[doc.id] ? 'Connected' : (
                    <>
                      <UserPlus size={14} /> Connect
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NetworkPage;
