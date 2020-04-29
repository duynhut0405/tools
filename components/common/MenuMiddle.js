import React, { useState } from 'react';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import { map } from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.object,
  query: PropTypes.string
};

function MenuMiddle({ data, query }) {
  const [refCarousel, setRefCarousel] = useState(null);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
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
    <>
      {data && data.menuItems && (
        <React.Fragment>
          <section className="sec-tb sec-menuicon">
            <div className="container">
              <div className="text-center common-menumiddle entry-head">
                <h1 className="ht">{data.title}</h1>
              </div>
              <div className="wrap-carousel max850 pc">
                {data.menuItems !== undefined && data.menuItems.length >= 6 && (
                  <Carousel
                    responsive={responsive}
                    draggable
                    minimumTouchDrag={80}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    arrows={false}
                    className="menuicon"
                    keyBoardControl={true}
                    ref={ref => {
                      setRefCarousel(ref);
                    }}
                  >
                    {map(
                      data.menuItems.sort((a, b) => a.position - b.position),
                      (item, key) => {
                        return (
                          <div
                            className={query === item.slugPages ? 'item active' : 'item'}
                            key={key}
                          >
                            <Link href="/page/[...name]" as={`/page/${item.slugPages}`}>
                              <a className="link">
                                <div className="img">
                                  <img
                                    className="lazyload"
                                    alt="images"
                                    data-src={`${process.env.DOMAIN}${item.icon}`}
                                  />
                                </div>
                                <div className="title">{item.name}</div>
                              </a>
                            </Link>
                          </div>
                        );
                      }
                    )}
                  </Carousel>
                )}
                {data.menuItems !== undefined && data.menuItems.length >= 6 && (
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
                )}
                {data.menuItems !== undefined && data.menuItems.length < 6 && (
                  <div className="list-menu-middle__ menuicon">
                    {map(
                      data.menuItems.sort((a, b) => a.position - b.position),
                      (item, key) => {
                        return (
                          <div
                            className={query === item.slugPages ? 'item active' : 'item'}
                            key={key}
                          >
                            <Link href="/page/[...name]" as={`/page/${item.slugPages}`}>
                              <a className="link">
                                <div className="img">
                                  <img
                                    className="lazyload"
                                    alt="images"
                                    data-src={`${process.env.DOMAIN}${item.icon}`}
                                  />
                                </div>
                                <div className="title">{item.name}</div>
                              </a>
                            </Link>
                          </div>
                        );
                      }
                    )}
                  </div>
                )}
              </div>
              <div className="menuicon mb">
                <div className="row grid-space-0">
                  {map(
                    data.menuItems.sort((a, b) => a.position - b.position),
                    (item, key) => {
                      return (
                        <div className="col-4" key={key}>
                          <div className={query === item.slugPages ? 'item active' : 'item'}>
                            <Link href="/page/[name]" as={`/page/${item.slugPages}`}>
                              <a className="link">
                                <div className="img">
                                  <img
                                    className="lazyload"
                                    alt="images"
                                    data-src={`${process.env.DOMAIN}${item.icon}`}
                                  />
                                </div>
                                <div className="title">{item.name}</div>
                              </a>
                            </Link>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
    </>
  );
}

MenuMiddle.propTypes = propTypes;

export default MenuMiddle;
