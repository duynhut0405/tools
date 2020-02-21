import React from 'react';
import { map } from 'lodash';
import Propstype from 'prop-types';

const propTypes = {
  data: Propstype.array
};

function Images({ data }) {
  return (
    <div className="block_images">
      <p className="title">{data[0].title}</p>
      {map(data, (items, index) => {
        if (items.type === '1') {
          return (
            <div className="block_imege_left mb-5" key={index}>
              <h2 className="title mb-5">{items.note_1}</h2>
              <div className="row">
                <div className="col-sm-7">
                  <img src={items.image} alt="icon" />
                </div>
                <div className="col-sm-5">
                  <p>{items.note_2}</p>
                  <button>
                    <a href={items.url === undefined ? '#' : items.url}>
                      {items.text_action === undefined ? 'Đăng ký ngay' : items.text_action}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          );
        }
        return (
          <div className="block_imege_left mb-5" key={index}>
            <h2 className="title mb-5">{items.note_1}</h2>
            <div className="row">
              <div className="col-sm-5">
                <p>{items.note_2}</p>
                <button>
                  <a href={items.url === undefined ? '#' : items.url}>
                    {items.text_action === undefined ? 'Đăng ký ngay' : items.text_action}
                  </a>
                </button>
              </div>
              <div className="col-sm-7">
                <img src={items.image} alt="icon" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Images.propTypes = propTypes;

export default Images;
