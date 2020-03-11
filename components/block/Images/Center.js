import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  items: PropTypes.object
};

function ImageCenter({ items }) {
  return (
    <section className="sec-tb sec-cskh block-images-center">
      <div className="container">
        <div className="entry-head text-center">
          <h2 className="ht ">{items.note_1}</h2>
          <div className="desc max555">{items.note_2}</div>
          <ul className="efch-3 ef-tx-t">{items.note_3}</ul>
        </div>
        {items.video_url === undefined && (
          <div className="single_video  tRes_16_9 max750">
            <img
              className=" loaded loaded"
              data-lazy-type="image"
              data-lazy-src={items.image}
              src={items.image}
            />
          </div>
        )}
        {items.video_url && (
          <div className="single_video  tRes_16_9 max750">
            <iframe src={items.video_url} />
          </div>
        )}
        {/* {items.text_action !== undefined && (
          <a className="btn lg" href={items.url === undefined ? '#' : items.url}>
            {items.text_action === undefined ? 'Đăng ký ngay' : items.text_action}
          </a>
        )} */}
        {items.text_action === undefined ? (
          ''
        ) : (
          <a className="btn lg" href={items.url === undefined ? '#' : items.url}>
            {items.text_action === undefined ? 'Đăng ký ngay' : items.text_action}
          </a>
        )}
      </div>
    </section>
  );
}

ImageCenter.propTypes = propTypes;

export default ImageCenter;
