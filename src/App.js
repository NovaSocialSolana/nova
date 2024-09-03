import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import './styles/main.scss';

function AppContent() {
  const [walletAddress, setWalletAddress] = useState(null);
  const { darkMode, toggleDarkMode } = useTheme();

  const connectWallet = async () => {
    const mockAddress = "0x1234...5678";
    setWalletAddress(mockAddress);
  };

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <nav className="navbar">
          <div className="navbar-content">
            <div className="nav-section">
              <Link to="/" className="nav-brand">NOVA</Link>
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
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>
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