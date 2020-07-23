import React, { useState, useRef, useEffect } from 'react';
import Proptypes from 'prop-types';
import ChildboxForm2 from './ChildboxForm2';
import { Formik } from 'formik';
import * as yup from 'yup';

const propTypes = {
  nextForm: Proptypes.func,
  backFrom: Proptypes.func,
  setFormState: Proptypes.func,
  formState: Proptypes.object
};

const validationSchema = yup.object().shape({
  value_loan: yup
    .string()
    .required('Trường bắt buộc nhập')
    .max(12, 'Tối đa 12 số'),
  suggest_monney: yup
    .number()
    .required('Trường bắt buộc nhập')
    .when('value_loan', value_loan => {
      const msg =
        'Chưa phù hợp quy định MB, MB cho vay tối đa 80% giá trị nhà đất mua/chi phí xây/sửa chữa/trang bị nội thất.';
      return yup
        .number()
        .required('Trường bắt buộc nhập')
        .max(parseInt((value_loan * 80) / 100), msg);
      // .test('len', 'Tối đa 12 số', val => val.toString().length <= 12);
    }),
  purpose_loan: yup.string().required('Trường bắt buộc'),
  isCollateral: yup.boolean(),
  decriptiom: yup.string().when('isCollateral', {
    is: true,
    then: yup.string().required('Trường bắt buộc nhập')
  }),
  profileNumber: yup.string().when('isCollateral', {
    is: true,
    then: yup.string().required('Trường bắt buộc nhập')
  }),
  relaValue: yup.string().when('isCollateral', {
    is: true,
    then: yup.string().required('Trường bắt buộc nhập')
  })
});

// const text01 = 'Nhà đất đã có Giấy chứng nhận (Sổ đỏ)';
// const text02 = 'Nhà đất đã có Giấy chứng nhận (Sổ đỏ)';
const text03 = 'Tài sản hình thành từ vốn vay';
const StepForm02 = ({ nextForm, backFrom, setFormState, formState }) => {
  const [iscollateral, setIsCollateral] = useState(formState.collateral === text03 ? false : true);
  const [idAsset, setIdAsset] = useState(0);
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
        purpose_loan: formState.purpose_loan || '',
        decriptiom: formState.decriptiom || '',
        profileNumber: formState.profileNumber || '',
        relaValue: formState.relaValue || '',
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
                          // required
                          defaultChecked={formState.type_purpose === 2 ? true : false}
                          onClick={() =>
                            setFormState({
                              ...formState,
                              type_purpose: 2
                            })
                          }
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
                                  // required
                                  defaultChecked={
                                    formState.purpose_loan ===
                                    'Nhà đất đã có Giấy chứng nhận (Sổ đỏ)'
                                      ? true
                                      : false
                                  }
                                  onClick={e => {
                                    setFieldValue('purpose_loan', e.target.value);
                                    setFormState({
                                      ...formState,
                                      purpose_loan: 'Nhà đất đã có Giấy chứng nhận (Sổ đỏ)'
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
                                  name="test1"
                                  defaultChecked={
                                    formState.purpose_loan ===
                                    'Nhà chung cư, đất dự án chưa có Giấy chứng nhận (Sổ đỏ)'
                                      ? true
                                      : false
                                  }
                                  onClick={e => {
                                    setFieldValue('purpose_loan', e.target.value);
                                    setFormState({
                                      ...formState,
                                      purpose_loan:
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
                          onClick={() =>
                            setFormState({
                              ...formState,
                              type_purpose: 1
                            })
                          }
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
                                    formState.purpose_loan === 'Xây nhà' ? true : false
                                  }
                                  onClick={e => {
                                    setFieldValue('purpose_loan', e.target.value);
                                    setFormState({
                                      ...formState,
                                      purpose_loan: 'Xây nhà'
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
                                  name="test1"
                                  // required
                                  defaultChecked={
                                    formState.purpose_loan === 'Sửa nhà' ? true : false
                                  }
                                  onClick={e => {
                                    setFieldValue('purpose_loan', e.target.value);
                                    setFormState({
                                      ...formState,
                                      purpose_loan: 'Sửa nhà'
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
                    {touched.purpose_loan && errors.purpose_loan && (
                      <p className="red error">{errors.purpose_loan}</p>
                    )}
                  </div>
                  <div className="col-12 form-control">
                    <h6 className="title1">
                      Giá trị nhà đất mua/ Chi phí xây/ sửa chữa/ trang bị nội thất (
                      <span className="red">*</span>)
                    </h6>
                    <div className="c-form1__control1">
                      <input
                        className="input"
                        name="value_loan"
                        type="number"
                        // required
                        placeholder="Nhập giá trị"
                        defaultValue={formState.value_loan}
                        onChange={e => {
                          handleChangeCustom(e);
                          setFieldValue('value_loan', parseInt(e.target.value));
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
                      <input
                        className="input"
                        name="suggest_monney"
                        type="number"
                        // required
                        placeholder="Nhập giá trị"
                        defaultValue={formState.suggest_monney}
                        onChange={e => {
                          handleChangeCustom(e);
                          setFieldValue('suggest_monney', parseInt(e.target.value));
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
                          // required
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
