import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { map } from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.object,
  query: PropTypes.string
};

function MenuMiddle({ data, query }) {
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
      {data !== null && (
        <div className="sec-tb">
          <div
            className="text-center common-menumiddle"
            style={{ marginBottom: '40px', position: 'relative' }}
          >
            <h1 className="text-center" style={{ margin: '15px 0 15px 0' }}>
              {data.title}
            </h1>
          </div>
          <div className="menuicon container">
            {data.menuItems !== undefined && data.menuItems.length >= 6 && (
              <Carousel
                responsive={responsive}
                draggable
                minimumTouchDrag={80}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                keyBoardControl={true}
              >
                {map(
                  data.menuItems.sort((a, b) => a.position - b.position),
                  (item, key) => {
                    return (
                      <div className={query === item.slugPages ? 'item active' : 'item'} key={key}>
                        <a href={`/page/${item.slugPages}`} className="link">
                          <div className="img">
                            <img
                              className=" loaded loaded"
                              data-lazy-type="image"
                              data-lazy-src={item.icon}
                              src={item.icon}
                            />
                          </div>
                          <div className="title">{item.name}</div>
                        </a>
                      </div>
                    );
                  }
                )}
              </Carousel>
            )}
            {data.menuItems !== undefined && data.menuItems.length < 6 && (
              <div className="list-menu-middle">
                {map(
                  data.menuItems.sort((a, b) => a.position - b.position),
                  (item, key) => {
                    return (
                      <div className={query === item.slugPages ? 'item active' : 'item'} key={key}>
                        <a href={`/page/${item.slugPages}`} className="link">
                          <div className="img">
                            <img
                              className=" loaded loaded"
                              data-lazy-type="image"
                              data-lazy-src={item.icon}
                              src={item.icon}
                            />
                          </div>
                          <div className="title">{item.name}</div>
                        </a>
                      </div>
                    );
                  }
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

MenuMiddle.propTypes = propTypes;

export default MenuMiddle;
