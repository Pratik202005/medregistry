import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';
import { currentUser } from '../data/mockData';

export function Header({ onNavigate }) {
  return (
    <header className="app-header">
      <div className="brand-logo" onClick={() => onNavigate('hub')}>
        <h1 className="brand-title">MedRegistry India</h1>
      </div>

      <div className="header-search">
        <Search size={18} color="#88999b" />
        <input 
          type="text" 
          placeholder="Search registry..." 
        />
      </div>

      <div className="header-actions">
        <button 
          className="icon-btn" 
          title="Notifications"
          onClick={() => alert("Notifications: You have 3 new institutional verification updates.")}
        >
          <Bell size={20} />
          <span className="notification-badge"></span>
        </button>

        <button 
          className="icon-btn" 
          title="Settings"
          onClick={() => alert("Settings panel opening...")}
        >
          <Settings size={20} />
        </button>

        <img 
          src={currentUser.avatar} 
          alt={currentUser.name}
          className="header-profile-avatar"
          title={`View Profile (${currentUser.name})`}
          onClick={() => onNavigate('profile')}
        />
      </div>
    </header>
  );
}

export default Header;
