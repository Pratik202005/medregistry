import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HubPage from './pages/HubPage';
import OpportunitiesPage from './pages/OpportunitiesPage';
import ProfilePage from './pages/ProfilePage';
import NetworkPage from './pages/NetworkPage';
import InstitutionPage from './pages/InstitutionPage';
import MessagesPage from './pages/MessagesPage';
import SupportPage from './pages/SupportPage';
import ArchivePage from './pages/ArchivePage';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState('hub');

  const renderContent = () => {
    switch (currentTab) {
      case 'hub':
        return <HubPage onNavigate={setCurrentTab} />;
      case 'network':
        return <NetworkPage onNavigate={setCurrentTab} />;
      case 'opportunities':
        return <OpportunitiesPage />;
      case 'messages':
        return <MessagesPage onNavigate={setCurrentTab} />;
      case 'profile':
        return <ProfilePage onNavigate={setCurrentTab} />;
      case 'institution':
        return <InstitutionPage />;
      case 'support':
        return <SupportPage />;
      case 'archive':
        return <ArchivePage />;
      default:
        return <HubPage onNavigate={setCurrentTab} />;
    }
  };

  return (
    <div className="app-container">
      <Header onNavigate={setCurrentTab} />
      <div className="app-body">
        <Sidebar currentTab={currentTab} onNavigate={setCurrentTab} />
        <main className="app-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
