import React from 'react';
import { rate } from '../../../utils/currency';
import Proptypes from 'prop-types';

const propTypes = {
  title: Proptypes.string,
  subtitle: Proptypes.string,
  amount: Proptypes.number,
  equity_capital: Proptypes.number,
  monthlyInterest: Proptypes.number,
  monthlypayment: Proptypes.number,
  totalAmount: Proptypes.number,
  month: Proptypes.string
};

function Result({
  title,
  // subtitle,
  amount,
  equity_capital,
  month,
  monthlyInterest,
  monthlypayment,
  totalAmount
}) {
  return (
    <div className="result th-result-js">
      <h3>{title}</h3>
      <div className="row">
        <div className="col-md-6">
          <h5 className="title">Khoản vay:</h5>
        </div>
        <div className="col-md-6">
          <span className="t2">{rate(amount)}</span>
          <span className="t3">VNĐ</span>
        </div>
      </div>
      {equity_capital && (
        <div className="row">
          <div className="col-md-6">
            <h5 className="title">Vốn tự có:</h5>
          </div>
          <div className="col-md-6">
            <span className="t4">{rate(equity_capital)}</span>
            <span className="t3">VNĐ</span>
          </div>
        </div>
      )}
      <div className="row">
        <div className="col-md-6">
          <h5 className="title">Kỳ hạn vay:</h5>
        </div>
        <div className="col-md-6">
          <span className="t5">{month} tháng</span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h5 className="title">Tiền lãi hàng tháng:</h5>
        </div>
        <div className="col-md-6">
          <span className="t4">{rate(monthlyInterest)}</span>
          <span className="t3">VNĐ</span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h5 className="title">Tiền gốc hàng tháng:</h5>
        </div>
        <div className="col-md-6">
          <span className="t4">{rate(monthlypayment)}</span>
          <span className="t3">VNĐ</span>
        </div>
      </div>
      <div className="total row">
        <div className="col-md-6">
          <h5 className="title">Tổng tiền phải trả:</h5>
        </div>
        <div className="col-md-6">
          <span className="t2">{rate(totalAmount)}</span>
          <span className="t3">VNĐ</span>
        </div>
      </div>
    </div>
  );
}

Result.propTypes = propTypes;

export default Result;
