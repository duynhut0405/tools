import React from 'react';
import Link from 'next/link';

import PropTypes from 'prop-types';

const propTypes = {
  lang: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node
};

function LinkNews({ lang, name, children }) {
  return (
    <>
      {lang === 'en' ? (
        <Link href="/en/news/[...slug]" as={`/${lang}/news/${name}`}>
          {children}
        </Link>
      ) : (
        <Link href="/news/[...slug]" as={`/news/${name}`}>
          {children}
        </Link>
      )}
    </>
  );
}

LinkNews.propTypes = propTypes;

export default LinkNews;
