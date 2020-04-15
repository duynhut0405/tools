import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { withTranslation } from '../../i18n';

const propTypes = {
  data: PropTypes.array
};

function TableRate({ data }) {
  const { t } = useTranslation();
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
              <td style={{ display: 'flex' }}>
                <img
                  src={`static/currency/${value.currency}.svg`}
                  alt=""
                  style={{ top: '-1px' }}
                  width="24"
                />
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

TableRate.propTypes = propTypes;

export default withTranslation('common')(TableRate);
