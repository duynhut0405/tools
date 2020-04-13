import React from 'react';
import { ImageCenter, ImageLeft, ImageRight, ImageRightMB } from './Images/index';
import { map } from 'lodash';
import Propstype from 'prop-types';

const propTypes = {
  data: Propstype.array,
  id: Propstype.number
};

function Images({ data, id }) {
  return (
    <>
      {/* <div className="container">
        <div className={`entry-head text-${data[0].options}`} id={id}>
          <h2 className="ht  efch-1 ef-img-t">{data[0].title}</h2>
        </div>
      </div> */}
      {map(data, (item, index) => {
        return (
          <div className="container" key={index}>
            <div className={`entry-head text-${item.options}`} id={id}>
              <h2 className="ht  efch-1 ef-img-t">{item.title}</h2>
            </div>
          </div>
        );
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
          return <ImageLeft items={items} key={index} padding={padding} id={id} />;
        }
        if (items.type === '2') {
          return <ImageRight items={items} key={index} padding={padding} id={id} />;
        }
        if (items.type === '5') {
          return <ImageRightMB items={items} key={index} padding={padding} id={id} />;
        }
        return <ImageCenter items={items} key={index} padding={padding} id={id} />;
      })}
    </>
  );
}

Images.propTypes = propTypes;

export default Images;
