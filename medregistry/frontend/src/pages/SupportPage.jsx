import React from 'react';
import { HelpCircle, FileText, PhoneCall, ShieldCheck } from 'lucide-react';

export function SupportPage() {
  return (
    <div style={{ padding: '24px 32px', maxWidth: '900px' }}>
      <h2 className="font-serif" style={{ fontSize: '32px', color: '#1c2826', fontWeight: 700, marginBottom: '8px' }}>
        Support & Verification Desk
      </h2>
      <p style={{ color: '#5b6b6c', fontSize: '14px', marginBottom: '24px' }}>
        Get assistance with medical registration verification, institutional transfers, or technical support.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
        <div className="card">
          <ShieldCheck size={28} color="#0e5c63" style={{ marginBottom: '12px' }} />
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1c2826', marginBottom: '6px' }}>
            Credential Verification Help
          </h3>
          <p style={{ fontSize: '13px', color: '#5b6b6c', marginBottom: '14px' }}>
            Learn how state medical councils and National Medical Commission (NMC) verify practitioner registration records.
          </p>
          <button style={{ color: '#0e5c63', fontWeight: 700, fontSize: '12px' }}>
            View Verification Guidelines →
          </button>
        </div>

        <div className="card">
          <PhoneCall size={28} color="#0e5c63" style={{ marginBottom: '12px' }} />
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1c2826', marginBottom: '6px' }}>
            Institutional Desk Support
          </h3>
          <p style={{ fontSize: '13px', color: '#5b6b6c', marginBottom: '14px' }}>
            Direct support line for Dean's offices, hospital HR departments, and residency program directors.
          </p>
          <button style={{ color: '#0e5c63', fontWeight: 700, fontSize: '12px' }}>
            Contact Support Desk →
          </button>
        </div>
      </div>

      <div className="card">
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1c2826', marginBottom: '16px' }}>
          Frequently Asked Questions
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13px' }}>
          <div>
            <strong style={{ color: '#1c2826' }}>Q: How long does credential verification take?</strong>
            <p style={{ color: '#5b6b6c', marginTop: '2px' }}>Automated Dean's office verification typically completes within 24-48 hours.</p>
          </div>
          <div>
            <strong style={{ color: '#1c2826' }}>Q: Can I update my current hospital affiliation?</strong>
            <p style={{ color: '#5b6b6c', marginTop: '2px' }}>Yes, you can request an institutional update from your Profile page with your appointment letter.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportPage;
