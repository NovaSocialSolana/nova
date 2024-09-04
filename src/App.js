import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Home from './components/Home';
import Profile from './components/Profile';
import Leaderboard from './components/Leaderboard';
import TradingDashboard from './components/TradingDashboard';
import SidebarMenu from './components/SidebarMenu';
import './styles/main.scss';

function AppContent() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [userData, setUserData] = useState(null);
  const { darkMode, toggleDarkMode } = useTheme();

  const connectWallet = async () => {
    const mockAddress = "0x1234...5678";
    setWalletAddress(mockAddress);
    setUserData({ username: "Mock User", address: mockAddress, views: 100 });
  };

  useEffect(() => {
    const checkWalletConnection = async () => {
      // Implement actual wallet connection check
    };
    checkWalletConnection();
  }, []);

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <SidebarMenu />
        <div className="main-content">
          <nav className="navbar">
            <div className="navbar-content">
              <div className="nav-section">
                <Link to="/" className="nav-brand">NOVA</Link>
                <Link to="/profile" className="profile-page"></Link>
              </div>
              <div className="nav-section nav-center">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/leaderboard" className="nav-item">Leaderboard</Link>
              </div>
              <div className="nav-section nav-right">
                {walletAddress ? (
                  <span className="wallet-address">{walletAddress}</span>
                ) : (
                  <button onClick={connectWallet} className="connect-wallet-btn">
                    Connect Wallet
                  </button>
                )}
                <button onClick={toggleDarkMode} className="theme-toggle-btn">
                  {darkMode ? '☀️' : '🌙'}
                </button>
                <button className="user-profile-btn">👤</button>
              </div>
            </div>
          </nav>

          <main>
            <Routes>
              <Route path="/" element={<Home userData={userData} />} />
              <Route path="/profile" element={<Profile userData={userData} />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/wallet-analyzer" element={<TradingDashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;