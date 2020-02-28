import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.object
};

function ItemIcon({ data }) {
  const table = data.filter((item, index) => index >= 5);
  return (
    <div className="row list-item list-2">
      {map(data, (item, index) => {
        if (index >= 2 && index < 5) {
          return (
            <div className="col-lg-3 col-6 efch-4 ef-img-t" key={index}>
              <a href={item.url === undefined ? '#' : item.url} className="item">
                <div className="img">
                  <img
                    className=" loaded loaded"
                    data-lazy-type="image"
                    data-lazy-src={item.image}
                    src={item.image}
                  />
                </div>
                <h4 className="title">{item.note_1}</h4>
                <div className="desc">{item.note_2}</div>
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
              href={item.url === undefined ? '#' : item.url}
              key={index}
            >
              <img
                style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  left: '25px',
                  fontSize: '22px'
                }}
                data-lazy-type="image"
                data-lazy-src={item.image}
                src={item.image}
                width="25"
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
