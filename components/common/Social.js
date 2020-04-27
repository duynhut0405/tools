import React from 'react';
import Link from 'next/link';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.object
};

function Social({ data }) {
  return (
    <ul className="blog-item-social ">
      <li>
        <Link href={data.facebook}>
          <a className="item" title="Facebook" target="_blank" rel="noopener noreferrer">
            <i className="icon-facebook"></i>
          </a>
        </Link>
      </li>
      <li>
        <Link href={data.instagram}>
          <a className="item" title="Instagram" target="_blank" rel="noopener noreferrer">
            <i className="icon-instagram"></i>
          </a>
        </Link>
      </li>
      <li>
        <Link href={data.twitter}>
          <a className="item" title="Twitter" target="_blank" rel="noopener noreferrer">
            <i className="icon-twitter"></i>
          </a>
        </Link>
      </li>
      <li>
        <Link href={data.youtube}>
          <a className="item" title="Youtube" target="_blank" rel="noopener noreferrer">
            <i className="icon-youtube-2"></i>
          </a>
        </Link>
      </li>
    </ul>
  );
}

Social.propTypes = propTypes;

export default Social;
