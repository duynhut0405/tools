import React from 'react';
import Layout from '../../components/layout';
import { Social } from '../../components/common';
import { getNewByUri } from '../../services/news';
import moment from 'moment';
import map from 'lodash/map';
import ReactHtmlParser from 'react-html-parser';
import { withTranslation } from '../../i18n';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  socialLink: PropTypes.object,
  news: PropTypes.object,
  category_name: PropTypes.string,
  category_url: PropTypes.string,
  relatedPost: PropTypes.array
};

function New({ socialLink, news, category_name, category_url }) {
  const { t } = useTranslation();
  return (
    <Layout
      title={news.news.meta_title}
      meta_title={news.news.meta_title}
      meta_description={news.news.meta_description}
      meta_keyword={news.news.meta_keyword}
      miniImage={news.news.miniImage}
      personalLayout={news.news.layoutInvestors}
    >
      {news.news !== null && (
        <>
          <div className="entry-breadcrumb">
            <div className="container">
              <div className="breadcrumbs">
                <a className="item" href="/">
                  {t('home')}
                </a>
                <a className="item" href={`/news/category/${category_url}`}>
                  {category_name}
                </a>
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
              className="img br loaded loaded lazyload"
              data-lazy-type="image"
              data-lazy-src="/static/images/heading-10.svg"
              src="/static/images/heading-10.svg"
            />
          </section>
          <main id="main" className="sec-b page-news-detail">
            <div className="container">
              <div className=" max750">
                <div className="top-heading">
                  <div className="date">{moment(news.news.created_at).format('DD/MM/YYYY')}</div>
                  <Social data={socialLink} />
                </div>

                <div className="entry-content">{ReactHtmlParser(news.news.description)}</div>
                <br />
                <div className="tags">
                  <h2>{t('related_content')}</h2>
                  {map(news.news.categories, item => (
                    <a className="tag" href={`/news/category/${item.slug}`} key={item.id}>
                      {item.name}
                    </a>
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
                      <a href={`/news/${item.url}`} className="item item-inline-table">
                        <div className="img">
                          <img
                            className="lazyload"
                            data-lazy-type="image"
                            data-lazy-src={`${process.env.DOMAIN}${item.baseImage}`}
                            src={`${process.env.DOMAIN}${item.baseImage}`}
                          />
                        </div>
                        <div className="divtext">
                          <div className="date">{moment(item.created_at).format('DD/MM/YYYY')}</div>
                          <h4 className="title line2">{item.title}</h4>
                          <div className="desc line3">{item.shortDescription}</div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    socialLink: state.layoutReducer.socialLink
  };
};

New.propTypes = propTypes;

New.getInitialProps = async ctx => {
  const { query } = ctx.ctx;
  let routerURL = null;
  let params = '';
  let news = null;
  let category_name = null;
  let category_url = null;
  map(query, url => (params = `${params}/${url}`));
  routerURL = params.slice(1, params.length);
  const newResponse = await getNewByUri(routerURL);
  if (
    newResponse &&
    newResponse !== undefined &&
    newResponse !== null &&
    newResponse.status === 200
  ) {
    news = newResponse.data;
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
    category_url
  };
};

export default connect(mapStateToProps, null)(withTranslation('common')(New));
