import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array
};

function ItemIcon({ data }) {
  let table = [];
  if (data && data !== undefined) {
    table = data.filter((item, index) => index >= 5);
  }
  return (
    <div className="row list-item list-2">
      {map(data, (item, index) => {
        if (index >= 2 && index < 5) {
          return (
            <div className="col-lg-3 col-6 efch-4 ef-img-t" key={index}>
              <a href={item.url === undefined ? '#' : item.url} className="item">
                <div className="img">
                  <img
                    className="lazyload"
                    data-lazy-data-src={`${process.env.DOMAIN}${item.urlImage}`}
                    data-src={`${process.env.DOMAIN}${item.urlImage}`}
                    alt="images"
                  />
                </div>
                <h4 className="title">{item.note_1}</h4>
                <div className="desc line2">{item.note_2}</div>
              </a>
            </div>
          );
        }
        return null;
      })}

      <div className="col-lg-3 col-6 efch-7 ef-img-t">
        <div className="item item-2">
          <h5 className="title">Truy cập nhanh</h5>
          {map(table, (item, index) => (
            <a
              className="btn btn-3 radius-8"
              style={{ letterSpacing: '1px' }}
              href={item.url === undefined ? '#' : item.url}
              key={index}
            >
              <img
                className="lazyload"
                data-src={`${process.env.DOMAIN}${item.urlImage}`}
                width="25"
                alt="images"
              />
              {item.note_1}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

ItemIcon.propTypes = propTypes;

export default ItemIcon;
