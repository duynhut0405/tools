import React from 'react';
import Proptypes from 'prop-types';
import t from '../../translation';
import map from 'lodash/map';
import { getLang } from '../../utils/cookie';
import { LinkPage } from '../common/link';

const propTypes = {
  data: Proptypes.array,
  t: Proptypes.func
};

function Breadcrumb({ data }) {
  const lang = getLang();
  return (
    <div className="entry-breadcrumb">
      <div className="container">
        <div className="breadcrumbs">
          {data.length > 0 ? (
            <LinkPage lang={lang} name={lang === 'vi' ? '/' : '/en'}>
              <a className="item">{t('home')}</a>
            </LinkPage>
          ) : (
            <span className="item">{t('home')}</span>
          )}
          {map(data, (slug, index) => {
            if (index === data.length - 1) {
              return (
                <span className="item" key={index}>
                  {slug.name}
                </span>
              );
            }
            return (
              <LinkPage lang={lang} name={slug.slug}>
                <a className="item" key={index}>
                  {slug.name}
                </a>
              </LinkPage>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Breadcrumb.propTypes = propTypes;

export default Breadcrumb;
