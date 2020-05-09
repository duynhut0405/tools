import React, { useEffect, useState } from 'react';
import { getStoreFont } from '../../services/storefont';
import t from '../../translation';
import { getLang } from '../../utils/cookie';
import PropTypes from 'prop-types';

const propTypes = {
  t: PropTypes.func,
  mobile: PropTypes.bool
};

const getData = async setData => {
  const res = await getStoreFont('linkApp');
  if (res && res !== undefined && res.status === 200) {
    setData(res.data.linkApp);
  }
};

function DownloadApp({ mobile }) {
  const [linkApp, setLinkApp] = useState({ android: '#', ios: '#' });
  const lang = getLang();
  useEffect(() => {
    getData(setLinkApp);
  }, [getData]);

  return (
    <div className={mobile ? 'wdownload' : 'wapp'}>
      {!mobile && (
        <>
          <span className="code">
            <img className="lazyload" data-src="/static/images/svg/qr.svg" alt="images" />
          </span>
          <div className="app">
            <p className="stitle">{t(lang, 'donwload_app_today')}</p>
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
          <span className="stitle">{t(lang, 'donwload_app_today')}</span>
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
}

DownloadApp.propTypes = propTypes;

export default DownloadApp;
