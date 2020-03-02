import React, { useState, useEffect } from 'react';
import Logo from '../../public/images/logo.svg';
import PinIcon from '../../public/images/svg/pin.svg';
import BieuPhiIcon from '../../public/images/svg/bieuphi.svg';
import Widget from './Widget';
import Link from 'next/link';
import { StickyContainer, Sticky } from 'react-sticky';
import { map } from 'lodash';
import { getAllMenu, getMenuItemById } from '../../services/menu';
import { LayoutActions } from '../../store/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Head from 'next/head';

const propTypes = {
  settingFooter: PropTypes.object,
  children: PropTypes.node,
  getSettingFooter: PropTypes.func,
  title: PropTypes.any
};

function Layout({ children, settingFooter, getSettingFooter, title }) {
  const [header, setHeader] = useState({});
  const [footermain, setFooterMain] = useState([{}, {}, {}, {}, {}, {}]);
  const [footerTop, setFooterTop] = useState([]);
  const [headerTop, setHeaderTop] = useState([{}, {}, {}, {}, {}, {}]);
  const [footerBot, setFooterBot] = useState([{}, {}]);

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
        if (values.position === 'top2') {
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
            } else {
              if (values.position === 'Menu footer main') {
                const menufootermain = await getMenuItemById(values.id);
                if (menufootermain && menufootermain.status === 200) {
                  const menufootermaindata = nest(menufootermain.data);
                  setFooterMain(menufootermaindata);
                }
              } else {
                if (values.position === 'Menu footer top') {
                  const menufooterTop = await getMenuItemById(values.id);
                  if (menufooterTop && menufooterTop.status === 200) {
                    setFooterTop(menufooterTop.data);
                  }
                } else {
                  if (values.position === 'top_top') {
                    const menuHeaderTop = await getMenuItemById(values.id);
                    if (menuHeaderTop && menuHeaderTop.status === 200) {
                      setHeaderTop(menuHeaderTop.data);
                    }
                  } else {
                    if (values.position === 'menu footer bottom') {
                      const menuFooterBot = await getMenuItemById(values.id);
                      if (menuFooterBot && menuFooterBot.status === 200) {
                        setFooterBot(menuFooterBot.data);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      });
    }
  };

  useEffect(() => {
    getMenu();
    getSettingFooter();
  }, []);

  const nestChild = items => {
    return map(items, item => (
      <li
        key={item.id}
        className={item.children.length > 0 ? 'children parent-showsub' : 'no-children'}
      >
        <a href={`/page/${item.slugPages}`}>
          <span>{item.name}</span>
        </a>
        <div className="wrapul">
          {item.children.length > 0 && <ul>{nestChild(item.children)} </ul>}
        </div>
      </li>
    ));
  };

  const footerItem = data => {
    return map(data, (item, index) => {
      if (item.children.length > 0) {
        return (
          <div className="widget" style={{ marginTop: 20 }}>
            <h4 className="widget-title">{item.name}</h4>
            <ul className="menu">{footerItem(item.children)}</ul>
          </div>
        );
      }
      return (
        <li key={index}>
          <Link
            className={item.children.length > 0 ? 'title' : ''}
            href="/page/[...slug]"
            as={`/page/${item.slugPages}`}
          >
            {item.name}
          </Link>
        </li>
      );
    });
  };

  const renderFooter = items => {
    return map(items, (values, key) => {
      return (
        <div className="col-md-3 col-6 col-lg-2  efch-2 ef-img-t" key={key}>
          <div className="widget">
            <h4 className="widget-title">{values.name}</h4>
            <ul className="menu">{footerItem(values.children)}</ul>
          </div>
          {key === items.length - 1 && (
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
          )}
        </div>
      );
    });
  };

  return (
    <div>
      <StickyContainer>
        <div>
          <Head>
            <title>{title}</title>
            <link
              rel="icon"
              href="https://www.mbbank.com.vn//images/icons/favicon.ico"
              type="image/x-icon"
            />
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
              integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
              crossOrigin="anonymous"
            />
            <script
              src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
              integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
              crossOrigin="anonymous"
            ></script>
            <script
              src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
              integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
              crossOrigin="anonymous"
            ></script>
            <script
              src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
              integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
              crossOrigin="anonymous"
            ></script>
          </Head>

          <div id="wrapper">
            <div id="panel">
              <div className="container">
                <div className="row">
                  <div className="col-md-5">
                    <ul className="menu line">
                      <li>
                        <a href={`/page/${headerTop[1].slugPages}`}>
                          <img src={PinIcon} alt="pin_icon" width="15" className="mr-2" />
                          {headerTop[1].name}
                        </a>
                      </li>
                      <li>
                        <a href={`/page/${headerTop[0].slugPages}`}>
                          <img src={BieuPhiIcon} alt="Bieu Phi" width="15" className="mr-2" />
                          {headerTop[0].name}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-7">
                    <ul className="menu line text-right">
                      <li>
                        <a href={`/page/${headerTop[2].slugPages}`}>{headerTop[2].name}</a>
                      </li>
                      <li>
                        <a href={`/page/${headerTop[3].slugPages}`}>{headerTop[3].name}</a>
                      </li>
                      <li>
                        <a href={`/page/${headerTop[4].slugPages}`}>{headerTop[4].name}</a>
                      </li>
                      <li>
                        <a href={`/page/${headerTop[5].slugPages}`}>{headerTop[5].name}</a>
                      </li>
                      <li>
                        <div className="dropdown language">
                          <div className="title">
                            <span>
                              <img src="/static/flags/vn.png" alt="" />
                            </span>
                            <i className="icon-arrow-2 ib"></i>
                          </div>
                          <div className="content">
                            <div className="inner">
                              <ul className="menu">
                                <li className="lang-en">
                                  <a href="#" hrefLang="en" title="English (en)">
                                    <img src="/static/flags/gb.png" alt="" /> <span>English</span>
                                  </a>
                                </li>
                                <li className="lang-vi active">
                                  <a href="#" hrefLang="vi" title="Tiếng Việt (vi)">
                                    <img src="/static/images/flags/vn.png" alt="" />{' '}
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
            <Sticky topOffset={40}>
              {({ style }) => (
                <div className="setzindex" style={style}>
                  <header id="header" role="banner">
                    <div className="container">
                      <a href="/" id="logo">
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
                                <img src="/static/images/flags/vn.png" alt="" />
                              </span>
                              <i className="icon-arrow-2 ib"></i>
                            </div>
                            <div className="content">
                              <div className="inner">
                                <ul className="menu">
                                  <li className="lang-en">
                                    <a href="#" hrefLang="en" title="English (en)">
                                      <img src="/static/images/flags/gb.png" alt="" />
                                      <span>English</span>
                                    </a>
                                  </li>
                                  <li className="lang-vi active">
                                    <a href="#" hrefLang="vi" title="Tiếng Việt (vi)">
                                      <img src="/static/images/flags/vn.png" alt="" />
                                      <span>Tiếng Việt</span>
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
                </div>
              )}
            </Sticky>
            <div>{children}</div>
            {/* contact */}
            <section className="sec-cta">
              <div className="container">
                <div className="row center">
                  {map(
                    footerTop.sort((a, b) => a.position - b.position),
                    values => (
                      <div className="col-4" key={values.id}>
                        <a className="item" href={`/page/${values.slugPages}`}>
                          <span className="img">
                            <img src={values.icon} alt="" />
                          </span>
                          <div className="divtext">
                            <h4 className="title">{values.name}</h4>
                            <div className="desc">{values.description}</div>
                          </div>
                        </a>
                      </div>
                    )
                  )}
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
                        <img src="/static/images/code.png" alt="" />
                      </span>
                      <div className="app">
                        <p className="stitle">Hãy tải app ngay hôm nay</p>
                        <a href="https://bit.ly/2v5ZsyP">
                          <img src="/static/images/btt-google.svg" alt="" />
                        </a>{' '}
                        &nbsp;
                        <a href="https://apple.co/2AqB7ZM">
                          <img src="/static/images/btt-chplay.svg" alt="" />
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
                    <Widget data={settingFooter} />
                  </div>
                  {renderFooter(footermain)}
                </div>
                <div className="line"></div>
                <div className="row grid-space-10">
                  <div className="col-lg-6 col-md-7 efch-5 ef-img-t">
                    <ul className="menu line">
                      <li>
                        <a href={`/page/${footerBot[1].slugPages}`}>{footerBot[1].name}</a>
                      </li>
                      <li>
                        <a href={`/page/${footerBot[0].slugPages}`}>{footerBot[0].name}</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-5 efch-6 ef-img-t">
                    <div className="copyright">2019 © Copyright MBbank. All rights reserved.</div>
                  </div>
                </div>
              </div>
            </div>
            <section className="sec-download-mb">
              <div className="wform">
                <p className="stitle">Đăng ký nhận thông tin khuyến mãi</p>
                <form role="search" method="get" className="searchform " action="">
                  <div className="aaa">
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
              <div className="wdownload">
                <span className="stitle">Tải app ngay</span>&nbsp;
                <a href="#">
                  <img src="static/images/btt-google-mb.svg" alt="" />
                </a>{' '}
                &nbsp;
                <a href="#">
                  <img src="static/images/btt-chplay-mb.svg" alt="" />
                </a>
              </div>
            </section>
            <div id="footer-mb" className=" group-ef loaded">
              <div className="container">
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
                  <p>Swift code: MSCBVNVX</p>
                  <p className="w6">Hãy gọi cho chúng tôi để được tư vấn 24/7</p>
                  <div className="call">
                    <a className="phone" href="#">
                      <i className="icon-phone-1"></i> 1900 545426
                    </a>

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
                <div className="accodion accodion-0">
                  <div className="accodion-tab ">
                    <input type="checkbox" id="chck_mf" />
                    <label className="accodion-title" htmlFor="chck_mf">
                      <span> Mở rộng </span>{' '}
                      <span className="triangle">
                        <i className="icon-plus"></i>
                      </span>{' '}
                    </label>
                    <div className="accodion-content">
                      <div className="inner">
                        <div className="row grid-space-10">
                          <div className="col-md-3 col-6  efch-2 ef-img-t">
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
                          <div className="col-md-3 col-6  efch-2 ef-img-t">
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
                          <div className="col-md-3 col-6  efch-3 ef-img-t">
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
                          <div className="col-md-3 col-6  efch-4 ef-img-t">
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="menu-footer-mb">
                <div className="row">
                  <div className="col-3">
                    <a className="item " href="#">
                      <span className="img">
                        {' '}
                        <img src="static/images/svg/home.svg" alt="" />{' '}
                      </span>
                      <span className="name">Trang chủ</span>
                    </a>
                  </div>
                  <div className="col-3">
                    <a className="item" href="#">
                      <span className="img">
                        <img src="static/images/svg/folder.svg" alt="" />
                      </span>
                      <span className="name">Sản phẩm</span>
                    </a>
                  </div>
                  <div className="col-3">
                    <a className="item " href="#">
                      <span className="img">
                        <img src="static/images/svg/MB.svg" alt="" />
                      </span>
                      <span className="name">MB++</span>
                    </a>
                  </div>
                  <div className="col-3">
                    <a className="item " href="#">
                      <span className="img">
                        <img src="static/images/svg/giadinh.svg" alt="" />
                      </span>
                      <span className="name">Gia đình</span>
                    </a>
                  </div>
                  <div className="col-3">
                    <a className="item " href="#">
                      <span className="img">
                        <img src="static/images/svg/tienich.svg" alt="" />
                      </span>
                      <span className="name">Tiện ích</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StickyContainer>
    </div>
  );
}

Layout.propTypes = propTypes;

const mapStateToProps = state => {
  return {
    settingFooter: state.layoutReducer.settingFooter
  };
};

const mapDispatchToProps = {
  getSettingFooter: LayoutActions.getSettingFooterAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
