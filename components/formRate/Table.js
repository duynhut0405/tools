import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array
};

function TableRate({ data }) {
  return (
    <table className="table table-borderless">
      <tbody>
        <tr>
          <th>Mã NT</th>
          <th>Mua tiền mặt</th>
          <th>Mua chuyển khoản</th>
          <th>Bán ra</th>
        </tr>
        {map(data, value => {
          return (
            <tr key={value.id}>
              <td>{value.currency}</td>
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

export default TableRate;
