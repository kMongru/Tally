import React, { createContext } from 'react';

const LocationContext = createContext({
  lat: null,
  lng: null,
});

export default LocationContext;
