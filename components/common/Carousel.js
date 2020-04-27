import React from 'react';
import { map, isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Carousel } from 'react-responsive-carousel';

const propType = {
  silder: PropTypes.array.isRequired,
  className: PropTypes.string
};

function Carousels({ silder }) {
  // const getItems = (index, item) => {
  //   const url = item.props.children[0].props.href;
  //   window.location.href = url;
  // };
  console.log(silder);

  return (
    <React.Fragment>
      {!isEmpty(silder) && (
        <section className={` silder banner-heading-1 home next-shadow`}>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            emulateTouch
            showIndicators={false}
          >
            {map(silder, (item, index) => (
              <div className="container" key={index}>
                {item.options === '3' && (
                  <div className="row center">
                    <div className="col-md-6">
                      <div className="img">
                        <img
                          className="lazyload"
                          alt="images"
                          data-src={`${process.env.DOMAIN}${item.urlImage}`}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <blockquote>{ReactHtmlParser(item.note_2)}</blockquote>
                      <div className="sub-quote">
                        <div className="text-center font-weight-bold">-</div>
                        <div className="text-center text-uppercase">{item.namePerson}</div>
                        <div className="text-center text-uppercase ">{item.position}</div>
                      </div>
                    </div>
                  </div>
                )}
                {item.options === '1' ||
                  (item.options === '2' && (
                    <>
                      <div className="divtext text-left-mg ">
                        <h1 className=" efch-2 ef-img-l">{ReactHtmlParser(item.note_1)}</h1>
                        <p className="cl1">{ReactHtmlParser(item.note_2)}</p>
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
                            item.options === '2'
                              ? 'img-center img-pc lazyload'
                              : 'img-right img-pc lazyload'
                          }
                          data-src={`${process.env.DOMAIN}${item.urlImage}`}
                          alt="icon"
                        />
                        <img
                          className={
                            item.options === '2'
                              ? 'img-center img-mb lazyload'
                              : 'img-right img-mb lazyload'
                          }
                          data-src={`${process.env.DOMAIN}${item.urlImageMobile}`}
                          alt="icon"
                        />
                      </div>
                    </>
                  ))}
              </div>
            ))}
          </Carousel>
        </section>
      )}
    </React.Fragment>
  );
}

Carousels.propTypes = propType;

export default Carousels;
