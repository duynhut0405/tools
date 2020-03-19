import React, { useState } from 'react';
import { map } from 'lodash';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';

const propTypes = {
  data: PropTypes.object
};

function Card({ data }) {
  const [refCarousel, setRefCarousel] = useState(null);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
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
          <section className="sec-tb bg-gray">
            <div className="container">
              <div className="entry-head ">
                <h2 className="ht efch-1 ef-img-l">{data[0].title}</h2>
              </div>
              <div className="list-10 row list-item">
                {map(data, (items, index) => {
                  return (
                    <div className="col-sm-6" key={index}>
                      <a href="#" className={`item item-${index + 1} tRes_55`}>
                        <div className="divtext">
                          <h3 className="title ">{ReactHtmlParser(items.note_2)}</h3>
                          <i className="icon-arrow-db">
                            <img src="/images/arrow.svg" />
                          </i>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === '2' && (
        <React.Fragment>
          <section className="sec-tb sec-img-svg-2 group-ef loaded">
            <div className="container">
              <div className="entry-head text-left">
                <h2 className="ht">{data[0].title || ''}</h2>
              </div>
              <div className="sec-b">
                <div className="menuicon owl-carousel s-nav nav-2 owl-loaded owl-drag">
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
                            <a
                              href="#"
                              className="link"
                              style={{ backgroundColor: '#F5F4F4', boxShadow: 'none' }}
                            >
                              <div
                                className="img"
                                style={{ textAlign: 'left', paddingLeft: '20px' }}
                              >
                                <img src={items.image} className="loaded loaded" />
                              </div>
                              <div className="divtext" style={{ paddingLeft: '20px' }}>
                                <h3
                                  className="title"
                                  style={{
                                    textAlign: 'left',
                                    color: 'initial',
                                    fontWeight: 'bold',
                                    display: 'block'
                                  }}
                                >
                                  {ReactHtmlParser(items.note_1)}
                                </h3>
                              </div>
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
        </React.Fragment>
      )}
      {data[0].type === '3' && (
        <React.Fragment>
          <section className="sec-tb sec-img-svg-3 group-ef loaded">
            <div className="container">
              <div className="row equalHeight list-item">
                {map(data, (items, index) => {
                  return (
                    <div className={`col-sm-6 col-md-4 efch-2 ef-img-t `}>
                      <div className="item">
                        <div className="divtext" style={{ paddingTop: '29px' }}>
                          <h4 className="title equal" style={{ textAlign: 'center' }}>
                            {ReactHtmlParser(items.note_1)}
                          </h4>
                          <div className="desc" style={{ textAlign: 'center' }}>
                            {ReactHtmlParser(items.note_2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === '4' && (
        <React.Fragment>
          <section className="sec-tb sec-img-svg-3 group-ef loaded">
            <div className="container">
              <div className="row equalHeight list-item">
                {map(data, (items, index) => {
                  return (
                    <div className={`col-sm-6 col-md-4 efch-2 ef-img-t `}>
                      <div className="item">
                        <div className="img ">
                          <img className="loaded loaded" data-lazy-type="image" src={items.image} />
                        </div>
                        <div className="divtext">
                          <h4 className="title equal" style={{ textAlign: 'center' }}>
                            {ReactHtmlParser(items.note_1)}
                          </h4>
                          <div className="desc" style={{ textAlign: 'center' }}>
                            {ReactHtmlParser(items.note_2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === '5' && (
        <React.Fragment>
          <section className="sec-tb ">
            <div className="container">
              <div className="entry-head text-center">
                <h2 className="ht efch-1 ef-img-l">{data[0].title}</h2>
              </div>
              <p className="text-center fs16">{ReactHtmlParser(data[0].note_1)}</p>
              <br />
              <br />
              <br />
              <div className="max950">
                <div className="timeline ">
                  {map(data, (items, index) => {
                    return (
                      <div
                        className={`group-ef loaded  item item-${
                          (index + 1) % 2 === 0 ? '2' : '1'
                        }`}
                      >
                        <div
                          className={`row grid-space-80 center ${
                            (index + 1) % 2 === 0 ? 'end' : ''
                          }`}
                        >
                          <div className="col-md-6 efch-1 ef-img-t">
                            <div className="img">
                              <img className="loaded" data-lazy-type="image" src={items.image} />
                            </div>
                          </div>
                          <div className="col-md-6 ">
                            <span className={index % 2 === 0 ? 'circle' : 'circle1'}></span>
                            <div className="divtext efch-2 ef-tx-t">
                              <h2 className="title">{ReactHtmlParser(items.note_2)}</h2>
                              <div className="desc">{ReactHtmlParser(items.note_3)}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === '6' && (
        <React.Fragment>
          <section className="sec-tb sec-ab-4 ">
            <div className="container">
              <div className="entry-head ">
                {data[0].title && <h2 className="ht efch-1 ef-img-l">{data[0].title}</h2>}
              </div>
              <div className="  row grid-space-20 ">
                {data[0] && (
                  <div className="col-lg-8 col-sm-12  ">
                    <div className="item item-1  ">
                      <div className="img tRes_92">
                        <img className="loaded loaded" data-lazy-type="image" src={data[0].image} />
                      </div>
                      <div className="divtext">
                        <div className="t1">{ReactHtmlParser(data[0].note_1)}</div>
                        <div className="t2">{ReactHtmlParser(data[0].note_2)}</div>
                      </div>
                    </div>
                  </div>
                )}
                {data[1] && (
                  <div className="col-lg-4 col-sm-6">
                    <div className="item item-2  ">
                      <div className="img tRes_92">
                        <img className="loaded loaded" data-lazy-type="image" src={data[1].image} />
                      </div>
                      <div className="divtext">
                        <div className="t1">{ReactHtmlParser(data[1].note_1)}</div>
                        <div className="t2">{ReactHtmlParser(data[1].note_2)}</div>
                      </div>
                    </div>
                  </div>
                )}
                {data[2] && (
                  <div className="col-lg-4 col-sm-6">
                    <div className="item item-2  ">
                      <div className="img tRes_92">
                        <img className="loaded loaded" data-lazy-type="image" src={data[2].image} />
                      </div>
                      <div className="divtext">
                        <div className="t1">{ReactHtmlParser(data[2].note_1)}</div>
                        <div className="t2">{ReactHtmlParser(data[2].note_2)}</div>
                      </div>
                    </div>
                  </div>
                )}
                {data[3] && (
                  <div className="col-lg-4 col-sm-6">
                    <div className="item item-2  ">
                      <div className="img tRes_92">
                        <img className="loaded loaded" data-lazy-type="image" src={data[3].image} />
                      </div>
                      <div className="divtext">
                        <div className="t1">{ReactHtmlParser(data[3].note_1)}</div>
                        <div className="t2">{ReactHtmlParser(data[3].note_2)}</div>
                      </div>
                    </div>
                  </div>
                )}
                {data[4] && (
                  <div className="col-lg-4 col-sm-6">
                    <div className="item item-2  ">
                      <div className="img tRes_92">
                        <img className="loaded loaded" data-lazy-type="image" src={data[4].image} />
                      </div>
                      <div className="divtext">
                        <div className="t1">{ReactHtmlParser(data[4].note_1)}</div>
                        <div className="t2">{ReactHtmlParser(data[4].note_2)}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

Card.propTypes = propTypes;

export default Card;
