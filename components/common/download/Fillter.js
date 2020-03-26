import React, { useEffect, useState } from 'react';
import { map } from 'lodash';
import { getAllYear } from '../../../services/regulation';
import PropTypes from 'prop-types';
import { withTranslation } from '../../../i18n';

const propTypes = {
  type: PropTypes.array,
  center: PropTypes.bool,
  setDate: PropTypes.func,
  setType: PropTypes.func,
  t: PropTypes.func
};

const getYear = async setData => {
  const res = await getAllYear();
  if (res && res !== undefined && res.status === 200) {
    setData(res.data);
  }
};

function Filler({ t, type, setDate, setType, center }) {
  const [listYear, setListYear] = useState([]);
  useEffect(() => {
    getYear(setListYear);
  }, [getAllYear]);
  return (
    <div className={center ? 'filter-category mb-5 text-center' : 'filter-category mb-5'}>
      <select className="select" onChange={setDate}>
        <option value={0}>{t('year')}</option>
        {map(listYear, value => (
          <option value={value}>{value}</option>
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

export default withTranslation('common')(Filler);
