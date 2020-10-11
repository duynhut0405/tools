import React, { useState, useEffect } from 'react';
import moment from 'moment';
import map from 'lodash/map';
import { getLang } from '../../utils/cookie';
import { LinkNew } from '../common/link';
import PropTypes from 'prop-types';
import Pagination from '../common/Pagination';
import { findAllByCategory, getListYearNewsService } from '../../services/news';
import UseWindowResize from "../common/Resize";

const propTypes = {
  listNews: PropTypes.object,
  getNews: PropTypes.func,
  data: PropTypes.object,
  id: PropTypes.number
};

function About({ data, id }) {
  const date = new Date();
  const [year, setYear] = useState(moment(date).format('YYYY'));
  const [yearSearch, setYearSearch] = useState(moment(date).format('YYYY'));
  const [page, setPage] = useState(1);
  const [listYear, setListYear] = useState([]);
  const [listNews, setListNews] = useState([]);
  const lang = getLang();
  const [isActive, setIsActive] = useState(true);
  const [monthSearch, setMonthSearch] = useState(moment(date).format('MM'));
  const [isUpdatePage, setIsUpdatePage] = useState(false);
  const [active_title, setAciveTitle] = useState(true);
  const size = UseWindowResize();

  const getNews = async (_id, _page, number, _year) => {
    setListNews([]);
    const res = await findAllByCategory(_id, _page, number, _year);
    if (res && res.status === 200) {
      setListNews(res.data);
      setIsUpdatePage(true);
      setMonthSearch(moment(res.data.news[res.data.news.length -1].created_at).format('MM'));
      setYearSearch(moment(res.data.news[res.data.news.length -1].created_at).format('YYYY'));
      setIsUpdatePage(false);
    }
  };

  const getNewsCustom = async (_id, number, _year) => {
    const size = listNews.size;
    for (let i = 1; i <= size; i++) {
      setIsActive(false);
      const res = await findAllByCategory(_id, i, number, moment(date).format('YYYY'));
      if (res && res.status === 200) {
        const news = res.data.news;
        let item = news[(news.length)-1];
        let year = moment(item.created_at).format('YYYY');
        let yearInt = parseInt(year);
        if ( parseInt(yearSearch) != yearInt) {
          continue;
        } else if (parseInt(yearSearch) == yearInt) {
          let month = moment(item.created_at).format('MM');
          let monthInt = parseInt(month);
          if (monthInt > parseInt(monthSearch)) {
            continue;
          }
          if (monthInt == parseInt(monthSearch)) {
            setListNews([]);
            setListNews(res.data);
            setPage(i);
            setIsActive(true);
            return;
          }
        }
        return;
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
      getNews(data.category.value, page, data.record, year);
      // setMonthSearch(moment(listNews[0].created_at).format('MM'))
    }
  }, [page]);

  useEffect(() => {
    if (data.category.value && !isUpdatePage) {
      getNewsCustom(data.category.value, data.record, yearSearch);
    }
  }, [yearSearch, monthSearch]);

  return (
    <>
     <div className={`${padding} accodion accodion-2 downloadfile`} id={id}
      style={{backgroundColor:"#E0F0FF", paddingBottom:"0"}}>
        <div className="container">
          <div className="question" style={{ backgroundColor: "unset" }}>
            <div className="container">
              <div className="accodion-tab">
                  <input
                    id={`checkbox_${id}`}
                    type="checkbox"
                    checked={active_title}
                    onClick={() => setAciveTitle(!active_title)}
                  />
                  <label
                    htmlFor={`checkbox_${id}`}
                    className="entry-head text-center block-question-index"
                    style={{paddingTop:"37px"}}
                  >
                    <h2 className="ht ">{data.title || ""}</h2>
                    <span className="triangle">
                      <i className="icon-plus"></i>
                    </span>
                  </label>
                  <div
                    className="accodion-content entry-content"
                    style={{ marginTop: "-17px" }}
                  >
                    <div className="inner-full">
                      <div className="accodion accodion-1 accodion-1-3">
                        <div className="search-block">
                          <div className={size.width > 920 ? 'filter-category mb-5 text-right' : 'filter-category mb-5 text-center'}>
                          <select
                            className="select"
                            onChange={events => setYearSearch((events.target.value).toString())}
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
                        </div>
                        <div className="container">
                          <div className="sec">
                            <div className="accodion-content">
                              <div className="inner-t" style={{padding: "30px"}}>
                                <div className="row grid-space-60" style={{display: isActive ? "block" : "none", backgroundColor: "#fff",padding: "20px",borderRadius: "8px", marginBottom:"58px"}}>
                                  <ul className="list-download " style={{margin: "0 0 0 0"}}>
                                    {map(listNews.news, item => {
                                      return (
                                        <li key={item.newsId}>
                                          <LinkNew lang={lang} name={item.url}>
                                            <a>
                                              <span className="date"  style={{width: "10%",paddingRight: "5px"}}>{moment(item.created_at).format('DD/MM/YYYY')}</span>
                                              <span className="title">
                                                <i className="icon-t14"></i> {item.title}
                                              </span>
                                              {/* <div className="row" style={{padding:"10px"}}>
                                                <div className="col-md-2">
                                                  <div className="divtext divtext-custom-table-1">
                                                    <div className="date">{moment(item.created_at).format('DD/MM/YYYY')}</div>
                                                  </div>
                                                </div>

                                                <div className="col-md-10">
                                                  <div className="divtext divtext-custom-table-1">
                                                    <h4 className="title line2">{item.title}</h4>
                                                  </div>
                                                </div>

                                              </div> */}
                                            </a>
                                          </LinkNew>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              </div>
                              {isActive ? (
                                <Pagination setPage={setPage} page={page} size={listNews.size} />
                              ) : null}
                            </div>
                          </div>
                        </div>                        
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    </>
  );
}

About.propTypes = propTypes;

export default About;
