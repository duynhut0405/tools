import React, { useState } from 'react';
import Fields from './Fields';
import Result from './Result';
import { withTranslation } from '../../../i18n';
import { useTranslation } from 'react-i18next';
import Proptypes from 'prop-types';

const propTypes = {
  minValue: Proptypes.number,
  maxValue: Proptypes.number,
  interest_rate: Proptypes.number
};

function ConsumerLoansWithCollateral({ minValue, maxValue, interest_rate }) {
  const [loan_amount, setLoanAmount] = useState(5000000);
  const [month, setMonth] = useState(1);
  const [monthlyInterest, setMonthlyInterest] = useState(0);
  const [monthlypayment, setMonthlyPayment] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [show_result, setShowResult] = useState(false);
  const { t } = useTranslation();

  const calculation = event => {
    event.preventDefault();
    const month_payment = Math.ceil(loan_amount / month); //Tiền gốc hàng tháng
    const month_interest = Math.ceil((loan_amount * interest_rate) / 100 / 12); //Tiền lãi hàng tháng
    const total = (month_interest + month_payment) * month;
    setMonthlyPayment(month_payment);
    setMonthlyInterest(month_interest);
    setTotalAmount(total);
    setShowResult(true);
  };

  return (
    <section className="sec-tb sec-cong-cu">
      <div className="container seb-bt">
        <h2 className="ht">{t('tool_consumer_loans.title')}</h2>
        <form onSubmit={calculation}>
          <div className="row">
            <div className="col-md-8">
              <Fields
                value={loan_amount}
                minValue={minValue}
                maxValue={maxValue}
                oneHandle={value => setLoanAmount(value)}
                title={t('tool_consumer_loans.loan_amount')}
              />
              <Fields
                month
                value={month}
                minValue={1}
                maxValue={84}
                oneHandle={value => setMonth(value)}
                title={t('tool_consumer_loans.loan_term')}
              />
              <div className="vib-v2-btn-dk-congcu">
                <button className="vib-v2-btn-dk02" type="submit">
                  <span>{t('show_result')}</span>
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="result th-result-js">
                {!show_result && (
                  <div className="divtext">
                    <div>{t('total_momney')}</div>
                    <span>
                      <span className="total">0</span>
                    </span>
                  </div>
                )}
                {show_result && (
                  <Result
                    title={t('tool_consumer_loans.title')}
                    subtitle={t('loan_amount')}
                    amount={loan_amount}
                    monthlyInterest={monthlyInterest} //tiền lãi hàng tháng
                    monthlypayment={monthlypayment} //Tiền gốc hàng tháng
                    equity_capital={null} // vốn tự có
                    month={month}
                    totalAmount={totalAmount}
                  />
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

ConsumerLoansWithCollateral.getInitialProps = async () => ({
  namespacesRequired: ['common', 'common']
});

ConsumerLoansWithCollateral.propTypes = propTypes;

export default withTranslation('common')(ConsumerLoansWithCollateral);
