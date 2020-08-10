/* eslint-disable dot-notation */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import FirstSuccessModal from './FirstSuccessModal';
import SecondSuccessModal from './SecondSuccessModal';
import classNames from 'classnames';
import AlertInfo from './AlertInfo';
import NumberFormat from 'react-number-format';
import { Formik } from 'formik';
import * as yup from 'yup';
// import domtoimage from 'dom-to-image';

const StepForm03 = props => {
  const { backFrom, formState, setFormState, setFormActive, data, pageId, isUpdate } = props;
  const form01 = useRef(null);
  const [active, setActive] = useState(false);
  const [activeAlertInfo, setActiveAlertInfo] = useState(false);
  const [hide01, setHide01] = useState(formState.debt || formState.return_monney);
  const [checkedProxy, setCheckedProxy] = useState(formState.commitment ? true : false);
  const [modalContinue, setModalContinue] = useState(false);

  const docToPrint = React.createRef();

  const showModal = e => {
    e.preventDefault();
    if (checkedProxy) {
      setActive(!active);
      setActiveAlertInfo(false);
    } else {
      setActiveAlertInfo(true);
    }
  };
  const showModalContinue = e => {
    e.preventDefault();
    if (formState.address_name && formState.address_name) {
      setModalContinue(true);
      setActive(false);
    } else {
      alert('Vui lòng chọn tên chi nhánh ngân hàng');
    }
  };
  const showActiveAlertInfo = () => {
    setActiveAlertInfo(!activeAlertInfo);
  };

  const closeModal = () => {
    setActive(false);
    setModalContinue(false);
    setActiveAlertInfo(false);
  };

  const handleCheckProxy = () => {
    setCheckedProxy(!checkedProxy);
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
      if (money) {
        return sum + money;
      }
      return sum;
    }, 0);
  };

  function onScroll() {
    const elmnt = document.getElementById('step03');
    if (elmnt !== null) {
      elmnt.scrollIntoView();
    }
  }

  useEffect(() => {
    onScroll();
  }, []);

  useEffect(() => {
    if (!formState.dif_payee_type) {
      setFormState({
        ...formState,
        dif_payee: 0
      });
    }
    if (!formState.partner_pay_type) {
      setFormState({
        ...formState,
        partner_pay: 0
      });
    }
  }, [formState.partner_pay_type, formState.dif_payee_type]);

  const validationSchema = yup.object().shape({
    return_monney: yup
      .number()
      .min(0, 'Chỉ nhập số tự nhiên')
      .max(9999999999999999, 'Tối đa 17 số'),
    debt: yup
      .number()
      .min(0, 'Chỉ nhập số tự nhiên')
      .max(9999999999999999, 'Tối đa 17 số'),
    salary: yup
      .number()
      .min(0, 'Chỉ nhập số tự nhiên')
      .max(9999999999999999, 'Tối đa 17 số')
      .required('Trường bắt buộc nhập'),
    partner_pay: yup
      .number()
      .min(0, 'Chỉ nhập số tự nhiên')
      .max(9999999999999999, 'Tối đa 17 số'),
    // .required('Trường bắt buộc nhập'),
    dif_payee: yup
      .number()
      .min(0, 'Chỉ nhập số tự nhiên')
      .max(9999999999999999, 'Tối đa 17 số')
    // .required('Trường bắt buộc nhập')
  });

  return (
    <Formik
      initialValues={{
        return_monney: formState.return_monney ? formState.return_monney : '',
        debt: formState.debt ? formState.debt : '',
        salary: formState.salary ? formState.salary : ''
      }}
      onSubmit={(values, actions) => {
        if (checkedProxy) {
          setActive(!active);
          setActiveAlertInfo(false);
        } else {
          setActiveAlertInfo(true);
        }
        setFormState({
          ...formState,
          salary: values.salary
        });
      }}
      validationSchema={validationSchema}
    >
      {formikProps => {
        return (
          <section className="sec-t p-form2" id="step03">
            <div className="container">
              <div className="max750">
                <form autoComplete="on" className="row list-item form-contact c-form1" ref={form01}>
                  <div className="col-12">
                    <div className="text-center">
                      <h3 className="ctext mg-0 fs24">Bước 3/3: Thông tin phương án vay</h3>
                    </div>
                  </div>
                  <div className="col-12 c-form1__title1 c-tabs-btn-js">
                    <div
                      className="text-center"
                      onClick={() => {
                        setHide01(!hide01);
                        if (!hide01) {
                          setFormState({
                            ...formState,
                            debt: null,
                            return_monney: null
                          });
                        }
                      }}
                    >
                      <h3 className="ctext mg-0 pt-10 pb-10 bg-1 undefined">
                        Thông tin các khoản vay KH và người đồng trả nợ
                        <i
                          className={classNames('icon icon-arrow-1 icon-up-js', { active: hide01 })}
                        />
                      </h3>
                    </div>
                  </div>
                  {hide01 && (
                    <div className="col-12 c-tabs-js">
                      <div className="row">
                        <div className="col-12 form-control">
                          <h6 className="title1">Dư nợ tại các Tổ chức tín dụng</h6>
                          <div className="c-form1__control1">
                            <NumberFormat
                              className="input"
                              thousandSeparator={true}
                              isAllowed={values => {
                                const { formattedValue, floatValue } = values;
                                return (
                                  formattedValue === '' ||
                                  (floatValue < 1000000000000 && floatValue >= 0)
                                );
                              }}
                              min="0"
                              name="debt"
                              placeholder="Nhập giá trị"
                              defaultValue={formState.debt ? formState.debt : ''}
                              onValueChange={e => {
                                formikProps.setFieldValue('debt', e.floatValue);
                                if (e.floatValue > 0) {
                                  setFormState({ ...formState, debt: e.floatValue });
                                }
                              }}
                            />
                            {formikProps.touched['debt'] && formikProps.errors['debt'] && (
                              <p className="red error">{formikProps.errors['debt']}</p>
                            )}
                            <span className="text1">VNĐ</span>
                          </div>
                        </div>
                        <div className="col-12 form-control">
                          <h6 className="title1">Chi phí trả gốc/lãi trên tháng</h6>
                          <div className="c-form1__control1">
                            <NumberFormat
                              className="input"
                              thousandSeparator={true}
                              name="return_monney"
                              isAllowed={values => {
                                const { formattedValue, floatValue } = values;
                                return (
                                  formattedValue === '' ||
                                  (floatValue < 1000000000000 && floatValue >= 0)
                                );
                              }}
                              placeholder="Nhập giá trị"
                              defaultValue={formState.return_monney ? formState.return_monney : ''}
                              onValueChange={e => {
                                formikProps.setFieldValue('return_monney', e.floatValue);
                                setFormState({ ...formState, return_monney: e.floatValue });
                              }}
                            />
                            <span className="text1">VNĐ</span>
                            {formikProps.touched['return_monney'] &&
                              formikProps.errors['return_monney'] && (
                                <p className="red error">{formikProps.errors['return_monney']}</p>
                              )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="col-12">
                    <div className="text-center">
                      <h3 className="ctext mg-0 pt-10 pb-10 bg-1 undefined">
                        Thông tin thu nhập sau thuế (<span className="red">*</span>)
                      </h3>
                    </div>
                  </div>
                  <div className="col-12 form-control">
                    <h6 className="title1">
                      Thu nhập hàng tháng của Khách hàng (<span className="red">*</span>)
                    </h6>
                    <div className="c-form1__control1 c-form1__control1--text1">
                      <NumberFormat
                        className="input"
                        thousandSeparator={true}
                        name="salary"
                        placeholder="Nhập giá trị"
                        defaultValue={formState.salary ? formState.salary : ''}
                        isAllowed={values => {
                          const { formattedValue, floatValue } = values;
                          return (
                            formattedValue === '' || (floatValue < 1000000000000 && floatValue >= 0)
                          );
                        }}
                        onValueChange={e => {
                          setFormState({ ...formState, salary: e.floatValue });
                          formikProps.setFieldValue('salary', e.floatValue);
                        }}
                      />
                      <span className="text1">VNĐ/ tháng</span>
                      {formikProps.errors.salary && (
                        <p className="red error">{formikProps.errors.salary}</p>
                      )}
                    </div>
                  </div>
                  {formState.companion && (
                    <>
                      <div className="col-12 c-form1__checkboxs">
                        <h6>Người đồng trả nợ/ Thu nhập hàng tháng của Người đồng trả nợ</h6>
                        <label className="checkbox">
                          Vợ/ chồng của Khách hàng
                          <input
                            type="checkbox"
                            name="payee"
                            defaultChecked={formState.partner_pay_type}
                            onChange={() => {
                              setFormState({
                                ...formState,
                                partner_pay_type: !formState.partner_pay_type
                              });
                            }}
                          />
                          <span />
                        </label>
                        <label className="checkbox">
                          Đồng trả nợ khác
                          <input
                            type="checkbox"
                            name="payee"
                            defaultChecked={formState.dif_payee_type}
                            onChange={() => {
                              setFormState({
                                ...formState,
                                dif_payee_type: !formState.dif_payee_type
                              });
                            }}
                          />
                          <span />
                        </label>
                      </div>
                      {formState.partner_pay_type && (
                        <div className="col-12 form-control">
                          <h6 className="title1">Vợ/ chồng của Khách hàng</h6>
                          <div className="c-form1__control1 c-form1__control1--text1">
                            <NumberFormat
                              className="input"
                              thousandSeparator={true}
                              name="partner_pay"
                              placeholder="Nhập giá trị"
                              defaultValue={formState.partner_pay ? formState.partner_pay : ''}
                              isAllowed={values => {
                                const { formattedValue, floatValue } = values;
                                return (
                                  formattedValue === '' ||
                                  (floatValue < 1000000000000 && floatValue >= 0)
                                );
                              }}
                              onValueChange={e => {
                                formikProps.setFieldValue('partner_pay', e.floatValue);
                                setFormState({ ...formState, partner_pay: e.floatValue });
                              }}
                            />
                            <span className="text1">VNĐ/ tháng</span>
                            {formikProps.touched['partner_pay'] &&
                              formikProps.errors['partner_pay'] && (
                                <p className="red error">{formikProps.errors['partner_pay']}</p>
                              )}
                            <span />
                            <span className="text1">VNĐ/ tháng</span>
                          </div>
                        </div>
                      )}
                      {formState.dif_payee_type && (
                        <div className="col-12 form-control">
                          <h6 className="title1">Đồng trả nợ khác</h6>
                          <div className="c-form1__control1 c-form1__control1--text1">
                            <NumberFormat
                              className="input"
                              thousandSeparator={true}
                              name="dif_payee"
                              placeholder="Nhập giá trị"
                              defaultValue={formState.dif_payee ? formState.dif_payee : ''}
                              isAllowed={values => {
                                const { formattedValue, floatValue } = values;
                                return (
                                  formattedValue === '' ||
                                  (floatValue <= 1000000000000 && floatValue >= 0)
                                );
                              }}
                              onValueChange={e => {
                                formikProps.setFieldValue('dif_payee', e.floatValue);
                                setFormState({ ...formState, dif_payee: e.floatValue });
                              }}
                            />
                            <span className="text1">VNĐ/ tháng</span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  <div className="col-12">
                    <div className="c-form1__confirm">
                      <span className="confirm_text1">Tổng thu nhập</span>
                      <p className="confirm_sum1">
                        <strong>
                          {formatCurrency(
                            addCurrency(
                              parseInt(formState.salary),
                              parseInt(formState.partner_pay),
                              parseInt(formState.dif_payee)
                            )
                          )}
                        </strong>
                        VNĐ
                      </p>
                    </div>
                  </div>
                  <div className="col-12 c-form1__checkboxs mb-20">
                    <label className="checkbox">
                      <strong className="font1">Tôi đã hiểu và cam kết</strong>
                      <input
                        type="checkbox"
                        name="commit"
                        value={false}
                        onChange={() => {
                          setFormState({ ...formState, commitment: !formState.commitment });
                          handleCheckProxy();
                        }}
                        checked={checkedProxy === true}
                      />
                      <span />
                    </label>
                  </div>
                  <div className="col-12">
                    <p>1. Cam kết các thông tin, số liệu kê khai trên là đúng sự thật.</p>
                    <p>
                      2. Sử dụng tiền vay đúng mục đích và chịu trách nhiệm về việc mục đích vay vốn
                      tuân thủ quy định Pháp luật.
                    </p>
                    <p>
                      3. Trả gốc, lãi, và các chi phí, phạt phát sinh (nếu có) của khoản vay đúng
                      hạn cho MB.
                    </p>
                    <p>
                      4. Nguồn thu nhập dùng để trả nợ là hợp pháp đã hoàn thành các nghĩa vụ tài
                      chính theo quy định của Pháp luật.
                    </p>
                    <p>
                      5. Đồng ý và cho phép MB sử dụng bất kỳ thông tin nào liên quan đến khoản vay
                      để chia sẻ và trao đổi những thông tin liên quan đến Chúng tôi và khoản vay
                      của Chúng tôi; đồng thời đồng ý và cho phép MB được tìm kiếm, xác minh, cung
                      cấp thông tin liên quan đến Chúng tôi và khoản vay của Chúng tôi từ/cho bất kỳ
                      bên thứ ba nào khác theo quy định của MB.
                    </p>
                    <p>
                      6. Sẵn sàng tạo mọi điều kiện thuận lợi để MB xem xét, xác minh thông tin từ
                      các nguồn khác nhau và hoàn toàn chịu trách nhiệm trước MB và pháp luật.
                    </p>
                    <p>
                      7. Các thông tin, hồ sơ khác đã cung cấp tại các khoản vay trước (nếu có) vẫn
                      giữ nguyên hiệu lực, không thay đổi thông tin và đảm bảo đúng, phù hợp với
                      hiện trạng thực tế của tại thời điểm đề nghị vay vốn lần này.
                    </p>
                    <p>
                      8. Tuân thủ các điều khoản quy định của Hợp đồng tín dụng, Hợp đồng bảo đảm
                      tiền vay và các văn bản ký kết với MB (nếu có).
                    </p>
                  </div>
                  <div className="col-12 c-form1__btns-list1">
                    <div className="text-center">
                      <button className="btn type-white" onClick={backFrom}>
                        Quay về
                      </button>
                      <button
                        className="btn c-form1-btn1-js"
                        type="button"
                        onClick={() => {
                          formikProps.handleSubmit();
                        }}
                      >
                        Tiếp tục
                      </button>
                    </div>
                  </div>
                  {activeAlertInfo && (
                    <AlertInfo
                      closeModal={closeModal}
                      showActiveAlertInfo={showActiveAlertInfo}
                      activeAlertInfo={activeAlertInfo}
                    />
                  )}
                  <FirstSuccessModal
                    showModalContinue={showModalContinue}
                    showModal={showModal}
                    closeModal={closeModal}
                    modalContinue={modalContinue}
                    modal={active}
                    data={data}
                    isUpdate={isUpdate}
                    formState={formState}
                    setFormState={setFormState}
                  />
                  {modalContinue && (
                    <SecondSuccessModal
                      closeModal={closeModal}
                      showModalContinue={showModalContinue}
                      modalContinue={modalContinue}
                      formState={formState}
                      setFormState={setFormState}
                      setFormActive={setFormActive}
                      data={data}
                      pageId={pageId}
                      isUpdate={isUpdate}
                    />
                  )}
                </form>
              </div>
            </div>
          </section>
        );
      }}
    </Formik>
  );
};

StepForm03.propTypes = {
  formState: PropTypes.object,
  data: PropTypes.object,
  backFrom: PropTypes.func,
  setFormState: PropTypes.func,
  setFormActive: PropTypes.func,
  pageId: PropTypes.number,
  isUpdate: PropTypes.bool
};

export default StepForm03;
