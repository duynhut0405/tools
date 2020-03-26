import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.object
};

function Widget({ data }) {
  return (
    <React.Fragment>
      <div>
        <a href="./" className="logo">
          <img src="/static/images/logo-blue.svg" alt="" />
        </a>
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
