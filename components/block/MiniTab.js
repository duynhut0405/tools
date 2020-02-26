import React from 'react';
import { map } from 'lodash';
import Proptypes from 'prop-types';
import MiniTabItem from './MiniTabItem';

const propTypes = {
  data: Proptypes.object.isRequired
};

function MiniTab({ data }) {
  return (
    <section className="sec-tb">
      <h2 className="ht">{data[0].title}</h2>
      <div className="cttab-v3   ">
        <div className="tab-menu">
          {map(data, value => (
            <div className="active">
              <span>{value.tabtitle}</span>
            </div>
          ))}
        </div>
        <div className="tab-content">
          <div className="active">
            {map(data, value => (
              <div className="tab-inner">
                <div className="list-7  list-item row">
                  <MiniTabItem data={value} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
MiniTab.propTypes = propTypes;

export default MiniTab;
