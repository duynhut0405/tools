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
                                     contentMail: `?????n form c???a b???n : ${formState.link}`,
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
                <h3 className="sec1_title1">C???ng Ho?? X?? H???i Ch??? Ngh??a Vi???t Nam</h3>
                <p>?????c l???p - T??? do - H???nh ph??c</p>
              </section>
              <a className="btn" onClick={() => printDocument()} id="ignorePDF">
                <span>T???i xu???ng</span>
                <i>
                  <img src="/static/images/svg/download.svg" alt="download.svg" />
                </i>
              </a>
            </div>
            <h2 className="c-title1" style={{ marginBottom: '30px' }}>
              ????? ngh??? vay v???n ki??m cam k???t tr??? n???
            </h2>
            <section className="file1_box1">
              <h4 className="file1_title1">Th??ng tin Kh??ch h??ng</h4>
              <div className="list1">
                <div className="row">
                  <div className="col-12 col-md-4">
                    <label className="list1_label1">H??? v?? t??n:</label>
                    <span className="list1_data1">{formState.full_name}</span>
                  </div>

                  <div className="col-12 col-md-3">
                    <label className="list1_label1">Gi???i t??nh:</label>
                    <span className="list1_data1">{formState.sex === 'female' ? 'N???' : 'Nam'}</span>
                  </div>

                  <div className="col-12 col-md-5">
                    <label className="list1_label1">Ng??y sinh:</label>
                    <span className="list1_data1">{moment(formState.birthday).format('LL')}</span>
                  </div>

                  <div className="col-12 col-md-4">
                    <label className="list1_label1">S??? ??i???n tho???i:</label>
                    <span className="list1_data1">{formState.phone}</span>
                  </div>

                  <div className="col-12 col-md-8">
                    <label className="list1_label1">Email:</label>
                    <span className="list1_data1">{formState.email}</span>
                  </div>

                  <div className="col-12">
                    <label className="list1_label1">Gi???y t??? tu??? th??n:</label>
                    <span className="list1_data1">
                      <span className="list1_data1">
                        {formState.profileNumber} - {formState.profileType}
                      </span>
                    </span>
                  </div>

                  <div className="col-12">
                    <label className="list1_label1">N??i ??? hi???n t???i:</label>
                    <span className="list1_data1">
                      {formState.address ? formState.address.current_home : null}
                    </span>
                  </div>
                </div>
              </div>

              <section className="child1">
                {formState.companion && (
                  <h5 className="child1_title1">Th??ng tin ng?????i ?????ng tr??? n???</h5>
                )}

                <div className="list1">
                  <div className="row">
                    {formState.companion && (
                      <>
                        <div className="col-12 col-md-8">
                          <label className="list1_label1">H??? v?? t??n:</label>
                          <span className="list1_data1">
                            <span className="list1_data1">
                              {formState.companion ? formState.companion.name : ''}
                            </span>
                          </span>
                        </div>
                        <div className="col-12 col-md-4">
                          <label className="list1_label1">Quan h???:</label>
                          <span className="list1_data1">
                            <span className="list1_data1">
                              {formState.companion ? formState.companion.relation.label : ''}
                            </span>
                          </span>
                        </div>
                        <div className="col-12">
                          <label className="list1_label1">Gi???y t??? tu??? th??n:</label>
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
                            <label className="list1_label1">H??? v?? t??n:</label>
                            <span className="list1_data1">
                              <span className="list1_data1">{value.name_componion}</span>
                            </span>
                          </div>
                          <div className="col-12 col-md-4">
                            <label className="list1_label1">Quan h???:</label>
                            <span className="list1_data1">
                              <span className="list1_data1">{value.rela_componion.value}</span>
                            </span>
                          </div>
                          <div className="col-12">
                            <label className="list1_label1">Gi???y t??? tu??? th??n:</label>
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
              <h4 className="file1_title1">Th??ng tin ph????ng ??n vay</h4>
              <div className="list1">
                <div className="row">
                  <div className="col-12">
                    <label className="list1_label1">M???c ????ch vay v???n:</label>
                    <span className="list1_data1">
                      <span className="list1_data1">
                        {formState.purpose_loan_01 ? `${formState.purpose_loan_01}; ` : ''}
                        {formState.purpose_loan_02 ? `${formState.purpose_loan_02}` : ''}
                      </span>
                    </span>
                  </div>
                  <div className="col-12">
                    <label className="list1_label1">Trang b??? n???i th???t:</label>
                    <span className="list1_data1">
                      {formState.is_loan === 'true' ? 'C??' : 'Kh??ng'}
                    </span>
                  </div>
                  <div className="col-12">
                    <label className="list1_label1">
                      Gi?? tr??? nh?? ?????t mua/ Chi ph?? x??y/ s???a ch???a/ trang b??? n???i th???t:
                    </label>
                    <span className="list1_data1"> {formatCurrency(formState.value_loan)}</span>
                  </div>
                  <div className="col-12">
                    <label className="list1_label1">S??? ti???n ????? xu???t vay:</label>
                    <span className="list1_data1">
                      <span className="list1_data1">
                        {formatCurrency(formState.suggest_monney)} VN??
                      </span>
                    </span>
                  </div>
                  <div className="col-12">
                    <label className="list1_label1">T??i s???n th??? ch???p:</label>
                    <span className="list1_data1">
                      {formState.collateral01 ? 'T??i s???n h??nh th??nh t??? v???n vay' : ''}
                    </span>
                  </div>
                </div>
              </div>
              {formState.isCollateral02 &&
                dataColla.map((item, key) => (
                  <section className="child1" key={key}>
                    <h5 className="child1_title1">Th??ng tin t??i s???n th??? ch???p</h5>
                    <div className="list1">
                      <div className="row">
                        <div className="col-12">
                          <label className="list1_label1">M?? t??? t??i s???n:</label>
                          <span className="list1_data1">{item.decription}</span>
                        </div>

                        <div className="col-12">
                          <label className="list1_label1">
                            M???i quan h??? v???i ch??? t??i s???n v???i kh??ch h??ng:
                          </label>
                          <span className="list1_data1">
                            {item.relaValue && item.relaValue.label}
                          </span>
                        </div>

                        <div className="col-12">
                          <label className="list1_label1">Gi?? tr??? ?????c t??nh:</label>
                          <span className="list1_data1">{formatCurrency(item.estimate)} VN??</span>
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
            </section>
            <section className="file1_box1">
              <h4 className="file1_title1">Th??ng tin t??i ch??nh</h4>
              <div className="list1">
                <div className="row">
                  <div className="col-12">
                    <label className="list1_label1">Thu nh???p kh??ch h??ng (sau thu???)</label>
                    <span className="list1_data1">
                      <span className="list1_data1">
                        {formatCurrency(formState.salary)} VN??/ th??ng
                      </span>
                    </span>
                  </div>
                  {formState.companion && (
                    <div className="col-12">
                      <label className="list1_label1">Thu nh???p ng?????i ?????ng tr??? n??? (sau thu???)</label>
                      <span className="list1_data1">
                        <span className="list1_data1">
                          {formState.partner_pay_type && formState.partner_pay
                            ? `V???/ ch???ng c???a Kh??ch h??ng: ${formatCurrency(formState.partner_pay)}`
                            : ''}
                        </span>
                        <br />
                        <span className="list1_data1">
                          {formState.dif_payee_type && formState.dif_payee
                            ? `?????ng tr??? n??? kh??c: ${formatCurrency(formState.dif_payee)}`
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
                <span className="file1_title1_text1">T???ng thu nh???p</span>
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
                  VN??/ th??ng
                </p>
              </h4>
            </section>
            <article className="file1_box2">
              <h5 className="file1_title2">Cam k???t c???a kh??ch h??ng</h5>
              <p>1. Cam k???t c??c th??ng tin, s??? li???u k?? khai tr??n l?? ????ng s??? th???t.</p>
              <p>
                2. S??? d???ng ti???n vay ????ng m???c ????ch v?? ch???u tr??ch nhi???m v??? vi???c m???c ????ch vay v???n tu??n
                th??? quy ?????nh Ph??p lu???t.
              </p>
              <p>
                3. Tr??? g???c, l??i, v?? c??c chi ph??, ph???t ph??t sinh (n???u c??) c???a kho???n vay ????ng h???n cho
                MB.
              </p>
              <p>
                4. Ngu???n thu nh???p d??ng ????? tr??? n??? ???? ho??n th??nh c??c ngh??a v??? t??i ch??nh theo quy ?????nh
                c???a Ph??p lu???t.
              </p>
              <p>
                5. ?????ng ?? v?? cho ph??p MB chia s??? v?? trao ?????i th??ng tin li??n quan ?????n kho???n vay cho
                B??n th??? 3 theo quy ?????nh c???a MB.
              </p>
              <p>
                6. S???n s??ng t???o m???i ??i???u ki???n thu???n l???i ????? MB xem x??t, x??c minh th??ng tin t??? c??c
                ngu???n kh??c nhau v?? ho??n to??n ch???u tr??ch nhi???m tr?????c MB v?? Ph??p lu???t.
              </p>
              <p>
                7. C??c th??ng tin, h??? s?? kh??c ???? cung c???p t???i c??c kho???n vay tr?????c (n???u c??) v???n gi???
                nguy??n hi???u l???c, kh??ng thay ?????i th??ng tin v?? ?????m b???o ????ng, ph?? h???p v???i hi???n tr???ng
                th???c t??? t???i th???i ??i???m ????? ngh??? vay v???n l???n n??y.
              </p>
              <p>
                8. Tu??n th??? c??c ??i???u kho???n quy ?????nh c???a H???p ?????ng t??n d???ng, H???p ?????ng b???o ?????m ti???n vay
                v?? c??c v??n b???n k?? k???t v???i MB (n???u c??).
              </p>

              <div className="author1">
                <p className="author1_date">Ng??y???.th??ng???.n??m</p>
                <h6 className="author1_title1">Kh??ch h??ng</h6>
                <span className="author1_guild">(K?? v?? ghi r?? h??? t??n)</span>
              </div>
            </article>
          </article>
          <div className="btns-list1">
            <div className="row">
              <div className="col-12 text-center">
                <button href="#" className="btn type-white" onClick={() => setFormActive(1)}>
                  S???a th??ng tin
                </button>
                <button className="btn" onClick={() => summitForm()}>
                  Ti???p t???c
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
