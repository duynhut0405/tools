import React from 'react';
import Proptypes from 'prop-types';

const propTypes = {
  nextForm: Proptypes.func,
  backFrom: Proptypes.func
};
const StepForm03 = ({ nextForm, backFrom }) => {
  return (
    <section className="sec-t p-form2">
      <div className="container">
        <div className="max750">
          <form autoComplete="on" className="row list-item form-contact c-form1">
            <div className="col-12">
              <div className="text-center">
                <h3 className="ctext mg-0 fs24">Bước 3/3: Thông tin phương án vay</h3>
              </div>
            </div>
            <div className="col-12 c-form1__title1 c-tabs-btn-js">
              <div className="text-center">
                <h3 className="ctext mg-0 pt-10 pb-10 bg-1 undefined">
                  Thông tin các khoản vay hiện tại của Khách hàng và người đồng trả nợ{' '}
                  <i className="icon icon-arrow-1 icon-up-js" />
                </h3>
              </div>
            </div>
            <div className="col-12 c-tabs-js">
              <div className="row">
                <div className="col-12 form-control">
                  <h6 className="title1">Dư nợ tại các Tổ chức tín dụng</h6>
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
                <div className="col-12 form-control">
                  <h6 className="title1">Số tiền trả nợ hàng tháng</h6>
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
              </div>
            </div>
            <div className="col-12">
              <div className="text-center">
                <h3 className="ctext mg-0 pt-10 pb-10 bg-1 undefined">
                  Thông tin thu nhập sau thuế (<span className="red">*</span>)
                </h3>
              </div>
            </div>
            <div className="col-12 form-control">
              <h6 className="title1">Thu nhập hàng tháng của Khách hàng</h6>
              <div className="c-form1__control1 c-form1__control1--text1">
                <input
                  className="input"
                  name="profileNumber"
                  type="text"
                  required
                  placeholder="Nhập giá trị"
                  defaultValue
                />
                <span className="text1">VNĐ/ tháng</span>
              </div>
            </div>
            <div className="col-12 c-form1__checkboxs">
              <h6>Người đồng trả nợ/ Thu nhập hàng tháng của Người đồng trả nợ</h6>
              <label className="checkbox">
                Vợ/ chồng của Khách hàng
                <input type="checkbox" name="payee" required defaultValue={0} />
                <span />
              </label>
              <label className="checkbox">
                Đồng trả nợ khác
                <input type="checkbox" name="payee" required defaultValue={1} />
                <span />
              </label>
            </div>
            <div className="col-12 form-control">
              <h6 className="title1">Vợ/ chồng của Khách hàng</h6>
              <div className="c-form1__control1 c-form1__control1--text1">
                <input
                  className="input"
                  name="profileNumber"
                  type="text"
                  required
                  placeholder="Nhập giá trị"
                  defaultValue
                />
                <span className="text1">VNĐ/ tháng</span>
              </div>
            </div>
            <div className="col-12 form-control">
              <h6 className="title1">Đồng trả nợ khác</h6>
              <div className="c-form1__control1 c-form1__control1--text1">
                <input
                  className="input"
                  name="profileNumber"
                  type="text"
                  required
                  placeholder="Nhập giá trị"
                  defaultValue
                />
                <span className="text1">VNĐ/ tháng</span>
              </div>
            </div>
            <div className="col-12">
              <div className="c-form1__confirm">
                <span className="confirm_text1">Tổng thu nhập</span>
                <p className="confirm_sum1">
                  <strong>32,000,000</strong> VNĐ
                </p>
              </div>
            </div>
            <div className="col-12 c-form1__checkboxs mb-20">
              <label className="checkbox">
                <strong className="font1">Tôi đã hiểu và cam kết</strong>
                <input type="checkbox" name="commit" required defaultValue={0} />
                <span />
              </label>
            </div>
            <div className="col-12">
              <p>1. Cam kết các thông tin, số liệu kê khai trên là đúng sự thật.</p>
              <p>
                2. Sử dụng tiền vay đúng mục đích và chịu trách nhiệm về việc mục đích vay vốn tuân
                thủ quy định Pháp luật.
              </p>
              <p>
                3. Trả gốc, lãi, và các chi phí, phạt phát sinh (nếu có) của khoản vay đúng hạn cho
                MB.
              </p>
              <p>
                4. Nguồn thu nhập dùng để trả nợ là hợp pháp đã hoàn thành các nghĩa vụ tài chính
                theo quy định của Pháp luật.
              </p>
              <p>
                5. Đồng ý và cho phép MB sử dụng bất kỳ thông tin nào liên quan đến khoản vay để
                chia sẻ và trao đổi những thông tin liên quan đến Chúng tôi và khoản vay của Chúng
                tôi; đồng thời đồng ý và cho phép MB được tìm kiếm, xác minh, cung cấp thông tin
                liên quan đến Chúng tôi và khoản vay của Chúng tôi từ/cho bất kỳ bên thứ ba nào khác
                theo quy định của MB.
              </p>
              <p>
                6. Sẵn sàng tạo mọi điều kiện thuận lợi để MB xem xét, xác minh thông tin từ các
                nguồn khác nhau và hoàn toàn chịu trách nhiệm trước MB và pháp luật.
              </p>
              <p>
                7. Các thông tin, hồ sơ khác đã cung cấp tại các khoản vay trước (nếu có) vẫn giữ
                nguyên hiệu lực, không thay đổi thông tin và đảm bảo đúng, phù hợp với hiện trạng
                thực tế của tại thời điểm đề nghị vay vốn lần này.
              </p>
              <p>
                8. Tuân thủ các điều khoản quy định của Hợp đồng tín dụng, Hợp đồng bảo đảm tiền vay
                và các văn bản ký kết với MB (nếu có).
              </p>
            </div>
            <div className="col-12 c-form1__btns-list1">
              <div className="text-center">
                <button className="btn type-white" onClick={backFrom}>
                  Quay về
                </button>
                <button className="btn c-form1-btn1-js" onClick={nextForm}>
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

StepForm03.propTypes = propTypes;

export default StepForm03;
