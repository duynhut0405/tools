import React, { useEffect, useState } from 'react';
import Layout from '../../../components/layout';
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
  }, [category]);

  useEffect(() => {
    fecthNews();
  }, [page]);

  return (
    <Layout
      title={data === null ? '' : data.name}
      meta_title={data === null ? '' : data.meta_title}
      meta_description={data === null ? '' : data.meta_description}
      meta_keyword={data === null ? '' : data.meta_keyword}
      miniImage={data === null ? null : data.base_image}
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
              className="img br loaded loaded lazyload"
             
              data-lazy-data-src="/static/images/heading-10.svg"
              data-src="/static/images/heading-10.svg"
              alt="images"
            />
          </section>
          <AboutCategory data={data} categories={data.categoryNews} />
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
