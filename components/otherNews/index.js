import React, { useState } from 'react';
import { ListDowloadFIle } from '../common/download';
import { TabQuestion } from './tab';
import PropTypes from 'prop-types';
import t from '../../translation';
// import { LinkCategory } from '../common/link';
// import { getLang } from '../../utils/cookie';

const propTypes = {
  data: PropTypes.object,
  id: PropTypes.number
};
function OtherNews({ data, id }) {
  const [activeTab, setActiveTab] = useState(1);
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
  // const lang = getLang();

  return (
    <div className={`${padding} otherNews`} id={id}>
      <div className="container">
        <div className="entry-head title-padding">
          <h2 className="ht efch-1 ef-img-l">{data.titleBlock}</h2>
          <p className="cl5"></p>
          {/* <LinkCategory
            lang={lang}
            name={
              activeTab === 1
                ? `hoi-ap`
                : activeTab === 2
                ? 'bao-cao-xep-hang-tin-nhiem'
                : 'tai-lieu-bieu-mau'
            }
          >
            <a className="viewall">
              {t('view')}
              <i className="icon-arrow-1"></i>
            </a>
          </LinkCategory> */}
        </div>
        <div className="cttab-v3 tabs-total-3">
          <div className="wrap-tab-menu">
            <div className="tab-menu max750">
              <div className={activeTab === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}>
                <span>{t('question_answer')}</span>
              </div>
              <div className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}>
                <span>{t('rating_report')}</span>
              </div>
              <div className={activeTab === 3 ? 'active' : ''} onClick={() => setActiveTab(3)}>
                <span>{t('documents')}</span>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div className={activeTab === 1 ? 'active' : ''}>
              {activeTab === 1 && <TabQuestion text={data.question} />}
            </div>
            <div className={activeTab === 2 ? 'active' : ''}>
              {activeTab === 2 && <ListDowloadFIle type={8} noQuestion />}
            </div>
            <div className={activeTab === 3 ? 'active' : ''}>
              {activeTab === 3 && <ListDowloadFIle type={5} noQuestion />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

OtherNews.propTypes = propTypes;

export default OtherNews;
