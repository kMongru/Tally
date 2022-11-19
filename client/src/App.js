import React from 'react';
import Header from './components/header/Header';
import SimpleMap from './components/map/SimpleMap';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', height: '80%' }}>
        <div className='centered-flex'>
          <SimpleMap />
        </div>
        <div style={{ marginLeft: '3rem' }}>
          <h1>DashBoard</h1>
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default App;
