import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import Marker from '../marker/Marker';
import { Paper } from '@mui/material';

import map_style from './GoogleMapStyles.json';

const Wrapper = styled.main`
  width: 40vw;
  height: 50vh;
  border-radius: 1rem;
  z-index: 2;
`;

const SimpleMap = () => {
  const locations = [[43.01885, -81.21563]];
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleApiLoaded = (map, maps) => {};

  return (
    <>
      <Paper elevation={10}>
        <Wrapper>
          <GoogleMapReact
            options={{
              styles: map_style,
            }}
            bootstrapURLKeys={{
              key: 'AIzaSyB62YTqTIneDFPQVFNuj3mvamwXNajD1wI',
              libraries: ['visualization'],
            }}
            defaultZoom={12}
            defaultCenter={[42.984924, -81.245277]}
            // yesIWantToUseGoogleMapApiInternals
            // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
            {isLoaded ? <Marker lat={42.984924} lng={-81.245277} /> : null}
          </GoogleMapReact>
        </Wrapper>
      </Paper>
    </>
  );
};

export default SimpleMap;
