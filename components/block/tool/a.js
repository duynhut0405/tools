import React from 'react';

function A() {
  return (
    <div className="tab-content">
      <div className="active">
        <div className="tab-inner  ">
          <div className="form-vay-von">
            <div className="row ">
              <div className="col-md-7 ">
                <div className="inner">
                  <div className="row">
                    <div className="col-md-7">
                      <h5 className="title">
                        Số tiền vay:
                        <br /> <span className="note">(VNĐ)</span>
                      </h5>
                    </div>

                    <div className="col-md-5">
                      <div>
                        <input
                          id="loan-needs-mb-field-2"
                          type="tel"
                          className=" input"
                          name=""
                          value="0"
                          placeholder="Nhập số tiền (*)"
                        />
                      </div>
                      <div className="price">1,000,000,000</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <h5 className="title">
                        Kỳ hạn vay:
                        <br /> <span className="note">(THÁNG)</span>
                      </h5>
                    </div>
                    <div className="col-md-5">
                      <div>
                        <input
                          id="term-field"
                          type="tel"
                          className=" input"
                          name=""
                          value="1"
                          placeholder="Nhập số tháng(*)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="result th-result-js">
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="title">Khoản vay:</h5>
                    </div>
                    <div className="col-md-6">
                      <span className="t2">0</span>
                      <span className="t3">VNĐ</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="title">Vốn tự có:</h5>
                    </div>
                    <div className="col-md-6">
                      <span className="t4">0</span>
                      <span className="t3">VNĐ</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="title">Kỳ hạn vay:</h5>
                    </div>
                    <div className="col-md-6">
                      <span className="t5">1 tháng</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="title">Tiền lãi hàng tháng:</h5>
                    </div>
                    <div className="col-md-6">
                      <span className="t4">0</span>
                      <span className="t3">VNĐ</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="title">Tiền gốc hàng tháng:</h5>
                    </div>
                    <div className="col-md-6">
                      <span className="t4">0</span>
                      <span className="t3">VNĐ</span>
                    </div>
                  </div>
                  <div className="total row">
                    <div className="col-md-6">
                      <h5 className="title">Tổng tiền phải trả:</h5>
                    </div>
                    <div className="col-md-6">
                      <span className="t2">0</span>
                      <span className="t3">VNĐ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="note">
              (*) Bảng tính chỉ mang tính tham khảo và không phải là cam kết về khoản vay của MBBank
            </p>
            <a className="btn" onClick="showResult()">
              Xem bảng
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default A;

<div>
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
            <p className="note">
              (*) Bảng tính chỉ mang tính tham khảo và không phải là cam kết về khoản vay của MBBank
            </p>
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
                  totalAmount={sum + interest}
                />
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
 
</div>;
