import React, { useState, useEffect } from 'react';
import moment from 'moment';
import map from 'lodash/map';
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
  const [yearSearch, serYearSearch] = useState(moment(date).format('YYYY'));
  const [page, setPage] = useState(1);
  const [listYear, setListYear] = useState([]);
  const [listNews, setListNews] = useState([]);
  const lang = getLang();
  const [isActive, setIsActive] = useState(true);
  const [monthSearch, setMonthSearch] = useState(moment(date).format('MM'));

  const getNews = async (_id, _page, number, _year) => {
    setListNews([]);
    const res = await findAllByCategory(_id, _page, number, _year);
    if (res && res.status === 200) {
      setListNews(res.data);
    }
  };

  const getNewsCustom = async (_id, number, _year) => {
    const size = listNews.size;
    for (let i = 1; i <= size; i++) {
      setIsActive(false);
      const res = await findAllByCategory(_id, i, number, "2020");
      if (res && res.status === 200) {
        const news = res.data.news;
        let item = news[(news.length)-1];
        let time = moment(item.created_at).format('MM/YYYY');
        if (time ===  `${monthSearch}/${yearSearch}`) {
          setListNews([]);
          setListNews(res.data);
          setPage(i);
          setIsActive(true);
          return;
        }
      }
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
    setIsActive(true);
  }, []);

  // useEffect(() => {
  //   if (data.category.value) {
  //     getNews(data.category.value, page, data.record, year);
  //   }
  // }, [getNews]);

  useEffect(() => {
    if (data.category.value) {
      getNews(data.category.value, page, data.record, year)
    }
  }, [page]);

  useEffect(() => {
    if (data.category.value) {
      getNewsCustom(data.category.value, data.record, yearSearch);
    }
  }, [yearSearch, monthSearch]);

  return (
    <>
      <main id="main" className={`${padding} about`} style={{ padding: "50px"}}>
        <div className="container" id={id}>
          {data.title && 
          <div className="entry-head text-center" style={{borderBottom: "1px solid #DADADA",paddingBottom: "10px"}}>
            <h2 className="ht">{data.title}</h2>
            <div className=" sec-b filter-category text-center" style={{position:"absolute", top:"0",right:"0"}}>
              <select
                className="select"
                onChange={events => serYearSearch((events.target.value).toString())}
                value={yearSearch}
              >
                {map(listYear, item => (
                  <option value={item}>{item}</option>
                ))}
              </select>

              <select
                className="select"
                onChange={events => setMonthSearch((events.target.value).toString())}
                value={monthSearch}
              >
                <option value={"12"}>12</option>
                <option value={"11"}>11</option>
                <option value={"10"}>10</option>
                <option value={"09"}>9</option>
                <option value={"08"}>8</option>
                <option value={"07"}>7</option>
                <option value={"06"}>6</option>
                <option value={"05"}>5</option>
                <option value={"04"}>4</option>
                <option value={"03"}>3</option>
                <option value={"02"}>2</option>
                <option value={"01"}>1</option>
              </select>
            </div>
          </div>}
          <div className="row list-item" style={{display: isActive ? "block" : "none"}}>
            {map(listNews.news, item => {
              return (
                <div className="col-md-12" key={item.newsId}>
                  <LinkNew lang={lang} name={item.url}>
                    <a className="item efch-2 ef-img-l equal">
                      <div className="divtext">
                        <div className="date">{moment(item.created_at).format('DD/MM/YYYY')}</div>
                        <h4 className="title line2">{item.title}</h4>
                      </div>
                    </a>
                  </LinkNew>
                </div>
              );
            })}
          </div>
          {isActive ? (
            <Pagination setPage={setPage} page={page} size={listNews.size} />
          ) : null}
        </div>
      </main>
    </>
  );
}

About.propTypes = propTypes;

export default About;
