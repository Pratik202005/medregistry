import React, { useState } from 'react';
import { Search, Paperclip, Send, Lock, CheckCheck, CheckCircle2, FileText, Image, MoreVertical } from 'lucide-react';
import { chatConversations, peerProfiles, currentUser } from '../data/mockData';

export function MessagesPage({ onNavigate }) {
  const [activeConvId, setActiveConvId] = useState('conv-1');
  const [filterText, setFilterText] = useState('');
  const [conversations, setConversations] = useState(chatConversations);
  const [inputMessage, setInputMessage] = useState('');

  const activeConv = conversations.find((c) => c.id === activeConvId) || conversations[0];

  const filteredConversations = conversations.filter(c => 
    c.name.toLowerCase().includes(filterText.toLowerCase()) || 
    c.dept.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMsg = {
      id: `msg-${Date.now()}`,
      sender: 'self',
      text: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'read'
    };

    setConversations(prev => prev.map(conv => {
      if (conv.id === activeConvId) {
        return {
          ...conv,
          preview: inputMessage,
          time: newMsg.time,
          messages: [...conv.messages, newMsg]
        };
      }
      return conv;
    }));

    setInputMessage('');
  };

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 64px)', overflow: 'hidden', maxWidth: '1400px', margin: '0 auto', borderLeft: '1px solid #e1e7e7', borderRight: '1px solid #e1e7e7' }}>
      
      {/* 1. Left Conversation List */}
      <div style={{ width: '360px', borderRight: '1px solid #e1e7e7', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid #edf1f1', backgroundColor: '#fafcfc' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1c2826', margin: 0 }}>
              Medical Consults & Messages
            </h3>
          </div>

          <div style={{ position: 'relative' }}>
            <Search size={16} color="#88999b" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder="Search conversations by doctor or specialty..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px 8px 36px',
                borderRadius: '20px',
                border: '1px solid #c8d5d6',
                fontSize: '13px',
                outline: 'none'
              }}
            />
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto' }}>
          {filteredConversations.map((conv) => {
            const isSelected = conv.id === activeConvId;
            return (
              <div 
                key={conv.id}
                style={{ 
                  padding: '16px', 
                  borderBottom: '1px solid #edf1f1', 
                  cursor: 'pointer',
                  backgroundColor: isSelected ? '#e2f4eb' : 'transparent',
                  transition: 'background-color 0.15s ease'
                }}
                onClick={() => setActiveConvId(conv.id)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#1c2826', margin: 0 }}>
                      {conv.name}
                    </h4>
                    <CheckCircle2 size={14} color="#0e5c63" style={{ fill: '#e2f4eb' }} title="Verified" />
                  </div>
                  <span style={{ fontSize: '11px', color: '#88999b' }}>
                    {conv.time}
                  </span>
                </div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#0e5c63', marginBottom: '4px' }}>
                  {conv.dept}
                </div>
                <p style={{ 
                  fontSize: '12px', 
                  color: '#5b6b6c', 
                  whiteSpace: 'nowrap', 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis',
                  margin: 0 
                }}>
                  {conv.preview}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Middle Active Chat Canvas */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
        {/* Chat Top Banner */}
        <div style={{ padding: '16px 24px', borderBottom: '1px solid #edf1f1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fafcfc' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#0e5c63', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '16px' }}>
                {activeConv.name.charAt(4) || 'D'}
              </div>
              <span style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#0d7348', border: '2px solid #ffffff' }} title="Active Now" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1c2826', margin: 0 }}>
                  {activeConv.name}
                </h3>
                <CheckCircle2 size={16} color="#0e5c63" style={{ fill: '#e2f4eb' }} />
              </div>
              <div style={{ fontSize: '12px', color: '#5b6b6c' }}>
                {activeConv.dept} • <span style={{ color: '#0d7348', fontWeight: 600 }}>Active Medical Registry Channel</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button 
              onClick={() => onNavigate('profile')}
              style={{ fontSize: '12px', fontWeight: 700, color: '#0e5c63', padding: '6px 14px', borderRadius: '16px', border: '1px solid #0e5c63', background: 'none', cursor: 'pointer' }}
            >
              View Doctor Profile
            </button>
          </div>
        </div>

        {/* Encrypted Disclaimer */}
        <div style={{ backgroundColor: '#f6f8f8', padding: '8px 16px', textAlign: 'center', fontSize: '11px', color: '#5b6b6c', borderBottom: '1px solid #edf1f1', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <Lock size={12} color="#0e5c63" /> Verified End-to-End Encrypted Channel for Clinical Consultations & Case Sharing
        </div>

        {/* Message Stream */}
        <div style={{ flex: 1, padding: '20px 24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {activeConv.messages.map((msg) => {
            const isSelf = msg.sender === 'self';
            return (
              <div key={msg.id} style={{ alignSelf: isSelf ? 'flex-end' : 'flex-start', maxWidth: '70%' }}>
                <div 
                  style={{ 
                    padding: '12px 16px', 
                    borderRadius: isSelf ? '16px 16px 2px 16px' : '16px 16px 16px 2px', 
                    backgroundColor: isSelf ? '#0e5c63' : '#f1f5f5', 
                    color: isSelf ? '#ffffff' : '#1c2826',
                    fontSize: '13px',
                    lineHeight: 1.5,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                  }}
                >
                  {msg.text}
                </div>
                <div style={{ fontSize: '10px', color: '#88999b', marginTop: '4px', textAlign: isSelf ? 'right' : 'left' }}>
                  {msg.time} {isSelf && '• Read'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSendMessage} style={{ padding: '16px 24px', borderTop: '1px solid #edf1f1', backgroundColor: '#ffffff', display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button 
            type="button"
            onClick={() => alert("Upload Case DICOM / ECG / PDF attached!")}
            style={{ color: '#0e5c63', background: 'none', border: 'none', cursor: 'pointer', padding: '6px' }}
            title="Attach Clinical Document or DICOM"
          >
            <Paperclip size={20} />
          </button>
          
          <input 
            type="text"
            placeholder="Type a clinical response, diagnostic note, or inquiry..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            style={{
              flex: 1,
              padding: '12px 18px',
              borderRadius: '24px',
              border: '1px solid #c8d5d6',
              fontSize: '13px',
              outline: 'none'
            }}
          />

          <button 
            type="submit"
            className="btn btn-primary"
            style={{ padding: '10px 20px', borderRadius: '24px', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
          >
            Send <Send size={14} />
          </button>
        </form>
      </div>

    </div>
  );
}

export default MessagesPage;
