import React, { useState } from 'react';
import { map } from 'lodash';
import Proptypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import ReactHtmlParser from 'react-html-parser';
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

  return (
    <section className="sec-b " id={id}>
      <div className="container">
        <div className="entry-head">
          <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
        </div>

              <Carousel
                responsive={responsive}
                draggable
                minimumTouchDrag={80}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                keyBoardControl={true}
                className="list-11"
                arrows={true}
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
                              className=" loaded loaded"
                              data-lazy-type="image"
                              data-lazy-src={item.image}
                              src={item.image}
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

      </div>
    </section>
  );
}
Comment.propTypes = propTypes;

export default Comment;
