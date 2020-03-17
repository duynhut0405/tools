import React, { useState, useEffect } from 'react';
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

function ProductionBusiness({ minValue, maxValue, interest_rate }) {
  const [total_capital_needs, setTotalCapitalNeeds] = useState(5000000);
  const [equity_capital, setEquityCapital] = useState(5000000);
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState(1);
  const [month, setMonth] = useState(1);
  const [monthlyInterest, setMonthlyInterest] = useState(0);
  const [monthlypayment, setMonthlyPayment] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [changeActive, setChangeActive] = useState(false);
  const [show_result, setShowResult] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    if (total_capital_needs > equity_capital && equity_capital !== 0) {
      setChangeActive(true);
      let total = 0;
      if (type === 1) {
        total = ((total_capital_needs - equity_capital) * 90) / 100;
        setAmount(total);
      } else {
        total = ((total_capital_needs - equity_capital) * 85) / 100;
        setAmount(total);
      }
    }
    if (equity_capital === total_capital_needs) {
      setAmount(0);
    }
    if (equity_capital > total_capital_needs) {
      setAmount(0);
      setEquityCapital(0);
    }
    if (total_capital_needs === minValue) {
      setChangeActive(false);
    }
  }, [total_capital_needs, equity_capital, type]);

  const calculation = event => {
    event.preventDefault();
    const month_interest = (amount * interest_rate) / 100 / month;
    const month_payment = amount / month + month_interest;
    const total = month_payment * month;
    setMonthlyInterest(month_interest);
    setMonthlyPayment(month_payment);
    setTotalAmount(total);
    setShowResult(true);
  };

  return (
    <section className="sec-tb sec-cong-cu">
      <div className="container seb-bt">
        <h2 className="ht">{t('too_product_business.title')}</h2>
        <form onSubmit={calculation}>
          <div className="row">
            <div className="col-md-8">
              <div className="dropdown th-sec-pav">
                <select
                  className="form-control select1"
                  name="type"
                  value={type}
                  onChange={event => setType(parseInt(event.target.value))}
                >
                  <option value={1}>{t('too_product_business.limit_valve')}</option>
                  <option value={2}>{t('too_product_business.investment_loan')}</option>
                </select>
              </div>
              <Fields
                value={total_capital_needs}
                minValue={minValue}
                maxValue={maxValue}
                oneHandle={value => setTotalCapitalNeeds(value)}
                title={t('too_product_business.total_capital_needs')}
              />
              <Fields
                value={equity_capital}
                minValue={minValue}
                maxValue={maxValue}
                oneHandle={value =>
                  changeActive ? setEquityCapital(value) : setEquityCapital(minValue)
                }
                title={t('too_product_business.equity_capital')}
              />
              <Fields
                value={amount}
                minValue={0}
                maxValue={5000000}
                oneHandle={value => (changeActive ? setAmount(value) : setAmount(0))}
                title={t('too_product_business.loan_demand_at_MB')}
              />
              <Fields
                month
                value={month}
                minValue={1}
                maxValue={12}
                oneHandle={value => setMonth(value)}
                title={t('too_product_business.loan_term')}
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
                    title={t('too_product_business.title')}
                    subtitle={t('loan_amount')}
                    amount={amount}
                    monthlyInterest={monthlyInterest}
                    monthlypayment={monthlypayment}
                    equity_capital={equity_capital}
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

ProductionBusiness.getInitialProps = async () => ({
  namespacesRequired: ['common', 'common']
});

ProductionBusiness.propTypes = propTypes;

export default withTranslation('common')(ProductionBusiness);
