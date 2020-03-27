import React from 'react';
import { map } from 'lodash';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.any,
  type: PropTypes.string
};

function Card({ data, type }) {
  return (
    <React.Fragment>
      {type === '1' && (
        <React.Fragment>
          <section className="sec-tb bg-gray">
            <div className="container">
              <div className="entry-head ">
                <h2 className="ht efch-1 ef-img-l">{data === null ? '' : data.title}</h2>
              </div>
              <div className="list-10 row list-item">
                {map(data.listCard, (items, index) => {
                  return (
                    <div className="col-sm-6" key={index}>
                      {/* <a href="#" className={`item item-${index + 1} tRes_55`}> */}
                      <a
                        href="#"
                        className={`${
                          (index + 1) % 2 === 0 ? 'item item-1 tRes_55' : 'item item-2 tRes_55'
                        }`}
                      >
                        <div className="divtext">
                          <h3 className="title ">{ReactHtmlParser(items.note_2)}</h3>
                          <i className="icon-arrow-db"></i>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {type && type === '5' && (
        <React.Fragment>
          <section className="sec-tb ">
            <div className="container">
              <div className="entry-head text-center">
                <h2 className="ht efch-1 ef-img-l">{data === null ? '' : data.title}</h2>
              </div>
              <p className="text-center fs16">{ReactHtmlParser(data.descrip)}</p>
              <br />
              <div className="hr"></div>
              <div className="max950">
                <div className="timeline ">
                  {map(data.listCard, (items, index) => {
                    return (
                      <div
                        className={`group-ef loaded  item item-${
                          (index + 1) % 2 === 0 ? '2' : '1'
                        }`}
                        key={index}
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
                            <span className="circle"></span>
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
      {type && type === '6' && (
        <React.Fragment>
          <section className="sec-tb sec-ab-4 ">
            <div className="container">
              <div className="entry-head ">
                {data.title && (
                  <h2 className="ht efch-1 ef-img-l">{data === null ? '' : data.title}</h2>
                )}
              </div>
              <div className="  row grid-space-20 ">
                {data && data.listCard && data.listCard[0] ? (
                  <div className="col-lg-8 col-sm-12  ">
                    <div className="item item-1  ">
                      <div className="img tRes_92">
                        <img
                          className="loaded loaded"
                          data-lazy-type="image"
                          src={data.listCard[0].image}
                        />
                      </div>
                      <div className="divtext">
                        <div className="t1">{ReactHtmlParser(data.listCard[0].note_1)}</div>
                        <div className="t2">{ReactHtmlParser(data.listCard[0].note_2)}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {data && data.listCard && data.listCard[1] ? (
                  <div className="col-lg-4 col-sm-6">
                    <div className="item item-2  ">
                      <div className="img tRes_92">
                        <img
                          className="loaded loaded"
                          data-lazy-type="image"
                          src={data.listCard[1].image}
                        />
                      </div>
                      <div className="divtext">
                        <div className="t1">{ReactHtmlParser(data.listCard[1].note_1)}</div>
                        <div className="t2">{ReactHtmlParser(data.listCard[1].note_2)}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {data && data.listCard && data.listCard[2] ? (
                  <div className="col-lg-4 col-sm-6">
                    <div className="item item-2  ">
                      <div className="img tRes_92">
                        <img
                          className="loaded loaded"
                          data-lazy-type="image"
                          src={data.listCard[2].image}
                        />
                      </div>
                      <div className="divtext">
                        <div className="t1">{ReactHtmlParser(data.listCard[2].note_1)}</div>
                        <div className="t2">{ReactHtmlParser(data.listCard[2].note_2)}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {data && data.listCard && data.listCard[3] ? (
                  <div className="col-lg-4 col-sm-6">
                    <div className="item item-2  ">
                      <div className="img tRes_92">
                        <img
                          className="loaded loaded"
                          data-lazy-type="image"
                          src={data.listCard[3].image}
                        />
                      </div>
                      <div className="divtext">
                        <div className="t1">{ReactHtmlParser(data.listCard[3].note_1)}</div>
                        <div className="t2">{ReactHtmlParser(data.listCard[3].note_2)}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {data && data.listCard && data.listCard[4] ? (
                  <div className="col-lg-4 col-sm-6">
                    <div className="item item-2  ">
                      <div className="img tRes_92">
                        <img
                          className="loaded loaded"
                          data-lazy-type="image"
                          src={data.listCard[4].image}
                        />
                      </div>
                      <div className="divtext">
                        <div className="t1">{ReactHtmlParser(data.listCard[4].note_1)}</div>
                        <div className="t2">{ReactHtmlParser(data.listCard[4].note_2)}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )}
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
