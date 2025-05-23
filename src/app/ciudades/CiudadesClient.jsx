"use client";

import React, { useContext, useState, useEffect, useMemo } from "react";
import { AppContext } from "@/context";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import EntityCard from "@/components/ui/EntityCard";
import Pagination from "@/components/ui/Pagination";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import PageSizeSelector from "@/components/ui/PageSizeSelector";

const DEFAULT_PAGE_SIZE = 12; // Consistent default page size

export default function CiudadesClient() {
  const { allCityData, isLoading: contextIsLoading } = useContext(AppContext);

  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSorting, setIsSorting] = useState(false); // Local loading state for sorting

  // Sort data once and memoize
  const sortedCities = useMemo(() => {
    setIsSorting(true);
    const dataToSort = Array.isArray(allCityData) ? allCityData : [];
    const sorted = [...dataToSort].sort((a, b) => {
      if (a.name && b.name) {
        return a.name.localeCompare(b.name);
      }
      return (a.id || 0) - (b.id || 0); // Fallback to ID sort
    });
    setIsSorting(false);
    return sorted;
  }, [allCityData]);

  const totalPages = useMemo(() => {
    if (sortedCities.length === 0) return 1; // Avoid division by zero, show 1 page if no items
    return Math.ceil(sortedCities.length / pageSize);
  }, [sortedCities, pageSize]);

  const paginatedCities = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return sortedCities.slice(startIndex, startIndex + pageSize);
  }, [sortedCities, currentPage, pageSize]);

  // Effect to reset currentPage if it becomes invalid due to pageSize or data changes
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1); // Reset to page 1 if current page is out of new totalPages bounds
    } else if (totalPages === 1 && currentPage !== 1) {
      // If only one page total (or no items), current page must be 1
      setCurrentPage(1);
    }
  }, [pageSize, totalPages, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Optional: Scroll to top or relevant section
  };

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    setCurrentPage(1); // Reset to first page when page size changes
  };
  
  const isLoading = contextIsLoading || isSorting;

  return (
    <EntityPageLayout
      title="Ciudades de Colombia"
      dataLength={sortedCities?.length || 0}
      pageSizeSelector={
        <PageSizeSelector
          pageSize={pageSize}
          setPageSize={handlePageSizeChange} 
          itemType="Ciudades" 
        />
      }
    >
      {isLoading && paginatedCities.length === 0 && <LoadingSpinner />}
      {!isLoading && paginatedCities.length === 0 && (
        <div className="mt-10 text-center text-xl text-white/70">
          No se encontraron ciudades para mostrar.
        </div>
      )}

      {paginatedCities.length > 0 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {paginatedCities.map((city) => (
            <EntityCard
              key={city.id || city.name} 
              entity={city}
              type="ciudad" 
              linkBase="/ciudades" // EntityCard will append `/{entity.id}`
            />
          ))}
        </div>
      )}

      {paginatedCities.length > 0 && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </EntityPageLayout>
  );
}
