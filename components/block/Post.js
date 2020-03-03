import React, { useState, useEffect } from 'react';
import { map, slice } from 'lodash';
import moment from 'moment';
import Proptypes from 'prop-types';
import { useTranslation } from 'react-i18next';
const propTypes = {
  data: Proptypes.object.isRequired,
  type: Proptypes.number
};

function Post({ data, type }) {
  const [page, setPage] = useState(3);
  const [active, setActive] = useState(false);
  const listNews = slice(data.news, 0, page);

  const { t } = useTranslation();
  //   slice(data.news, 0, page)

  useEffect(() => {
    if (listNews.length === data.news.length) {
      setActive(true);
    }
  }, [page]);
  const showPage = () => {
    setActive(false);
    setPage(page + 3);
    if (active) {
      setPage(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (type === '1') {
    return (
      <div className="post_block mb-5 pt-4 mt-5">
        <div className="title">
          <h2>{data.title}</h2>
        </div>
        <div className="row">
          {map(listNews, item => (
            <div className="col-sm-4 col-md-6 col-lg-4" key={item.newsId}>
              <div className="post_content mb-3">
                <div style={{ height: '230px', width: '100%', overflow: 'hidden' }}>
                  <img src={item.base_image} alt="icon" />
                </div>
                <div className="content">
                  <div className="date mt-4">
                    <p>{moment(item.created_at).format('DD-MM-YYYY')}</p>
                  </div>
                  <p className="title">{item.title}</p>
                  <p className="show">
                    <a href={`/news/${item.url}`}>Xem thêm</a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn">
          <button onClick={() => showPage()}>{active === false ? 'Xem thêm' : 'Thu gọn'}</button>
        </div>
      </div>
    );
  }
  if (type === '3') {
    return (
      <section className="sec-tb sec-h-4">
        <div className="container">
          <div className="entry-head">
            <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
            <a className="viewall" href="#">
              {t('view.viewall')} <i className="icon-arrow-1"></i>
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

  if (type === '4') {
    return (
      <section className="sec-tb sec-h-3 ">
        <div className="container">
          <div className="entry-head">
            <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
            <a className="viewall" href="#">
              {t('view.viewall')}
              <i className="icon-arrow-1"></i>
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
}

Post.propTypes = propTypes;

export default Post;
