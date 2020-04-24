import React, { useEffect, useState } from 'react';
import { withTranslation } from '../../i18n';
import { getStoreFont } from '../../services/storefont';
import PropTypes from 'prop-types';

const propTypes = {
  t: PropTypes.func
};

const getData = async setData => {
  const res = await getStoreFont('linkApp');
  if (res && res !== undefined && res.status === 200) {
    setData(res.data.linkApp);
  }
};

function DownloadApp({ t }) {
  const [linkApp, setLinkApp] = useState({ android: '#', ios: '#' });
  useEffect(() => {
    getData(setLinkApp);
  }, [getData]);

  return (
    <div className="wapp">
      <span className="code">
        <img className="lazyload" src="/static/images/svg/qr.svg" alt="" />
      </span>
      <div className="app">
        <p className="stitle">{t('donwload_app_today')}</p>
        <a href={linkApp.android} target="_blank" rel="noopener noreferrer">
          <img className="lazyload" src="/static/images/btt-google.svg" alt="" />
        </a>
        &nbsp;
        <a href={linkApp.ios} target="_blank" rel="noopener noreferrer">
          <img className="lazyload" src="/static/images/btt-chplay.svg" alt="" />
        </a>
      </div>
    </div>
  );
}

DownloadApp.propTypes = propTypes;

export default withTranslation('common')(DownloadApp);
