import React from 'react';
// Import necessary components for React Google Maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

// Import custom styles to customize the style of Google Map
const styles = require('./GoogleMapStyles.json');

// Import custom icon for map marker
// You can use this if you need to support IE11 and lower.
// const mapMarker = require('./GoogleMapMarker.svg')

// Google Map component
const GoogleMapComponentWithMarker = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{
        lat: 40.7484445, // latitude for the center of the map
        lng: -73.9878584, // longitude for the center of the map
      }}
      defaultOptions={{
        disableDefaultUI: true, // disable default map UI
        draggable: true, // make map draggable
        keyboardShortcuts: false, // disable keyboard shortcuts
        scaleControl: true, // allow scale controle
        scrollwheel: true, // allow scroll wheel
        styles: styles, // change default map styles
      }}
    >
      <Marker
        icon={{
          url: 'data:image/svg+xml;utf-8, \
            <svg xmlns="http://www.w3.org/2000/svg" width="45" viewBox="0 0 512 512"><path fill="#e74c3c" d="M252.55 0h5.95c33.76.52 67.31 11.19 94.97 30.59 27.22 18.94 48.77 45.95 61.03 76.77 13.14 " /></svg>', // This may not work in <=IE11
        }}
        position={{
          lat: 40.7484445, // latitude to position the marker
          lng: -73.9878584, // longitude to position the marker
        }}
      />
    </GoogleMap>
  ))
);

// Export Google Map component
export default GoogleMapComponentWithMarker;
