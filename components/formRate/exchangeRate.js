import React, { useState } from 'react';
import TableRate from './Table';
import PropTypes from 'prop-types';
import t from '../../translation';

function ExchangeRate({ data1, data2, loan, gold, type, setTypeTable }) {
  const [tab, setTab] = useState('tab1');
  if (type == 1) {
    return (
      <div className="cttab-v3 divtigia">
        <div className="tab-menu">
          <div className={'tg-tab'}>
            {t('exchange_rate')}
          </div>
        </div>
        <div className="tab-content">
          <div
            className="active"
            style={{ height: '250px', overflow: 'auto' }}
          >
            <div className="tab-inner">
              <TableRate type="exchange" data={data1.exchangeRateDetail} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type == 2) {
    return (
      <div className="cttab-v3 divtigia">
        <div className="tab-menu">
          <div className={'tg-tab'}>
          Lãi suất tiền vay <span className="cl5 text-normal fs18">{`(%/ ${t('year')})`}</span>
          </div>
        </div>
        <div className="tab-content">
        <div
          className="active"
          style={{ height: '250px', overflow: 'auto' }}
        >
          <div className="tab-inner">
            <TableRate type="interest" data={loan} />
          </div>
        </div>
        </div>
      </div>
    );
  }
  if (type == 3) {
    return (
      <div className="cttab-v3 divtigia">
        <div className="tab-menu">
          <div className={'tg-tab'}>
            Lãi suất tiền gửi <span className="cl5 text-normal fs18">{`(%/ ${t('year')})`}</span>
          </div>
        </div>
        <div className="tab-content">
        <div
          className="active"
          style={{ height: '200px', overflow: 'auto' }}
        >
          <div className="tab-inner">
            <TableRate type="interest" data={data2} />
          </div>
        </div>
        </div>
      </div>
    );
  }
  if (type == 4) {
    return (
      <div className="cttab-v3 divtigia">
        <div className="tab-menu">
          <div className={'tg-tab'}>
    {t('Gold')}<span className="cl5 text-normal fs18">vnđ/{t('chi_vang')}</span>
          </div>
        </div>
        <div className="tab-content">
        <div
          className="active"
          style={{ height: '250px', overflow: 'auto' }}
        >
          <div className="tab-inner">
          {/* <table className="table">
            <tbody>
              <tr>
                <th>{t('period')}</th>
                <th>VND</th>
                <th>USD</th>
              </tr>
              {map(data, value => {
                return (
                  <tr key={value.id}>
                    <td>{value.term}</td>
                    <td>{`${value.interest_rate} %`}</td>
                    <td>{`${value.interest_rate_usd} %`}</td>
                  </tr>
                );
              })}
            </tbody>
          </table> */}
          </div>
        </div>
        </div>
      </div>
    );
  }
  return null;
  // return (
  //   <div className="cttab-v3 divtigia">
  //     <div className="tab-menu">
  //       <div className={tab === 'tab1' ? 'tg-tab active' : 'tg-tab'} onClick={() => setTab('tab1')}>
  //         {t('exchange_rate')}
  //       </div>
  //       <div className={tab === 'tab2' ? 'tg-tab active' : 'tg-tab'} onClick={() => setTab('tab2')}>
  //         {t('interest_rate')} <span className="cl5 text-normal fs18">{`(%/ ${t('year')})`}</span>
  //       </div>
  //     </div>
  //     <div className="tab-content">
  //       <div
  //         className={tab === 'tab1' ? 'active' : ''}
  //         style={{ height: '250px', overflow: 'auto' }}
  //       >
  //         <div className="tab-inner">
  //           <TableRate type="exchange" data={data1.exchangeRateDetail} />
  //         </div>
  //       </div>
  //       <div
  //         className={tab === 'tab2' ? 'active' : ''}
  //         style={{ height: '250px', overflow: 'auto' }}
  //       >
  //         <div className="tab-inner">
  //           <TableRate type="interest" data={data2} />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

ExchangeRate.propTypes = {
  tab1: PropTypes.string,
  tab2: PropTypes.string,
  data1: PropTypes.any,
  data2: PropTypes.any,
  loan: PropTypes.any,
  gold: PropTypes.any,
  type: PropTypes.number,
  setTypeTable: PropTypes.func
};

export default ExchangeRate;
