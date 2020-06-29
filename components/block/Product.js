import React from 'react';
import map from 'lodash/map';
import { LinkPage } from '../common/link';
import { getLang } from '../../utils/cookie';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.object,
  id: PropTypes.number
};

function Product({ data, id }) {
  const lang = getLang();
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
                    <LinkPage lang={lang} name={items.slug}>
                      <a>
                        <img className="lazyload" data-src={items.baseImage} alt="icon" />
                      </a>
                    </LinkPage>
                  </div>
                  <div className="content">
                    <LinkPage lang={lang} name={items.slug}>
                      <a>
                        <p className="title">{items.name}</p>
                      </a>
                    </LinkPage>
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
                  <LinkPage lang={lang} name={items.slug}>
                    <a>
                      <img className="lazyload" data-src={items.miniImage} alt="icon" />
                    </a>
                  </LinkPage>
                </div>
                <div className="col-sm-7 content">
                  <LinkPage lang={lang} name={items.slug}>
                    <a>
                      <p className="title">{items.name}</p>
                    </a>
                  </LinkPage>
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
