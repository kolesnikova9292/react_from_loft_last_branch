import React, { useState } from "react";
import { render } from "react-dom";
import MapGL from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoianVsaWFydXNzaWFuZmVkZXJhdGlvbi" +
  "IsImEiOiJjazJpbmIxeHUwbTY2M2NtbHpxYW4weGZzIn0.-GVUqir7oT7vVGOU6OokLA"; // Set your mapbox token here

export function MapField() {
  const [viewport, setViewport] = useState({
    latitude: 59.9342802,
    longitude: 30.3350986,
    zoom: 12,
    bearing: 0,
    pitch: 0,
  });

  let mapRef = React.createRef();

  return (
    <MapGL
      ref={mapRef}
      {...viewport}
      width="auto"
      height="89vh"
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
  );
}

document.body.style.margin = 0;
