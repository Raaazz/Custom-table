import React from "react";

const Pagination = ({
  itemsPerPage,
  length,
  currentPage,
  handlePagination,
}) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / itemsPerPage); i++) {
    paginationNumbers.push(i);
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePagination(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < paginationNumbers.length) {
      handlePagination(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center mt-2.5 gap-2.5">
      <button
        className="px-3 py-2 bg-blue-500 rounded text-white"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {paginationNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`px-3 py-2 rounded ${
            pageNumber === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-500 text-white"
          }`}
          onClick={() => handlePagination(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className="px-3 py-2 bg-blue-500 rounded text-white"
        onClick={handleNext}
        disabled={currentPage === paginationNumbers.length}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
