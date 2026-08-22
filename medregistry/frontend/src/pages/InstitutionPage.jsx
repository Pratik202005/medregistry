import React from 'react';
import { PlusSquare, CheckCircle2, ShieldCheck, Activity, Users, UserCheck } from 'lucide-react';
import { institutionData } from '../data/mockData';

export function InstitutionPage() {
  return (
    <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Top Banner Card */}
      <div className="card" style={{ padding: '24px 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{ 
              width: '72px', 
              height: '72px', 
              border: '1px solid #e1e7e7', 
              borderRadius: '6px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor: '#f8faf9'
            }}>
              <PlusSquare size={36} color="#0e5c63" />
            </div>

            <div>
              <h1 className="font-serif" style={{ fontSize: '32px', fontWeight: 700, color: '#1c2826' }}>
                {institutionData.name}
              </h1>
              <p style={{ fontSize: '14px', color: '#5b6b6c', marginTop: '2px', marginBottom: '16px' }}>
                {institutionData.address}
              </p>

              <div style={{ display: 'flex', gap: '24px', fontSize: '12px' }}>
                <div>
                  <span style={{ color: '#88999b', fontWeight: 700, display: 'block' }}>EST.</span>
                  <span style={{ color: '#1c2826', fontWeight: 700 }}>{institutionData.est}</span>
                </div>
                <div>
                  <span style={{ color: '#88999b', fontWeight: 700, display: 'block' }}>TYPE</span>
                  <span style={{ color: '#1c2826', fontWeight: 700 }}>{institutionData.type}</span>
                </div>
                <div>
                  <span style={{ color: '#88999b', fontWeight: 700, display: 'block' }}>AFFILIATION</span>
                  <span style={{ color: '#1c2826', fontWeight: 700 }}>{institutionData.affiliation}</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ 
            backgroundColor: '#e2f4eb', 
            color: '#0d7348', 
            padding: '6px 12px', 
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <CheckCircle2 size={16} /> Verified Institution
          </div>
        </div>
      </div>

      {/* Grid Content Area */}
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr 300px', gap: '24px' }}>
        {/* Column 1: Metrics & Accreditations */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Registry Metrics */}
          <div className="card">
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1c2826', marginBottom: '16px' }}>
              Registry Metrics
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                  <span style={{ color: '#5b6b6c' }}>Registered Alumni</span>
                  <strong style={{ color: '#1c2826' }}>{institutionData.metrics.alumni}</strong>
                </div>
                <div style={{ height: '4px', backgroundColor: '#e2e8e8', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '85%', height: '100%', backgroundColor: '#0e5c63' }}></div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                  <span style={{ color: '#5b6b6c' }}>Active Practitioners</span>
                  <strong style={{ color: '#1c2826' }}>{institutionData.metrics.active}</strong>
                </div>
                <div style={{ height: '4px', backgroundColor: '#e2e8e8', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '70%', height: '100%', backgroundColor: '#0e5c63' }}></div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid #edf1f1', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: '#5b6b6c' }}>Verification Rate</span>
                <span style={{ fontSize: '15px', fontWeight: 800, color: '#0d7348' }}>
                  {institutionData.metrics.verificationRate}
                </span>
              </div>
            </div>
          </div>

          {/* Accreditations */}
          <div className="card">
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1c2826', marginBottom: '14px' }}>
              Accreditations
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {institutionData.accreditations.map((acc, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#1c2826' }}>
                  <CheckCircle2 size={16} color="#0d7348" />
                  {acc}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2: Postgraduate Feeder Pathways Chart */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1c2826' }}>
              Postgraduate Feeder Pathways
            </h3>
            <span style={{ fontSize: '11px', color: '#88999b' }}>
              Data Source: MedRegistry India
            </span>
          </div>

          <p style={{ fontSize: '13px', color: '#5b6b6c', marginBottom: '24px' }}>
            Analysis of transition patterns from MBBS at KEM to MD/MS specializations across Indian institutions over the last 5 years.
          </p>

          {/* Visual Diagram */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '28px', padding: '20px 0' }}>
            {/* Source Box */}
            <div style={{ 
              border: '2px solid #0e5c63', 
              padding: '16px 20px', 
              borderRadius: '4px', 
              textAlign: 'center',
              backgroundColor: '#f8faf9'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#1c2826' }}>MBBS (KEM)</div>
              <div style={{ fontSize: '11px', color: '#5b6b6c', marginTop: '2px' }}>N=1250</div>
            </div>

            {/* Connecting Pathways */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {institutionData.pathways.map((pw, idx) => (
                <div key={idx} style={{ 
                  display: 'flex', 
                  justify: 'space-between', 
                  alignItems: 'center', 
                  border: '1px solid #e1e7e7', 
                  borderRadius: '4px', 
                  padding: '10px 14px',
                  backgroundColor: '#ffffff'
                }}>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#1c2826' }}>{pw.target}</div>
                    {pw.institution && (
                      <div style={{ fontSize: '11px', color: '#88999b' }}>{pw.institution}</div>
                    )}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#0e5c63' }}>
                    {pw.percentage}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Column 3: Alumni Log */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1c2826' }}>Alumni Log</h3>
            <button style={{ fontSize: '11px', fontWeight: 700, color: '#5b6b6c', letterSpacing: '0.4px' }}>
              VIEW ALL
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {institutionData.alumniLog.map((log) => (
              <div key={log.id} style={{ display: 'flex', gap: '10px', fontSize: '12px' }}>
                <div style={{ marginTop: '2px' }}>
                  {log.type === 'verification' ? (
                    <UserCheck size={16} color="#0d7348" />
                  ) : log.type === 'disciplinary' ? (
                    <Activity size={16} color="#c53030" />
                  ) : (
                    <Users size={16} color="#0e5c63" />
                  )}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#1c2826' }}>{log.title}</div>
                  <div style={{ color: '#5b6b6c', marginTop: '2px' }}>{log.detail}</div>
                  <div style={{ color: '#88999b', fontSize: '11px', marginTop: '4px' }}>{log.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstitutionPage;
