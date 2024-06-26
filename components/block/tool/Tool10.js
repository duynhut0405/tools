import React, { useState, useEffect } from 'react';
import FieldInput1 from './FieldInput1';
import Table from './Table';
import Result1 from './Result1';
import t from '../../../translation';
import { rate } from '../../../utils/currency';

import Proptypes from 'prop-types';
import SliderCustom from './Slider';

const propTypes = {
  minValue: Proptypes.number,
  maxValue: Proptypes.number,
  interest_rate: Proptypes.number,
  t: Proptypes.func,
  padding: Proptypes.string,
  id: Proptypes.number,
  type: Proptypes.string
};

function Tool10({ minValue, maxValue, interest_rate, padding, id, type }) {
  const [amount, setAmount] = useState('1000000000');
  const [month, setMonth] = useState('3');
  const [monthlyInterest, setMonthlyInterest] = useState(0);
  const [monthlypayment, setMonthlyPayment] = useState(0);
  const [checkAmount, setCheckAmount] = useState(0);
  // const [totalAmount, setTotalAmount] = useState(0);
  const [table, setTable] = useState([]);
  const [sum, setSum] = useState(0);
  const [interest, setInterest] = useState(0);
  const [higthpay, sethigthpay] = useState(
    Math.ceil((1000000000 * (interest_rate / 100)) / 12 + 1000000000 / 180)
  );
  const [active, setActive] = useState(false);
  const [show_result, setShowResult] = useState(false);
  const [maxMonth, setMaxMonth] = useState(240);

  const calculation = () => {
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

  useEffect(() => {
    const _month = Number(month.replace(/[^0-9.-]+/g, ''));
    const _amount = Number(amount.replace(/[^0-9.-]+/g, ''));
    if (_month > maxMonth) {
      setMonth(rate(maxMonth));
    }
    const a = Math.ceil((_amount * (interest_rate / 100)) / 12 + _amount / _month);
    sethigthpay(a);
    setMonthlyPayment(Math.ceil(_amount / _month));
  }, [month, amount]);

  const onBlur = () => {
    const _amount = Number(amount.replace(/[^0-9.-]+/g, ''));
    if (_amount > checkAmount) {
      setAmount(rate(checkAmount));
    }
  };

  function onScroll() {
    const elmnt = document.getElementById('featured');
    if (elmnt !== null) {
      elmnt.scrollIntoView();
    }
  }

  return (
    <div className={`${padding} tool-${type}`} id={id}>
      <div className="container">
        <h3 className="text-2xl mb-1 font-bold text-[#f0a71d] sm:text-3xl sm:tracking-tight">
          {t('tool_10_title')}
        </h3>
        <div className="cttab-xx  sec-b">
          <div className="tab-content">
            <div className="active">
              <div className="tab-inner  ">
                <div className="form-vay-von">
                  <div className="row ">
                    <div className="col-md-7 ">
                      <div className="inner">
                        <FieldInput1
                          label={t('money_can_loan')}
                          maxValue={50000000000}
                          value={amount}
                          // onBlur={onBlur}
                          onChange={value => {
                            setAmount(value);
                          }}
                          placeholder={'Nhập số tiền'}
                        />
                        <FieldInput1
                          label={t('term_loan')}
                          maxValue={84}
                          value={month}
                          note="Tháng"
                          onChange={value => {
                            setMonth(value);
                          }}
                          placeholder={'Nhập tháng'}
                        />
                        <SliderCustom setValue={setMonth} value={Number(month)} />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <Result1
                        interest_rate={interest_rate}
                        amount={Number(amount.replace(/[^0-9.-]+/g, ''))}
                        monthlyInterest={null} //tiền lãi hàng tháng
                        monthlypayment={monthlypayment} //Tiền gốc hàng tháng
                        month={month}
                        totalAmount={sum + interest}
                        higthPay={higthpay}
                        data={table}
                      />
                    </div>
                  </div>
                  <p className="note">{t('tool_note_2')}</p>
                  <a
                    className="btn"
                    onClick={e => {
                      e.preventDefault();
                      setActive(!active);
                      calculation();
                    }}
                    style={{ marginRight: '15px' }}
                  >
                    {t('show_table')}
                  </a>
                  <a className="btn" onClick={() => onScroll()}>
                    {t('register_now')}
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

Tool10.propTypes = propTypes;

export default Tool10;
