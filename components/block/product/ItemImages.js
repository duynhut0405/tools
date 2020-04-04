import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array
};

function ItemImages({ data }) {
  return (
    <div className="row list-item list-1">
      {map(data, (item, index) => {
        if (index < 2) {
          return (
            <div className="col-md-6 efch-2 ef-img-t" key={index}>
              <a href={item.url === undefined ? '#' : item.url} className="item tRes_66">
                <img
                  className=" loaded loaded"
                  data-lazy-type="image"
                  data-lazy-src={`${process.env.DOMAIN}${item.urlImage}`}
                  src={`${process.env.DOMAIN}${item.urlImage}`}
                />

                <div className="divtext">
                  <div className="desc">{item.note_1}</div>
                  <h4 className="title">{item.note_2}</h4>
                </div>
              </a>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

ItemImages.propTypes = propTypes;

export default ItemImages;
