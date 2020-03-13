import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { getLang } from '../../utils/localStorage';
import { useTranslation } from 'react-i18next';
import { withTranslation } from '../../i18n';
import RateSelect from './RateSelect';
import TableRate from './Table';
import ExchangeRate from './exchangeRate';

const propTypes = {
  data: PropTypes.object
};

function FormRate({ data }) {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(getLang());
  }, []);

  return (
    <section className="sec-b sec-tb sec-tigia">
      {data !== undefined && (
        <div className="container">
          <div className="row list-item">
            <div className="col-lg-7">
              <ExchangeRate tab1={t('exchange_rate')} tab2={t('interest_rate')} data1={data} />
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

FormRate.getInitialProps = async () => ({
  namespacesRequired: ['common', 'formRate']
});

export default withTranslation('common')(FormRate);
