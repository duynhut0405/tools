import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../../../components/layout';
import map from 'lodash/map';
import { getNewsByCategorySlug } from '../../../services/news';
import { getMemnu, getCommon } from '../../../utils/fetch';
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

function CategoryDetail({
  routerURL,
  category,
  menuHeader,
  menuNav,
  menuFooterTop,
  menuFooterMain,
  menuFooterBottom,
  menuSearch,
  menuMobile,
  general,
  socialLink,
  linkApp
}) {
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
    // const body = document.getElementsByTagName('body')[0];
    const logo = document.getElementById('img_log');
    // body.classList.remove('mb-priority');
    logo.src = '/static/images/svg/logo.svg';
  }, [category]);

  useEffect(() => {
    fecthNews();
  }, [page]);

  return (
    <React.Fragment>
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
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="354" />
      </Head>
      <Layout
        lang="vi"
        idPage={1}
        menuFooterBottom={menuFooterBottom}
        menuFooterMain={menuFooterMain}
        menuFooterTop={menuFooterTop}
        menuMobile={menuMobile}
        menuNav={menuNav}
        menuSearch={menuSearch}
        menuHeader={menuHeader}
        settingFooter={general}
        socialLink={socialLink}
        linkApp={linkApp}
      >
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
      </Layout>
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
  const menu = await getMemnu('vi');
  const {
    menuHeader,
    menuNav,
    menuFooterTop,
    menuFooterMain,
    menuFooterBottom,
    menuSearch,
    menuMobile
  } = menu;
  const common = await getCommon('vi');
  const { general, socialLink, linkApp } = common;
  const res = await getNewsByCategorySlug(routerURL, { number: 10, page: 0 });
  if (res && res !== undefined && res.status === 200) {
    category = res.data;
  }
  return {
    routerURL,
    category,
    menuHeader,
    menuNav,
    menuFooterTop,
    menuFooterMain,
    menuFooterBottom,
    menuSearch,
    menuMobile,
    general,
    socialLink,
    linkApp
  };
};

CategoryDetail.propTypes = propTypes;

export default CategoryDetail;
