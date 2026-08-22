import React, { useState } from 'react';
import { MapPin, Clock } from 'lucide-react';
import { clinicalOpportunities } from '../data/mockData';

export function OpportunitiesPage() {
  const [specialty, setSpecialty] = useState('Cardiology');
  const [city, setCity] = useState('Delhi');
  const [govHosp, setGovHosp] = useState(true);
  const [pvtClinic, setPvtClinic] = useState(true);
  const [researchInst, setResearchInst] = useState(false);
  const [experience, setExperience] = useState('Any Experience');
  const [salary, setSalary] = useState('Any Salary');
  const [fullTime, setFullTime] = useState(true);
  const [partTime, setPartTime] = useState(false);
  const [locum, setLocum] = useState(false);

  const resetFilters = () => {
    setSpecialty('Cardiology');
    setCity('Delhi');
    setGovHosp(true);
    setPvtClinic(true);
    setResearchInst(false);
    setExperience('Any Experience');
    setSalary('Any Salary');
    setFullTime(true);
    setPartTime(false);
    setLocum(false);
  };

  return (
    <div style={{ padding: '24px 32px', display: 'flex', gap: '28px' }}>
      {/* Filters Sidebar */}
      <div style={{ width: '260px', flexShrink: 0 }}>
        <div className="filter-panel">
          <h3 className="filter-title">Filters</h3>

          {/* Specialty */}
          <div className="filter-group">
            <label className="filter-label">SPECIALTY</label>
            <select 
              className="filter-select"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            >
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Internal Medicine">Internal Medicine</option>
              <option value="Pediatrics">Pediatrics</option>
            </select>
          </div>

          {/* City */}
          <div className="filter-group">
            <label className="filter-label">CITY</label>
            <select 
              className="filter-select"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Gurugram">Gurugram</option>
            </select>
          </div>

          {/* Institution Type */}
          <div className="filter-group">
            <label className="filter-label">INSTITUTION TYPE</label>
            <div className="filter-checkbox-group">
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={govHosp} 
                  onChange={(e) => setGovHosp(e.target.checked)} 
                />
                Government Hospital
              </label>
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={pvtClinic} 
                  onChange={(e) => setPvtClinic(e.target.checked)} 
                />
                Private Clinic
              </label>
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={researchInst} 
                  onChange={(e) => setResearchInst(e.target.checked)} 
                />
                Research Institute
              </label>
            </div>
          </div>

          {/* Experience Level */}
          <div className="filter-group">
            <label className="filter-label">EXPERIENCE LEVEL</label>
            <select 
              className="filter-select"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            >
              <option value="Any Experience">Any Experience</option>
              <option value="0-3 Years">0-3 Years</option>
              <option value="3-8 Years">3-8 Years</option>
              <option value="8+ Years">8+ Years</option>
            </select>
          </div>

          {/* Salary Range */}
          <div className="filter-group">
            <label className="filter-label">SALARY RANGE (MONTHLY)</label>
            <select 
              className="filter-select"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            >
              <option value="Any Salary">Any Salary</option>
              <option value="₹1.5L - ₹3L">₹1.5L - ₹3L</option>
              <option value="₹3L - ₹5L">₹3L - ₹5L</option>
              <option value="₹5L+">₹5L+</option>
            </select>
          </div>

          {/* Employment Type */}
          <div className="filter-group">
            <label className="filter-label">EMPLOYMENT TYPE</label>
            <div className="filter-checkbox-group">
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={fullTime} 
                  onChange={(e) => setFullTime(e.target.checked)} 
                />
                Full-time
              </label>
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={partTime} 
                  onChange={(e) => setPartTime(e.target.checked)} 
                />
                Part-time
              </label>
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={locum} 
                  onChange={(e) => setLocum(e.target.checked)} 
                />
                Locum
              </label>
            </div>
          </div>

          <button className="btn-reset-filters" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
      </div>

      {/* Main Opportunities Table */}
      <div style={{ flex: 1 }}>
        <div style={{ marginBottom: '20px' }}>
          <h2 className="font-serif" style={{ fontSize: '32px', color: '#1c2826', fontWeight: 700 }}>
            Clinical Opportunities
          </h2>
          <p style={{ color: '#5b6b6c', fontSize: '14px', marginTop: '2px' }}>
            Showing 42 matching roles based on your registry profile.
          </p>
        </div>

        <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
          {/* Table Header */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '2.5fr 1.5fr 1fr 1.2fr', 
            padding: '12px 20px', 
            backgroundColor: '#f8faf9', 
            borderBottom: '1px solid #e1e7e7',
            fontSize: '11px',
            fontWeight: 700,
            color: '#5b6b6c',
            letterSpacing: '0.4px'
          }}>
            <div>ROLE & INSTITUTION</div>
            <div>LOCATION</div>
            <div>MATCH SCORE</div>
            <div>STATUS / TAGS</div>
          </div>

          {/* Table Rows */}
          {clinicalOpportunities.map((job) => (
            <div 
              key={job.id} 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: '2.5fr 1.5fr 1fr 1.2fr', 
                padding: '18px 20px', 
                borderBottom: '1px solid #edf1f1',
                alignItems: 'center'
              }}
            >
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0e5c63', marginBottom: '2px', cursor: 'pointer' }}>
                  {job.role}
                </h4>
                <div style={{ fontSize: '13px', color: '#5b6b6c' }}>
                  🏥 {job.institution}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#5b6b6c' }}>
                <MapPin size={14} color="#88999b" />
                {job.location}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '18px', fontWeight: 800, color: '#1c2826' }}>
                  {job.matchScore}
                </span>
                {job.matchTag && (
                  <span className="badge" style={{ backgroundColor: '#ffeedb', color: '#b66113', fontSize: '10px' }}>
                    {job.matchTag}
                  </span>
                )}
              </div>

              <div>
                {job.statusType === 'alert' ? (
                  <span className="badge badge-alert" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} /> {job.status}
                  </span>
                ) : (
                  <span className="badge" style={{ backgroundColor: '#e2e8e8', color: '#495057' }}>
                    {job.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OpportunitiesPage;
