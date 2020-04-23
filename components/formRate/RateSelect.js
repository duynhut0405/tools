import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array,
  defaultValue: PropTypes.string,
  handleChangeOption: PropTypes.func
};

function RateSelect({ data, defaultValue, handleChangeOption }) {
  console.log('data in rate:', data)
  return (
    <select className="select" defaultValue={defaultValue} onChange={e => handleChangeOption(e.target.value)}>
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
