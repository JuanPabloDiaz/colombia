"use client";

import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

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
        pageNumbers.push("...");
      }

      // Determine the range of pages to show around the current page
      let startPage = Math.max(2, currentPage - halfPagesToShow + 1);
      let endPage = Math.min(totalPages - 1, currentPage + halfPagesToShow - 1);

      if (currentPage <= halfPagesToShow) {
        startPage = 2;
        endPage = Math.min(totalPages - 1, maxPagesToShow - 2);
      }

      if (currentPage > totalPages - halfPagesToShow) {
        startPage = Math.max(2, totalPages - maxPagesToShow + 3);
        endPage = totalPages - 1;
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Show ellipsis if needed after the current page group
      if (currentPage < totalPages - halfPagesToShow) {
        pageNumbers.push("...");
      }

      // Always show the last page
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  return (
    <nav aria-label="Paginación" className="mt-8 flex justify-center">
      <ul className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-2 shadow-lg">
        <li>
          <Button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={cn(
              "rounded-xl border border-primary/80 px-5 py-2 text-base font-bold shadow-md transition",
              currentPage === 1
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-primary/80 hover:text-white",
            )}
            variant="default"
          >
            Anterior
          </Button>
        </li>

        {getPageNumbers().map((pageNumber, index) => (
          <li key={index}>
            {pageNumber === "..." ? (
              <span className="px-5 py-2 font-bold text-gray-500 dark:text-gray-400">
                ...
              </span>
            ) : (
              <Button
                onClick={() => onPageChange(pageNumber)}
                className={cn(
                  "rounded-xl px-5 py-2 text-base font-bold transition",
                  currentPage === pageNumber
                    ? "z-10 scale-105 border border-primary/80 bg-primary text-primary-foreground shadow-md"
                    : "border border-slate-700 bg-slate-800 text-white hover:bg-primary/80 hover:text-white",
                )}
                variant="default"
                aria-current={currentPage === pageNumber ? "page" : undefined}
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
            className={cn(
              "rounded-xl border border-primary/80 px-5 py-2 text-base font-bold shadow-md transition",
              currentPage === totalPages
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-primary/80 hover:text-white",
            )}
            variant="default"
          >
            Siguiente
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
