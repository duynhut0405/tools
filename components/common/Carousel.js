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

  return (
    <React.Fragment>
      {!isEmpty(silder) && (
        <section className=" banner-heading-1 home next-shadow">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            emulateTouch
            showIndicators={false}
          >
            {map(silder, (item, index) => (
              <div className="container" key={index}>
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
                      <iframe src={item.video_url} />
                    </div>
                  )}
                </div>
                <div className="wimg">
                  <img
                    className={item.options === '2' ? 'img-center img-pc' : 'img-right img-pc'}
                    src={`${process.env.DOMAIN}${item.urlImage}`}
                    alt="icon"
                  />
                  <img
                    className={item.options === '2' ? 'img-center img-mb' : 'img-right img-mb'}
                    src={`${process.env.DOMAIN}${item.urlImageMobile}`}
                    alt="icon"
                  />
                </div>
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
