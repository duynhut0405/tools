import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  next: PropTypes.func,
  previous: PropTypes.func
};

function Pagination({ page, setPage, next, previous }) {
  return (
    <div className="pages mt-5">
      <ul className="page-numbers">
        <li>
          <a className="prev page-numbers" onClick={() => next(page - 1)}>
            <i className="icon-arrow-2 ix"></i>
          </a>
        </li>
        <li>
          <span
            className={page === 1 ? 'page-numbers current' : 'page-numbers'}
            onClick={() => setPage(1)}
          >
            1
          </span>
        </li>
        <li>
          <a
            className={page === 2 ? 'page-numbers current' : 'page-numbers'}
            onClick={() => setPage(2)}
          >
            2
          </a>
        </li>
        <li>
          <span className="page-numbers">...</span>
        </li>
        <li>
          <a
            className={page === 8 ? 'page-numbers current' : 'page-numbers'}
            onClick={() => setPage(8)}
          >
            8
          </a>
        </li>
        <li>
          <a
            className={page === 9 ? 'page-numbers current' : 'page-numbers'}
            onClick={() => setPage(9)}
          >
            9
          </a>
        </li>
        <li>
          <a className="next page-numbers" onClick={() => previous(page + 1)}>
            <i className="icon-arrow-2"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

Pagination.propTypes = propTypes;

export default Pagination;
