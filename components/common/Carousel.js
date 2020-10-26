import React from 'react';
import { useState, useEffect } from 'react';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Carousel } from 'react-responsive-carousel';
import UseWindowResize from "../common/Resize";
// import ImgSliderBlack from '../../public/static/images/bgSliderback.jpg';

const propType = {
  silder: PropTypes.array.isRequired,
  className: PropTypes.string
};

function Carousels({ silder }) {
  const size = UseWindowResize();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [height, setHeight] = useState("430px");
  useEffect(() => {
    setIsMobile(window.innerWidth <= 767 ? true: false)
    setIsTablet(window.innerWidth <= 1199 & window.innerWidth > 767 ? true: false)
    if (isTablet) {
      setHeight("350px");
    }
    if (isMobile) {
      setHeight("280px");
    }
  });
  
  const styleHeight = {
    height: height,
  };
  const styleImg = {
    bottom: "0",
    height: height,
    minWidth: "100%",
    objectFit: "cover"
  }
  return (
    <React.Fragment>
      {!isEmpty(silder) && (
        <>
          {silder[0] &&
            silder[0].options === '3' &&
            map(silder, (item, index) => {
              return (
                <section
                  key={index}
                  className="  sec-dt-1  loaded"
                  style={{
                    backgroundImage: `url("/static/images/bgsliderback.jpg")`
                  }}
                >
                  <div className={`container option-${item.options}`} key={index}>
                    <div className="row center">
                      <div className="col-md-6">
                        <div className="img">
                          <img
                            className="images"
                            alt="images"
                            src={`${process.env.DOMAIN}${item.urlImage}`}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <blockquote>{ReactHtmlParser(item.note_2)}</blockquote>
                        <div className="subquote">
                          <div className="text-center font-weight-bold">-</div>
                          <div className="text-center subquote__people">{item.namePerson}</div>
                          <div className="text-center text-muted subquote__pos">
                            {item.position}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          {silder[0].options === '2' && (
            <section className="silder banner-heading-1 home next-shadow">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                emulateTouch
                showIndicators={false}
              >
                {map(silder, (_item, _index) => {
                  return (
                    <div className={`container  option-2`} key={_index}>
                      <div className="divtext text-left-mg ">
                        <h1 className=" efch-2 ef-img-l">{ReactHtmlParser(_item.note_1)}</h1>
                        <div className="cl1">{ReactHtmlParser(_item.note_2)}</div>
                        <div className="text_content3">{ReactHtmlParser(_item.note_3)}</div>
                        {_item.text_action === null ||
                        _item.text_action === undefined ||
                        _item.text_action === '' ? (
                          ''
                        ) : (
                          <a
                            className="btn"
                            href={
                              _item.url === null || _item.url === undefined || _item.url === ''
                                ? '#'
                                : _item.url
                            }
                          >
                            {_item.text_action}
                          </a>
                        )}
                        {_item.video_url !== undefined && _item.video_url !== '' && (
                          <div>
                            <iframe src={_item.video_url} />
                          </div>
                        )}
                      </div>
                      <div className="wimg wing-no-black-after">
                        <img
                          className="img-center img-pc"
                          src={`${process.env.DOMAIN}${_item.urlImage}`}
                          alt="icon"
                        />
                        <img
                          className="img-center img-mb"
                          src={`${process.env.DOMAIN}${_item.urlImageMobile}`}
                          alt="icon"
                        />
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </section>
          )}
          {silder[0].options === '6' && (
            <section className="silder banner-heading-2 home next-shadow" >
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                emulateTouch
                showIndicators={false}
              >
                {map(silder, (_item, _index) => {
                  return (
                    <div className={`container-custom option-2`} key={_index} style={{ paddingLeft: "0"}}>
                      <div className="container show-768" style={{height: "-webkit-fill-available"}}>
                        <div className="divtext text-left-mg custom-banner-text" style={{color: "#fff", fontSize: "18px", fontWeight: "600", left: "15px",  maxWidth:"740px"}}>
                          {ReactHtmlParser(_item.note_2)}
                          <h1 className=" efch-2 ef-img-l h1-custom" style={{color: "#fff"}}>{ReactHtmlParser(_item.note_1)}</h1>
                          {/* <div className="text_content3">{_item.note_3}</div> */}
                          {_item.text_action === null ||
                          _item.text_action === undefined ||
                          _item.text_action === '' ? (
                            ''
                          ) : (
                            <a
                              className="btn"
                              href={
                                _item.url === null || _item.url === undefined || _item.url === ''
                                  ? '#'
                                  : _item.url
                              }
                            >
                              {_item.text_action}
                            </a>
                          )}
                          {_item.video_url !== undefined && _item.video_url !== '' && (
                            <div>
                              <iframe src={_item.video_url} />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="wimg show-768">
                        <img 
                          className="img img-pc " style={{ objectFit: "cover"}}
                          src={`${process.env.DOMAIN}${_item.urlImage}`}
                          alt="icon"
                        />
                      </div>
                      <div className="container show-767" style={{height: "-webkit-fill-available"}}>
                        <div className="divtext1 text-left-mg custom-banner-text" style={{color: "#fff", fontSize: "18px", fontWeight: "600", left: "15px",  maxWidth:"740px"}}>
                          {ReactHtmlParser(_item.note_2)}
                          <h1 className=" efch-2 ef-img-l h1-custom" style={{color: "#fff"}}>{ReactHtmlParser(_item.note_1)}</h1>
                          {/* <div className="text_content3">{_item.note_3}</div> */}
                          {_item.text_action === null ||
                          _item.text_action === undefined ||
                          _item.text_action === '' ? (
                            ''
                          ) : (
                            <a
                              className="btn"
                              href={
                                _item.url === null || _item.url === undefined || _item.url === ''
                                  ? '#'
                                  : _item.url
                              }
                            >
                              {_item.text_action}
                            </a>
                          )}
                          {_item.video_url !== undefined && _item.video_url !== '' && (
                            <div>
                              <iframe src={_item.video_url} />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="wimg show-767">
                        <img
                          className="img-center img-mb img-banner-custom"
                          src={`${process.env.DOMAIN}${_item.urlImageMobile}`}
                          alt="icon"
                        />
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </section>
          )}
          {silder[0].options === '4' && (
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                emulateTouch
                showIndicators={false}
              >
                {map(silder, (_item, _index) => {
                  return (
                    <section className="banner-heading-5" style={styleHeight}>
                      <div className="container" style={styleHeight}>
                        <div className="divtext">
                          <div className="item-group space-20">
                            <a href={_item.url} target="_blank" className="item-group-addon img"><img className="img-center" src={`${process.env.DOMAIN}${_item.urlImageIcon}`} alt=""/></a>
                          <span className="item-group-content center">
                            <h1 className=" efch-2 ef-img-l" style={{color: "#fff", transform: "none"}}>{ReactHtmlParser(_item.note_1)}</h1>
                          </span>
                          </div>
                        </div>
                      </div>
                      <div className="wing wing-custom" style={styleHeight}>
                      {size.width >= 768 ? (
                          <img
                          className="img-center"
                          src={`${process.env.DOMAIN}${_item.urlImage}`}
                          alt="icon"
                          style= {styleImg}
                        />
                        ): (
                          <img
                          className="img-center"
                          src={`${process.env.DOMAIN}${(_item.urlImageMobile !== undefined & _item.urlImageMobile !== null)? _item.urlImageMobile : _item.urlImage}`}
                          alt="icon"
                          style= {styleImg}
                        />
                        )} 
                      </div>
                      
                      </section>
                  );
                })}
              </Carousel>
          )}
          {silder[0].options === '7' && (
              <div class="custom-slider-1"  style={{backgroundImage: `url(${process.env.DOMAIN}${silder[0].urlImage})`, backgroundPosition: "50px", backgroundRepeat: "no-repeat", textAlign: "center", top: "0px", position: "absolute", zIndex: "-3"}}>
              {/* <img src={`${process.env.DOMAIN}${silder[0].urlImage}`} style="visibility: hidden;" /> */}
              <img src={`${process.env.DOMAIN}${silder[0].urlImage}`} alt="" style= {{visibility: "hidden"}}/>
              <div className="container" style={{position: "relative", bottom: "108px"}}>
                <div className="divtext">
                  <div className="item-group space-20">
                  <h1 className=" efch-2 ef-img-l" style={{color: "#141ED2", textTransform: "none", fontSize: "44px"}}>{ReactHtmlParser(silder[0].note_1)}</h1>
                  </div>
                </div>
              </div>
              {/* <div className="wing wing-custom" style={styleHeight}>
                <img className="img-center" src={`${process.env.DOMAIN}${silder[0].urlImage}`} alt="" style= {styleImg}/>
              </div> */}
              
              </div>
          )}
          {silder[0].options === '5' && (
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={false}
                emulateTouch
                showIndicators={false}
              >
                {map(silder, (_item, _index) => {
                  return (
                    <section className="banner-heading-5" style={styleHeight}>
                      <div className="container" style={styleHeight}>
                        <div className="divtext">
                          <div className="item-group space-20">
                          <h1 className=" efch-2 ef-img-l" style={{color: "#fff", transform: "none"}}>{ReactHtmlParser(_item.note_1)}</h1>
              
                          </div>
                        </div>
                      </div>
                      <div className="wing wing-custom" style={styleHeight}>
                        {/* <img className="img-center" src={`${process.env.DOMAIN}${_item.urlImage}`} alt="" style= {styleImg}/> */}
                        
                        {size.width >= 768 ? (
                          <img
                          className="img-center"
                          src={`${process.env.DOMAIN}${_item.urlImage}`}
                          alt="icon"
                          style= {styleImg}
                          />
                        ) : (
                          <img
                          className="img-center"
                          src={`${process.env.DOMAIN}${_item.urlImageMobile}`}
                          alt="icon"
                          style= {styleImg}
                          />
                        )}
                      </div>
                      
                      </section>
                  );
                })}
              </Carousel>
          )}
        </>
      )}
    </React.Fragment>
  );
}

Carousels.propTypes = propType;

export default Carousels;
