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

function Map({ data, location, zoom, id }) {
  const [isCheck, setIsCheck] = useState(null);

  useEffect(() => {
    setIsCheck(id);
  }, [id]);

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
    <GoogleMap defaultZoom={zoom} defaultCenter={location}>
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
  return <div style={{ height: '600px' }}>{MyMapComponent()}</div>;
}

Map.propTypes = propTypes;

export default Map;
