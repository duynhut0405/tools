import moment from 'moment';
import Proptypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import FormRate from '../../components/formRate';
import { getInterestRateService, getRateService, searchRate } from '../../services/rate';
import { getPadding } from '../../utils/convertPadding';
import Search from './Search';
import Table from './Table';

const propTypes = {
  data: Proptypes.object,
  id: Proptypes.number,
  search: Proptypes.bool
};
const getRate = async (query, setData) => {
  // if (query === null) {
  //   res = await searchRate();
  // } else {
  if (query === null) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    query = yyyy + '/' + mm + '/' + dd;
  }
  const res = await searchRate({ date: query });

  if (res && res !== undefined && res.status === 200) {
    setData(res.data);
  } else {
    setData({});
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
    setType(data.type);
    getInterestRate();
    getRateNew();
  }, [getRate]);

  const onSeach = () => {
    if (date === null) {
      setDate(new Date());
    }
    getRate(moment(date).format('YYYY/MM/DD'), setList);
  };





  if(type === '1') {
    return (
      <section className={`${options} tableRate`} id={id}>
        <FormRate data={listRate} interestRate={listInterestRate} description1={data.description1} description2={data.description2} description3={data.description3} setTypeSearch={setTypeSearch} typeSearch={typeSearch} />
        {typeSearch == '4' ? 
        <div className="container">
          {search && <Search changeDate={event => setDate(event)} date={date} onSubmit={onSeach} />}
          {date !== null && <Table data={list.exchangeRateDetail} />}
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
