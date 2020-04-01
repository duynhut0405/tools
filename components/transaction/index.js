import React, { useEffect, useState } from 'react';
import BoxSearch from './BoxSearch';
import Map from '../common/Map';
import ProppTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  listBranches: ProppTypes.array
};

function Transaction({ listBranches }) {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const showPosition = position => {
    setLocation(() => ({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }));
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }, []);

  return (
    <div className="wrap-list-map">
      <div className="row grid-space-0">
        <div className="col-md-4 ">
          <BoxSearch />
        </div>
        <div className="col-md-8">
          <Map data={listBranches} location={location} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    listBranches: state.mapReducer.listBranches
  };
};

Transaction.propTypes = propTypes;

export default connect(mapStateToProps, null)(Transaction);
