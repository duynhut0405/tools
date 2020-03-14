import React from 'react';
import { map } from 'lodash';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array,
  location: PropTypes.object,
  text: PropTypes.string
};

function Map({ data, location }) {
  const AnyReactComponent = ({ text }) => (
    <div>
      <img src="/static/images/_pin.png" alt="pin" />
      <div>{text}</div>
    </div>
  );
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBFtaHtOcwUGvv2pDBtMoPrI5NvnUwe2GU' }}
      center={location}
      zoom={8}
    >
      <>
        {map(data, (item, index) => (
          <AnyReactComponent
            key={index}
            lat={item.latitude}
            lng={item.longitude}
            text={item.address_name}
          />
        ))}
      </>
    </GoogleMapReact>
  );
}

Map.propTypes = propTypes;

export default Map;
