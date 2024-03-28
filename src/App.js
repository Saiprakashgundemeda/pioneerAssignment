
import React from 'react'

import NavigationBar from './components/NavigationBar/NavigationBar';
import Graph from './components/Graph/Graph';
import WalletIntegration from './components/WalletIntegration/WalletIntegration';
import Cryptocurrency from './components/Cryptocurrency/Cryptocurrency';

import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <NavigationBar/>
      <Graph/>
     <Cryptocurrency />
      <div className="wallet-container">
        <WalletIntegration />
      </div>
    </div>
  )
}

export default App


