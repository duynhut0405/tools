import React from 'react';
import { map, isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Carousel } from 'react-responsive-carousel';
// import ImgSliderBlack from '../../public/static/images/bgSliderback.jpg';

const propType = {
  silder: PropTypes.array.isRequired,
  className: PropTypes.string
};

function Carousels({ silder }) {
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
            })}
          {silder[0].options !== '3' && (
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
                        <div className="text_content3">{_item.note_3}</div>
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
                      <div className="wimg">
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
        </>
      )}
    </React.Fragment>
  );
}

Carousels.propTypes = propType;

export default Carousels;
