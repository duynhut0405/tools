import React, { useState } from 'react';
import { map, isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Carousel } from 'react-responsive-carousel';
import Slider from 'react-rangeslider';

const propType = {
  silder: PropTypes.array.isRequired,
  className: PropTypes.string
};

function Carousels({ silder, className }) {
  const getItems = (index, item) => {
    const url = item.props.children[0].props.href;
    window.location.href = url;
  };
  return (
    <React.Fragment>
      {!isEmpty(silder) && (
        <section className=" banner-heading-1 home next-shadow">
          <div className={className}>
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              onClickItem={getItems}
              emulateTouch
              showIndicators={false}
            >
              {map(silder, (item, index) => (
                <div key={index} className="silder_items">
                  <a className="br" href={item.url === undefined ? '#' : item.url}>
                    <img src={item.image} alt="icon" />
                  </a>
                  <div className="container">
                    <div className={`divtext text-${item.options}-mg `}>
                      <h1 className=" efch-2 ef-img-l">{ReactHtmlParser(item.note_1)}</h1>
                      <p className="cl1">{ReactHtmlParser(item.note_2)}</p>
                      <div className="text_content3">{item.note_3}</div>
                      {item.text_action === null ||
                      item.text_action === undefined ||
                      item.text_action === '' ? (
                        ''
                      ) : (
                        <button>
                          <a
                            href={
                              item.url === null || item.url === undefined || item.url === ''
                                ? '#'
                                : item.url
                            }
                          >
                            {item.text_action}
                          </a>
                        </button>
                      )}
                      {item.video_url !== undefined && item.video_url !== '' && (
                        <div>
                          <iframe src={item.video_url} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      )}
    </React.Fragment>
  );
}

Carousels.propTypes = propType;

export default Carousels;
