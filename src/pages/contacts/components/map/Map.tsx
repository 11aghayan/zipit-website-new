import './Map.css';

import {APIProvider, Map as GoogleMap, AdvancedMarker } from '@vis.gl/react-google-maps';

export default function Map() {
  const position = { lat: 40.169634, lng: 44.522070 };
  
  return (
    <section className='map'>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap defaultCenter={position} defaultZoom={19} mapId='google-map' fullscreenControl={true} >
          <AdvancedMarker position={position} />
        </GoogleMap>
      </APIProvider>
    </section>
  );
}