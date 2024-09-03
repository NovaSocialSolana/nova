import React from 'react';

function WalletInfo({ balance }) {
  return (
    <div className="wallet-info">
      <h2>Wallet Balance</h2>
      <p>{balance} ETH</p>
    </div>
  );
}

export default WalletInfo;



import React from 'react';

function TransactionHistory({ transactions }) {
  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index}>
              <td>{tx.date}</td>
              <td>{tx.amount} ETH</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
