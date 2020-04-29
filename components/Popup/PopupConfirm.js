import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const PropsType = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onComfirm: PropTypes.func
};

const PopupConfirm = ({ open, onClose, onComfirm }) => {
  const { t } = useTranslation();
  return (
    <Modal isOpen={open} toggle={onClose} id="exampleModalCenter">
      <div id="thankyouModal" className="myModal  thankyouModal ">
        <span className="btnModal overlay"></span>
        <div className="container  max500 middle">
          <div className="contentModal text-center">
            <span className="btnModal btn-close">
              <i className="icon-close"> </i>
            </span>
            <div className="logo">
              <a href="./">
                <img src="/static/images/logo-blue.svg" alt="" />
              </a>
            </div>
            <div className="divtext">
              <h2 className="title cl1">Thank you</h2>
              <div className="desc ">
                <p>
                  Cảm ơn bạn đã liên hệ tới MBBank, chúng tôi sẽ phản hồi lại bạn trong thời gian
                  sớm nhất.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
PopupConfirm.propTypes = PropsType;

export default PopupConfirm;

// <ModalHeader toggle={onClose}>{t('confirm')}</ModalHeader>
//       <ModalBody>{t('questionConfirm')}</ModalBody>
//       <ModalFooter>
//         <Button className="blue-dark" color="primary" onClick={onComfirm}>
//           {t('delete')}
//         </Button>
//         <Button color="secondary" onClick={onClose}>
//           {t('close')}
//         </Button>
//       </ModalFooter>
