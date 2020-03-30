import React, { useState, useEffect } from 'react';
import FieldInput from './FieldInput';
import Table from './Table';
import Result from './Result';
import { withTranslation } from '../../../i18n';
import { rate } from '../../../utils/currency';

import Proptypes from 'prop-types';

const propTypes = {
  minValue: Proptypes.number,
  maxValue: Proptypes.number,
  interest_rate: Proptypes.number,
  t: Proptypes.func
};

function Tool4({ t, minValue, maxValue, interest_rate }) {
  const [salary, setSalary] = useState('0');
  const [amount, setAmount] = useState('0');
  const [month, setMonth] = useState('1');
  const [monthlyInterest, setMonthlyInterest] = useState(0);
  const [monthlypayment, setMonthlyPayment] = useState(0);
  // const [totalAmount, setTotalAmount] = useState(0);
  const [table, setTable] = useState([]);
  const [sum, setSum] = useState(0);
  const [interest, setInterest] = useState(0);
  const [active, setActive] = useState(false);
  const [show_result, setShowResult] = useState(false);

  useEffect(() => {
    const _month = Number(month.replace(/[^0-9.-]+/g, ''));
    let _salary = Number(salary.replace(/[^0-9.-]+/g, ''));
    if (_month > 60) {
      setMonth('1');
    }
    if (_salary > maxValue) {
      setSalary(rate(maxValue));
    }
    if (_salary <= 20000000 && _salary > 0) {
      _salary = Math.min(Math.ceil(_salary * 10), 180000000);
      setAmount(rate(_salary));
    } else if (_salary > 20000000 && _salary <= 50000000) {
      _salary = Math.min(Math.ceil(_salary * 15, 400000000));
      setAmount(rate(_salary));
    } else if (_salary > 50) {
      setAmount(rate(700000000));
    }
  }, [month, salary, amount]);

  const calculation = event => {
    event.preventDefault();
    // const _salary = Number(salary.replace(/[^0-9.-]+/g, ''));
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
    setMonthlyPayment(month_payment);
    setMonthlyInterest(month_interest);
    setActive(true);
    setShowResult(true);
  };

  return (
    <div className="container sec-tb">
      <h2 className="ht">{t('tool')}</h2>
      <div className="cttab-xx  sec-b">
        <div className="tab-content">
          <div className="active">
            <div className="tab-inner  ">
              <div className="form-vay-von">
                <div className="row ">
                  <div className="col-md-7 ">
                    <div className="inner">
                      <FieldInput
                        label={t('salary')}
                        maxValue={maxValue}
                        value={salary}
                        onChange={value => setSalary(value)}
                      />
                      <FieldInput
                        label={t('amount_can_borrowed')}
                        maxValue={amount}
                        value={amount}
                        onChange={value => setAmount(value)}
                      />
                      <FieldInput
                        label={t('loan_term')}
                        maxValue={84}
                        value={month}
                        onChange={value => setMonth(value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <Result
                      title={t('tool_4_title')}
                      subtitle={t('loan_amount')}
                      interest_rate={interest_rate}
                      amount={Number(amount.replace(/[^0-9.-]+/g, ''))}
                      monthlyInterest={null} //tiền lãi hàng tháng
                      monthlypayment={monthlypayment} //Tiền gốc hàng tháng
                      equity_capital={null} // vốn tự có
                      month={month}
                      totalAmount={sum + interest}
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

Tool4.propTypes = propTypes;

export default withTranslation('common')(Tool4);
