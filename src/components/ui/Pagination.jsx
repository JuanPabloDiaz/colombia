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

  // Función para determinar si mostrar versión simplificada en móvil
  const getSimplifiedPageNumbers = () => {
    // Versión simplificada para móvil
    const pageNumbers = [];

    // Siempre mostrar página actual
    pageNumbers.push(currentPage);

    return pageNumbers;
  };

  return (
    <nav aria-label="Paginación" className="flex justify-center">
      {/* Versión móvil simplificada */}

      <ul className="inline-flex items-center gap-1 rounded-xl border border-slate-700 bg-slate-900/90 px-2 py-1 shadow-md md:hidden">
        <li>
          <Button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={cn(
              "rounded-lg border border-primary/80 px-2 py-1 text-xs font-medium shadow-sm transition",

              currentPage === 1
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-primary/80 hover:text-white active:bg-primary/90",
            )}
            variant="default"
          >
            &lt;
          </Button>
        </li>

        <span className="px-2 py-1 text-xs font-bold">
          {currentPage} de {totalPages}
        </span>

        <li>
          <Button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={cn(
              "rounded-lg border border-primary/80 px-2 py-1 text-xs font-medium shadow-sm transition",

              currentPage === totalPages
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-primary/80 hover:text-white active:bg-primary/90",
            )}
            variant="default"
          >
            &gt;
          </Button>
        </li>
      </ul>

      {/* Versión desktop completa */}

      <ul className="hidden items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-2 shadow-lg md:inline-flex">
        <li>
          <Button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={cn(
              "rounded-xl border border-primary/80 px-4 py-1.5 text-sm font-bold shadow-md transition",

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
              <span className="px-3 py-1.5 text-sm font-bold text-gray-500 dark:text-gray-400">
                ...
              </span>
            ) : (
              <Button
                onClick={() => onPageChange(pageNumber)}
                className={cn(
                  "rounded-xl px-3 py-1.5 text-sm font-bold transition",

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
              "rounded-xl border border-primary/80 px-4 py-1.5 text-sm font-bold shadow-md transition",

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
