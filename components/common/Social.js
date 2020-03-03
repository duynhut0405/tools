import React from 'react';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.object
};

function Social({ data }) {
  return (
    <ul className="blog-item-social ">
      <li>
        <a className="item" title="Facebook" href={data.facebook}>
          <i className="icon-facebook"></i>
        </a>
      </li>
      <li>
        <a className="item" title="Instagram" href={data.instagram}>
          <i className="icon-instagram"></i>
        </a>
      </li>
      <li>
        <a className="item" title="Twitter" href={data.twitter}>
          <i className="icon-twitter"></i>
        </a>
      </li>
      <li>
        <a className="item" title="Youtube" href={data.youtube}>
          <i className="icon-youtube-2"></i>
        </a>
      </li>
    </ul>
  );
}

Social.propTypes = propTypes;

export default Social;
