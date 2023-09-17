import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../store/paginationSlice';

const Pagination = () => {
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const totalPages = useSelector((state) => state.pagination.totalPages);
  const dispatch = useDispatch();

  const handlePageClick = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <ul className="flex space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            key={index + 1}
            className={`${
              index + 1 === currentPage
                ? 'bg-green-500 text-white'
                : 'bg-white text-green-900'
            } px-3 py-1 rounded cursor-pointer transition-colors duration-300 ease-in-out hover:bg-black hover:text-white`}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </li>
        ))}
        <li
          onClick={() => handlePageClick(currentPage + 1)}
          className="bg-green-500 text-white px-3 py-1 rounded cursor-pointer transition-colors duration-300 ease-in-out hover:bg-black hover:text-white"
        >
          &gt;
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
