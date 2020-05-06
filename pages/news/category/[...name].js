import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import map from 'lodash/map';
import { getNewsByCategorySlug } from '../../../services/news';
import { Pagination } from '../../../components/common';
import PropTypes from 'prop-types';
import AboutCategory from '../../../components/about/AboutCategory';

const propTypes = {
  category: PropTypes.object,
  routerURL: PropTypes.string
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
    setData(category);
    document.body.className = '';
    document.body.classList.add('page');
    const body = document.getElementsByTagName('body')[0];
    const logo = document.getElementById('img_log');
    body.classList.remove('mb-priority');
    logo.src = '/static/images/svg/logo.svg';
  }, [category]);

  useEffect(() => {
    fecthNews();
  }, [page]);

  return (
    <React.Fragment>
      <Head>
        <title>{data.meta_title || data.name}</title>
        <meta name="title" content={data.meta_title || data.name} />
        <meta name="description" content={data.meta_description || ''} />
        <meta name="keywords" content={data.meta_keyword || ''} />
        <meta
          property="og:image"
          itemProp="thumbnaiUrl"
          content={
            data.miniImage
              ? `${process.env.DOMAIN}${data.miniImage}`
              : `${process.env.DOMAIN}uploads/resources/files/icon/imgDefault.png`
          }
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="354" />
      </Head>
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
              className="img br loaded loaded lazyload"
              data-src="/static/images/heading-10.svg"
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
  return { routerURL, category };
};

CategoryDetail.propTypes = propTypes;

export default CategoryDetail;
