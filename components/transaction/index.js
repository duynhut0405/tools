import React from 'react';
import BoxSearch from './BoxSearch';

function Transaction() {
  return (
    <main className="page-diem-atm" id="main">
      <div className="wrap-list-map">
        <div className="row grid-space-0">
          <div className="col-md-4 ">
            <BoxSearch />
          </div>
          <div className="col-md-8"></div>
        </div>
      </div>
    </main>
  );
}

export default Transaction;
