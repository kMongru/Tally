import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// const Wrapper = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 18px;
//   height: 18px;
//   background-color: #000;
//   border: 2px solid #fff;
//   border-radius: 100%;
//   user-select: none;
//   transform: translate(-50%, -50%);
//   &:hover {
//     z-index: 2;
//     background-color: blue;
//   }
// `;

const Marker = ({ onClick }) => {
  return (
    <>
      <div onClick={console.log('hi')}></div>
      {/* <Wrapper alt={text} onClick={console.log('clicked')} /> */}
    </>
  );
};

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;
