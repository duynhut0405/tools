import React from 'react';
import { map } from 'lodash';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.object
};

function Card({ data }) {
  return (
    <React.Fragment>
      {data[0].type === '4' && (
        <React.Fragment>
          <section className="sec-tb sec-img-svg-3 group-ef loaded">
            <div className="container">
              <div className="row equalHeight list-item">
                {map(data, (items, index) => {
                  return (
                    <div className={`col-sm-6 col-md-4 efch-2 ef-img-t `}>
                      <div className="item">
                        <div className="img ">
                          <img className="loaded loaded" data-lazy-type="image" src={items.image} />
                        </div>
                        <div className="divtext">
                          <h4 className="title equal" style={{ textAlign: 'center' }}>
                            {ReactHtmlParser(items.note_1)}
                          </h4>
                          <div className="desc" style={{ textAlign: 'center' }}>
                            {ReactHtmlParser(items.note_2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

Card.propTypes = propTypes;

export default Card;
