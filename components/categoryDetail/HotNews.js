import React from 'react';
import { map } from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array,
  title: PropTypes.string
};

function HotNews({ data, title }) {
  return (
    <section className="sec-tb sec-h-4">
      <div className="container">
        <div className="entry-head">
          <h2 className="ht efch-1 ef-img-l">{title}</h2>
        </div>
        <div className="row list-item">
          <div className="col-lg-8 ">
            <div className="list-5 row ">
              {map(data, (hotNews, index) => {
                if (index < 2) {
                  return (
                    <div className="col-md-6" key={index}>
                      <a href={`/news/${hotNews.url}`} className="item efch-0 ef-img-l equal">
                        <div className="img tRes_71">
                          <img
                            className="lazyload"
                            data-lazy-type="image"
                            src={hotNews.base_image}
                          />
                        </div>
                        <div className="divtext">
                          <div className="date">
                            {moment(hotNews.created_at).format('DD/MM/YYYY')}
                          </div>
                          <h4 className="title line2">{hotNews.title}</h4>
                          <div className="desc line2">{hotNews.shortDescription}</div>
                        </div>
                      </a>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="list-6">
              {map(data, (hotNews, index) => {
                if (index > 2) {
                  return (
                    <a href={`/news/${hotNews.url}`} className="item item-inline-table" key={index}>
                      <div className="img">
                        <img className="lazyload" data-lazy-type="image" src={hotNews.base_image} />
                      </div>
                      <div className="divtext">
                        <h4 className="title line4">{hotNews.title}</h4>
                      </div>
                    </a>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
}

HotNews.propTypes = propTypes;

export default HotNews;
