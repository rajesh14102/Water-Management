// GoogleMapsProvider.js
import React from 'react';
import { LoadScript } from '@react-google-maps/api';

const GoogleMapsProvider = ({ children }) => {
  const apiKey = "AIzaSyBGCE53phtOwcVuJFWVHXmzk9ZOxgNItdo"; // Replace with your Google Maps API key

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      {children}
    </LoadScript>
  );
};

export default GoogleMapsProvider;
