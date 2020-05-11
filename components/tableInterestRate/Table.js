import React from 'react';
import Proptypes from 'prop-types';
import map from 'lodash/map';
import t from '../../translation';

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
            <th>{t('period')}</th>
            <th className="col">USD</th>
            <th className="col">VND</th>
          </tr>
          {map(data, rate => (
            <tr key={rate.id}>
              <td>{rate.term}</td>
              <td>{`${rate.interest_rate_usd} %`}</td>
              <td>{`${rate.interest_rate} %`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = propTypes;

export default Table;
