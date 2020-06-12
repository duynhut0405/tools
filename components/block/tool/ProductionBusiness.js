import React, { useState, useEffect } from 'react';
import FieldInput from './FieldInput';
import Table from './Table';
import Result from './Result';
import t from '../../../translation';
import Proptypes from 'prop-types';
import { rate } from '../../../utils/currency';
const propTypes = {
  minValue: Proptypes.number,
  maxValue: Proptypes.number,
  interest_rate: Proptypes.number,
  t: Proptypes.func,
  padding: Proptypes.string,
  id: Proptypes.number,
  types: Proptypes.string
};

function ProductionBusiness({ minValue, maxValue, interest_rate, padding, id, types }) {
  const [total_capital_needs, setTotalCapitalNeeds] = useState('0');
  const [equity_capital, setEquityCapital] = useState('0');
  const [amount, setAmount] = useState('0');
  const [checkAmount, setCheckAmount] = useState(0);
  const [maxMonth, setMaxMonth] = useState(12);
  const [type, setType] = useState(1);
  const [month, setMonth] = useState('1');
  const [monthlyInterest, setMonthlyInterest] = useState(0);
  const [monthlypayment, setMonthlyPayment] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [changeActive, setChangeActive] = useState(false);
  const [show_result, setShowResult] = useState(false);
  const [table, setTable] = useState([]);
  const [active, setActive] = useState(false);
  const [sum, setSum] = useState(0);
  const [interest, setInterest] = useState(0);
  const [title, setTitle] = useState(t('loan_limit'));

  useEffect(() => {
    const _total_capital_needs = Number(total_capital_needs.replace(/[^0-9.-]+/g, ''));
    const _equity_capital = Number(equity_capital.replace(/[^0-9.-]+/g, ''));
    const _month = Number(month.replace(/[^0-9.-]+/g, ''));
    if (_total_capital_needs > maxValue) {
      setTotalCapitalNeeds(rate(maxValue));
    }
    if (_equity_capital > maxValue) {
      setEquityCapital(rate(maxValue));
    }
    if (_month > maxMonth) {
      setMonth(rate(maxMonth));
    }
    if (_total_capital_needs > _equity_capital && _equity_capital !== 0) {
      setChangeActive(true);
      let total = 0;
      if (type === 1) {
        total = Math.ceil(((_total_capital_needs - _equity_capital) * 90) / 100);
        setAmount(rate(total));
        setCheckAmount(total);
      } else {
        total = Math.ceil(((_total_capital_needs - _equity_capital) * 85) / 100);
        setAmount(rate(total));
        setCheckAmount(total);
      }
    }
    if (_equity_capital === _total_capital_needs) {
      setAmount('0');
      setCheckAmount(0);
    }
    if (_equity_capital > _total_capital_needs) {
      setAmount('0');
      setCheckAmount(0);
      setEquityCapital('0');
    }
    if (_total_capital_needs === minValue) {
      setChangeActive(false);
    }
  }, [total_capital_needs, equity_capital, type, month]);

  const onBlur = () => {
    const _amount = Number(amount.replace(/[^0-9.-]+/g, ''));
    if (_amount > checkAmount) {
      setAmount(rate(checkAmount));
    }
  };

  const calculation = event => {
    event.preventDefault();
    const _amount = Number(amount.replace(/[^0-9.-]+/g, ''));
    const month_interest = Math.ceil((_amount * interest_rate) / 100 / 12); //tiền lãi
    const month_payment = Math.ceil(_amount / month); // tiền gốc
    // const total = (month_interest + month_payment) * month; // tổng tiền
    let tem_sum = _amount;
    let _sum = 0;
    let _interest = 0;
    const d = new Date();
    const day = d.getDate();
    let _month = d.getMonth() + 1;
    let year = d.getFullYear();
    let strDate = `${day}/${_month < 10 ? `0${_month}` : _month}/${year}`;
    let _table = [
      {
        strDate,
        interest_period: 0, //kỳ trả lãi
        amount_remaining: tem_sum, //tiền gốc còn lại
        amount_paid: 0, // số tiền gốc phải trả
        interest: 0, // Số tiền lãi phải trả
        total: 0 // 	Tổng tiền gốc và lãi
      }
    ];

    for (let i = 0; i < month; i++) {
      tem_sum = tem_sum - month_payment; // tiền gốc còn lại
      const tem_interest = Math.ceil(((month_payment + tem_sum) * interest_rate) / 100 / 12); // tiền lãi hàng tháng
      _sum = _sum + month_payment; // tổng tiền
      _interest = _interest + tem_interest; // tổng gốc
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
          amount_paid: month_payment, // số tiền gốc phải trả
          interest: tem_interest, // Số tiền lãi phải trả
          total: month_payment + tem_interest // 	Tổng tiền gốc và lãi
        }
      ];
    }
    setTable(_table);
    setSum(_sum);
    setInterest(_interest);
    setTotalAmount(_sum + _interest);
    setMonthlyPayment(month_payment);
    setMonthlyInterest(month_interest);
    setActive(true);
    setShowResult(true);
  };

  return (
    <div className={`${padding} tool-${types}`} id={id}>
      <div className="container">
        <h2 className="ht">{title}</h2>
        <div className="cttab-xx  sec-b">
          <div className="w-menu-over">
            <div className="p-tool1__select1 p-tool1__select1-js">
              <label className="option1 radio">
                {t('loan_limit')}
                <input
                  type="radio"
                  checked={type === 1}
                  name="radio-loan1"
                  onChange={() => {
                    setType(1);
                    setMaxMonth(12);
                    setTitle(t('loan_limit'));
                  }}
                />
                <span className="checkmark1"></span>
              </label>
              <label className="option1 radio">
                {t('tool_product_business_investment_loan')}
                <input
                  type="radio"
                  checked={type === 2}
                  name="radio-loan2"
                  onChange={() => {
                    setType(2);
                    setMaxMonth(84);
                    setTitle(t('tool_product_business_investment_loan'));
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
                          label={t('tool_result_equity_capital')}
                          maxValue={maxValue}
                          value={equity_capital}
                          onChange={value => setEquityCapital(value)}
                        />
                        <FieldInput
                          label={t('total')}
                          maxValue={Number(amount.replace(/[^0-9.-]+/g, ''))}
                          onBlur={onBlur}
                          value={amount}
                          onChange={value => setAmount(value)}
                        />
                        <FieldInput
                          label={t('loan_term')}
                          maxValue={maxMonth}
                          value={month}
                          note
                          onChange={value => setMonth(value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <Result
                        title={title}
                        interest_rate={interest_rate}
                        amount={Number(amount.replace(/[^0-9.-]+/g, ''))}
                        monthlyInterest={null} //tiền lãi hàng tháng
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
    </div>
  );
}

ProductionBusiness.propTypes = propTypes;

export default ProductionBusiness;
