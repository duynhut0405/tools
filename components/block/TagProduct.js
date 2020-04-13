import React from 'react';
import { ItemImages, ItemIcon } from './product/index';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array,
  id: PropTypes.number
};

function TagProduct({ data, id }) {
  let padding = '';
  if (data[0].optionWidth === '2') {
    padding = 'sec-tb';
  } else if (data[0].optionWidth === '3') {
    padding = 'sec-t';
  } else if (data[0].optionWidth === '4') {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }

  return (
    <section className={`${padding} sec-h-2 bg-gray group-ef loaded`} id={id}>
      <div className="container">
        <div className="entry-head text-center">
          <h2 className="ht efch-1 ef-img-t">{data.title || ''}</h2>
        </div>
        <ItemImages data={data} />
        <ItemIcon data={data} />
      </div>
    </section>
  );
}

TagProduct.propTypes = propTypes;

export default TagProduct;
