import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import classnames from 'classnames';
const propTypes = {
  menu: PropTypes.array
};

function SubMenu({ menu }) {
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
        <a href={`/page/${item.slugPages.value}`}>
          <span>{item.name}</span>
        </a>
        {item.children.length > 0 && (
          <ul style={{ display: activeTab && indexMenu === item.id ? 'block' : 'none' }}>
            <SubMenu menu={item.children} />
          </ul>
        )}
      </li>
    ));
  };

  return nestChild(menu);
}
SubMenu.propTypes = propTypes;

export default SubMenu;
