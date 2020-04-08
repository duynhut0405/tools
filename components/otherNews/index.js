import React, { useState } from 'react';
import { ListDowloadFIle } from '../common/download';
import { useTranslation } from 'react-i18next';
import { TabQuestion } from './tab';
import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';

const propTypes = {
  data: PropTypes.object
};
function OtherNews({ data }) {
  const [activeTab, setActiveTab] = useState(1);
  const { t } = useTranslation();
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
    <div className={`container ${padding}`}>
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
            {activeTab === 1 && <TabQuestion />}
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
  );
}

OtherNews.propTypes = propTypes;

OtherNews.getInitialProps = async () => ({
  namespacesRequired: ['common', 'OtherNews']
});

export default withTranslation('common')(OtherNews);
