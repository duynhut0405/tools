import React, { useEffect, useState, Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Social } from '../../components/common';
import { getNewByUri } from '../../services/news';
import { getCommon } from '../../utils/fetch';
import moment from 'moment';
import map from 'lodash/map';
import ReactHtmlParser from 'react-html-parser';
import t from '../../translation';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

const propTypes = {
  socialLink: PropTypes.object,
  news: PropTypes.object,
  category_name: PropTypes.string,
  category_url: PropTypes.string,
  relatedPost: PropTypes.array,
  menuHeader: PropTypes.array,
  menuNav: PropTypes.array,
  menuFooterTop: PropTypes.array,
  menuFooterBottom: PropTypes.array,
  menuFooterMain: PropTypes.array,
  menuSearch: PropTypes.array,
  menuMobile: PropTypes.array,
  linkApp: PropTypes.object,
  general: PropTypes.object
};

function New({ news, category_name, category_url, socialLink }) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    Cookies.set('lang', 'vi');
    document.body.className = '';
    document.body.classList.add('page');
    if (news && news.news.layoutInvestors) {
      const body = document.getElementsByTagName('body')[0];
      const logo = document.getElementById('img_log');
      if (body && logo) {
        body.classList.add('mb-priority');
        logo.src = '/static/images/svg/logo-priority.svg';
        Cookies.set('priority', '/page/mb-priority');
      }
    } else {
      const body = document.getElementsByTagName('body')[0];
      const logo = document.getElementById('img_log');
      if (body && logo) {
        logo.src = '/static/images/svg/logo.svg';
        Cookies.set('priority', '/');
      }
    }
  }, [news]);

  return (
    <React.Fragment>
      {news && news.news && (
        <Head>
          <title>{news.news.meta_title ? news.news.meta_title : news.news.name}</title>
          <meta
            name="title"
            content={news.news.meta_title ? news.news.meta_title : news.news.name}
          />
          <meta
            name="description"
            content={news.news.meta_description ? news.news.meta_description : ''}
          />
          <meta name="keywords" content={news.news.meta_keyword ? news.news.meta_keyword : ''} />
          <meta
            property="og:image"
            itemProp="thumbnaiUrl"
            content={
              news.news.miniImage
                ? `${process.env.DOMAIN}${news.news.miniImage}`
                : `${process.env.DOMAIN}uploads/resources/files/icon/imgDefault.png`
            }
          />
          <meta
            property="og:title"
            content={news.news.meta_title ? news.news.meta_title : news.news.name}
          />
          <meta
            property="og:description"
            content={news.news.meta_description ? news.news.meta_description : ''}
          />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="354" />
        </Head>
      )}

      {news && news.news !== null && (
        <>
          <div className="entry-breadcrumb">
            <div className="container">
              <div className="breadcrumbs">
                <Link href="/">
                  <a className="item">{t('home')}</a>
                </Link>
                <Link href="/news/category/[...name]" as={`/news/category/${category_url}`}>
                  <a className="item">{category_name}</a>
                </Link>
                {/* <span className="item">{news.news === null ? '' : news.news.title}</span> */}
              </div>
            </div>
          </div>
          <section className="banner-heading-3">
            <div className="container">
              <div className="divtext">
                <div className="max750">
                  <h1 className=" ">{news.news === null ? '' : news.news.title}</h1>
                </div>
              </div>
            </div>
            <img
              className="img img-pc br loaded loaded lazyload"
              data-src="/static/images/image_8.png"
              alt="images"
            />
          </section>
          <main id="main" className="sec-b page-news-detail">
            <div className="container">
              <div className="max750">
                <div className="top-heading" style={{marginTop:"-85px"}}>
                  <div className="date">
                  {category_name} 
                    {/* {category_name}   | {t('space')} */}
                    {/* {moment(news.news.created_at).format('DD/MM/YYYY')} */}
                  </div>
                  {socialLink && <Social data={socialLink} />}
                </div>
                {news.news.author_name !== null && (
                  <Fragment>
                    {!active && (
                      <div
                        className={
                          news.news.author_name !== null ? 'single_video  tRes_16_9 max750' : ''
                        }
                        data-id="2UrWPUAr68A"
                        data-video="autoplay=1&amp;controls=1&amp;mute=0"
                      >
                        <img
                          className="lazyload"
                          data-src={`${process.env.DOMAIN}${news.news.base_image}`}
                          alt="images"
                        />
                        {news.news.author_name !== null && (
                          <span
                            className="btnvideo"
                            onClick={() => {
                              setActive(!active);
                            }}
                          >
                            {news.news.author_name !== null || news.news.author_name !== '' ? (
                              <i className="icon-play"></i>
                            ) : (
                              ''
                            )}
                          </span>
                        )}
                      </div>
                    )}
                    {active && (
                      <div
                        className="single_video  tRes_16_9 max750"
                        data-id="2UrWPUAr68A"
                        data-video="autoplay=1&amp;controls=1&amp;mute=0"
                      >
                        <iframe
                          frameBorder="0"
                          allowFullScreen="1"
                          allow="autoplay; encrypted-media;"
                          src={`${news.news.author_name}?rel=0&autoplay=1`}
                        ></iframe>
                      </div>
                    )}
                  </Fragment>
                )}
                <div className="entry-content">
                  {ReactHtmlParser(news.news.description)}
                  {news.news.filePDF && (
                    <a href={`${process.env.DOMAIN}${news.news.filePDF}`} download>
                      {t('download')}
                    </a>
                  )}
                </div>
                <br />
                <div className="tags">
                  {map(news.news.categories, item => (
                    <Link
                      href="/news/category/[...name]"
                      as={`/news/category/${item.slug}`}
                      key={item.id}
                    >
                      <a className="tag">{item.name}</a>
                    </Link>
                  ))}
                  {/* {socialLink && <Social data={socialLink} />} */}
                </div>
                {/* <div className="Dowload_information">
                {t('New_dowload_title')} <br></br>
                {t('dowload_AppStore_title')}
                <a className="dowload_AppStore" href={t('dowload_AppStore')}>{t('dowload_AppStore')}</a> <br></br>
                {t('dowload_GooglePlay_title')}
                <a className="dowload_GooglePlay" href={t('dowload_GooglePlay')}>{t('dowload_GooglePlay')}</a><br></br>
                {t('New_dowload_title_before')}
                <a className="Phone_contact_1" href={t('Phone_contact_1')}>{t('Phone_contact_1')}</a> /
                <a className="Phone_contact_2" href={t('Phone_contact_2')}>{t('Phone_contact_2')}</a> 
                {t('New_dowload_title_after')}
                

                </div> */}
              </div>
            </div>
          </main>
          {/* <section className="sec-tb">
            <div className="container">
              <div className="entry-head">
                <h2 className="ht efch-1 ef-img-t">{t('related_news')}</h2>
              </div>
              <div className="list-7  list-item row">
                {map(news.newsRelated, (item, index) => {
                  return (
                    <div className="col-md-6" key={index}>
                      <Link href="/news/[...slug]" as={`/news/${item.url}`}>
                        <a className="item item-inline-table">
                          <div className="img">
                            <img
                              className="lazyload"
                              data-src={
                                item.baseImage
                                  ? `${process.env.DOMAIN}${item.baseImage}`
                                  : `/images/imgdefault.jpg`
                              }
                              alt="images"
                            />
                          </div>
                          <div className="divtext">
                            <div className="date">
                              {moment(item.created_at).format('DD/MM/YYYY')}
                            </div>
                            <h4 className="title line2">{item.title}</h4>
                            <div className="desc line3">{item.shortDescription}</div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </section> */}
        </>
      )}
    </React.Fragment>
  );
}

New.propTypes = propTypes;

New.getInitialProps = async ctx => {
  const { query } = ctx.ctx;
  let routerURL = null;
  let params = '';
  let news = null;
  let category_name = '';
  let category_url = '';
  // let layoutInvestors = null;
  map(query, url => (params = `${params}/${url}`));
  routerURL = params.slice(1, params.length);

  const common = await getCommon('vi');
  const { socialLink } = common;
  const newResponse = await getNewByUri('vi', routerURL);
  if (
    newResponse &&
    newResponse !== undefined &&
    newResponse !== null &&
    newResponse.status === 200
  ) {
    news = newResponse.data;
    // layoutInvestors = newResponse.data.layoutInvestors;
    if (
      newResponse.data.news.categories &&
      newResponse.data.news.categories !== null &&
      newResponse.data.news.categories.length > 0
    ) {
      category_name = newResponse?.data?.news?.categories[0]?.name;
      category_url = newResponse?.data?.news?.categories[0]?.slug;
    }
  }

  return {
    news,
    category_name,
    category_url,
    socialLink
  };
};

export default New;
