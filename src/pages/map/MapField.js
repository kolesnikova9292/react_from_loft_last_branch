import React, { useState, useEffect } from "react";
import MapGL from "react-map-gl";
import { connect } from "react-redux";
import { getRoute } from "../../providers/redux/modules/routes";
import { drawRoute } from "./functionForRoute";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoianVsaWFydXNzaWFuZmVkZXJhdGlvbi" +
  "IsImEiOiJjazJpbmIxeHUwbTY2M2NtbHpxYW4weGZzIn0.-GVUqir7oT7vVGOU6OokLA"; // Set your mapbox token here

const MapField = props => {
  const { route } = props;
  const [viewport, setViewport] = useState({
    latitude: 59.9342802,
    longitude: 30.3350986,
    zoom: 12,
    bearing: 0,
    pitch: 0,
  });

  let mapRef = React.createRef();

  useEffect(() => {
    if (route !== null) {
      setTimeout(drawRoute, 1000, mapRef.current.getMap(), route);
    }
  }, [route]);

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
};

const mapStateToProps = state => {
  return {
    route: getRoute(state),
  };
};

export default connect(mapStateToProps)(MapField);

document.body.style.margin = 0;
