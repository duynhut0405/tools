import React, { useState, useEffect } from 'react';
import Widget from './Widget';
import WidgetMB from './WidgetMb';
import { Social } from '../common';
import ModalDrawer from './ModalDrawer';
import DownloadApp from './DownloadApp';
import Suggest from './Suggest';
import SearchResult from './SearchResult';
import { StickyContainer, Sticky } from 'react-sticky';
import map from 'lodash/map';
import { LayoutActions, MenuActions } from '../../store/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { setLang, getFlag } from '../../utils/cookie';
import { withTranslation } from '../../i18n';
import { compose } from 'redux';
import '../../styles/custom.css';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {
  settingFooter: PropTypes.object,
  socialLink: PropTypes.object,
  children: PropTypes.node,
  getSettingFooter: PropTypes.func,
  getSocialLink: PropTypes.func,
  title: PropTypes.any,
  personalLayout: PropTypes.number,
  menuHeader: PropTypes.array,
  menuNav: PropTypes.array,
  menuFooterTop: PropTypes.array,
  menuFooterBottom: PropTypes.array,
  menuFooterMain: PropTypes.array,
  getMenuHeader: PropTypes.func,
  getMenuNav: PropTypes.func,
  getMenuFooterTop: PropTypes.func,
  getMenuFooterMain: PropTypes.func,
  getMenuFooterBottom: PropTypes.func,
  canonical: PropTypes.string,
  noIndex: PropTypes.bool,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  meta_keyword: PropTypes.string,
  miniImage: PropTypes.string
};

function Layout({
  title,
  meta_title,
  meta_description,
  meta_keyword,
  personalLayout,
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
  getMenuFooterBottom,
  canonical,
  noIndex,
  miniImage
}) {
  const [activeDrawer, setActiveDrawwe] = useState(false);
  const [flag, setFlag] = useState('vn');
  const { i18n, t } = useTranslation();

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

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    if (activeDrawer) {
      body.classList.add('showMenu');
    } else {
      body.classList.remove('showMenu');
    }
  }, [activeDrawer]);

  useEffect(() => {
    if (personalLayout === 1 || personalLayout === true) {
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('mb-priority');
    }
  }, [personalLayout]);

  const nestChild = items => {
    return map(
      items.sort((a, b) => a.position - b.position),
      item => {
        if (item.type === '4') {
          return (
            <li key={item.id} className={item.children.length > 0 ? 'children ' : null}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <span>{item.name}</span>
              </a>
              <div className="wrapul">
                {item.children.length > 0 && <ul>{nestChild(item.children)} </ul>}
              </div>
            </li>
          );
        }
        return (
          <li key={item.id} className={item.children.length > 0 ? 'children ' : null}>
            <a href={`/page/${item.slugPages}`}>
              <span>{item.name}</span>
            </a>
            <div className="wrapul">
              {item.children.length > 0 && <ul>{nestChild(item.children)} </ul>}
            </div>
          </li>
        );
      }
    );
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
      if (item.type === '4') {
        return (
          <li key={index}>
            <a
              className={item.children.length > 0 ? 'title' : ''}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          </li>
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
          {/* {key === items.length - 1 && <Social data={socialLink} />} */}
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

  const onFocus = () => {
    const element = document.getElementById('search');
    const box = document.getElementById('search-sg');
    element.style = 'width: 200px';
    box.style = 'display: block';
    element.placeholder = `${t('enter_search')}.....`;
  };

  const onBlur = () => {
    const element = document.getElementById('search');
    const box = document.getElementById('search-sg');
    element.style = 'width: 70px';
    box.style = 'display: none';
    element.placeholder = t('search');
  };

  const onSearch = event => {
    event.preventDefault();
    const body = document.getElementsByTagName('body')[0];
    const result = document.getElementById('search-result');
    body.classList.add('fixed-screen');
    result.style = `display: block`;
  };

  return (
    <>
      <StickyContainer>
        <Head>
          <title>{title || 'MB NGÂN HÀNG QUÂN ĐỘI | MBBANK'}</title>
          <link
            rel="icon"
            href="https://www.mbbank.com.vn/images/icons/favicon.ico"
            type="image/x-icon"
          />
          {ReactHtmlParser(canonical)}
          {meta_title && <meta name="title" content={meta_title} />}
          {meta_description && <meta name="description" content={meta_description} />}
          {meta_keyword && <meta name="keywords" content={meta_keyword} />}
          {noIndex && <meta name="robots" content="noindex, nofollow" />}
          {!noIndex && <meta name="robots" content="index, follow" />}
          <meta
            property="og:image"
            itemProp="thumbnaiUrl"
            content={
              miniImage ? `${process.env.DOMAIN}${miniImage}` : `/static/images/logo-blue.svg`
            }
          />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="354" />
        </Head>
        <div id="wrapper">
          <div id="panel">
            <div className="container">
              <ul className="menu line text-right">
                <li>
                  <form id="form-search-hd" autoComplete="off" onSubmit={onSearch}>
                    <button className="search-sg" type="submit">
                      <i className="icon-search-2"></i>
                    </button>
                    <input
                      id="search"
                      type="text"
                      placeholder={t('search')}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      style={{ width: '70px' }}
                    />
                  </form>
                </li>
                {map(
                  menuHeader.sort((a, b) => a.position - b.position),
                  (values, key) => {
                    if (values.type === '4') {
                      return (
                        <li key={key}>
                          <a href={values.url} target="_blank" rel="noopener noreferrer">
                            {values.name}
                          </a>
                        </li>
                      );
                    }
                    return (
                      <li key={key}>
                        <a href={`/page/${values.slugPages}`}>{values.name}</a>
                      </li>
                    );
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
                            <a onClick={() => changeLang('vi', 'vn')} title="Tiếng Việt (vi)">
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
              <Suggest />
            </div>
          </div>
          <Sticky topOffset={40}>
            {({ style }) => (
              <div className="setzindex" style={style}>
                <header id="header" role="banner">
                  <div className="container">
                    <a href="/" id="logo">
                      <img
                        src={
                          personalLayout === 1 || personalLayout === true
                            ? '/static/images/svg/logo-priority.svg'
                            : '/static/images/svg/logo.svg'
                        }
                        alt="logo"
                      />
                    </a>
                    <div className="wrap-menu-header">
                      <ul className="menu-top-header" data-style="1">
                        {nestChild(menuNav)}
                        <li className="highlight children">
                          <span className="showsubmenu icon-arrow-2 ib"></span>
                          <a href="#">
                            <span>Ebanking</span>
                          </a>
                          <div className="wrapul">
                            <ul>
                              <li>
                                <a
                                  href="https://online.mbbank.com.vn/retail/EstablishSession"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Cá Nhân
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://emb.mbbank.com.vn/corp/EstablishSession"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Doanh nghiệp
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="group-header">
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
                                  <a title="English (en)" onClick={() => changeLang('en', 'gb')}>
                                    <img src="/static/images/flags/gb.png" alt="" />
                                    <span>English</span>
                                  </a>
                                </li>
                                <li className={flag === 'vn' ? 'lang-vi active' : 'lang-vi'}>
                                  <a title="Tiếng Việt (vi)" onClick={() => changeLang('vi', 'vn')}>
                                    <img src="/static/images/flags/vn.png" alt="" />
                                    <span>Tiếng Việt</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="item imenu"
                        onClick={() => {
                          setActiveDrawwe(!activeDrawer);
                        }}
                      >
                        <span className="menu-btn x"></span>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            )}
          </Sticky>
          <SearchResult />
          <div>{children}</div>
          {/* contact */}
          <section className="sec-cta">
            <div className="container">
              <div className="row center">
                {map(
                  menuFooterTop.sort((a, b) => a.position - b.position),
                  values => {
                    if (values.type === '4') {
                      return (
                        <div className="col-4" key={values.id}>
                          <a className="item" href={values.url}>
                            <span className="img">
                              <img src={values.icon} alt="" />
                            </span>
                            <div className="divtext">
                              <h4 className="title">{values.name}</h4>
                              <div className="desc">{values.description}</div>
                            </div>
                          </a>
                        </div>
                      );
                    }
                    return (
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
                    );
                  }
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
                      {t('registration')}
                    </button>
                  </form>
                </div>
                <div className="col-md-6   efch-3 ef-img-r">
                  <DownloadApp />
                </div>
              </div>
            </div>
          </section>
          <div id="footer-pc" className="group-ef loaded">
            <div className="container">
              <div className="row grid-space-10">
                <div className="col-lg-4 col-sm-12 efch-1 ef-img-t">
                  <div className="widget widget-info">
                    <Widget data={settingFooter} />
                    <Social data={socialLink} />
                  </div>
                </div>
                {renderFooter(menuFooterMain)}
              </div>
              <div className="line"></div>
              <div className="row grid-space-10">
                <div className="col-lg-6 col-md-7 efch-5 ef-img-t">
                  <ul className="menu line">
                    {map(
                      menuFooterBottom.sort((a, b) => a.position - b.position),
                      (values, key) => {
                        if (values.type === '4') {
                          return (
                            <li key={key}>
                              <a href={values.url} target="_blank" rel="noopener noreferrer">
                                {values.name}
                              </a>
                            </li>
                          );
                        }
                        return (
                          <li key={key}>
                            <a href={`/page/${values.slugPages}`}>{values.name}</a>
                          </li>
                        );
                      }
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
                  <input type="text" placeholder={t('enter_email')} name="s" className="input" />
                </div>

                <button type="submit" className="btn btn-2">
                  Đăng ký
                </button>
              </form>
            </div>
            <div className="wdownload">
              <span className="stitle">{t('donwload_app_today')}</span>&nbsp;
              <a href="#">
                <img src="/static/images/btt-chplay-mb.svg" alt="" />
              </a>{' '}
              &nbsp;
              <a href="#">
                <img src="/static/images/btt-google-mb.svg" alt="" />
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
                    <span> {t('extend')} </span>{' '}
                    <span className="triangle">
                      <i className="icon-plus"></i>
                    </span>
                  </label>
                  <div className="accodion-content">
                    <div className="inner">
                      <div className="row grid-space-10">{renderFooterMobile(menuFooterMain)}</div>
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
                      <img src="/static/images/svg/home.svg" alt="" />
                    </span>
                    <span className="name">{t('home')}</span>
                  </a>
                </div>
                <div className="col-3">
                  <a className="item" href="#">
                    <span className="img">
                      <img src="/static/images/svg/folder.svg" alt="" />
                    </span>
                    <span className="name">{t('product')}</span>
                  </a>
                </div>
                <div className="col-3">
                  <a className="item " href="#">
                    <span className="img">
                      <img src="/static/images/svg/MB.svg" alt="" />
                    </span>
                    <span className="name">MB++</span>
                  </a>
                </div>
                <div className="col-3">
                  <a className="item " href="#">
                    <span className="img">
                      <img src="/static/images/svg/giadinh.svg" alt="" />
                    </span>
                    <span className="name">{t('family')}</span>
                  </a>
                </div>
                <div className="col-3">
                  <a className="item " href="#">
                    <span className="img">
                      <img src="/static/images/svg/tienich.svg" alt="" />
                    </span>
                    <span className="name">{t('utilities')}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StickyContainer>
      <ModalDrawer menu={menuNav} />
    </>
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

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withTranslation('common'), withConnect)(Layout);
