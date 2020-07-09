import React, { useState, useRef } from 'react';
import Proptypes from 'prop-types';
import ChildboxForm2 from './ChildboxForm2';

const propTypes = {
  nextForm: Proptypes.func,
  backFrom: Proptypes.func,
  setFormState: Proptypes.func,
  formState: Proptypes.object
};
const StepForm02 = ({ nextForm, backFrom, setFormState, formState }) => {
  const [purposeLoan, setPurposeLoan] = useState(null);
  const [iscollateral, setIsCollateral] = useState(false);
  const [numAsset, setNumAsset] = useState([]);
  const form02 = useRef(null);
  const handleChange = event => {
    event.persist();
    setFormState(() => ({
      ...formState,
      [event.target.name]: event.target.value
    }));
  };

  const summitForm02 = () => {
    if (form02.current.reportValidity()) {
      event.preventDefault();
      nextForm();
    }
  };

  return (
    <section className="sec-t p-form2">
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
                    required
                    // defaultValue={0}
                    onClick={() => setPurposeLoan(2)}
                  />
                  <span />
                  {purposeLoan && purposeLoan === 2 && (
                    <div className="row p-form2--mt20">
                      <div className="col-12">
                        <label className="radio">
                          Nhà đất đã có Giấy chứng nhận (Sổ đỏ)
                          <input
                            type="radio"
                            name="test1"
                            required
                            onClick={() =>
                              setFormState({
                                ...formState,
                                purpose_loan: 'Nhà đất đã có Giấy chứng nhận (Sổ đỏ)'
                              })
                            }
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
                            defaultValue={0}
                            onClick={() =>
                              setFormState({
                                ...formState,
                                purpose_loan:
                                  'Nhà chung cư, đất dự án chưa có Giấy chứng nhận (Sổ đỏ)'
                              })
                            }
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
                    required
                    // defaultValue={1}
                    onClick={() => setPurposeLoan(1)}
                  />
                  <span />
                  {purposeLoan && purposeLoan === 1 && (
                    <div className="row p-form2--mt20">
                      <div className="col-12">
                        <label className="radio">
                          Xây nhà
                          <input
                            type="radio"
                            name="test1"
                            required
                            onClick={() =>
                              setFormState({
                                ...formState,
                                purpose_loan: 'Xây nhà'
                              })
                            }
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
                            required
                            defaultValue={1}
                            onClick={() =>
                              setFormState({
                                ...formState,
                                purpose_loan: 'Sửa nhà'
                              })
                            }
                          />
                          <span />
                        </label>
                      </div>
                    </div>
                  )}
                </label>
              </div>
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
                  required
                  placeholder="Nhập giá trị"
                  onChange={e => handleChange(e)}
                />
                <span className="text1"> VNĐ</span>
              </div>
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
                  required
                  placeholder="Nhập giá trị"
                  onClick={e => handleChange(e)}
                />
                <span className="text1"> VNĐ</span>
              </div>
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
                    required
                    onClick={() => {
                      setIsCollateral(false);
                      setFormState({ ...formState, collateral: 'Tài sản hình thành từ vốn vay' });
                    }}
                  />
                  <span />
                </label>
              </div>
              <div className="col-12 p-form2__radio1">
                <label className="radio" style={{ width: '100%' }}>
                  Bất động sản khác
                  <input
                    type="radio"
                    name="collateral"
                    required
                    defaultValue={0}
                    onClick={() => {
                      setIsCollateral(true);
                      setFormState({ ...formState, collateral: [] });
                    }}
                  />
                  <span />
                  <div className="row p-form2__block1">
                    {iscollateral && (
                      <div className="c-add-relationship-js">
                        <ChildboxForm2 index={0} />
                        {numAsset.map((value, key) => (
                          <ChildboxForm2 index={key + 1} key={key} />
                        ))}
                        <a
                          className="c-form1__link1 c-link-add-form-js"
                          onClick={() => {
                            setNumAsset([...numAsset, 1]);
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
                </label>
              </div>
            </div>
            <div className="col-12 c-form1__btns-list1">
              <div className="text-center">
                <button className="btn type-white" onClick={backFrom}>
                  Quay về
                </button>
                <button className="btn" type="submit" onClick={() => summitForm02()}>
                  Tiếp tục
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

StepForm02.propTypes = propTypes;

export default StepForm02;
