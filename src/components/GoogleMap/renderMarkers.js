import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
const RenderMarkers = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCfts7ICdfHE1B_5_FAwYR9OchyGr5_9VE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={12} defaultCenter={{ lat: 42.385174, lng: -71.1167411 }}>
    {props.isMarkerShown && props.data.map((mark, i) => {
        return (<Marker key={i} position={{ lat: mark.hasOwnProperty("Latitude") ? mark.Latitude[0]._text[0] : 42.3736158, lng: mark.hasOwnProperty("Longitude") ? mark.Longitude[0]._text[0] : Number("-71.1097335") }} />)
    })}
  </GoogleMap>
));
export default RenderMarkers;
