import React from 'react';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import { getLang } from '../../utils/cookie';

const propTypes = {
  data: PropTypes.object
};

const logoStyle = {
  width: '109px',
  height: '45px'
}

function Widget({ data }) {
  const lang = getLang();
  return (
    <React.Fragment>
      {data && data.footer_brief !== undefined && ReactHtmlParser(data.footer_brief)}
    </React.Fragment>
  );
}

Widget.propTypes = propTypes;

export default Widget;
