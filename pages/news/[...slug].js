import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import { Social } from '../../components/common';
import { getNewCategoryIdService, getNewByUri } from '../../services/news';
import moment from 'moment';
import { map, filter } from 'lodash';
import { useRouter } from 'next/router';
import ReactHtmlParser from 'react-html-parser';
import { withTranslation } from '../../i18n';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  socialLink: PropTypes.object,
  getSocialLink: PropTypes.func
};

function New({ socialLink, getSocialLink }) {
  const [news, setNews] = useState({});
  const [relatedPost, setRelatedPost] = useState([]);
  const [category_name, setCategory_name] = useState(null);
  const [category_url, setCategory_url] = useState(null);
  const router = useRouter();
  const { t } = useTranslation();
  useEffect(() => {
    const res = getNewByUri(router.query.slug);
    res.then(respone => {
      if (respone !== undefined && respone !== null && respone.status === 200) {
        setNews(respone.data);
        if (respone.data.categories !== null && respone.data.categories.length > 0) {
          setCategory_name(respone.data.categories[0].name);
          setCategory_url(respone.data.categories[0].slug);
          getNewCategoryIdService(respone.data.categories[0].id).then(data => {
            if (data !== null && data.status === 200) {
              setRelatedPost(data.data);
            }
          });
        }
      }
    });
  }, [getNewByUri, getSocialLink]);
  return (
    <Layout title={news.meta_title}>
      <div className="entry-breadcrumb">
        <div className="container">
          <div className="breadcrumbs">
            <a className="item" href="/">
              {t('home')}
            </a>
            <a className="item" href={`/news/category/${category_url}`}>
              {category_name}
            </a>
            <span className="item">{news.title}</span>
          </div>
        </div>
      </div>
      <section className="banner-heading-3 next-shadow">
        <div className="container">
          <div className="divtext">
            <div className="max750">
              <h1 className=" ">{news.title}</h1>
            </div>
          </div>
        </div>
        <img
          className="img br loaded loaded"
          data-lazy-type="image"
          data-lazy-src="/static/images/heading-10.svg"
          src="/static/images/heading-10.svg"
        />
      </section>
      <main id="main" className="sec-b page-news-detail">
        <div className="container">
          <div className=" max750">
            <div className="top-heading">
              <div className="date">{moment(news.created_at).format('DD/MM/YYYY')}</div>
              <Social data={socialLink} />
            </div>

            <div className="entry-content">{ReactHtmlParser(news.description)}</div>
            <br />
            <div className="tags">
              <h2>{t('related_content')}</h2>
              {map(news.categories, item => (
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
            {map(
              filter(relatedPost, (item_a, item_b) => relatedPost.indexOf(item_a) === item_b),
              (item, index) => {
                if (index < 2) {
                  return (
                    <div className="col-md-6" key={item.newsId}>
                      <a href={`/news/${item.url}`} className="item item-inline-table">
                        <div className="img">
                          <img
                            className=" loaded loaded"
                            data-lazy-type="image"
                            data-lazy-src={item.base_image}
                            src={item.base_image}
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
                }
                return null;
              }
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    socialLink: state.layoutReducer.socialLink
  };
};

New.propTypes = propTypes;

New.getInitialProps = async () => ({
  namespacesRequired: ['common', 'common']
});

export default connect(mapStateToProps, null)(withTranslation('common')(New));
