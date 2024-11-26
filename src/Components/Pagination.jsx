import React from 'react';

const Pagination = ({ data, pageHandler }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / 10); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <center>
        {pageNumbers.map((page) => (
          <button
            key={page}
            className="page-button"
            onClick={() => pageHandler(page)}
          >
            {page}
          </button>
        ))}
      </center>
    </div>
  );
};

export default Pagination;
