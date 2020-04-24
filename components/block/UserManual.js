import React, { useState } from 'react';
// import { ItemImages, ItemIcon } from './product/index';
import PropTypes from 'prop-types';
import { map } from 'lodash';

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

  return (
    <section className={`${padding} userManual sec-hoa-don`}>
      <div className="container">
        <div className="row center">
          <div className="col-md-5">
            <div
              className="w-sync-1 loaded"
              data-lazy-type="bg"
              data-lazy-src={data.image}
              style={{ backgroundImage: `url(${data.image})` }}
            >
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
                    <div className="owl-item cloned" style={{ width: '248px' }}>
                      <div className="item">
                        {' '}
                        <img className="lazyload" data-src={data.listDetail[0].image} alt="" />{' '}
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: '248px' }}>
                      <div className="item">
                        <img className="lazyload" data-src={data.listDetail[0].image} alt="" />{' '}
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: '248px' }}>
                      <div className="item">
                        <img className="lazyload" data-src={data.listDetail[0].image} alt="" />
                      </div>
                    </div>

                    <div className="owl-item active" style={{ width: '248px' }}>
                      <div className="item">
                        <img
                          className="lazyload"
                          data-src={data.listDetail[step - 1].image}
                          alt=""
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
            <div className="sync-3">
              {map(data.listDetail, (item, index) => {
                const style = index + 1 === step ? 'item active' : 'item';
                return (
                  <div className={style} key={index} onClick={() => setStep(index + 1)}>
                    <span className="number click">{index + 1}</span>
                    <h4 className="title click">{item.step}</h4>
                    <div className="desc ">{item.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

UserManual.propTypes = propTypes;

export default UserManual;
