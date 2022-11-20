import React, { useState, useEffect, useContext } from 'react';
import LocationContext from '../../context/location_context';

import './marker.css';

const Marker = ({ prop_lat, prop_lng }) => {
  const [isSelected, setSelected] = useState(false);
  const { lat, setLat, lng, setLng } = useContext(LocationContext);

  useEffect(() => {
    if (isSelected) {
      setLat(prop_lat);
      setLng(prop_lng);
    }
  }, [isSelected]);

  return (
    <>
      <div
        className='marker'
        onClick={() => {
          setSelected(true);
        }}
      ></div>
    </>
  );
};

export default Marker;
