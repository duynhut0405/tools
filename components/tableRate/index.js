import React, { useState, useEffect } from 'react';
import Table from './Table';
import Search from './Search';
import moment from 'moment';
import { getPadding } from '../../utils/convertPadding';
import { searchRate } from '../../services/rate';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.object,
  id: Proptypes.number,
  search: Proptypes.bool
};

const getRate = async (query, setData) => {
  let res;
  if (query === null) {
    res = await searchRate();
  } else {
    res = await searchRate({ date: query });
  }
  if (res && res !== undefined && res.status === 200) {
    setData(res.data);
  }
};

function TableRate({ data, id, search }) {
  const [list, setList] = useState({});
  const [date, setDate] = useState(null);
  const [options] = useState(getPadding(data ? data.optionWidth : ''));

  useEffect(() => {
    getRate(date, setList);
  }, [getRate]);

  const onSeach = () => {
    getRate(moment(date).format('YYYY/MM/DD'), setList);
  };
  return (
    <section className={`${options} tableRate`} id={id}>
      <div className="container">
        {search && <Search changeDate={event => setDate(event.target.value)} onSubmit={onSeach} />}
        <Table data={list.exchangeRateDetail} />
      </div>
    </section>
  );
}

TableRate.propTypes = propTypes;

export default TableRate;
