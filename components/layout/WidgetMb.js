import React from 'react';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import { Social } from '../common';
import { getLang } from '../../utils/cookie';

const propTypes = {
  data: PropTypes.object,
  socialLink: PropTypes.any
};

function Widget({ data, socialLink }) {
  const lang = getLang();
  return (
    <div className="widget widget-info">
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
      <React.Fragment>{data && ReactHtmlParser(data.footer_brief)}</React.Fragment>
      <div className="call">
        <Link href={`tel:${data ? data.footer_address : ''}`}>
          <a className="phone">
            <i className="icon-phone-1"></i> {data ? data.footer_address : ''}
          </a>
        </Link>
        <Social data={socialLink} />
      </div>
    </div>
  );
}

Widget.propTypes = propTypes;

export default Widget;
