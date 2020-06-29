import map from 'lodash/map';
import Proptypes from 'prop-types';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import CommentItem from './CommentItem';

const propTypes = {
  data: Proptypes.object.isRequired,
  id: Proptypes.number
};

function Comment({ data, id }) {
  const [refCarousel, setRefCarousel] = useState(null);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1
    }
  };
  let padding = '';
  if (data.optionWidth === '2') {
    padding = 'sec-tb';
  } else if (data.optionWidth === '3') {
    padding = 'sec-t';
  } else if (data.optionWidth === '4') {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }

  return (
    <section className={`${padding} comment`} id={id}>
      <div className="container">
        <div className="entry-head">
          <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
        </div>
        <div className="wrap-carousel">
          <Carousel
            responsive={responsive}
            draggable
            minimumTouchDrag={80}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            className="list-11"
            arrows={false}
            renderButtonGroupOutside={true}
            ref={ref => {
              setRefCarousel(ref);
            }}
          >
            {map(data.listComment, (item, index) => (
              <div className="item efch-2 ef-img-l " key={index}>
                <div className="ic">
                  <i className="icon-quote"></i>
                </div>
                <div className="inline-table">
                  <div className="ctext ">
                    <span className="img tRes">
                      <img
                        className="lazyload"
                        data-src={`${process.env.DOMAIN}${item.urlImage}`}
                        alt="images"
                      />
                    </span>
                  </div>
                  <div className="c100">
                    <h5 className="title">{item.note_1}</h5>
                    <div className="cl6">{item.note_2}</div>
                  </div>
                </div>
                <CommentItem data={item.content} />
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
  );
}
Comment.propTypes = propTypes;

export default Comment;
