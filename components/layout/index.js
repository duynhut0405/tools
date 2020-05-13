import React, { useState, useEffect } from 'react';
import Widget from './Widget';
import WidgetMB from './WidgetMb';
import { Social } from '../common';
import ModalDrawer from './ModalDrawer';
import DownloadApp from './DownloadApp';
import Suggest from './Suggest';
import SearchResult from './SearchResult';
import { StickyContainer, Sticky } from 'react-sticky';
import Cookies from 'js-cookie';
import { LinkPage } from '../common/link';
import { getMemnu, getSetting, getSocialLink } from '../../utils/fetch';
import t from '../../translation';
import Link from 'next/link';
import map from 'lodash/map';
import debounce from 'lodash/debounce';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { getStoreFont } from '../../services/storefont';

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
  menuSearch: PropTypes.array,
  lang: PropTypes.string
};

const getData = async setData => {
  const res = await getStoreFont('linkApp');
  if (res && res !== undefined && res.status === 200) {
    setData(res.data.linkApp);
  }
};

function Layout({ children, lang, isPrioty }) {
  const [activeDrawer, setActiveDrawwe] = useState(false);
  const [menuHeader, setMenuHeader] = useState([]);
  const [menuNav, setMenuNav] = useState([]);
  const [menuSearch, setMenuSearch] = useState([]);
  const [menuFooterTop, setMenuFooterTop] = useState([]);
  const [menuFooterBottom, setMenuFooterBottom] = useState([]);
  const [menuFooterMain, setMenuFooterMain] = useState([]);
  const [settingFooter, setSettingFooter] = useState({});
  const [socialLink, setSocialLink] = useState({});
  const [query, setQuery] = useState(null);
  const [linkApp, setLinkApp] = useState({ android: '#', ios: '#' });
  const router = useRouter();
  const [menuMobile, setMenuMobile] = useState([]);

  const fetchMenu = async () => {
    const _menuHeader = await getMemnu(lang, 'top_top');
    const _menuNav = await getMemnu(lang, 'top2');
    const _menuFooterTop = await getMemnu(lang, 'Menu footer top');
    const _menuFooterMain = await getMemnu(lang, 'Menu footer main');
    const _menuFooterBottom = await getMemnu(lang, 'menu footer bottom');
    const _menuSearch = await getMemnu(lang, 'menu search');
    const _setting = await getSetting(lang);
    const _socialLink = await getSocialLink(lang);
    const _menuMobile = await getMemnu(lang, 'menu-mobile');

    setMenuHeader(_menuHeader);
    setMenuNav(_menuNav);
    setMenuSearch(_menuSearch);
    setMenuFooterTop(_menuFooterTop);
    setMenuFooterBottom(_menuFooterBottom);
    setMenuFooterMain(_menuFooterMain);
    setSettingFooter(_setting.general);
    setSocialLink(_socialLink.socialLink);
    setMenuMobile(_menuMobile);
  };

  useEffect(() => {
    fetchMenu();
  }, [lang]);

  useEffect(() => {
    getData(setLinkApp);
  }, []);

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
              {item.target === '2' ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <span>{item.name}</span>
                </a>
              ) : (
                <a href={item.url}>
                  <span>{item.name}</span>
                </a>
              )}
              <div className="wrapul">
                {item.children.length > 0 && <ul>{nestChild(item.children)} </ul>}
              </div>
            </li>
          );
        }
        return (
          <li key={item.id} className={item.children.length > 0 ? 'children ' : ''}>
            <LinkPage lang={lang} name={item.slugPages}>
              <a>
                <span>{item.name}</span>
              </a>
            </LinkPage>
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
            {item.target === '2' ? (
              <a
                href={item.url}
                className={item.children.length > 0 ? 'title' : ''}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            ) : (
              <a href={item.url} className={item.children.length > 0 ? 'title' : ''}>
                {item.name}
              </a>
            )}
          </li>
        );
      }
      return (
        <li key={item.id} className={item.children.length > 0 ? 'children ' : ''}>
          <LinkPage lang={lang} name={item.slugPages}>
            <a>
              <span>{item.name}</span>
            </a>
          </LinkPage>
          <div className="wrapul">
            {item.children.length > 0 && <ul>{nestChild(item.children)} </ul>}
          </div>
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

  const changeLang = _lang => {
    const regex = new RegExp(`^/(${['vi', 'en'].join('|')})`);
    const path = router.asPath.replace(regex, `/${_lang}`);
    if (_lang === 'vi' && lang !== 'vi') {
      if (path === '/vi') {
        router.push('/');
      } else {
        router.push(path.slice(3, path.length));
      }
      Cookies.set('lang', 'vi');
    } else if (_lang === 'en' && lang !== 'en') {
      Cookies.set('lang', 'en');
      router.push(`/en${path}`);
    }
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
                      placeholder={lang === 'vi' ? 'Tìm kiếm' : 'Search'}
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
                          {values.target === '2' ? (
                            <a href={values.url} target="_blank" rel="noopener noreferrer">
                              {values.name}
                            </a>
                          ) : (
                            <a href={values.url}>{values.name}</a>
                          )}
                        </li>
                      );
                    }
                    return (
                      <li key={key}>
                        <LinkPage lang={lang} name={values.slugPages}>
                          <a>{values.name}</a>
                        </LinkPage>
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
                          data-src={`/static/flags/${lang === 'vi' ? 'vn' : 'gb'}.png`}
                          alt="images"
                        />
                      </span>
                      <i className="icon-arrow-2 ib"></i>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <ul className="menu">
                          <li className={lang === 'en' ? 'lang-en active' : 'lang-en'}>
                            <a onClick={() => changeLang('en')} title="English (en)">
                              <img
                                className="lazyload"
                                data-src="/static/flags/gb.png"
                                alt="images"
                              />
                              <span>English</span>
                            </a>
                          </li>
                          <li className={lang === 'vi' ? 'lang-vi active' : 'lang-vi'}>
                            <a onClick={() => changeLang('vi')} title="Tiếng Việt (vi)">
                              <img
                                className="lazyload"
                                data-src="/static/images/flags/vn.png"
                                alt="images"
                              />
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
            <Suggest data={menuSearch} onChangeSuggest={onChangeSuggest} onClose={onClose} />
          </div>
          <Sticky topOffset={40}>
            {({ style }) => (
              <div className="setzindex" style={style}>
                <header id="header" role="banner">
                  <div className="container">
                    {lang === 'en' && (
                      <Link href={isPrioty ? '/en/page/mb-priority' : '/en'}>
                        <a id="logo">
                          <img
                            id="img_log"
                            className="lazyload"
                            src="/static/images/svg/logo.svg"
                            alt="logo"
                          />
                        </a>
                      </Link>
                    )}
                    {lang === 'vi' && (
                      <Link href={isPrioty ? '/page/mb-priority' : '/'}>
                        <a id="logo">
                          <img
                            id="img_log"
                            className="lazyload"
                            src="/static/images/svg/logo.svg"
                            alt="logo"
                          />
                        </a>
                      </Link>
                    )}
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
                                  {t('personal')}
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://emb.mbbank.com.vn/corp/EstablishSession"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {t('enterprise')}
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
                                data-src={`/static/flags/${lang === 'vi' ? 'vn' : 'gb'}.png`}
                                alt="images"
                              />
                            </span>
                            <i className="icon-arrow-2 ib"></i>
                          </div>
                          <div className="content">
                            <div className="inner">
                              <ul className="menu">
                                <li className={lang === 'en' ? 'lang-en active' : 'lang-en'}>
                                  <a title="English (en)" onClick={() => changeLang('en')}>
                                    <img
                                      className="lazyload"
                                      data-src="/static/images/flags/gb.png"
                                      alt="images"
                                    />
                                    <span>English</span>
                                  </a>
                                </li>
                                <li className={lang === 'vn' ? 'lang-vi active' : 'lang-vi'}>
                                  <li className={lang === 'vi' ? 'lang-vi active' : 'lang-vi'}>
                                    <a title="Tiếng Việt (vi)" onClick={() => changeLang('vi')}>
                                      <img
                                        className="lazyload"
                                        data-src="/static/images/flags/vn.png"
                                        alt="images"
                                      />
                                      <span>Tiếng Việt</span>
                                    </a>
                                  </li>
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
                          {values.target === '2' ? (
                            <a
                              href={values.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="item"
                            >
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
                          ) : (
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
                          )}
                        </div>
                      );
                    }
                    return (
                      <div className="col-4" key={values.id}>
                        <LinkPage lang={lang} name={values.slugPages}>
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
                        </LinkPage>
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
                  <form role="search" method="get" className="" action="">
                    <div>
                      <input
                        type="text"
                        placeholder={
                          lang === 'vi'
                            ? 'Nhập email để nhận thông tin!'
                            : 'Enter email to receive information'
                        }
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
                  <DownloadApp linkApp={linkApp} />
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
                              {values.target === '2' ? (
                                <a href={values.url} target="_blank" rel="noopener noreferrer">
                                  {values.name}
                                </a>
                              ) : (
                                <a href={values.url}>{values.name}</a>
                              )}
                            </li>
                          );
                        }
                        return (
                          <li key={key}>
                            <LinkPage lang={lang} name={values.slugPages}>
                              <a>{values.name}</a>
                            </LinkPage>
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
              <form role="search" method="get" className="" action="">
                <div className="aaa">
                  <input
                    type="text"
                    placeholder={
                      lang === 'vi'
                        ? 'Nhập email để nhận thông tin!'
                        : 'Enter email to receive information'
                    }
                    name="s"
                    className="input"
                  />
                </div>

                <button type="submit" className="btn btn-2">
                  {t('registration')}
                </button>
              </form>
            </div>
            <DownloadApp mobile linkApp={linkApp} />
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
                      <div className="row grid-space-10">{renderFooterMobile(menuMobile)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-footer-mb">
              <div className="row">
                {map(menuMobile, (item, index) => (
                  <div className="col-3" key={index}>
                    <a href={item.url} className="item ">
                      <span className="img">
                        <img
                          className="lazyload"
                          data-src={`${process.env.BASE_URL}/${item.icon}`}
                          alt="images"
                        />
                      </span>
                      <span className="name">{item.name}</span>
                    </a>
                  </div>
                ))}
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

export default Layout;
