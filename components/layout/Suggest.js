import React from 'react';

function Suggest() {
  return (
    <div id="search-sg" style={{ display: 'none' }}>
      <div className="container">
        <a href="#" id="logo">
          <img src="assets/images/logo-blue.svg" alt="" />
        </a>
        <div className="suggest">
          <div className="sg kw">
            <span className="b cl1">Từ khóa phổ biến</span>
            <div className="key">
              <a href="#">vay vốn</a>
              <a href="#">ngân hàng số</a>
              <a href="#">thẻ tín dụng quốc tế</a>
              <a href="#">tiền hửi thanh toán</a>
            </div>
          </div>
          <div className="sg sv">
            <span className="b cl1">Dịch vụ gợi ý</span>
            <div className="tags">
              <a className="tag" href="#">
                Ngân hàng số dành cho doanh nghiệp
              </a>
              <a className="tag" href="#">
                Ngân hàng đầu tư
              </a>
              <a className="tag" href="#">
                Quản lý dòng tiền
              </a>
            </div>
          </div>
        </div>
        <span className="icon-close close-sg"></span>
      </div>
    </div>
  );
}

export default Suggest;
