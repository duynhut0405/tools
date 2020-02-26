import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array
};

function RateSelect({ data }) {
  return (
    <select className="select">
      {map(data, value => (
        <option key={value.id} value={value.currency}>
          {value.currency}
        </option>
      ))}
    </select>
  );
}

RateSelect.propTypes = propTypes;

export default RateSelect;
