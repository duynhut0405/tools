import React, { useEffect, useState } from 'react';
import { map } from 'lodash';
import moment from 'moment';
import Stock from './Stock';
import { getNewCategoryIdService } from '../../services/news';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array,
  category: PropTypes.object,
  getNews: PropTypes.func
};

const getNews = async (id, setData) => {
  const res = await getNewCategoryIdService(id);
  if (res && res !== undefined && res.status === 200) {
    setData(res.data);
  }
};

function News({ category }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (category !== null) {
      getNews(category.value, setData);
    }
  }, [getNews]);
  return (
    <section className="sec-tb">
      <div className="container">
        <div className="list-5 row list-item">
          {map(data, (item, index) => {
            if (index < 2) {
              return (
                <div className="col-md-4" key={index}>
                  <a href={`/news/${item.url}`} className="item efch-2 ef-img-l ">
                    <div className="img tRes_71">
                      <img
                        className=" loaded loaded"
                        data-lazy-type="image"
                        data-lazy-src={item.base_image}
                        src={item.base_image}
                      />
                    </div>
                    <div className="divtext">
                      <div className="date">{moment(item.created_at).format('DD-MM-YYYY')}</div>
                      <h4 className="title line2">{item.title}</h4>
                      <div className="desc line2">{item.shortDescription}</div>
                    </div>
                  </a>
                </div>
              );
            }
            return null;
          })}
          <Stock />
        </div>
        <div className="list-5 row list-item">
          {map(data, (item, index) => {
            if (index >= 2 && index < 6) {
              return (
                <div className="col-md-3" key={index}>
                  <a href={`/news/${item.url}`} className="item efch-3 ef-img-l ">
                    <div className="divtext">
                      <div className="date">{moment(item.created_at).format('DD-MM-YYYY')}</div>
                      <h4 className="title line2">{item.title}</h4>
                      <div className="desc line3">{item.shortDescription}</div>
                    </div>
                  </a>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
}

News.propTypes = propTypes;

export default News;
