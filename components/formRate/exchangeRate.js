import React, { useState } from 'react';
import TableRate from './Table';
import PropTypes from 'prop-types';
import t from '../../translation';

function ExchangeRate({ data1, data2 }) {
  const [tab, setTab] = useState('tab1');
  return (
    <div className="cttab-v3 divtigia">
      <div className="tab-menu">
        <div className={tab === 'tab1' ? 'tg-tab active' : 'tg-tab'} onClick={() => setTab('tab1')}>
          {t('exchange_rate')}
        </div>
        <div className={tab === 'tab2' ? 'tg-tab active' : 'tg-tab'} onClick={() => setTab('tab2')}>
          {t('interest_rate')} <span className="cl5 text-normal fs18">(%/ năm)</span>
        </div>
      </div>
      <div className="tab-content">
        <div
          className={tab === 'tab1' ? 'active' : ''}
          style={{ height: '250px', overflow: 'auto' }}
        >
          <div className="tab-inner">
            <TableRate type="exchange" data={data1.exchangeRateDetail} />
          </div>
        </div>
        <div
          className={tab === 'tab2' ? 'active' : ''}
          style={{ height: '250px', overflow: 'auto' }}
        >
          <div className="tab-inner">
            <TableRate type="interest" data={data2} />
          </div>
        </div>
      </div>
    </div>
  );
}

ExchangeRate.propTypes = {
  tab1: PropTypes.string,
  tab2: PropTypes.string,
  data1: PropTypes.object,
  data2: PropTypes.any
};

export default ExchangeRate;
