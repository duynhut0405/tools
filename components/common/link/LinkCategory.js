import React from 'react';
import Link from 'next/link';

import PropTypes from 'prop-types';

const propTypes = {
  lang: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node
};

function LinkCategory({ lang, name, children }) {
  return (
    <>
      {lang === 'en' ? (
        <Link
          href="/en/news/category/[...name]"
          as={`/${lang}/news/category/${name}`}
          prefetch={false}
        >
          {children}
        </Link>
      ) : (
        <Link href="/news/category/[...name]" as={`/news/category/${name}`} prefetch={false}>
          {children}
        </Link>
      )}
    </>
  );
}

LinkCategory.propTypes = propTypes;

export default LinkCategory;
