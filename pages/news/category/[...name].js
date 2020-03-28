import React, { useEffect, useState } from 'react';
import Layout from '../../../components/layout';
import map from 'lodash/map';
import { HotNews, AllNews } from '../../../components/categoryDetail';
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
    const res = await getNewsByCategorySlug(routerURL, { number: 9, page: page });
    if (res !== undefined && res.status === 200) {
      setData(res.data);
    }
  };

  useEffect(() => {
    setData(category);
  }, [category]);

  useEffect(() => {
    fecthNews();
  }, [page]);

  return (
    <Layout title={data === null ? '' : data.name}>
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
              className="img br loaded loaded"
              data-lazy-type="image"
              data-lazy-src="/static/images/heading-10.svg"
              src="/static/images/heading-10.svg"
            />
          </section>
          {/* <HotNews data={data.hotNews} title={data.name} />
          <AllNews data={data.news} title={data.name} /> */}
          <AboutCategory data={data} title={data.name} />
          <Pagination page={page} setPage={value => setPage(value)} size={data.size} />
        </div>
      )}
    </Layout>
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
