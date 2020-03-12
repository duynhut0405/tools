import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
// import Logo from '../../public/images/svg/logo.svg'
import Logo from '../../../public/images/logo.svg';
const propTypes = {
  item: Proptypes.object,
  modal: Proptypes.bool,
  setModal: Proptypes.func
};
function PopupItems({ item, modal, setModal }) {
  const toggle = () => setModal(!modal);

  return (
    <React.Fragment>
      <Modal isOpen={modal} toggle={toggle} size="lg" centered={true}>
        <ModalHeader toggle={toggle}>
          <img className=" loaded loaded" data-lazy-type="image" src={Logo} />
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <div className="img tRes">
                <img className=" loaded loaded" data-lazy-type="image" src={item.image} />
              </div>
            </Col>
            <Col>
              <div className="divtext">
                <h4 className="title line2" style={{ color: '#141ed2' }}>
                  {item.name}
                </h4>
                <div className="desc line2">{item.position}</div>
              </div>
              {ReactHtmlParser(item.description)}
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

PopupItems.propTypes = propTypes;

export default PopupItems;
