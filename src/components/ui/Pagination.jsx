"use client";

import React from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 7; // Maximum page buttons to show
    const halfPagesToShow = Math.floor(maxPagesToShow / 2);

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show the first page
      pageNumbers.push(1);

      // Show ellipsis if needed before the current page group
      if (currentPage > halfPagesToShow + 1) {
        pageNumbers.push('...');
      }

      // Determine the range of pages to show around the current page
      let startPage = Math.max(2, currentPage - halfPagesToShow + 1);
      let endPage = Math.min(totalPages - 1, currentPage + halfPagesToShow -1 );
      
      if (currentPage <= halfPagesToShow) {
        startPage = 2;
        endPage = Math.min(totalPages -1, maxPagesToShow - 2)
      }
      
      if (currentPage > totalPages - halfPagesToShow ) {
        startPage = Math.max(2, totalPages - maxPagesToShow + 3)
        endPage = totalPages - 1;
      }


      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Show ellipsis if needed after the current page group
      if (currentPage < totalPages - halfPagesToShow) {
        pageNumbers.push('...');
      }

      // Always show the last page
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  return (
    <nav aria-label="Pagination" className="flex justify-center mt-8">
      <ul className="inline-flex items-center -space-x-px rounded-md shadow-sm gap-2">
        <li>
          <Button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            variant="outline"
            className="px-3 py-2"
          >
            Previous
          </Button>
        </li>

        {getPageNumbers().map((pageNumber, index) => (
          <li key={index}>
            {pageNumber === '...' ? (
              <span className="px-3 py-2 text-gray-500 dark:text-gray-400">...</span>
            ) : (
              <Button
                onClick={() => onPageChange(pageNumber)}
                variant={currentPage === pageNumber ? 'default' : 'outline'}
                className={cn(
                  "px-3 py-2",
                  { "bg-primary text-primary-foreground": currentPage === pageNumber },
                  { "hover:bg-accent hover:text-accent-foreground": currentPage !== pageNumber }
                )}
              >
                {pageNumber}
              </Button>
            )}
          </li>
        ))}

        <li>
          <Button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            variant="outline"
            className="px-3 py-2"
          >
            Next
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
