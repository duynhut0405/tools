import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

const propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  size: PropTypes.number
};

function Pagination({ setPage, size, page }) {
  
  return (
    <div className="page pb-3 sec-b">
      <ReactPaginate
        forceSelected={page}
        previousLabel={<i className="icon-arrow-2 ix"></i>}
        nextLabel={<i className="icon-arrow-2"></i>}
        breakLabel={'...'}
        breakLinkClassName="page-numbers"
        pageCount={size || 1}
        containerClassName="page-numbers"
        previousLinkClassName="prev page-numbers"
        nextLinkClassName="next page-numbers"
        pageLinkClassName="page-numbers"
        initialPage = {page - 1}
        marginPagesDisplayed={4}
        pageRangeDisplayed={4}
        onPageChange={value => setPage(value.selected + 1)}
        activeLinkClassName="page-numbers current"
      />
    </div>
  );
}

Pagination.propTypes = propTypes;

export default Pagination;
