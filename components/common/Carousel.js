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
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 }
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 }
    },
    mobile: {
      breakpoint: { max: 464, min: 0 }
    }
  };
  return (
    <React.Fragment>
      {!isEmpty(silder) && (
        <section className=" banner-heading-1 home next-shadow">
          {/* <div className="container"> */}
          <div className={className} style={{ boxShadow: '0px 2px 26px 0px rgba(0,0,0,0.09)' }}>
            <Carousel
              // responsive={responsive}
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              onClickItem={getItems}
              emulateTouch
              showIndicators={false}
            >
              {map(silder, (item, index) => (
                <div
                  className="container"
                  style={{
                    maxWidth: '100%',
                    backgroundColor: 'white',
                    backgroundImage: `url(${item.image})`,
                    backgroundPosition: 'top right',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                  }}
                >
                  <div key={index} className="silder_items">
                    <a href={item.url === undefined ? '#' : item.url}>
                      {/* <img src={item.image} alt="icon" /> */}
                    </a>
                    <div className={`divtext ${item.options}`}>
                      <h1 className=" efch-2 ef-img-l line2">{ReactHtmlParser(item.note_1)}</h1>
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
                </div>
              ))}
            </Carousel>
          </div>
          {/* </div> */}
        </section>
      )}
    </React.Fragment>
  );
}

Carousels.propTypes = propType;

export default Carousels;
