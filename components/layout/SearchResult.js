import React, { useState, useEffect } from 'react';
import { searchService } from '../../services/common';
import { Pagination } from '../../components/common';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { getLang } from '../../utils/cookie';
import { LinkNew, LinkPage } from '../common/link';
import Link from 'next/link';
import t from '../../translation';

const propTypes = {
  query: PropTypes.string,
  t: PropTypes.func
};

const fetch = async (query, setData) => {
  //
  const res = await searchService(query);
  if (res && res !== undefined && res.status === 200) {
    setData(res.data);
  }
};

function SearchResult({ query, isSearch }) {
  const [tabActive, setTabActive] = useState(1);
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(null);
  const [type, setType] = useState(null);
  const lang = getLang();

  useEffect(() => {
    if (query !== null) {
      setSearch(query);
      fetch({ search: query, page: page, number: 20, type: null }, setData);
    }
  }, [query]);

  useEffect(() => {
    if (isSearch) {
      fetch({ search: search, page: page, number: 20, type: type }, setData);
    }
  }, [page, type, search, isSearch]);

  const onClose = () => {
    const result = document.getElementById('search-result');
    result.style = `display: none`;
    const element = document.getElementById('search');
    const box = document.getElementById('search-sg');
    element.style = 'width: 70px';
    box.style = 'display: none';
    element.placeholder = t('search');
  };

  const onChangeSearch = debounce(value => {
    setSearch(value);
  }, 500);

  const onSubmit = event => {
    event.preventDefault();
    fetch({ search: search, page: page, number: 20, type: type }, setData);
  };
  return (
    <div id="search-result" style={{ display: 'none' }}>
      <section id="top-search-result">
        <div className="container">
          {lang === 'en' && (
            <span onClick={onClose}>
              <a id="logo">
                <a id="logo">
                  <img className="lazyload" data-src="/images/logo-blue.svg" alt="images" />
                </a>
              </a>
            </span>
          )}
          {lang === 'vi' && (
            <span onClick={onClose}>
              <a id="logo">
                <img className="lazyload" data-src="/images/logo-blue.svg" alt="images" />
              </a>
            </span>
          )}
          <span className="icon-close close-sg" onClick={onClose}></span>
          <form name="search" className="search-field" autoComplete="off" onSubmit={onSubmit}>
            <button type="submit" name="search-submit" className="icon-search-2"></button>
            <button type="reset" title="Xóa text" className="btn-clear-text icon-close"></button>
            <input
              type="text"
              onChange={event => onChangeSearch(event.target.value)}
              placeholder={t('search')}
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
                  setSearch(search);
                }}
              >
                <span>{t('all')}</span>
              </div>
              <div
                className={tabActive === 2 ? 'active' : ''}
                onClick={() => {
                  setTabActive(2);
                  setType('news');
                  setSearch(search);
                }}
              >
                <span>{t('news')}</span>
              </div>
              <div
                className={tabActive === 3 ? 'active' : ''}
                onClick={() => {
                  setTabActive(3);
                  setType('page');
                  setSearch(search);
                }}
              >
                <span>{t('product')}</span>
              </div>
            </div>
            <div className="tab-content">
              <div className="active">
                <div className="total-search">
                  <p>
                    {t('find')}
                    <span className="total"> {data.count} </span>
                    {t('result')}
                  </p>
                </div>
                <div className="tab-inner">
                  <section className="sec-b sec-search-list">
                    {map(data.searchCommons, (news, index) => {
                      return (
                        <div className="search-item" key={index}>
                          {news.type === 'news' ? (
                            <LinkNew lang={lang} name={news.object.url}>
                              <a onClick={onClose}>
                                <h3 className="ctext">{news.object.title}</h3>
                              </a>
                            </LinkNew>
                          ) : (
                            <LinkPage lang={lang} name={news.object.slug}>
                              <a onClick={onClose}>
                                <h3 className="ctext">{news.object.name}</h3>
                              </a>
                            </LinkPage>
                          )}
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

export default SearchResult;
