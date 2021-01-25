import React, { useState, useEffect } from 'react';
import Table from './Table';
import Search from './Search';
import moment from 'moment';
import { getPadding } from '../../utils/convertPadding';
import { searchRate } from '../../services/rate';
import Proptypes from 'prop-types';
import { getRateService, getInterestRateService } from '../../services/rate';
import FormRate from '../../components/formRate';
import { cond } from 'lodash';

const propTypes = {
  data: Proptypes.object,
  id: Proptypes.number,
  search: Proptypes.bool
};
const getRate = async (query, setData) => {
  
  
  let res;
  // if (query === null) {
  //   res = await searchRate();
  // } else {
    if(query === null){
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      query = yyyy + '/' + mm + '/' + dd;
    }
    res = await searchRate({ date: query });
  // }
  let day = (query.substr(8,2));
  let month = query.substr(5,2);
  let year = query.substr(0,4);
  while(res === undefined){
    day = day - 1;
    if(day <=0){
      month = month - 1;
      day = 31;
      if(month<10){
        month = "0" + month;
      }
    }
    if(month<=0){
      year = year -1;
      month = 12;
      day = 31;
    }
    if(day<10){
      day = '0' + day;
    }
    query = year + '/' + month + '/' + day;
    res = await searchRate({ date:query});
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
      console.log(interestRateRes);
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
