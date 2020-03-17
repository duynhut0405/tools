import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {
  items: PropTypes.object
};

function ImageCenter({ items }) {
  return (
    <section className="sec-tb sec-cskh block-images-center">
      <div className="container">
        <div className="entry-head text-center">
          {ReactHtmlParser(items.note_1)}
          {ReactHtmlParser(items.note_2)}
          {ReactHtmlParser(items.note_3)}
        </div>
        {(items.video_url === undefined || items.video_url === '') && (
          <div className="img tRes_66 efch-2 ef-img-r ">
            <img
              className=" loaded loaded"
              data-lazy-type="image"
              data-lazy-src={items.image}
              src={items.image}
            />
          </div>
        )}
        {items.video_url !== undefined && items.video_url !== '' && (
          <div className="single_video  tRes_16_9 max750">
            <iframe src={items.video_url} />
          </div>
        )}
        {/* {items.text_action !== undefined && (
          <a className="btn lg" href={items.url === undefined ? '#' : items.url}>
            {items.text_action === undefined ? 'Đăng ký ngay' : items.text_action}
          </a>
        )} */}
        {items.text_action === undefined || items.text_action === '' ? (
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
