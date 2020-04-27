import React from 'react';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.object
};

function Widget({ data }) {
  return (
    <React.Fragment>
      <div>
        <Link href="/">
          <a className="logo">
            <img className="lazyload" data-src="/images/logo-blue.svg" alt="images" />
          </a>
        </Link>
      </div>
      {ReactHtmlParser(data.footer_brief)}
      {/* <div className="call">
        <a href={`tel:${data.footer_address}`}>
          <i className="icon-phone-1"></i> {data.footer_address}
        </a>
      </div> */}
    </React.Fragment>
  );
}

Widget.propTypes = propTypes;

export default Widget;
