import React from 'react';
import Proptypes from 'prop-types';
import { rate } from '../../../utils/currency';
import map from 'lodash/map';
import t from '../../../translation';

const propTypes = {
  active: Proptypes.bool,
  data: Proptypes.array,
  show_result: Proptypes.bool,
  setActive: Proptypes.func,
  sum: Proptypes.number,
  interest: Proptypes.number,
  t: Proptypes.func
};

function Table({ active, setActive, data, show_result, sum, interest }) {
  return (
    <div className="sec-b">
      <div className="container">
        <div className="accodion accodion-3">
          <div className="accodion-tab ">
            <input type="checkbox" id="chck_1_1" checked={active} />
            <label className="accodion-title uppercase" onClick={setActive}>
              <span>{t('tool_table_title')}</span>
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
                        <th colSpan="2">{t('tool_table_repayment_period')}</th>
                        <th>{t('tool_table_number_remains')}</th>
                        <th>{t('tool_table_origin')}</th>
                        <th>{t('tool_table_interest')}</th>
                        <th>{t('tool_table_total_amount')}</th>
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
                          <th colSpan="2">{t('tool_table_total')}</th>
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
    </div>
  );
}

Table.propTypes = propTypes;

export default Table;
