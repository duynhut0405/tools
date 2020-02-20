import React, { useState } from 'react';
import { map, slice } from 'lodash';
import moment from 'moment';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.object.isRequired
};

function Post({ data }) {
  const [page, setPage] = useState(3);
  const [active, setActive] = useState(false);
  const listNews = slice(data.news, 0, page);

  const showPage = () => {
    if (!active) {
      setPage(page + data.news.length);
    } else {
      setPage(3);
    }
  };
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
        <button
          onClick={() => {
            setActive(!active);
            showPage();
          }}
        >
          {active === false ? 'Xem tất cả' : 'Thu gọn'}
        </button>
      </div>
    </div>
  );
}

Post.propTypes = propTypes;

export default Post;
