import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {
  items: PropTypes.object
};

function ImageCenter({ items }) {
  const [active, setActive] = useState(false);

  if (!items.background || items.background === '1') {
    return (
      <section className="sec-tb sec-cskh block-images-center">
        <div className="container">
          <div className="bgvideo loaded">
            <div className="entry-head text-center">
              {ReactHtmlParser(items.note_1)}
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
                  className=" loaded loaded"
                  data-lazy-type="image"
                  data-lazy-src={items.image}
                  src={items.image}
                  alt=""
                />
                <span
                  className="btnvideo"
                  onClick={() => {
                    if (items.text_action === undefined || items.text_action === '') {
                      setActive(!active);
                    }
                  }}
                >
                  <i className="icon-play"></i>
                </span>
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
                  src={items.video_url}
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
        <section className=" sec-tb sec-cskh-2 ">
          <div className="container">
            <div className="bgvideo loaded">
              <div className="entry-head text-center">
                {ReactHtmlParser(items.note_1)}
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
                    className=" loaded loaded"
                    data-lazy-type="image"
                    data-lazy-src={items.image}
                    src={items.image}
                    alt=""
                  />
                  <span
                    className="btnvideo"
                    onClick={() => {
                      if (items.text_action === undefined || items.text_action === '') {
                        setActive(!active);
                      }
                    }}
                  >
                    <i className="icon-play"></i>
                  </span>
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
                    src={items.video_url}
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

ImageCenter.propTypes = propTypes;

export default ImageCenter;
