import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { map } from 'lodash';
import { useTranslation } from 'react-i18next';
import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import { NewsActions } from '../../store/actions';
import { connect } from 'react-redux';
import Pagination from '../common/Pagination';

const propTypes = {
  listNews: PropTypes.object,
  getNews: PropTypes.func,
  data: PropTypes.object
};

function About({ data, listNews, getNews }) {
  const date = new Date();
  const [year, setYear] = useState(moment(date).format('YYYY'));
  const [page, setPage] = useState(1);
  const { t } = useTranslation();

  useEffect(() => {
    if (data.category.value) {
      getNews(data.category.value, page, data.record, year);
    }
  }, [getNews]);

  useEffect(() => {
    if (data.category.value) {
      getNews(data.category.value, page, data.record, year);
    }
  }, [year, page]);

  return (
    <>
      <main id="main" className="sec-tb">
        <div className="container">
          {data.title && <h1 className="text-center">{data.title}</h1>}
          <div className=" sec-b filter-category text-center">
            <select
              className="select"
              onChange={evnets => setYear(evnets.target.value)}
              value={year}
            >
              <option>{t('year')}</option>
              <option value={2020}>2020</option>
              <option value={2021}>2021</option>
            </select>
          </div>
          <div className="list-12 row list-item">
            {map(listNews.news, item => {
              return (
                <div className="col-md-4" key={item.newsId}>
                  <a href={`/news/${item.url}`} className="item efch-2 ef-img-l equal">
                    <div className="img">
                      <img
                        className=" loaded loaded"
                        data-lazy-type="image"
                        data-lazy-src={item.base_image}
                        src={item.base_image}
                      />
                    </div>
                    <div className="divtext">
                      <div className="cl6">Ngành ngân hàng</div>
                      <h4 className="title line2">{item.title}</h4>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
          <Pagination setPage={setPage} page={page} size={listNews.size} />
        </div>
      </main>
    </>
  );
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common', 'about']
});

const mapStateToProps = state => {
  return {
    listNews: state.newsReducer.listNewsByCategory
  };
};

const mapDispatchToProps = {
  getNews: NewsActions.fillNesByCategoryAction
};

About.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(About));
