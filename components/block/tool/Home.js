import React, { useState, useEffect } from 'react';
import FieldInput from './FieldInput';
import Table from './Table';
import Result from './Result';
import t from '../../../translation';
import Proptypes from 'prop-types';
import { rate } from '../../../utils/currency';

const propTypes = {
  maxValue: Proptypes.number,
  interest_rate: Proptypes.number,
  t: Proptypes.func,
  padding: Proptypes.string,
  id: Proptypes.number,
  type: Proptypes.string
};

function ToolHome({ maxValue, interest_rate, padding, id, type }) {
  const [estimate_rate, setEstimateRate] = useState('0');
  const [estimate_mortgage, setEstimateMortgage] = useState('0');
  const [amount, SetAmount] = useState('0');
  const [month, setMonth] = useState('1');
  const [monthlyInterest, setMonthlyInterest] = useState(0); //Tiền lãi hàng tháng
  const [monthlypayment, setMonthlyPayment] = useState(0); //Tiền gốc hàng tháng
  const [checkAmount, setCheckAmount] = useState(0);
  const [table, setTable] = useState([]);
  const [active, setActive] = useState(false);
  const [sum, setSum] = useState(0);
  const [interest, setInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [show_result, setShowResult] = useState(false);
  const [checked, setChecked] = useState('1');
  const [title, setTitle] = useState(t('tool_options_housing_loan'));

  useEffect(() => {
    const estimate_momney = (Number(estimate_rate.replace(/[^0-9.-]+/g, '')) * 80) / 100;
    const mortgage_momney = (Number(estimate_mortgage.replace(/[^0-9.-]+/g, '')) * 70) / 100;
    const _month = Number(month.replace(/[^0-9.-]+/g, ''));
    if (estimate_momney > maxValue) {
      setEstimateRate(rate(maxValue));
    }
    if (_month > 84) {
      setMonth('84');
    }
    if (mortgage_momney > maxValue) {
      setEstimateMortgage(rate(maxValue));
    }
    if (estimate_momney < mortgage_momney) {
      const month_payment = Math.ceil(estimate_momney / _month); //Tiền gốc hàng tháng
      const month_interest = Math.ceil((estimate_momney * interest_rate) / 100 / 12); //Tiền lãi hàng tháng
      setMonthlyInterest(month_interest);
      setMonthlyPayment(month_payment);
      SetAmount(rate(estimate_momney));
      setCheckAmount(estimate_momney);
    } else {
      const month_payment = Math.ceil(mortgage_momney / _month); //Tiền gốc hàng tháng
      const month_interest = Math.ceil((mortgage_momney * interest_rate) / 100 / 12); //Tiền lãi hàng tháng
      setMonthlyInterest(month_interest);
      setMonthlyPayment(month_payment);
      SetAmount(rate(mortgage_momney));
      setCheckAmount(mortgage_momney);
    }
  }, [estimate_rate, estimate_mortgage, month]);

  const onBlur = () => {
    const _amount = Number(amount.replace(/[^0-9.-]+/g, ''));
    if (_amount > checkAmount) {
      SetAmount(rate(checkAmount));
    }
  };

  const calculation = event => {
    event.preventDefault();
    const __month = Number(month.replace(/[^0-9.-]+/g, ''));
    const _amount = Number(amount.replace(/[^0-9.-]+/g, ''));
    const month_payment = Math.ceil(_amount / __month); //Tiền gốc hàng tháng
    const month_interest = Math.ceil((month_payment * interest_rate) / 100 / 12); //Tiền lãi hàng tháng
    // const total = (month_interest + month_payment) * month;
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

    for (let i = 0; i < __month; i++) {
      tem_sum = Math.ceil(tem_sum - month_payment); // tiền gốc còn lại
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
    setTotalAmount(_sum + _interest);
    setInterest(_interest);
    setMonthlyPayment(month_payment);
    setMonthlyInterest(month_interest);
    setActive(true);
    setShowResult(true);
  };

  return (
    <div className={`${padding} tool-${type}`} id={id}>
      <div className="container">
        <h3 className="text-2xl mb-1 font-bold text-[#002395] sm:text-3xl sm:tracking-tight">
          {title}
        </h3>
        <div className="cttab-xx  sec-b">
          <div className="w-menu-over">
            <div className="p-tool1__select1 p-tool1__select1-js">
              <label className="option1 radio">
                {t('tool_options_housing_loan')}
                <input
                  type="radio"
                  checked={checked === '1'}
                  name="radio-loan"
                  onChange={() => {
                    setChecked('1');
                    setTitle(t('tool_options_housing_loan'));
                  }}
                />
                <span className="checkmark1"></span>
              </label>
              <label className="option1 radio">
                {t('tool_options_loans_for_project_houses')}
                <input
                  type="radio"
                  checked={checked === '2'}
                  name="radio-loan"
                  onChange={() => {
                    setChecked('2');
                    setTitle(t('tool_options_loans_for_project_houses'));
                  }}
                />
                <span className="checkmark1"></span>
              </label>
              <label className="option1 radio">
                {t('tool_options_lending_for_construction_and_repair_of_houses')}
                <input
                  type="radio"
                  checked={checked === '3'}
                  name="radio-loan"
                  onChange={() => {
                    setChecked('3');
                    setTitle(t('tool_options_lending_for_construction_and_repair_of_houses'));
                  }}
                />
                <span className="checkmark1"></span>
              </label>
              <label className="option1 radio">
                {t('tool_options_lending_for_home_furnishings')}
                <input
                  type="radio"
                  checked={checked === '4'}
                  name="radio-loan"
                  onChange={() => {
                    setChecked('4');
                    setTitle(t('tool_options_lending_for_home_furnishings'));
                  }}
                />
                <span className="checkmark1"></span>
              </label>
            </div>
          </div>
          <div className="tab-content">
            <div className="active">
              <div className="tab-inner  ">
                <div className="form-vay-von">
                  <div className="row ">
                    <div className="col-md-7 ">
                      <div className="inner">
                        <FieldInput
                          label={t('estimated_home_purchase_value')}
                          maxValue={maxValue}
                          value={estimate_rate}
                          onChange={value => setEstimateRate(value)}
                        />
                        <FieldInput
                          label={t('estimated_value_of_collateral')}
                          maxValue={maxValue}
                          value={estimate_mortgage}
                          onChange={value => setEstimateMortgage(value)}
                        />
                        <FieldInput
                          label={t('amount_can_borrowed')}
                          maxValue={Number(amount.replace(/[^0-9.-]+/g, ''))}
                          value={amount}
                          onBlur={onBlur}
                          onChange={value => SetAmount(value)}
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
                        interest_rate={interest_rate}
                        amount={Number(amount.replace(/[^0-9.-]+/g, ''))}
                        monthlyInterest={null} //tiền lãi hàng tháng
                        monthlypayment={monthlypayment} //Tiền gốc hàng tháng
                        equity_capital={Number(estimate_mortgage.replace(/[^0-9.-]+/g, ''))} // vốn tự có
                        month={month}
                        totalAmount={totalAmount}
                      />
                    </div>
                  </div>
                  <a className="btn" onClick={calculation}>
                    {t('show_table')}
                  </a>
                  <p className="note">{t('tool_note')}</p>
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

ToolHome.propTypes = propTypes;

export default ToolHome;
