import React from 'react';
import Link from 'next/link';
import Proptypes from 'prop-types';
import { withTranslation } from '../../i18n';
import map from 'lodash/map';

const propTypes = {
  data: Proptypes.array,
  t: Proptypes.func
};

function Breadcrumb({ t, data }) {
  return (
    <div className="entry-breadcrumb">
      <div className="container">
        <div className="breadcrumbs">
          {data.length > 0 ? (
            <Link href="/">
              <a className="item">{t('home')}</a>
            </Link>
          ) : (
            <span className="item">{t('home')}</span>
          )}
          {map(data, (slug, index) => {
            if (index === data.length - 1) {
              return (
                <span className="item" key={index}>
                  {slug}
                </span>
              );
            }
            return (
              <Link href="/page/[...name]" as={`/page/${slug}`}>
                <a className="item" key={index}>
                  {slug}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Breadcrumb.propTypes = propTypes;

export default withTranslation('common')(Breadcrumb);
