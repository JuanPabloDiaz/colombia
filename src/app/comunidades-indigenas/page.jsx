"use client";

import React, { useContext, useState, useMemo } from "react";
import { AppContext } from "@/context";
import PageSizeSelector from "@/components/ui/PageSizeSelector";

import { metadata } from "@/components/metadata";
import CardBadge from "@/components/Card/CardBadge";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import Pagination from "@/components/ui/Pagination";


export default function ComunidadesIndigenas() {
  const pageTitle = metadata.ind.title;

  const { allNativeCommunityData, isLoading } = useContext(AppContext);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = useMemo(
    () =>
      allNativeCommunityData
        ? [...allNativeCommunityData].sort((a, b) => a.id - b.id)
        : [],
    [allNativeCommunityData],
  );
  const totalPages = useMemo(
    () => Math.ceil(sortedData.length / pageSize) || 1,
    [sortedData, pageSize],
  );
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);
  React.useEffect(() => {
    setCurrentPage(1);
  }, [pageSize, sortedData]);

  // Show loading state only if data hasn't been loaded yet for the first time
  if (
    isLoading &&
    (!allNativeCommunityData || allNativeCommunityData.length === 0)
  ) {
    return (
      <section className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <LoadingSpinner size={56} key={index} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
      
      <EntityPageLayout
        title={pageTitle}
        isLoading={
          isLoading &&
          (!allNativeCommunityData || allNativeCommunityData.length === 0)
        }
        gridCols="md:grid-cols-2 lg:grid-cols-4"
        pageSizeSelector={
          <PageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />
        }
        pagination={
          totalPages > 1 && (
            <div className="mb-8 mt-8 flex justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )
        }
      >
        {paginatedData.map((ind) => (
          <CardBadge
            key={ind.id || ind.name}
            title={ind.name}
            text={ind.description}
            badge={["Lengua(s):", ind.languages]}
            className="min-h-72"
          />
        ))}
      </EntityPageLayout>
    </>
  );
}
