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
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 phone">
              <div>
                <img src={PhoneIcon} alt="phone_icon" width="50" className="mr-4" />
              </div>
              <div>
                <p className="title">Gọi ngay</p>
                <p className="subtitle">
                  1900 545426 - (84-24) 37674050 <br></br>
                  (Từ nước ngoài)
                </p>
              </div>
            </div>
            <div className="col-sm-4 phone email">
              <div>
                <img src={MailIcon} alt="phone_icon" width="50" className="mr-4" />
              </div>
              <div>
                <p className="title">Gửi Email</p>
                <p className="subtitle">mb247@mbbank.com.vn</p>
              </div>
            </div>
            <div className="col-sm-4 phone">
              <div>
                <img src={LocationIcon} alt="phone_icon" width="50" className="mr-4" />
              </div>
              <div>
                <p className="title">Tìm ATM giao dịch</p>
                <p className="subtitle">Tìm điểm giao dịch & ATM gần bạn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tải appp */}
      <div className="app_wapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <form>
                <label>Đăng ký nhận thông tin khuyến mãi</label>
                <div className="input_wapper">
                  <input name="email" placeholder="Nhập email" />
                  <button type="submit">Đăng ký </button>
                </div>
              </form>
            </div>
            <div className="col-sm-6" style={{ margin: 0 }}>
              <div className="app">
                <label>Hãy tải app ngay hôm nay</label>
                <div className="app_content">
                  <a href="#" className="mr-3">
                    <img src={StoreIcon} alt="icon_app" width="120" />
                  </a>
                  <a href="#" className="mr-3">
                    <img src={CHIcon} alt="icon_app" width="120" />
                  </a>
                  <img src={QRCODE} alt="icon_app" width="60" className="code_qr" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="footer">
        <div className="footer_wapper container">
          <div className="row mt-3">
            {/* <img src={Logo} alt="logo" width="130" title="Ngân Hàng TMCP Quân Đội" /> */}
          </div>
          <div className="row ">
            <div className="col-sm-4">
              <ul className="footer_left">
                <li>
                  <a className="mb_title">Ngân Hàng TMCP Quân Đội</a>
                </li>
                <li>
                  <a>
                    Tòa nhà MBBank - Hội sở 21 Cát Linh, <br></br>
                    Đống Đa, Hà Nội
                  </a>
                </li>
                <li>
                  Email: <a href="#">mb247@mbbank.com.vn</a>
                </li>
                <li className="mb-4">
                  <a className="code">Swift code: MSCBVNX</a>
                </li>
                <li>
                  <a>Hãy gọi cho chúng tôi để được tư vấn 24/7</a>
                </li>
                <li>
                  {/* <img src={PhoneIcon} alt="phone_icon" width="25" className="mr-3" /> */}
                  <a className="phone" href="tel:1900545426">
                    1900545426
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-8">
              <div className="row">{renderFooter(footer)}</div>
            </div>
          </div>
          <hr></hr>
          <div className="copyright">
            <div>
              <p>Điều khoản sử dụng | Bảo mật thông tin</p>
            </div>
            <div>
              <p>2019 © Copyright MBbank. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = propTypes;

export default Layout;
