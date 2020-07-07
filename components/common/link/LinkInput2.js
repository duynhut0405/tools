import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
const propTypes = {
  lang: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node
};
function LinkInput2({ lang, name, children }) {
  return (
    <>
      {lang === 'en' ? (
        <a href={`/${lang}/${name}`}>{children}</a>
      ) : (
        <a href={`/${name}`}>{children}</a>
      )}
    </>
  );
}
LinkInput2.propTypes = propTypes;
export default LinkInput2;