import React, { useEffect, useState } from 'react';
import { findAllNewsByCategory } from '../../services/news';
import map from 'lodash/map';
import moment from 'moment';
import Proptypes from 'prop-types';
import t from '../../translation';
import { getLang } from '../../utils/cookie';
import { LinkCategory, LinkNew } from '../common/link';

const propTypes = {
  data: Proptypes.object,
  t: Proptypes.func,
  padding: Proptypes.string
};

const getNews = async (id, setData) => {
  const res = await findAllNewsByCategory(id, 0, 3);
  if (res && res !== undefined && res.status === 200) {
    setData(res.data.news);
  }
};

function MBNotifi({ data, padding }) {
  const [listNews, setListNews] = useState([]);
  const lang = getLang();
  useEffect(() => {
    getNews(data.value, setListNews);
  }, [getNews]);

  return (
    <section className={`${padding} sec-h-4__ sec-tb investors`}>
      <div className="container">
        <div className="entry-head title-padding">
          <h2 className="">{data.label}</h2>
          <LinkCategory lang={lang} name={data.slug}>
            <a className="viewall">
              {t('view')} <i className="icon-arrow-1"></i>
            </a>
          </LinkCategory>
        </div>
        <div className="list-5 list-5-1 row list-item">
          {map(listNews, news => {
            return (
              <div className="col-md-4" key={news.newsId}>
                <LinkNew lang={lang} name={news.url}>
                  <a className="item efch-2 ef-img-l equal">
                    <div className="divtext">
                      <div className="date">{moment(news.created_at).format('DD/MM/YYYY')}</div>
                      <h4 className="title line2">{news.title}</h4>
                      <div className="desc r_f_1_3">{news.shortDescription}</div>
                      <span className="more cl1">{t('look_more')}</span>
                    </div>
                  </a>
                </LinkNew>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

MBNotifi.propTypes = propTypes;

export default MBNotifi;
