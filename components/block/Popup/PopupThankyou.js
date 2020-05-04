import Proptypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { withTranslation } from '../../../i18n';

const propTypes = {
  item: Proptypes.object,
  modal: Proptypes.bool,
  setModal: Proptypes.func
};
function PopupItems({ modal, setModal }) {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div
        id="thankyouModal"
        className={`myModal thankyouModal ${modal ? `active` : null}`}
        onClick={setModal}
      >
        <span
          className="btnModal overlay"
          onClick={() => {
            setModal();
            document.body.classList.remove('showModal');
          }}
        ></span>
        <div className="container  max500 middle">
          <div className="contentModal">
            <span
              className="btnModal btn-close"
              onClick={() => {
                setModal();
                document.body.classList.remove('showModal');
              }}
            >
              <i className="icon-close"> </i>
            </span>
            <div className="logo">
              <a href="/">
                <img className="lazyload" data-src="/images/logo-blue.svg" alt="images" />
              </a>
            </div>
            <div className="divtext">
              <h2 className="title cl1">Thank you</h2>
              <div className="desc ">
                <p>{t('thankyou')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

PopupItems.propTypes = propTypes;

export default withTranslation('common')(PopupItems);
