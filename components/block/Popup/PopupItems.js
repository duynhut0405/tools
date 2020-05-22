import React from 'react';
import Proptypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { LinkPage } from '../../common/link';
import { getLang } from '../../../utils/cookie';

const propTypes = {
  item: Proptypes.object,
  modal: Proptypes.bool,
  setModal: Proptypes.func
};
function PopupItems({ item, modal, setModal }) {
  const lang = getLang();

  const onClose = () => {
    setModal(!modal);
    document.body.classList.remove('showModal');
  };

  return (
    <React.Fragment>
      <div id="lanhdaoModal" className={`myModal lanhdaoModal ${modal ? `active` : null}`}>
        <span className="btnModal overlay" onClick={onClose}></span>
        <div className="container max950 ">
          <div className="contentModal">
            <span className="btnModal btn-close" onClick={onClose}>
              <i className="icon-close"> </i>
            </span>
            <div className="logo">
              {lang === 'vi' && (
                <LinkPage lang={lang} name="/">
                  <a>
                    <img className="lazyload" data-src="/images/logo-blue.svg" alt="images" />
                  </a>
                </LinkPage>
              )}
              {lang === 'en' && (
                <LinkPage lang={lang} name="/en">
                  <a>
                    <img className="lazyload" data-src="/images/logo-blue.svg" alt="images" />
                  </a>
                </LinkPage>
              )}
            </div>
            <div className="row bottom">
              <div className="col-md-5">
                <div className="img tRes">
                  <img
                    className="lazyload"
                    src={`${process.env.DOMAIN}${item.urlImage}`}
                    alt="images"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="divtext">
                  <h2 className="title ">{item.name}</h2>
                  <h3 className="position ">{item.position}</h3>
                  <div className="desc ">{ReactHtmlParser(item.description)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

PopupItems.propTypes = propTypes;

export default PopupItems;
