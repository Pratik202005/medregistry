import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Bookmark, CheckCircle2, Send, Clock, Sparkles, Building2, Banknote, Users, Award } from 'lucide-react';
import { clinicalOpportunities } from '../data/mockData';

export function OpportunitiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [selectedType, setSelectedType] = useState('All Types');
  const [appliedJobs, setAppliedJobs] = useState({});
  const [savedJobs, setSavedJobs] = useState({});
  const [applyingJob, setApplyingJob] = useState(null);

  const jobTypes = ['All Types', 'Senior Consultant', 'Resident / Fellow', 'MBBS Elective', 'Locum / Visiting'];

  const handleApply = (jobId) => {
    setAppliedJobs(prev => ({ ...prev, [jobId]: true }));
    setApplyingJob(null);
  };

  const handleToggleSave = (jobId) => {
    setSavedJobs(prev => ({ ...prev, [jobId]: !prev[jobId] }));
  };

  return (
    <div style={{ padding: '24px 32px', maxWidth: '1300px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Search Header Banner */}
      <div className="card" style={{ padding: '24px', background: 'linear-gradient(135deg, #0f766e 0%, #0f172a 100%)', color: '#ffffff', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, margin: 0, letterSpacing: '-0.02em' }}>
          Medical Jobs, Fellowships & Electives
        </h2>
        <p style={{ fontSize: '13px', color: '#cbd5e1', marginTop: '4px', margin: 0 }}>
          Explore clinical opportunities, residency openings, and hospital appointments verified across India
        </p>

        {/* Search Bar */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '20px', backgroundColor: '#ffffff', padding: '6px 12px', borderRadius: '8px', alignItems: 'center' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Search size={18} color="#64748b" />
            <input 
              type="text" 
              placeholder="Search by role, specialty, or hospital name (e.g. Cardiology, AIIMS, Consultant)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', border: 'none', outline: 'none', fontSize: '13px', color: '#0f172a' }}
            />
          </div>

          <div style={{ borderLeft: '1px solid #e2e8f0', paddingLeft: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={16} color="#64748b" />
            <select 
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              style={{ border: 'none', outline: 'none', fontSize: '13px', color: '#334155', fontWeight: 600, background: 'none' }}
            >
              <option value="All Specialties">All Locations / Specialties</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Internal Medicine">Internal Medicine</option>
              <option value="Neurology">Neurology</option>
              <option value="Pediatrics">Pediatrics</option>
            </select>
          </div>

          <button className="btn btn-primary" style={{ padding: '8px 20px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, backgroundColor: '#0f766e', color: '#ffffff' }}>
            Find Jobs
          </button>
        </div>

        {/* Type Filter Pills */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '16px', overflowX: 'auto' }}>
          {jobTypes.map(t => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              style={{
                padding: '6px 14px',
                borderRadius: '16px',
                fontSize: '12px',
                fontWeight: 600,
                backgroundColor: selectedType === t ? '#ffffff' : 'rgba(255,255,255,0.12)',
                color: selectedType === t ? '#0f766e' : '#ffffff',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Layout */}
      <div style={{ display: 'flex', gap: '28px' }}>
        
        {/* Left Job Postings List */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a' }}>
              Recommended Jobs for Your Specialty
            </h3>
            <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 500 }}>Showing {clinicalOpportunities.length} active openings</span>
          </div>

          {clinicalOpportunities.map((job) => {
            const isApplied = appliedJobs[job.id];
            const isSaved = savedJobs[job.id];
            return (
              <div 
                key={job.id} 
                className="card" 
                style={{ 
                  padding: '20px',
                  display: 'flex',
                  gap: '16px',
                  position: 'relative',
                  borderLeft: job.matchScore ? '4px solid #0f766e' : 'none'
                }}
              >
                {/* Hospital Logo / Icon */}
                <div 
                  style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: '8px', 
                    backgroundColor: '#ccfbf1', 
                    color: '#0f766e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Building2 size={24} />
                </div>

                {/* Details */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                        {job.role}
                      </h4>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f766e', marginTop: '2px' }}>
                        {job.institution}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span 
                        className="badge" 
                        style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: 600 }}
                      >
                        {job.matchScore} Match
                      </span>
                      <button 
                        onClick={() => handleToggleSave(job.id)}
                        style={{ background: 'none', border: 'none', color: isSaved ? '#0f766e' : '#64748b', cursor: 'pointer' }}
                      >
                        <Bookmark size={18} fill={isSaved ? '#0f766e' : 'none'} />
                      </button>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#475569', marginTop: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={13} color="#64748b" /> {job.location}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Banknote size={13} color="#64748b" /> ₹2.5L - ₹3.8L / Month
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Users size={13} color="#64748b" /> 24 applicants
                    </span>
                  </div>

                  {job.matchTag && (
                    <div style={{ marginTop: '10px' }}>
                      <span className="badge" style={{ backgroundColor: '#fef3c7', color: '#b45309', fontSize: '11px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Award size={12} /> {job.matchTag}
                      </span>
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
                    <span style={{ fontSize: '11px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} /> {job.status}
                    </span>

                    <button
                      onClick={() => isApplied ? null : setApplyingJob(job)}
                      style={{
                        padding: '6px 16px',
                        borderRadius: '16px',
                        fontSize: '12px',
                        fontWeight: 600,
                        backgroundColor: isApplied ? '#dcfce7' : '#0f766e',
                        color: isApplied ? '#15803d' : '#ffffff',
                        border: 'none',
                        cursor: isApplied ? 'default' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      {isApplied ? <CheckCircle2 size={14} /> : <Send size={14} />}
                      {isApplied ? 'Applied with Registry Credentials' : 'Easy Apply'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Sidebar */}
        <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="card" style={{ padding: '18px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={16} color="#0f766e" /> Registry Matcher
            </h4>
            <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5, margin: 0 }}>
              Your verified NMC registration and degrees automatically boost your match score for senior clinical consultant and residency roles.
            </p>
          </div>

          <div className="card" style={{ padding: '18px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
              My Job Tracker
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#475569' }}>Applied Roles</span>
                <span style={{ fontWeight: 600, color: '#0f766e' }}>{Object.keys(appliedJobs).length}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#475569' }}>Saved Jobs</span>
                <span style={{ fontWeight: 600, color: '#0f766e' }}>{Object.keys(savedJobs).filter(k => savedJobs[k]).length}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Easy Apply Modal */}
      {applyingJob && (
        <div 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            backgroundColor: 'rgba(15, 23, 42, 0.6)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            zIndex: 1000 
          }}
        >
          <div className="card" style={{ width: '480px', padding: '24px', position: 'relative' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
              Easy Apply: {applyingJob.role}
            </h3>
            <p style={{ fontSize: '13px', color: '#475569', marginBottom: '16px' }}>
              Submit your verified MedRegistry Profile & Credentials directly to {applyingJob.institution}.
            </p>

            <div style={{ backgroundColor: '#f8fafc', padding: '14px', borderRadius: '6px', fontSize: '12px', border: '1px solid #e2e8f0', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '6px', color: '#334155' }}>
              <div><strong>Applicant:</strong> Dr. Rajesh Sharma</div>
              <div><strong>Degree:</strong> MBBS, MD, DM (Cardiology)</div>
              <div><strong>NMC Reg:</strong> DEL/1104/1998</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#15803d', fontWeight: 600, marginTop: '2px' }}>
                <CheckCircle2 size={13} /> Verified Medical Practitioner
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button 
                onClick={() => setApplyingJob(null)}
                style={{ padding: '8px 16px', borderRadius: '6px', fontSize: '13px', color: '#475569', border: 'none', background: 'none', cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button 
                onClick={() => handleApply(applyingJob.id)}
                style={{ padding: '8px 20px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, backgroundColor: '#0f766e', color: '#ffffff', border: 'none', cursor: 'pointer' }}
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default OpportunitiesPage;
