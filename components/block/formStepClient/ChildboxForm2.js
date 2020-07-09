import React from 'react';

const ChildboxForm2 = () => {
  return (
    <div className="c-form1__child1">
      <span className="btn-close close-js">
        <i className="icon-close"> </i>
      </span>
      <section className="child1_box1">
        <div className="row">
          <div className="col-12 col-md-12 form-control">
            <h6 className="title1">
              Mô tả tài sản (<span className="red">*</span>)
            </h6>
            <input
              className="input"
              name="district"
              type="text"
              required
              placeholder="Nhập địa chỉ, diện tích…."
            />
          </div>
          <div className="col-12 col-md-6">
            <h6 className="title1">
              Giá trị ước tính (<span className="red">*</span>)
            </h6>
            <div className="c-form1__control1">
              <input
                className="input"
                name="profileNumber"
                type="text"
                required
                placeholder="Nhập giá trị"
                defaultValue
              />
              <span className="text1">VNĐ</span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h6 className="title1">
              Mối quan hệ chủ tài sản với khách hàng (<span className="red">*</span>)
            </h6>
            <select className="select">
              <option>(chọn mối quan hệ)</option>
              <option>(chọn mối quan hệ)</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChildboxForm2;
