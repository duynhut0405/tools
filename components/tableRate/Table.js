import React from 'react';
import Proptypes from 'prop-types';
import map from 'lodash/map';
import t from '../../translation';
import { rate } from '../../utils/currency';

const propTypes = {
  data: Proptypes.array,
  t: Proptypes.func
};

function Table({ data }) {
  return (
    <div className="table-responsive">
      <table className="table table-full table-ti-gia">
        <tbody>
          <tr>
            <th>{t('table_rate_key')}</th>
            {/* <th>{t('table_rate.name')}</th> */}
            <th>{t('table_rate_buy')}</th>
            <th>{t('table_rate_buy_transfer')}</th>
            <th>{t('table_rate_sell')}</th>
          </tr>
          {map(data, rateItmes => (
            <tr key={rateItmes.id}>
              <td>{rateItmes.currency}</td>
              {/* <td>
                <span className="b uppercase">Australian Dollar</span>
              </td> */}
              <td>{rate(rateItmes.buy_cash)}</td>
              <td>{rate(rateItmes.buy_transfer)}</td>
              <td>{rate(rateItmes.sell)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = propTypes;

export default Table;
