import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { map } from 'lodash';
import Carousel from 'react-multi-carousel';
import { getPagesByIdService } from '../../../services/page';
const propTypes = {
  data: Proptypes.object.isRequired,
  indexTab: Proptypes.number.isRequired
};
function CustomPageItem({ data, indexTab }) {
  const [refCarouselTwo, setRefCarouselTwo] = useState(null);
  const [active, setActive] = useState(false);
  const [listPage, setListPage] = useState([]);
  const getPageBlock = async () => {
    const ids = map(data.pages, values => values.value);
    const res = await getPagesByIdService(ids);
    if (res && res.status === 200) {
      setListPage(res.data);
    }
  };

  useEffect(() => {
    getPageBlock();
  }, []);

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

  return (
    <React.Fragment>
      <div className="accodion-tab " key={indexTab}>
        <input type="checkbox" checked={active} />
        <label className="accodion-title" onClick={() => setActive(!active)}>
          <span>{data === null ? '' : data.description}</span>
          <span className="triangle">
            <i className="icon-plus"></i>
          </span>
        </label>
        <div className="accodion-content entry-content wrap-carousel">
          <Carousel
            responsive={responsiveTwo}
            draggable
            minimumTouchDrag={80}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            className="list-5"
            arrows={false}
            ref={ref => {
              setRefCarouselTwo(ref);
            }}
          >
            {map(listPage, (items, index) => (
              <div className="item ef-img-t item_carousel" key={index}>
                <a href={`/page/${items.slug}`} className="link">
                  <div className="img">
                    <img src={items.baseImage} />
                  </div>
                  <div className="divtext">
                    <h4 className="title line2">{items.name}</h4>
                    <div className="desc line2 cl3">{items.meta_description}</div>
                  </div>
                </a>
              </div>
            ))}
          </Carousel>
          <div className="carousel-nav center">
            <div
              className="carousel-prev "
              onClick={() => {
                refCarouselTwo.previous();
              }}
            >
              <i className="icon-arrow-1 ix"></i>
            </div>
            <div
              className="carousel-next"
              onClick={() => {
                refCarouselTwo.next();
              }}
            >
              <i className="icon-arrow-1"></i>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
CustomPageItem.propTypes = propTypes;

export default CustomPageItem;
