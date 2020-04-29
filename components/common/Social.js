import React from 'react';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.object
};

function Social({ data }) {
  return (
    <ul className="blog-item-social ">
      <li>
        <a
          href={data.facebook}
          className="item"
          title="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon-facebook"></i>
        </a>
      </li>
      <li>
        <a
          href={data.instagram}
          className="item"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon-instagram"></i>
        </a>
      </li>
      <li>
        <a
          href={data.twitter}
          className="item"
          title="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon-twitter"></i>
        </a>
      </li>
      <li>
        <a
          href={data.youtube}
          className="item"
          title="Youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon-youtube-2"></i>
        </a>
      </li>
    </ul>
  );
}

Social.propTypes = propTypes;

export default Social;
