import React from 'react';
import map from 'lodash/map';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.array,
  formActive: Proptypes.number
};

function Step({ formActive }) {
  return (
    <section className="online-signup">
      <div className="container">
        <div className="max950">
          <div className="flex-bw">
            <div className="step">
              <a className={formActive === 1 ? 'b active' : 'b'}>01</a>
            </div>
            <div className="step">
              <a className={formActive === 2 ? 'b active' : 'b'}>02</a>
            </div>
            <div className="step">
              <a className={formActive === 3 ? 'b active' : 'b'}>03</a>
            </div>
            <div className="step-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

Step.propTypes = propTypes;

export default Step;
