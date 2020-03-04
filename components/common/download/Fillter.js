import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.array,
  setDate: PropTypes.func,
  setType: PropTypes.func
};

function Filler({ type, setDate, setType }) {
  return (
    <div className="filter-category mb-5">
      <select className="select mr-2" onChange={setDate}>
        <option value={2020}>2020</option>
        <option value={2021}>2021</option>
      </select>
      <select className="select" onChange={setType}>
        {map(type, item => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

Filler.propTypes = propTypes;

export default Filler;
