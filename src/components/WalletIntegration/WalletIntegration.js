// WalletIntegration.js

import React, { useState } from 'react';
import Web3 from 'web3';
import './WalletIntegration.css'; // Import your CSS file for styling

const WalletIntegration = () => {
    const [connected, setConnected] = useState(false);

    const connectWallet = async () => {
        try {
            // Check if MetaMask is installed
            if (window.ethereum) {
                // Request user to connect their wallet
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                // Initialize Web3 with the current provider (MetaMask)
                const web3 = new Web3(window.ethereum);
                // Get the accounts from MetaMask
                const accounts = await web3.eth.getAccounts();
                // Display success message
                alert(`Wallet connected successfully! Your address: ${accounts[0]}`);
                // Update state to indicate wallet is connected
                setConnected(true);
            } else {
                // MetaMask extension not found, prompt user to install it
                alert('Please install MetaMask extension to use this feature.');
            }
        } catch (error) {
            console.error('Error connecting wallet:', error);
            // Display error message
            alert('Failed to connect wallet. Please try again.');
        }
    };

    return (
        <div>
            {/* Button to connect wallet */}
            {!connected && (
                <button onClick={connectWallet} className="connect-button">
                    Connect Wallet
                </button>
            )}
            {/* Display message when wallet is connected */}
            {connected && <div className="wallet-connected">Wallet connected successfully!</div>}
        </div>
    );
};

export default WalletIntegration;
