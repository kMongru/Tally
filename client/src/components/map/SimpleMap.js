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

const SimpleMap = ({ locations }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [locationsArr, setLocationArr] = useState(locations);

  // location array to population the markers
  useEffect(() => {
    setLoaded(true);
  }, []);

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
          >
            {isLoaded
              ? locationsArr &&
                locationsArr.map((location) => (
                  <Marker lat={location.lat} lng={location.lon} />
                ))
              : null}
          </GoogleMapReact>
        </Wrapper>
      </Paper>
    </>
  );
};

export default SimpleMap;
