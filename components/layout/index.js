import React, { useState, useEffect } from 'react';
import Widget from './Widget';
import WidgetMB from './WidgetMb';
import { Social } from '../common';
import ModalDrawer from './ModalDrawer';
import DownloadApp from './DownloadApp';
import Suggest from './Suggest';
import { StickyContainer, Sticky } from 'react-sticky';
import Cookies from 'js-cookie';
import { LinkPage } from '../common/link';
import t from '../../translation';
import Link from 'next/link';
import map from 'lodash/map';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { getCommon, getMemnu } from '../../utils/fetch';
import { getLang, getPriority, getBtn } from '../../utils/cookie';
// import FormPopup from '../block/Popup/FormPopup';

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
  lang: PropTypes.string,
  isPrioty: PropTypes.any,
  idPage: PropTypes.number,
  menuMobile: PropTypes.array,
  linkApp: PropTypes.object
};

function Layout({ children, isPrioty, idPage }) {
  const [activeDrawer, setActiveDrawwe] = useState(false);
  const [query, setQuery] = useState(null);
  const router = useRouter();
  // const [activeForm, setActiveForm] = useState(false);
  const [register, setRegister] = useState('');
  const [menuHeader, setMenuHeader] = useState([]);
  const [menuNav, setMenuNav] = useState([
    // { type: '4', url: '/tool', name: 'Tài khoản', children: [] },
    { type: '4', url: '/recruit', name: 'Tuyển dụng', children: [] },
    { type: '4', url: '/form', name: 'Form', children: [] },
    // { type: '4', url: '/tool', name: 'Tiết kiệm', children: [] },
    // { type: '4', url: '/tool', name: 'Bảo hiểm', children: [] },
    // { type: '4', url: '/tool', name: 'Ngân hàng số', children: [] },
    {
      type: '4',
      url: '/tool',
      name: 'Tool',
      children: [
        { type: '4', url: '/tool/1', name: 'Cho vay mua nhà đất', children: [] },
        { type: '4', url: '/tool/2', name: 'Vay vốn kinh doanh', children: [] },
        { type: '4', url: '/tool/3', name: 'Cho vay tiêu dùng có TSBĐ', children: [] },
        { type: '4', url: '/tool/4', name: 'Cho vay tiêu dùng không có TSĐB', children: [] },
        { type: '4', url: '/tool/5', name: 'Cho vay mua ô tô', children: [] },
        { type: '4', url: '/tool/6', name: 'Cho vay cầm cố giấy tờ có giá', children: [] },
        { type: '4', url: '/tool/7', name: 'Cho vay du học', children: [] },
        {
          type: '4',
          url: '/tool/8',
          name: 'Cho vay người lao động đi làm việc ở nước ngoài',
          children: []
        },
        { type: '4', url: '/tool/9', name: 'Tool 9', children: [] },
        { type: '4', url: '/tool/10', name: 'Cho vay nhà đất', children: [] }
      ]
    }
  ]);
  const [menuSearch, setMenuSearch] = useState([]);
  const [menuFooterTop, setMenuFooterTop] = useState([]);
  const [menuFooterBottom, setMenuFooterBottom] = useState([]);
  const [menuFooterMain, setMenuFooterMain] = useState([]);
  const [menuMobile, setMenuMobile] = useState([]);
  const [settingFooter, setSettingFooter] = useState({});
  const [socialLink, setSocialLink] = useState({});
  const [linkApp, setLinkApp] = useState({ android: '#', ios: '#' });
  const [lang, setLang] = useState('vi');
  const [priority, setPriority] = useState('/');
  const [btnForm, setbtnForm] = useState(false);
  const [btnlandingPage, setBtnLandingPage] = useState(false);

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    if (activeDrawer) {
      body.classList.add('showMenu');
    } else {
      body.classList.remove('showMenu');
    }
  }, [activeDrawer]);

  useEffect(() => {
    setLang(getLang());
    setPriority(getPriority());
    setbtnForm(getBtn());
  });

  useEffect(() => {}, [idPage, lang]);

  useEffect(() => {
    document.body.onscroll = () => {
      const entry = document.getElementsByClassName('entry-breadcrumb')[0];
      const sec_menu = document.getElementsByClassName('sec-menu')[0];
      const sec_form_tuvan = document.getElementsByClassName('sec-form-tuvan')[0];
      const scroll_title = document.getElementsByClassName('scroll-title')[0];
      if (entry && sec_menu && sec_form_tuvan) {
        const stv = entry.clientHeight + sec_menu.clientHeight + sec_form_tuvan.clientHeight;
        if (window.pageYOffset > stv) {
          document.body.classList.add('showBtnRegister');
        } else {
          document.body.classList.remove('showBtnRegister');
        }
      }
      if (entry && sec_menu && scroll_title) {
        const stv = entry.clientHeight + scroll_title.clientHeight + sec_menu.clientHeight;
        if (window.pageYOffset > stv) {
          document.body.classList.add('showBtnRegister');
          setBtnLandingPage(true);
        } else {
          document.body.classList.remove('showBtnRegister');
          setBtnLandingPage(false);
        }
      }
    };
  });

  const nestChild = items => {
    return map(
      items.sort((a, b) => a.position - b.position),
      item => {
        if (item.type === '4') {
          return (
            <li key={item.id} className={item.children.length > 0 ? 'children ' : ''}>
              {item.target === '2' ? (
                <Link href={item.url}>
                  <a target="_blank" rel="noopener noreferrer">
                    <span style={{ color: 'grey', paddingTop: 10 }}>{item.name}</span>
                  </a>
                </Link>
              ) : (
                <Link href={item.url}>
                  <a>
                    <span style={{ color: 'grey' }}>{item.name}</span>
                  </a>
                </Link>
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
          <li className="li-footer" key={index}>
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
        <li key={item.id} className={item.children.length > 0 ? 'children li-footer' : 'li-footer'}>
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
            <h5 className="widget-title" style={{ color: '#fff' }}>
              {values.name}
            </h5>
            <ul className="menu">{footerItem(values.children)}</ul>
          </div>
          {/* {key === items.length - 1 && <Social data={socialLink} />} */}
        </div>
      );
    });
  };

  // const renderFooterMobile = items => {
  //   return map(items, (values, key) => {
  //     return (
  //       <div className="col-md-3 col-6  efch-2 ef-img-t" key={key}>
  //         <div className="widget">
  //           <h4 className="widget-title">{values.name}</h4>
  //           <ul className="menu">{footerItem(values.children)}</ul>
  //         </div>
  //       </div>
  //     );
  //   });
  // };

  const changeLang = _lang => {
    const regex = new RegExp(`^/(${['vi', 'en'].join('|')})`);
    const path = router.asPath.replace(regex, `/${_lang}`);
    if (router.pathname === '/search' && _lang === 'vi' && lang !== 'vi') {
      router.push(`${router.pathname}`);
    } else if (router.pathname === '/search' && _lang === 'en' && lang !== 'en') {
      router.push(`/en${router.pathname}`);
    }
    if (router.pathname !== '/search' && _lang === 'vi' && lang !== 'vi') {
      if (path === '/vi') {
        router.push('/');
      } else {
        router.push(path.slice(3, path.length));
      }
      Cookies.set('lang', 'vi');
    } else if (router.pathname !== '/search' && _lang === 'en' && lang !== 'en') {
      if (path === '/') {
        router.push('/en');
      } else {
        Cookies.set('lang', 'en');
        router.push(`/en${path}`);
      }
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
    router.push({
      pathname: lang === 'vi' ? '/search' : '/en/search',
      query: { q: query }
    });
  };

  const onChangeSuggest = url => {
    setQuery(url);
    const element = document.getElementById('search');
    const box = document.getElementById('search-sg');
    element.style = 'width: 70px';
    box.style = 'display: none';
    element.placeholder = t('search');
    router.push({
      pathname: lang === 'vi' ? '/search' : '/en/search',
      query: { q: url }
    });
  };

  const onRegister = event => {
    event.preventDefault();
    router.push({
      pathname: lang === 'vi' ? '/register' : '/en/register',
      query: { mail: register }
    });
    // setActiveForm(true);
  };

  const onScroll = id => {
    const elmnt = document.getElementById(id);
    if (elmnt !== null) {
      elmnt.scrollIntoView();
    }
  };

  const liStyle = {
    fontWeight: '600',
    paddingLeft: '5px',
    fontSize: '13px'
  };

  const icon = {
    margin: 0,
    padding: 0,
    fontSize: '13px'
  };

  const aStyle = {
    fontWeight: '600',
    fontSize: '13px'
  };

  const logoStyle = {
    width: '109px',
    height: '45px'
  };

  const homeCustom = {
    content: '',
    width: '1px',
    height: '24px',
    backgroundColor: '#f0a71d',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    WebkitTransform: 'translateY(-50%)',
    right: '0'
  };

  // const onChangeSearch = debounce(value => {
  //   setQuery(value);
  // }, 3000);
  if (isPrioty !== null) {
    return (
      <div style={{ zIndex: 10000000000 }}>
        <div>
          <div id="wrapper">
            <div id="panel" style={{ display: 'none' }}>
              <div className="container">
                <ul className="menu line text-right">
                  <li style={liStyle}>
                    <form id="form-search-hd" autoComplete="off" onSubmit={onSearch}>
                      <button className="search-sg" type="submit">
                        <i className="icon-search" style={icon}></i>
                      </button>
                      <input
                        id="search"
                        type="text"
                        placeholder={lang === 'vi' ? 'Tìm kiếm' : 'Search'}
                        onFocus={onFocus}
                        // onBlur={onBlur}
                        onChange={event => setQuery(event.target.value)}
                        style={{ width: '70px', fontWeight: '600', fontSize: '13px' }}
                      />
                    </form>
                  </li>
                  {map(
                    menuHeader.sort((a, b) => a.position - b.position),
                    (values, key) => {
                      if (values.type === '4') {
                        return (
                          <li key={key} style={liStyle}>
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
                        <li key={key} style={liStyle}>
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
                            src={`/static/images/flags/${lang === 'vi' ? 'vn' : 'gb'}.png`}
                            alt="images"
                          />
                        </span>
                        <i className="icon-arrow-2 ib" style={{ marginLeft: '10px' }}></i>
                      </div>
                      <div className="content">
                        <div className="inner">
                          <ul className="menu">
                            <li
                              className={lang === 'vi' ? 'lang-en' : 'lang-en active'}
                              onClick={() => changeLang('en')}
                            >
                              <a style={aStyle} title="English (en)">
                                <img src="/static/images/flags/gb.png" alt="" />{' '}
                                <span>English</span>
                              </a>
                            </li>
                            <li
                              className={lang === 'vi' ? 'lang-vi active' : 'lang-vi'}
                              style={{ borderTop: '1px solid rgba(0, 0, 0, 0.2)' }}
                              onClick={() => changeLang('vi')}
                            >
                              <a style={aStyle} title="Tiếng Việt (vi)">
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
              <Suggest data={menuSearch} onChangeSuggest={onChangeSuggest} onClose={onClose} />
            </div>
            <div>
              <div className="setzindex">
                <header
                  id="header"
                  role="banner"
                  style={{ paddingTop: 5, paddingBottom: 12, backgroundColor: '#191919' }}
                >
                  <div
                    className="container"
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 10,
                      position: 'relative',
                      padding: 0,
                      height: 'auto'
                    }}
                  >
                    <div
                      className="radius-header"
                      style={{
                        backgroundColor: '#f0a71d',
                        display: 'flex',
                        padding: '15px 25px'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex'
                        }}
                      >
                        <Link href="/news">
                          <a style={{ marginBottom: 0, color: 'white' }}>Cá nhân</a>
                        </Link>
                        <div
                          style={{
                            borderLeft: '1px solid #c9c9c9',
                            height: 20,
                            marginLeft: 10,
                            marginRight: 10
                          }}
                        ></div>
                        <Link href="/business">
                          <a style={{ marginBottom: 0, color: 'white' }}>Doanh nghiệp</a>
                        </Link>
                        <div
                          style={{
                            borderLeft: '1px solid #c9c9c9',
                            height: 20,
                            marginLeft: 10,
                            marginRight: 10
                          }}
                        ></div>
                        <Link href="/about-us">
                          <a style={{ marginBottom: 0, color: 'white' }}>Ngân hàng ưu tiên</a>
                        </Link>
                      </div>
                    </div>
                    {/* <div style={{ display: 'flex', alignItems: 'center', padding: '0 25px' }}>
                        <img width={80} height={30} id="img_log" src="/logo.png" alt="logo" />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <p
                            style={{ marginBottom: 4, color: 'grey', fontSize: 30, marginLeft: 40 }}
                          >
                            +
                          </p>
                          <ul className="menu-top-header" data-style="1">
                            {nestChild(menuNav)}
                          </ul>
                        </div>
                      </div> */}
                    <div className="wrap-menu-header" style={{ marginLeft: 10 }}>
                      <ul className="menu-top-header flex items-center" data-style="1">
                        <li style={{ display: 'flex', alignItems: 'center' }}>
                          <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                              width={120}
                              height={50}
                              id="img_log"
                              src="/logo.png"
                              alt="logo"
                              className="pb-1"
                            />
                          </a>
                          <p
                            style={{
                              marginBottom: 4,
                              color: 'grey',
                              fontSize: 30,
                              marginLeft: 30
                            }}
                          >
                            +
                          </p>
                        </li>
                        {nestChild(menuNav)}
                        <li
                          style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                          }}
                        >
                          <Link href="/search">
                            <a>
                              <i
                                className="icon-search"
                                style={{
                                  color: 'rgb(0, 35, 149)',
                                  fontSize: 25,
                                  marginRight: 20
                                }}
                              ></i>
                            </a>
                          </Link>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'flex-end',
                              height: '100%',
                              marginRight: 20,
                              paddingLeft: 20,
                              borderLeft: '1px solid #e4e4e4'
                            }}
                          >
                            <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
                              <img
                                id="img_log"
                                src="/logo.png"
                                alt="logo"
                                style={{ objectFit: 'contain', height: 65 }}
                              />
                            </a>
                          </div>
                        </li>
                        {/* <li class="highlight">
                            <a href="#">
                            <img src="/static/images/menu.svg" alt=""/>
                            <span>Login eBanking</span>
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
                          </li> */}
                      </ul>
                    </div>
                    <div className="group-header">
                      <div
                        className="item imenu"
                        onClick={() => {
                          setActiveDrawwe(!activeDrawer);
                        }}
                      >
                        <span className="menu-btn x">
                          <span></span>
                        </span>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </div>
            <div>{children}</div>
            {/* contact */}

            <section
              className="sec-cta"
              style={{
                display: router.pathname == '/' || router.pathname == '/en' ? 'none' : 'block'
              }}
            >
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
                                    data-src={'/images/acb.png'}
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
                                    data-src={'/images/acb.png'}
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
            <div
              id="footer-pc"
              className="group-ef loaded"
              style={{ color: '#fff', backgroundColor: '#191919' }}
            >
              <div className="container" style={{ paddingBottom: '20px' }}>
                <p>
                  {lang === 'vi' && (
                    <Link href="/">
                      <a className="logo">
                        <img className="lazyload" src="/logo.png" alt="images" style={logoStyle} />
                      </a>
                    </Link>
                  )}
                  {lang === 'en' && (
                    <Link href="/en">
                      <a className="logo">
                        <img
                          className="lazyload"
                          data-src="/logo.png"
                          alt="images"
                          style={logoStyle}
                        />
                      </a>
                    </Link>
                  )}
                </p>
                <div className="row">
                  <div className="col-lg-4 col-sm-12 efch-1 ef-img-t">
                    <div className="widget widget-info">
                      <Widget data={settingFooter} />
                      {/* <Social data={socialLink} /> */}
                    </div>
                  </div>
                  {renderFooter(menuFooterMain)}
                </div>
                <div className="row bottom">
                  <div className="col-lg-4 col-sm-12 efch-1 ef-img-t">
                    <div className="widget widget-wapp" style={{ marginTop: '0' }}>
                      <div
                        className="wapp"
                        style={{ color: '#fff', display: 'flex', marginBottom: '5px' }}
                      ></div>
                      {/* <div className="wapp" style={{ color: '#fff',display: 'flex'}}>
                        <span className="code"><img src="/static/images/svg/qr.svg" style={{width: '50px'}} alt=""/></span>
                        <a href={linkApp ? linkApp.android : '#'} target="_blank" rel="noopener noreferrer" style={{paddingRight: '20px', paddingLeft: '20px'}}>
                          <img
                            className="lazyload"
                            data-src="/static/images/app-2.png"
                            importance="low"
                            alt="images"
                          />
                        </a>
                        <h5 className="widget-title" style={{ color: '#fff', minWidth: '70px', maxWidth: '90px'}}>{t('download_app_today_2')}</h5>
                       </div> */}
                    </div>
                  </div>
                  {/* <div className="col-lg-3 col-md-6  efch-6 ef-img-t" style={{ paddingBottom:'10px' }}>
                    <div className="widget widget-subscribe">
                      <h5 className="widget-title" style={{color: '#fff'}}>{t('sign_up_promotional')}</h5>
                      <form onSubmit={onRegister} class="subscribeForm">
                        <div>
                          <input
                              type="text"
                              placeholder={
                                lang === 'vi'
                                  ? 'Nhập email!'
                                  : 'Enter email'
                              }
                              onChange={event => setRegister(event.target.value)}
                              name="email"
                              className="input"
                            />
                        </div>
                        <button type="submit" class=""><i class="icon-arrow-1"></i></button>
                      </form> 
                    </div>
                  </div> */}

                  {/* <div className="col-lg-3 col-md-6  efch-6 ef-img-t" style={{ paddingBottom:'10px' }}>
                    <div className="widget widget-subscribe">
                      <h5 className="widget-title" style={{color: '#fff'}}>{t('find_ATM')}</h5>
                      <a class="location" href="/page/diem-giao-dich-atm" style={{backgroundColor: "#A0D2FF", color: "#33e8ff", padding: "10px"}}><img src="/static/images/location.svg" alt=""/>{t('near_ATM')}</a>
                    </div>
                  </div> */}
                </div>

                {/* <div className="line"></div>
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
                    <div className="copyright">2019 © Copyright Mango. All rights reserved.</div>
                  </div>
                </div> */}
              </div>
              <div className="line-custom">
                <div className="container">
                  <div className="row grid-space-10">
                    <div className="col-lg-6 col-md-7 efch-5 ef-img-t">
                      <ul className="menu line">
                        {map(
                          menuFooterBottom.sort((a, b) => a.position - b.position),
                          (values, key) => {
                            if (values.type === '4') {
                              return (
                                <li className="li-footer" key={key}>
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
                              <li className="li-footer" key={key}>
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
                      <div className="copyright">2023 © Copyright Mango . All rights reserved.</div>
                    </div>
                  </div>
                </div>
              </div>
              <a id="back-top" class="back-top-1" href="#">
                <i class="icon-arrow-2 it"></i>
              </a>
            </div>

            <div
              id="footer-mb"
              className="group-ef loaded"
              style={{ color: '#fff', padding: '30px 0 0' }}
            >
              <div className="container" style={{ paddingBottom: '20px' }}>
                <p>
                  {lang === 'vi' && (
                    <Link href="/">
                      <a className="logo">
                        <img
                          className="lazyload"
                          data-src="/logo.png"
                          alt="images"
                          style={logoStyle}
                        />
                      </a>
                    </Link>
                  )}
                  {lang === 'en' && (
                    <Link href="/en">
                      <a className="logo">
                        <img
                          className="lazyload"
                          data-src="/logo.png"
                          alt="images"
                          style={logoStyle}
                        />
                      </a>
                    </Link>
                  )}
                </p>
                <div className="row">
                  <div className="col-lg-4 col-sm-12 efch-1 ef-img-t">
                    <div className="widget widget-info">
                      <Widget data={settingFooter} />
                      {/* <Social data={socialLink} /> */}
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-7">
                    <div className="accodion accodion-0">
                      <div className="accodion-tab ">
                        <input type="checkbox" id="chck_mf" />
                        <label className="accodion-title" htmlFor="chck_mf">
                          <span> {t('extend')} </span> <span className="triangle"></span>
                          <i class="icon-arrow-2 ib"></i>
                        </label>
                        <div className="accodion-content">
                          <div className="inner">
                            <div className="row grid-space-10">{renderFooter(menuFooterMain)}</div>
                            <label className="accodion-title" htmlFor="chck_mf">
                              <span> {t('unextend')} </span>{' '}
                              <span className="triangle">
                                <i
                                  className="icon-arrow-2 ib"
                                  style={{ transform: 'rotate(180deg)' }}
                                ></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="row bottom">
                  <div className="col-lg-3 col-md-6  efch-6 ef-img-t">
                    <div className="widget widget-subscribe" style={{marginBottom: "15px"}}>
                      <h5 className="widget-title" style={{color: '#fff'}}>{t('sign_up_promotional')}</h5>
                      <form onSubmit={onRegister} class="subscribeForm">
                        <div>
                          <input
                              type="text"
                              placeholder={
                                lang === 'vi'
                                  ? 'Nhập email!'
                                  : 'Enter email'
                              }
                              onChange={event => setRegister(event.target.value)}
                              name="email"
                              className="input"
                            />
                        </div>
                        <button type="submit" class=""><i class="icon-arrow-1"></i></button>
                      </form> 
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6  efch-6 ef-img-t">
                    <div className="widget widget-subscribe">
                      <a class="location" href="/page/Chi-nhanh-va-atm-acb" style= {{backgroundColor: "#A0D2FF", color: "#33e8ff"}}> <img src="/static/images/location.svg" alt=""/>{t('near_ATM')}</a>
                    </div>
                  </div>
                </div> */}

                {/* <div className="line"></div>
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
                    <div className="copyright">2019 © Copyright Mango. All rights reserved.</div>
                  </div>
                </div> */}
              </div>
              <div className="line-custom">
                <div className="container">
                  <div className="row grid-space-10">
                    <div className="col-lg-6 col-md-7 efch-5 ef-img-t">
                      <ul className="menu line">
                        {map(
                          menuFooterBottom.sort((a, b) => a.position - b.position),
                          (values, key) => {
                            if (values.type === '4') {
                              return (
                                <li key={key} style={{ display: 'block' }}>
                                  {values.target === '2' ? (
                                    <a
                                      href={values.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{ padding: '0' }}
                                    >
                                      {values.name}
                                    </a>
                                  ) : (
                                    <a href={values.url}>{values.name}</a>
                                  )}
                                </li>
                              );
                            }
                            return (
                              <li className="li-footer" key={key} style={{ display: 'block' }}>
                                <LinkPage lang={lang} name={values.slugPages}>
                                  <a style={{ padding: '0' }}>{values.name}</a>
                                </LinkPage>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-5 efch-6 ef-img-t">
                      <div className="copyright">2023 © Copyright Mango . All rights reserved.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <section className="sec-download-mb">
              <div className="wform">
                <p className="stitle">{t('sign_up_promotional')}</p>
                <form onSubmit={onRegister}>
                  <div className="aaa">
                    <input
                      type="text"
                      placeholder={
                        lang === 'vi'
                          ? 'Nhập email để nhận thông tin!'
                          : 'Enter email to receive information'
                      }
                      name="email"
                      onChange={event => setRegister(event.target.value)}
                      className="input"
                    />
                  </div>

                  <button type="submit" className="btn btn-2">
                    {t('registration')}
                  </button>
                </form>
              </div>
              <DownloadApp mobile linkApp={linkApp} />
            </section> */}
            {/* <div id="footer-mb" className="group-ef loaded">
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
                        <div className="row grid-space-10">{renderFooter(menuFooterMain)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/* <FormPopup
            modal={activeForm}
            setModal={() => setActiveForm(!activeForm)}
            idPage={idPage}
            mail={register}
          /> */}
        </div>
        <ModalDrawer
          menu={menuNav}
          menuHeader={menuHeader}
          onChangeSearch={event => setQuery(event.target.value)}
          onSearch={event => {
            onSearch(event);
            setActiveDrawwe(false);
          }}
        />
      </div>
    );
  }
  return null;
}
Layout.propTypes = propTypes;

export default Layout;
