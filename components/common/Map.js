import React from 'react';
import { map } from 'lodash';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import Marker from './Marker';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array,
  location: PropTypes.object,
  text: PropTypes.string
};

function Map({ data, location }) {
  const MyMapComponent = compose(
    withProps({
      googleMapURL:
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyBFtaHtOcwUGvv2pDBtMoPrI5NvnUwe2GU&libraries=geometry,drawing,places',
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `600px` }} />,
      mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
  )(() => (
    <GoogleMap defaultZoom={8} defaultCenter={location}>
      {map(data, (item, index) => {
        return <Marker item={item} index={index} />;
      })}
    </GoogleMap>
  ));
  return <React.Fragment>{MyMapComponent()}</React.Fragment>;
}

Map.propTypes = propTypes;

export default Map;
