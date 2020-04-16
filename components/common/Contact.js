import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { LayoutActions } from '../../store/actions';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

const propTypes = {
  settingFooter: PropTypes.object,
  getSettingFooter: PropTypes.func,
  text: PropTypes.string,
  data: PropTypes.func,
  id: PropTypes.id
};

function Contact({ settingFooter, getSettingFooter, data, id }) {
  useEffect(() => {
    getSettingFooter();
  }, []);
  const AnyReactComponent = ({ text }) => (
    <div>
      <img src="/static/images/_pin.png" alt="pin" />
      <div style={{ width: '200px', color: '#33333', fontWeight: 'bold' }}>{text}</div>
    </div>
  );
  let padding = '';
  if (data.optionWidth === '2') {
    padding = 'sec-tb';
  } else if (data.optionWidth === '3') {
    padding = 'sec-t';
  } else if (data.optionWidth === '4') {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }

  return (
    <React.Fragment>
      <main id="main" className={`${padding} page-lien-he contact`}>
        <div className="container" id={id}>
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
                    <div className="phone">
                      <a href={`tel:${settingFooter.information.hotLine}`}>
                        {settingFooter.information.hotLine}
                      </a>
                    </div>
                    <p>{settingFooter.information.international}</p>
                    <h3>Email</h3>
                    <a href={`mailto:${settingFooter.information.email}`}>
                      {settingFooter.information.email}
                    </a>
                  </React.Fragment>
                )}
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              {!isNaN(Number(settingFooter.latitude)) && (
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyBFtaHtOcwUGvv2pDBtMoPrI5NvnUwe2GU' }}
                  center={{
                    lat: Number(settingFooter.latitude),
                    lng: Number(settingFooter.longitude)
                  }}
                  zoom={16}
                >
                  <AnyReactComponent
                    lat={Number(settingFooter.latitude)}
                    lng={Number(settingFooter.longitude)}
                    text={settingFooter.information.place}
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
