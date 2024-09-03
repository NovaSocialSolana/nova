import React from 'react';
import Username from './Username';
import SearchBar from './SearchBar';

function Home({ userData }) {
  return (
    <div className="home">
      <SearchBar />
      <Username 
        username={userData?.username || "Mock User"}
        address={userData?.address || "0x1234...5678"}
        views={userData?.views || 100}
      />
      <div className="pnl-section">
        <h3>PNL</h3>
        {/* Add PNL content here */}
      </div>
      <div className="pfp-section">
        <h3>PFP</h3>
        {/* Add PFP content here */}
      </div>
      <div className="badges-section">
        <h3>Badges</h3>
        {/* Add Badges content here */}
      </div>
    </div>
  );
}

export default Home;