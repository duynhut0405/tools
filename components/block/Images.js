import React from 'react';
import { ImageCenter, ImageLeft, ImageRight } from './Images/index';
import { map } from 'lodash';
import Propstype from 'prop-types';

const propTypes = {
  data: Propstype.array
};

function Images({ data }) {
  return (
    <>
      <div className="entry-head text-center">
        <h2 className="ht  efch-1 ef-img-t">{data[0].title}</h2>
      </div>
      {map(data, (items, index) => {
        if (items.type === '1') {
          return <ImageLeft items={items} key={index} />;
        }
        if (items.type === '2') {
          return <ImageRight items={items} key={index} />;
        }
        return <ImageCenter items={items} key={index} />;
      })}
    </>
  );
}

Images.propTypes = propTypes;

export default Images;
