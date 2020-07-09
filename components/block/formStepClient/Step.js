import React from 'react';
import map from 'lodash/map';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.array,
  formActive: Proptypes.number
};

function Step({ data, formActive }) {
  return (
    <section className="online-signup">
      <div className="container">
        <div className="max950">
          <div className="flex-bw">
            {map(data, (form, index) => (
              <div className="step" key={form.value}>
                <a className={index + 1 === formActive ? 'b active' : 'b'}>
                  {index + 1 < 10 ? `0 ${index + 1}` : `${index + 1}`}
                </a>
              </div>
            ))}
            <div className="step-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

Step.propTypes = propTypes;

export default Step;
