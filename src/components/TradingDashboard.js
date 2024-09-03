import React, { useState, useEffect } from 'react';
import TradingViewChart from './TradingViewChart';
import '../styles/TradingDashboard.scss';

const TradingDashboard = () => {
  const [chartData, setChartData] = useState([]);
  const [tradingStats, setTradingStats] = useState({
    grossProfit: 0,
    totalROI: 0,
    winRate: 0,
    totalHoldings: 0,
    dexTradingVolume: 0,
    totalTrades: 0,
    avgTradeSize: 0,
  });

  useEffect(() => {
    // Fetch chart data and trading stats here
    // This is just mock data, replace with actual API calls
    const mockChartData = [
      { time: '2018-10-19', open: 180.34, high: 180.99, low: 178.57, close: 179.85 },
      { time: '2018-10-22', open: 180.82, high: 181.40, low: 177.56, close: 178.75 },
      { time: '2018-10-23', open: 178.65, high: 180.12, low: 178.11, close: 179.07 },
      { time: '2018-10-24', open: 178.55, high: 179.45, low: 176.31, close: 176.97 },
      { time: '2018-10-25', open: 177.52, high: 180.50, low: 176.83, close: 179.07 },
    ];

    setChartData(mockChartData);
    setTradingStats({
      grossProfit: -374276,
      totalROI: -2.41,
      winRate: 66.67,
      totalHoldings: 21.96,
      dexTradingVolume: 38000000,
      totalTrades: 43,
      avgTradeSize: 885260,
    });
  }, []);

  return (
    <div className="trading-dashboard">
      <div className="wallet-address">0x502...be836</div>
      <TradingViewChart data={chartData} />
      <div className="trading-stats">
        <div className="stat">
          <h3>Gross Profit</h3>
          <p className={tradingStats.grossProfit >= 0 ? 'positive' : 'negative'}>
            ${tradingStats.grossProfit.toLocaleString()}
          </p>
        </div>
        <div className="stat">
          <h3>Total ROI</h3>
          <p className={tradingStats.totalROI >= 0 ? 'positive' : 'negative'}>
            {tradingStats.totalROI}%
          </p>
        </div>
        <div className="stat">
          <h3>Win Rate</h3>
          <p className="positive">{tradingStats.winRate}%</p>
        </div>
        <div className="stat">
          <h3>Total Holdings</h3>
          <p>${tradingStats.totalHoldings}</p>
        </div>
        <div className="stat">
          <h3>DEX Trading Volume</h3>
          <p>${(tradingStats.dexTradingVolume / 1000000).toFixed(1)}M</p>
        </div>
        <div className="stat">
          <h3>Total Trades</h3>
          <p>{tradingStats.totalTrades}</p>
        </div>
        <div className="stat">
          <h3>Avg. Trade Size</h3>
          <p>${tradingStats.avgTradeSize.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default TradingDashboard;