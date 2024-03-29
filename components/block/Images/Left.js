import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
const propTypes = {
  items: PropTypes.object,
  padding: PropTypes.string,
  id: PropTypes.number,
  type: PropTypes.string
};

function ImageLeft({ items, padding, id, type }) {
  const [active, setActive] = useState(false);

  return (
    <section className={`${padding} sec-img-text group-ef loaded block-images-${type}`} id={id}>
      <div className="container">
        <div className="row center">
          <div className="col-lg-6">
            {!active && (
              <div
                className={items.video_url ? 'single_video  tRes_16_9 max750' : ''}
                data-id="2UrWPUAr68A"
                data-video="autoplay=1&amp;controls=1&amp;mute=0"
              >
                <img
                  className="lazyload"
                  data-src={`${process.env.DOMAIN}${items.urlImage}`}
                  alt="images"
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
              <h2 className="ht  efch-1 ef-tx-t ">{ReactHtmlParser(items.note_1)}</h2>
              <p className="desc">
                {ReactHtmlParser(items.note_2)}
                {ReactHtmlParser(items.note_3)}
              </p>
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
