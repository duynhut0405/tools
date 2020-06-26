import React, { useState } from 'react';
import Proptypes from 'prop-types';
import map from 'lodash/map';
import classnames from 'classnames';
import TabQuestionsItems from './TabQuestionItem';

const propTypes = {
  data: Proptypes.array.isRequired,
  id: Proptypes.number
};

function TabQuestions({ data, id }) {
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

  const numberShowData = data.numberQuestion !== undefined ? data.numberQuestion : 5;

  return (
    <React.Fragment>
      <main id="main" className={`${padding} tabQuestions`}>
        <div className="container" id={id}>
          <h2 className="text-center">{data.title}</h2>
          <div className={`cttab-v3 tabs-total-${data.listTab.length}`}>
            <div className="wrap-tab-menu">
              <div className="tab-menu">
                {map(data.listTab, (item, index) => ( 
                  <div
                    className={classnames({ active: activeTab === String(index) })}
                    onClick={() => {
                      setActiveTab(String(index));
                    }}
                    key={index}
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
                    <TabQuestionsItems data={item} indexTab={index} number={numberShowData} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment> //
  );
}

TabQuestions.propTypes = propTypes;

export default TabQuestions;
