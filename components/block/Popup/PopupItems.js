import React from 'react';
import Proptypes from 'prop-types';
import { Modal, ModalBody } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {
  item: Proptypes.object,
  modal: Proptypes.bool,
  setModal: Proptypes.func
};
function PopupItems({ item, modal, setModal }) {
  const toggle = () => setModal(!modal);

  return (
    <React.Fragment>
      <Modal isOpen={modal} toggle={toggle} centered={true} className="container max950 middle">
        <ModalBody>
          <div className="contentModal">
            <span
              className="btnModal btn-close"
              onClick={() => {
                setModal(!modal);
              }}
            >
              <i className="icon-close"> </i>
            </span>
            <div className="logo">
              <a href="./">
                <img src="/static/images/svg/logo-blue.svg" alt="" />
              </a>
            </div>
            <div className="row bottom">
              <div className="col-md-5">
                <div className="img tRes">
                  <img
                    className=" loaded loaded"
                    data-lazy-type="image"
                    data-lazy-src={item.image}
                    src={item.image}
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="divtext">
                  <h2 className="title" style={{ color: '#141ED2' }}>
                    {item.name}
                  </h2>
                  <h3 className="position ">{item.position}</h3>
                  <div className="desc ">{ReactHtmlParser(item.description)}</div>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

PopupItems.propTypes = propTypes;

export default PopupItems;
