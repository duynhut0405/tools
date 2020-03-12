import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  items: PropTypes.object
};

function ImageLeft({ items }) {
  return (
    <section className="sec-tb sec-img-text group-ef loaded">
      <div className="container">
        <div className="row center">
          <div className="col-lg-6">
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
          </div>
          <div className="col-lg-6">
            <div className="divtext entry-content">
              <h2 className="ht  efch-1 ef-tx-t ">{items.note_1}</h2>
              <p className="fs16">
                <strong>{items.note_2}</strong>
              </p>
              <ul className="efch-3 ef-tx-t">{items.note_3}</ul>
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
          </div>
        </div>
      </div>
    </section>
  );
}

ImageLeft.propTypes = propTypes;

export default ImageLeft;
