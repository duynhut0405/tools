import React from 'react';
import t from '../../translation';
import PropTypes from 'prop-types';

const propTypes = {
  t: PropTypes.func,
  mobile: PropTypes.bool,
  linkApp: PropTypes.object
};

const DownloadApp = ({ mobile, linkApp }) => {
  return (
    <div className={mobile ? 'wdownload' : 'wapp'}>
      {!mobile && (
        <>
          <span className="code">
            <img className="lazyload" data-src="/static/images/svg/qr.svg" alt="images" />
          </span>
          <div className="app">
            <p className="stitle">{t('donwload_app_today')}</p>
            <a href={linkApp.android} target="_blank" rel="noopener noreferrer">
              <img className="lazyload" data-src="/static/images/btt-google.svg" alt="images" />
            </a>
            &nbsp;
            <a href={linkApp.ios} target="_blank" rel="noopener noreferrer">
              <img className="lazyload" data-src="/static/images/btt-chplay.svg" alt="images" />
            </a>
          </div>
        </>
      )}
      {mobile && (
        <>
          <span className="stitle">{t('donwload_app_today')}</span>
          <a href={linkApp.android} target="_blank" rel="noopener noreferrer">
            <img className="lazyload" data-src="/static/images/btt-chplay-mb.svg" alt="images" />
          </a>
          &nbsp;
          <a href={linkApp.ios} target="_blank" rel="noopener noreferrer">
            <img className="lazyload" data-src="/static/images/btt-google-mb.svg" alt="images" />
          </a>
        </>
      )}
    </div>
  );
};

DownloadApp.propTypes = propTypes;

export default DownloadApp;
