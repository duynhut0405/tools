import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useRouter } from 'next/router';
import { map } from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array
};

function MenuMiddle({ data }) {
  const router = useRouter();
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
    <div className="menuicon sec-tb container">
      <Carousel
        responsive={responsive}
        draggable
        minimumTouchDrag={80}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
      >
        {map(data.menuItems, (item, key) => {
          return (
            <div className={router.query.name === item.slug ? 'item active' : 'item'} key={key}>
              <a href={`/page/${item.slug}`} className="link">
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
        })}
      </Carousel>
    </div>
  );
}

MenuMiddle.propTypes = propTypes;

export default MenuMiddle;
