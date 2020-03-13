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
                <div className={`silder_content ${item.options} container`}>
                  <p className="text_content1">{ReactHtmlParser(item.note_1)}</p>
                  <p className="text_content2">{item.note_2}</p>
                  <p className="text_content3">{item.note_3}</p>
                  {item.text_action === null ||
                  item.text_action === undefined ||
                  item.text_action === '' ? (
                    ''
                  ) : (
                    <button>
                      <a href={item.url}>{item.text_action}</a>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </React.Fragment>
  );
}

Carousels.propTypes = propType;

export default Carousels;
