import React from 'react';
import { ImageCenter, ImageLeft, ImageRight, ImageRightMB } from './Images/index';
import map from 'lodash/map';
import Propstype from 'prop-types';

const propTypes = {
  data: Propstype.array,
  id: Propstype.number
};

function Images({ data, id }) {
  return (
    <>
      {map(data, (item, index) => {
        if (item.type !== '4') {
          return (
            <div className="container" key={index}>
              <div className={`entry-head text-${item.options}`} id={id}>
                <h2 className="ht  efch-1 ef-img-t">{item.title}</h2>
              </div>
            </div>
          );
        }
      })}
      {map(data, (items, index) => {
        let padding = '';
        if (items.optionWidth === '2') {
          padding = 'sec-tb';
        } else if (items.optionWidth === '3') {
          padding = 'sec-t';
        } else if (items.optionWidth === '4') {
          padding = 'sec-b';
        } else {
          padding = 'sec-';
        }
        if (items.type === '1') {
          return (
            <ImageLeft items={items} key={index} padding={padding} id={id} type={items.type} />
          );
        }
        if (items.type === '2') {
          return (
            <ImageRight items={items} key={index} padding={padding} id={id} type={items.type} />
          );
        }
        if (items.type === '4') {
          return (
            <ImageRight items={items} key={index} padding={padding} id={id} type={items.type} />
          );
        }
        if (items.type === '5') {
          return (
            <ImageRightMB items={items} key={index} padding={padding} id={id} type={items.type} />
          );
        }
        return (
          <ImageCenter items={items} key={index} padding={padding} id={id} type={items.type} />
        );
      })}
    </>
  );
}

Images.propTypes = propTypes;

export default Images;
