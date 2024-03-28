import React, { useState, useEffect } from 'react';
import './Cryptocurrency.css';

const Cryptocurrency = () => {
    const [bitcoinData, setBitcoinData] = useState(null);

    useEffect(() => {
        fetchBitcoinData();
    }, []);

    const fetchBitcoinData = async () => {
        try {
            const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
            const json = await response.json();
            setBitcoinData(json.bpi);
        } catch (error) {
            console.error('Error fetching Bitcoin data:', error);
        }
    };

    return (
        <div className="cryptocurrency-container">
            {bitcoinData && (
                <div className="card">
                    <div className="header">
                        <span className="currency">Bitcoin Price (USD)</span>
                        <img src="https://img.icons8.com/color/48/000000/bitcoin--v1.png" alt="Bitcoin" />
                    </div>
                    <div className="price">{bitcoinData.USD.rate}</div>
                </div>
            )}
            {bitcoinData && (
                <div className="card">
                    <div className="header">
                        <span className="currency">Bitcoin Price (EUR)</span>
                        <img src="https://img.icons8.com/color/48/000000/bitcoin--v1.png" alt="Bitcoin" />
                    </div>
                    <div className="price">{bitcoinData.EUR.rate}</div>
                </div>
            )}
            {bitcoinData && (
                <div className="card">
                    <div className="header">
                        <span className="currency">Bitcoin Price (EUR)</span>
                        <img src="https://img.icons8.com/color/48/000000/bitcoin--v1.png" alt="Bitcoin" />
                    </div>
                    <div className="price">{bitcoinData.EUR.rate}</div>
                </div>
            )}
        </div>
    );
};

export default Cryptocurrency;
