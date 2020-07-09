import React, { useRef, useState } from 'react';
import Proptypes from 'prop-types';
import DatePicker from 'react-datepicker';
import BaseSelect from 'react-select';
import ChildboxForm1 from './ChildboxForm1';
import { map } from 'lodash';
import FixRequiredSelect from './FixRequiredSelect';

const propTypes = {
  nextForm: Proptypes.func,
  setFormState: Proptypes.func,
  formState: Proptypes.object
};

const StepForm01 = ({ nextForm, setFormState, formState }) => {
  const form01 = useRef(null);
  const [nuComponion, setComponion] = useState([]);
  const [indexComponion, setIndex] = useState(0);
  const handleChange = event => {
    event.persist();
    setFormState(() => ({
      ...formState,
      [event.target.name]: event.target.value
    }));
  };

  const summitForm01 = () => {
    if (form01.current.reportValidity()) {
      event.preventDefault();
      nextForm();
    }
  };

  const removeComponion = id => {
    const listCompo = formState.nuComponion.filter(value => value.id !== id);
    const listIDCompo = nuComponion.filter(value => value !== id);
    setFormState({ ...formState, nuComponion: listCompo });
    setComponion(listIDCompo);
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
                  required
                  defaultChecked={formState.is_loan ? true : false}
                  onClick={e => handleChange(e)}
                />
                <span />
              </label>
              <label className="radio">
                Không
                <input
                  type="radio"
                  name="is_loan"
                  required={false}
                  value={false}
                  defaultChecked={!formState.is_loan ? true : false}
                  onClick={e => handleChange(e)}
                />
                <span />
              </label>
            </div>
            <div className="col-12 form-control">
              <h6 className="title1">
                Họ và tên (<span className="red">*</span>)
              </h6>
              <input
                className="input"
                name="full_name"
                type="text"
                required
                placeholder="Họ và tên(*)"
                defaultValue={formState.full_name}
                onChange={e => handleChange(e)}
              />
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
                  defaultChecked={formState.profileType === 'cmnd' ? true : false}
                  onClick={e => handleChange(e)}
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
                  defaultChecked={formState.profileType === 'cc' ? true : false}
                  onClick={e => handleChange(e)}
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
                  defaultChecked={formState.profileType === 'hc' ? true : false}
                  onClick={e => handleChange(e)}
                />
                <span />
              </label>
              <label className="radio">
                Chứng minh quân đội
                <input
                  type="radio"
                  name="profileType"
                  required
                  defaultValue={'cmqd'}
                  defaultChecked={formState.profileType === 'cmqd' ? true : false}
                  onClick={e => handleChange(e)}
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
                required
                placeholder="Số Giấy tờ tùy thân(*)"
                defaultValue={formState.profileNumber}
                onChange={e => handleChange(e)}
              />
              <p className="red error">Trường bắt buộc điền</p>
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
                  required
                  defaultValue={'male'}
                  onClick={e => handleChange(e)}
                  defaultChecked={formState.sex === 'male' ? true : false}
                />
                <span />
              </label>
              <label className="radio">
                Nữ
                <input
                  type="radio"
                  name="sex"
                  required
                  defaultValue={'female'}
                  defaultChecked={!formState.sex === 'male' ? true : false}
                  onClick={e => handleChange(e)}
                />
                <span />
              </label>
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
                    // required={item.required}
                    selected={formState.birthday}
                    name={'birthday'}
                    onChange={e =>
                      setFormState({
                        ...formState,
                        birthday: e
                      })
                    }
                  ></DatePicker>
                  <p className="red error">Ngày tháng không hợp lệ</p>
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
                onChange={e => handleChange(e)}
              />
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
                onChange={e => handleChange(e)}
              />
              <p className="red error">Email không hợp lệ</p>
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
                required
                placeholder="Chọn Tỉnh/ Thành phố"
                defaultValue={formState.address ? formState.address.city_address : null}
                onChange={e =>
                  setFormState({
                    ...formState,
                    address: {
                      ...formState.address,
                      city_address: e.target.value
                    }
                  })
                }
              />
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
                onChange={e =>
                  setFormState({
                    ...formState,
                    address: {
                      ...formState.address,
                      current_home: e.target.value
                    }
                  })
                }
              />
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
                onChange={e =>
                  setFormState({
                    ...formState,
                    address: {
                      ...formState.address,
                      status_home: e.target.value
                    }
                  })
                }
              />
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
                    onChange={e => {
                      setFormState({
                        ...formState,
                        companion: { ...formState.companion, name: e.target.value }
                      });
                    }}
                  />
                </div>
                <div className="col-12 col-md-12">
                  <h6 className="title1">
                    Mối quan hệ (<span className="red">*</span>)
                  </h6>
                  {/* <Select
                    className="fix-select"
                    // placeholder={listPartner[0]}
                    required
                    isSearchable
                    options={listPartner}
                    // defaultValue={
                    //   formState.companion
                    //     ? {
                    //         label: formState.companion.value,
                    //         value: formState.companion.value
                    //       }
                    //     : {}
                    // }

                    onChange={e => {
                      setFormState({
                        ...formState,
                        companion: { ...formState.companion, relation: e.value }
                      });
                    }}
                  /> */}
                  <Select
                    options={listPartner}
                    required
                    value={
                      formState.companion
                        ? {
                            lable: formState.companion.relation.value,
                            value: formState.companion.relation.value
                          }
                        : ''
                    }
                    onChange={e => {
                      console.log(1111, e);
                      setFormState({
                        ...formState,
                        companion: { ...formState.companion, relation: e.value }
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
                    // required
                    defaultValue={{ label: formState.companion, value: formState.companion }}
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
                  {nuComponion.map((value, index) => (
                    <ChildboxForm1
                      index={value}
                      key={index}
                      formState={formState}
                      setFormState={setFormState}
                      removeItem={removeComponion}
                    />
                  ))}
                  <a
                    className="c-form1__link1 c-link-add-form-js"
                    onClick={() => {
                      setComponion([...nuComponion, indexComponion]);
                      setIndex(indexComponion + 1);
                    }}
                  >
                    Thêm mối quan hệ
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn" onClick={() => summitForm01()}>
                Tiếp tục
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

StepForm01.propTypes = propTypes;

export default StepForm01;
