import React, { useState, useEffect } from 'react';
import { map, slice } from 'lodash';
import moment from 'moment';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.object.isRequired
};

function Promotion({ data }) {
  const [page, setPage] = useState(3);
  const [active, setActive] = useState(false);
  const listNews = slice(data.news, 0, data.news.length);
  //   slice(data.news, 0, page)
  useEffect(() => {
    if (listNews.length === data.news.length) {
      setActive(true);
    }
  }, [page]);

  return (
    <section className="sec-tb sec-h-3 ">
      <div className="container">
        <div className="entry-head">
          <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
          <a className="viewall" href="#">
            Xem tất cả <i className="icon-arrow-1"></i>
          </a>
        </div>
        <div
          className="owl-carousel equalHeight s-nav nav-2 list-5"
          data-res="4,3,2,1"
          paramowl="margin=0"
        >
          {map(listNews, item => (
            <a href="#" className="item efch-<?php echo $i+1; ?> ef-img-l equal">
              <div className="img tRes_71">
                <img className="lazy-hidden" data-lazy-type="image" src={item.base_image} />
              </div>
              <div className="divtext">
                <div className="date">{moment(item.created_at).format('DD-MM-YYYY')}</div>
                <h4 className="title">{item.title}</h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

Promotion.propTypes = propTypes;

export default Promotion;
