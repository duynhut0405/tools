import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
import WrapModal from './WrapModal';
import { Modal, ModalBody } from 'reactstrap';
import { useReactToPrint } from 'react-to-print';
import ComponentToPrint from './Printer';
import Router from 'next/router';
import moment from 'moment';
import { sendMailService } from '../../../services/form';
import { getSttForm, updateForm } from '../../../services/common';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRouter } from 'next/router';

const axios = require('axios');
const SecondSuccessModal = props => {
  const {
    closeModal,
    modalContinue,
    showModalContinue,
    setFormActive,
    formState,
    setFormState,
    data,
    isUpdate,
    pageId
  } = props;
  const [dataColla, setDataColla] = useState([]);
  const componentRef = useRef();
  const router = useRouter();
  moment.locale('vi');

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

  const printDocument = () => {
    const heightref = componentRef.current.offsetHeight;
    const widthref = componentRef.current.offsetWidth;
    const ratio = heightref / widthref;
    html2canvas(document.getElementById('download1111')).then(canvas => {
      const imgData = canvas.toDataURL();
      console.log(imgData);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
      pdf.output('dataurlnewwindow');
      pdf.save(`De_Nghi_Vay_Von_${formState.full_name}_${formState.phone}.pdf`);
    });
  }; //3508 x 2480

  // const printDocument = () => {
  //   html2canvas(document.getElementById('download1111')).then(canvas => {
  //     const imgData = canvas.toDataURL('image/png');
  //     console.log(imgData);
  //     const pdf = new jsPDF({
  //       unit: 'px',
  //       format: [2000, 1000]
  //     });
  //     pdf.addImage(imgData, 'JPEG', 0, 0);
  //     // pdf.output("dataurlnewwindow");
  //     if (
  //       /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  //     ) {
  //       const blob = pdf.output();
  //       window.open(URL.createObjectURL(blob));
  //     } else {
  //       pdf.save('filename.pdf');
  //     }
  //   });
  // };

  function pad(n, width, z) {
    z = z || '0';
    n = `${n}`;
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  const summitForm = async () => {
                                   let loanPurpose = '';
                                   if (
                                     formState.type_purpose_01 &
                                     (formState.purpose_loan_01 != undefined)
                                   ) {
                                     loanPurpose = formState.purpose_loan_01;
                                   }
                                   if (
                                     formState.type_purpose_02 &
                                     (formState.purpose_loan_02 != undefined)
                                   ) {
                                     loanPurpose = formState.purpose_loan_02;
                                   }
                                   // let xmls = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:v1="http://www.ACB.com.vn/service/global/mbsoasalesandservice2/marketing/customersurveys/createcrmlandingpageuser/v1_0">'+
                                   //             '<soapenv:Header/>'+
                                   //             '<soapenv:Body>'+
                                   //               '<v1:createCRMLandingPageUser_v1_0>'+
                                   //                   '<CreateCRMLandingPageUserInput>'+
                                   //                     '<Header>'+
                                   //                         '<Common>'+
                                   //                           '<ClientMessageId>ebstets11</ClientMessageId>'+
                                   //                         '</Common>'+
                                   //                         '<Client>'+
                                   //                           '<SourceAppID>landingpage</SourceAppID>'+
                                   //                         '</Client>'+
                                   //                     '</Header>'+
                                   //                     '<CampaignCode>'+'Landing page'+'</CampaignCode>'+
                                   //                     '<StartDate/>'+
                                   //                     '<EndDate>'+
                                   //                     '<AccountName>'+formState.full_name+'</AccountName>'+
                                   //                     '<TaxCode/>'+
                                   //                     '<RegistrationNumber></RegistrationNumber>'+

                                   //                     '<Gender>'+formState.sex+'</Gender>'+
                                   //                     '<NationalId>'+formState.profileNumber+'</NationalId>'+
                                   //                     '<Address>'+formState.address.current_home+formState.address.city_address.label+'</Address>'+
                                   //                     '<Email>'+formState.email+'</Email>'+
                                   //                     '<Mobile>'+formState.email.phone+'</Mobile>'+
                                   //                     '<BranchCode>'+ (formState.staff_info !== undefined ? formState.staff_info.branch : '')+'</BranchCode>'+
                                   //                     '<PlaceOfResidence>'+formState.address.current_home+formState.address.city_address.label+'</PlaceOfResidence>'+
                                   //                     '<LoanPurpose>'+loanPurpose+'</LoanPurpose>'+

                                   //                     '<HousingValue>'+(formState.collateral[0] !== undefined ? formState.collateral[0].decription : '')+'</HousingValue>'+
                                   //                     '<ProposedLoanAmount>'+formState.value_loan+'</ProposedLoanAmount>'+
                                   //                     '<Collateral>'+formState.collateral+'</Collateral>'+
                                   //                     '<IncomeAfterTax/>'+
                                   //                     '<SpouseIncome>'+formState.salary+'</SpouseIncome>'+
                                   //                     '<LoanRequestId/>'+
                                   //                     '<LoanRequestLink>'+formState.link+'</LoanRequestLink>'+
                                   //                     '<RmCode>'+ (formState.staff_info !== undefined ? formState.staff_info.RmCode : '') +'</RmCode>'+
                                   //                   '</CreateCRMLandingPageUserInput>'+
                                   //               '</v1:createCRMLandingPageUser_v1_0>'+
                                   //             '</soapenv:Body>'+
                                   //         '</soapenv:Envelope>';
                                   var xmls = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:v1="http://www.ACB.com.vn/service/global/mbsoasalesandservice2/marketing/customersurveys/createcrmlandingpageuser/v1_0">
      <soapenv:Header/>
        <soapenv:Body>
        <v1:createCRMLandingPageUser_v1_0>
          <CreateCRMLandingPageUserInput>
            <Header>
              <Common>
                <ClientMessageId>ebstets11</ClientMessageId>
              </Common>
              <Client>
                <SourceAppID>landingpage</SourceAppID>
              </Client>
            </Header>
            <CampaignCode>Landing page</CampaignCode>
            <StartDate/>
            <EndDate/>
            <AccountName>${formState.full_name}</AccountName>
            <TaxCode/>
            <RegistrationNumber>${formState.idLandLoan}</RegistrationNumber>
            <Gender>${formState.sex}</Gender>
            <NationalId>${formState.profileNumber}</NationalId>
            <Address>${formState.address.current_home +
              formState.address.city_address.label}</Address>
            <Email>${formState.email}</Email>
            <Mobile>${formState.phone}</Mobile>
            <BranchCode>${
              formState.staff_info !== undefined ? formState.staff_info.branch : ''
            }</BranchCode>
            <PlaceOfResidence>${formState.address.current_home +
              formState.address.city_address.label}</PlaceOfResidence>
            <LoanPurpose>${loanPurpose}</LoanPurpose>
            <HousingValue>${
              formState.collateral[0] !== undefined ? formState.collateral[0].decription : ''
            }</HousingValue>
            <ProposedLoanAmount>${formState.value_loan}</ProposedLoanAmount>
            <Collateral>${formState.collateral}</Collateral>
            <IncomeAfterTax/>
            <SpouseIncome>${formState.salary}</SpouseIncome>
            <LoanRequestId>${formState.idLandLoan}</LoanRequestId>
            <LoanRequestLink>${formState.link}</LoanRequestLink>
            <RmCode>${
              formState.staff_info !== undefined ? formState.staff_info.RmCode : ''
            }</RmCode>
          </CreateCRMLandingPageUserInput>
        </v1:createCRMLandingPageUser_v1_0>
        </soapenv:Body>\n</soapenv:Envelope>`;

                                   var config = {
                                     method: 'post',
                                     url: process.env.LANDING_PAGE_URL_2,
                                     headers: {
                                       'Content-Type': 'text/plain'
                                     },
                                     data: xmls
                                   };

                                   await axios(config)
                                     .then(function(response) {
                                       // console.log(response)
                                     })
                                     .catch(function(error) {
                                       alert(error);
                                       return;
                                     });

                                   const email = formState.email;
                                   const idForm = data.form[0] ? data.form[0].value : 399952;

                                   const body = {
                                     content: JSON.stringify(formState),
                                     contentMail: `Đến form của bạn : ${formState.link}`,
                                     email: email,
                                     idForm: idForm,
                                     idPage: pageId
                                   };
                                   let res;
                                   if (router.query && router.query.link) {
                                     res = await updateForm(body, formState.link);
                                   } else {
                                     res = await sendMailService(body);
                                   }
                                   if (res && res.status === 200 && res.data === true) {
                                     Router.push({
                                       pathname: '/succesForm',
                                       query: {
                                         purpose_loan: `${
                                           formState.purpose_loan_01
                                             ? `${formState.purpose_loan_01} ;`
                                             : ''
                                         } ${
                                           formState.purpose_loan_02
                                             ? formState.purpose_loan_02
                                             : ''
                                         }`,
                                         suggest_monney: formState.suggest_monney,
                                         id: formState.idLandLoan
                                           ? formState.idLandLoan
                                           : `W.${moment().format('YYYY')}.${pad(0, 6)}` ////////////////---------------
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
          <div style={{ display: 'none' }}>{/* <ComponentToPrint formState={formState} /> */}</div>
          <article
            id="download1111"
            ref={componentRef}
            className="file1"
            style={{ padding: '80px 50px' }}
          >
            <div className="file1_header1" style={{ marginBottom: '15px' }}>
              <div className="file1_logo1">
                <img src="/static/images/svg/logo-blue.svg" alt="logo" />
              </div>

              <section className="sec1">
                <h3 className="sec1_title1">Cộng Hoà Xã Hội Chủ Nghĩa Việt Nam</h3>
                <p>Độc lập - Tự do - Hạnh phúc</p>
              </section>
              <a className="btn" onClick={() => printDocument()} id="ignorePDF">
                <span>Tải xuống</span>
                <i>
                  <img src="/static/images/svg/download.svg" alt="download.svg" />
                </i>
              </a>
            </div>
            <h2 className="c-title1" style={{ marginBottom: '30px' }}>
              Đề nghị vay vốn kiêm cam kết trả nợ
            </h2>
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
                    <span className="list1_data1">{formState.sex === 'female' ? 'Nữ' : 'Nam'}</span>
                  </div>

                  <div className="col-12 col-md-5">
                    <label className="list1_label1">Ngày sinh:</label>
                    <span className="list1_data1">{moment(formState.birthday).format('LL')}</span>
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
                        {formState.purpose_loan_01 ? `${formState.purpose_loan_01}; ` : ''}
                        {formState.purpose_loan_02 ? `${formState.purpose_loan_02}` : ''}
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
                      <span className="list1_data1">
                        {formatCurrency(formState.salary)} VNĐ/ tháng
                      </span>
                    </span>
                  </div>
                  {formState.companion && (
                    <div className="col-12">
                      <label className="list1_label1">Thu nhập người đồng trả nợ (sau thuế)</label>
                      <span className="list1_data1">
                        <span className="list1_data1">
                          {formState.partner_pay_type && formState.partner_pay
                            ? `Vợ/ chồng của Khách hàng: ${formatCurrency(formState.partner_pay)}`
                            : ''}
                        </span>
                        <br />
                        <span className="list1_data1">
                          {formState.dif_payee_type && formState.dif_payee
                            ? `Đồng trả nợ khác: ${formatCurrency(formState.dif_payee)}`
                            : ''}
                        </span>
                      </span>
                    </div>
                  )}
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
              <h5 className="file1_title2">Cam kết của khách hàng</h5>
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
                <button href="#" className="btn type-white" onClick={() => setFormActive(1)}>
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
  pageId: PropTypes.number,
  setFormActive: PropTypes.func,
  setFormState: PropTypes.func,
  isUpdate: PropTypes.bool
};

export default SecondSuccessModal;
