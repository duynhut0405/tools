import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Social } from '../../../components/common';
import { getNewByUri } from '../../../services/news';
import { getSocialLink } from '../../../utils/fetch';
import moment from 'moment';
import map from 'lodash/map';
import ReactHtmlParser from 'react-html-parser';
import t from '../../../translation';
import Layout from '../../../components/layout';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

const propTypes = {
  socialLink: PropTypes.object,
  news: PropTypes.object,
  category_name: PropTypes.string,
  category_url: PropTypes.string,
  relatedPost: PropTypes.array
};

function New({ news, category_name, category_url, socialLink }) {
  useEffect(() => {
    Cookies.set('lang', 'en');
    document.body.className = '';
    document.body.classList.add('page');
    if (news && news.news.layoutInvestors) {
      const body = document.getElementsByTagName('body')[0];
      const logo = document.getElementById('img_log');
      if (body && logo) {
        body.classList.add('mb-priority');
        logo.src = '/static/images/svg/logo-priority.svg';
      }
    } else {
      const body = document.getElementsByTagName('body')[0];
      const logo = document.getElementById('img_log');
      if (body && logo) {
        body.classList.remove('mb-priority');
        logo.src = '/static/images/svg/logo.svg';
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
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="354" />
        </Head>
      )}
      <Layout lang="en">
        {news && news.news !== null && (
          <>
            <div className="entry-breadcrumb">
              <div className="container">
                <div className="breadcrumbs">
                  <Link href="/en">
                    <a className="item">{t('home')}</a>
                  </Link>
                  <Link
                    href="/[lang]/news/category/[...name]"
                    as={`/en/news/category/${category_url}`}
                  >
                    <a className="item">{category_name}</a>
                  </Link>
                  {/* <span className="item">{news.news === null ? '' : news.news.title}</span> */}
                </div>
              </div>
            </div>
            <section className="banner-heading-3 next-shadow">
              <div className="container">
                <div className="divtext">
                  <div className="max750">
                    <h1 className=" ">{news.news === null ? '' : news.news.title}</h1>
                  </div>
                </div>
              </div>
              <img
                className="img img-pc br loaded loaded lazyload"
                data-src="/static/images/heading-10-pc.svg"
                alt="images"
              />
              <img
                className="img img-mb br loaded loaded lazyload"
                data-src="/static/images/heading-10-mb.svg"
                alt="images"
              />
            </section>
            <main id="main" className="sec-b page-news-detail">
              <div className="container">
                <div className=" max750">
                  <div className="top-heading">
                    <div className="date">{moment(news.news.created_at).format('DD/MM/YYYY')}</div>
                    {socialLink && <Social data={socialLink.socialLink} />}
                    {/* {console.log(socialLink)} */}
                  </div>

                  <div className="entry-content">{ReactHtmlParser(news.news.description)}</div>
                  <br />
                  <div className="tags">
                    <h2>{t('related_content')}</h2>
                    {map(news.news.categories, item => (
                      <Link
                        href="/[lang]/news/category/[...name]"
                        as={`/en/news/category/${item.slug}`}
                        key={item.id}
                      >
                        <a className="tag">{item.name}</a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </main>
            <section className="sec-tb">
              <div className="container">
                <div className="entry-head">
                  <h2 className="ht efch-1 ef-img-t">{t('related_news')}</h2>
                </div>
                <div className="list-7  list-item row">
                  {map(news.newsRelated, (item, index) => {
                    return (
                      <div className="col-md-6" key={index}>
                        <Link href="/[lang]/news/[...slug]" as={`/en/news/${item.url}`}>
                          <a className="item item-inline-table">
                            <div className="img">
                              <img
                                className="lazyload"
                                data-src={`${process.env.DOMAIN}${item.baseImage}`}
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
            </section>
          </>
        )}
      </Layout>
    </React.Fragment>
  );
}

New.propTypes = propTypes;

New.getInitialProps = async ctx => {
  const { query } = ctx.ctx;
  let routerURL = null;
  let params = '';
  let news = null;
  let category_name = null;
  let category_url = null;
  // let layoutInvestors = null;
  map(query, url => (params = `${params}/${url}`));
  routerURL = params.slice(1, params.length);
  const socialLink = await getSocialLink('en');
  const newResponse = await getNewByUri('en', routerURL);
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
      category_name = newResponse.data.news.categories[0].name;
      category_url = newResponse.data.news.categories[0].slug;
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
