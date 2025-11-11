'use client';

import React from 'react';
import Link from 'next/link';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const PaginationButtons = ({ page, totalPages }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      {/* Previous Page Button */}
      <Link
        href={`/blog/?page=${page - 1}`}
        passHref
        className={`p-2 rounded-md ${
          page === 1
            ? 'bg-gray-400 cursor-not-allowed text-white'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
        aria-disabled={page === 1}
      >
        <AiOutlineLeft />
      </Link>

      {/* Page Information */}
      <div>{page} of {totalPages}</div>

      {/* Next Page Button */}
      <Link
        href={`/blog/?page=${page + 1}`}
        passHref
        className={`p-2 rounded-md ${
          page === totalPages
            ? 'bg-gray-400 cursor-not-allowed text-white'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
        aria-disabled={page === totalPages}
      >
        <AiOutlineRight />
      </Link>
    </div>
  );
};

export default PaginationButtons;
