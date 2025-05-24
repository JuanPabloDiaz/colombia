"use client";

import React, { useContext, useState, useEffect, useMemo } from "react";
import { AppContext } from "@/context";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import EntityCard from "@/components/ui/EntityCard";
import Pagination from "@/components/ui/Pagination";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import PageSizeSelector from "@/components/ui/PageSizeSelector";

const DEFAULT_PAGE_SIZE = 4;

export default function RegionesClient() {
  const { allRegionData, isLoading: contextIsLoading } = useContext(AppContext);

  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false); // For local operations like sorting

  // Sort data once
  const sortedRegions = useMemo(() => {
    setIsLoading(true);
    const sorted = [...(allRegionData || [])].sort((a, b) => {
      // Assuming regions have a 'name' or 'id' property to sort by
      if (a.name && b.name) {
        return a.name.localeCompare(b.name);
      }
      return (a.id || 0) - (b.id || 0);
    });
    setIsLoading(false);
    return sorted;
  }, [allRegionData]);

  const totalPages = useMemo(() => {
    return Math.ceil(sortedRegions.length / pageSize);
  }, [sortedRegions, pageSize]);

  const paginatedRegions = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return sortedRegions.slice(startIndex, startIndex + pageSize);
  }, [sortedRegions, currentPage, pageSize]);

  useEffect(() => {
    // Reset to first page if pageSize changes and currentPage is out of bounds
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
    // If totalPages becomes 0 (e.g. data cleared), reset currentPage to 1
    else if (totalPages === 0 && currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [pageSize, totalPages, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    setCurrentPage(1); // Reset to first page when page size changes
  };

  const effectiveIsLoading = contextIsLoading || isLoading;

  return (
    <EntityPageLayout
      title="Regiones de Colombia"
      dataLength={sortedRegions?.length || 0}
      pageSizeSelector={
        <PageSizeSelector
          pageSize={pageSize}
          setPageSize={handlePageSizeChange}
          itemType="Regiones"
        />
      }
    >
      {effectiveIsLoading && paginatedRegions.length === 0 && (
        <LoadingSpinner />
      )}
      {!effectiveIsLoading && paginatedRegions.length === 0 && (
        <div className="mt-10 text-center text-xl text-white/70">
          No se encontraron regiones para mostrar.
        </div>
      )}

      {paginatedRegions.length > 0 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {paginatedRegions.map((region) => (
            <EntityCard
              key={region.id || region.name} // Assuming regions have an id or unique name
              entity={region}
              type="region" // Ensure this matches the key in ENTITY_FIELDS
              linkBase={`/regiones/${region.id || region.name}`} // Adjust if detail pages use a different param
            />
          ))}
        </div>
      )}

      {paginatedRegions.length > 0 && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </EntityPageLayout>
  );
}
