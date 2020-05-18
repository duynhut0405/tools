import React from 'react';
import Link from 'next/link';

import PropTypes from 'prop-types';

const propTypes = {
  lang: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node
};

function LinkInput({ lang, name, children }) {
  //
  return (
    <>
      {lang === 'en' ? (
        <Link href="/en/[...name]" as={`/${lang}${name}`}>
          {children}
        </Link>
      ) : (
        <Link href="/[...name]" as={`${name}`}>
          {children}
        </Link>
      )}
    </>
  );
}

LinkInput.propTypes = propTypes;

export default LinkInput;
