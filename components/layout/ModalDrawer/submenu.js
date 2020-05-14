import React, { useState } from 'react';
import { LinkPage } from '../../common/link';
import { getLang } from '../../../utils/cookie';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import classnames from 'classnames';

const propTypes = {
  menu: PropTypes.array
};

function SubMenu({ menu }) {
  const [activeTab, setActiveTab] = useState(false);
  const [indexMenu, setIndexMenu] = useState(null);
  const lang = getLang();

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

            {item.target === '2' ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            ) : (
              <a href={item.url}>{item.name}</a>
            )}

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

          <LinkPage lang={lang} name={item.slugPages}>
            <span>{item.name}</span>
          </LinkPage>

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
