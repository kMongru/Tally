import React from 'react';

const Wrapper = (props) => {
  return (
    <div style={{ height: '100vh', width: '100vw', margin: '0 5vw 0 5vw' }}>
      {props.children}
    </div>
  );
};

export default Wrapper;
