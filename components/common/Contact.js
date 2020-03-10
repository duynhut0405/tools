import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { LayoutActions } from '../../store/actions';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

const propTypes = {
  settingFooter: PropTypes.object,
  getSettingFooter: PropTypes.func
};

function Contact({ settingFooter, getSettingFooter }) {
  useEffect(() => {
    getSettingFooter();
  }, []);
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <React.Fragment>
      <main id="main" className="section page-lien-he">
        <div className="container ">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="widget widget-contact">
                <h1 className="widget-title  h2">Liên hệ</h1>
                {settingFooter.information && (
                  <React.Fragment>
                    <h3>Hội sở chính MBBank:</h3>
                    <p>{settingFooter.information.place}</p>
                    <h3>Thời gian phục vụ khách hàng</h3>
                    <p>{settingFooter.information.time}</p>
                    <h3>Hotline</h3>
                    <div className="phone">{settingFooter.information.hotLine}</div>
                    <p>{settingFooter.information.international}</p>
                    <h3>Email</h3>
                    <p>{settingFooter.information.email}</p>
                  </React.Fragment>
                )}
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              {!isNaN(Number(settingFooter.latitude)) && (
                <GoogleMapReact
                  bootstrapURLKeys={{ key: ' AIzaSyBFtaHtOcwUGvv2pDBtMoPrI5NvnUwe2GU' }}
                  center={{
                    lat: Number(settingFooter.latitude),
                    lng: Number(settingFooter.longitude)
                  }}
                  zoom={18}
                >
                  <AnyReactComponent
                    lat={Number(settingFooter.latitude)}
                    lng={Number(settingFooter.longitude)}
                    text="Ngân Hàng"
                  />
                </GoogleMapReact>
              )}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

Contact.propTypes = propTypes;

const mapStateToProps = state => {
  return {
    settingFooter: state.layoutReducer.settingFooter
  };
};

const mapDispatchToProps = {
  getSettingFooter: LayoutActions.getSettingFooterAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
