import React, { useEffect, useState } from 'react';
import { findAllNewsByCategory } from '../../services/news';
import map from 'lodash/map';
import moment from 'moment';
import Proptypes from 'prop-types';
import t from '../../translation';
import { getLang } from '../../utils/cookie';
import { LinkNew, LinkCategory } from '../common/link';

const propTypes = {
  data: Proptypes.object,
  t: Proptypes.func,
  padding: Proptypes.func
};

const getNews = async (id, setData) => {
  const res = await findAllNewsByCategory(id, 0, 5);
  if (res && res !== undefined && res.status === 200) {
    setData(res.data.news);
  }
};

function NewMB({ data, padding }) {
  const [listNews, setListNews] = useState([]);
  const lang = getLang();
  useEffect(() => {
    getNews(data.value, setListNews);
  }, [getNews]);

  return (
    <section className={`${padding} sec-h-4 investors`}>
      <div className="container">
        <div className="entry-head title-padding">
          <h2 className="">{data.label}</h2>
          <LinkCategory lang={lang} name={data.slug}>
            <a className="viewall">
              {t('view')} <i className="icon-arrow-1"></i>
            </a>
          </LinkCategory>
        </div>
        <div className="row list-item">
          <div className="col-lg-8 ">
            <div className="list-5 row ">
              {map(listNews, (news, index) => {
                if (index < 2) {
                  return (
                    <div className="col-md-6" key={index}>
                      <LinkNew lang={lang} name={news.url}>
                        <a className="item efch-2 ef-img-l equal">
                          <div className="img tRes_71">
                            <img
                              className="lazyload"
                              alt="images"
                              data-src={`${process.env.DOMAIN}${news.base_image}`}
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
                      </LinkNew>
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
                    <LinkNew lang={lang} name={news.url} key={index}>
                      <a className="item item-inline-table">
                        <div className="img">
                          <img
                            className="lazyload"
                            alt="images"
                            data-src={`${process.env.DOMAIN}${news.base_image}`}
                          />
                        </div>
                        <div className="divtext">
                          <h4 className="title line4">{news.title}</h4>
                        </div>
                      </a>
                    </LinkNew>
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

export default NewMB;
