import React from 'react';
import map from 'lodash/map';
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
            const valueCurrency = value.currency ? value.currency.split(' ')[0] : '';
            return (
              <tr key={value.id}>
                <td className="td-img">
                  <img
                    className="lazyload"
                    data-src={`/static/currency/${valueCurrency}.png`}
                    alt="images"
                    width="24"
                    importance="low"
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
      
      <table className="table table-full table-ti-gia">
        <tbody>
          <tr>
            <th style={{textAlign:"center"}}>{t('period')}</th>
            <th style={{textAlign:"center", width: "10%"}}>VND</th>
            {/* <th style={{textAlign:"center"}}>{t('note_table')}</th> */}
          </tr>
          {map(data, value => {
            return (
              <tr key={value.id}>
                <td style={{textAlign:"center"}}>{value.term}</td>
                <td style={{textAlign:"center"}}>{`${value.interest_rate} %`}</td>
                {/* <td>{value.description === null && ``}
                {value.description != null && `${value.description}`}</td> */}
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
