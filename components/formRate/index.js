import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import t from '../../translation';
import { getLang } from '../../utils/cookie';
import currency from './dataCurrent.json';
import ExchangeRate from './exchangeRate';
import RateSelect from './RateSelect';

const propTypes = {
  data: PropTypes.object,
  interestRate: PropTypes.array
};

function FormRate({ data, interestRate }) {
  const [From, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [currencyFrom, setcurrencyFrom] = useState('USD');
  const [currencyTo, setcurrencyTo] = useState('VND');
  const arrCurrency = data.exchangeRateDetail
    ? [...data.exchangeRateDetail, { currency: 'VND' }]
    : [{}];
  const [arrTo, setArrTo] = useState(arrCurrency ? arrCurrency : []);

  const lang = getLang();

  const getCurrentTo = name => {
    if (name === 'VND') {
      setArrTo(data.exchangeRateDetail);
    } else {
      const obj = currency.content.find(item => item.currency === name);
      if (obj) {
        setArrTo(obj.children);
        setcurrencyTo(obj.children[0].currency);
        if (obj.children[0].currency === 'VND') {
          Calculator();
        }
      } else {
        setArrTo([]);
        setcurrencyTo('');
        setTo(0);
      }
    }
  };

  const getSellBycurrency = currency => {
    const obj = data.exchangeRateDetail.find(item => item.currency === currency);
    if (obj) {
      const result = obj.sell !== null ? obj.sell : 0;
      return result;
    }
    return 0;
  };

  const getBuyTransferBycurrency = currency => {
    const obj = data.exchangeRateDetail.find(item => item.currency === currency);
    if (obj) {
      const result = obj.buy_transfer !== null ? obj.buy_transfer : 0;
      return result;
    }
    return 0;
  };

  const Calculator = () => {
    if (currencyTo === 'VND') {
      const rs = Number(From) * getSellBycurrency(currencyFrom);
      setTo(rs.toFixed(4));
    } else if (currencyFrom === 'VND') {
      const rs = Number(From) / getSellBycurrency(currencyTo);
      setTo(rs.toFixed(4));
    } else if (getSellBycurrency(currencyTo) === 0) {
      setTo(0);
    } else {
      const result =
        Number(From) * (getBuyTransferBycurrency(currencyFrom) / getSellBycurrency(currencyTo));
      if (result === 0) {
        setTo(0);
      } else {
        setTo(result.toFixed(4));
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

  return (
    <section className="sec-b sec-tigia sec-h-2">
      {data !== undefined && (
        <div className="container">
          <div className="row list-item list-2">
            <div className="col-lg-7">
              <ExchangeRate
                tab1={t(lang, 'exchange_rate')}
                tab2={t(lang, 'interest_rate')}
                data1={data}
                data2={interestRate}
              />
            </div>
            <div className="col-lg-5">
              <div className="divquidoi">
                <h2 className="exchange">{t(lang, 'change_foreign_currency')}</h2>
                <div>{t(lang, 'transfer_from')}</div>
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
                    placeholder={t(lang, 'amount')}
                    name="from"
                    value={From}
                    onChange={e => {
                      setFrom(e.target.value);
                    }}
                  />
                </div>
                <div>{t(lang, 'to')}</div>
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
                  <input className="input" placeholder={t(lang, 'amount')} name="to" value={to} />
                </div>
                <p>{`${t(lang, 'updated_at')} ${moment(data.date_update).format('HH:mm')} ${t(
                  lang,
                  'date'
                )} ${moment(data.date_update).format('DD/MM/YYYY')}`}</p>
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
