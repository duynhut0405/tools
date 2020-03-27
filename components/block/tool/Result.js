import React from 'react';
import { rate } from '../../../utils/currency';
import Proptypes from 'prop-types';
import { withTranslation } from '../../../i18n';

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
  t: Proptypes.func
};

function Result({
  title,
  // subtitle,
  amount,
  equity_capital,
  month,
  monthlyInterest,
  monthlypayment,
  totalAmount,
  interest_rate,
  t
}) {
  return (
    <div className="result th-result-js">
      <h3>{title}</h3>
      <div className="row">
        <div className="col-md-6">
          <h5 className="title">{t('loan_amount')}</h5>
        </div>
        <div className="col-md-6">
          <span className="t2">{rate(amount)}</span>
          <span className="t3">VNĐ</span>
        </div>
      </div>
      {equity_capital && (
        <div className="row">
          <div className="col-md-6">
            <h5 className="title">{t('tool_result.equity_capital')}</h5>
          </div>
          <div className="col-md-6">
            <span className="t4">{rate(equity_capital)}</span>
            <span className="t3">VNĐ</span>
          </div>
        </div>
      )}
      <div className="row">
        <div className="col-md-6">
          <h5 className="title">{t('tool_result.loan_term')}</h5>
        </div>
        <div className="col-md-6">
          <span className="t5">
            {month} {t('month')}
          </span>
        </div>
      </div>
      {monthlyInterest && (
        <div className="row">
          <div className="col-md-6">
            <h5 className="title">{t('tool_result.monthly_interest')}</h5>
          </div>
          <div className="col-md-6">
            <span className="t4">{rate(monthlyInterest)}</span>
            <span className="t3">VNĐ</span>
          </div>
        </div>
      )}

      <div className="row">
        <div className="col-md-6">
          <h5 className="title">{t('tool_result.principal_monthly')}</h5>
        </div>
        <div className="col-md-6">
          <span className="t4">{rate(monthlypayment)}</span>
          <span className="t3">VNĐ</span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h5 className="title">Lãi suất:</h5>
        </div>
        <div className="col-md-6">
          <span className="t4">{interest_rate}</span> <span className="t3">%</span>
        </div>
      </div>
      <div className="total row">
        <div className="col-md-6">
          <h5 className="title">{t('tool_result.total_payment')}</h5>
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

export default withTranslation('common')(Result);
