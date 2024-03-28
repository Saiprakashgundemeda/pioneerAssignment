import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import './NavigationBar.css';

const NavigationBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className={`navigation ${sidebarOpen ? 'open' : ''}`}>
            <div className="hamburger-menu" onClick={toggleSidebar}>
                {sidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
            <ul className="nav-items">
                <li className="nav-item">Home</li>
                <li className="nav-item">Wallet</li>
                <li className="nav-item">Graph</li>
                <li className="nav-item">CryptoCurrency</li>
            </ul>
        </div>
    );
};

export default NavigationBar;
