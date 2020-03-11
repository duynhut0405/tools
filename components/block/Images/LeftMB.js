import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  items: PropTypes.object
};

function ImageLeftMB({ items }) {
  return (
    <section className="sec-tb sec-img-text group-ef loaded">
      <div className="container">
        <div className="row center">
          <div className="col-lg-6">
            {items.video_url === undefined && (
              <div className="img tRes_66 efch-2 ef-img-r ">
                <img
                  className=" loaded loaded"
                  data-lazy-type="image"
                  data-lazy-src={items.image}
                  src={items.image}
                />
              </div>
            )}
          </div>
          <div className="col-lg-6">
            <div className="divtext entry-content">
              <h2 className="ht  efch-1 ef-tx-t ">{items.note_1}</h2>
              <p className="fs16">
                <strong>{items.note_2}</strong>
              </p>
              <a className="btn lg" href={items.url === undefined ? '#' : items.url}>
                Xem Thêm
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ImageLeftMB.propTypes = propTypes;

export default ImageLeftMB;
