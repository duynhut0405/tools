import React, { useState, useEffect } from 'react';
import t from '../../translation';
import Proptypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getRateService } from '../../services/rate';

const propTypes = {
  changeDate: Proptypes.func,
  onSubmit: Proptypes.func,
  t: Proptypes.func,
  date: Proptypes.any
};

const fetchListRate = async setlistRate => {
  const rateResponse = await getRateService();
  if (rateResponse && rateResponse !== undefined && rateResponse.status === 200) {
    setlistRate(rateResponse.data);
  }
};
function Search({ changeDate, onSubmit, date }) {
  //
  const [listRate, setlistRate] = useState({});

  useEffect(() => {
    fetchListRate(setlistRate);
  }, []);

  const dateDefault = Object.keys(listRate).length > 0 ? new Date(listRate.created_at) : new Date();

  return (
    <div className="search_ tigia mb-30 max950 ">
      <div className="row center">
        <div className="col-md-4 col-lg-3">
          <h3 className="ctext mg-0">{t('table_rate_search')}</h3>
        </div>
        <div className="col-sm-7 col-md-5 col-lg-6">
          <DatePicker selected={date === null ? dateDefault : date} onChange={changeDate}></DatePicker>
        </div>
        <div className="col-sm-5 col-md-3 ">
          <button className="btn lg" onClick={onSubmit}>
          {t('table_rate_submit')}
          </button>          
        </div>

      </div>

      
      

    </div>
  );
}

Search.propTypes = propTypes;

export default Search;

//date === null ? new Date(listRate.created_at) :
