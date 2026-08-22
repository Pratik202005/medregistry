import React, { useState } from 'react';
import { Search, Paperclip, Send, Lock, CheckCheck, CheckCircle2 } from 'lucide-react';
import { chatConversations, peerProfiles, currentUser } from '../data/mockData';

export function MessagesPage({ onNavigate }) {
  const [activeConvId, setActiveConvId] = useState('conv-1');
  const [filterText, setFilterText] = useState('');
  const [conversations, setConversations] = useState(chatConversations);
  const [inputMessage, setInputMessage] = useState('');

  const activeConv = conversations.find((c) => c.id === activeConvId) || conversations[0];
  const peerInfo = peerProfiles['sameer-desai'];

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
    <div style={{ display: 'flex', height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
      {/* 1. Left Conversation List */}
      <div style={{ width: '320px', borderRight: '1px solid #e1e7e7', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid #edf1f1' }}>
          <div className="header-search" style={{ width: '100%' }}>
            <Search size={16} color="#88999b" />
            <input 
              type="text" 
              placeholder="Filter conversations..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
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
                  backgroundColor: isSelected ? '#f1f5f5' : 'transparent',
                  transition: 'background-color 0.15s ease'
                }}
                onClick={() => setActiveConvId(conv.id)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#1c2826' }}>
                    {conv.name}
                  </h4>
                  <span style={{ fontSize: '11px', color: '#88999b' }}>
                    {conv.time}
                  </span>
                </div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#5b6b6c', marginBottom: '6px' }}>
                  {conv.dept}
                </div>
                <p style={{ 
                  fontSize: '12px', 
                  color: '#88999b', 
                  whiteSpace: 'nowrap', 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis' 
                }}>
                  {conv.preview}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Middle Main Chat Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#f4f6f6' }}>
        {/* Chat Header */}
        <div style={{ 
          height: '60px', 
          backgroundColor: '#ffffff', 
          borderBottom: '1px solid #e1e7e7', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: '0 20px' 
        }}>
          <div>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#1c2826', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {activeConv.name}
            </h3>
            <div style={{ fontSize: '11px', color: '#0d7348', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
              <CheckCircle2 size={12} /> Verified Practitioner
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button className="icon-btn" title="Attach Document" onClick={() => alert("Upload file preview...")}>
              <Paperclip size={18} />
            </button>
          </div>
        </div>

        {/* Messages Body */}
        <div style={{ flex: 1, padding: '20px 24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ textAlign: 'center', margin: '8px 0' }}>
            <span style={{ fontSize: '11px', color: '#5b6b6c', backgroundColor: '#e1e7e7', padding: '4px 12px', borderRadius: '12px', fontWeight: 600 }}>
              Today, 12 Oct 2023
            </span>
          </div>

          {activeConv.messages.map((msg) => {
            const isPeer = msg.sender === 'peer';
            return (
              <div 
                key={msg.id} 
                style={{ 
                  display: 'flex', 
                  gap: '10px', 
                  justifyContent: isPeer ? 'flex-start' : 'flex-end',
                  alignItems: 'flex-end'
                }}
              >
                {isPeer && (
                  <img 
                    src={peerInfo.avatar} 
                    alt={activeConv.name}
                    style={{ width: '32px', height: '32px', borderRadius: '4px', objectFit: 'cover' }} 
                  />
                )}

                <div style={{ maxWidth: '420px' }}>
                  <div style={{ 
                    backgroundColor: isPeer ? '#ffffff' : '#0e5c63', 
                    color: isPeer ? '#1c2826' : '#ffffff', 
                    padding: '12px 16px', 
                    borderRadius: '8px', 
                    fontSize: '13px', 
                    lineHeight: 1.5,
                    border: isPeer ? '1px solid #e1e7e7' : 'none',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    {msg.text}
                  </div>

                  <div style={{ 
                    fontSize: '10px', 
                    color: '#88999b', 
                    marginTop: '4px', 
                    textAlign: isPeer ? 'left' : 'right',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isPeer ? 'flex-start' : 'flex-end',
                    gap: '4px'
                  }}>
                    {msg.time}
                    {!isPeer && <CheckCheck size={12} color="#0e5c63" />}
                  </div>
                </div>

                {!isPeer && (
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    backgroundColor: '#0a474d', 
                    color: '#ffffff', 
                    borderRadius: '4px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 700
                  }}>
                    RS
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Input Bar */}
        <div style={{ padding: '16px 20px', backgroundColor: '#ffffff', borderTop: '1px solid #e1e7e7' }}>
          <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <input 
              type="text" 
              placeholder="Type a secure message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              style={{ 
                flex: 1, 
                padding: '12px 16px', 
                border: '1px solid #e1e7e7', 
                borderRadius: '6px', 
                fontSize: '13px',
                outline: 'none'
              }}
            />
            <button 
              type="submit" 
              style={{ 
                backgroundColor: '#0e5c63', 
                color: '#ffffff', 
                padding: '10px 20px', 
                borderRadius: '6px', 
                fontSize: '13px', 
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              Send <Send size={14} />
            </button>
          </form>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#88999b', marginTop: '8px', justifyContent: 'center' }}>
            <Lock size={10} /> End-to-end encrypted medical communication
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagesPage;
