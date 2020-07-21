import React, { useRef, useState } from 'react';
import Proptypes from 'prop-types';
import DatePicker from 'react-datepicker';
import BaseSelect from 'react-select';
import ChildboxForm1 from './ChildboxForm1';
import FixRequiredSelect from './FixRequiredSelect';
import { filter } from 'lodash';
import { Formik } from 'formik';
import * as yup from 'yup';

const propTypes = {
  nextForm: Proptypes.func,
  setFormState: Proptypes.func,
  formState: Proptypes.object
};

const validationSchema = yup.object().shape({
  full_name: yup.string().required('Trường bắt buộc nhập'),
  profileType: yup.string().required('Trường bắt buộc nhập'),
  is_loan: yup.boolean().required('Trường bắt buộc nhập'),
  sex: yup.string().required('Trường bắt buộc nhập'),
  city_address: yup.string().required('Trường bắt buộc nhập'),
  current_home: yup.string().required('Trường bắt buộc nhập'),
  status_home: yup.string().required('Trường bắt buộc nhập'),
  companionName: yup.string().required('Trường bắt buộc nhập'),
  birthday: yup.string().required('Trường bắt buộc nhập'),
  phone: yup.string().required('Trường bắt buộc nhập'),
  email: yup
    .string()
    .required('Trường bắt buộc nhập')
    .email('Email không hợp lệ'),
  profileNumber: yup
    .string()
    .required('Trường bắt buộc nhập')
    .when('profileType', {
      is: profileType => profileType === 'cmnd',
      then: yup
        .string()
        .length(9, 'Chứng minh nhân dân gồm 9 số')
        .required('Trường bắt buộc nhập')
    })
    .when('profileType', {
      is: profileType => profileType === 'cc',
      then: yup
        .string()
        .length(12, 'Căn cước gồm 12 số')
        .required('Trường bắt buộc nhập')
    })
    .when('profileType', {
      is: profileType => profileType === 'hc' || profileType === 'Chứng minh quân đội',
      then: yup.string().required('Trường bắt buộc nhập')
    })
});

// SatisFiyati: yup.string().when("TeklifeAcikMi", {
//   is: (TeklifeAcikMi) => !TeklifeAcikMi,
//   then: yup.string().required(),
const StepForm01 = ({ nextForm, setFormState, formState }) => {
  const form01 = useRef(null);
  const handleChange = event => {
    event.persist();
    setFormState(() => ({
      ...formState,
      [event.target.name]: event.target.value
    }));
  };

  const removeComponion = indexItem => {
    const listCompo = filter(formState.nuComponion, (value, index) => index !== indexItem);
    setFormState({ ...formState, nuComponion: listCompo });
  };

  const listPartner = [
    { value: 'Vợ/ chồng KH', label: 'Vợ/ chồng KH' },
    { value: 'Bố mẹ đẻ KH', label: 'Bố mẹ đẻ KH' },
    { value: 'Bố mẹ chồng/bố mẹ vợ', label: 'Bố mẹ chồng/bố mẹ vợ' },
    { value: 'Con cái con đẻ, con dâu, con rể', label: 'Con cái con đẻ, con dâu, con rể' }
  ];

  const Select = props => (
    <FixRequiredSelect {...props} SelectComponent={BaseSelect} options={props.options || options} />
  );

  return (
    <Formik
      initialValues={{
        profileType: formState.profileType ? formState.profileType : '',
        full_name: formState.full_name ? formState.full_name : '',
        profileNumber: formState.profileNumber ? formState.profileNumber : '',
        email: formState.email ? formState.email : '',
        is_loan: formState.is_loan ? formState.is_loan : '',
        sex: formState.sex ? formState.sex : '',
        city_address: formState.city_address ? formState.city_address : '',
        current_home: formState.current_home ? formState.current_home : '',
        status_home: formState.status_home ? formState.status_home : '',
        companionName: formState.companionName ? formState.companionName : '',
        birthday: formState.birthday ? formState.birthday : '',
        phone: formState.phone ? formState.phone : ''
      }}
      onSubmit={(values, actions) => {
        setFormState(preState => ({
          ...preState,
          full_name: values.full_name,
          profileType: values.profileType,
          email: values.email,
          is_loan: values.is_loan,
          sex: values.sex,
          address: {
            ...preState.address,
            city_address: values.city_address,
            current_home: values.current_home,
            status_home: values.status_home
          },
          companion: {
            name: values.companionName
          },
          birthday: values.birthday,
          phone: values.phone
        }));
        nextForm();
      }}
      validationSchema={validationSchema}
    >
      {formikProps => (
        <section className="sec-t p-form1">
          <div className="container">
            <div className="max750">
              <form autoComplete="on" className="row list-item form-contact c-form1" ref={form01}>
                <div className="col-12">
                  <div className="text-center">
                    <h3 className="ctext mg-0 fs24">Bước 1/3: Thông tin khách hàng</h3>
                  </div>
                </div>
                <div className="col-12">
                  <h6 className="title1">
                    Khách hàng đang có khoản vay tại MB (<span className="red">*</span>)
                  </h6>
                  <label className="radio">
                    Có
                    <input
                      type="radio"
                      name="is_loan"
                      value={true}
                      onClick={formikProps.handleChange('is_loan')}
                    />
                    <span />
                  </label>
                  <label className="radio">
                    Không
                    <input
                      type="radio"
                      name="is_loan"
                      value={false}
                      onClick={formikProps.handleChange('is_loan')}
                    />
                    <span />
                  </label>
                  {formikProps.touched['is_loan'] && formikProps.errors['is_loan'] && (
                    <p className="red error">{formikProps.errors['is_loan']}</p>
                  )}
                </div>
                <div className="col-12 form-control">
                  <h6 className="title1">
                    Họ và tên (<span className="red">*</span>)
                  </h6>
                  <input
                    className="input"
                    name="full_name"
                    type="text"
                    placeholder="Họ và tên(*)"
                    defaultValue={formState.full_name}
                    onChange={formikProps.handleChange('full_name')}
                  />
                  {formikProps.touched['full_name'] && formikProps.errors['full_name'] && (
                    <p className="red error">{formikProps.errors['full_name']}</p>
                  )}
                </div>
                <div className="col-12">
                  <h6 className="title1">
                    Loại Giấy tờ tùy thân (<span className="red">*</span>)
                  </h6>
                  <label className="radio">
                    Chứng minh nhân dân
                    <input
                      type="radio"
                      name="profileType"
                      required
                      defaultValue={'cmnd'}
                      defaultChecked={
                        formState.profileType === 'Chứng minh nhân dân' ? true : false
                      }
                      onClick={formikProps.handleChange('profileType')}
                    />
                    <span />
                  </label>
                  <label className="radio">
                    Căn cước
                    <input
                      type="radio"
                      name="profileType"
                      required
                      defaultValue={'cc'}
                      defaultChecked={formState.profileType === 'Căn cước' ? true : false}
                      onClick={formikProps.handleChange('profileType')}
                    />
                    <span />
                  </label>
                  <label className="radio">
                    Hộ chiếu
                    <input
                      type="radio"
                      name="profileType"
                      required
                      defaultValue={'hc'}
                      defaultChecked={formState.profileType === 'Hộ chiếu' ? true : false}
                      onClick={formikProps.handleChange('profileType')}
                    />
                    <span />
                  </label>
                  <label className="radio">
                    Chứng minh quân đội
                    <input
                      type="radio"
                      name="profileType"
                      required
                      defaultValue={'Chứng minh quân đội'}
                      defaultChecked={
                        formState.profileType === 'Chứng minh quân đội' ? true : false
                      }
                      onClick={formikProps.handleChange('profileType')}
                    />
                    <span />
                  </label>
                  <p className="red error">Trường bắt buộc chọn</p>
                </div>
                <div className="col-12 form-control">
                  <h6 className="title1">
                    Số Giấy tờ tùy thân (<span className="red">*</span>)
                  </h6>
                  <input
                    className="input"
                    name="profileNumber"
                    type="text"
                    placeholder="Số Giấy tờ tùy thân(*)"
                    defaultValue={formState.profileNumber}
                    onChange={formikProps.handleChange('profileNumber')}
                  />
                  {formikProps.touched['profileNumber'] && formikProps.errors['profileNumber'] && (
                    <p className="red error">{formikProps.errors['profileNumber']}</p>
                  )}
                </div>
                <div className="col-12 col-md-12">
                  <h6 className="title1">
                    Giới tính (<span className="red">*</span>)
                  </h6>
                  <label className="radio">
                    Nam
                    <input
                      type="radio"
                      name="sex"
                      defaultValue={'male'}
                      onClick={formikProps.handleChange('sex')}
                      defaultChecked={formState.sex === 'male' ? true : false}
                    />
                    <span />
                  </label>
                  <label className="radio">
                    Nữ
                    <input
                      type="radio"
                      name="sex"
                      defaultValue={'female'}
                      defaultChecked={!formState.sex === 'male' ? true : false}
                      onClick={formikProps.handleChange('sex')}
                    />
                    <span />
                  </label>
                  {formikProps.touched['sex'] && formikProps.errors['sex'] && (
                    <p className="red error">{formikProps.errors['sex']}</p>
                  )}
                </div>
                <div className="col-12">
                  <h6 className="title1">
                    Ngày sinh (<span className="red">*</span>)
                  </h6>
                  <div className="react-datepicker-wrapper">
                    <div className="react-datepicker__input-container">
                      <DatePicker
                        placeholderText={'dd/MM/yyyy'}
                        autoComplete="off"
                        selected={formikProps.values.birthday}
                        name={'birthday'}
                        onChange={e => formikProps.setFieldValue('birthday', e)}
                      ></DatePicker>
                      {formikProps.touched['birthday'] && formikProps.errors['birthday'] && (
                        <p className="red error">{formikProps.errors['birthday']}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <h6 className="title1">
                    Số điện thoại (<span className="red">*</span>)
                  </h6>
                  <input
                    className="input"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Số điện thoại"
                    defaultValue={formState.phone}
                    onChange={formikProps.handleChange('phone')}
                  />
                  {formikProps.touched['phone'] && formikProps.errors['phone'] && (
                    <p className="red error">{formikProps.errors['phone']}</p>
                  )}
                </div>
                <div className="col-12">
                  <h6 className="title1">
                    Email (<span className="red">*</span>)
                  </h6>
                  <input
                    className="input"
                    name="email"
                    type="Email"
                    required
                    placeholder="email"
                    defaultValue={formState.email}
                    onChange={formikProps.handleChange('email')}
                  />
                  {formikProps.touched['email'] && formikProps.errors['email'] && (
                    <p className="red error">{formikProps.errors['email']}</p>
                  )}
                </div>
                <div className="col-12">
                  <div className="text-center">
                    <h3 className="ctext mg-0 pt-10 pb-10 bg-1 undefined">Địa chỉ thường trú</h3>
                  </div>
                </div>
                <div className="col-12 form-control">
                  <h6 className="title1">
                    Khách hàng có hộ khẩu tại (<span className="red">*</span>)
                  </h6>
                  <input
                    className="input"
                    type="text"
                    placeholder="Chọn Tỉnh/ Thành phố"
                    defaultValue={formState.address ? formState.address.city_address : null}
                    onChange={formikProps.handleChange('city_address')}
                  />
                  {formikProps.touched['city_address'] && formikProps.errors['city_address'] && (
                    <p className="red error">{formikProps.errors['city_address']}</p>
                  )}
                </div>
                <div className="col-12 col-md-6">
                  <h6 className="title1">
                    Nơi ở hiện tại (<span className="red">*</span>)
                  </h6>
                  <input
                    className="input"
                    name="current_district_address"
                    type="text"
                    required
                    placeholder="Nhập địa chỉ khách hàng đang sinh sống"
                    defaultValue={formState.address ? formState.address.current_home : null}
                    onChange={formikProps.handleChange('current_home')}
                  />
                  {formikProps.touched['current_home'] && formikProps.errors['current_home'] && (
                    <p className="red error">{formikProps.errors['current_home']}</p>
                  )}
                </div>
                <div className="col-12 col-md-6">
                  <h6 className="title1">
                    Tình trạng nơi ở (<span className="red">*</span>)
                  </h6>
                  <input
                    className="input"
                    name="condition_residence"
                    type="text"
                    required
                    placeholder="Chọn tình trạng nơi ở"
                    defaultValue={formState.address ? formState.address.status_home : null}
                    onChange={formikProps.handleChange('status_home')}
                  />
                  {formikProps.touched['status_home'] && formikProps.errors['status_home'] && (
                    <p className="red error">{formikProps.errors['status_home']}</p>
                  )}
                </div>
                <div className="col-12 c-form1__title1 c-tabs-btn-js">
                  <div className="text-center">
                    <h3 className="ctext mg-0 pt-10 pb-10 bg-1 undefined">
                      Người đồng trả nợ
                      <i className="icon icon-arrow-1 icon-up-js" />
                    </h3>
                  </div>
                </div>
                <div className="col-12 c-tabs-js">
                  <div className="row">
                    <div className="col-12 form-control">
                      <h6 className="title1">
                        Họ và tên (<span className="red">*</span>)
                      </h6>
                      <input
                        className="input"
                        name="name_companion"
                        type="text"
                        required
                        placeholder="Nhập đầy đủ họ tên vợ/ chồng"
                        defaultValue={formState.companion ? formState.companion.name : null}
                        onChange={formikProps.handleChange('companionName')}
                      />
                      {formikProps.touched['companionName'] &&
                        formikProps.errors['companionName'] && (
                          <p className="red error">{formikProps.errors['companionName']}</p>
                        )}
                    </div>
                    <div className="col-12 col-md-12">
                      <h6 className="title1">
                        (<span className="red">*</span>)
                      </h6>
                      <Select
                        options={listPartner}
                        required
                        value={formState.companion ? formState.companion.relation : ''}
                        onChange={e => {
                          setFormState({
                            ...formState,
                            companion: { ...formState.companion, relation: e }
                          });
                        }}
                      />
                    </div>
                    <div className="col-12 col-md-12">
                      <h6 className="title1">Số giấy tờ tuỳ thân</h6>
                      <input
                        className="input"
                        name="profile_partner"
                        type="text"
                        required
                        defaultValue={formState.companion ? formState.companion.num_profile : null}
                        placeholder="Nhập số giấy tờ tuỳ thân"
                        onChange={e => {
                          setFormState({
                            ...formState,
                            companion: { ...formState.companion, num_profile: e.target.value }
                          });
                        }}
                      />
                    </div>
                    <div className="col-12 p-form1--mb1 c-add-relationship-js">
                      {formState.nuComponion.map((value, index) => (
                        <ChildboxForm1
                          key={index}
                          item={value}
                          index={index}
                          formState={formState}
                          setFormState={setFormState}
                          removeItem={removeComponion}
                        />
                      ))}
                      {formState.nuComponion && formState.nuComponion.length < 3 && (
                        <a
                          className="c-form1__link1 c-link-add-form-js"
                          onClick={() => {
                            setFormState({
                              ...formState,
                              nuComponion: [...formState.nuComponion, {}]
                            });
                          }}
                        >
                          Thêm mối quan hệ
                          <i className="fa fa-plus" aria-hidden="true"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => {
                      formikProps.handleSubmit();
                    }}
                  >
                    Tiếp tục
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </Formik>
  );
};

StepForm01.propTypes = propTypes;

export default StepForm01;
