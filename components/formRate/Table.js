import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import t from '../../translation';
import { getLang } from '../../utils/cookie';
import { rate } from '../../utils/currency';

const propTypes = {
  data: PropTypes.array
};

function TableRate({ data, type }) {
  const lang = getLang();
  if (type === 'exchange') {
    return (
      <table className="table">
        <tbody>
          <tr>
            <th>{t(lang, 'codeNT')}</th>
            <th>{t(lang, 'buycash')}</th>
            <th>{t(lang, 'transfer')}</th>
            <th>{t(lang, 'sold_out')}</th>
          </tr>
          {map(data, value => {
            return (
              <tr key={value.id}>
                <td className="td-img">
                  <img
                    className="lazyload"
                    data-src={`static/currency/${value.currency}.png`}
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
            <th>{t(lang, 'period')}</th>
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
