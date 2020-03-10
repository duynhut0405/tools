import React, { useState, useEffect } from 'react';
import Logo from '../../public/images/logo.svg';
import PinIcon from '../../public/images/svg/pin.svg';
import BieuPhiIcon from '../../public/images/svg/bieuphi.svg';
import Folder from '../../public/images/svg/folder.svg';
import Giadinh from '../../public/images/svg/giadinh.svg';
import MB from '../../public/images/svg/MB.svg';
import Tienich from '../../public/images/svg/tienich.svg';
import Home from '../../public/images/svg/home.svg';
import ChplayMB from '../../public/images/svg/btt-chplay-mb.svg';
import GoogleMB from '../../public/images/svg/btt-google-mb.svg';
import Widget from './Widget';
import WidgetMB from './WidgetMb';
import { Social } from '../common';
import ModalDrawer from './ModalDrawer';
import { StickyContainer, Sticky } from 'react-sticky';
import { map } from 'lodash';
import { LayoutActions, MenuActions } from '../../store/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Head from 'next/head';
import '../../styles/custom.css';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { setLang, getFlag } from '../../utils/localStorage';
import { withTranslation } from '../../i18n';
import { compose } from 'redux';

const propTypes = {
  settingFooter: PropTypes.object,
  socialLink: PropTypes.object,
  children: PropTypes.node,
  getSettingFooter: PropTypes.func,
  getSocialLink: PropTypes.func,
  title: PropTypes.any,
  menuHeader: PropTypes.array,
  menuNav: PropTypes.array,
  menuFooterTop: PropTypes.array,
  menuFooterBottom: PropTypes.array,
  menuFooterMain: PropTypes.array,
  getMenuHeader: PropTypes.func,
  getMenuNav: PropTypes.func,
  getMenuFooterTop: PropTypes.func,
  getMenuFooterMain: PropTypes.func,
  getMenuFooterBottom: PropTypes.func
};

function Layout({
  title,
  children,
  settingFooter,
  socialLink,
  getSettingFooter,
  getSocialLink,
  menuHeader,
  menuNav,
  menuFooterTop,
  menuFooterBottom,
  menuFooterMain,
  getMenuHeader,
  getMenuNav,
  getMenuFooterTop,
  getMenuFooterMain,
  getMenuFooterBottom
}) {
  const [activeDrawer, setActiveDrawwe] = useState(false);
  const [flag, setFlag] = useState('vn');

  useEffect(() => {
    getMenuHeader();
    getMenuNav();
    getMenuFooterTop();
    getMenuFooterMain();
    getMenuFooterBottom();
    getSettingFooter();
    getSocialLink();
  }, []);

  useEffect(() => {
    setFlag(getFlag());
  }, [getFlag]);

  const { i18n, t } = useTranslation();

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
          <div className="widget" style={{ marginTop: 20 }} key={index}>
            <h4 className="widget-title">{item.name}</h4>
            <ul className="menu">{footerItem(item.children)}</ul>
          </div>
        );
      }
      return (
        <li key={index}>
          <a className={item.children.length > 0 ? 'title' : ''} href={`/page/${item.slugPages}`}>
            {item.name}
          </a>
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
          {key === items.length - 1 && <Social data={socialLink} />}
        </div>
      );
    });
  };

  const renderFooterMobile = items => {
    return map(items, (values, key) => {
      return (
        <div className="col-md-3 col-6  efch-2 ef-img-t" key={key}>
          <div className="widget">
            <h4 className="widget-title">{values.name}</h4>
            <ul className="menu">{footerItem(values.children)}</ul>
          </div>
        </div>
      );
    });
  };

  const changeLang = (lang, flags) => {
    i18n.changeLanguage(lang);
    setFlag(flags);
    setLang(lang, flags);
  };
  const { t } = useTranslation();
  return (
    <body className={classnames({ showMenu: activeDrawer })}>
      <div>
        <StickyContainer>
          <div>
            <Head>
              <title>{title || ''}</title>
              <link
                rel="icon"
                href="https://www.mbbank.com.vn/images/icons/favicon.ico"
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
                        {map(
                          menuHeader.sort((a, b) => a.position - b.position),
                          // eslint-disable-next-line consistent-return
                          (values, key) => {
                            if (key < 2) {
                              return (
                                <li key={key}>
                                  <a href={`/page/${values.slugPages}`}>
                                    <img
                                      src={key === 0 ? PinIcon : BieuPhiIcon}
                                      alt={key === 0 ? 'pin_icon' : 'bietphiIcon'}
                                      width="15"
                                      className="mr-2"
                                    />
                                    {values.name}
                                  </a>
                                </li>
                              );
                            }
                          }
                        )}
                      </ul>
                    </div>
                    <div className="col-md-7">
                      <ul className="menu line text-right">
                        {map(
                          menuHeader.sort((a, b) => a.position - b.position),
                          // eslint-disable-next-line consistent-return
                          (values, key) => {
                            if (key >= 2) {
                              return (
                                <li key={key}>
                                  <a href={`/page/${values.slugPages}`}>{values.name}</a>
                                </li>
                              );
                            }
                          }
                        )}
                        <li>
                          <div className="dropdown language">
                            <div className="title">
                              <span>
                                <img src={`/static/flags/${flag}.png`} alt="" />
                              </span>
                              <i className="icon-arrow-2 ib"></i>
                            </div>
                            <div className="content">
                              <div className="inner">
                                <ul className="menu">
                                  <li className={flag === 'gb' ? 'lang-en active' : 'lang-en'}>
                                    <a onClick={() => changeLang('en', 'gb')} title="English (en)">
                                      <img src="/static/flags/gb.png" alt="" /> <span>English</span>
                                    </a>
                                  </li>
                                  <li className={flag === 'vn' ? 'lang-vi active' : 'lang-vi'}>
                                    <a
                                      onClick={() => changeLang('vi', 'vn')}
                                      title="Tiếng Việt (vi)"
                                    >
                                      <img src="/static/images/flags/vn.png" alt="" />
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
                            {nestChild(menuNav)}
                          </ul>
                        </div>
                        <div className="group-header">
                          <div className="item ilogin">
                            <ul className="menu line">
                              <li>
                                <a href="#">{t('registration')}</a>
                              </li>
                              <li>
                                <a href="#">{t('login')}</a>
                              </li>
                            </ul>
                          </div>
                          <div className="item ilang">
                            <div className="dropdown language">
                              <div className="title">
                                <span>
                                  <img src={`/static/flags/${flag}.png`} alt="" />
                                </span>
                                <i className="icon-arrow-2 ib"></i>
                              </div>
                              <div className="content">
                                <div className="inner">
                                  <ul className="menu">
                                    <li className={flag === 'gb' ? 'lang-en active' : 'lang-en'}>
                                      <a
                                        title="English (en)"
                                        onClick={() => changeLang('en', 'gb')}
                                      >
                                        <img src="/static/images/flags/gb.png" alt="" />
                                        <span>English</span>
                                      </a>
                                    </li>
                                    <li className={flag === 'vn' ? 'lang-vi active' : 'lang-vi'}>
                                      <a
                                        title="Tiếng Việt (vi)"
                                        onClick={() => changeLang('vi', 'vn')}
                                      >
                                        <img src="/static/images/flags/vn.png" alt="" />
                                        <span>Tiếng Việt</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item imenu mobilemenu">
                            <button
                              className="stylebuttonopen"
                              onClick={() => {
                                setActiveDrawwe(!activeDrawer);
                              }}
                            >
                              <span className="menu-btn x"></span>
                            </button>
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
                      menuFooterTop.sort((a, b) => a.position - b.position),
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
                      <p className="stitle">{t('sign_up_promotional')}</p>
                      <form role="search" method="get" className="searchform " action="">
                        <div>
                          <input
                            type="text"
                            placeholder={t('enter_email')}
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
                          <p className="stitle">{t('donwload_app_today')}</p>
                          <a href="https://apple.co/2AqB7ZM">
                            <img src="/static/images/btt-chplay.svg" alt="" />
                          </a>
                          &nbsp;
                          <a href="https://bit.ly/2v5ZsyP">
                            <img src="/static/images/btt-google.svg" alt="" />
                          </a>{' '}
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
                    {renderFooter(menuFooterMain)}
                  </div>
                  <div className="line"></div>
                  <div className="row grid-space-10">
                    <div className="col-lg-6 col-md-7 efch-5 ef-img-t">
                      <ul className="menu line">
                        {map(
                          menuFooterBottom.sort((a, b) => a.position - b.position),
                          (values, key) => (
                            <li key={key}>
                              <a href={`/page/${values.slugPages}`}>{values.name}</a>
                            </li>
                          )
                        )}
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
                  <p className="stitle">{t('sign_up_promotional')}</p>
                  <form role="search" method="get" className="searchform " action="">
                    <div className="aaa">
                      <input
                        type="text"
                        placeholder={t('enter_email')}
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
                  <span className="stitle">{t('donwload_app_today')}</span>&nbsp;
                  <a href="#">
                    <img src={ChplayMB} alt="" />
                  </a>{' '}
                  &nbsp;
                  <a href="#">
                    <img src={GoogleMB} alt="" />
                  </a>
                </div>
              </section>
              <div id="footer-mb" className="group-ef loaded">
                <div className="container">
                  <div className="row grid-space-10">
                    <div className="col-lg-4 col-sm-12 efch-1 ef-img-t">
                      <WidgetMB data={settingFooter} socialLink={socialLink} />
                    </div>
                  </div>
                  <div className="accodion accodion-0">
                    <div className="accodion-tab ">
                      <input type="checkbox" id="chck_mf" />
                      <label className="accodion-title" htmlFor="chck_mf">
                        <span> Mở rộng </span>{' '}
                        <span className="triangle">
                          <i className="icon-plus"></i>
                        </span>
                      </label>
                      <div className="accodion-content">
                        <div className="inner">
                          <div className="row grid-space-10">
                            {renderFooterMobile(menuFooterMain)}
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
                          <img src={Home} alt="" />
                        </span>
                        <span className="name">Trang chủ</span>
                      </a>
                    </div>
                    <div className="col-3">
                      <a className="item" href="#">
                        <span className="img">
                          <img src={Folder} alt="" />
                        </span>
                        <span className="name">Sản phẩm</span>
                      </a>
                    </div>
                    <div className="col-3">
                      <a className="item " href="#">
                        <span className="img">
                          <img src={MB} alt="" />
                        </span>
                        <span className="name">MB++</span>
                      </a>
                    </div>
                    <div className="col-3">
                      <a className="item " href="#">
                        <span className="img">
                          <img src={Giadinh} alt="" />
                        </span>
                        <span className="name">Gia đình</span>
                      </a>
                    </div>
                    <div className="col-3">
                      <a className="item " href="#">
                        <span className="img">
                          <img src={Tienich} alt="" />
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
      <ModalDrawer menu={menuNav} />
    </body>
  );
}

Layout.propTypes = propTypes;

const mapStateToProps = state => {
  return {
    settingFooter: state.layoutReducer.settingFooter,
    socialLink: state.layoutReducer.socialLink,
    menuHeader: state.menuReducer.header,
    menuNav: state.menuReducer.nav,
    menuFooterTop: state.menuReducer.footerTop,
    menuFooterMain: state.menuReducer.footerMain,
    menuFooterBottom: state.menuReducer.footerBottom
  };
};

const mapDispatchToProps = {
  getSettingFooter: LayoutActions.getSettingFooterAction,
  getSocialLink: LayoutActions.getSocailinkAction,
  getMenuHeader: MenuActions.getMenuHeader,
  getMenuNav: MenuActions.getMenuNav,
  getMenuFooterTop: MenuActions.getMenuFooterTop,
  getMenuFooterMain: MenuActions.getMenuFooterMain,
  getMenuFooterBottom: MenuActions.getMenuFooterBottom
};

Layout.getInitialProps = async () => ({
  namespacesRequired: ['common', 'layout']
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withTranslation('common'), withConnect)(Layout);
