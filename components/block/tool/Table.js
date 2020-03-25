import React from 'react';
import Proptypes from 'prop-types';
import { rate } from '../../../utils/currency';
import map from 'lodash/map';

const propTypes = {
  active: Proptypes.bool,
  data: Proptypes.array,
  show_result: Proptypes.bool,
  setActive: Proptypes.func,
  sum: Proptypes.number,
  interest: Proptypes.number
};

function Table({ active, setActive, data, show_result, sum, interest }) {
  return (
    <div className="sec-b container">
      <div className="accodion accodion-3">
        <div className="accodion-tab ">
          <input type="checkbox" id="chck_1_1" checked={active} />
          <label className="accodion-title uppercase" onClick={setActive}>
            <span> Xem bảng tính trả tiền hàng tháng</span>
            <span className="triangle">
              <i className="icon-plus"></i>
            </span>
          </label>
          <div className="accodion-content entry-content">
            <div className="inner">
              <div className="table-responsive th-result-table-js">
                <table className="table table-full">
                  <tbody>
                    <tr>
                      <th colSpan="2">Kỳ trả nợ</th>
                      <th>Số gốc còn lại</th>
                      <th>Gốc</th>
                      <th>Lãi</th>
                      <th>Tổng gốc + Lãi</th>
                    </tr>
                    {map(data, value => (
                      <tr key={value.interest_period}>
                        <td>{value.strDate}</td>
                        <td>{value.interest_period}</td>
                        <td>{rate(value.amount_remaining)}</td>
                        <td>{rate(value.amount_paid)}</td>
                        <td>{rate(value.interest)}</td>
                        <td>{rate(value.total)}</td>
                      </tr>
                    ))}
                    {show_result && (
                      <tr>
                        <th colSpan="2">Tổng</th>
                        <th></th>
                        <th>{rate(sum)}(VNĐ)</th>
                        <th>{rate(interest)}(VNĐ)</th>
                        <th>{rate(Math.ceil(sum + interest))}(VNĐ)</th>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Table.propTypes = propTypes;

export default Table;
