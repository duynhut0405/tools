import React from 'react';
import Link from 'next/link';

import PropTypes from 'prop-types';

const propTypes = {
  lang: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node
};

function LinkPage({ lang, name, children, ...rest }) {
  return (
    <>
      {lang === 'en' ? (
        <Link href="/[lang]/page/[...name]" as={`/${lang}/page/${name}`} {...rest}>
          {children}
        </Link>
      ) : (
        <Link href="/page/[...name]" as={`/page/${name}`} {...rest}>
          {children}
        </Link>
      )}
    </>
  );
}

LinkPage.propTypes = propTypes;

export default LinkPage;
