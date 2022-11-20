import React, { createContext } from 'react';

const LocationContext = createContext({
  lat: 0,
  lng: 0,
});

export default LocationContext;
