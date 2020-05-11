import Proptypes from 'prop-types';
import React from 'react';
import t from '../../../translation';
import { getLang } from '../../../utils/cookie';
import { LinkPage } from '../../common/link';

const propTypes = {
  item: Proptypes.object,
  modal: Proptypes.bool,
  setModal: Proptypes.func
};
function PopupItems({ modal, setModal }) {
  const lang = getLang();
  return (
    <div id="thankyouModal" className={`myModals thankyouModal ${modal ? `active` : null}`}>
      <span className="btnModal overlay"></span>
      <div className="container  max500 middle">
        <div className="contentModal">
          <span className="btnModal btn-close" onClick={setModal}>
            <i className="icon-close"> </i>
          </span>
          <div className="logo">
            {lang === 'vi' && (
              <LinkPage name="/" lang={lang}>
                <a>
                  <img className="lazyload" data-src="/images/logo-blue.svg" alt="images" />
                </a>
              </LinkPage>
            )}
            {lang === 'en' && (
              <LinkPage name="/en" lang={lang}>
                <a>
                  <img className="lazyload" data-src="/images/logo-blue.svg" alt="images" />
                </a>
              </LinkPage>
            )}
          </div>
          <div className="divtext">
            <h2 className="title cl1">{t('thank')}</h2>
            <div className="desc ">
              <p>{t('thankyou')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PopupItems.propTypes = propTypes;

export default PopupItems;
