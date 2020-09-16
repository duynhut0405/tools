import React, { useState, useEffect } from 'react';
import map from 'lodash/map';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import Marker from './Marker';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array,
  location: PropTypes.object,
  text: PropTypes.string,
  zoom: PropTypes.number,
  id: PropTypes.number
};
const mapOptionsCreator = {
  scrollwheel: true,
  // zoomControlOptions: {
  //     position: map.ControlPosition.RIGHT_CENTER,    // as long as this is not set it works
  //     style: map.ZoomControlStyle.SMALL
  // },
  // mapTypeControlOptions: {
  //     position: map.ControlPosition.BOTTOM_RIGHT     // this makes the map type control disappear
  // },
  mapTypeControl: false,
  zoomControl: false,
  draggable: true,
  rotateControl: true,
  scaleControl: true,
  streetViewControl: false,
  panControl: false,
};

function Map({ data, location, zoom, id }) {
  const [isCheck, setIsCheck] = useState(null);

  useEffect(() => {
    setIsCheck(id);
  }, [id]);

  const MyMapComponent = compose(
    withProps({
      googleMapURL:
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyArRfxyxqmW2NviGCwmUSethLU5Yr5Qbxw',
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `500px` }} />,
      mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
  )(() => (
    <GoogleMap defaultZoom={zoom} defaultCenter={location} options={mapOptionsCreator} mapTypeControl="true">
      {map(data, (item, index) => {
        return (
          <Marker
            item={item}
            index={index}
            key={index}
            isCheck={isCheck === item.id}
            onOpenCLick={() => setIsCheck(item.id)}
            onCloseClick={() => setIsCheck(null)}
            
          />
        );
      })}
    </GoogleMap>
  ));
  return <div style={{  width: "100.5%" }}>{MyMapComponent()}</div>;
}

Map.propTypes = propTypes;

export default Map;
