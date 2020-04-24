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

  const responsive1 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
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

  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  let padding = '';
  if (data[0].optionWidth === '2') {
    padding = 'sec-tb';
  } else if (data[0].optionWidth === '3') {
    padding = 'sec-t';
  } else if (data[0].optionWidth === '4') {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }

  return (
    <React.Fragment>
      {data[0].type === '1' && (
        <React.Fragment>
          {data.length > 8 && (
            <section className={`${padding} sec-h-1 group-ef block-icon-${data[0].type}`} id={id}>
              <div className="container">
                <div className="entry-head text-center">
                  <h2 className="ht">{data === null ? '' : data[0].title}</h2>
                </div>
                <div className="sec-b wrap-carousel">
                  <Carousel
                    responsive={responsive}
                    draggable
                    minimumTouchDrag={80}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    className="menuicon"
                    arrows={false}
                    ref={ref => {
                      setRefCarousel(ref);
                    }}
                  >
                    {map(data, (items, index) => (
                      <div className="item ef-img-t item_carousel" key={index}>
                        <a href={items.url} className="link">
                          <div className="img">
                            <img
                              className="lazyload"
                              alt="icon"
                              src={`${process.env.DOMAIN}${items.urlImage}`}
                            />
                          </div>
                          <div className="title">{items.note_1}</div>
                        </a>
                      </div>
                    ))}
                  </Carousel>
                  <div className="carousel-nav center">
                    <div
                      className="carousel-prev "
                      onClick={() => {
                        refCarousel.previous();
                      }}
                    >
                      <i className="icon-arrow-1 ix"></i>
                    </div>
                    <div
                      className="carousel-next"
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
          )}
          {data.length <= 8 && (
            <section className={`${padding} sec-h-1  loaded block-icon-${data[0].type}`} id={id}>
              <div className="container">
                <div className="entry-head text-center">
                  <h2 className="ht efch-1 ef-img-t">{data === null ? '' : data[0].title}</h2>
                </div>
                <div className="menuicon">
                  {map(data, (items, index) => (
                    <div className={`item  efch-${index + 3} ef-img-t`} key={index}>
                      <a href={items.url} className="link">
                        <div className="img">
                          <img
                            className="lazyload"
                            data-lazy-type="image"
                            alt="images"
                            data-lazy-src={`${process.env.DOMAIN}${items.urlImage}`}
                            src={`${process.env.DOMAIN}${items.urlImage}`}
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
          <section
            className={`${padding} sec-img-svg group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="container">
              <div className="entry-head text-center">
                <h2 className="ht">{data === null ? '' : data[0].title}</h2>
              </div>
              <div className="row list-item">
                {map(data, (items, index) => {
                  return (
                    <div className={`col-sm-6 col-md-${data[0].column}`} key={index}>
                      <div className="item">
                        <a href={items.url}>
                          <div className="img">
                            <img
                              className="lazyload"
                              alt="images"
                              src={`${process.env.DOMAIN}${items.urlImage}`}
                            />
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
          <section className={`${padding} sec-h-3 block-icon-${data[0].type}`} id={id}>
            <div className="container">
              <div className="entry-head">
                <h2 className="ht efch-1 ef-img-t">{data === null ? '' : data[0].title}</h2>
              </div>
              <div className="sec-b wrap-carousel">
                <Carousel
                  responsive={responsive1}
                  draggable
                  minimumTouchDrag={80}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  keyBoardControl={true}
                  className="list-9"
                  arrows={false}
                  renderButtonGroupOutside={true}
                  ref={ref => {
                    setRefCarousel(ref);
                  }}
                >
                  {map(data, (item, index) => (
                    <div className={`item efch-${index + 2} ef-img-l `} key={index}>
                      <a href={item.url}>
                        <div className="img">
                          <img
                            className="lazyload"
                            data-lazy-type="image"
                            alt="images"
                            src={`${process.env.DOMAIN}${item.urlImage}`}
                            style={{ width: '160px', height: '52px' }}
                          />
                        </div>
                        <div className="des">{item.note_1}</div>
                      </a>
                    </div>
                  ))}
                </Carousel>
                <div className="carousel-nav center">
                  <div
                    className="carousel-prev "
                    onClick={() => {
                      refCarousel.previous();
                    }}
                  >
                    <i className="icon-arrow-1 ix"></i>
                  </div>
                  <div
                    className="carousel-next"
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
      {data[0].type === '4' && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg-2 group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="container">
              <div className="entry-head">
                <h2 className="ht">{data === null ? '' : data[0].title}</h2>
              </div>
              <div className="row list-item">
                {map(data, (items, index) => {
                  return (
                    <div className="col-sm-4 efch-2 ef-img-t" key={index}>
                      <a className="item" href={items.url} style={{ padding: '40px 10px' }}>
                        <div className="img ">
                          <img
                            className="lazyload"
                            data-lazy-type="image"
                            alt="images"
                            src={`${process.env.DOMAIN}${items.urlImage}`}
                          />
                        </div>
                        <div className="divtext">
                          <h4 className="title">{items.note_2}</h4>
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
      {data[0].type === '5' && (
        <React.Fragment>
          <div className={`${padding} sec-img-svg-4 block-icon-${data[0].type}`} id={id}>
            <div className="container">
              <div className="entry-head">
                <h2 className="ht">{data === null ? '' : data[0].title}</h2>
              </div>
              <div className="row list-item">
                {map(data, (items, index) => {
                  return (
                    <div className="col-sm-4 efch-2 ef-img-t" key={index}>
                      <a className="item" href={items.url}>
                        <div className="img ">
                          <img
                            className="lazyload"
                            data-lazy-type="image"
                            alt="images"
                            src={`${process.env.DOMAIN}${items.urlImage}`}
                          />
                        </div>
                        <div className="divtext">
                          <h4 className="title">{items.note_2}</h4>
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
      {data[0].type === '6' && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg-2 group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="container">
              <div className="entry-head text-left">
                <h2 className="ht">{data === null ? '' : data[0].title}</h2>
              </div>
              <div className="sec-b wrap-carousel">
                <Carousel
                  responsive={responsive2}
                  draggable
                  minimumTouchDrag={80}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  keyBoardControl={true}
                  arrows={false}
                  className="menuicon"
                  ref={ref => {
                    setRefCarousel(ref);
                  }}
                >
                  {map(data, (items, index) => (
                    <div className="item ef-img-t item_carousel" key={index}>
                      <a
                        href={items.url}
                        className="link"
                        style={{ backgroundColor: '#F5F4F4', boxShadow: 'none' }}
                      >
                        <div className="img" style={{ textAlign: 'left', paddingLeft: '20px' }}>
                          <img
                            src={`${process.env.DOMAIN}${items.urlImage}`}
                            className="lazyload"
                            alt="images"
                          />
                        </div>
                        <div className="divtext" style={{ paddingLeft: '20px' }}>
                          <h3 className="title">{items.note_2}</h3>
                        </div>
                      </a>
                    </div>
                  ))}
                </Carousel>
                <div className="carousel-nav center">
                  <div
                    className="carousel-prev "
                    onClick={() => {
                      refCarousel.previous();
                    }}
                  >
                    <i className="icon-arrow-1 ix"></i>
                  </div>
                  <div
                    className="carousel-next"
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
      {data[0].type === '7' && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg-3 group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="container">
              <div className="entry-head">
                <h2 className="ht">{data === null ? '' : data[0].title}</h2>
              </div>
              <div className="row equalHeight list-item">
                {map(data, (items, index) => {
                  return (
                    <div className="col-sm-6 col-md-4 efch-2 ef-img-t" key={index}>
                      <a href={items.url}>
                        <div className="item">
                          <div className="img ">
                            <img
                              className="lazyload"
                              alt="images"
                              data-lazy-type="image"
                              src={`${process.env.DOMAIN}${items.urlImage}`}
                            />
                          </div>
                          <div className="divtext">
                            <h4 className="title equal" style={{ textAlign: 'center' }}>
                              {items.note_1}
                            </h4>
                            <div className="desc" style={{ textAlign: 'center' }}>
                              {items.note_2}
                            </div>
                          </div>
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
      {data[0].type === '8' && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg-3 group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="container">
              <div className="entry-head">
                <h2 className="ht">{data === null ? '' : data[0].title}</h2>
              </div>
              <div className="row equalHeight list-item">
                {map(data, (items, index) => {
                  return (
                    <div className={`col-sm-6 col-md-4 efch-2 ef-img-t`} key={index}>
                      <a href={items.url}>
                        <div className="item">
                          <div className="divtext" style={{ paddingTop: '29px' }}>
                            <h4 className="title equal" style={{ textAlign: 'center' }}>
                              {items.note_1}
                            </h4>
                            <div className="desc" style={{ textAlign: 'center' }}>
                              {items.note_2}
                            </div>
                          </div>
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
    </React.Fragment>
  );
}

Icon.propTypes = propTypes;

export default Icon;
