import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.object
};

function SingerPost({ data }) {
  return (
    <div className="block_imege_left mb-5">
      <h2 className="title mb-5">{data.title}</h2>
      <div className="row">
        <div className="col-sm-7">
          <img src={data.news.base_image} alt="icon" />
        </div>
        <div className="col-sm-5">
          <div className="content">
            <div className="date mt-4">
              <p>{moment(data.news.created_at).format('DD-MM-YYYY')}</p>
            </div>
            <p className="title">{data.news.title}</p>
            <p className="show">
              <a href={`/news/${data.news.url}`}>Xem thêm</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

SingerPost.propTypes = propTypes;

export default SingerPost;
