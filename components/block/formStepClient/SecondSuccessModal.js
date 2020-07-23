import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
import WrapModal from './WrapModal';
import { Modal, ModalBody } from 'reactstrap';
import { useReactToPrint } from 'react-to-print';
import ComponentToPrint from './Printer';
import Router from 'next/router';
import moment from 'moment';
import { sendMailService } from '../../../services/form';

const SecondSuccessModal = props => {
  const { closeModal, modalContinue, showModalContinue, formState, data, pageId } = props;
  const [dataColla, setDataColla] = useState([]);
  const componentRef = useRef();

  useEffect(() => {
    const collaterals = formState.collateral;
    if (collaterals && collaterals.length > 0) {
      setDataColla(collaterals);
    }
  });

  const convertContent = value => {
    let result = '';
    map(value, item => {
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          result += `<p>${item[key]}</p>`;
        }
      }
    });
    return result;
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  const summitForm = async () => {
    const email = formState.email;
    const idForm = data.form[0] ? data.form[0].value : 399952;
    const body = {
      content: JSON.stringify(formState),
      contentMail: JSON.stringify(formState),
      email: email,
      idForm: idForm,
      idPage: pageId
    };
    const res = await sendMailService(body);
    if (res && res.status === 200 && res.data === true) {
      Router.push({
        pathname: '/succesForm',
        query: {
          purpose_loan: formState.purpose_loan,
          suggest_monney: formState.suggest_monney,
          id: formState.birthday
        }
      });
    }
    closeModal();
  };

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
    <Modal isOpen={modalContinue} toggle={showModalContinue}>
      <ModalBody>
        <WrapModal id="CheckedDataModal" closeModal={closeModal}>
          <div style={{ display: 'none' }}>
            <ComponentToPrint ref={componentRef} formState={formState} />
          </div>
          <article className="file1">
            <div className="file1_header1">
              <div className="file1_logo1">
                <img src="/static/images/svg/logo-blue.svg" alt="logo" />
              </div>

              <section className="sec1">
                <h3 className="sec1_title1">Cộng Hoà xã hội chủ nghĩa việt nam</h3>
                <p>Độc lập - Tự do - Hạnh phúc</p>
              </section>
              <a className="btn" onClick={handlePrint}>
                <span>Tải xuống</span>
                <i>
                  <img src="/static/images/svg/download.svg" alt="download.svg" />
                </i>
              </a>
            </div>
            <h2 className="c-title1">Đề nghị vay vốn kiêm cam kết trả nợ</h2>
            <section className="file1_box1">
              <h4 className="file1_title1">Thông tin Khách hàng</h4>

              <div className="list1">
                <div className="row">
                  <div className="col-12 col-md-4">
                    <label className="list1_label1">Họ và tên:</label>
                    <span className="list1_data1">{formState.full_name}</span>
                  </div>

                  <div className="col-12 col-md-3">
                    <label className="list1_label1">Giới tính:</label>
                    <span className="list1_data1">{formState.sex}</span>
                  </div>

                  <div className="col-12 col-md-5">
                    <label className="list1_label1">Ngày sinh:</label>
                    <span className="list1_data1">
                      {moment(formState.birthday).format('MMM Do YY')}
                    </span>
                  </div>

                  <div className="col-12 col-md-4">
                    <label className="list1_label1">Số điện thoại:</label>
                    <span className="list1_data1">{formState.phone}</span>
                  </div>

                  <div className="col-12 col-md-8">
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
                    <span className="list1_data1">{formState.current_district_address}</span>
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
                              {formState.companion.name_componion}
                            </span>
                          </span>
                        </div>
                        <div className="col-12 col-md-4">
                          <label className="list1_label1">Quan hệ:</label>
                          <span className="list1_data1">
                            <span className="list1_data1">{formState.companion.value}</span>
                          </span>
                        </div>
                        <div className="col-12">
                          <label className="list1_label1">Giấy tờ tuỳ thân:</label>
                          <span className="list1_data1">
                            <span className="list1_data1">{formState.companion.num_profile}</span>
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
                      <span className="list1_data1">{formState.purpose_loan}</span>
                    </span>
                  </div>

                  <div className="col-12">
                    <label className="list1_label1">Trang bị nội thất:</label>
                    <span className="list1_data1">Có</span>
                  </div>

                  <div className="col-12">
                    <label className="list1_label1">
                      Giá trị nhà đất mua/ Chi phí xây/ sửa chữa/ trang bị nội thất:
                    </label>
                    <span className="list1_data1">8,000,000,000 VNĐ</span>
                  </div>

                  <div className="col-12">
                    <label className="list1_label1">Số tiền đề xuất vay:</label>
                    <span className="list1_data1">
                      <span className="list1_data1">{formState.suggest_monney} VNĐ</span>
                    </span>
                  </div>

                  <div className="col-12">
                    <label className="list1_label1">Tài sản thế chấp:</label>
                    <span className="list1_data1">
                      {typeof formState.collateral === 'string'
                        ? 'Tài sản hình thành từ vốn vay'
                        : 'Bất động sản khác'}
                    </span>
                  </div>
                </div>
              </div>
              {typeof formState.collateral !== 'string' &&
                dataColla.map((item, key) => (
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
                          <span className="list1_data1">{item.relaValue}</span>
                        </div>

                        <div className="col-12">
                          <label className="list1_label1">Giá trị ước tính:</label>
                          <span className="list1_data1">{item.estimate} VNĐ</span>
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
                      <span className="list1_data1">{formState.salary} VNĐ/ tháng</span>
                    </span>
                  </div>
                  <div className="col-12">
                    <label className="list1_label1">Thu nhập người đồng trả nợ (sau thuế)</label>
                    <span className="list1_data1">
                      <span className="list1_data1">
                        {formState.num_wife + formState.dif_payee} VNĐ
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="file1_box1">
              <h4 className="file1_title1 file1_title1-type1">
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
              </h4>
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
          <div className="btns-list1">
            <div className="row">
              <div className="col-12 text-center">
                <button href="#" className="btn type-white">
                  Sửa thông tin
                </button>
                <button className="btn" onClick={() => summitForm()}>
                  Tiếp tục
                </button>
              </div>
            </div>
          </div>
        </WrapModal>
      </ModalBody>
    </Modal>
  );
};

SecondSuccessModal.propTypes = {
  closeModal: PropTypes.func,
  formState: PropTypes.object,
  modal: PropTypes.bool,
  modalContinue: PropTypes.bool,
  showModal: PropTypes.func,
  showModalContinue: PropTypes.func,
  data: PropTypes.object,
  pageId: PropTypes.number
};

export default SecondSuccessModal;
