// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import React and React DOM
import React from 'react';
import { render } from 'react-dom';

// Import Google Map component
import GoogleMapComponentWithMarker from './GoogleMapWithMarkers';

// Some default styles
const styles = {
  width: '100%',
  height: '536px',
};

// Wrapper with Google Map component
class MapWrapper extends React.PureComponent {
  render() {
    return (
      <div style={styles}>
        <GoogleMapComponentWithMarker
          googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB62YTqTIneDFPQVFNuj3mvamwXNajD1wI'
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

// Render everything in HTML
render(<MapWrapper />, document.getElementById('root'));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
