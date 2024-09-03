import React from 'react';

function TransactionHistory({ transactions }) {
  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((tx, index) => (
          <li key={index}>{tx.date}: {tx.amount} ETH</li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
