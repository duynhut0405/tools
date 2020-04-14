import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { withTranslation } from '../../i18n';
import RateSelect from './RateSelect';
import ExchangeRate from './exchangeRate';

const propTypes = {
  data: PropTypes.object
};

function FormRate({ data, interestRate }) {
  console.log('interestRate', interestRate);
  const { t } = useTranslation();
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
                <h2>{t('change_foreign_currency')}</h2>
                <div>{t('transfer_from')}</div>
                <div className="input-group">
                  <span className="input-group-addon none arrow">
                    <RateSelect data={data.exchangeRateDetail} />
                    <i className="icon-arrow-3"></i>
                  </span>
                  <input className="input" placeholder={t('amount')} />
                </div>
                <div>{t('to')}</div>
                <div className="input-group">
                  <span className="input-group-addon none">
                    <RateSelect data={data.exchangeRateDetail} />
                    <i className="icon-arrow-3"></i>
                  </span>
                  <input className="input" placeholder={t('amount')} />
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
