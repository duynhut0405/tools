import React from 'react';
import { map } from 'lodash';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';
import { connect } from 'react-redux';

const MapWithAMarker = withScriptjs(
  withGoogleMap(props => {
    const centerPosition = () => {
      if (props.marker && props.marker.length === 1) {
        return {
          lat: props.marker[0].lat,
          lng: props.marker[0].lng
        };
      }
      return {
        lat: 16.1,
        lng: 108.2
      };
    };
    return (
      <div>
        <GoogleMap defaultZoom={10} center={centerPosition()}>
          {map(props.marker, (item, index) => (
            <MarkerWithLabel
              key={index}
              position={{ lat: item.lat, lng: item.lng }}
              labelAnchor={new window.google.maps.Point(65, 0)}
              labelStyle={{ backgroundColor: 'white', fontSize: '12px' }}
              icon="/static/images/icon-marker.png"
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
