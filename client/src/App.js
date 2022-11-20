import React, { useState, createContext } from 'react';
import Header from './components/header/Header';
import SimpleMap from './components/map/SimpleMap';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';
import LocationContext from './context/location_context';
import { selectAll } from './database/dbCollection';

const App = () => {
  const [lat, setLat] = useState(1);
  const [lng, setLng] = useState(1);
  const value = { lat, setLat, lng, setLng };

  return (
    <>
      <LocationContext.Provider value={value}>
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
      </LocationContext.Provider>
    </>
  );
};

export default App;
