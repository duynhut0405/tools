import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import map from 'lodash/map';
import useCollapse from 'react-collapsed';
import PropTypes from 'prop-types';
import { LinkPage, LinkInput } from '../common/link';
import { getLang } from '../../utils/cookie';
import LinkNews from './link/LinkNews';
import LinkInput2 from './link/LinkInput2';
const propTypes = {
  data: PropTypes.object,
  query: PropTypes.string
};
function MenuMiddle({ data, query }) {
  const [refCarousel, setRefCarousel] = useState(null);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);
  const lang = getLang();
  const typePage = 1;
  const typeUrl = 4;
  useEffect(() => {
    if (ref !== null && ref.current !== null && ref.current.clientHeight !== null) {
      setHeight(ref.current.clientHeight);
    }
    window.addEventListener('resize', () => {
      if (ref !== null && ref.current !== null && ref.current.clientHeight !== null) {
        setHeight(ref.current.clientHeight);
      }
    });

    return () => {
      window.addEventListener('resize', () => {
        if (ref !== null && ref.current !== null && ref.current.clientHeight !== null) {
          setHeight(ref.current.clientHeight);
        }
      });
    };
  });
  const { getCollapseProps, getToggleProps, isOpen } = useCollapse({
    collapsedHeight: 300
  });
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
                    ref={refs => {
                      setRefCarousel(refs);
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
                            {Number(item.type) === typeUrl && (
                              <LinkInput2 lang={lang} name={item.url}>
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
                              </LinkInput2>
                            )}
                            {(Number(item.type) === typePage || item.type === null) && (
                              <LinkPage lang={lang} name={item.slugPages}>
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
                              </LinkPage>
                            )}
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
                            {Number(item.type) === typeUrl && (
                              <LinkInput2 lang={lang} name={item.url}>
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
                              </LinkInput2>
                            )}
                            {(Number(item.type) === typePage || item.type === null) && (
                              <LinkPage lang={lang} name={item.slugPages}>
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
                              </LinkPage>
                            )}
                          </div>
                        );
                      }
                    )}
                  </div>
                )}
              </div>
              <div className="menuicon mb" {...getCollapseProps()}>
                <div className="row grid-space-0" ref={ref}>
                  {map(
                    data.menuItems.sort((a, b) => a.position - b.position),
                    (item, key) => {
                      return (
                        <div className="col-4" key={key}>
                          <div className={query === item.slugPages ? 'item active' : 'item'}>
                            <LinkPage lang={lang} name={item.slugPages}>
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
                            </LinkPage>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
              {height >= 300 && (
                <div className="showmore" style={{ textAlign: 'center' }}>
                  <span className="text" {...getToggleProps()}>
                    <i className={isOpen ? 'icon-arrow-2 it' : 'icon-arrow-2 ib'}></i>
                  </span>
                </div>
              )}
            </div>
          </section>
        </React.Fragment>
      )}
    </>
  );
}
MenuMiddle.propTypes = propTypes;
export default MenuMiddle;
