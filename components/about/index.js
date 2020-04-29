import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import moment from 'moment';
import { map } from 'lodash';
import { useTranslation } from 'react-i18next';
import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import { NewsActions } from '../../store/actions';
import { connect } from 'react-redux';
import Pagination from '../common/Pagination';
import { getListYearNewsService } from '../../services/news';

const propTypes = {
  listNews: PropTypes.object,
  getNews: PropTypes.func,
  data: PropTypes.object,
  id: PropTypes.number
};

function About({ data, listNews, getNews, id }) {
  const date = new Date();
  const [year, setYear] = useState(moment(date).format('YYYY'));
  const [page, setPage] = useState(1);
  const [listYear, setListYear] = useState([]);
  const { t } = useTranslation();

  let padding = '';
  if (data.optionWidth === '2') {
    padding = 'sec-tb';
  } else if (data.optionWidth === '3') {
    padding = 'sec-t';
  } else if (data.optionWidth === '4') {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }

  const getYear = async () => {
    const res = await getListYearNewsService();
    if (res && res.status === 200) {
      setListYear(res.data);
    }
  };

  useEffect(() => {
    getYear();
  }, []);

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
      <main id="main" className={`${padding} about`}>
        <div className="container" id={id}>
          {data.title && <h1 className="text-center">{data.title}</h1>}
          <div className=" sec-b filter-category text-center">
            <select
              className="select"
              onChange={evnets => setYear(evnets.target.value)}
              value={year}
            >
              {map(listYear, item => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="list-12 row list-item">
            {map(listNews.news, item => {
              return (
                <div className="col-md-4" key={item.newsId}>
                  <Link href="/news/[...slug]" as={`/news/${item.url}`}>
                    <a className="item efch-2 ef-img-l equal">
                      <div className="img">
                        <img
                          className="lazyload"
                          data-src={`${process.env.DOMAIN}${item.base_image}`}
                          alt="images"
                        />
                      </div>
                      <div className="divtext">
                        <div className="cl6">Ngành ngân hàng</div>
                        <h4 className="title line2">{item.title}</h4>
                      </div>
                    </a>
                  </Link>
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
