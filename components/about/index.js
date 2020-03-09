import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { map } from 'lodash';
import { useTranslation } from 'react-i18next';
import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import { NewsActions } from '../../store/actions';
import { connect } from 'react-redux';

const propTypes = {
  listNews: PropTypes.object,
  getNews: PropTypes.func
};

function About({ listNews, getNews }) {
  const date = new Date();
  const [year, setYear] = useState(moment(date).format('YYYY'));
  const { t } = useTranslation();

  useEffect(() => {
    getNews(44153, 0, year);
  }, [getNews]);

  useEffect(() => {
    getNews(44153, 0, year);
  }, [year]);

  return (
    <>
      <main id="main" className="sec-tb">
        <div className="container">
          <h1 className="text-center">{t('page_about.title')}</h1>
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
          <div className="list-5 row list-item">
            {map(listNews.news, item => {
              return (
                <div className="col-md-4" key={item.newsId}>
                  <a href={`/news/${item.url}`} className="item efch-2 ef-img-l equal">
                    <div className="img tRes_71">
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
                      <div className="desc line2">{item.shortDescription}</div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
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
