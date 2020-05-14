import React from 'react';
import Link from 'next/link';

import PropTypes from 'prop-types';

const propTypes = {
  lang: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node
};

function LinkPage({ lang, name, children }) {
  return (
    <>
      {lang === 'en' ? (
        <Link href="/en/page/[...name]" as={`/${lang}/page/${name}`}>
          {children}
        </Link>
      ) : (
        <Link href="/page/[...name]" as={`/page/${name}`}>
          {children}
        </Link>
      )}
    </>
  );
}

LinkPage.propTypes = propTypes;

export default LinkPage;
