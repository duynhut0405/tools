import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import t from '../../translation';
import { rate } from '../../utils/currency';

const propTypes = {
  data: PropTypes.array
};

function TableRate({ data, type }) {
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
            const valueCurrency = value.currency.split(' ')[0];
            return (
              <tr key={value.id}>
                <td className="td-img">
                  <img
                    className="lazyload"
                    data-src={`/static/currency/${valueCurrency}.png`}
                    alt="images"
                    width="24"
                  />
                  {value.currency}
                </td>
                <td>{rate(value.buy_cash)}</td>
                <td>{rate(value.buy_transfer)}</td>
                <td>{rate(value.sell)}</td>
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
            <th>USD</th>
            <th>VND</th>
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

export default TableRate;
