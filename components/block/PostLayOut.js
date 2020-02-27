import React, { useState, useEffect } from 'react';
import { slice, map } from 'lodash';
import moment from 'moment';
import Proptypes from 'prop-types';
const propTypes = {
  data: Proptypes.object.isRequired
};

function PostLayOut({ data }) {
  const [page, setPage] = useState(3);
  const [active, setActive] = useState(false);
  const listNews = slice(data.news, 0, 2);
  const listNewsTabs = slice(data.news, 2, 5);
  //   slice(data.news, 0, page)
  useEffect(() => {
    if (listNews.length === data.news.length) {
      setActive(true);
    }
  }, [page]);
  return (
    <section className="sec-tb sec-h-4">
      <div className="container">
        <div className="entry-head">
          <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
          <a className="viewall" href="#">
            Xem tất cả <i className="icon-arrow-1"></i>
          </a>
        </div>
        {/* 2tabs main */}
        <div className="row list-item">
          <div className="col-lg-8 ">
            <div className="list-5 row ">
              {map(listNews, item => (
                <div className="col-md-6">
                  <a href="#" className="item efch-<?php echo $i+1; ?> ef-img-l equal">
                    <div className="img tRes_71">
                      <img className="lazy-hidden" data-lazy-type="image" src={item.base_image} />
                    </div>
                    <div className="divtext">
                      <div className="date">{moment(item.created_at).format('DD-MM-YYYY')}</div>
                      <h4 className="title line2">{item.title}</h4>
                      <div className="desc line2">{item.description}</div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          {/* 3tabs */}
          <div className="col-lg-4">
            {map(listNewsTabs, item => (
              <div className="list-6">
                <a href="#" className="item item-inline-table">
                  <div className="img">
                    <img className="lazy-hidden" data-lazy-type="image" src={item.base_image} />
                  </div>
                  <div className="divtext">
                    <h4 className="title line4">{item.title}</h4>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

PostLayOut.propTypes = propTypes;

export default PostLayOut;
