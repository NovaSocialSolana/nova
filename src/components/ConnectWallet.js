import React, { useState, useEffect } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';

function ConnectWallet() {
  const [walletAddress, setWalletAddress] = useState(null);

  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            'Connected with Public Key:',
            response.publicKey.toString()
          );
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log('Connected with Public Key:', response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return (
    <div className="connect-wallet">
      <h1>Connect Your Wallet</h1>
      {!walletAddress ? (
        <div className="connect-wallet-container">
          <p>Connect your Phantom wallet to get started.</p>
          <button onClick={connectWallet} className="connect-wallet-btn">
            Connect Wallet
          </button>
        </div>
      ) : (
        <div className="wallet-info">
          <h2>Wallet Connected!</h2>
          <p>Address: {walletAddress}</p>
        </div>
      )}
    </div>
  );
}

export default ConnectWallet;