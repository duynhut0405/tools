import React from 'react';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import { getLang } from '../../utils/cookie';

const propTypes = {
  data: PropTypes.object
};

function Widget({ data }) {
  const lang = getLang();
  return (
    <React.Fragment>
      <div>
        {lang === 'vi' && (
          <Link href="/">
            <a className="logo">
              <img className="lazyload" data-src="/images/logo-blue.svg" alt="images" />
            </a>
          </Link>
        )}
        {lang === 'en' && (
          <Link href="/en">
            <a className="logo">
              <img className="lazyload" data-src="/images/logo-blue.svg" alt="images" />
            </a>
          </Link>
        )}
      </div>
      <React.Fragment>
        {data && data.footer_brief !== undefined && ReactHtmlParser(data.footer_brief)}
      </React.Fragment>
    </React.Fragment>
  );
}

Widget.propTypes = propTypes;

export default Widget;
