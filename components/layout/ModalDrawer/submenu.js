import React, { useState } from 'react';
import Link from 'next/link';
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
    return map(items, item => {
      if (item.type === '4') {
        return (
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

            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>

            {item.children.length > 0 && (
              <ul style={{ display: activeTab && indexMenu === item.id ? 'block' : 'none' }}>
                <SubMenu menu={item.children} />
              </ul>
            )}
          </li>
        );
      }
      return (
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

          <Link href="/page/[...slug]" as={`/page/${item.slugPages}`}>
            <a>
              <span>{item.name}</span>
            </a>
          </Link>

          {item.children.length > 0 && (
            <ul style={{ display: activeTab && indexMenu === item.id ? 'block' : 'none' }}>
              <SubMenu menu={item.children} />
            </ul>
          )}
        </li>
      );
    });
  };

  return nestChild(menu);
}

SubMenu.propTypes = propTypes;

export default SubMenu;
