import React, { useState, useEffect } from 'react';
import { searchService } from '../../services/common';
import { Pagination } from '../../components/common';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
import debounce from 'lodash/debounce';

const propTypes = {
  query: PropTypes.string,
  t: PropTypes.func
};

const fetch = async (query, setData) => {
  const res = await searchService(query);
  if (res && res !== undefined && res.status === 200) {
    setData(res.data);
  }
};

function SearchResult({ t, query }) {
  const [tabActive, setTabActive] = useState(1);
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(null);
  const [type, setType] = useState(null);

  useEffect(() => {
    setSearch(query);
    fetch({ search: query, page: page, number: 20, type: null }, setData);
  }, [query]);

  useEffect(() => {
    fetch({ search: search, page: page, number: 20, type: type }, setData);
  }, [page, type]);

  const onClose = () => {
    const body = document.getElementsByTagName('body')[0];
    const result = document.getElementById('search-result');
    body.classList.remove('fixed-screen');
    result.style = `display: none`;
    const element = document.getElementById('search');
    const box = document.getElementById('search-sg');
    element.style = 'width: 70px';
    box.style = 'display: none';
    element.placeholder = t('search');
  };

  const onChangeSearch = debounce(value => {
    setSearch(value);
  }, 3000);

  const onSubmit = event => {
    event.preventDefault();
    fetch({ search: search, page: page, number: 20, type: type }, setData);
  };

  return (
    <div id="search-result" style={{ display: 'none' }}>
      <section id="top-search-result">
        <div className="container">
          <a href="/" id="logo">
            <img className="lazyload" src="/images/logo-blue.svg" alt="" />
          </a>
          <span className="icon-close close-sg" onClick={onClose}></span>
          <form name="search" className="search-field" autoComplete="off" onSubmit={onSubmit}>
            <button type="submit" name="search-submit" className="icon-search-2"></button>
            <button type="reset" title="Xóa text" className="btn-clear-text icon-close"></button>
            <input
              type="text"
              onChange={event => onChangeSearch(event.target.value)}
              placeholder="Tìm kiếm ..."
              className="search-input-transparent"
            />
          </form>
        </div>
      </section>

      <section className="sec-tb search-result">
        <div className="container">
          <div className="cttab-v3">
            <div className="tab-menu">
              <div
                className={tabActive === 1 ? 'active' : ''}
                onClick={() => {
                  setTabActive(1);
                  setType(null);
                  setSearch(null);
                }}
              >
                <span>Tất cả</span>
              </div>
              <div
                className={tabActive === 2 ? 'active' : ''}
                onClick={() => {
                  setTabActive(2);
                  setType('news');
                  setSearch(null);
                }}
              >
                <span>Tin tức</span>
              </div>
              <div
                className={tabActive === 3 ? 'active' : ''}
                onClick={() => {
                  setTabActive(3);
                  setType('page');
                  setSearch(null);
                }}
              >
                <span>Sản phẩm</span>
              </div>
            </div>
            <div className="tab-content">
              <div className="active">
                <div className="total-search">
                  <p>
                    Tìm thấy
                    <span className="total"> {20 * data.size} </span>
                    kết quả
                  </p>
                </div>
                <div className="tab-inner">
                  <section className="sec-b sec-search-list">
                    {map(data.searchCommons, (news, index) => {
                      return (
                        <div className="search-item" key={index}>
                          <a
                            href={
                              news.type === 'news'
                                ? `/news/${news.object.url}`
                                : `/page/${news.object.slug}`
                            }
                          >
                            {news.type === 'news' && <h3 className="ctext">{news.object.title}</h3>}
                            {news.type === 'page' && <h3 className="ctext">{news.object.name}</h3>}
                          </a>
                          {news.type === 'news' && <p>{news.object.shortDescription}</p>}
                        </div>
                      );
                    })}
                  </section>
                  <Pagination size={data.size} setPage={pageNumber => setPage(pageNumber)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

SearchResult.propTypes = propTypes;

export default withTranslation('common')(SearchResult);
