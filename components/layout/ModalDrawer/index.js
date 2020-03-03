import React, { Component } from 'react';

function ModalDrawer() {
  return (
    <div className="okdeno">
      <div className="wrapul main">
        <div className="inner">
          <ul className="menu">
            <li className="active children">
              <a href="page/ca-nhan">
                <span>Khách hàng cá nhân</span>
              </a>
            </li>
            <li>
              <a href="page/homepage/ca-nhan-cao-cap">
                <span>Cá nhân cao cấp</span>
              </a>
            </li>
            <li>
              <a href="page/homepagedoanh-nghiep">
                <span>Khách hàng doanh nghiệp</span>
              </a>
            </li>
            <li>
              <a href="page/mb-ket-noi">
                <span>MB kết nối</span>
              </a>
            </li>
            <li>
              <a href="page/diem-giao-dich-atm">
                <span>Điểm GD & ATM</span>
              </a>
            </li>
            <li>
              <a href="page/bieu-phi">
                <span>Biểu phí</span>
              </a>
            </li>
            <li>
              <a href="page/homepageve-mbbank">
                <span>Về MBBank</span>
              </a>
            </li>
            <li>
              <a href="page/homepagenha-dau-tu">
                <span>Nhà đầu tư</span>
              </a>
            </li>
            <li>
              <a href="page/nghe--nghiep">
                <span>Nghề nghiệp</span>
              </a>
            </li>
            <li>
              <a href="page/lien-he">
                <span>Liên hệ</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Đăng ký</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Đăng nhập</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ModalDrawer;
