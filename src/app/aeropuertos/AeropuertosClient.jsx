"use client";
import React, { useContext, useState, useMemo, useEffect } from "react";
import { AppContext } from "@/context";
import PageSizeSelector from "@/components/ui/PageSizeSelector";
import Pagination from "@/components/ui/Pagination";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import { metadata } from "@/components/metadata";
import EntityCard from "@/components/ui/EntityCard";

const pageTitle = metadata.air.title;

export default function AeropuertosClient() {
  const { allAirportData, isLoading } = useContext(AppContext);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = useMemo(
    () => (allAirportData ? [...allAirportData].sort((a, b) => a.id - b.id) : []),
    [allAirportData],
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
      isLoading={
        isLoading && (!allAirportData || allAirportData.length === 0)
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
      {paginatedData.map((airport) => (
  <EntityCard key={airport.id || airport.name} entity={airport} type="aeropuerto" />
))}
    </EntityPageLayout>
  );
}
