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
  const [center, setCenter] = useState([]);

  useEffect(() => {
    getSettingFooter();
  }, []);

  useEffect(() => {
    setCenter([settingFooter.latitude, settingFooter.longitude]);
  }, [settingFooter.latitude, settingFooter.longitude]);
  console.log(settingFooter);

  return (
    <React.Fragment>
      <main id="main" className="section page-lien-he">
        <div className="container ">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="widget widget-contact">
                <h1 className="widget-title  h2">Liên hệ</h1>
                {ReactHtmlParser(settingFooter.footer_brief)}
                <h3>Thời gian phục vụ khách hàng</h3>
                <p>Buổi sáng: 7h30 - 11h30 </p>
                <p> Buổi chiều: 13h - 17h Từ thứ 2 đến thứ 6 hàng tuần</p>
                <h3>Hotline</h3>
                <div className="phone">{settingFooter.footer_address}</div>
                <h3>Email</h3>
                <p>mb247@mbbank.com.vn</p>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <GoogleMapReact
                center={{
                  lat: 59.95,
                  lng: 30.33
                }}
                bootstrapURLKeys={'AIzaSyBFtaHtOcwUGvv2pDBtMoPrI5NvnUwe2GU'}
                zoom={9}
              ></GoogleMapReact>
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
