import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav>
        <ul>
          <li><Link to="/wallet-analyzer" onClick={toggleMenu}>Wallet Analyzer</Link></li>
          <li><Link to="/Profile" onClick={toggleMenu}>Profile</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarMenu;