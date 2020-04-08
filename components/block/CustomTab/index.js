import React, { useState } from 'react';
import { map } from 'lodash';
import Proptypes from 'prop-types';
import classnames from 'classnames';
import CustomTabItem from './CustomTabItem';

const propTypes = {
  data: Proptypes.object.isRequired,
  id: Proptypes.number
};

function CustomTab({ data, id }) {
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
    <React.Fragment>
      <main id="main" className={padding}>
        <div className="container">
          <div className={`cttab-v3 tabs-total-${data.listTab.length}`}>
            <div className="wrap-tab-menu">
              <div className="tab-menu max500">
                {map(data.listTab, (item, indextab) => (
                  <div
                    className={classnames({ active: activeTab === String(indextab) })}
                    onClick={() => {
                      setActiveTab(String(indextab));
                    }}
                    key={indextab}
                  >
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="tab-content">
              {map(data.listTab, (item, index) => (
                <div className={classnames({ active: activeTab === String(index) })} key={index}>
                  <div className="tab-inner">
                    <CustomTabItem data={item} indexTab={index} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
CustomTab.propTypes = propTypes;

export default CustomTab;
