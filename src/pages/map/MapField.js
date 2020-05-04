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

  const [viewportNew, setViewportNew] = useState({});

  let mapRef = React.createRef();

  useEffect(() => {
    console.log(route);
    /*if (route !== null) {
      setViewportNew({
          longitude: route.data[0][0],
          latitude: route.data[0][1],
          zoom: 15,
          width: "100%",
          height: 500,
      });
      mapRef.current.props.onViewportChange(viewportNew);
      drawRoute(mapRef.current.getMap(), route.data, this.mapRef.current);
    }*/

    if (route !== null) {
      setTimeout(drawRoute, 1000, mapRef.current.getMap(), route);
      //if (mapRef.current.getMap().getLayer("route")) {
      //  console.log(55555555555555555555);
      //  mapRef.current.getMap().removeLayer("route");
      // }
      //mapRef.current.getMap().eachLayer(function(layer) {
      //  mapRef.current.getMap().removeLayer(layer);
      //});
      //drawRoute(mapRef.current.getMap(), route);
      /* mapRef.current.getMap().on("style.load", () => {
        console.log("________");
        const waiting = () => {
          console.log(mapRef.current.getMap().isStyleLoaded());
          if (!mapRef.current.getMap().isStyleLoaded()) {
            setTimeout(waiting, 200);
          } else {
            drawRoute(mapRef.current.getMap(), route);
          }
        };
        waiting();
      });*/
      /* mapRef.current.getMap().on("styledata", () => {
        const waiting = () => {
          if (!mapRef.current.getMap().isStyleLoaded()) {
            setTimeout(waiting, 200);
          } else {
            drawRoute(mapRef.current.getMap(), route);
          }
        };
        waiting();
      });*/
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
