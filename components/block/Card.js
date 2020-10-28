import React from 'react';
import map from 'lodash/map';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import { LinkInput } from '../common/link';
import { getLang } from '../../utils/cookie';
import t from '../../translation';
import TableItem from './Table/Tableitem';
import UseWindowResize from "../common/Resize";

const propTypes = {
  data: PropTypes.any,
  type: PropTypes.string,
  optionWidth: PropTypes.string,
  id: PropTypes.number
};

function Card({ data, type, optionWidth, id }) {
  const size = UseWindowResize();
  let padding = '';
  if (optionWidth === '2') {
    padding = 'sec-tb';
  } else if (optionWidth === '3') {
    padding = 'sec-t';
  } else if (optionWidth === '4') {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }
  const lang = getLang();
  return (
    <React.Fragment>
      {type === '1' && (
        <React.Fragment>
          <section className={`${padding} bg-gray card-${type}`} id={id}>
            <div className="container">
              <div className="entry-head ">
                <h2 className="title-custom">{data === null ? '' : data.title}</h2>
              </div>
              <div className="list-10 row list-item">
                {map(data.listCard, (items, index) => {
                  return (
                    <div className="col-sm-6" key={index}>
                      {/* <a href="#" className={`item item-${index + 1} tRes_55`}> */}
                      <a
                        href={items.url}
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
          <section className={`${padding} card-${type}`} id={id}>
            <div className="container">
            <p className="text-center fs16">{ReactHtmlParser(data.descrip)}</p>
              <div className="text-center" style={{padding: "30px"}}>
                <h2 className="ht efch-1 ef-img-l">{data === null ? '' : ReactHtmlParser(data.title)}</h2>
              </div>
              <br />
              <div className="">
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
                              <img
                                className="lazyload"
                                data-src={`${process.env.DOMAIN}${items.urlImage}`}
                                alt="images"
                                style={{visibility:"hidden", display: size.width < 768 ? "none": "block"}}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <span className="circle circle-custom-line"></span>
                            <div className="divtext efch-2 ef-tx-t" style= {{textAlign: (index + 1) % 2 === 0 ? "right" : "left"}}>
                              <h4 style={{fontWeight: "400",marginTop:"6px"}}>{ReactHtmlParser(items.note_2)}</h4>
                              <div className="desc">
                                <div
                                    className="toggleAutoHeight toggleAutoHeight-custom"
                                    data-more="+ Xem thêm"
                                    data-less="- Thu gọn"
                                    data-i=""
                                  >
                                  <TableItem data={items.note_3} maxheight={200} />
                                </div>
                              </div>
                              <div className="img" style={{paddingTop:"10px"}}>
                                <img
                                  className="lazyload"
                                  data-src={`${process.env.DOMAIN}${items.urlImage}`}
                                  alt="images"
                                  
                                />
                              </div>
                              {/* <div className="desc">
                                <div
                                    className="toggleAutoHeight"
                                    data-more="+ Xem thêm"
                                    data-less="- Thu gọn"
                                    data-i=""
                                  >
                                  <TableItem data={items.note_3} maxheight={150} />
                                </div>
                              <div className="img">
                                <img
                                  className="lazyload"
                                  data-src={`${process.env.DOMAIN}${items.urlImage}`}
                                  alt="images"
                                  
                                />
                              </div> */}
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
          <section className={`${padding} sec-ab-4 card-${type} `} id={id}>
            <div className="container">
              <div className="entry-head ">
                {data.title && (
                  <h2 className="ht efch-1 ef-img-l">{data === null ? '' : data.title}</h2>
                )}
              </div>
              <div className="  row grid-space-20 ">
                {data && data.listCard && data.listCard[0] ? (
                  <div className="col-lg-8 col-sm-12 ">
                    <a href={data.listCard[0].url}>
                      <div className="item item-1  ">
                        <div className="img tRes_92">
                          <img
                            className="lazyload"
                            data-src={`${process.env.DOMAIN}${data.listCard[0].urlImage}`}
                            alt="images"
                          />
                        </div>
                        <div className="divtext">
                          <div className="t1">{ReactHtmlParser(data.listCard[0].note_1)}</div>
                          <div className="t2">{ReactHtmlParser(data.listCard[0].note_2)}</div>
                        </div>
                      </div>
                    </a>
                  </div>
                ) : (
                  ''
                )}
                {data && data.listCard && data.listCard[1] ? (
                  <div className="col-lg-4 col-sm-6">
                    <a href={data.listCard[1].url}>
                      <div className="item item-2  ">
                        <div className="img tRes_92">
                          <img
                            className="lazyload"
                            data-src={`${process.env.DOMAIN}${data.listCard[1].urlImage}`}
                            alt="images"
                          />
                        </div>
                        <div className="divtext">
                          <div className="t1">{ReactHtmlParser(data.listCard[1].note_1)}</div>
                          <div className="t2">{ReactHtmlParser(data.listCard[1].note_2)}</div>
                        </div>
                      </div>
                    </a>
                  </div>
                ) : (
                  ''
                )}
                {data && data.listCard && data.listCard[2] ? (
                  <div className="col-lg-4 col-sm-6">
                    <a href={data.listCard[2].url}>
                      <div className="item item-2  ">
                        <div className="img tRes_92">
                          <img
                            className="lazyload"
                            data-src={`${process.env.DOMAIN}${data.listCard[2].urlImage}`}
                            alt="images"
                          />
                        </div>
                        <div className="divtext">
                          <div className="t1">{ReactHtmlParser(data.listCard[2].note_1)}</div>
                          <div className="t2">{ReactHtmlParser(data.listCard[2].note_2)}</div>
                        </div>
                      </div>
                    </a>
                  </div>
                ) : (
                  ''
                )}
                {data && data.listCard && data.listCard[3] ? (
                  <div className="col-lg-4 col-sm-6">
                    <a href={data.listCard[3].url}>
                      <div className="item item-2  ">
                        <div className="img tRes_92">
                          <img
                            className="lazyload"
                            data-src={`${process.env.DOMAIN}${data.listCard[3].urlImage}`}
                            alt="images"
                          />
                        </div>
                        <div className="divtext">
                          <div className="t1">{ReactHtmlParser(data.listCard[3].note_1)}</div>
                          <div className="t2">{ReactHtmlParser(data.listCard[3].note_2)}</div>
                        </div>
                      </div>
                    </a>
                  </div>
                ) : (
                  ''
                )}
                {data && data.listCard && data.listCard[4] ? (
                  <div className="col-lg-4 col-sm-6">
                    <a href={data.listCard[4].url}>
                      <div className="item item-2  ">
                        <div className="img tRes_92">
                          <img
                            className="lazyload"
                            data-src={`${process.env.DOMAIN}${data.listCard[4].urlImage}`}
                            alt="images"
                          />
                        </div>
                        <div className="divtext">
                          <div className="t1">{ReactHtmlParser(data.listCard[4].note_1)}</div>
                          <div className="t2">{ReactHtmlParser(data.listCard[4].note_2)}</div>
                        </div>
                      </div>
                    </a>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {type && type === '7' && (
        <React.Fragment>
          <section className={`${padding} sec-ab-4 card-${type} `} id={id}>
            <div className="container">
              <div className="entry-head text-center" style={{borderBottom: "1px solid #DADADA",paddingBottom: "10px"}}>
                {data.title && (
                  <h2 className="title-custom">{data === null ? '' : ReactHtmlParser(data.title)}</h2>
                )}
                {data.nextUrl && (
                  <LinkInput lang={lang} name={data.nextUrl}>
                    <a className="viewall-custom">
                      {t('view')}
                      <i className="icon-arrow-1"></i>
                    </a>
                  </LinkInput>
                )}
              </div>
              <div className="  row ">
                {data && data.listCard && data.listCard[0] ? (
                  <div className="col-md-3 col-6 efch-2 ef-img-t">
                    <div className="item">
                      <a href={data.listCard[0].url}>
                          <div className="img text-center">
                            <img
                              className="lazyload"
                              data-src={`${process.env.DOMAIN}${data.listCard[0].urlImage}`}
                              alt="images"
                            />
                          </div>
                      </a>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {data && data.listCard && data.listCard[1] ? (
                  <div className="col-md-3 col-6 efch-2 ef-img-t">
                    <div className="item">
                      <a href={data.listCard[1].url}>
                          <div className="img text-center">
                            <img
                              className="lazyload"
                              data-src={`${process.env.DOMAIN}${data.listCard[1].urlImage}`}
                              alt="images"
                            />
                          </div>
                      </a>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {data && data.listCard && data.listCard[2] ? (
                  <div className="col-md-3 col-6 efch-2 ef-img-t">
                    <div className="item">
                      <a href={data.listCard[2].url}>
                          <div className="img text-center">
                            <img
                              className="lazyload"
                              data-src={`${process.env.DOMAIN}${data.listCard[2].urlImage}`}
                              alt="images"
                            />
                          </div>
                      </a>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {data && data.listCard && data.listCard[3] ? (
                  <div className="col-md-3 col-6 efch-2 ef-img-t">
                    <div className="item">
                      <a href={data.listCard[3].url}>
                          <div className="img text-center">
                            <img
                              className="lazyload"
                              data-src={`${process.env.DOMAIN}${data.listCard[3].urlImage}`}
                              alt="images"
                            />
                          </div>
                      </a>
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
      {type && type === '8' && (
        <React.Fragment>
          <section className={`sec-n-h1 group-ef loaded next-shadow next-shadow-none`} id={id}>
            <div className="container">
              <div className="wsec">
                {size.width > 768 ? (
                  <div className="title efch-1 ef-img-t">{data === null ? '' : ReactHtmlParser(data.title)}</div>
                ) : (
                  <div className="title efch-1 ef-img-t" style={{ paddingLeft: "2%", paddingBottom: "15px"}}>{data === null ? '' : ReactHtmlParser(data.title)}</div>
                )}
                {size.width > 768 ? (
                  <div className="inner">
                    <div className="row">
                    {data && data.listCard && data.listCard[0] ? (
                      <div className="col-lg-2 col-md-4 col-6">
                        <a className="item  efch-3 ef-img-t" href={data.listCard[0].url}>

                              <img
                                className="lazyload"
                                data-src={`${process.env.DOMAIN}${data.listCard[0].urlImage}`}
                                alt="images"
                              />
                            
                        </a>
                      </div>
                    ) : (
                      ''
                    )}
                    {data && data.listCard && data.listCard[1] ? (
                      <div className="col-lg-2 col-md-4 col-6">
                        <a className="item efch-4 ef-img-t" href={data.listCard[1].url}>
                            
                              <img
                                className="lazyload"
                                data-src={`${process.env.DOMAIN}${data.listCard[1].urlImage}`}
                                alt="images"
                              />
                            
                        </a>
                      </div>
                    ) : (
                      ''
                    )}
                    {data && data.listCard && data.listCard[2] ? (
                      <div className="col-lg-2 col-md-4 col-6">
                        <a className="item efch-5 ef-img-t" href={data.listCard[2].url}>
                            
                              <img
                                className="lazyload"
                                data-src={`${process.env.DOMAIN}${data.listCard[2].urlImage}`}
                                alt="images"
                              />
                            
                        </a>
                      </div>
                    ) : (
                      ''
                    )}
                    {data && data.listCard && data.listCard[3] ? (
                      <div className="col-lg-2 col-md-4 col-6">
                        <a className="item efch-6 ef-img-t" href={data.listCard[3].url}>
                            
                              <img
                                className="lazyload"
                                data-src={`${process.env.DOMAIN}${data.listCard[3].urlImage}`}
                                alt="images"
                              />
                            
                        </a>
                      </div>
                    ) : (
                      ''
                    )}
                    {data && data.listCard && data.listCard[4] ? (
                      <div className="col-lg-2 col-md-4 col-6">
                        <a className="item efch-7 ef-img-t" href={data.listCard[4].url}>
                            
                              <img
                                className="lazyload"
                                data-src={`${process.env.DOMAIN}${data.listCard[4].urlImage}`}
                                alt="images"
                              />
                            
                        </a>
                      </div>
                    ) : (
                      ''
                    )}
                    {data && data.listCard && data.listCard[5] ? (
                      <div className="col-lg-2 col-md-4 col-6">
                        
                        <a className="item efch-8 ef-img-t" href={data.listCard[5].url}>
                            
                              <img
                                className="lazyload"
                                data-src={`${process.env.DOMAIN}${data.listCard[5].urlImage}`}
                                alt="images"
                              />
                            
                        </a>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                ) : (
                  <div className="inner convert-grid-to-scroll">
                      <div className="list-5 row" style={{paddingLeft:"10px", paddingRight:"10px"}}>
                      {data && data.listCard && data.listCard[0] ? (
                        <div className="col-6" style={{paddingBottom:"10px"}}>
                          <a className="item item-with-custom efch-3 ef-img-t" href={data.listCard[0].url}>
                                <div className="custom-mobile-div">
                                
                                  <img
                                    className="lazyload img-mobile-custom"
                                    data-src={`${process.env.DOMAIN}${data.listCard[0].urlImage}`}
                                    alt="images"
                                  />
                                
                                </div>
                          </a>
                        </div>
                      ) : (
                        ''
                      )}
                      {data && data.listCard && data.listCard[1] ? (
                        <div className="col-6" style={{paddingBottom:"10px"}}>
                          <a className="item item-with-custom efch-4 ef-img-t" href={data.listCard[1].url}>
                            <div className="custom-mobile-div">
                              
                                <img
                                  className="lazyload img-mobile-custom"
                                  data-src={`${process.env.DOMAIN}${data.listCard[1].urlImage}`}
                                  alt="images"
                                />
                              
                            </div>
                          </a>
                        </div>
                      ) : (
                        ''
                      )}
                      {data && data.listCard && data.listCard[2] ? (
                        <div className="col-6" style={{paddingBottom:"10px"}}>
                          <a className="item item-with-custom efch-5 ef-img-t" href={data.listCard[2].url}>
                            <div className="custom-mobile-div">
                              
                                <img
                                  className="lazyload img-mobile-custom"
                                  data-src={`${process.env.DOMAIN}${data.listCard[2].urlImage}`}
                                  alt="images"
                                />
                              
                            </div>
                          </a>
                        </div>
                      ) : (
                        ''
                      )}
                      {data && data.listCard && data.listCard[3] ? (
                        <div className="col-6" style={{paddingBottom:"10px"}}>
                          <a className="item item-with-custom efch-6 ef-img-t" href={data.listCard[3].url}>
                            <div className="custom-mobile-div" style={{paddingTop:"0px"}}>
                              
                                <img
                                  className="lazyload img-mobile-custom"
                                  data-src={`${process.env.DOMAIN}${data.listCard[3].urlImage}`}
                                  alt="images"
                                />
                              
                            </div>
                          </a>
                        </div>
                      ) : (
                        ''
                      )}
                      {data && data.listCard && data.listCard[4] ? (
                        <div className="col-6" style={{paddingBottom:"10px"}}>
                          <a className="item item-with-custom efch-7 ef-img-t" href={data.listCard[4].url}>
                            <div className="custom-mobile-div">
                              
                                <img
                                  className="lazyload img-mobile-custom"
                                  data-src={`${process.env.DOMAIN}${data.listCard[4].urlImage}`}
                                  alt="images"
                                />
                              
                            </div>
                          </a>
                        </div>
                      ) : (
                        ''
                      )}
                      {data && data.listCard && data.listCard[5] ? (
                        <div className="col-6" style={{paddingBottom:"10px"}}>
                          <a className="item item-with-custom efch-8 ef-img-t" href={data.listCard[5].url}>
                            <div className="custom-mobile-div">
                              
                                <img
                                  className="lazyload img-mobile-custom"
                                  data-src={`${process.env.DOMAIN}${data.listCard[5].urlImage}`}
                                  alt="images"
                                />
                              
                            </div>
                          </a>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
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
