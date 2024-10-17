// Direction.js

import React, { useEffect } from 'react';

const Direction = () => {
  useEffect(() => {
   
    const loadGoogleMaps = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    loadGoogleMaps();

    // Initialize map once the script is loaded
    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -28.6753, lng: 24.6359 }, // Adjust coordinates if necessary
        zoom: 15,
      });

      const marker = new window.google.maps.Marker({
        position: { lat: -28.6753, lng: 24.6359 }, // Same coordinates as above
        map: map,
        title: 'Forrest Hills Hotel',
      });
    };

    return () => {
      
      const script = document.querySelector(`script[src^="https://maps.googleapis.com/maps/api/js"]`);
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <h2>How to Get There</h2>
      <div id="map" style={{ height: '80vh', width: '100%' }}></div>
      <p>
        To reach Forrest Hills Hotel, you can use the following address:
      </p>
      <address>
        7835 Moshe Kantani Ave<br />
        Redirile, Galesshewe<br />
        8345
      </address>
      <p>
        Here are some directions from the city center:
      </p>
      <ul>
        <li>From the city center, head north on Main St.</li>
        <li>Continue straight for about 5 km.</li>
        <li>Turn left onto Moshe Kantani Ave.</li>
        <li>Follow the signs to Forrest Hills Hotel.</li>
      </ul>
    </div>
  );
};

export default Direction;
