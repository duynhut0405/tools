import PropTypes from 'prop-types';
import React from 'react';
import { CaptionModal1 } from './componentModal/CaptionModal1';
import { CaptionModal2 } from './componentModal/CaptionModal2';

const WrapModal = props => {
  const { id, children, showModalContinue, closeModal, flag = false } = props;

  return (
    <div id={id} className="myModal c-checked-modal active">
      {flag && (
        <span
          className="btnModal overlay"
          style={{ display: 'inline-block', height: '182vh' }}
          onClick={closeModal}
        ></span>
      )}
      {!flag && (
        <span
          className="btnModal overlay"
          style={{ display: 'inline-block', height: '475vh' }}
          onClick={closeModal}
        ></span>
      )}
      <div className="container">
        <div className="contentModal">
          <span className="btnModal btn-close" onClick={closeModal}>
            <i className="icon-close" />
          </span>
          <div className="content">
            <span className="big_icon">
              <img src="/static/images/svg/location-icon.svg" alt="icon" />
            </span>
            <section className="info1 info1-mb1">
              <h1 className="c-title1">Bước tới thành công</h1>
              {flag && <CaptionModal1 />}
              {!flag && <CaptionModal2 />}
            </section>
            {flag && (
              <div className="c-checked-modal__block1">
                <div className="row">{children}</div>
              </div>
            )}
            {!flag && <>{children}</>}
            <div className="mb-50">
              <div className="row">
                <div className="col-12 text-center">
                  {flag && (
                    <a href="#" className="btn" onClick={showModalContinue}>
                      Chọn
                    </a>
                  )}
                </div>
              </div>
            </div>
            <section className="modal-footer">
              <div className="row">
                <div className="col-12 col-md-2">
                  <div className="modal-footer_logo1">
                    <img src="/static/images/svg/logo-blue.svg" alt="logo" />
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="modal-footer_text1">
                    <h6>Thông tin chi nhánh:</h6>
                    <p>Toà nhà MBBank - Hội sở 21 Cát Linh, Đống Đa, Hà Nội</p>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="modal-footer_text1">
                    <p>
                      <strong>Hotline: </strong>1900 54 54 26
                    </p>
                    <p>
                      <strong>Email: </strong>mb247@mbbank.com.vn
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="corner1">
            <img src="/static/images/corner1-popup.png" alt="corner1-popup.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

WrapModal.propTypes = {
  children: PropTypes.any,
  closeModal: PropTypes.func,
  flag: PropTypes.bool,
  id: PropTypes.string,
  showModalContinue: PropTypes.func
};

export default WrapModal;
