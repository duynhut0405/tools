import React from 'react';
import { rate } from '../../../utils/currency';
import Proptypes from 'prop-types';
import t from '../../../translation';

const propTypes = {
  title: Proptypes.string,
  subtitle: Proptypes.string,
  amount: Proptypes.number,
  equity_capital: Proptypes.number,
  monthlyInterest: Proptypes.number,
  monthlypayment: Proptypes.number,
  totalAmount: Proptypes.number,
  month: Proptypes.string,
  interest_rate: Proptypes.number,
  higthPay: Proptypes.number,
  t: Proptypes.func,
  data: Proptypes.array
};

function Result({
  title,
  // subtitle,
  amount,
  // equity_capital,
  month,
  // monthlyInterest,
  higthPay,
  monthlypayment,
  totalAmount,
  interest_rate,
  data
}) {
  return (
    <div className="result th-result-js">
      <h3>{title}</h3>
      <div className="row">
        <div className="col-md-6">
          <h5 className="title">{t('loan_amount')} :</h5>
        </div>
        <div className="col-md-6">
          <span className="t2">{rate(amount)}</span>
          <span className="t3">VNĐ</span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h5 className="title">{t('term_loan')}</h5>
        </div>
        <div className="col-md-6">
          <span className="t5">
            {month} {t('month')}
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h5 className="title">{t('interest_rate')} :</h5>
        </div>
        <div className="col-md-6">
          <span className="t2">{rate(interest_rate)}</span>
          <span className="t3">%</span>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h5 className="title">{t('tool_result_principal_monthly')}</h5>
        </div>
        <div className="col-md-6">
          <span className="t4">{rate(monthlypayment)}</span>
          <span className="t3">VNĐ</span>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h5 className="title">{t('best_return_loan')}</h5>
        </div>
        <div className="col-md-6">
          {/* {data.length !== 0 ? ( */}
          <span className="t4">{rate(higthPay)}</span>
          {/* ) : ( */}
          {/* <span className="t4">{rate(0)}</span> */}
          {/* )} */}
          <span className="t3">VNĐ</span>
        </div>
      </div>

      <div className="total row">
        <div className="col-md-6">
          <h5 className="title">{t('tool_result_total_payment')}</h5>
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
