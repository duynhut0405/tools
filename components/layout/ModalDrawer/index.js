import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import classnames from 'classnames';
import SubMenu from './submenu';
import { LinkPage } from '../../common/link';
import t from '../../../translation';
import { getLang } from '../../../utils/cookie';

const propTypes = {
  menu: PropTypes.array,
  menuHeader: PropTypes.array,
  t: PropTypes.func,
  onSearch: PropTypes.func,
  onChangeSearch: PropTypes.func
};

function ModalDrawer({ menu, menuHeader, onSearch, onChangeSearch }) {
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
            <a>
              <span>{item.name}</span>
            </a>
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
                  <input
                    id="search1"
                    type="text"
                    placeholder={t('search')}
                    onChange={onChangeSearch}
                  />
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

export default ModalDrawer;
