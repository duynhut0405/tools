import React, { useState } from 'react';
import { map, isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Carousel } from 'react-responsive-carousel';

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
          <div className={className} style={{ boxShadow: '0px 2px 26px 0px rgba(0,0,0,0.09)' }}>
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
                  <a href={item.url === undefined ? '#' : item.url}>
                    <img src={item.image} alt="icon" />
                  </a>
                  <div className={`divtext ${item.options}`}>
                    <h1 className=" efch-2 ef-img-l line2">{ReactHtmlParser(item.note_1)}</h1>
                    <div className="text_content2">{ReactHtmlParser(item.note_2)}</div>
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
