import React, { useState } from 'react';
import { map } from 'lodash';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.array
};

function Icon({ data }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <section className="sec-tb sec-h-1 group-ef">
      <div className="container">
        <div className="entry-head text-center">
          <h2 className="ht">{data[0].title || ''}</h2>
        </div>
        <div className="menuicon">
          <div className="mauto">
            {data[0].type === '1' && (
              <React.Fragment>
                {data.length > 6 && (
                  <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    alwaysShowChevrons
                    numberOfCards={7}
                    gutter={5}
                    leftChevron={
                      <button
                        style={{
                          height: '42px',
                          width: '42px',
                          borderRadius: '100%',
                          fontSize: '16px',
                          border: '1px solid #141ED2',
                          color: '#141ED2',
                          background: '#FFF'
                        }}
                      >
                        {'<'}
                      </button>
                    }
                    rightChevron={
                      <button
                        style={{
                          height: '42px',
                          width: '42px',
                          borderRadius: '100%',
                          fontSize: '16px',
                          border: '1px solid #141ED2',
                          color: '#141ED2',
                          background: '#FFF'
                        }}
                      >
                        {'>'}
                      </button>
                    }
                    outsideChevron
                    chevronWidth={chevronWidth}
                  >
                    {map(data, (items, index) => (
                      <div className="item ef-img-t item_carousel" key={index}>
                        <a href={items.url} className="link">
                          <div className="img">
                            <img src={items.image} />
                          </div>
                          <div className="title">{items.note_1}</div>
                        </a>
                      </div>
                    ))}
                  </ItemsCarousel>
                )}
                {data.length <= 6 &&
                  map(data, (items, index) => {
                    return (
                      <div className="item ef-img-t" key={index}>
                        <a href={items.url} className="link">
                          <div className="img">
                            <img src={items.image} />
                          </div>
                          <div className="title">{items.note_1}</div>
                        </a>
                      </div>
                    );
                  })}
              </React.Fragment>
            )}
            {data[0].type === '2' && (
              <React.Fragment>
                <div className="row list-item">
                  {map(data, (items, index) => {
                    return (
                      <div className={`col-sm-6 col-md-${data[0].column}`} key={index}>
                        <div className="item">
                          <a href={items.url}>
                            <div className="img ">
                              <img className=" loaded loaded" src={items.image} />
                            </div>
                            <div className="divtext">
                              <h4 className="title">{items.note_1}</h4>
                              <div className="desc">{items.note_2}</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

Icon.propTypes = propTypes;

export default Icon;
