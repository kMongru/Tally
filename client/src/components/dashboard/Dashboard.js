import React, { useEffect, useContext, useState } from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import Item from '@mui/material/ListItem';
import LocationContext from '../../context/location_context';

const Dashboard = () => {
  const context = useContext(LocationContext);

  // const [lat, setLat] = useState(null);
  // const [lng, setLng] = useState(null);

  return (
    <div>
      Dashboard
      <h1>{context.lat}</h1>
      <h1>{context.lng}</h1>
    </div>
  );
};

export default Dashboard;
