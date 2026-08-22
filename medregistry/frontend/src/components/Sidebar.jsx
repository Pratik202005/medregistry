import React from 'react';
import { LayoutGrid, Users, Briefcase, MessageSquare, HelpCircle, Archive } from 'lucide-react';
import { currentUser } from '../data/mockData';

export function Sidebar({ currentTab, onNavigate }) {
  const mainNavItems = [
    { id: 'hub', label: 'Hub', icon: LayoutGrid },
    { id: 'network', label: 'Network', icon: Users },
    { id: 'opportunities', label: 'Opportunities', icon: Briefcase },
    { id: 'messages', label: 'Messages', icon: MessageSquare }
  ];

  const bottomNavItems = [
    { id: 'support', label: 'Support', icon: HelpCircle },
    { id: 'archive', label: 'Archive', icon: Archive }
  ];

  return (
    <aside className="app-sidebar">
      <div>
        <nav className="sidebar-menu">
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                className={`sidebar-item ${isActive ? 'active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div>
        <div className="sidebar-divider" />
        <nav className="sidebar-menu">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                className={`sidebar-item ${isActive ? 'active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
