import React from 'react';
import { map, isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

const propType = {
  silder: PropTypes.array.isRequired,
  className: PropTypes.string
};

function Carousels({ silder, className }) {
  const getItems = (index, item) => {
    const url = item.props.children[0].props.href;
    window.location.href = url;
  };
  return (
    <React.Fragment>
      {!isEmpty(silder) && (
        <div className={className}>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            onClickItem={getItems}
            emulateTouch
          >
            {map(silder, (item, index) => (
              <div key={index} className="silder_items">
                <a href={item.url === undefined ? '#' : item.url}>
                  <img src={item.image} alt="icon" />
                </a>
                <div className={`silder_content ${item.options} container`}>
                  <p className="text_content1">{item.note_1}</p>
                  <p className="text_content2">{item.note_2}</p>
                  <p className="text_content3">{item.note_3}</p>
                  {item.text_action !== undefined && (
                    <button>
                      <a href={item.url}>{item.text_action}</a>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </React.Fragment>
  );
}

Carousels.propTypes = propType;

export default Carousels;
