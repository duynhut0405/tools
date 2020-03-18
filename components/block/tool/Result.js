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
  month: Proptypes.number
};

function Result({
  title,
  subtitle,
  amount,
  equity_capital,
  month,
  monthlyInterest,
  monthlypayment,
  totalAmount
}) {
  return (
    <div className="mbb-result-calculation">
      <h3 className="mbb-title">
        {title}
        <br /> {subtitle}
        <span className="ml-2">{rate(amount)} VNĐ</span>
      </h3>
      <div className="line-v2-row-result-calc">
        {equity_capital !== null && (
          <h4>
            Vốn tự có: <span>{rate(equity_capital)} VNĐ</span>
          </h4>
        )}
        <h4>
          Kỳ hạn vay: <span>{month} THÁNG</span>
        </h4>
        <h4>
          Tiền lãi hàng tháng: <span>{rate(monthlyInterest)} VNĐ</span>
        </h4>
        <h4>
          Tiền gốc hàng tháng: <span>{rate(monthlypayment)} VNĐ</span>
        </h4>
        <h4>
          Tổng tiền phải trả: <span>{rate(totalAmount)} VNĐ</span>
        </h4>
      </div>
    </div>
  );
}

Result.propTypes = propTypes;

export default Result;
