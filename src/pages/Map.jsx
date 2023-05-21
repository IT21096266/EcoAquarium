import React from "react";
import { useMemo } from "react";
//import { Wrapper, Status } from "@googlemaps/react-wrapper";

//import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <MapG />;
};

const MapG = () => {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  return (
    <div>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;
