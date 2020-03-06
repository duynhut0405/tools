import React, { useState } from 'react';
import { map } from 'lodash';
import Proptypes from 'prop-types';
import Carousel from 'react-multi-carousel';

const propTypes = {
  data: Proptypes.array,
  id: Proptypes.number
};

function Icon({ data, id }) {
  const [refCarousel, setRefCarousel] = useState(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <React.Fragment>
      {data[0].type === '1' && (
        <React.Fragment>
          {data.length > 8 && (
            <section className="sec-tb sec-h-1 group-ef block-icon" id={id}>
              <div className="container">
                <div className="entry-head text-center">
                  <h2 className="ht">{data[0].title || ''}</h2>
                </div>
                <div className="sec-b">
                  <div className="menuicon  owl-carousel   s-nav nav-2 owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div className="owl-stage">
                        <Carousel
                          responsive={responsive}
                          draggable
                          minimumTouchDrag={80}
                          ssr={true} // means to render carousel on server-side.
                          infinite={true}
                          keyBoardControl={true}
                          arrows={false}
                          ref={ref => {
                            setRefCarousel(ref);
                          }}
                        >
                          {map(data, (items, index) => (
                            <div className="item ef-img-t item_carousel" key={index}>
                              <a href={items.url} className="link">
                                <div className="img">
                                  <img src={items.image} />
                                </div>
                                <div className="title">{items.note_1}</div>
                              </a>
                            </div>
                          ))}
                        </Carousel>
                      </div>
                    </div>
                    <div className="owl-nav">
                      <div
                        className="owl-prev disabled"
                        onClick={() => {
                          refCarousel.previous();
                        }}
                      >
                        <i className="icon-arrow-1 ix"></i>
                      </div>
                      <div
                        className="owl-next"
                        onClick={() => {
                          refCarousel.next();
                        }}
                      >
                        <i className="icon-arrow-1"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {data.length <= 8 && (
            <section className="sec-tb sec-h-1 group-ef loaded">
              <div className="container">
                <div className="entry-head text-center">
                  <h2 className="ht efch-1 ef-img-t">{data[0].title || ''}</h2>
                </div>
                <div className="menuicon menu_item">
                  {map(data, (items, index) => (
                    <div className={`item  efch-${index + 3} ef-img-t`} key={index}>
                      <a href="#" className="link">
                        <div className="img">
                          <img
                            className=" loaded loaded"
                            data-lazy-type="image"
                            src={items.image}
                          />
                        </div>
                        <div className="title">{items.note_1}</div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </React.Fragment>
      )}
      {data[0].type === '2' && (
        <React.Fragment>
          <section className="sec-b sec-img-svg group-ef loaded" id={id}>
            <div className="container">
              <div className="entry-head text-center">
                <h2 className="ht">{data[0].title || ''}</h2>
              </div>
              <div className="row list-item">
                {map(data, (items, index) => {
                  return (
                    <div className={`col-sm-6 col-md-${data[0].column}`} key={index}>
                      <div className="item">
                        <a href={items.url}>
                          <div className="img ">
                            <img className=" loaded loaded" src={items.image} />
                          </div>
                          <div className="divtext">
                            <h4 className="title">{items.note_1}</h4>
                            <div className="desc">{items.note_2}</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === '3' && (
        <React.Fragment>
          <section className="sec-b ">
            <div className="container">
              <div className="entry-head text-center">
                <h2 className="ht efch-1 ef-img-l">{data[0].title || ''}</h2>
              </div>
              <div
                className="owl-carousel s-nav nav-2 list-9 owl-flex owl-loaded owl-drag"
                data-res="4,3,2,1"
                paramowl="margin=0"
              >
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style="transform: translate3d(-1665px, 0px, 0px); transition: all 0.25s ease 0s; width: 2775px;"
                  >
                    <Carousel
                      responsive={responsive}
                      draggable
                      minimumTouchDrag={80}
                      ssr={true} // means to render carousel on server-side.
                      infinite={true}
                      keyBoardControl={true}
                      arrows={false}
                      ref={ref => {
                        setRefCarousel(ref);
                      }}
                    >
                      {map(data, (items, index) => (
                        <div className="owl-item" style="width: 277.5px;" key={index}>
                          <div className="item efch-2 ef-img-l ">
                            <div className="img ">
                              <img
                                className=" loaded loaded"
                                data-lazy-type="image"
                                src={items.image}
                              />
                            </div>
                            <div className="desc">{items.note_1}</div>
                          </div>
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>
                <div className="owl-nav">
                  <div
                    className="owl-prev disabled"
                    onClick={() => {
                      refCarousel.previous();
                    }}
                  >
                    <i className="icon-arrow-1 ix"></i>
                  </div>
                  <div
                    className="owl-next"
                    onClick={() => {
                      refCarousel.next();
                    }}
                  >
                    <i className="icon-arrow-1"></i>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

Icon.propTypes = propTypes;

export default Icon;
