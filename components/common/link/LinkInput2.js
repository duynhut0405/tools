import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
const propTypes = {
  lang: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node
};

const checkLink = link => {
  let expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  let regex = new RegExp(expression);
  return regex.test(link);
};
function LinkInput2({ lang, name, children }) {
  if (!checkLink(name)) {
    return (
      <React.Fragment>
        {lang === 'en' ? (
          <a href={`/${lang}/${name}`}>{children}</a>
        ) : (
          <a href={`/${name}`}>{children}</a>
        )}
      </React.Fragment>
    );
  } else return <a href={name}>{children}</a>;
}
LinkInput2.propTypes = propTypes;
export default LinkInput2;
