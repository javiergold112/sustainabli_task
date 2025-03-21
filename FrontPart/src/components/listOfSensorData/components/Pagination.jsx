const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div>
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className={`px-4 py-2 rounded ${
            currentPage <= 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {"<"}
        </button>
        <button className="px-4 py-2 bg-gray-100 rounded">
          {currentPage} of {totalPages}
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className={`px-4 py-2 rounded ${
            currentPage >= totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};
export default Pagination;
