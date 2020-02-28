import React, { useState, useEffect } from 'react';
import Logo from '../../public/images/logo.svg';
import PhoneIcon from '../../public/images/svg/phone.svg';
import CHIcon from '../../public/images/svg/ch.svg';
import StoreIcon from '../../public/images/app_store.jpg';
import QRCODE from '../../public/images/QR_code.png';
import LocationIcon from '../../public/images/svg/location.svg';
import MailIcon from '../../public/images/svg/mail.svg';
import PinIcon from '../../public/images/svg/pin.svg';
import BieuPhiIcon from '../../public/images/svg/bieuphi.svg';

import Link from 'next/link';
import { map } from 'lodash';
import { getAllMenu, getMenuItemById } from '../../services/menu';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node
};

function Layout({ children }) {
  const [header, setHeader] = useState({});
  const [footer, setFooter] = useState({});
  const [slider, setSlider] = useState({});

  const nest = (items, id = null, link = 'parentId') => {
    return items
      .filter(item => item[link] === id)
      .map(item => ({
        ...item,
        title: `${item.name}`,
        children: nest(
          items.sort((a, b) => a.position - b.position),
          item.id
        ),
        expanded: true
      }));
  };

  const getMenu = async () => {
    const res = await getAllMenu();
    if (res && res.status === 200) {
      map(res.data, async values => {
        if (values.position === 'top') {
          const res1 = await getMenuItemById(values.id);
          if (res1 && res1.status === 200) {
            const menuTopData = nest(res1.data);
            setHeader(menuTopData);
          }
        } else {
          if (values.position === 'bottom') {
            const res2 = await getMenuItemById(values.id);
            if (res2 && res2.status === 200) {
              const data = nest(res2.data);
              setFooter(data);
            }
          } else {
            if (values.position === 'side') {
              const res3 = await getMenuItemById(values.id);
              if (res3 && res3.status === 200) {
                setSlider(res3.data);
              }
            }
          }
        }
      });
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  const footerItem = data => {
    return map(data, (item, index) => (
      <li key={index}>
        <Link
          className={item.children.length > 0 ? 'title' : ''}
          href="/page/[...slug]"
          as={`/page/${item.slug}`}
        >
          {item.name}
        </Link>
        <ul>{footerItem(item.children)}</ul>
      </li>
    ));
  };

  const renderFooter = items => {
    return map(items, (values, key) => {
      return (
        <div className="col-sm-3" key={key}>
          <ul className="footer_partner">
            <li>
              <Link href="/page/[...slug]" as={`/page/${values.slug}`}>
                {values.name}
              </Link>
              <ul className="footer_children">{footerItem(values.children)}</ul>
            </li>
          </ul>
        </div>
      );
    });
  };

  const renderChildMenu = items => {
    return map(items, item => (
      <li key={item.id}>
        <Link href="/page/[...slug]" as={`/page/${item.slug}`}>
          <span>{item.name}</span>
        </Link>
      </li>
    ));
  };

  const nestChild = items => {
    return map(items, item => (
      <li key={item.id} className={item.children.length > 0 ? 'children' : 'no-children'}>
        <Link href="/page/[...slug]" as={`/page/${item.slug}`}>
          {item.name}
        </Link>
        {item.children.length > 0 && <ul>{renderChildMenu(item.children)} </ul>}
      </li>
    ));
  };

  return (
    <div>
      <div id="wrapper">
        <div id="panel">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <ul className="menu line">
                  <li>
                    <a href="#">
                      <img src={PinIcon} alt="pin_icon" width="15" className="mr-2" /> Điểm GD & ATM
                  </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={BieuPhiIcon} alt="Bieu Phi" width="15" className="mr-2" /> Biểu phí
                  </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-7">
                <ul className="menu line text-right">
                  <li>
                    <a href="#">Về MBBank</a>
                  </li>
                  <li>
                    <a href="#">Nhà đầu tư</a>
                  </li>
                  <li>
                    <a href="#">Nghề nghiệp</a>
                  </li>
                  <li>
                    <a href="#">Liên hệ</a>
                  </li>
                  <li>
                    <div className="dropdown language">
                      <div className="title">
                        <span>
                          <img src="static/flags/vn.png" alt="" />
                        </span>
                        <i className="icon-arrow-2 ib"></i>
                      </div>
                      <div className="content">
                        <div className="inner">
                          <ul className="menu">
                            <li className="lang-en">
                              <a href="#" hrefLang="en" title="English (en)">
                                <img src="static/flags/gb.png" alt="" /> <span>English</span>
                              </a>
                            </li>
                            <li className="lang-vi active">
                              <a href="#" hrefLang="vi" title="Tiếng Việt (vi)">
                                <img src="static/images/flags/vn.png" alt="" />{' '}
                                <span>Tiếng Việt</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <header id="header" className="fixe" role="banner">
          <div className="container">
            <a href="./" id="logo">
              <img src={Logo} alt="logo" />
            </a>
            <div className="wrap-menu-header">
              <ul className="menu-top-header" data-style="1">
                {nestChild(header)}
              </ul>
            </div>
            <div className="group-header">
              <div className="item ilogin">
                <ul className="menu line">
                  <li>
                    <a href="#"> Đăng ký</a>
                  </li>
                  <li>
                    <a href="#"> Đăng nhập</a>
                  </li>
                </ul>
              </div>
              <div className="item ilang">
                <div className="dropdown language">
                  <div className="title">
                    <span>
                      <img src="assets/images/flags/vn.png" alt="" />
                    </span>
                    <i className="icon-arrow-2 ib"></i>
                  </div>
                  <div className="content">
                    <div className="inner">
                      <ul className="menu">
                        <li className="lang-en">
                          <a href="#" hrefLang="en" title="English (en)">
                            <img src="assets/images/flags/gb.png" alt="" /> <span>English</span>
                          </a>
                        </li>
                        <li className="lang-vi active">
                          <a href="#" hrefLang="vi" title="Tiếng Việt (vi)">
                            <img src="assets/images/flags/vn.png" alt="" /> <span>Tiếng Việt</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item imenu">
                <span className="menu-btn x">
                  <span></span>
                </span>
              </div>
            </div>
          </div>
        </header>
        <div className="conetnt">{children}</div>
        {/* contact */}
        <section className="sec-cta">
          <div className="container">
            <div className="row center">
              <div className="col-4 ">
                <a className="item" href="#">
                  <span className="img">
                    <img src="static/images/svg/t1.svg" alt="" />
                  </span>
                  <div className="divtext">
                    <h4 className="title">Gọi ngay</h4>
                    <div className="desc">
                      1900 545426 - (84-24) 3767 4050 <br /> (Từ nước ngoài)
                  </div>
                  </div>
                </a>
              </div>
              <div className="col-4 ">
                <a className="item" href="#">
                  <span className="img">
                    <img src="static/images/svg/t2.svg" alt="" />
                  </span>
                  <div className="divtext">
                    <h4 className="title">Gửi email</h4>
                    <div className="desc">mb247@mbbank.com.vn</div>
                  </div>
                </a>
              </div>
              <div className="col-4 ">
                <a className="item" href="#">
                  <span className="img">
                    <img src="static/images/svg/t3.svg" alt="" />
                  </span>
                  <div className="divtext">
                    <h4 className="title">Tìm ATm & Điểm GD</h4>
                    <div className="desc">Tìm điểm giao dịch & ATM gần bạn</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* tải appp */}
        <section className="sec-download-pc group-ef loaded">
          <div className="container">
            <div className="row">
              <div className="col-md-6   efch-2 ef-img-r">
                <p className="stitle">Đăng ký nhận thông tin khuyến mãi</p>
                <form role="search" method="get" className="searchform " action="">
                  <div>
                    <input
                      type="text"
                      placeholder="Nhập email để nhận thông tin"
                      value=""
                      name="s"
                      className="input"
                    />
                  </div>
                  <button type="submit" className="btn btn-2">
                    Đăng ký
                </button>
                </form>
              </div>
              <div className="col-md-6   efch-3 ef-img-r">
                <div className="wapp">
                  <span className="code">
                    <img src="static/images/code.png" alt="" />
                  </span>
                  <div className="app">
                    <p className="stitle">Hãy tải app ngay hôm nay</p>
                    <a href="#">
                      <img src="static/images/btt-google.svg" alt="" />
                    </a>{' '}
                    &nbsp;
                  <a href="#">
                      <img src="static/images/btt-chplay.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="footer-pc" className="group-ef loaded">
          <div className="container">
            <div className="row grid-space-10">
              <div className="col-lg-4 col-sm-12 efch-1 ef-img-t">
                <div className="widget widget-info">
                  <div>
                    <a href="./" className="logo">
                      {' '}
                      <img src="static/images/logo-blue.svg" alt="" />
                    </a>
                  </div>
                  <h3>Ngân hàng TMCP Quân Đội</h3>
                  <p>Toà nhà MBBank - Hội sở 21 Cát Linh, Đống Đa, Hà Nội</p>
                  <p>Email: mb247@mbbank.com.vn</p>
                  <p className="w6"> Swift code: MSCBVNVX</p>
                  <p>Hãy gọi cho chúng tôi để được tư vấn 24/7</p>
                  <div className="call">
                    <i className="icon-phone-1"></i> 1900 545426
                </div>
                </div>
              </div>

              <div className="col-md-3 col-6 col-lg-2  efch-2 ef-img-t">
                <div className="widget">
                  <h4 className="widget-title">Cá nhân</h4>
                  <ul className="menu">
                    <li>
                      <a href="#">Ngân hàng số</a>
                    </li>
                    <li>
                      <a href="#">Tiết kiệm</a>
                    </li>
                    <li>
                      <a href="#">Cho vay</a>
                    </li>
                    <li>
                      <a href="#">Thẻ</a>
                    </li>
                    <li>
                      <a href="#">Chuyển tiền thanh toán</a>
                    </li>
                    <li>
                      <a href="#">Bảo hiểm nhân thọ</a>
                    </li>
                    <li>
                      <a href="#">Sản phẩm khác</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-6 col-lg-2  efch-2 ef-img-t">
                <div className="widget">
                  <h4 className="widget-title">Doanh nghiệp</h4>
                  <ul className="menu">
                    <li>
                      <a href="#">Ngân hàng số</a>
                    </li>
                    <li>
                      <a href="#">Tài khoản và dịch vụ</a>
                    </li>
                    <li>
                      <a href="#">Tiền gửi</a>
                    </li>
                    <li>
                      <a href="#">Tín dụng và bảo lãnh</a>
                    </li>
                    <li>
                      <a href="#">Tài trợ thương mại</a>
                    </li>
                    <li>
                      <a href="#">Thị trường tiền tệ và vốn</a>
                    </li>
                    <li>
                      <a href="#">Dịch vụ khác</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-6 col-lg-2  efch-3 ef-img-t">
                <div className="widget">
                  <h4 className="widget-title">Khách hàng cao cấp</h4>
                  <ul className="menu">
                    <li>
                      <a href="#">Private</a>
                    </li>
                    <li>
                      <a href="#">Priorities</a>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <h4 className="widget-title">Liên hệ</h4>
                  <ul className="menu">
                    <li>
                      <a href="#">Chat trực tuyến</a>
                    </li>
                    <li>
                      <a href="#">Tìm điểm giao dịch</a>
                    </li>
                    <li>
                      <a href="#">Tổng đài 24/7</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-6  col-lg-2 efch-4 ef-img-t">
                <div className="widget">
                  <h4 className="widget-title">Về MBBank</h4>
                  <ul className="menu">
                    <li>
                      <a href="#">Về chúng tôi</a>
                    </li>
                    <li>
                      <a href="#">Nhà đầu tư</a>
                    </li>
                    <li>
                      <a href="#">Nghề nghiệp</a>
                    </li>
                    <li>
                      <a href="#">Liên hệ</a>
                    </li>
                  </ul>
                </div>

                <ul className="blog-item-social ">
                  <li>
                    <a className="item" title="" target="_blank" href="#">
                      <i className="icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a className="item" title="" target="_blank" href="#">
                      <i className="icon-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a className="item" title="" target="_blank" href="#">
                      <i className="icon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a className="item" title="" target="_blank" href="#">
                      <i className="icon-youtube-2"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="line"></div>
            <div className="row grid-space-10">
              <div className="col-lg-6 col-md-7 efch-5 ef-img-t">
                <ul className="menu line">
                  <li>
                    {' '}
                    <a href="#">Điều khoản sử dụng</a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a href="#">Bảo mật thông tin khách hàng</a>{' '}
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-5 efch-6 ef-img-t">
                <div className="copyright">2019 © Copyright MBbank. All rights reserved.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = propTypes;

export default Layout;
