import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import Marker from '../marker/Marker';
import { Paper } from '@mui/material';

import map_style from './GoogleMapStyles.json';
import locationsJSON from './LatLngs.json';

const Wrapper = styled.main`
  width: 40vw;
  height: 50vh;
  border-radius: 1rem;
  z-index: 2;
`;

const SimpleMap = ({ locations }) => {
  const [isLoaded, setLoaded] = useState(false);
  // const [locationsArr, setLocationArr] = useState([]);

  // location array to population the markers
  useEffect(() => {
    setLoaded(true);
    // console.log(locations);
    // setLocationArr(locations);
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
            defaultZoom={15}
            defaultCenter={[43.005844, -81.276375]}
          >
            {isLoaded
              ? locationsJSON.map((location, i) => (
                  <Marker
                    key={i}
                    lat={location.lat}
                    lng={location.lon}
                    prop_lat={location.lat}
                    prop_lng={location.lon}
                  />
                ))
              : null}
          </GoogleMapReact>
        </Wrapper>
      </Paper>
    </>
  );
};

export default SimpleMap;
