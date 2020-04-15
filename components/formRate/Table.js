import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { withTranslation } from '../../i18n';

const propTypes = {
  data: PropTypes.array
};

function TableRate({ data, type }) {
  const { t } = useTranslation();
  if (type === 'exchange') {
    return (
      <table className="table">
        <tbody>
          <tr>
            <th>{t('codeNT')}</th>
            <th>{t('buycash')}</th>
            <th>{t('transfer')}</th>
            <th>{t('sold_out')}</th>
          </tr>
          {map(data, value => {
            return (
              <tr key={value.id}>
                <td>
                  <img src="static/flags/vn.png" alt="" style={{ top: '-1px' }} />
                  {value.currency}
                </td>
                <td>{value.buy_cash}</td>
                <td>{value.buy_transfer}</td>
                <td>{value.sell}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  if (type === 'interest') {
    return (
      <table className="table">
        <tbody>
          <tr>
            <th>{t('period')}</th>
            <th>{t('USD')}</th>
            <th>{t('VND')}</th>
          </tr>
          {map(data, value => {
            return (
              <tr key={value.id}>
                <td>{value.term}</td>
                <td>{`${value.interest_rate_usd} %`}</td>
                <td>{`${value.interest_rate} %`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

TableRate.propTypes = propTypes;

TableRate.getInitialProps = async () => ({
  namespacesRequired: ['common', 'common']
});

export default withTranslation('common')(TableRate);
