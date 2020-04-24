import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  items: PropTypes.object,
  padding: PropTypes.string,
  id: PropTypes.number,
  type: PropTypes.string
};

function ImageRightMB({ items, padding, id, type }) {
  return (
    <section className={`${padding} sec-img-text group-ef loaded block-images-${type}`} id={id}>
      <div className="container">
        <div className="row center end">
          <div className="col-lg-6">
            {items.video_url === undefined && (
              <div className="img tRes_66 efch-2 ef-img-r ">
                <img
                  className="lazyload"
                  data-lazy-type="image"
                  data-lazy-src={`${process.env.DOMAIN}${items.urlImage}`}
                  src={`${process.env.DOMAIN}${items.urlImage}`}
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

ImageRightMB.propTypes = propTypes;

export default ImageRightMB;
