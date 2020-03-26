import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

const propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  size: PropTypes.number
};

function Pagination({ setPage, size }) {
  return (
    <div className="page pb-3 sec-tb">
      <ReactPaginate
        previousLabel={<i className="icon-arrow-2 ix"></i>}
        nextLabel={<i className="icon-arrow-2"></i>}
        breakLabel={'...'}
        breakLinkClassName="page-numbers"
        pageCount={size || 1}
        containerClassName="page-numbers"
        previousLinkClassName="prev page-numbers"
        nextLinkClassName="next page-numbers"
        pageLinkClassName="page-numbers"
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={value => setPage(value.selected + 1)}
        activeClassName={'current'}
      />
    </div>
  );
}

Pagination.propTypes = propTypes;

export default Pagination;
