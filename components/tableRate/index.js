import React, { useState, useEffect } from 'react';
import Table from './Table';
import Search from './Search';
import moment from 'moment';
import { getPadding } from '../../utils/convertPadding';
import { searchRate } from '../../services/rate';
import Proptypes from 'prop-types';
import { getRateService, getInterestRateService } from '../../services/rate';
import FormRate from '../../components/formRate';

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
  const [type, setType] = useState(0);
  const [typeSearch, setTypeSearch] = useState(0);
  
  const [listInterestRate, setListInterestRate] = useState([]);
  const [listRate, setlistRate] = useState([]);

  const getInterestRate = async () => {
    const interestRateRes = await getInterestRateService();
    if (interestRateRes && interestRateRes !== undefined && interestRateRes.status === 200) {
      setListInterestRate(interestRateRes.data);
    }
  };

  const getRateNew = async () => {
    const rateResponse = await getRateService();
    if (rateResponse && rateResponse !== undefined && rateResponse.status === 200) {
      setlistRate(rateResponse.data);
    }
  };
  
  useEffect(() => {
    getRate(date, setList);
    setType(data.type);
    getInterestRate();
    getRateNew();
  }, [getRate]);

  const onSeach = () => {
    getRate(moment(date).format('YYYY/MM/DD'), setList);
  };





  if(type === '1') {
    return (
      <section className={`${options} tableRate`} id={id}>
        <FormRate data={listRate} interestRate={listInterestRate} description1={data.description1} description2={data.description2} description3={data.description3} setTypeSearch={setTypeSearch} typeSearch={typeSearch} />
        {typeSearch == '4' ? 
        <div className="container">
          {search && <Search changeDate={event => setDate(event)} date={date} onSubmit={onSeach} />}
          <Table data={list.exchangeRateDetail} />
        </div>
      : null}
      </section>
    );
  }
  return (
    <section className={`${options} tableRate`} id={id}>
      <div className="container">
        {search && <Search changeDate={event => setDate(event)} date={date} onSubmit={onSeach} />}
        <Table data={list.exchangeRateDetail} />
      </div>
    </section>
  );
}

TableRate.propTypes = propTypes;

export default TableRate;
