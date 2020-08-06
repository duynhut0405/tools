/* eslint-disable dot-notation */
import React, { useRef, useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import DatePicker from 'react-datepicker';
import BaseSelect from 'react-select';
import ChildboxForm1 from './ChildboxForm1';
import FixRequiredSelect from './FixRequiredSelect';
import { filter, isLength } from 'lodash';
import { Formik, FieldArray } from 'formik';
import classNames from 'classnames';
import moment from 'moment';
import * as yup from 'yup';
import NumberFormat from 'react-number-format';
import { useRouter } from 'next/router';

const propTypes = {
  nextForm: Proptypes.func,
  setFormState: Proptypes.func,
  formState: Proptypes.object,
  provinces: Proptypes.array
  // isUpdate: Proptypes.bool
};

const validationSchema = yup.object().shape({
  full_name: yup.string().required('Trường bắt buộc nhập'),
  profileType: yup.string().required('Trường bắt buộc nhập'),
  is_loan: yup.boolean().required('Trường bắt buộc nhập'),
  sex: yup.string().required('Trường bắt buộc nhập'),
  nuComponion: yup.array().of(
    yup.object().shape({
      name_componion: yup.string().required('Trường bắt buộc nhập'),
      rela_componion: yup.string().required('Trường bắt buộc nhập'),
      prof_componion: yup
        .string()
        .matches(/(?=[A-Z])/, 'Yêu cầu số và chữ viết hoa. Ví dụ: SD2123123')
        .matches(/(?=[0-9])/, 'Yêu cầu số và chữ viết hoa. Ví dụ: SD2123123')
        .matches(/^[^<>*&#@!()%$a-z]*$/, 'Không chứa kí tự đặc biệt và chữ viết thường')
        .required('Trường bắt buộc nhập')
    })
  ),
  city_address: yup.string().required('Trường bắt buộc nhập'),
  current_home: yup
    .string()
    .max(300, 'Không được quá 300 kí tự')
    .required('Trường bắt buộc nhập'),
  status_home: yup.string().required('Trường bắt buộc nhập'),
  profile_partner: yup.string().when('isCheck', {
    is: isCheck => isCheck === true,
    then: yup
      .string()
      .matches(/(?=[A-Z0-9])/, 'Yêu cầu số và chữ viết hoa. Ví dụ: SD2123123')
      .matches(/^[^<>*&#@!()%$a-z]*$/, 'Không chứa kí tự đặc biệt và chữ viết thường')
      .required('Trường bắt buộc nhập')
  }),
  name_companion: yup.string().when('isCheck', {
    is: isCheck => isCheck === true,
    then: yup.string().required('Trường bắt buộc nhập')
  }),
  companionRelation: yup.string().when('isCheck', {
    is: isCheck => isCheck === true,
    then: yup.string().required('Trường bắt buộc nhập')
  }),
  birthday: yup.string().required('Trường bắt buộc nhập'),
  phone: yup
    .string()
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Không đúng định dạng số')
    // .length(10, 'Chỉ nhập 10 chữ số')
    .required('Trường bắt buộc nhập'),
  email: yup
    .string()
    .matches(/^[a-zA-z0-9](\.?[a-zA-z0-9]){0,}@g(oogle)?mail\.com$/, 'Email không hợp lệ')
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Không chứa kí tự đặc biệt và bắt đầu bằng số'
    )
    .email('Email không hợp lệ')
    .required('Trường bắt buộc nhập'),
  profileNumber: yup
    .string()
    .required('Trường bắt buộc nhập')
    .when('profileType', {
      is: profileType => profileType === 'Chứng minh nhân dân',
      then: yup.string().required('Trường bắt buộc nhập')
    })
    .when('profileType', {
      is: profileType => profileType === 'Căn cước',
      then: yup
        .string()
        .matches(/^[0-9]{0,15}$/, 'Không chứa chữ cái và kí tự đặc biệt')
        .required('Trường bắt buộc nhập')
    })
    .when('profileType', {
      is: profileType => profileType === 'Hộ chiếu',
      then: yup
        .string()
        .matches(/(?=[A-Z])/, 'Yêu cầu số và chữ viết hoa. Ví dụ: SD2123123')
        .matches(/(?=[0-9])/, 'Yêu cầu số và chữ viết hoa. Ví dụ: SD2123123')
        .matches(/^[^<>*&#@!()%$a-z]*$/, 'Không chứa kí tự đặc biệt và chữ viết thường')
        .required('Trường bắt buộc nhập')
    })
    .when('profileType', {
      is: profileType => profileType === 'Chứng minh quân đội',
      then: yup
        .string()
        .matches(/(?=[A-Z])/, 'Yêu cầu số và chữ viết hoa. Ví dụ: SD2123123')
        .matches(/(?=[0-9])/, 'Yêu cầu số và chữ viết hoa. Ví dụ: SD2123123')
        .matches(/^[^<>*&#@!()%$a-z]*$/, 'Không chứa kí tự đặc biệt và chữ viết thường')
        .required('Trường bắt buộc nhập')
    })
});

const StepForm01 = ({ nextForm, setFormState, formState, provinces }) => {
  const form01 = useRef(null);
  const router = useRouter();

  const listPartner = [
    { value: 'Vợ/ chồng KH', label: 'Vợ/ chồng KH' },
    { value: 'Bố mẹ đẻ KH', label: 'Bố mẹ đẻ KH' },
    { value: 'Bố mẹ chồng/bố mẹ vợ', label: 'Bố mẹ chồng/bố mẹ vợ' },
    { value: 'Con cái (con đẻ, con dâu, con rể)', label: 'Con cái (con đẻ, con dâu, con rể)' }
  ];

  const statusHome = [
    { value: 'Nhà sở hữu riêng', label: 'Nhà sở hữu riêng' },
    { value: 'Nhà đi thuê', label: 'Nhà đi thuê' },
    { value: 'Nhà của bố mẹ', label: 'Nhà của bố mẹ' },
    { value: 'Nhà người thân (cô dì chú bác…)', label: 'Nhà người thân (cô dì chú bác…)' },
    { value: 'Ở nhờ nhà bạn bè', label: 'Ở nhờ nhà bạn bè' }
  ];

  const Select = props => (
    <FixRequiredSelect {...props} SelectComponent={BaseSelect} options={props.options || options} />
  );

  const customStyles = {
    menu: () => ({
      zIndex: '999px'
    })
  };

  // function compare(a, b) {
  //   const text_a = a.label;
  //   const text_b = b.label;
  //   console.log(text_a);
  //   console.log(text_b);
  //   console.log(text_a.localeCompare(text_b));
  //   return text_a.localeCompare(text_b) ? 1 : text_b.localeCompare(text_a) ? -1 : 0;
  // }

  function compare(a, b) {
    return a.label > b.label ? 1 : b.label > a.label ? -1 : 0;
  }

  return (
    <Formik
      initialValues={{
        nuComponion: formState.nuComponion ? formState.nuComponion : [],
        profileType: formState.profileType ? formState.profileType : 'cmnd',
        full_name: formState.full_name ? formState.full_name : '',
        profileNumber: formState.profileNumber ? formState.profileNumber : '',
        email: formState.email ? formState.email : '',
        is_loan: formState.is_loan ? formState.is_loan : '',
        sex: formState.sex ? formState.sex : '',
        city_address: formState.address ? formState.address.city_address : '',
        current_home: formState.address ? formState.address.current_home : '',
        status_home: formState.address ? formState.address.status_home : '',
        profile_partner: formState.companion ? formState.companion.num_profile : '',
        name_companion: formState.companion ? formState.companion.name : '',
        isCheck: formState.companion ? true : false,
        isLengths: formState.nuComponion,
        companionRelation: formState.companion ? formState.companion.relation : '',
        birthday: formState.birthday ? formState.birthday : '',
        phone: formState.phone ? formState.phone : ''
      }}
      onSubmit={(values, actions) => {
        setFormState({
          ...formState,
          full_name: values.full_name.toUpperCase(),
          profileType: values.profileType,
          profileNumber: values.profileNumber,
          email: values.email,
          is_loan: values.is_loan,
          sex: values.sex,
          address: {
            ...formState.address,
            city_address: values.city_address,
            current_home: values.current_home,
            status_home: values.status_home
          },
          companion: formState.companion && {
            ...formState.companion,
            relation: formState.companion
              ? formState.companion.relation
              : { value: 'Vợ/ chồng KH', label: 'Vợ/ chồng KH' }
          },
          birthday: values.birthday,
          phone: values.phone,
          link: `${process.env.FRONTEND_URL_LOAN}page/trang-test-new/?link=${values.phone}/${moment(
            // link: `http://localhost:8080/page/trang-test-new?link=${values.phone}/0`
            // ${moment(
            new Date(),
            'DD/MM/YYYY'
          ).format()}`
        });

        if (form01.current.reportValidity()) {
          event.preventDefault();
          nextForm();
        }
      }}
      validationSchema={validationSchema}
    >
      {formikProps => {
        const { setFieldValue } = formikProps;
        const removeComponion = indexItem => {
          const listCompo = filter(formState.nuComponion, (value, index) => index !== indexItem);
          setFormState({ ...formState, nuComponion: listCompo });
          return listCompo;
        };
        // console.log(formState.companion);
        // const [collap, setCollapParent] = useState();
        if (router.query.link) {
          useEffect(() => {
            const fields = [
              'full_name',
              'nuComponion',
              'profileType',
              'full_name',
              'profileNumber',
              'email',
              'is_loan',
              'sex',
              'city_address',
              'current_home',
              'status_home',
              'profile_partner',
              'name_companion',
              'isCheck',
              'isLengths',
              'companionRelation',
              'birthday',
              'phone'
            ];
            // set
            fields.forEach(field => {
              setFieldValue(field, formState[field], false);
              if (field === 'current_home' || field === 'city_address' || field === 'status_home') {
                if (formState['address']) {
                  setFieldValue('current_home', formState['address'].current_home);
                  setFieldValue('city_address', formState['address'].city_address);
                  setFieldValue('status_home', formState['address'].status_home);
                }
              }
            });
            // setCollapParent(formState.companion);
          }, [formState]);
        }
        return (
          <section className="sec-t p-form1" id="featured">
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
                        defaultChecked={formState.is_loan === 'true' ? true : false}
                      />
                      <span />
                    </label>
                    <label className="radio">
                      Không
                      <input
                        type="radio"
                        name="is_loan"
                        value={false}
                        defaultChecked={formState.is_loan === 'false' ? true : false}
                        onClick={formikProps.handleChange('is_loan')}
                      />
                      <span />
                    </label>
                    {formikProps.touched.is_loan && formikProps.errors.is_loan && (
                      <p className="red error">{formikProps.errors.is_loan}</p>
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
                      value={formState.full_name && formState.full_name.toUpperCase()}
                      defaultValue={formState.full_name ? formState.full_name : null}
                      onChange={e => {
                        setFormState({ ...formState, full_name: e.target.value.toUpperCase() });
                        setFieldValue('full_name', e.target.value.toUpperCase());
                      }}
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
                        defaultValue={'Chứng minh nhân dân'}
                        defaultChecked={
                          !formState.profileType
                            ? true
                            : formState.profileType === 'Chứng minh nhân dân'
                            ? true
                            : false
                        }
                        onClick={e => {
                          setFormState({
                            ...formState,
                            profileType: e.target.value,
                            profileNumber: ''
                          });
                          setFieldValue('profileType', e.target.value);
                        }}
                      />
                      <span />
                    </label>
                    <label className="radio">
                      Căn cước
                      <input
                        type="radio"
                        name="profileType"
                        defaultValue={'Căn cước'}
                        defaultChecked={formState.profileType === 'Căn cước' ? true : false}
                        onClick={e => {
                          setFormState({
                            ...formState,
                            profileType: e.target.value,
                            profileNumber: ''
                          });
                          setFieldValue('profileType', e.target.value);
                        }}
                      />
                      <span />
                    </label>
                    <label className="radio">
                      Hộ chiếu
                      <input
                        type="radio"
                        name="profileType"
                        defaultValue={'Hộ chiếu'}
                        defaultChecked={formState.profileType === 'Hộ chiếu' ? true : false}
                        onClick={e => {
                          setFormState({
                            ...formState,
                            profileType: e.target.value,
                            profileNumber: ''
                          });
                          setFieldValue('profileType', e.target.value);
                        }}
                      />
                      <span />
                    </label>
                    <label className="radio">
                      Chứng minh quân đội
                      <input
                        type="radio"
                        name="profileType"
                        defaultValue={'Chứng minh quân đội'}
                        defaultChecked={
                          formState.profileType === 'Chứng minh quân đội' ? true : false
                        }
                        onClick={e => {
                          setFormState({
                            ...formState,
                            profileType: e.target.value,
                            profileNumber: ''
                          });
                          setFieldValue('profileType', e.target.value);
                        }}
                      />
                      <span />
                    </label>
                  </div>
                  <div className="col-12 form-control">
                    <h6 className="title1">
                      Số Giấy tờ tùy thân (<span className="red">*</span>)
                    </h6>
                    {/* {console.log(formState.profileType)}
                    {console.log(formState.profileNumber)} */}
                    {formState.profileType === 'Hộ chiếu' && (
                      <>
                        <input
                          className="input"
                          name="profileNumber"
                          type="text"
                          placeholder={formState.profileType}
                          defaultValue={formState.profileNumber ? formState.profileNumber : ''}
                          onChange={e => {
                            setFieldValue('profileNumber', e.target.value);
                            setFormState({ ...formState, profileNumber: e.target.value });
                          }}
                        />
                        {formikProps.touched.profileNumber && formikProps.errors.profileNumber && (
                          <p className="red error">{formikProps.errors.profileNumber}</p>
                        )}
                      </>
                    )}

                    {formState.profileType === 'Chứng minh quân đội' && (
                      <>
                        <input
                          className="input"
                          name="profileNumber"
                          type="text"
                          placeholder={formState.profileType}
                          defaultValue={formState.profileNumber ? formState.profileNumber : ''}
                          onChange={e => {
                            setFieldValue('profileNumber', e.target.value);
                            setFormState({ ...formState, profileNumber: e.target.value });
                          }}
                        />
                        {formikProps.touched.profileNumber && formikProps.errors.profileNumber && (
                          <p className="red error">{formikProps.errors.profileNumber}</p>
                        )}
                      </>
                    )}
                    {formState.profileType === 'Căn cước' && (
                      <>
                        <NumberFormat
                          className="input"
                          name="profileNumber"
                          format="############"
                          value={formState.profileNumber ? formState.profileNumber : ''}
                          onValueChange={e => {
                            setFieldValue('profileNumber', e.formattedValue);
                            setFormState({ ...formState, profileNumber: e.formattedValue });
                          }}
                        />
                        {formikProps.touched.profileNumber && formikProps.errors.profileNumber && (
                          <p className="red error">{formikProps.errors.profileNumber}</p>
                        )}
                      </>
                    )}
                    {formState.profileType === 'Chứng minh nhân dân' && (
                      <>
                        <NumberFormat
                          className="input"
                          name="profileNumber"
                          format="#### ### ##"
                          placeholder={formState.profileType}
                          value={formState.profileNumber ? formState.profileNumber : ''}
                          onValueChange={e => {
                            setFormState({ ...formState, profileNumber: e.formattedValue });
                            setFieldValue('profileNumber', e.formattedValue);
                          }}
                        />
                        {formikProps.touched.profileNumber && formikProps.errors.profileNumber && (
                          <p className="red error">{formikProps.errors.profileNumber}</p>
                        )}
                      </>
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
                        onClick={formikProps.handleChange('sex')}
                        defaultChecked={formState.sex === 'female' ? true : false}
                      />
                      <span />
                    </label>
                    {formikProps.touched.sex && formikProps.errors.sex && (
                      <p className="red error">{formikProps.errors.sex}</p>
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
                          dateFormat="dd/MM/yyyy"
                          selected={Date.parse(formState.birthday)}
                          name={'birthday'}
                          onChange={e => {
                            if (e) {
                              formikProps.setFieldValue('birthday', e);
                              setFormState({ ...formState, birthday: e });
                            } else {
                              formikProps.setFieldValue('birthday', '');
                            }
                          }}
                        ></DatePicker>
                        {formikProps.touched.birthday && formikProps.errors.birthday && (
                          <p className="red error">{formikProps.errors.birthday}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <h6 className="title1">
                      Số điện thoại (<span className="red">*</span>)
                    </h6>
                    <NumberFormat
                      className="input"
                      name="suggest_monney"
                      placeholder="Số điện thoại"
                      format="##########"
                      value={formState.phone ? formState.phone : ''}
                      onValueChange={e => {
                        setFormState({
                          ...formState,
                          phone: e.formattedValue
                        });
                        formikProps.setFieldValue('phone', e.formattedValue);
                      }}
                    />
                    {formikProps.touched.phone && formikProps.errors.phone && (
                      <p className="red error">{formikProps.errors.phone}</p>
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
                      placeholder="email"
                      defaultValue={formState.email}
                      onChange={formikProps.handleChange('email')}
                    />
                    {formikProps.touched.email && formikProps.errors.email && (
                      <p className="red error">{formikProps.errors.email}</p>
                    )}
                  </div>
                  <div className="col-12">
                    <div className="text-center">
                      <h3 className="ctext mg-0 pt-10 pb-10 bg-1 undefined">Địa chỉ thường trú</h3>
                    </div>
                  </div>
                  <div className="col-12 form-control">
                    <h6 className="title1">
                      Tỉnh/ Thành phố (<span className="red">*</span>)
                    </h6>
                    <Select
                      options={provinces.sort(compare)}
                      hideSelectedOptions={true}
                      defaultValue={formState.address ? formState.address.city_address : {}}
                      placeholder="Chọn Tỉnh/ Thành phố"
                      name="city_address"
                      styles={customStyles}
                      value={formState.address ? formState.address.city_address : {}}
                      onChange={e => {
                        setFieldValue('city_address', e);
                        setFormState({
                          ...formState,
                          address: { ...formState.address, city_address: e }
                        });
                      }}
                    />

                    {formikProps.touched.city_address && formikProps.errors.city_address && (
                      <p className="red error">{formikProps.errors.city_address}</p>
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
                      placeholder="Nhập địa chỉ khách hàng đang sinh sống"
                      defaultValue={formState.address ? formState.address.current_home : null}
                      onChange={formikProps.handleChange('current_home')}
                    />
                    {formikProps.touched.current_home && formikProps.errors.current_home && (
                      <p className="red error">{formikProps.errors.current_home}</p>
                    )}
                  </div>
                  <div className="col-12 col-md-6">
                    <h6 className="title1">
                      Tình trạng nơi ở (<span className="red">*</span>)
                    </h6>
                    <Select
                      options={statusHome}
                      placeholder="Chọn tình trạng nơi ở"
                      className="selectpicker"
                      value={formState.address ? formState.address.status_home : {}}
                      defaultValue={formState.address ? formState.address.status_home : {}}
                      onChange={e => {
                        setFieldValue('status_home', e);
                        setFormState({
                          ...formState,
                          address: { ...formState.address, status_home: e }
                        });
                        formikProps.handleChange('status_home');
                      }}
                    />
                    {formikProps.touched['status_home'] && formikProps.errors['status_home'] && (
                      <p className="red error">{formikProps.errors['status_home']}</p>
                    )}
                  </div>
                  {/* {console.log(formikProps.isCheck)} */}
                  <div className="col-12 c-form1__title1 c-tabs-btn-js">
                    <div
                      className="text-center"
                      onClick={() => {
                        // setFieldValue('isCheck', !collap);
                        // setCollapParent(!collap);
                        if (formState.companion) {
                          setFieldValue('isCheck', false);
                          setFieldValue('nuComponion', []);
                          setFormState({
                            ...formState,
                            companion: null,
                            nuComponion: []
                          });
                        } else {
                          setFieldValue('isCheck', true);
                          setFieldValue('companionRelation', {
                            value: 'Vợ/ chồng KH',
                            label: 'Vợ/ chồng KH'
                          });
                          setFormState({
                            ...formState,
                            companion: {
                              relation: { value: 'Vợ/ chồng KH', label: 'Vợ/ chồng KH' }
                            },
                            nuComponion: []
                          });
                        }
                      }}
                    >
                      <h3 className="ctext mg-0 pt-10 pb-10 bg-1">
                        Người đồng trả nợ
                        <i
                          className={classNames('icon icon-arrow-1 icon-up-js', {
                            active: formState.companion
                          })}
                        />
                      </h3>
                    </div>
                  </div>
                  {formState.companion && (
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
                            placeholder="Nhập đầy đủ họ tên vợ/ chồng"
                            value={formState.companion && formState.companion.name}
                            onChange={e => {
                              setFormState({
                                ...formState,
                                companion: {
                                  ...formState.companion,
                                  name: e.target.value.toUpperCase()
                                }
                              });
                              setFieldValue('name_companion', e.target.value.toUpperCase());
                            }}
                          />

                          {formikProps.touched['name_companion'] &&
                            formikProps.errors['name_companion'] && (
                              <p className="red error">{formikProps.errors['name_companion']}</p>
                            )}
                        </div>
                        <div className="col-12 col-md-12">
                          <h6 className="title1">
                            Mối quan hệ (<span className="red">*</span>)
                          </h6>
                          <Select
                            options={listPartner}
                            name="companionRelation"
                            defaultValue={{ value: 'Vợ/ chồng KH', label: 'Vợ/ chồng KH' }}
                            value={
                              formState.companion
                                ? formState.companion.relation
                                : { value: 'Vợ/ chồng KH', label: 'Vợ/ chồng KH' }
                            }
                            onChange={e => {
                              setFieldValue('companionRelation', e.value);
                              setFormState({
                                ...formState,
                                companion: { ...formState.companion, relation: e }
                              });
                            }}
                          />
                          {formikProps.touched['companionRelation'] &&
                            formikProps.errors['companionRelation'] && (
                              <p className="red error">{formikProps.errors['companionRelation']}</p>
                            )}
                        </div>
                        <div className="col-12 col-md-12">
                          <h6 className="title1">Số giấy tờ tuỳ thân</h6>
                          <input
                            className="input"
                            name="profile_partner"
                            type="text"
                            defaultValue={
                              formState.companion ? formState.companion.num_profile : null
                            }
                            placeholder="Nhập số giấy tờ tuỳ thân"
                            onChange={e => {
                              setFieldValue('profile_partner', e.target.value);
                              setFormState({
                                ...formState,
                                companion: { ...formState.companion, num_profile: e.target.value }
                              });
                            }}
                          />

                          {formikProps.touched['profile_partner'] &&
                            formikProps.errors['profile_partner'] && (
                              <p className="red error">{formikProps.errors['profile_partner']}</p>
                            )}
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
                              formikProps={formikProps}
                            />
                          ))}
                          {formState.nuComponion && formState.nuComponion.length < 2 && (
                            <a
                              className="c-form1__link1 c-link-add-form-js"
                              onClick={() => {
                                setFormState({
                                  ...formState,
                                  nuComponion: [
                                    ...formState.nuComponion,
                                    {
                                      id: formState.nuComponion.length,
                                      name_componion: '',
                                      rela_componion: '',
                                      prof_componion: ''
                                    }
                                  ]
                                });
                                setFieldValue('nuComponion', [
                                  ...formikProps.values.nuComponion,
                                  {
                                    id: formState.nuComponion.length,
                                    name_componion: '',
                                    rela_componion: '',
                                    prof_componion: ''
                                  }
                                ]);
                              }}
                            >
                              Thêm mối quan hệ
                              <i className="fa fa-plus" aria-hidden="true"></i>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="col-12 text-center">
                    <button
                      type="button"
                      className="btn"
                      onClick={() => {
                        console.log(formikProps);
                        console.log(formState);
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
        );
      }}
    </Formik>
  );
};

StepForm01.propTypes = propTypes;

export default StepForm01;
