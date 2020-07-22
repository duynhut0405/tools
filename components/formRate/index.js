import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import t from '../../translation';
import currency from './dataCurrent.json';
import ExchangeRate from './exchangeRate';
import RateSelect from './RateSelect';

const propTypes = {
  data: PropTypes.any,
  interestRate: PropTypes.array
};

function FormRate({ data, interestRate }) {
  const [From, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [currencyFrom, setcurrencyFrom] = useState('USD');
  const [currencyTo, setcurrencyTo] = useState('VND');

  const arrNotUSD = data.exchangeRateDetail
    ? data.exchangeRateDetail.filter(item => item.currency && item.currency.split(' ')[0] !== 'USD')
    : [];
  const objUSD = data.exchangeRateDetail
    ? data.exchangeRateDetail.find(
        item =>
          (item.currency && item.currency.split(' ')[0] === 'USD' && item.currency.sell) !== null
      )
    : {};

  const arrCurrency = data.exchangeRateDetail
    ? [{ ...objUSD, currency: 'USD' }, ...arrNotUSD, { currency: 'VND' }]
    : [{}];
  const [arrTo, setArrTo] = useState(arrCurrency ? arrCurrency : []);

  const getSellBycurrency = _currency => {
    const obj = arrCurrency.find(item => item.currency.trim() === _currency.trim());
    if (obj) {
      const result = obj.sell !== null ? obj.sell : 0;
      return result;
    }
    return 0;
  };

  const getBuyTransferBycurrency = _currency => {
    const obj = arrCurrency.find(item => item.currency.trim() === _currency.trim());
    if (obj) {
      const result = obj.buy_transfer !== null ? obj.buy_transfer : 0;
      return result;
    }
    return 0;
  };

  const Calculator = () => {
    if (currencyTo === 'VND') {
      const rs = Number(From) * getSellBycurrency(currencyFrom);
      setTo(rs - Math.floor(rs) === 0 ? rs : rs.toFixed(4));
    } else if (currencyFrom === 'VND') {
      const rs = Number(From) / getSellBycurrency(currencyTo);
      setTo(rs - Math.floor(rs) === 0 ? rs : rs.toFixed(4));
    } else if (getSellBycurrency(currencyTo) === 0) {
      setTo(0);
    } else {
      const result =
        Number(From) * (getBuyTransferBycurrency(currencyFrom) / getSellBycurrency(currencyTo));
      if (result === 0) {
        setTo(0);
      } else {
        setTo(result - Math.floor(result) === 0 ? result : result.toFixed(4));
      }
    }
  };

  const getCurrentTo = name => {
    if (name === 'VND') {
      const arr = arrCurrency.filter(item => item.currency !== 'VND');
      setArrTo(arr);
      setcurrencyTo(arr[0].currency);
    } else {
      const obj = currency.content.find(item => item.currency === name);
      if (obj) {
        setArrTo(obj.children);
        setcurrencyTo(obj.children[0].currency);
        setcurrencyTo('VND');
        if (obj.children[0].currency === 'VND') {
          Calculator();
        }
      } else {
        setArrTo([{ currency: 'VND' }]);
        setcurrencyTo('VND');
        Calculator();
      }
    }
  };

  useEffect(() => {
    getCurrentTo('USD');
    setcurrencyTo('VND');
  }, []);

  useEffect(() => {
    if (From !== 0 || currencyFrom !== 'USD' || currencyTo !== 'VND') {
      Calculator();
    }
  }, [From, currencyFrom, currencyTo]);

  const FormatNumber = number => {
    const n = new Intl.NumberFormat().format(number);
    // const res = n
    //   .slice(0, 9)
    //   .concat('.')
    //   .concat(n.slice(10, 12));
    //console.log(res);
    return n;
  };
  return (
    <section className="sec-b sec-tigia sec-h-2">
      {data !== undefined && (
        <div className="container">
          <div className="row list-item list-2">
            <div className="col-lg-7">
              <ExchangeRate
                tab1={t('exchange_rate')}
                tab2={t('interest_rate')}
                data1={data}
                data2={interestRate}
              />
            </div>
            <div className="col-lg-5">
              <div className="divquidoi">
                <h2 className="exchange">{t('change_foreign_currency')}</h2>
                <div>{t('transfer_from')}</div>
                <div className="input-group">
                  <span className="input-group-addon none arrow">
                    <RateSelect
                      data={arrCurrency}
                      defaultValue={currencyFrom}
                      handleChangeOption={value => {
                        setcurrencyFrom(value);
                        getCurrentTo(value);
                      }}
                    />
                    <i className="icon-arrow-3"></i>
                  </span>
                  <input
                    className="input"
                    placeholder={t('amount')}
                    name="from"
                    value={FormatNumber(From)}
                    onChange={e => {
                      setFrom(Number(e.target.value.replace(/[^0-9.-]+/g, '')));
                    }}
                  />
                </div>
                <div>{t('to')}</div>
                <div className="input-group">
                  <span className="input-group-addon none">
                    <RateSelect
                      data={arrTo}
                      defaultValue={currencyTo}
                      handleChangeOption={e => {
                        setcurrencyTo(e);
                      }}
                    />
                    <i className="icon-arrow-3"></i>
                  </span>
                  <input
                    className="input"
                    placeholder={t('amount')}
                    name="to"
                    value={to.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  />
                </div>
                <p>{`${t('updated_at')} ${moment(data.created_at).format('HH:mm')} ${t(
                  'date'
                )} ${moment(data.created_at).format('DD/MM/YYYY')}`}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

FormRate.propTypes = propTypes;

export default FormRate;
