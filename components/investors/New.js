import React, { useEffect, useState } from 'react';
import { map } from 'lodash';
import moment from 'moment';
import Stock from './Stock';
import { getNewCategoryIdService } from '../../services/news';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import t from '../../translation';
import { getLang } from '../../utils/cookie';
import { LinkNew } from '../common/link';

const propTypes = {
  data: PropTypes.array,
  category: PropTypes.object,
  getNews: PropTypes.func,
  padding: PropTypes.string
};

const getNews = async (id, setData) => {
  const res = await getNewCategoryIdService(id);
  if (res && res !== undefined && res.status === 200) {
    setData(res.data);
  }
};

function News({ category, padding }) {
  const [data, setData] = useState([]);
  const lang = getLang();
  useEffect(() => {
    if (category !== null) {
      getNews(category.value, setData);
    }
  }, [getNews]);
  return (
    <section className={`${padding} investors`}>
      <div className="container">
        <div className="entry-head text-center">
          <h2 className="ht efch-1 ef-img-t">{t('update_mb')}</h2>
        </div>
        <div className="list-5 row list-item">
          {map(data, (item, index) => {
            if (index < 2) {
              return (
                <div className="col-md-4" key={index}>
                  <LinkNew lang={lang} name={item.url}>
                    <a className="item efch-2 ef-img-l ">
                      <div className="img tRes_71">
                        <img
                          className="lazyload"
                          alt="images"
                          data-src={`${process.env.DOMAIN}${item.base_image}`}
                        />
                      </div>
                      <div className="divtext">
                        <div className="date">{moment(item.created_at).format('DD-MM-YYYY')}</div>
                        <h4 className="title line2">{item.title}</h4>
                        <div className="desc line2">{ReactHtmlParser(item.shortDescription)}</div>
                      </div>
                    </a>
                  </LinkNew>
                </div>
              );
            }
            return null;
          })}
          <Stock />
        </div>
      </div>
    </section>
  );
}

News.propTypes = propTypes;

export default News;
