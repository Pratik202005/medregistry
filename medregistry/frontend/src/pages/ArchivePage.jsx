import React from 'react';
import { Archive, FileText, Download } from 'lucide-react';

export function ArchivePage() {
  const archives = [
    { name: 'KEM_Cardio_Protocol_v2.pdf', date: 'Oct 12, 2023', category: 'Policy Guidelines', size: '1.2 MB' },
    { name: 'Trauma_Care_Standard_Operating_Procedure.pdf', date: 'Sep 28, 2023', category: 'Clinical Guidelines', size: '3.4 MB' },
    { name: 'NMC_Practitioner_Code_2023.pdf', date: 'Aug 14, 2023', category: 'Regulatory Code', size: '850 KB' }
  ];

  return (
    <div style={{ padding: '24px 32px', maxWidth: '900px' }}>
      <h2 className="font-serif" style={{ fontSize: '32px', color: '#1c2826', fontWeight: 700, marginBottom: '8px' }}>
        Archived Records & Guidelines
      </h2>
      <p style={{ color: '#5b6b6c', fontSize: '14px', marginBottom: '24px' }}>
        Your saved institutional guidelines, bookmarked clinical protocols, and offline reference documents.
      </p>

      <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '2fr 1fr 1fr 1fr', 
          padding: '12px 20px', 
          backgroundColor: '#f8faf9', 
          borderBottom: '1px solid #e1e7e7',
          fontSize: '11px',
          fontWeight: 700,
          color: '#5b6b6c',
          letterSpacing: '0.4px'
        }}>
          <div>DOCUMENT NAME</div>
          <div>CATEGORY</div>
          <div>DATE SAVED</div>
          <div>ACTION</div>
        </div>

        {archives.map((item, idx) => (
          <div key={idx} style={{ 
            display: 'grid', 
            gridTemplateColumns: '2fr 1fr 1fr 1fr', 
            padding: '16px 20px', 
            borderBottom: '1px solid #edf1f1',
            alignItems: 'center',
            fontSize: '13px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700, color: '#1c2826' }}>
              <FileText size={18} color="#0e5c63" />
              {item.name}
            </div>
            <div style={{ color: '#5b6b6c' }}>{item.category}</div>
            <div style={{ color: '#88999b', fontSize: '12px' }}>{item.date}</div>
            <div>
              <button 
                style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#0e5c63', fontWeight: 700, fontSize: '12px' }}
                onClick={() => alert(`Downloading ${item.name}...`)}
              >
                <Download size={14} /> {item.size}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArchivePage;
