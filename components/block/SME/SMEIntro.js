import React from 'react';
import Proptypes from 'prop-types';
import t from '../../../translation';

const propTypes = {
  data: Proptypes.object,
  indexTab: Proptypes.number,
  optionWidth: Proptypes.number,
  id: Proptypes.number
};

function BlockSMEIntro({ optionWidth, id }) {
  let padding = '';
  if (Number(optionWidth) === 2) {
    padding = 'sec-tb';
  } else if (Number(optionWidth) === 3) {
    padding = 'sec-t';
  } else if (Number(optionWidth) === 4) {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }

  return (
    <section className={`${padding} SMEIntro`} id={id}>
      <div className="container">
        <div className="row list-item">
          <div className="col-md-3 col-sm-6">
            <a href="https://smecare.com.vn/">
              <div className="flex flex-column">
                <div className="img_care">
                  <img
                    className="lazyload"
                    data-src="/static/images/block-SME/SME-thumnail-01.jpg"
                    alt="images"
                  />
                </div>
                <div className="content_care">
                  <h3 className="mg-0 cl1 fs22 uppercase b">Capital</h3>
                  <p className="cl3 fs16 b mb-10">{t('finance')}</p>
                </div>
              </div>
            </a>
          </div>{' '}
          <div className="col-md-3 col-sm-6">
            <a href="https://smecare.com.vn/">
              <div className="flex flex-column">
                <div className="img_care">
                  <img
                    className="lazyload"
                    data-src="/static/images/block-SME/SME-thumnail-02.jpg"
                    alt="images"
                  />
                </div>
                <div className="content_care">
                  <h3 className="mg-0 cl1 fs22 uppercase b">Advertising</h3>
                  <p className="cl3 fs16 b mb-10">{t('the_media')}</p>
                </div>
              </div>
            </a>
          </div>{' '}
          <div className="col-md-3 col-sm-6">
            <a href="https://smecare.com.vn/">
              <div className="flex flex-column">
                <div className="img_care">
                  <img
                    className="lazyload"
                    data-src="/static/images/block-SME/SME-thumnail-03.jpg"
                    alt="images"
                  />
                </div>
                <div className="content_care">
                  <h3 className="mg-0 cl1 fs22 uppercase b">Relation</h3>
                  <p className="cl3 fs16 b mb-10">{t('community')}</p>
                </div>
              </div>
            </a>
          </div>{' '}
          <div className="col-md-3 col-sm-6">
            <a href="https://smecare.com.vn/">
              <div className="flex flex-column">
                <div className="img_care">
                  <img
                    className="lazyload"
                    data-src="/static/images/block-SME/SME-thumnail-04.jpg"
                    alt="images"
                  />
                </div>
                <div className="content_care">
                  <h3 className="mg-0 cl1 fs22 uppercase b">Education</h3>
                  <p className="cl3 fs16 b mb-10">{t('educate')}</p>
                </div>
              </div>
            </a>
          </div>{' '}
        </div>
      </div>
    </section>
  );
}

BlockSMEIntro.propTypes = propTypes;

export default BlockSMEIntro;
