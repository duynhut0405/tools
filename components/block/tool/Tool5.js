import React, { useState, useEffect } from 'react';
import FieldInput from './FieldInput';
import Table from './Table';
import Result from './Result';
import { withTranslation } from '../../../i18n';
import { useTranslation } from 'react-i18next';
import { rate } from '../../../utils/currency';

import Proptypes from 'prop-types';

const propTypes = {
  minValue: Proptypes.number,
  maxValue: Proptypes.number,
  interest_rate: Proptypes.number
};

function Tool5({ minValue, maxValue, interest_rate }) {
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
  const [maxMonth, setMaxMonth] = useState(84);
  const { t } = useTranslation();
  useEffect(() => {
    const _month = Number(month.replace(/[^0-9.-]+/g, ''));
    let _salary = Number(salary.replace(/[^0-9.-]+/g, ''));
    if (_month > maxMonth) {
      setMonth(maxMonth);
    }
    if (_salary <= 1500000000) {
      setMaxMonth(84);
      _salary = Math.ceil(_salary * 75) / 100;
      setAmount(rate(_salary));
    } else if (_salary > 1500000000 && _salary <= 3000000000) {
      setMaxMonth(72);
      _salary = Math.ceil(_salary * 70) / 100;
      setAmount(rate(_salary));
    } else {
      setMaxMonth(72);
      _salary = Math.ceil(_salary * 55) / 100;
      setAmount(rate(_salary));
    }
  }, [month, salary]);

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
      <h2 className="ht">Công cụ tính</h2>
      <div className="cttab-xx  sec-b">
        <div className="tab-content">
          <div className="active">
            <div className="tab-inner  ">
              <div className="form-vay-von">
                <div className="row ">
                  <div className="col-md-7 ">
                    <div className="inner">
                      <FieldInput
                        label="Giá trị xe ô tô mua:"
                        maxValue={maxValue}
                        value={salary}
                        onChange={value => setSalary(value)}
                      />
                      <FieldInput
                        label="Mức cho vay tối đa:"
                        maxValue={maxValue}
                        value={amount}
                        onChange={value => setAmount(value)}
                      />
                      <FieldInput
                        label="Thời gian cho vay:"
                        maxValue={maxMonth}
                        value={month}
                        onChange={value => setMonth(value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <Result
                      title="Cho vay mua ô tô"
                      subtitle={t('loan_amount')}
                      amount={Number(amount.replace(/[^0-9.-]+/g, ''))}
                      monthlyInterest={monthlyInterest} //tiền lãi hàng tháng
                      monthlypayment={monthlypayment} //Tiền gốc hàng tháng
                      equity_capital={null} // vốn tự có
                      month={month}
                      totalAmount={sum + interest}
                    />
                  </div>
                </div>
                <p className="note">
                  (*) Bảng tính chỉ mang tính tham khảo và không phải là cam kết về khoản vay của
                  MBBank Chỉ áp dụng với trường hợp tài sản thế chấp chính là xe mua và xe ô tô con
                  mới 100%
                </p>
                <a className="btn" onClick={calculation}>
                  Xem bảng
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

Tool5.getInitialProps = async () => ({
  namespacesRequired: ['common', 'common']
});

Tool5.propTypes = propTypes;

export default withTranslation('common')(Tool5);
