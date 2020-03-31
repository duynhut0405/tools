import React, { useEffect, useState } from 'react';
import { findAllNewsByCategory } from '../../services/news';
import Link from 'next/link';
import map from 'lodash/map';
import moment from 'moment';
import Proptypes from 'prop-types';
import { withTranslation } from '../../i18n';

const propTypes = {
  data: Proptypes.object,
  t: Proptypes.func
};

const getNews = async (id, setData) => {
  const res = await findAllNewsByCategory(id, 0, 5);
  if (res && res !== undefined && res.status === 200) {
    setData(res.data.news);
  }
};

function NewMB({ t, data }) {
  const [listNews, setListNews] = useState([]);
  useEffect(() => {
    getNews(data.value, setListNews);
  }, [getNews]);

  return (
    <section className="sec-b sec-h-4">
      <div className="container">
        <div className="entry-head">
          <h2 className="">{data.label}</h2>
          <Link href="/news/category/[...slug]" as={`/news/category/${data.slug}`}>
            <a className="viewall">
              {t('view')} <i className="icon-arrow-1"></i>
            </a>
          </Link>
        </div>
        <div className="row list-item">
          <div className="col-lg-8 ">
            <div className="list-5 row ">
              {map(listNews, (news, index) => {
                if (index < 2) {
                  return (
                    <div className="col-md-6">
                      <Link href="/news/[...slug]" as={`/news/${news.url}`}>
                        <a className="item efch-2 ef-img-l equal">
                          <div className="img tRes_71">
                            <img
                              className=" loaded loaded"
                              data-lazy-type="image"
                              data-lazy-src={news.base_image}
                              src={news.base_image}
                            />
                          </div>
                          <div className="divtext">
                            <div className="date">
                              {moment(news.created_at).format('DD/MM/YYYY')}
                            </div>
                            <h4 className="title line2">{news.title}</h4>
                            <div className="desc line2">{news.shortDescription}</div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="list-6">
              {map(listNews, (news, index) => {
                if (index >= 2) {
                  return (
                    <Link href="/news/[...slug]" as={`/news/${news.url}`}>
                      <a className="item item-inline-table">
                        <div className="img">
                          <img
                            className=" loaded loaded"
                            data-lazy-type="image"
                            data-lazy-src={news.base_image}
                            src={news.base_image}
                          />
                        </div>
                        <div className="divtext">
                          <h4 className="title line4">{news.title}</h4>
                        </div>
                      </a>
                    </Link>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

NewMB.propTypes = propTypes;

export default withTranslation('common')(NewMB);
