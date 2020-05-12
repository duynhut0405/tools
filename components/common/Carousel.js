import React from 'react';
import { map, isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Carousel } from 'react-responsive-carousel';
import ImgSliderBlack from '../../public/static/images/bgSliderback.jpg';

const propType = {
  silder: PropTypes.array.isRequired,
  className: PropTypes.string
};

function Carousels({ silder }) {
  return (
    <React.Fragment>
      {!isEmpty(silder) && (
        <div>
          {map(silder, (item, index) => {
            if (item.options === '3') {
              return (
                <section
                  className="  sec-dt-1  loaded"
                  data-lazy-type="bg"
                  data-lazy-src={ImgSliderBlack}
                  style={{
                    backgroundImage: `url("${ImgSliderBlack}")`
                  }}
                >
                  <div className={`container  option-${item.options}`} key={index}>
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
            }
            return (
              <section className="silder banner-heading-1 home next-shadow">
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  infiniteLoop={true}
                  emulateTouch
                  showIndicators={false}
                >
                  {map(silder, (item, index) => {
                    return (
                      <div className={`container  option-${item.options}`} key={index}>
                        <div className="divtext text-left-mg ">
                          <h1 className=" efch-2 ef-img-l">{ReactHtmlParser(item.note_1)}</h1>
                          <div className="cl1">{ReactHtmlParser(item.note_2)}</div>
                          <div className="text_content3">{item.note_3}</div>
                          {item.text_action === null ||
                          item.text_action === undefined ||
                          item.text_action === '' ? (
                            ''
                          ) : (
                            <a
                              className="btn"
                              href={
                                item.url === null || item.url === undefined || item.url === ''
                                  ? '#'
                                  : item.url
                              }
                            >
                              {item.text_action}
                            </a>
                          )}
                          {item.video_url !== undefined && item.video_url !== '' && (
                            <div>
                              <iframe data-src={item.video_url} />
                            </div>
                          )}
                        </div>
                        <div className="wimg">
                          <img
                            className={
                              item.options === '2' ? 'img-center img-pc' : 'img-right img-pc'
                            }
                            src={`${process.env.DOMAIN}${item.urlImage}`}
                            alt="icon"
                          />
                          <img
                            className={
                              item.options === '2' ? 'img-center img-mb' : 'img-right img-mb'
                            }
                            src={`${process.env.DOMAIN}${item.urlImageMobile}`}
                            alt="icon"
                          />
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </section>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
}

Carousels.propTypes = propType;

export default Carousels;
