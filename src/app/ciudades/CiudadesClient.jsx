"use client";
import React, { useContext, useState, useMemo, useEffect } from "react";
import { AppContext } from "@/context";
import PageSizeSelector from "@/components/ui/PageSizeSelector";
import Pagination from "@/components/ui/Pagination";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import { metadata } from "@/components/metadata";
import EntityCard from "@/components/ui/EntityCard";

const pageTitle = metadata.city.title;

const DEFAULT_PAGE_SIZE = 4;

export default function CiudadesClient() {
  const { allCityData, isLoading } = useContext(AppContext);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = useMemo(
    () => (allCityData ? [...allCityData].sort((a, b) => a.id - b.id) : []),
    [allCityData],
  );
  const totalPages = useMemo(
    () => Math.ceil(sortedData.length / pageSize) || 1,
    [sortedData, pageSize],
  );
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);
  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize]);

  if (isLoading) {
    return (
      <section className="flex flex-col items-center justify-center">
        <LoadingSpinner size={64} />
      </section>
    );
  }

  return (
    <EntityPageLayout
      title={pageTitle}
      isLoading={isLoading && (!allCityData || allCityData.length === 0)}
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
      {paginatedData.map((city) => (
        <EntityCard
          key={city.id || city.name}
          entity={city}
          type="ciudad"
          linkBase={`/ciudades/${city.id}`}
        />
      ))}
    </EntityPageLayout>
  );
}
