import React, { useState } from 'react';
import '../styles/Leaderboard.scss';

const leaderboardData = [
  { rank: 1, trader: "85bwe...msnv", badges: 3, pnl: "+$40.1M", tradeVolume: "0.63", trades: 111 },
  { rank: 2, trader: "5cbsj...klou", badges: 3, pnl: "+$38.2M", tradeVolume: "0.59", trades: 104 },
  { rank: 3, trader: "38dsj...vnwf", badges: 3, pnl: "+$37.7M", tradeVolume: "0.89", trades: 99 },
  { rank: 4, trader: "23sjb...jsbcw", badges: 3, pnl: "+$33.9M", tradeVolume: "0.59", trades: 109 },
  { rank: 5, trader: "53jdb...vbwp", badges: 3, pnl: "+$29.3M", tradeVolume: "0.34", trades: 77 },
  { rank: 6, trader: "Zach_3285", badges: 3, pnl: "+$24.1M", tradeVolume: "0.23", trades: 134 },
  { rank: 7, trader: "41kbr...wjeq", badges: 3, pnl: "+$21.1M", tradeVolume: "0.32", trades: 144 },
  { rank: 8, trader: "12ece...wjqf", badges: 3, pnl: "+$20.1M", tradeVolume: "0.32", trades: 144 },
  { rank: 9, trader: "93qdf...ijb", badges: 3, pnl: "+$19.2M", tradeVolume: "0.21", trades: 80 },
  { rank: 10, trader: "12ece...wjqf", badges: 3, pnl: "+$22.1M", tradeVolume: "0.22", trades: 82 },
];

function Leaderboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = leaderboardData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(leaderboardData.length / itemsPerPage);

  const renderBadges = (count) => {
    return Array(count).fill().map((_, i) => <span key={i} className="badge"></span>);
  };

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>RANK</th>
            <th>TRADER</th>
            <th>BADGES</th>
            <th>PNL</th>
            <th>TRADE VOLUME</th>
            <th>TRADES</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((trader) => (
            <tr key={trader.rank}>
              <td>{trader.rank}</td>
              <td>{trader.trader}</td>
              <td>{renderBadges(trader.badges)}</td>
              <td className="pnl">{trader.pnl}</td>
              <td>{trader.tradeVolume}</td>
              <td>{trader.trades}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>&lt;&lt;</button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button 
            key={page} 
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
        <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>&gt;&gt;</button>
      </div>
    </div>
  );
}

export default Leaderboard;