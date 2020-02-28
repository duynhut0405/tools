import React from 'react';
import { ItemImages, ItemIcon } from './product/index';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array
};

function TagProduct({ data }) {
  return (
    <section className="sec-tb sec-h-2 bg-gray group-ef loaded">
      <div className="container">
        <div className="entry-head text-center">
          <h2 className="ht efch-1 ef-img-t">{data[0].title || ''}</h2>
        </div>
        <ItemImages data={data} />
        <ItemIcon data={data} />
      </div>
    </section>
  );
}

TagProduct.propTypes = propTypes;

export default TagProduct;
