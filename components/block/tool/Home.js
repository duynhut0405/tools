import React, { useState } from 'react';
import RangeSlider from 'react-rangeslider';
import ReactNumeric from 'react-numeric';
import Result from './Result';
import { withTranslation } from '../../../i18n';
import { useTranslation } from 'react-i18next';

function ToolHome() {
  const [estimate_rate, setEstimateRate] = useState(5000000);
  const [estimate_mortgage, setEstimateMortgage] = useState(5000000);
  const [amount, SetAmount] = useState(0);
  const [monthlyInterest, setMonthlyInterest] = useState(0); //Tiền lãi hàng tháng
  const [monthlypayment, setMonthlyPayment] = useState(0); //Tiền gốc hàng tháng
  const [totalAmount, setTotalAmount] = useState(0);
  const [show_result, setShowResult] = useState(false);
  const { t } = useTranslation();

  const calculation = event => {
    event.preventDefault();
    const estimate_momney = (estimate_rate * 80) / 100;
    const mortgage_momney = (estimate_mortgage * 70) / 100;
    if (estimate_momney < mortgage_momney) {
      const month_payment = Math.ceil(estimate_momney / 12); //Tiền gốc hàng tháng
      const month_interest = Math.ceil((estimate_momney * 12) / 100 / 12); //Tiền lãi hàng tháng
      const total = (month_interest + month_payment) * 12;
      setMonthlyInterest(month_interest);
      setMonthlyPayment(month_payment);
      setTotalAmount(total);
      SetAmount(estimate_momney);
    } else {
      const month_payment = Math.ceil(mortgage_momney / 12); //Tiền gốc hàng tháng
      const month_interest = Math.ceil((mortgage_momney * 12) / 100 / 12); //Tiền lãi hàng tháng
      const total = (month_interest + month_payment) * 12;
      setMonthlyInterest(month_interest);
      setMonthlyPayment(month_payment);
      setTotalAmount(total);
      SetAmount(mortgage_momney);
    }
    setShowResult(true);
  };

  return (
    <section className="sec-tb sec-cong-cu">
      <div className="container seb-bt">
        <h2 className="ht">{t('tool_home')}</h2>
        <form onSubmit={calculation}>
          <div className="row">
            <div className="col-md-8">
              <div className="group-range-prcie">
                <div className="gtitle">
                  <span className="title">{t('tool_home_option.estimate_rate')}</span>
                  <span className="title2">
                    <span className="price">
                      <ReactNumeric value={estimate_rate} decimalPlaces="0" />
                    </span>
                    VNĐ
                  </span>
                </div>
                <div className="slider-vertical">
                  <RangeSlider
                    value={estimate_rate}
                    tooltip={false}
                    onChange={value => setEstimateRate(value)}
                    min={5000000}
                    max={100000000}
                  />
                </div>
              </div>
              <div className="group-range-prcie">
                <div className="gtitle">
                  <span className="title">{t('tool_home_option.estimate_mortgage')}</span>
                  <span className="title2">
                    <span className="price">
                      <ReactNumeric value={estimate_mortgage} decimalPlaces="0" />
                    </span>
                    VNĐ
                  </span>
                </div>
                <div className="slider-vertical">
                  <RangeSlider
                    value={estimate_mortgage}
                    tooltip={false}
                    onChange={value => setEstimateMortgage(value)}
                    min={5000000}
                    max={100000000}
                  />
                </div>
              </div>
              <div className="group-range-prcie">
                <div className="gtitle">
                  <span className="title">Số tiền có thể vay</span>
                  <span className="title2">
                    <span className="price">
                      <ReactNumeric value={amount} decimalPlaces="0" />
                    </span>
                    VNĐ
                  </span>
                </div>
                <div className="slider-vertical">
                  <RangeSlider tooltip={false} value={amount} min={5000000} max={100000000} />
                </div>
              </div>
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
                  <div className="mbb-result-calculation">
                    <Result
                      title={t('tool_home')}
                      subtitle={t('loan_amount')}
                      amount={amount}
                      monthlyInterest={monthlyInterest} //tiền lãi hàng tháng
                      monthlypayment={monthlypayment} //Tiền gốc hàng tháng
                      equity_capital={null}
                      month={12}
                      totalAmount={totalAmount}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

ToolHome.getInitialProps = async () => ({
  namespacesRequired: ['common', 'common']
});

export default withTranslation('common')(ToolHome);