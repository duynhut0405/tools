import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

const propTypes = {
  data: PropTypes.array,
  onChangeSuggest: PropTypes.func,
  onClose: PropTypes.func
};

function Suggest({ data, onChangeSuggest, onClose }) {
  const renderMenuItems = (menuItems, index) => {
    return map(menuItems, (menu, i) => {
      return (
        <a
          href="#"
          className={index === 2 ? 'tag' : 'key'}
          key={i}
          onClick={() => onChangeSuggest(menu.url)}
        >
          {menu.url}
        </a>
      );
    });
  };

  const renderMenu = list => {
    return map(list, (menu, index) => {
      return (
        <div className={index + 1 === 2 ? 'sg sv' : 'sg kw'} key={index}>
          <span className="b cl1">{menu.name}</span>
          <div className={index + 1 === 2 ? 'tags' : 'key'}>
            {menu.children.length > 0 && renderMenuItems(menu.children, index + 1)}
          </div>
        </div>
      );
    });
  };

  return (
    <div id="search-sg" style={{ display: 'none' }}>
      <div className="container">
        <a href="#" id="logo">
          <img className="lazyload" src="/images/logo-blue.svg" alt="" />
        </a>
        <div className="suggest">{renderMenu(data)}</div>
        <span className="icon-close close-sg" onClick={onClose}></span>
      </div>
    </div>
  );
}

Suggest.propTypes = propTypes;

export default Suggest;
