import React, { useState, useEffect } from 'react';
import Widget from './Widget';
import WidgetMB from './WidgetMb';
import { Social } from '../common';
import ModalDrawer from './ModalDrawer';
import DownloadApp from './DownloadApp';
import Suggest from './Suggest';
import SearchResult from './SearchResult';
import { StickyContainer, Sticky } from 'react-sticky';
import { setLang, getFlag } from '../../utils/cookie';
import Link from 'next/link';
import map from 'lodash/map';
import debounce from 'lodash/debounce';
import { withTranslation } from '../../i18n';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const propTypes = {
  settingFooter: PropTypes.object,
  socialLink: PropTypes.object,
  children: PropTypes.node,
  personalLayout: PropTypes.number,
  menuHeader: PropTypes.array,
  menuNav: PropTypes.array,
  menuFooterTop: PropTypes.array,
  menuFooterBottom: PropTypes.array,
  menuFooterMain: PropTypes.array,
  menuSearch: PropTypes.array
};

function Layout({
  children,
  settingFooter,
  socialLink,
  menuHeader,
  menuNav,
  menuSearch,
  menuFooterTop,
  menuFooterBottom,
  menuFooterMain
}) {
  const [activeDrawer, setActiveDrawwe] = useState(false);
  const [query, setQuery] = useState(null);
  const [flag, setFlag] = useState('vn');
  const { i18n, t } = useTranslation();

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

  const nestChild = items => {
    return map(
      items.sort((a, b) => a.position - b.position),
      item => {
        if (item.type === '4') {
          return (
            <li key={item.id} className={item.children.length > 0 ? 'children ' : ''}>
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
          <li key={item.id} className={item.children.length > 0 ? 'children ' : ''}>
            <Link href="/page/[...name]" as={`/page/${item.slugPages}`}>
              <a>
                <span>{item.name}</span>
              </a>
            </Link>
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
              href={item.url}
              className={item.children.length > 0 ? 'title' : ''}
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
          <Link href="/page/[...name]" as={`/page/${item.slugPages}`}>
            <a className={item.children.length > 0 ? 'title' : ''}>{item.name}</a>
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

  const onClose = () => {
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

  const onChangeSuggest = url => {
    setQuery(url);
    const body = document.getElementsByTagName('body')[0];
    const result = document.getElementById('search-result');
    body.classList.add('fixed-screen');
    result.style = `display: block`;
    const element = document.getElementById('search');
    const box = document.getElementById('search-sg');
    element.style = 'width: 70px';
    box.style = 'display: none';
    element.placeholder = t('search');
  };

  const onChangeSearch = debounce(value => {
    setQuery(value);
  }, 3000);

  return (
    <>
      <StickyContainer>
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
                      // onBlur={onBlur}
                      onChange={event => onChangeSearch(event.target.value)}
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
                        <Link href="/page/[...name]" as={`/page/${values.slugPages}`}>
                          <a>{values.name}</a>
                        </Link>
                      </li>
                    );
                  }
                )}
                <li>
                  <div className="dropdown language">
                    <div className="title">
                      <span>
                        <img
                          className="lazyload"
                          data-src={`/static/flags/${flag}.png`}
                          alt="images"
                        />
                      </span>
                      <i className="icon-arrow-2 ib"></i>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <ul className="menu">
                          <li className={flag === 'gb' ? 'lang-en active' : 'lang-en'}>
                            <Link href="#">
                              <a onClick={() => changeLang('en', 'gb')} title="English (en)">
                                <img
                                  className="lazyload"
                                  data-src="/static/flags/gb.png"
                                  alt="images"
                                />
                                <span>English</span>
                              </a>
                            </Link>
                          </li>
                          <li className={flag === 'vn' ? 'lang-vi active' : 'lang-vi'}>
                            <Link href="#">
                              <a onClick={() => changeLang('vi', 'vn')} title="Tiếng Việt (vi)">
                                <img
                                  className="lazyload"
                                  data-src="/static/images/flags/vn.png"
                                  alt="images"
                                />
                                <span>Tiếng Việt</span>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <Suggest data={menuSearch} onChangeSuggest={onChangeSuggest} onClose={onClose} />
          </div>
          <Sticky topOffset={40}>
            {({ style }) => (
              <div className="setzindex" style={style}>
                <header id="header" role="banner">
                  <div className="container">
                    <Link href="/">
                      <a id="logo">
                        <img
                          id="img_log"
                          className="lazyload"
                          data-src="/static/images/svg/logo.svg"
                          alt="logo"
                        />
                      </a>
                    </Link>
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
                              <img
                                className="lazyload"
                                data-src={`/static/flags/${flag}.png`}
                                alt="images"
                              />
                            </span>
                            <i className="icon-arrow-2 ib"></i>
                          </div>
                          <div className="content">
                            <div className="inner">
                              <ul className="menu">
                                <li className={flag === 'gb' ? 'lang-en active' : 'lang-en'}>
                                  <Link href="#">
                                    <a title="English (en)" onClick={() => changeLang('en', 'gb')}>
                                      <img
                                        className="lazyload"
                                        data-src="/static/images/flags/gb.png"
                                        alt="images"
                                      />
                                      <span>English</span>
                                    </a>
                                  </Link>
                                </li>
                                <li className={flag === 'vn' ? 'lang-vi active' : 'lang-vi'}>
                                  <Link href="#">
                                    <a
                                      title="Tiếng Việt (vi)"
                                      onClick={() => changeLang('vi', 'vn')}
                                    >
                                      <img
                                        className="lazyload"
                                        data-src="/static/images/flags/vn.png"
                                        alt="images"
                                      />
                                      <span>Tiếng Việt</span>
                                    </a>
                                  </Link>
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
          <SearchResult query={query} />
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
                          <a href={values.url} className="item">
                            <span className="img">
                              <img
                                className="lazyload"
                                data-src={`${process.env.DOMAIN}${values.icon}`}
                                alt="images"
                              />
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
                        <Link href="/page/[...name]" as={`/page/${values.slugPages}`}>
                          <a className="item">
                            <span className="img">
                              <img
                                className="lazyload"
                                data-src={`${process.env.DOMAIN}${values.icon}`}
                                alt="images"
                              />
                            </span>
                            <div className="divtext">
                              <h4 className="title">{values.name}</h4>
                              <div className="desc">{values.description}</div>
                            </div>
                          </a>
                        </Link>
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
                            <Link href="/page/[...name]" as={`/page/${values.slugPages}`}>
                              <a>{values.name}</a>
                            </Link>
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
                <img
                  className="lazyload"
                  data-src="/static/images/btt-chplay-mb.svg"
                  alt="images"
                />
              </a>
              &nbsp;
              <a href="#">
                <img
                  className="lazyload"
                  data-src="/static/images/btt-google-mb.svg"
                  alt="images"
                />
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
                  <a href="#" className="item ">
                    <span className="img">
                      <img
                        className="lazyload"
                        data-src="/static/images/svg/home.svg"
                        alt="images"
                      />
                    </span>
                    <span className="name">{t('home')}</span>
                  </a>
                </div>
                <div className="col-3">
                  <a href="#" className="item">
                    <span className="img">
                      <img
                        className="lazyload"
                        data-src="/static/images/svg/folder.svg"
                        alt="images"
                      />
                    </span>
                    <span className="name">{t('product')}</span>
                  </a>
                </div>
                <div className="col-3">
                  <a href="#" className="item ">
                    <span className="img">
                      <img className="lazyload" data-src="/static/images/svg/MB.svg" alt="images" />
                    </span>
                    <span className="name">MB++</span>
                  </a>
                </div>
                <div className="col-3">
                  <a href="#" className="item ">
                    <span className="img">
                      <img
                        className="lazyload"
                        data-src="/static/images/svg/giadinh.svg"
                        alt="images"
                      />
                    </span>
                    <span className="name">{t('family')}</span>
                  </a>
                </div>
                <div className="col-3">
                  <a href="#" className="item ">
                    <span className="img">
                      <img
                        className="lazyload"
                        data-src="/static/images/svg/tienich.svg"
                        alt="images"
                      />
                    </span>
                    <span className="name">{t('utilities')}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StickyContainer>
      <ModalDrawer
        menu={menuNav}
        menuHeader={menuHeader}
        onSearch={event => {
          onSearch(event);
          setActiveDrawwe(false);
        }}
      />
    </>
  );
}

Layout.propTypes = propTypes;

export default withTranslation('common')(Layout);
