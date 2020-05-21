import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../../../components/layout';
import { getLang } from '../../../utils/cookie';
import { Pagination } from '../../../components/common';
import { LinkNew, LinkPage } from '../../../components/common/link';
import { searchService } from '../../../services/common';
import { useRouter } from 'next/router';
import t from '../../../translation';
import map from 'lodash/map';

const fetch = async (query, setData) => {
  const res = await searchService(query);
  if (res && res !== undefined && res.status === 200) {
    setData(res.data);
  }
};

function Search() {
  const router = useRouter();
  const [list, setList] = useState([]);
  const [tabActive, setTabActive] = useState(1);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(router.query.q);
  const [type, setType] = useState(null);
  const lang = getLang();

  useEffect(() => {
    fetch({ search: router.query.q, page: page, number: 20, type: null }, setList);
  }, [router.query]);

  const onTab = (tabID, _type) => {
    setTabActive(tabID);
    setType(_type);
    fetch({ search: search, page: page, number: 20, type: _type }, setList);
  };

  const onSubmit = event => {
    event.preventDefault();
    fetch({ search: search, page: page, number: 20, type: type }, setList);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Search</title>
        <meta name="title" content="Search" />
        <meta
          property="og:image"
          itemProp="thumbnaiUrl"
          content={`${process.env.DOMAIN}uploads/resources/files/icon/imgDefault.png`}
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="354" />
      </Head>
      <Layout lang="en" idPage={1}>
        <section id="top-search-result">
          <div className="container">
            <form name="search" className="search-field" autoComplete="off" onSubmit={onSubmit}>
              <button type="submit" name="search-submit" className="icon-search-2"></button>
              <button type="reset" title="Xóa text" className="btn-clear-text icon-close"></button>
              <input
                type="text"
                onChange={event => setSearch(event.target.value)}
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
                    onTab(1, null);
                  }}
                >
                  <span>{t('all')}</span>
                </div>
                <div
                  className={tabActive === 2 ? 'active' : ''}
                  onClick={() => {
                    onTab(2, 'news');
                  }}
                >
                  <span>{t('news')}</span>
                </div>
                <div
                  className={tabActive === 3 ? 'active' : ''}
                  onClick={() => {
                    onTab(3, 'page');
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
                      <span className="total"> {list.count} </span>
                      {t('result')}
                    </p>
                  </div>
                  <div className="tab-inner">
                    <section className="sec-b sec-search-list">
                      {map(list.searchCommons, (news, index) => {
                        return (
                          <div className="search-item" key={index}>
                            {news.type === 'news' ? (
                              <LinkNew lang={lang} name={news.object.url}>
                                <a>
                                  <h3 className="ctext">{news.object.title}</h3>
                                </a>
                              </LinkNew>
                            ) : (
                              <LinkPage lang={lang} name={news.object.slug}>
                                <a>
                                  <h3 className="ctext">{news.object.name}</h3>
                                </a>
                              </LinkPage>
                            )}
                            {news.type === 'news' && <p>{news.object.shortDescription}</p>}
                          </div>
                        );
                      })}
                    </section>
                    <Pagination
                      size={list.size}
                      page={page}
                      setPage={pageNumber => {
                        setPage(pageNumber);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </React.Fragment>
  );
}

export default Search;
