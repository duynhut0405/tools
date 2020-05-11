import React, { useEffect, useState } from 'react';
import { map } from 'lodash';
import { getAllYear } from '../../../services/regulation';
import PropTypes from 'prop-types';
import t from '../../../translation';

const propTypes = {
  type: PropTypes.array,
  center: PropTypes.bool,
  setDate: PropTypes.func,
  setType: PropTypes.func,
  year: PropTypes.number,
  t: PropTypes.func
};

const getYear = async setData => {
  const res = await getAllYear();
  if (res && res !== undefined && res.status === 200) {
    setData(res.data);
  }
};

function Filler({ type, setDate, setType, center, year }) {
  //
  const [listYear, setListYear] = useState([]);
  useEffect(() => {
    getYear(setListYear);
  }, [getAllYear]);

  return (
    <div className={center ? 'filter-category mb-5 text-center' : 'filter-category mb-5'}>
      <select className="select" onChange={setDate} value={year}>
        <option value={0}>{t('year')}</option>
        {map(listYear, value => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
      <select className="select" onChange={setType}>
        <option value={0}>{t('select')}</option>
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
