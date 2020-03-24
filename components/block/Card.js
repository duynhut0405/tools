import React, { useState } from 'react';
import { map } from 'lodash';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';

const propTypes = {
  data: PropTypes.array
};

function Card({ data, type }) {
  const [refCarousel, setRefCarousel] = useState(null);
  const [refCarouselTwo, setRefCarouselTwo] = useState(null);
  const [refCarouselThree, setRefCarouselThree] = useState(null);
  const [active, setActive] = useState(false);
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
  const responsiveTwo = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  console.log(data);
  return (
    <React.Fragment>
      {type === '1' && (
        <React.Fragment>
          <section className="sec-tb bg-gray">
            <div className="container">
              <div className="entry-head ">
                <h2 className="ht efch-1 ef-img-l">{data === null ? '' : data.title}</h2>
              </div>
              <div className="list-10 row list-item">
                {map(data.listCard, (items, index) => {
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
      {type === '2' && (
        <React.Fragment>
          <section className="sec-tb sec-img-svg-2 group-ef loaded">
            <div className="container">
              <div className="entry-head text-left">
                <h2 className="ht">{data.title || ''}</h2>
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
                        {map(data.listCard, (items, index) => (
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
      {type === '3' && (
        <React.Fragment>
          <section className="sec-tb sec-img-svg-3 group-ef loaded">
            <div className="container">
              <div className="row equalHeight list-item">
                {map(data.listCard, (items, index) => {
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
      {type === '4' && (
        <React.Fragment>
          <section className="sec-tb sec-img-svg-3 group-ef loaded">
            <div className="container">
              <div className="row equalHeight list-item">
                {map(data.listCard, (items, index) => {
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
      {type === '5' && (
        <React.Fragment>
          <section className="sec-tb ">
            <div className="container">
              <div className="entry-head text-center">
                <h2 className="ht efch-1 ef-img-l">{data === null ? '' : data.title}</h2>
              </div>
              <p className="text-center fs16">{ReactHtmlParser(data.note_1)}</p>
              <br />
              <br />
              <br />
              <div className="max950">
                <div className="timeline ">
                  {map(data.listCard, (items, index) => {
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
      {type === '6' && (
        <React.Fragment>
          <section className="sec-tb sec-ab-4 ">
            <div className="container">
              <div className="entry-head ">
                {data.title && (
                  <h2 className="ht efch-1 ef-img-l">{data === null ? '' : data.title}</h2>
                )}
              </div>
              <div className="  row grid-space-20 ">
                {data.listCard[0] ? (
                  <div className="col-lg-8 col-sm-12  ">
                    <div className="item item-1  ">
                      <div className="img tRes_92">
                        <img
                          className="loaded loaded"
                          data-lazy-type="image"
                          src={data.listCard[0].image}
                        />
                      </div>
                      <div className="divtext">
                        <div className="t1">{ReactHtmlParser(data.listCard[0].note_1)}</div>
                        <div className="t2">{ReactHtmlParser(data.listCard[0].note_2)}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {data.listCard[1] ? (
                  <div className="col-lg-4 col-sm-6">
                    <div className="item item-2  ">
                      <div className="img tRes_92">
                        <img
                          className="loaded loaded"
                          data-lazy-type="image"
                          src={data.listCard[1].image}
                        />
                      </div>
                      <div className="divtext">
                        <div className="t1">{ReactHtmlParser(data.listCard[1].note_1)}</div>
                        <div className="t2">{ReactHtmlParser(data.listCard[1].note_2)}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {data.listCard[2] ? (
                  <div className="col-lg-4 col-sm-6">
                    <div className="item item-2  ">
                      <div className="img tRes_92">
                        <img
                          className="loaded loaded"
                          data-lazy-type="image"
                          src={data.listCard[2].image}
                        />
                      </div>
                      <div className="divtext">
                        <div className="t1">{ReactHtmlParser(data.listCard[2].note_1)}</div>
                        <div className="t2">{ReactHtmlParser(data.listCard[2].note_2)}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {data.listCard[3] ? (
                  <div className="col-lg-4 col-sm-6">
                    <div className="item item-2  ">
                      <div className="img tRes_92">
                        <img
                          className="loaded loaded"
                          data-lazy-type="image"
                          src={data.listCard[3].image}
                        />
                      </div>
                      <div className="divtext">
                        <div className="t1">{ReactHtmlParser(data.listCard[3].note_1)}</div>
                        <div className="t2">{ReactHtmlParser(data.listCard[3].note_2)}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {data.listCard[4] ? (
                  <div className="col-lg-4 col-sm-6">
                    <div className="item item-2  ">
                      <div className="img tRes_92">
                        <img
                          className="loaded loaded"
                          data-lazy-type="image"
                          src={data.listCard[4].image}
                        />
                      </div>
                      <div className="divtext">
                        <div className="t1">{ReactHtmlParser(data.listCard[4].note_1)}</div>
                        <div className="t2">{ReactHtmlParser(data.listCard[4].note_2)}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {type === '7' && (
        <React.Fragment>
          <div className="sec-b sec-img-svg-4">
            <div className="container">
              <h2 className="ht">{data === null ? '' : data.title}</h2>
              <div className="row list-item">
                {map(data.listCard, (items, index) => {
                  return (
                    <div className="col-sm-4 efch-2 ef-img-t ">
                      <a className="item" href={items.url}>
                        <div className="img ">
                          <img className="loaded loaded" data-lazy-type="image" src={items.image} />
                        </div>
                        <div className="divtext">
                          <h4 className="title">{ReactHtmlParser(items.note_1)}</h4>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
      {type === '8' && (
        <React.Fragment>
          <section className=" sec-b sec-cauhoi ">
            <div className="container">
              <div className="entry-head">
                <h2 className="ht ">{data === null ? '' : data.title}</h2>
              </div>
              <div className="accodion accodion-1">
                <div className="accodion-tab ">
                  <input type="checkbox" checked={active} />
                  <label className="accodion-title" onClick={() => setActive(!active)}>
                    <span>{data.description}</span>
                    <span className="triangle">
                      <i className="icon-plus"></i>
                    </span>
                  </label>
                  <div className="accodion-content entry-content">
                    <div className="owl-carousel equalHeight s-nav nav-2 list-5 owl-loaded owl-drag ">
                      <div className="owl-stage-outer">
                        <div className="owl-stage">
                          <Carousel
                            responsive={responsiveTwo}
                            draggable
                            minimumTouchDrag={80}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            keyBoardControl={true}
                            arrows={false}
                            ref={ref => {
                              setRefCarouselTwo(ref);
                            }}
                          >
                            {map(data.listCard, (items, index) => (
                              <div className="item ef-img-t item_carousel" key={index}>
                                <a href={items.url} className="link">
                                  <div className="img">
                                    <img src={items.image} />
                                  </div>
                                  <div className="divtext">
                                    <h4 className="title line2">{items.note_1}</h4>
                                    <div className="desc line2 cl3">{items.note_2}</div>
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
                            refCarouselTwo.previous();
                          }}
                        >
                          <i className="icon-arrow-1 ix"></i>
                        </div>
                        <div
                          className="owl-next"
                          onClick={() => {
                            refCarouselTwo.next();
                          }}
                        >
                          <i className="icon-arrow-1"></i>
                        </div>
                      </div>
                      <div className="owl-dots disabled"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {type === '9' && (
        <React.Fragment>
          <section className="sec-b sec-img-svg-2 group-ef loaded">
            <div className="container">
              <div className="row list-item">
                {map(data.listCard, (items, index) => {
                  return (
                    <div className="col-sm-4 efch-2 ef-img-t ">
                      <a className="item" href="#" style={{ padding: '40px 10px' }}>
                        <div className="img ">
                          <img className="loaded loaded" data-lazy-type="image" src={items.image} />
                        </div>
                        <div className="divtext">
                          <h4 className="title">{items.description}</h4>
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
      {type === '10' && (
        <React.Fragment>
          <section className=" sec-b sec-cauhoi ">
            <div className="container">
              <div className="entry-head">
                <h2 className="ht ">{data === null ? '' : data.title}</h2>
              </div>
              <div className="accodion-content entry-content">
                <div className="owl-carousel equalHeight s-nav nav-2 list-5 owl-loaded owl-drag ">
                  <div className="owl-stage-outer">
                    <div className="owl-stage">
                      <Carousel
                        responsive={responsiveTwo}
                        draggable
                        minimumTouchDrag={80}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        keyBoardControl={true}
                        arrows={false}
                        ref={ref => {
                          setRefCarouselThree(ref);
                        }}
                      >
                        {map(data.listCard, (items, index) => (
                          <div className="item ef-img-t item_carousel" key={index}>
                            <a href={items.url} className="link">
                              <div className="img">
                                <img src={items.image} />
                              </div>
                              <div className="divtext">
                                <h4 className="title line2">{items.note_1}</h4>
                                <div className="desc line2 cl3">{items.note_2}</div>
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
                        refCarouselThree.previous();
                      }}
                    >
                      <i className="icon-arrow-1 ix"></i>
                    </div>
                    <div
                      className="owl-next"
                      onClick={() => {
                        refCarouselThree.next();
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
    </React.Fragment>
  );
}

Card.propTypes = propTypes;

export default Card;
