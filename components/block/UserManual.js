import React, { useState } from 'react';
// import { ItemImages, ItemIcon } from './product/index';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import UseWindowResize from '../common/Resize';

const propTypes = {
  data: PropTypes.array,
  id: PropTypes.number
};

function UserManual({ data, id }) {
  let padding = '';
  if (data.optionWidth === '2') {
    padding = 'sec-tb';
  } else if (data.optionWidth === '3') {
    padding = 'sec-t';
  } else if (data.optionWidth === '4') {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }

  const [step, setStep] = useState(1);
  const size = UseWindowResize();
  const styleImg = {
    backgroundImage: `url(${data.image})`
  };
  const styleWidth = {
    width: '248px'
  };

  const handleOnClickStep = value => {
    setStep(value);
  };

  return (
    <section className={`${padding} userManual sec-hoa-don`}>
      <div className="container">
        <div className={`row center`}>
          <div className={`col-md-5 mobileOrder`}>
            <div className="w-sync-1 loaded" style={styleImg}>
              <div className="sync-1 owl-carousel s-loop owl-loaded owl-drag" paramowl="margin=0">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: 'translate3d(-744px, 0px, 0px)',
                      transition: 'all 0s ease 0s',
                      width: '2976px'
                    }}
                  >
                    <div className="owl-item cloned" style={styleWidth}>
                      <div className="item">
                        {' '}
                        <img
                          className="lazyload"
                          src={data.listDetail[0].image}
                          alt="images"
                        />{' '}
                      </div>
                    </div>
                    <div className="owl-item cloned" style={styleWidth}>
                      <div className="item">
                        <img className="lazyload" src={data.listDetail[0].image} alt="images" />{' '}
                      </div>
                    </div>
                    <div className="owl-item cloned" style={styleWidth}>
                      <div className="item">
                        <img className="lazyload" src={data.listDetail[0].image} alt="images" />
                      </div>
                    </div>

                    <div className="owl-item active" style={styleWidth}>
                      <div className="item">
                        <img
                          className="lazyload"
                          alt="images"
                          src={data.listDetail[step - 1].image}
                          style={{ opacity: 1 }}
                        />{' '}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav disabled">
                  <div className="owl-prev">
                    <i className="icon-arrow-1 ix"></i>
                  </div>
                  <div className="owl-next">
                    <i className="icon-arrow-1"></i>
                  </div>
                </div>
                <div className="owl-dots disabled"></div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="sync-3 stepMobile">
              {map(data.listDetail, (item, index) => {
                const style = index + 1 === step ? 'item active' : 'item';
                return (
                  <div className={style} key={index} onClick={() => handleOnClickStep(index + 1)}>
                    <span className="number click">{index + 1}</span>
                    {size.width >= 768 && <h4 className="title click">{item.step}</h4>}
                    <div className="desc show-768">{item.description}</div>
                  </div>
                );
              })}
            </div>
            {map(data.listDetail, (item, index) => {
              if (index + 1 === step) {
                return <div className="text-center show-767">{item.description}</div>;
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

UserManual.propTypes = propTypes;

export default UserManual;
