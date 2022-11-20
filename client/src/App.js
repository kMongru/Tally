import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import SimpleMap from './components/map/SimpleMap';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';
import LocationContext from './context/location_context';
import axios from 'axios';

const base_url = 'http://localhost:3001';

const App = () => {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [locationDetails, setLocationDetails] = useState({});
  const [markerLocations, setMarkerLocations] = useState({});
  const value = { lat, setLat, lng, setLng };

  useEffect(() => {
    populateMarkers();
  }, []);

  useEffect(() => {
    if (lat !== null) {
      fetchLocationData();
    }
  }, [lat]);

  const populateMarkers = async () => {
    const res = await axios.get(`${base_url}/locations`);
    console.log(res.data);
    setMarkerLocations(res.data);
  };

  const fetchLocationData = async () => {
    const res = await axios.get(`${base_url}/search`);
    setLocationDetails(res.data);
  };

  return (
    <>
      <LocationContext.Provider value={value}>
        <Header />
        <div style={{ display: 'flex', flexDirection: 'row', height: '80%' }}>
          <div className='centered-flex'>
            {markerLocations && <SimpleMap locations={markerLocations} />}
          </div>
          <div style={{ marginLeft: '3rem' }}>
            <h1>DashBoard</h1>
            <Dashboard details={locationDetails} />
          </div>
        </div>
      </LocationContext.Provider>
    </>
  );
};

export default App;
