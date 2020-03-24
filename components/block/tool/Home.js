import React, { useState } from 'react';
import FieldInput from './FieldInput';
import Table from './Table';
import Result from './Result';
import { withTranslation } from '../../../i18n';
import { useTranslation } from 'react-i18next';

function ToolHome() {
  const [estimate_rate, setEstimateRate] = useState('5000000');
  const [estimate_mortgage, setEstimateMortgage] = useState('5000000');
  const [amount, SetAmount] = useState('0');
  const [month, setMonth] = useState('1');
  const [monthlyInterest, setMonthlyInterest] = useState(0); //Tiền lãi hàng tháng
  const [monthlypayment, setMonthlyPayment] = useState(0); //Tiền gốc hàng tháng
  const [table, setTable] = useState([]);
  const [active, setActive] = useState(false);
  const [sum, setSum] = useState(0);
  const [interest, setInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [show_result, setShowResult] = useState(false);
  const { t } = useTranslation();

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
  };

  const calculation = event => {
    event.preventDefault();
    const estimate_momney = (Number(estimate_rate.replace(/[^0-9.-]+/g, '')) * 80) / 100;
    const mortgage_momney = (Number(estimate_mortgage.replace(/[^0-9.-]+/g, '')) * 70) / 100;
    const _month = Number(month.replace(/[^0-9.-]+/g, ''));
    if (estimate_momney < mortgage_momney) {
      const month_payment = Math.ceil(estimate_momney / _month); //Tiền gốc hàng tháng
      const month_interest = Math.ceil((estimate_momney * 12) / 100 / 12); //Tiền lãi hàng tháng
      const total = (month_interest + month_payment) * _month;
      setMonthlyInterest(month_interest);
      setMonthlyPayment(month_payment);
      setTotalAmount(total);
      SetAmount(estimate_momney);
      tableResult(estimate_momney, month_payment, month_interest, _month);
    } else {
      const month_payment = Math.ceil(mortgage_momney / _month); //Tiền gốc hàng tháng
      const month_interest = Math.ceil((mortgage_momney * 12) / 100 / 12); //Tiền lãi hàng tháng
      const total = (month_interest + month_payment) * _month;
      setMonthlyInterest(month_interest);
      setMonthlyPayment(month_payment);
      setTotalAmount(total);
      SetAmount(mortgage_momney);
      tableResult(mortgage_momney, month_payment, month_interest, _month);
    }
    setShowResult(true);
  };

  return (
    <div className="container">
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
                        label="Ước tính giá trị nhà mua:"
                        maxValue={100000000}
                        value={estimate_rate}
                        onChange={value => setEstimateRate(value)}
                      />
                      <FieldInput
                        label="Ước tính giá trị tài sản thế chấp:"
                        maxValue={1000000000}
                        value={estimate_mortgage}
                        onChange={value => setEstimateMortgage(value)}
                      />
                      <FieldInput
                        label="Số tiền có thể vay:"
                        maxValue={1000000000}
                        value={amount}
                        onChange={value => setEstimateMortgage(value)}
                      />
                      <FieldInput
                        label="Kỳ hạn vay:"
                        maxValue={84}
                        value={month}
                        note
                        onChange={value => setMonth(value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <Result
                      title={t('tool_consumer_loans.title')}
                      subtitle={t('loan_amount')}
                      amount={amount}
                      monthlyInterest={monthlyInterest} //tiền lãi hàng tháng
                      monthlypayment={monthlypayment} //Tiền gốc hàng tháng
                      equity_capital={Number(estimate_mortgage.replace(/[^0-9.-]+/g, ''))} // vốn tự có
                      month={month}
                      totalAmount={totalAmount}
                    />
                  </div>
                </div>
                <p className="note">
                  (*) Bảng tính chỉ mang tính tham khảo và không phải là cam kết về khoản vay của
                  MBBank
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

ToolHome.getInitialProps = async () => ({
  namespacesRequired: ['common', 'common']
});

export default withTranslation('common')(ToolHome);
