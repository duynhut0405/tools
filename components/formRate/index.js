import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { withTranslation } from '../../i18n';
import RateSelect from './RateSelect';
import ExchangeRate from './exchangeRate';

const propTypes = {
  data: PropTypes.object,
  interestRate: PropTypes.array
};

function FormRate({ data, interestRate }) {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [currencyFrom, setcurrencyFrom] = useState('EUR')
  const [currencyTo, setcurrencyTo] = useState('USD')
  //
  const { t } = useTranslation();
  const getSellBycurrency = (currency) => {
    let obj = data.exchangeRateDetail.find(item => item.currency === currency)
    return obj.sell;
  }
  const handleChangeFrom = (e) => {
    setFrom(e.target.value)
    setTo(getSellBycurrency(currencyFrom)/getSellBycurrency(currencyTo))
  }

  console.log('currencyFrom:', currencyFrom)
  console.log('currencyTo:', currencyTo)
  //const valueTo = from;
  
  return (
    <section className="sec-b sec-tb sec-tigia">
      {data !== undefined && (
        <div className="container">
          <div className="row list-item">
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
                    <RateSelect data={data.exchangeRateDetail} defaultValue={currencyFrom} handleChangeOption={e => setcurrencyFrom(e)}/>
                    <i className="icon-arrow-3"></i>
                  </span>
                  <input className="input" placeholder={t('amount')} name='from' value={from} onChange={handleChangeFrom}/>
                </div>
                <div>{t('to')}</div>
                <div className="input-group">
                  <span className="input-group-addon none">
                    <RateSelect data={data.exchangeRateDetail} defaultValue={currencyTo} handleChangeOption={e => setcurrencyTo(e)}/>
                    <i className="icon-arrow-3"></i>
                  </span>
                  <input className="input" placeholder={t('amount')} name='to' value={to}/>
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
