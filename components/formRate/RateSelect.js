import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array,
  defaultValue: PropTypes.string,
  handleChangeOption: PropTypes.func
};

function RateSelect({ data, defaultValue, handleChangeOption }) {
  console.log('defaultValue:', defaultValue);
  
  return (
    <select
      className="select"
      //defaultValue={'VND'}
      onChange={e => handleChangeOption(e.target.value)}
    >
      {map(data, (value, index) => {
        if (value.currency === defaultValue) {
          return (
            <option selected key={index} value={value.currency}>
              {value.currency}
            </option>
          );
        }
        return (
          <option key={index} value={value.currency}>
            {value.currency}
          </option>
        );
      })}
    </select>
  );
}

RateSelect.propTypes = propTypes;

export default RateSelect;
