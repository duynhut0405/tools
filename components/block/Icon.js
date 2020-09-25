import React, { useState } from 'react';
import map from 'lodash/map';
import Proptypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import UseWindowResize from '../common/Resize';
import t from '../../translation';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {
  data: Proptypes.array,
  id: Proptypes.number
};

function Icon({ data, id }) {
  const [refCarousel, setRefCarousel] = useState(null);
  const size = UseWindowResize();

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

  const responsive3 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
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
                {size.width >= 768 && (
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
                          <a href={items.url ? items.url : '#'} className="link">
                            <div className="img">
                              <img
                                className="lazyload"
                                alt="icon"
                                data-src={`${process.env.DOMAIN}${items.urlImage}`}
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
                )}
                {size.width < 768 && (
                  <div>
                    {map(data, (items, index) => (
                      <div className="item ef-img-t item_carousel" key={index}>
                        <a href={items.url ? items.url : '#'} className="link">
                          <div className="img">
                            <img
                              className="lazyload"
                              alt="icon"
                              data-src={`${process.env.DOMAIN}${items.urlImage}`}
                            />
                          </div>
                          <div className="title">{items.note_1}</div>
                        </a>
                      </div>
                    ))}
                  </div>
                )}
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
                            alt="images"
                            data-src={`${process.env.DOMAIN}${items.urlImage}`}
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

              {Number(data[0].column) === 6 && (
                <div className="max750">
                  <div className="row list-item">
                    {map(data, (items, index) => {
                      return (
                        <div className={`col-sm-6 col-md-${data[0].column}`} key={index}>
                          <div className="item">
                            <a href={items.url ? items.url : '#'}>
                              <div className="img">
                                <img
                                  className="lazyload"
                                  alt="images"
                                  data-src={`${process.env.DOMAIN}${items.urlImage}`}
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
              )}
              {Number(data[0].column) !== 6 && (
                <div className="row list-item">
                  {map(data, (items, index) => {
                    return (
                      <div className={`col-sm-6 col-md-${data[0].column}`} key={index}>
                        <div className="item">
                          <a href={items.url ? items.url : '#'}>
                            <div className="img">
                              <img
                                className="lazyload"
                                alt="images"
                                data-src={`${process.env.DOMAIN}${items.urlImage}`}
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
              )}
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
              {size.width >= 768 && (
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
                              alt="images"
                              data-src={`${process.env.DOMAIN}${item.urlImage}`}
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
              )}
              {size.width < 768 && (
                <div className="list-9 list-item">
                  {map(data, (item, index) => (
                    <a href={item.url} className={`item efch-${index + 2} ef-img-l `} key={index}>
                      <div className="img">
                        <img
                          className="lazyload"
                          alt="images"
                          data-src={`${process.env.DOMAIN}${item.urlImage}`}
                        />
                      </div>
                      <div className="des">{item.note_1}</div>
                    </a>
                  ))}
                </div>
              )}
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
                      <a
                        className="item"
                        href={items.url ? items.url : '#'}
                        style={{ padding: '40px 10px' }}
                      >
                        <div className="img ">
                          <img
                            className="lazyload"
                            alt="images"
                            data-src={`${process.env.DOMAIN}${items.urlImage}`}
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
                      <a className="item" href={items.url ? items.url : '#'}>
                        <div className="img ">
                          <img
                            className="lazyload"
                            alt="images"
                            data-src={`${process.env.DOMAIN}${items.urlImage}`}
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
              {size.width >= 768 && (
                <div className="sec-b wrap-carousel">
                  <Carousel
                    responsive={responsive2}
                    draggable
                    minimumTouchDrag={80}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    arrows={false}
                    className=""
                    ref={ref => {
                      setRefCarousel(ref);
                    }}
                  >
                    {map(data, (items, index) => (
                      <div className="item ef-img-t item_carousel" key={index}>
                        <a
                          href={items.url ? items.url : '#'}
                          className="link"
                          style={{ backgroundColor: '#F5F4F4', boxShadow: 'none' }}
                        >
                          <div className="img">
                            <img
                              data-src={`${process.env.DOMAIN}${items.urlImage}`}
                              className="lazyload"
                              alt="images"
                            />
                          </div>
                          <div className="divtext">
                            <h4 className="title">{items.note_2}</h4>
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
              )}
              {size.width < 768 && (
                <div className="list-item">
                  {map(data, (items, index) => (
                    <div className="item ef-img-t item_carousel" key={index}>
                      <a
                        href={items.url ? items.url : '#'}
                        className="link"
                        style={{ backgroundColor: '#F5F4F4', boxShadow: 'none' }}
                      >
                        <div className="img">
                          <img
                            data-src={`${process.env.DOMAIN}${items.urlImage}`}
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
                </div>
              )}
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
                      <a href={items.url ? items.url : '#'}>
                        <div className="item">
                          <div className="img ">
                            <img
                              className="lazyload"
                              alt="images"
                              data-src={`${process.env.DOMAIN}${items.urlImage}`}
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
                      <a href={items.url ? items.url : '#'}>
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
      {data[0].type === '9' && (
        <React.Fragment>
          <section
            className={`sec-b sec-n-h2  group-ef loaded`}
            id={id}
          >
            <div className="row grid-space-0">
              <div className="col-lg-4 efch-2 ef-img-t">
                {data && data[0] && data[0].urlImageBackGround ? (
                  <div className="item item-1 loaded" dataLazyType="bg" dataLazySrc={data[0].imageBackGround} style={{backgroundImage: `url("${data[0].imageBackGround}")`, backgroundSize: "100% 100%"}}>
                    <div className="divtext" style={{textAlign: "left"}}>
                      <div className="img" style={{maxWidth: "65px"}}>
                        <img class=" loaded loaded" data-lazy-type="image" dataLazySrc={data[0].image} src={data[0].image}/>
                      </div>
                      <div className="title" style={{color: "#A0D2FF", marginBottom: "20px", fontWeight: "600"}}>
                        {ReactHtmlParser(data[0].note_1)}
                      </div>
                      <div className="desc">
                        {ReactHtmlParser(data[0].note_2)}
                      </div>
                      <a className="link link-custom-1" href={data[0].url} style={{color:"#fff"}}>{t('discovery')}<i className="icon-arrow-1" style={{padding: "2px"}}></i></a>
                    </div>
                  </div>
                    ) : (
                      ''
                )}
              </div>
              <div className="col-lg-4 efch-2 ef-img-t">
                {data && data[1] && data[1].urlImageBackGround ? (
                  <div className="item item-1 loaded" dataLazyType="bg" dataLazySrc={data[1].imageBackGround} style={{backgroundImage: `url("${data[1].imageBackGround}")`, backgroundSize: "100% 100%"}}>
                    <div className="divtext" style={{textAlign: "left"}}>
                      <div className="img" style={{maxWidth: "65px"}}>
                        <img class=" loaded loaded" data-lazy-type="image" dataLazySrc={data[1].image} src={data[1].image}/>
                      </div>
                      <div className="title" style={{color: "#141ED2", marginBottom: "20px", fontWeight: "600"}}>
                        {ReactHtmlParser(data[1].note_1)}
                      </div>
                      <div className="desc" style={{color:"#141ED2"}}>
                      {ReactHtmlParser(data[1].note_2)}
                      </div>
                      <a className="link link-custom-2" href={data[1].url} style={{color:"#141ED2"}}>{t('discovery')}<i className="icon-arrow-1" style={{padding: "2px"}}></i></a>
                    </div>
                  </div>
                    ) : (
                      ''
                )}
              </div>
              <div className="col-lg-4 efch-2 ef-img-t">
                {data && data[2] && data[2].urlImageBackGround ? (
                  <div className="item item-1 loaded" dataLazyType="bg" dataLazySrc={data[2].imageBackGround} style={{backgroundImage: `url("${data[2].imageBackGround}")`, backgroundSize: "100% 100%"}}>
                    <div className="divtext" style={{textAlign: "left"}}>
                      <div className="img" style={{maxWidth: "65px"}}>
                        <img class=" loaded loaded" data-lazy-type="image" dataLazySrc={data[2].image} src={data[2].image}/>
                      </div>
                      <div className="title" style={{color: "#141ED2", marginBottom: "20px", fontWeight: "600"}}>
                        {ReactHtmlParser(data[2].note_1)}
                      </div>
                      <div className="desc" style={{color:"#141ED2"}}>
                        {ReactHtmlParser(data[2].note_2)}
                      </div>
                      <a className="link link-custom-2" href={data[2].url} style={{color:"#141ED2"}}>{t('discovery')}<i className="icon-arrow-1" style={{padding: "2px"}}></i></a>
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
      {data[0].type === '10' && (
        <React.Fragment>
          <section className={`sec-menuicon2 group-ef next-shadow loaded`} id={id} style={{padding: "10px 0"}}>
            <div className="container"  style={{maxHeight: "130px", padding: "inherit"}}>
              {size.width >= 1200 && (
                <div className="wrap-carousel max850 pc">
                  <Carousel
                    responsive={responsive3}
                    draggable
                    minimumTouchDrag={80}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    className="list-9 menuicon2"
                    arrows={false}
                    renderButtonGroupOutside={true}
                    ref={ref => {
                      setRefCarousel(ref);
                    }}
                  >
                    {map(data, (item, index) => (
                        <a  className="link" href={item.url} style={{minHeight: "110px"}}>
                          <div className="img-custom-menu">
                            <img
                              className="lazyload"
                              alt="images"
                              data-src={`${process.env.DOMAIN}${item.urlImage}`}
                              style={{ maxHeight: "100%" }}
                            />
                          </div>
                          <div className="title">{ReactHtmlParser(item.note_1)}</div>
                        </a>
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
              )}
              {(size.width >= 768 && size.width < 1200) && (
                <div className="wrap-carousel max850 pc">
                  <Carousel
                    responsive={responsive3}
                    draggable
                    minimumTouchDrag={80}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    className="list-9 menuicon2"
                    arrows={false}
                    renderButtonGroupOutside={true}
                    ref={ref => {
                      setRefCarousel(ref);
                    }}
                  >
                    {map(data, (item, index) => (
                        <a  className="link" href={item.url} style={{minHeight: "110px"}}>
                          <div className="img-custom-menu">
                            <img
                              className="lazyload"
                              alt="images"
                              data-src={`${process.env.DOMAIN}${item.urlImage}`}
                              style={{ maxHeight: "100%" }}
                            />
                          </div>
                          <div className="title">{ReactHtmlParser(item.note_1)}</div>
                        </a>
                    ))}
                  </Carousel>
                  <div className="carousel-nav-custom center" style={{left: "-20px", right: "-20px"}}>
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
              )}
              {size.width < 768 && (
                <div className="wrap-carousel pc" style={{padding: "10px 10px 10px"}}>
                  <Carousel
                    responsive={responsive3}
                    draggable
                    minimumTouchDrag={80}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    className="list-9 menuicon2"
                    arrows={false}
                    renderButtonGroupOutside={true}
                    ref={ref => {
                      setRefCarousel(ref);
                    }}
                  >
                    {map(data, (item, index) => (
                        <a  className="link" href={item.url} style={{minHeight: "110px"}}>
                          <div className="img-custom-menu">
                            <img
                              className="lazyload"
                              alt="images"
                              data-src={`${process.env.DOMAIN}${item.urlImage}`}
                              style={{ maxHeight: "100%" }}
                            />
                          </div>
                          <div className="title">{ReactHtmlParser(item.note_1)}</div>
                        </a>
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
              )}
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === '11' && (
        <React.Fragment>
          <section className={`sec-menuicon2 group-ef next-shadow loaded`} id={id} style={{padding: "10px 0"}}>
            <div className="container"  style={{minHeight: "121px", padding: "inherit"}}>
              {size.width >= 768 && (
                <div className="list-9 list-item max850 pc row">
                  {map(data, (item, index) => (
                      <div className="col">
                        <a  className="link" href={item.url} style={{minHeight: "121px"}}>
                          <div className="img-custom-menu">
                            <img
                              className="lazyload"
                              alt="images"
                              data-src={`${process.env.DOMAIN}${item.urlImage}`}
                              style={{ maxHeight: "100%" }}
                            />
                          </div>
                          <div className="title-custom-2">{ReactHtmlParser(item.note_1)}</div>
                        </a>
                      </div>
                    ))}
                </div>
              )}
              {size.width < 768 && (
                <div className="list-9 list-item max850 pc row">
                {map(data, (item, index) => (
                    <div className="col">
                      <a  className="link" href={item.url} style={{minHeight: "121px"}}>
                        <div className="img-custom-menu">
                          <img
                            className="lazyload"
                            alt="images"
                            data-src={`${process.env.DOMAIN}${item.urlImage}`}
                            style={{ maxHeight: "100%" }}
                          />
                        </div>
                        <div className="title-custom-2">{ReactHtmlParser(item.note_1)}</div>
                      </a>
                    </div>
                  ))}
              </div>
              )}
            </div>
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

Icon.propTypes = propTypes;

export default Icon;
