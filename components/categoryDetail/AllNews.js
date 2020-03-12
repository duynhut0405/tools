import React from 'react';
import { map } from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array,
  title: PropTypes.string
};

function AllNews({ data, title }) {
  return (
    <section className="sec-tb">
      <div className="container mb-all-news">
        <div className="entry-head">
          <h2 className="ht efch-1 ef-img-l">{title}</h2>
        </div>
        <div className="row">
          <div className="col-sm-12">
            {map(data, (news, index) => (
              <div className="row mb-4" key={index}>
                <div className="col-sm-4">
                  <div className="mb-cate-news-img">
                    <img className="lazy-hidden" data-lazy-type="image" src={news.base_image} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="mb-cate-news-content">
                    <span className="mb-cate-news-date">
                      <i className="icon-date-2"></i>
                      <span>{moment(news.created_at).format('DD/MM/YYYY')}</span>
                    </span>
                    <a href={`/news/${news.url}`}>{news.title}</a>
                    <p>{news.shortDescription}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

AllNews.propTypes = propTypes;

export default AllNews;
