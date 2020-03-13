import React, { useEffect } from 'react';
import { map } from 'lodash';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';
import { connect } from 'react-redux';

const MapWithAMarker = withScriptjs(
  withGoogleMap(props => {
    const centerPosition = () => {
      return {
        lat: 16.1,
        lng: 108.2
      };
    };

    const showPosition = position => {
      console.log(position);
    };

    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
    }, []);

    return (
      <div>
        <GoogleMap defaultZoom={10} center={centerPosition()}>
          {map(props.marker, (item, index) => (
            <MarkerWithLabel
              key={index}
              position={{ lat: item.lat, lng: item.lng }}
              labelAnchor={new window.google.maps.Point(65, 0)}
              labelStyle={{ backgroundColor: 'white', fontSize: '12px' }}
              icon="/static/images/_pin.png"
            >
              <div className="gm-marker">
                {/* <div className="gm-marker-title">{item.name}</div> */}
                <div className="parameter-wrapper">
                  {item.parameter.map((par, key) => (
                    <div className="parameter-item" key={key}>
                      {par.name}: {par.value} {par.unit}
                    </div>
                  ))}
                </div>
              </div>
            </MarkerWithLabel>
          ))}
        </GoogleMap>
      </div>
    );
  })
);

const mapStateToProps = state => {
  return {
    listBranches: state.mapReducer.listBranches
  };
};

export default connect(mapStateToProps, null)(MapWithAMarker);
