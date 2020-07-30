import React, { useState, useRef, useEffect } from 'react';
import Proptypes from 'prop-types';
import ChildboxForm2 from './ChildboxForm2';
import { Formik } from 'formik';
import NumberFormat from 'react-number-format';
import * as yup from 'yup';

const propTypes = {
  nextForm: Proptypes.func,
  backFrom: Proptypes.func,
  setFormState: Proptypes.func,
  formState: Proptypes.object
};

const validationSchema = yup.object().shape({
  value_loan: yup
    .number()
    .min(125000000, 'Gía trị nhà đất không được nhỏ hơn 125 triệu')
    .max(9999999999999999, 'Tối đa 17 số')
    .required('Trường bắt buộc nhập'),
  suggest_monney: yup
    .number()

    .required('Trường bắt buộc nhập')
    .when('value_loan', value_loan => {
      const msg =
        'Chưa phù hợp quy định MB, MB cho vay tối đa 80% giá trị nhà đất mua/chi phí xây/sửa chữa/trang bị nội thất.';
      return yup
        .number()
        .required('Trường bắt buộc nhập')
        .min(100000000, 'Chưa phù hợp quy định MB, Số tiền tối thiểu 100 triệu đồng')
        .max(parseInt((value_loan * 80) / 100), msg);
      // .test('len', 'Tối đa 12 số', val => val.toString().length <= 12);
    }),
  type_purpose: yup.string().required('Trường bắt buộc'),
  is_future: yup.string().required('Trường bắt buộc')
});

// const text01 = 'Nhà đất đã có Giấy chứng nhận (Sổ đỏ)';
// const text02 = 'Nhà đất đã có Giấy chứng nhận (Sổ đỏ)';
const text03 = 'Tài sản hình thành từ vốn vay';
const StepForm02 = ({ nextForm, backFrom, setFormState, formState }) => {
  const [iscollateral, setIsCollateral] = useState(formState.collateral === text03 ? false : true);
  const [idAsset, setIdAsset] = useState(1);
  const form02 = useRef(null);

  const handleChangeCustom = event => {
    event.persist();
    setFormState(() => ({
      ...formState,
      [event.target.name]: event.target.value
    }));
  };

  function onScroll() {
    const elmnt = document.getElementById('featured');
    if (elmnt !== null) {
      elmnt.scrollIntoView();
    }
  }

  useEffect(() => {
    onScroll();
  }, []);

  const summitForm02 = () => {
    if (form02.current.reportValidity()) {
      event.preventDefault();
      nextForm();
    }
  };

  const removeCollateral = id => {
    const listColla = formState.collateral.filter(value => value.id !== id);
    setFormState({ ...formState, collateral: listColla });
  };

  return (
    <Formik
      initialValues={{
        value_loan: formState.value_loan || '',
        suggest_monney: formState.suggest_monney || '',
        purpose_loan_01: formState.purpose_loan_01 || '',
        purpose_loan_02: formState.purpose_loan_02 || '',
        decriptiom: formState.decriptiom || '',
        is_future: formState.is_future || '',
        profileNumber: formState.profileNumber || '',
        relaValue: formState.relaValue || '',
        type_purpose: formState.type_purpose || '',
        isCollateral: iscollateral
      }}
      onSubmit={() => {
        summitForm02();
      }}
      validationSchema={validationSchema}
    >
      {formikProps => {
        const { touched, errors, handleSubmit, setFieldValue } = formikProps;
        return (
          <section className="sec-t p-form2" id="featured">
            <div className="container">
              <div className="max750">
                <form autoComplete="on" className="row list-item form-contact c-form1" ref={form02}>
                  <div className="col-12">
                    <div className="text-center">
                      <h3 className="ctext mg-0 fs24">Bước 2/3: Thông tin phương án vay</h3>
                    </div>
                  </div>
                  <div className="col-12">
                    <h6 className="title1">
                      Mục đích vay vốn (<span className="red">*</span>)
                    </h6>
                    <div className="col-12">
                      <label className="radio">
                        Mua nhà đất
                        <input
                          type="radio"
                          name="purpose_loan"
                          defaultChecked={formState.type_purpose === 2 ? true : false}
                          onClick={() => {
                            setFieldValue('type_purpose', 2);
                            setFormState({
                              ...formState,
                              type_purpose: 2,
                              purpose_loan_01: false,
                              purpose_loan_02: false
                            });
                          }}
                        />
                        <span />
                        {formState.type_purpose && formState.type_purpose === 2 && (
                          <div className="row p-form2--mt20">
                            <div className="col-12">
                              <label className="radio">
                                Nhà đất đã có Giấy chứng nhận (Sổ đỏ)
                                <input
                                  type="radio"
                                  name="test1"
                                  defaultChecked={
                                    formState.purpose_loan_01 ===
                                    'Nhà đất đã có Giấy chứng nhận (Sổ đỏ)'
                                      ? true
                                      : false
                                  }
                                  onClick={e => {
                                    setFieldValue('purpose_loan_01', e.target.value);
                                    setFormState({
                                      ...formState,
                                      purpose_loan_01: 'Nhà đất đã có Giấy chứng nhận (Sổ đỏ)'
                                    });
                                  }}
                                />
                                <span />
                              </label>
                            </div>
                            <div className="col-12">
                              <label className="radio">
                                Nhà chung cư, đất dự án chưa có Giấy chứng nhận (Sổ đỏ)
                                <input
                                  type="radio"
                                  name="test2"
                                  defaultChecked={
                                    formState.purpose_loan_02 ===
                                    'Nhà chung cư, đất dự án chưa có Giấy chứng nhận (Sổ đỏ)'
                                      ? true
                                      : false
                                  }
                                  onClick={e => {
                                    setFieldValue('purpose_loan_02', e.target.value);
                                    setFormState({
                                      ...formState,
                                      purpose_loan_02:
                                        'Nhà chung cư, đất dự án chưa có Giấy chứng nhận (Sổ đỏ)'
                                    });
                                  }}
                                />
                                <span />
                              </label>
                            </div>
                          </div>
                        )}
                      </label>
                    </div>
                    <div className="col-12">
                      <label className="radio">
                        Xây/ Sửa nhà đất
                        <input
                          type="radio"
                          name="purpose_loan"
                          // required
                          defaultChecked={formState.type_purpose === 1 ? true : false}
                          onClick={() => {
                            setFieldValue('type_purpose', 1);
                            setFormState({
                              ...formState,
                              type_purpose: 1,
                              purpose_loan_01: false,
                              purpose_loan_02: false
                            });
                          }}
                        />
                        <span />
                        {formState.type_purpose && formState.type_purpose === 1 && (
                          <div className="row p-form2--mt20">
                            <div className="col-12">
                              <label className="radio">
                                Xây nhà
                                <input
                                  type="radio"
                                  name="test1"
                                  // required
                                  defaultChecked={
                                    formState.purpose_loan_01 === 'Xây nhà' ? true : false
                                  }
                                  onClick={e => {
                                    setFieldValue('purpose_loan_01', e.target.value);
                                    setFormState({
                                      ...formState,
                                      purpose_loan_01: 'Xây nhà'
                                    });
                                  }}
                                />
                                <span />
                              </label>
                            </div>
                            <div className="col-12">
                              <label className="radio">
                                Sửa nhà
                                <input
                                  type="radio"
                                  name="test2"
                                  // required
                                  defaultChecked={
                                    formState.purpose_loan_02 === 'Sửa nhà' ? true : false
                                  }
                                  onClick={e => {
                                    setFieldValue('purpose_loan_02', e.target.value);
                                    setFormState({
                                      ...formState,
                                      purpose_loan_02: 'Sửa nhà'
                                    });
                                  }}
                                />
                                <span />
                              </label>
                            </div>
                          </div>
                        )}
                      </label>
                    </div>
                    {touched.type_purpose && errors.type_purpose && (
                      <p className="red error">{errors.type_purpose}</p>
                    )}
                  </div>
                  <div className="col-12">
                    <h6 className="title1">
                      Trang bị nội thất (<span className="red">*</span>)
                    </h6>
                    <label className="radio">
                      Có
                      <input
                        type="radio"
                        name="is_future"
                        value={formState.is_future === 'true' ? true : false}
                        defaultChecked={formState.is_future === 'true' ? true : false}
                        onClick={() => {
                          setFieldValue('is_future', 'true');
                          setFormState({
                            ...formState,
                            is_future: 'true'
                          });
                        }}
                      />
                      <span />
                    </label>
                    <label className="radio">
                      Không
                      <input
                        type="radio"
                        name="is_future"
                        value={formState.is_future === 'false' ? true : false}
                        defaultChecked={formState.is_future === 'false' ? true : false}
                        onClick={() => {
                          setFieldValue('is_future', 'false');
                          setFormState({
                            ...formState,
                            is_future: 'false'
                          });
                        }}
                      />
                      <span />
                    </label>
                    {formikProps.touched.is_future && formikProps.errors.is_future && (
                      <p className="red error">{formikProps.errors.is_future}</p>
                    )}
                  </div>
                  <div className="col-12 form-control">
                    <h6 className="title1">
                      Giá trị nhà đất mua/ Chi phí xây/ sửa chữa/ trang bị nội thất (
                      <span className="red">*</span>)
                    </h6>
                    <div className="c-form1__control1">
                      <NumberFormat
                        className="input"
                        thousandSeparator={true}
                        name="value_loan"
                        placeholder="Nhập giá trị"
                        defaultValue={formState.value_loan}
                        onValueChange={e => {
                          setFieldValue('value_loan', e.floatValue);
                          setFormState({ ...formState, value_loan: e.floatValue });
                        }}
                      />
                      <span className="text1"> VNĐ</span>
                    </div>
                    {touched.value_loan && errors.value_loan && (
                      <p className="red error">{errors.value_loan}</p>
                    )}
                  </div>
                  <div className="col-12 form-control">
                    <h6 className="title1">
                      Số tiền đề xuất vay (<span className="red">*</span>)
                    </h6>
                    <div className="c-form1__control1">
                      <NumberFormat
                        className="input"
                        thousandSeparator={true}
                        name="suggest_monney"
                        placeholder="Nhập giá trị"
                        defaultValue={formState.suggest_monney}
                        onValueChange={e => {
                          setFieldValue('suggest_monney', e.floatValue);
                          setFormState({ ...formState, suggest_monney: e.floatValue });
                        }}
                      />
                      <span className="text1"> VNĐ</span>
                    </div>
                    {touched.suggest_monney && errors.suggest_monney && (
                      <p className="red error">{errors.suggest_monney}</p>
                    )}
                  </div>
                  <div className="col-12">
                    <h6 className="title1">
                      Tài sản thế chấp (<span className="red">*</span>)
                    </h6>
                    <div className="col-12">
                      <label className="radio">
                        Tài sản hình thành từ vốn vay
                        <input
                          type="radio"
                          name="collateral"
                          defaultChecked={
                            formState.collateral === 'Tài sản hình thành từ vốn vay' ? true : false
                          }
                          onClick={() => {
                            setIsCollateral(false);
                            setFieldValue('isCollateral', false);
                            setFormState({
                              ...formState,
                              collateral: 'Tài sản hình thành từ vốn vay'
                            });
                          }}
                        />
                        <span />
                      </label>
                    </div>

                    <div className="col-12 p-form2__radio1">
                      <label className="radio p-collateral-js" style={{ width: '100%' }}>
                        Bất động sản khác
                        <input
                          type="radio"
                          name="collateral"
                          defaultChecked={iscollateral}
                          onClick={() => {
                            setIsCollateral(true);
                            setFieldValue('isCollateral', true);
                            setFormState({
                              ...formState,
                              collateral: [
                                {
                                  id: 0,
                                  decription: null,
                                  estimate: null,
                                  relaValue: null
                                }
                              ]
                            });
                          }}
                        />
                        <span />
                      </label>
                      <div className="row p-form2__block1" style={{ display: 'block' }}>
                        <div className="row p-form2__block1">
                          {iscollateral && (
                            <div className="c-add-relationship-js">
                              {formState.collateral.map((value, key) => (
                                <ChildboxForm2
                                  index={key + 1}
                                  key={key}
                                  item={value}
                                  formState={formState}
                                  setFormState={setFormState}
                                  removeItem={removeCollateral}
                                  touched={touched}
                                  errors={errors}
                                  setFieldValue={setFieldValue}
                                />
                              ))}
                              <a
                                className="c-form1__link1 c-link-add-form-js"
                                onClick={e => {
                                  e.preventDefault();
                                  if (idAsset < 5) {
                                    setFormState({
                                      ...formState,
                                      collateral: [
                                        ...formState.collateral,
                                        {
                                          id: idAsset,
                                          decription: null,
                                          estimate: null,
                                          relaValue: null
                                        }
                                      ]
                                    });
                                    setIdAsset(idAsset + 1);
                                  }
                                }}
                              >
                                Thêm tài sản đảm bảo
                                <i className="icon">
                                  <i className="fa fa-plus" aria-hidden="true"></i>
                                </i>
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 c-form1__btns-list1">
                    <div className="text-center">
                      <button className="btn type-white" onClick={backFrom}>
                        Quay về
                      </button>
                      <button
                        type="button"
                        className="btn"
                        onClick={() => {
                          console.log(formikProps);
                          handleSubmit();
                        }}
                      >
                        Tiếp tục
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        );
      }}
    </Formik>
  );
};

StepForm02.propTypes = propTypes;

export default StepForm02;
