import React from 'react';
import Proptypes from 'prop-types';
import map from 'lodash/map';
import { withTranslation } from '../../i18n';
import { rate } from '../../utils/currency';

const propTypes = {
  data: Proptypes.array,
  t: Proptypes.func
};

function Table({ t, data }) {
  return (
    <div className="table-responsive">
      <table className="table table-full table-ti-gia">
        <tbody>
          <tr>
            <th>{t('table_rate.key')}</th>
            {/* <th>{t('table_rate.name')}</th> */}
            <th>{t('table_rate.buy')}</th>
            <th>{t('table_rate.buy_transfer')}</th>
            <th>{t('table_rate.sell')}</th>
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

export default withTranslation('common')(Table);
