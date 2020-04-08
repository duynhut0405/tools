import React, { useState } from 'react';
import { map } from 'lodash';
import Proptypes from 'prop-types';
import MiniTabItem from './MiniTabItem';
import classnames from 'classnames';
const propTypes = {
  data: Proptypes.object.isRequired,
  id: Proptypes.number
};

function MiniTab({ data, id }) {
  const [activeTab, setActiveTab] = useState('0');
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
    <div className="container" id={id}>
      <section className={`${padding} block-minitab`}>
        <h2 className="ht styleht">{data.title}</h2>
        <div className={`cttab-v3 tabs-total-${data.listCard.length}`}>
          <div className="wrap-tab-menu">
            <div className="tab-menu style-table-menu">
              {map(data.listCard, (value, index) => (
                <div
                  className={classnames({ active: activeTab === String(index) })}
                  onClick={() => {
                    setActiveTab(String(index));
                  }}
                  key={index}
                >
                  <span>{value.tabtitle}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="tab-content">
            {map(data.listCard, (value, index) => (
              <div className={classnames({ active: activeTab === String(index) })} key={index}>
                <div className="tab-inner">
                  <div className="list-7  list-item row">
                    <MiniTabItem data={value} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
MiniTab.propTypes = propTypes;

export default MiniTab;
