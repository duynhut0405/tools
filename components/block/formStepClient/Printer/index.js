/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';

class ComponentToPrint extends React.Component {
  render() {
    const { formState } = this.props;
    moment.locale('vi');

    const formatCurrency = money => {
      const moneyConvert = `${money}`;
      if (moneyConvert.length < 16) {
        return `${money}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      }
      return 0;
    };

    const addCurrency = (...moneies) => {
      return moneies.reduce((sum, money) => {
        return sum + money;
      }, 0);
    };

    return (
      <div className="contentModal">
        <div className="content">
          <article className="file1">
            <div className="file1_header1">
              <div className="file1_logo1">
                <img src="/static/images/svg/logo-blue.svg" alt="logo" />
              </div>

              <section className="sec1">
                <h3 className="sec1_title1">Cộng Hoà xã hội chủ nghĩa Việt Nam</h3>
                <p>Độc lập - Tự do - Hạnh phúc</p>
              </section>
            </div>
            <h2 className="c-title1" style={{ textAlign: 'center' }}>
              Đề nghị vay vốn kiêm cam kết trả nợ
            </h2>
            <section className="file1_box1">
              <h4 className="file1_title1">Thông tin Khách hàng</h4>
              <div className="list1">
                <div className="row">
                  <div className="col-4 col-md-4">
                    <label className="list1_label1">Họ và tên:</label>
                    <span className="list1_data1">{formState.full_name}</span>
                  </div>

                  <div className="col-3">
                    <label className="list1_label1">Giới tính:</label>
                    <span className="list1_data1">{formState.sex === 'female' ? 'Nữ' : 'Nam'}</span>
                  </div>

                  <div className="col-5">
                    <label className="list1_label1">Ngày sinh:</label>
                    <span className="list1_data1">{moment(formState.birthday).format('LL')}</span>
                  </div>

                  <div className="col-4">
                    <label className="list1_label1">Số điện thoại:</label>
                    <span className="list1_data1">{formState.phone}</span>
                  </div>

                  <div className="col-8">
                    <label className="list1_label1">Email:</label>
                    <span className="list1_data1">{formState.email}</span>
                  </div>

                  <div className="col-12">
                    <label className="list1_label1">Giấy tờ tuỳ thân:</label>
                    <span className="list1_data1">
                      <span className="list1_data1">
                        {formState.profileNumber} - {formState.profileType}
                      </span>
                    </span>
                  </div>

                  <div className="col-12">
                    <label className="list1_label1">Nơi ở hiện tại:</label>
                    <span className="list1_data1">
                      {formState.address ? formState.address.current_home : null}
                    </span>
                  </div>
                </div>
              </div>

              <section className="child1">
                {formState.companion && (
                  <h5 className="child1_title1">Thông tin người đồng trả nợ</h5>
                )}

                <div className="list1">
                  <div className="row">
                    {formState.companion && (
                      <>
                        <div className="col-12 col-md-8">
                          <label className="list1_label1">Họ và tên:</label>
                          <span className="list1_data1">
                            <span className="list1_data1">
                              {formState.companion ? formState.companion.name : ''}
                            </span>
                          </span>
                        </div>
                        <div className="col-12 col-md-4">
                          <label className="list1_label1">Quan hệ:</label>
                          <span className="list1_data1">
                            <span className="list1_data1">
                              {formState.companion ? formState.companion.relation.label : ''}
                            </span>
                          </span>
                        </div>
                        <div className="col-12">
                          <label className="list1_label1">Giấy tờ tuỳ thân:</label>
                          <span className="list1_data1">
                            <span className="list1_data1">
                              {formState.companion ? formState.companion.num_profile : ''}
                            </span>
                          </span>
                        </div>
                      </>
                    )}
                    {formState.nuComponion.length !== 0 &&
                      formState.nuComponion.map((value, key) => (
                        <React.Fragment key={key}>
                          <div className="col-12 col-md-8">
                            <label className="list1_label1">Họ và tên:</label>
                            <span className="list1_data1">
                              <span className="list1_data1">{value.name_componion}</span>
                            </span>
                          </div>
                          <div className="col-12 col-md-4">
                            <label className="list1_label1">Quan hệ:</label>
                            <span className="list1_data1">
                              <span className="list1_data1">{value.rela_componion.value}</span>
                            </span>
                          </div>
                          <div className="col-12">
                            <label className="list1_label1">Giấy tờ tuỳ thân:</label>
                            <span className="list1_data1">
                              <span className="list1_data1">{value.prof_componion}</span>
                            </span>
                          </div>
                        </React.Fragment>
                      ))}
                  </div>
                </div>
              </section>
            </section>
            <section className="file1_box1">
              <h4 className="file1_title1">Thông tin phương án vay</h4>

              <div className="list1">
                <div className="row">
                  <div className="col-12">
                    <label className="list1_label1">Mục đích vay vốn:</label>
                    <span className="list1_data1">
                      <span className="list1_data1">
                        {formState.purpose_loan_01 ? `${formState.purpose_loan_01},` : ''}
                        {formState.purpose_loan_02 ? `${formState.purpose_loan_02},` : ''}
                      </span>
                    </span>
                  </div>

                  <div className="col-12">
                    <label className="list1_label1">Trang bị nội thất:</label>
                    <span className="list1_data1">
                      {formState.is_loan === 'true' ? 'Có' : 'Không'}
                    </span>
                  </div>

                  <div className="col-12">
                    <label className="list1_label1">
                      Giá trị nhà đất mua/ Chi phí xây/ sửa chữa/ trang bị nội thất:
                    </label>
                    <span className="list1_data1"> {formatCurrency(formState.value_loan)}</span>
                  </div>

                  <div className="col-12">
                    <label className="list1_label1">Số tiền đề xuất vay:</label>
                    <span className="list1_data1">
                      <span className="list1_data1">
                        {formatCurrency(formState.suggest_monney)} VNĐ
                      </span>
                    </span>
                  </div>

                  <div className="col-12">
                    <label className="list1_label1">Tài sản thế chấp:</label>
                    <span className="list1_data1">
                      {formState.collateral01 ? 'Tài sản hình thành từ vốn vay' : ''}
                    </span>
                  </div>
                </div>
              </div>
              {formState.isCollateral02 &&
                formState.collateral.map((item, key) => (
                  <section className="child1" key={key}>
                    <h5 className="child1_title1">Thông tin tài sản thế chấp</h5>

                    <div className="list1">
                      <div className="row">
                        <div className="col-12">
                          <label className="list1_label1">Mô tả tài sản:</label>
                          <span className="list1_data1">{item.decription}</span>
                        </div>

                        <div className="col-12">
                          <label className="list1_label1">
                            Mối quan hệ với chủ tài sản với khách hàng:
                          </label>
                          <span className="list1_data1">
                            {item.relaValue && item.relaValue.label}
                          </span>
                        </div>

                        <div className="col-12">
                          <label className="list1_label1">Giá trị ước tính:</label>
                          <span className="list1_data1">{formatCurrency(item.estimate)} VNĐ</span>
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
            </section>
            <section className="file1_box1">
              <h4 className="file1_title1">Thông tin tài chính</h4>

              <div className="list1">
                <div className="row">
                  <div className="col-12">
                    <label className="list1_label1">Thu nhập khách hàng (sau thuế)</label>
                    <span className="list1_data1">
                      {formState.salary ? formatCurrency(formState.salary) : ''} VNĐ/ tháng
                    </span>
                  </div>
                  {formState.companion && (
                    <div className="col-12">
                      <label className="list1_label1">
                        Tổng thu nhập người đồng trả nợ (sau thuế)
                      </label>
                      <span className="list1_data1">
                        {formState.partner_pay_type && formState.partner_pay
                          ? `Vợ/ chồng của Khách hàng: ${formState.partner_pay}`
                          : ''}
                      </span>
                      <span className="list1_data1">
                        {formState.dif_payee_type && formState.dif_payee
                          ? `Đồng trả nợ khác: ${formState.dif_payee}`
                          : ''}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </section>
            <section className="file1_box1">
              <h3
                className="file1_title1 file1_title1-type1"
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <span className="file1_title1_text1">Tổng thu nhập</span>
                <p className="file1_title1_sum1">
                  <strong>
                    {formatCurrency(
                      addCurrency(
                        parseInt(formState.salary),
                        parseInt(formState.partner_pay),
                        parseInt(formState.dif_payee)
                      )
                    )}
                  </strong>
                  VNĐ/ tháng
                </p>
              </h3>
            </section>
            <article className="file1_box2">
              <h5 className="file1_title2">Thông tin tài sản thế chấp</h5>

              <p>1. Cam kết các thông tin, số liệu kê khai trên là đúng sự thật.</p>
              <p>
                2. Sử dụng tiền vay đúng mục đích và chịu trách nhiệm về việc mục đích vay vốn tuân
                thủ quy định Pháp luật.
              </p>
              <p>
                3. Trả gốc, lãi, và các chi phí, phạt phát sinh (nếu có) của khoản vay đúng hạn cho
                MB.
              </p>
              <p>
                4. Nguồn thu nhập dùng để trả nợ đã hoàn thành các nghĩa vụ tài chính theo quy định
                của Pháp luật.
              </p>
              <p>
                5. Đồng ý và cho phép MB chia sẻ và trao đổi thông tin liên quan đến khoản vay cho
                Bên thứ 3 theo quy định của MB.
              </p>
              <p>
                6. Sẵn sàng tạo mọi điều kiện thuận lợi để MB xem xét, xác minh thông tin từ các
                nguồn khác nhau và hoàn toàn chịu trách nhiệm trước MB và Pháp luật.
              </p>
              <p>
                7. Các thông tin, hồ sơ khác đã cung cấp tại các khoản vay trước (nếu có) vẫn giữ
                nguyên hiệu lực, không thay đổi thông tin và đảm bảo đúng, phù hợp với hiện trạng
                thực tế tại thời điểm đề nghị vay vốn lần này.
              </p>
              <p>
                8. Tuân thủ các điều khoản quy định của Hợp đồng tín dụng, Hợp đồng bảo đảm tiền vay
                và các văn bản ký kết với MB (nếu có).
              </p>

              <div className="author1">
                <p className="author1_date">Ngày….tháng….năm</p>
                <h6 className="author1_title1">Khách hàng</h6>
                <span className="author1_guild">(Ký và ghi rõ họ tên)</span>
              </div>
            </article>
          </article>
        </div>
      </div>
    );
  }
}

// const SecondSuccessModal = props => {
//   const { closeModal, modalContinue, showModalContinue, formState } = props;
//   const componentRef = useRef();
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current
//   });
//   /* eslint-disable no-debugger, no-console */
//   console.log(formState);
//   return (

//   );
// };

// SecondSuccessModal.propTypes = {
//   closeModal: PropTypes.func,
//   formState: PropTypes.object,
//   modal: PropTypes.bool,
//   modalContinue: PropTypes.bool,
//   showModal: PropTypes.func,
//   showModalContinue: PropTypes.func
// };

export default ComponentToPrint;
