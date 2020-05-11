import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Map from '../../components/common/Map';
import { getSetting } from '../../utils/fetch';
import { getLang } from '../../utils/cookie';
import t from '../../translation';

const propTypes = {
  settingFooter: PropTypes.object,
  getSettingFooter: PropTypes.func,
  text: PropTypes.string,
  data: PropTypes.func,
  id: PropTypes.id
};

function Contact({ data, id }) {
  const [settingFooter, setSettingFooter] = useState({});
  const lang = getLang();

  const fetch = async () => {
    const res = await getSetting(lang);
    setSettingFooter(res.general);
  };

  useEffect(() => {
    fetch();
  }, []);

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
                <h1 className="widget-title  h2">{t('contacts')}</h1>
                {settingFooter.information && (
                  <React.Fragment>
                    <h3>{t('dead_office')}</h3>
                    <p>{settingFooter.information.place}</p>
                    <h3>{t('customer_service_time')}</h3>
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
                <Map
                  zoom={16}
                  location={{
                    lat: Number(settingFooter.latitude),
                    lng: Number(settingFooter.longitude)
                  }}
                  data={[
                    {
                      latitude: Number(settingFooter.latitude),
                      longitude: Number(settingFooter.longitude),
                      address_name: settingFooter.information.place,
                      address: settingFooter.information.place
                    }
                  ]}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

Contact.propTypes = propTypes;

export default Contact;
