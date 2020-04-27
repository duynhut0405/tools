import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {
  items: PropTypes.object,
  padding: PropTypes.string,
  id: PropTypes.number,
  type: PropTypes.string
};

function ImageCenter({ items, padding, id, type }) {
  const [active, setActive] = useState(false);

  if (!items.background || items.background === '1') {
    return (
      <section className={`${padding} sec-cskh block-images-center block-images-${type}`} id={id}>
        <div className="container">
          <div className="bgvideo loaded">
            <div className="entry-head text-center remove">
              <h2 className="ht">{ReactHtmlParser(items.note_1)}</h2>
              {ReactHtmlParser(items.note_2)}
              {ReactHtmlParser(items.note_3)}
            </div>
            {!active && (
              <div
                className="single_video  tRes_16_9 max750"
                data-id="2UrWPUAr68A"
                data-video="autoplay=1&amp;controls=1&amp;mute=0"
              >
                <img
                  className="lazyload"
                  data-lazy-data-src={`${process.env.DOMAIN}${items.urlImage}`}
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
                    <i className="icon-play"></i>
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
                  data-src={`${items.video_url}?rel=0&autoplay=1`}
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
  if (items.background === '2') {
    return (
      <React.Fragment>
        <section className=" sec-tb sec-cskh-2" id={id}>
          <div className="container">
            <div
              className="bgvideo loaded"
              data-lazy-type="bg"
              data-lazy-data-src="public/images/bg-ab-10.jpg"
              style={{ backgroundImage: `url(/static/images/#f5f4f4.png)` }}
            >
              <div className="entry-head text-center">
                <h2 className="ht">{ReactHtmlParser(items.note_1)}</h2>
                {ReactHtmlParser(items.note_2)}
                {ReactHtmlParser(items.note_3)}
              </div>
              {!active && (
                <div
                  className="single_video  tRes_16_9 max750"
                  data-id="2UrWPUAr68A"
                  data-video="autoplay=1&amp;controls=1&amp;mute=0"
                >
                  <img
                    className="lazyload"
                    data-lazy-data-src={`${process.env.DOMAIN}${items.urlImage}`}
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
                      <i className="icon-play"></i>
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
                    data-src={items.video_url}
                  ></iframe>
                </div>
              )}
              <div className="text-center mt-4">
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
        </section>
      </React.Fragment>
    );
  }
}

ImageCenter.propTypes = propTypes;

export default ImageCenter;
