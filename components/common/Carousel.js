import React from 'react';
import { map, isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

const propType = {
  silder: PropTypes.object.isRequired
};

function Carousels({ silder }) {
  const getItems = (index, item) => {
    const url = item.props.children[0].props.href;
    window.location.href = url;
  };
  return (
    <React.Fragment>
      {!isEmpty(silder) && (
        <Carousel
          showThumbs={false}
          autoPlay={silder.autoPlay === 1 ? true : false}
          interval={silder.autoPlaySpeed === undefined ? 3000 : silder.autoPlaySpeed}
          showArrows={silder.arrows === 1 ? true : false}
          showStatus={false}
          infiniteLoop={true}
          onClickItem={getItems}
          emulateTouch
        >
          {map(silder.sliderSlides, (item, index) => (
            <div key={index} className="silder_items">
              <a href={item.callToActionUrl}>
                <img src={item.image} alt="icon" />
              </a>
              <div className={`silder_content ${item.options} container`}>
                <p className="text_content1">{item.caption1}</p>
                <p className="text_content2">{item.caption2}</p>
                <p className="text_content3">{item.caption3}</p>
                <button>
                  <a href={item.callToActionUrl}>
                    {item.callToActionText === null ? 'Xem chi tiết' : item.callToActionText}
                  </a>
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </React.Fragment>
  );
}

Carousels.propTypes = propType;

export default Carousels;
