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
      {data[0].type === '3' && (
        <React.Fragment>
          <section className="sec-tb sec-img-svg-3 group-ef loaded">
            <div className="container">
              <div className="row equalHeight list-item">
                {map(data, (items, index) => {
                  return (
                    <div className={`col-sm-6 col-md-4 efch-2 ef-img-t `}>
                      <div className="item">
                        <div className="divtext" style={{ paddingTop: '29px' }}>
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
      {data[0].type === '5' && (
        <React.Fragment>
          <section className="sec-tb ">
            <div className="container">
              <div className="entry-head text-center">
                <h2 className="ht efch-1 ef-img-l">{data[0].title}</h2>
              </div>
              <p className="text-center fs16">{ReactHtmlParser(data[0].note_1)}</p>
              <br />
              <br />
              <br />
              <div className="max950">
                <div className="timeline ">
                  {map(data, (items, index) => {
                    return (
                      <div
                        className={`group-ef loaded  item item-${
                          (index + 1) % 2 === 0 ? '2' : '1'
                        }`}
                      >
                        <div
                          className={`row grid-space-80 center ${
                            (index + 1) % 2 === 0 ? 'end' : ''
                          }`}
                        >
                          <div className="col-md-6 efch-1 ef-img-t">
                            <div className="img">
                              <img className="loaded" data-lazy-type="image" src={items.image} />
                            </div>
                          </div>
                          <div className="col-md-6 ">
                            <span className={index % 2 === 0 ? 'circle' : 'circle1'}></span>
                            <div className="divtext efch-2 ef-tx-t">
                              <h2 className="title">{ReactHtmlParser(items.note_2)}</h2>
                              <div className="desc">{ReactHtmlParser(items.note_3)}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
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
