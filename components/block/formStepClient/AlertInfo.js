import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody } from 'reactstrap';

const AlertInfo = props => {
  const { closeModal, showActiveAlertInfo, activeAlertInfo } = props;
  return (
    <Modal id="cautionModal" isOpen={activeAlertInfo} toggle={showActiveAlertInfo}>
      <ModalBody>
        <div className="myModal c-caution-modal active">
          <span className="btnModal overlay" onClick={closeModal}></span>
          <div className="container middle">
            <div className="contentModal">
              <span className="btnModal btn-close" onClick={closeModal}>
                <i className="icon-close"></i>
              </span>
              <div className="flexible-content">
                <span className="big_icon">
                  <img src="/static/images/caution.svg" alt="icon" />
                </span>
                <div className="info1">
                  <h2 className="info1_title1">{t('note')}</h2>
                  <p className="info1_text1">
                    Xin quý khách hàng vui lòng đọc và cam kết theo các điều khoản của MB trước khi
                    hoàn thành đăng ký gói MB Home.
                  </p>
                </div>
              </div>
              <div className="corner1">
                <img src="/static/images/corner-popup.png" alt="corner-popup.png" />
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

AlertInfo.propTypes = {
  activeAlertInfo: PropTypes.bool,
  closeModal: PropTypes.func,
  showActiveAlertInfo: PropTypes.func
};

export default AlertInfo;
