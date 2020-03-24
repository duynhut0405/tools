import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
const propTypes = {
  items: PropTypes.object
};

function ImageLeft({ items }) {
  const [active, setActive] = useState(false);

  return (
    <section className="sec-tb sec-img-text group-ef loaded">
      <div className="container">
        <div className="row center">
          <div className="col-lg-6">
            {/* {(items.video_url === undefined || items.video_url === '') && (
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
            )} */}
            {!active && (
              <div
                className={items.video_url ? 'single_video  tRes_16_9 max750' : ''}
                data-id="2UrWPUAr68A"
                data-video="autoplay=1&amp;controls=1&amp;mute=0"
              >
                <img
                  className=" loaded loaded"
                  data-lazy-type="image"
                  data-lazy-src={items.image}
                  src={items.image}
                  alt=""
                />
                {items.video_url !== undefined && (
                  <span
                    className="btnvideo"
                    onClick={() => {
                      setActive(!active);
                    }}
                  >
                    {items.video_url !== undefined ||
                    items.video_url !== '' ||
                    items.video_url !== null ? (
                      <i className="icon-play"></i>
                    ) : (
                      ''
                    )}
                  </span>
                )}
              </div>
            )}
            {active && (
              <div
                className="single_video  tRes_16_9 max750"
                data-id="2UrWPUAr68A"
                data-video="autoplay=1&amp;controls=1&amp;mute=0"
              >
                <iframe
                  frameBorder="0"
                  allowFullScreen="1"
                  allow="autoplay; encrypted-media;"
                  src={`${items.video_url}?rel=0&autoplay=1`}
                ></iframe>
              </div>
            )}
          </div>
          <div className="col-lg-6">
            <div className="divtext entry-content">
              {ReactHtmlParser(items.note_1)}
              {ReactHtmlParser(items.note_2)}
              {ReactHtmlParser(items.note_3)}
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
