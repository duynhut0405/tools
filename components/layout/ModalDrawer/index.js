import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import classnames from 'classnames';
import SubMenu from './submenu';
import Link from 'next/link';
import { withTranslation } from '../../../i18n';

const propTypes = {
  menu: PropTypes.array,
  menuHeader: PropTypes.array,
  t: PropTypes.func,
  onSearch: PropTypes.func
};

function ModalDrawer({ t, menu, menuHeader, onSearch }) {
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

  return (
    <div className="wrap-menu-mb">
      <div className="wrapul main">
        <div className="inner">
          <ul className="menu">
            <li>
              <form id="form-search-hd1" autoComplete="off" onSubmit={onSearch}>
                <div className="form-group">
                  <button className="search-sg" type="submit">
                    <i className="icon-search-2"></i>
                  </button>
                  <input id="search1" type="text" placeholder={t('search')} />
                </div>
              </form>
            </li>
          </ul>
          <ul className="menu">{nestChild(menu)}</ul>
          <ul className="menu">{nestChild(menuHeader)}</ul>
        </div>
      </div>
    </div>
  );
}
ModalDrawer.propTypes = propTypes;

export default withTranslation('common')(ModalDrawer);
