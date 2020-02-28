import React, { useState, useEffect } from 'react';
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
          as={`page/${item.slugPages}`}
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
              <Link href="/page/[...slug]" as={`page/${values.slugPages}`}>
                {values.name}
              </Link>
              <ul className="footer_children">{footerItem(values.children)}</ul>
            </li>
          </ul>
        </div>
      );
    });
  };

  const nestChild = items => {
    return map(items, item => (
      <li key={item.id}>
        <Link href="/page/[...slug]" as={`page/${item.slugPages}`}>
          {item.name}
        </Link>
        {item.children.length > 0 && (
          <div className="dropdown-content">{renderFooter(item.children)}</div>
        )}
      </li>
    ));
  };

  return (
    <div id="wrapper">
      <span className="menu-btn overlay"> </span>
      <div id="panel">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <ul className="menu line">
                <li>
                  <a href="#">
                    <img src="assets/images/svg/t4.svg" alt="" /> Điểm GD & ATM
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/images/svg/t5.svg" alt="" /> Biểu phí
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
                        <img src="assets/images/flags/vn.png" alt="" />
                      </span>
                      <i className="icon-arrow-2 ib"></i>{' '}
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
                              <img src="assets/images/flags/vn.png" alt="" />
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
            <img src="../../assets/images/logo.svg" alt="" />
          </a>
          <div className="wrap-menu-header ">
            <ul className="menu-top-header " data-style="1">
              <li className="active children">
                <span className="showsubmenu icon-arrow-2 ib"></span>
                <a href="#">
                  <span>Khách hàng cá nhân</span>
                </a>
                <div className="wrapul">
                  <ul>
                    <li>
                      <a href="index.php">Home</a>
                    </li>
                    <li>
                      <a href="01_demo_block.php">01_demo_block</a>
                    </li>
                    <li>
                      <a href="01_demo_category.php">01_demo_category</a>
                    </li>

                    <li className="children">
                      <span className="showsubmenu icon-arrow-2 ib"></span>
                      <a href="02_CN-San-pham-noi-bat.php">02_CN-San-pham-noi-bat</a>
                      <div className="wrapul">
                        <ul>
                          <li>
                            <a href="05_CN-SFNB-1.php">05_CN-SFNB-1</a>
                          </li>
                          <li>
                            <a href="05_CN-SFNB-2.php">05_CN-SFNB-2</a>
                          </li>
                          <li>
                            <a href="05_CN-SFNB-3.php">05_CN-SFNB-3</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="03_CN-Tai-khoan.php">03_CN-Tai-khoan</a>
                    </li>
                    <li className="children">
                      <span className="showsubmenu icon-arrow-2 ib"></span>
                      <a href="04_CN-Ngan-hang-so.php">04_CN-Ngan-hang-so</a>
                      <div className="wrapul">
                        <ul>
                          <li>
                            <a href="04_CN-NHS-1.php">04_CN-NHS-1</a>
                          </li>
                          <li>
                            <a href="04_CN-NHS-2.php">04_CN-NHS-2</a>
                          </li>
                          <li>
                            <a href="04_CN-NHS-3.php">04_CN-NHS-3</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="06_abouts_1.php">06_abouts_1</a>
                    </li>
                    <li>
                      <a href="07_lanh_dao.php">07_lanh_dao</a>
                    </li>
                    <li className="children">
                      <span className="showsubmenu icon-arrow-2 ib"></span>
                      <a href="08_blog.php">08_blog</a>
                      <div className="wrapul">
                        <ul>
                          <li>
                            <a href="09_blog_detail.php">09_blog_detail</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="10_CN-THE.php">10_CN-THE</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="children">
                <span className="showsubmenu icon-arrow-2 ib"></span>
                <a href="#">
                  <span>Khách hàng doanh nghiệp</span>
                </a>
                <div className="wrapul">
                  <ul>
                    <li>
                      <a href="#">Doanh nghiệp vừa và nhỏ</a>
                    </li>
                    <li>
                      <a href="#">Doanh nghiệp lớn</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">
                  <span>Cá nhân cao cấp</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>MB kết nối</span>
                </a>
              </li>
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
      <div className="sec-cta">
        <div className="container">
          <div className="row   center">
            <div className="col-4 ">
              <a className="item" href="#">
                <span className="img">
                  <img src="assets/images/svg/t1.svg" alt="" />
                </span>
                <div className="divtext">
                  <h4 className="title">Gọi ngay</h4>
                  <div className="desc">1900 545426 - (84-24) 3767 4050 (Từ nước ngoài)</div>
                </div>
              </a>
            </div>
            <div className="col-4 ">
              <a className="item" href="#">
                <span className="img">
                  <img src="assets/images/svg/t2.svg" alt="" />
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
                  <img src="assets/images/svg/t3.svg" alt="" />
                </span>
                <div className="divtext">
                  <h4 className="title">Tìm ATm &amp; Điểm GD</h4>
                  <div className="desc">Tìm điểm giao dịch &amp; ATM gần bạn</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
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
                  <img src="assets/images/code.png" alt="" />
                </span>
                <div className="app">
                  <p className="stitle">Hãy tải app ngay hôm nay</p>
                  <a href="#">
                    <img src="assets/images/btt-google.svg" alt="" />
                  </a>{' '}
                  &nbsp;
                  <a href="#">
                    <img src="assets/images/btt-chplay.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <div id="footer-pc" className=" group-ef loaded">
        <div className="container">
          <div className="row grid-space-10">
            <div className="col-lg-4 col-sm-12 efch-1 ef-img-t">
              <div className="widget widget-info">
                <div>
                  <a href="./" className="logo">
                    {' '}
                    <img src="assets/images/logo-blue.svg" alt="" />
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
                  <a href="#">Điều khoản sử dụng</a>{' '}
                </li>
                <li>
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
  );
}

Layout.propTypes = propTypes;

export default Layout;
