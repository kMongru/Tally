import React, { useState, useEffect, useContext } from 'react';
import LocationContext from '../../context/location_context';
import PropTypes from 'prop-types';

import './marker.css';

const Marker = () => {
  const [isSelected, setSelected] = useState(false);
  const { lat, setLat, lng, setLng } = useContext(LocationContext);

  useEffect(() => {
    if (isSelected) {
      setLat(2);
      setLng(2);
    }
  }, [isSelected]);

  return (
    <>
      <div className='marker'>
        <button
          onClick={() => {
            setSelected(true);
          }}
        >
          Select
        </button>
      </div>
      {/* <Wrapper alt={text} onClick={console.log('clicked')} /> */}
    </>
  );
};

// Marker.defaultProps = {
//   onClick: null,
// };

// Marker.propTypes = {
//   onClick: PropTypes.func,
//   text: PropTypes.string.isRequired,
// };

export default Marker;
