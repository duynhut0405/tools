import React, { useState, useEffect } from 'react';
import { slice } from 'lodash';
import moment from 'moment';
import Proptypes from 'prop-types';
const propTypes = {
  data: Proptypes.object.isRequired
};

function PostLayOut({ data }) {
  const [page, setPage] = useState(3);
  const [active, setActive] = useState(false);
  const listNews = slice(data.news, 0, page);
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
          <h2 className="ht efch-1 ef-img-l">Bạn cần biết</h2>
          <a className="viewall" href="#">
            Xem tất cả <i className="icon-arrow-1"></i>
          </a>
        </div>

        <div className="row list-item">
          <div className="col-lg-8 ">
            <div className="list-5 row ">
              {data.news[0] ? (
                <div className="col-md-6">
                  <a href="#" className="item efch-<?php echo $i+1; ?> ef-img-l equal">
                    <div className="img tRes_71">
                      <img
                        className="lazy-hidden"
                        data-lazy-type="image"
                        src={data.news[0].base_image}
                      />
                    </div>
                    <div className="divtext">
                      <div className="date">
                        {moment(data.news[0].created_at).format('DD-MM-YYYY')}
                      </div>
                      <h4 className="title line2">{data.news[0].title}</h4>
                      <div className="desc line2">{data.news[0].description}</div>
                    </div>
                  </a>
                </div>
              ) : (
                ''
              )}

              {data.news[1] ? (
                <div className="col-md-6">
                  <a href="#" className="item efch-<?php echo $i+1; ?> ef-img-l equal">
                    <div className="img tRes_71">
                      <img
                        className="lazy-hidden"
                        data-lazy-type="image"
                        src={data.news[1].base_image}
                      />
                    </div>
                    <div className="divtext">
                      <div className="date">
                        {moment(data.news[1].created_at).format('DD-MM-YYYY')}
                      </div>
                      <h4 className="title line2">{data.news[1].title}</h4>
                      <div className="desc line2">{data.news[1].description}</div>
                    </div>
                  </a>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>

          <div className="col-lg-4">
            {data.news[2] ? (
              <div className="list-6">
                <a href="#" className="item item-inline-table">
                  <div className="img">
                    <img
                      className="lazy-hidden"
                      data-lazy-type="image"
                      src={data.news[2].base_image}
                    />
                  </div>
                  <div className="divtext">
                    <h4 className="title line4">{data.news[2].title}</h4>
                  </div>
                </a>
              </div>
            ) : (
              ''
            )}
            {data.news[3] ? (
              <div className="list-6">
                <a href="#" className="item item-inline-table">
                  <div className="img">
                    <img
                      className="lazy-hidden"
                      data-lazy-type="image"
                      src={data.news[3].base_image}
                    />
                  </div>
                  <div className="divtext">
                    <h4 className="title line4">{data.news[3].title}</h4>
                  </div>
                </a>
              </div>
            ) : (
              ''
            )}
            {data.news[4] ? (
              <div className="list-6">
                <a href="#" className="item item-inline-table">
                  <div className="img">
                    <img
                      className="lazy-hidden"
                      data-lazy-type="image"
                      src={data.news[4].base_image}
                    />
                  </div>
                  <div className="divtext">
                    <h4 className="title line4">{data.news[4].title}</h4>
                  </div>
                </a>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

PostLayOut.propTypes = propTypes;

export default PostLayOut;
