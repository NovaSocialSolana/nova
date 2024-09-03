import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

function Username({ username, address, views }) {
  const { darkMode } = useTheme();

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    // You might want to add a toast or notification here to inform the user that the address was copied
  };

  return (
    <div className={`profile-section ${darkMode ? 'dark-mode' : ''}`}>
      <div className="username-header">
        <h2>Name</h2>
        <button className="edit-btn">
          <span role="img" aria-label="Edit">✏️</span>
        </button>
      </div>
      <div className="username-content">
        <p>{username}</p>
      </div>
      <div className="address-box">
        <div className="address-label">Address</div>
        <div className="address-content">{address}</div>
        <button className="copy-btn" onClick={handleCopy}>Copy</button>
      </div>
      <div className="views-count">Views: {views}</div>
    </div>
  );
}

export default Username;