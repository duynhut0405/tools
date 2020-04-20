import React, { useState, useEffect } from 'react';
import Table from './Table';
import { getPadding } from '../../utils/convertPadding';
import { getRate } from '../../services/rate';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.object,
  id: Proptypes.number,
  search: Proptypes.bool
};

const getData = async (query, setData) => {
  const res = await getRate(query);
  if (res && res !== undefined && res.status === 200) {
    setData(res.data);
  }
};

function TableRate({ data, id }) {
  const [list, setList] = useState({});
  const [options] = useState(getPadding(data ? data.optionWidth : ''));

  useEffect(() => {
    getData({ number: 13 }, setList);
  }, [getData]);

  return (
    <section className={`${options} tableRate`} id={id}>
      <div className="container">
        <Table data={list.interestRates} />
      </div>
    </section>
  );
}

TableRate.propTypes = propTypes;

export default TableRate;
