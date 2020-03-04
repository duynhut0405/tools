import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import classnames from 'classnames';
const propTypes = {
  menu: PropTypes.array
};

function ModalDrawer({ menu }) {
  const [activeTab, setActiveTab] = useState(false);
  const [indexMenu, setIndexMenu] = useState(null);
  const nestChild = items => {
    return map(items, item => (
      <li
        key={item.id}
        className={classnames({
          children: activeTab === false && indexMenu === item.id,
          'children parent-showsub': activeTab === true && indexMenu === item.id
        })}
      >
        {item.children.length > 0 && (
          <span
            className="showsubmenu icon-arrow-2 ib"
            onClick={() => {
              setActiveTab(!activeTab);
              setIndexMenu(item.id);
            }}
          ></span>
        )}
        <a href={`/page/${item.slugPages}`}>
          <span>{item.name}</span>
        </a>
        {item.children.length > 0 && (
          <ul style={{ display: activeTab && indexMenu === item.id ? 'block' : 'none' }}>
            {nestChild(item.children)}
          </ul>
        )}
      </li>
    ));
  };

  return (
    <div className="wrap-menu-mb">
      <div className="wrapul main">
        <div className="inner">
          <ul className="menu">{nestChild(menu)}</ul>
        </div>
      </div>
    </div>
  );
}
ModalDrawer.propTypes = propTypes;

export default ModalDrawer;
