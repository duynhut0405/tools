import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { map } from 'lodash';
import { getLang } from '../../utils/cookie';
import { LinkNew } from '../common/link';
import PropTypes from 'prop-types';
import Pagination from '../common/Pagination';
import { findAllByCategory, getListYearNewsService } from '../../services/news';

const propTypes = {
  listNews: PropTypes.object,
  getNews: PropTypes.func,
  data: PropTypes.object,
  id: PropTypes.number
};

function About({ data, id }) {
  const date = new Date();
  const [year, setYear] = useState(moment(date).format('YYYY'));
  const [page, setPage] = useState(1);
  const [listYear, setListYear] = useState([]);
  const [listNews, setListNews] = useState([]);
  const lang = getLang();

  const getNews = async (_id, _page, number, _year) => {
    const res = await findAllByCategory(_id, _page, number, _year);
    if (res && res.status === 200) {
      setListNews(res.data);
    }
  };

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
                  <LinkNew lang={lang} name={item.url}>
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
                  </LinkNew>
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

About.propTypes = propTypes;

export default About;
