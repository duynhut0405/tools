import React from 'react';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.object
};

function FormStep({ data }) {
  return (
    <section className="form-step-wapper">
      <section className="sec-tb">
        <div className="container">
          <div className="text-center">
            <h1>Đăng ký dịch vụ trực tuyến</h1>
            <p className="desc max750"></p>
          </div>
        </div>
      </section>
      <section className="online-signup">
        <div className="container">
          <div className="max950">
            <div className="flex-bw">
              <div className="step">
                <a href="#1" className="b active">
                  01
                </a>
              </div>
              <div className="step">
                <a href="#2" className="b">
                  02
                </a>
              </div>
              <div className="step">
                <a href="#3" className="b">
                  03
                </a>
              </div>
              <div className="step">
                <a href="#4" className="b">
                  04
                </a>
              </div>
              <div className="step-line"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-tb">
        <div className="container">
          <div className="max750">
            <form className="row list-item form-contact">
              <div className="col-12">
                <div className="text-center">
                  <h3 className="ctext mg-0 fs24">Bước 1/4: Thông tin chung</h3>
                </div>
              </div>
              <div className="col-12">
                <label className="block">
                  <input className="input" placeholder="Họ và tên (*)" />
                </label>
              </div>
              <div className="col-lg-6">
                <label className="block">
                  <input className="input" placeholder="Số điện thoại (*)" />
                </label>
              </div>
              <div className="col-lg-6">
                <label className="block">
                  <input className="input" placeholder="Email (*)" />
                </label>
              </div>

              <div className="col-12">
                <label className="block">
                  <input className="input" placeholder="Số CMND (*)" />
                </label>
              </div>

              <div className="col-lg-6">
                <label className="block">
                  <input className="input" placeholder="Ngày cấp cmnd (*)" />
                </label>
              </div>

              <div className="col-lg-6">
                <label className="block">
                  <input className="input" placeholder="Nơi cấp cmnd (*)" />
                </label>
              </div>

              <div className="col-lg-6">
                <label className="block">
                  <input className="input" placeholder="Ngày sinh (*)" />
                </label>
              </div>

              <div className="col-lg-6">
                <label className="block">
                  <span className="title">
                    Tình trạng hôn nhân (<span className="require">*</span>)
                  </span>
                  <label className="radio ">
                    <input type="radio" name="check1" checked="" />
                    <span></span>Độc thân
                  </label>{' '}
                  &nbsp; &nbsp; &nbsp;
                  <label className="radio ">
                    <input type="radio" name="check1" />
                    <span></span>Đã kết hôn
                  </label>
                </label>
              </div>
              <div className="col-12 text-center">
                <a className="btn" href="#2">
                  Tiếp tục
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
}

FormStep.propTypes = propTypes;

export default FormStep;
