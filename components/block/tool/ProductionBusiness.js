import React, { useState, useEffect } from 'react';
import FieldInput from './FieldInput';
import Table from './Table';
import Result from './Result';
import { withTranslation } from '../../../i18n';
import Proptypes from 'prop-types';

const propTypes = {
  minValue: Proptypes.number,
  maxValue: Proptypes.number,
  interest_rate: Proptypes.number,
  t: Proptypes.func
};

function ProductionBusiness({ t, minValue, maxValue, interest_rate }) {
  const [total_capital_needs, setTotalCapitalNeeds] = useState('5000000');
  const [equity_capital, setEquityCapital] = useState('5000000');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState(1);
  const [month, setMonth] = useState(1);
  const [monthlyInterest, setMonthlyInterest] = useState(0);
  const [monthlypayment, setMonthlyPayment] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [changeActive, setChangeActive] = useState(false);
  const [show_result, setShowResult] = useState(false);
  const [table, setTable] = useState([]);
  const [active, setActive] = useState(false);
  const [sum, setSum] = useState(0);
  const [interest, setInterest] = useState(0);
  const [title, setTitle] = useState(t('Vay hạn mức'));

  const tableResult = (sottien, goc, lai, time) => {
    const d = new Date();
    const day = d.getDate();
    let _month = d.getMonth() + 1;
    let year = d.getFullYear();
    let strDate = `${day}/${_month < 10 ? `0${_month}` : _month}/${year}`;
    let _table = [
      {
        strDate,
        interest_period: 0, //kỳ trả lãi
        amount_remaining: sottien, //tiền gốc còn lại
        amount_paid: 0, // số tiền gốc phải trả
        interest: 0, // Số tiền lãi phải trả
        total: 0 // 	Tổng tiền gốc và lãi
      }
    ];
    let tem_sum = sottien;
    let _sum = 0;
    let _interest = 0;
    for (let i = 0; i < time; i++) {
      tem_sum = tem_sum - goc;
      _sum = _sum + goc;
      _interest = _interest + lai;
      if (_month === 12) {
        _month = 1;
        year = year + 1;
      } else {
        _month = _month + 1;
      }
      strDate = `${day}/${_month < 10 ? `0${_month}` : _month}/${year}`;
      _table = [
        ..._table,
        {
          strDate,
          interest_period: i + 1, //kỳ trả lãi
          amount_remaining: tem_sum, //tiền gốc còn lại
          amount_paid: goc, // số tiền gốc phải trả
          interest: lai, // Số tiền lãi phải trả
          total: lai + goc // 	Tổng tiền gốc và lãi
        }
      ];
    }
    setSum(_sum);
    setTable(_table);
    setInterest(_interest);
    setActive(true);
  };

  useEffect(() => {
    const _total_capital_needs = Number(total_capital_needs.replace(/[^0-9.-]+/g, ''));
    const _equity_capital = Number(equity_capital.replace(/[^0-9.-]+/g, ''));
    if (_total_capital_needs > _equity_capital && _equity_capital !== 0) {
      setChangeActive(true);
      let total = 0;
      if (type === 1) {
        total = Math.ceil(((_total_capital_needs - _equity_capital) * 90) / 100);
        setAmount(total);
      } else {
        total = Math.ceil(((_total_capital_needs - _equity_capital) * 85) / 100);
        setAmount(total);
      }
    }
    if (_equity_capital === _total_capital_needs) {
      setAmount(0);
    }
    if (_equity_capital > _total_capital_needs) {
      setAmount(0);
      setEquityCapital('0');
    }
    if (_total_capital_needs === minValue) {
      setChangeActive(false);
    }
  }, [total_capital_needs, equity_capital, type]);

  const calculation = event => {
    event.preventDefault();
    const month_interest = Math.ceil((amount * interest_rate) / 100 / 12); //tiền lãi
    const month_payment = Math.ceil(amount / month); // tiền gốc
    const total = (month_interest + month_payment) * month; // tổng tiền
    setMonthlyInterest(month_interest);
    setMonthlyPayment(month_payment);
    setTotalAmount(total);
    tableResult(amount, month_payment, month_interest, month);
    setShowResult(true);
  };

  return (
    <div className="container sec-tb">
      <h2 className="ht">{t('tool')}</h2>
      <div className="cttab-xx  sec-b sec-tb">
        <div className="w-menu-over">
          <div className="p-tool1__select1 p-tool1__select1-js">
            <label className="option1">
              {t('loan_limit')}
              <input
                type="radio"
                checked={type === 1}
                name="radio-loan1"
                onChange={() => {
                  setType(1);
                  setTitle(t('loan_limit'));
                }}
              />
              <span className="checkmark1"></span>
            </label>
            <label className="option1">
              {t('investment_loans')}
              <input
                type="radio"
                checked={type === 2}
                name="radio-loan1"
                onChange={() => {
                  setType(2);
                  setTitle(t('investment_loans'));
                }}
              />
              <span className="checkmark1"></span>
            </label>
          </div>
        </div>
        <div className="tab-content">
          <div className="active">
            <div className="tab-inner">
              <div className="form-vay-von">
                <div className="row ">
                  <div className="col-md-7 ">
                    <div className="inner">
                      <FieldInput
                        label={t('total')}
                        maxValue={maxValue}
                        value={total_capital_needs}
                        onChange={value => setTotalCapitalNeeds(value)}
                      />
                      <FieldInput
                        label={t('tool_result.equity_capital')}
                        maxValue={maxValue}
                        value={equity_capital}
                        onChange={value => setEquityCapital(value)}
                      />
                      <FieldInput
                        label={t('total')}
                        maxValue={maxValue}
                        value={amount}
                        onChange={value => setAmount(value)}
                      />
                      <FieldInput
                        label={t('loan_term')}
                        maxValue={84}
                        value={month}
                        note
                        onChange={value => setMonth(value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <Result
                      title={title}
                      // subtitle={t('loan_amount')}
                      amount={amount}
                      monthlyInterest={monthlyInterest} //tiền lãi hàng tháng
                      monthlypayment={monthlypayment} //Tiền gốc hàng tháng
                      equity_capital={Number(equity_capital.replace(/[^0-9.-]+/g, ''))} // vốn tự có
                      month={month}
                      totalAmount={totalAmount}
                    />
                  </div>
                </div>
                <p className="note">{t('tool_note')}</p>
                <a className="btn" onClick={calculation}>
                  {t('show_table')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* table */}
      <Table
        data={table}
        active={active}
        setActive={() => setActive(!active)}
        show_result={show_result}
        sum={sum}
        interest={interest}
      />
    </div>
  );
}

ProductionBusiness.propTypes = propTypes;

export default withTranslation('common')(ProductionBusiness);
