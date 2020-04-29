import React from 'react';
import { map } from 'lodash';
import Link from 'next/link';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.object,
  id: PropTypes.number
};

function Product({ data, id }) {
  return (
    <div className="post_block mb-5 pt-4" id={id}>
      <div className="title">
        <h2>{data.title}</h2>
      </div>
      <div className="row">
        {map(data.page, items => {
          if (data.type === '1' || data.type === undefined) {
            return (
              <div className="col-sm-4" key={items.id}>
                <div className="post_content mb-3">
                  <div>
                    <Link href="/page/[...name]" as={`/page/${items.slug}`}>
                      <a>
                        <img className="lazyload" data-src={items.baseImage} alt="icon" />
                      </a>
                    </Link>
                  </div>
                  <div className="content">
                    <Link href="/page/[...name]" as={`/page/${items.slug}`}>
                      <a>
                        <p className="title">{items.name}</p>
                      </a>
                    </Link>
                    <p className="text_content">{items.meta_description}</p>
                  </div>
                </div>
              </div>
            );
          }
          return (
            <div className="col-sm-4" key={items.id}>
              <div className="row mb-3 mr-4 page_wapper">
                <div className="col-sm-5 img_wapper">
                  <Link href="/page/[...name]" as={`/page/${items.slug}`}>
                    <a>
                      <img className="lazyload" data-src={items.miniImage} alt="icon" />
                    </a>
                  </Link>
                </div>
                <div className="col-sm-7 content">
                  <Link href="/page/[...name]" as={`/page/${items.slug}`}>
                    <a>
                      <p className="title">{items.name}</p>
                    </a>
                  </Link>
                  <p className="text_content">{items.meta_description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Product.propTypes = propTypes;

export default Product;
