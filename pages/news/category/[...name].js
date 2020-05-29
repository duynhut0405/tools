import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import map from 'lodash/map';
import { getNewsByCategorySlug } from '../../../services/news';
import { Pagination } from '../../../components/common';
import PropTypes from 'prop-types';
import AboutCategory from '../../../components/about/AboutCategory';
import Cookies from 'js-cookie';

const propTypes = {
  category: PropTypes.object,
  routerURL: PropTypes.string,
  menuHeader: PropTypes.array,
  menuNav: PropTypes.array,
  menuFooterTop: PropTypes.array,
  menuFooterBottom: PropTypes.array,
  menuFooterMain: PropTypes.array,
  menuSearch: PropTypes.array,
  menuMobile: PropTypes.array,
  linkApp: PropTypes.object,
  general: PropTypes.object,
  socialLink: PropTypes.object
};

function CategoryDetail({ routerURL, category }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  const fecthNews = async () => {
    const res = await getNewsByCategorySlug(routerURL, { number: 12, page: page });
    if (res !== undefined && res.status === 200) {
      setData(res.data);
    }
  };

  useEffect(() => {
    Cookies.set('lang', 'vi');
    setData(category);
    document.body.className = '';
    document.body.classList.add('page');
    const logo = document.getElementById('img_log');
    logo.src = '/static/images/svg/logo.svg';
  }, [category]);

  useEffect(() => {
    fecthNews();
  }, [page]);

  return (
    <React.Fragment>
      {category && (
        <Head>
          <title>{category.meta_title || category.name}</title>
          <meta name="title" content={category.meta_title || data.name} />
          <meta name="description" content={category.meta_description || ''} />
          <meta name="keywords" content={category.meta_keyword || ''} />
          <meta
            property="og:image"
            itemProp="thumbnaiUrl"
            content={
              category.miniImage
                ? `${process.env.DOMAIN}${category.miniImage}`
                : `${process.env.DOMAIN}uploads/resources/files/icon/imgDefault.png`
            }
          />
          <meta property="og:title" content={category.meta_title || data.name} />
          <meta property="og:description" content={category.meta_description || ''} />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="354" />
        </Head>
      )}
      {data !== null && (
        <div className="main_content">
          <section className="banner-heading-3 next-shadow">
            <div className="container">
              <div className="divtext">
                <div className="max750">
                  <h1>{data.name}</h1>
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
          <AboutCategory data={data} categories={data.categoryNews} />
          <Pagination page={page} setPage={value => setPage(value)} size={data.size} />
        </div>
      )}
    </React.Fragment>
  );
}

CategoryDetail.getInitialProps = async ctx => {
  const { query } = ctx.ctx;
  let routerURL = null;
  let params = '';
  let category = null;
  map(query, url => (params = `${params}/${url}`));
  routerURL = params.slice(1, params.length);
  const res = await getNewsByCategorySlug(routerURL, { number: 10, page: 0 });
  if (res && res !== undefined && res.status === 200) {
    category = res.data;
  }
  return {
    routerURL,
    category
  };
};

CategoryDetail.propTypes = propTypes;

export default CategoryDetail;
