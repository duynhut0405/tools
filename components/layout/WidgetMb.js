import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import { Social } from '../common';

const propTypes = {
  data: PropTypes.object,
  socialLink: PropTypes.any
};

function Widget({ data, socialLink }) {
  return (
    <div className="widget widget-info">
      <div>
        <a href="./" className="logo">
          <img className="lazyload" data-src="/images/logo-blue.svg" alt="images" />
        </a>
      </div>
      {ReactHtmlParser(data.footer_brief)}
      <div className="call">
        <a href={`tel:${data.footer_address}`} className="phone">
          <i className="icon-phone-1"></i> {data.footer_address}
        </a>
        <Social data={socialLink} />
      </div>
    </div>
  );
}

Widget.propTypes = propTypes;

export default Widget;
