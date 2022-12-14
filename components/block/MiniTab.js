import React, { useState } from 'react';
import map from 'lodash/map';
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
  if (data[0].optionWidth === '2') {
    padding = 'sec-tb';
  } else if (data[0].optionWidth === '3') {
    padding = 'sec-t';
  } else if (data[0].optionWidth === '4') {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }
  return (
    <div className="container block-minitab" id={id}>
      <section className={`${padding} block-minitab`}>
        <h2 className="ht styleht">{data[0].title}</h2>
        <div className={`cttab-v3 tabs-total-${data.length}`}>
          <div className="wrap-tab-menu">
            <div className="tab-menu style-table-menu">
              {map(data, (value, index) => (
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
            {map(data, (value, index) => (
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
