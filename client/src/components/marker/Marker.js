import React, { useState, useEffect, useContext } from 'react';
import LocationContext from '../../context/location_context';

import './marker.css';

const Marker = ({ lat, lng }) => {
  const [isSelected, setSelected] = useState(false);
  const { lat, setLat, lng, setLng } = useContext(LocationContext);

  useEffect(() => {
    if (isSelected) {
      setLat(lat);
      setLng(lng);
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
