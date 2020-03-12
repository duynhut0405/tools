import React, { useEffect, useState } from 'react';
import Layout from '../../../components/layout';
import { NewsActions } from '../../../store/actions';
import { map } from 'lodash';
import { HotNews, AllNews } from '../../../components/categoryDetail';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';

const propTypes = {
  listNews: PropTypes.object,
  getNews: PropTypes.func
};

function CategoryDetail({ listNews, getNews }) {
  const [page] = useState(0);
  const router = useRouter();
  const { name } = router.query;

  let routerURL = null;
  let params = '';
  map(name, url => (params = `${params}/${url}`));
  routerURL = params.slice(1, params.length);
  useEffect(() => {
    getNews(routerURL, { number: 10, page: page });
  }, [getNews]);

  return (
    <Layout title={listNews.name}>
      <div className="main_content">
        <section className="banner-heading-3 next-shadow">
          <div className="container">
            <div className="divtext">
              <div className="max750">
                <h1>{listNews.name}</h1>
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
        <HotNews data={listNews.hotNews} title={listNews.name} />
        <AllNews data={listNews.news} title={listNews.name} />
      </div>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    listNews: state.newsReducer.listNewsByCategorySlug
  };
};

const mapDispatchToProps = {
  getNews: NewsActions.getNewByCategorySlugAction
};

CategoryDetail.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);
