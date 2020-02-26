import React from 'react';
import { map } from 'lodash';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.array
};

function Icon({ data }) {
  return (
    <section className="sec-tb sec-h-1 group-ef">
      <div className="container">
        <div className="entry-head text-center">
          <h2 className="ht efch-1 ef-img-t">{data[0].title || ''}</h2>
        </div>
        <div className="menuicon">
          {data[0].type === '1' && (
            <React.Fragment>
              {map(data, (items, index) => {
                return (
                  <div className="item ef-img-t" key={index}>
                    <a href={items.url} className="link">
                      <div className="img">
                        <img src={items.image} />
                      </div>
                      <div className="title">{items.note_1}</div>
                    </a>
                  </div>
                );
              })}
            </React.Fragment>
          )}
          {data[0].type === '2' && (
            <React.Fragment>
              <div className="row list-item">
                {map(data, (items, index) => {
                  return (
                    <div
                      className={`col-sm-6 col-md-${data[0].column} efch-2 ef-img-t`}
                      key={index}
                    >
                      <div className="item">
                        <a href={items.url}>
                          <div className="img ">
                            <img className=" loaded loaded" src={items.image} />
                          </div>
                          <div className="divtext">
                            <h4 className="title">{items.note_1}</h4>
                            <div className="desc">{items.note_2}</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </section>
  );
}

Icon.propTypes = propTypes;

export default Icon;
