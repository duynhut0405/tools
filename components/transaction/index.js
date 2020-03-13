import React from 'react';
import BoxSearch from './BoxSearch';
import Map from '../common/Map';

function Transaction() {
  return (
    <main className="page-diem-atm" id="main">
      <div className="wrap-list-map">
        <div className="row grid-space-0">
          <div className="col-md-4 ">
            <BoxSearch />
          </div>
          <div className="col-md-8">
            <Map
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBFtaHtOcwUGvv2pDBtMoPrI5NvnUwe2GU&v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `550px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              marker={[{ lat: 21.027763, lng: 105.83416, name: 'Hà Nội', parameter: [] }]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
export default Transaction;
