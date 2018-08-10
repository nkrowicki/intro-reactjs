import React from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <nav>
      {
        totalPages.map(page => <a
          key={page}
          className="btn btn-link"
          style={{ color: page === currentPage ? 'blue' : 'black' }}
          onClick={() => onPageChange(page)}>
          {page}
        </a>)
      }
    </nav>
  );
}
