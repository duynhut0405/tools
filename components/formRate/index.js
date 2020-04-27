import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { withTranslation } from '../../i18n';
import currency from './dataCurrent.json';
import ExchangeRate from './exchangeRate';
import RateSelect from './RateSelect';

const propTypes = {
  data: PropTypes.object,
  interestRate: PropTypes.array
};

function FormRate({ data, interestRate }) {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [currencyFrom, setcurrencyFrom] = useState('VND');
  const [currencyTo, setcurrencyTo] = useState('USD');
  const [arrTo, setArrTo] = useState(data.exchangeRateDetail);
  const { t } = useTranslation();

  const getCurrentTo = name => {
    const obj = currency.content.find(item => item.currency === name);
    if (obj) {
      setArrTo(obj.children);
    } else {
      setArrTo([]);
      setTo(0);
    }
  };

  const getSellBycurrency = currency => {
    const obj = data.exchangeRateDetail.find(item => item.currency === currency);
    if (obj) {
      return obj.sell;
    }
    return 0;
  };

  const getBuyTransferBycurrency = currency => {
    const obj = data.exchangeRateDetail.find(item => item.currency === currency);
    return obj.buy_transfer;
  };

  const Calculator = () => {
    if (getSellBycurrency(currencyTo) === 0) {
      setTo(0);
    } else {
      const result =
        Number(from) * (getBuyTransferBycurrency(currencyFrom) / getSellBycurrency(currencyTo));
      if (result === 0) {
        setTo(0);
      } else {
        setTo(result.toLocaleString(navigator.language, { minimumFractionDigits: 4 }));
      }
    }
  };

  useEffect(() => {
    if (from !== '' || currencyFrom !== 'VND' || currencyTo !== 'USD') {
      Calculator();
    }
  }, [from, currencyFrom, currencyTo]);

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
                      data={data.exchangeRateDetail}
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
                    value={from}
                    onChange={e => {
                      setFrom(e.target.value);
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
                  <input className="input" placeholder={t('amount')} name="to" value={to} />
                </div>
                <p>{`${t('updated_at')} ${moment(data.date_update).format('HH:mm')} ${t(
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

export default withTranslation('common')(FormRate);
