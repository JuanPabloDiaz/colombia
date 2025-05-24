"use client";

import React, { useContext, useState, useMemo } from "react";
import { AppContext } from "@/context";
import PageSizeSelector from "@/components/ui/PageSizeSelector";
import Pagination from "@/components/ui/Pagination";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import { metadata } from "@/components/metadata";
import EntityCard from "@/components/ui/EntityCard";

const pageTitle = metadata.dep.title;
const DEFAULT_PAGE_SIZE = 4;

export default function DepartamentosClient() {
  const { allDepartamentData, isLoading } = useContext(AppContext);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = useMemo(
    () =>
      allDepartamentData
        ? [...allDepartamentData].sort((a, b) => a.id - b.id)
        : [],
    [allDepartamentData],
  );
  const totalPages = useMemo(
    () => Math.ceil(sortedData.length / pageSize) || 1,
    [sortedData, pageSize],
  );
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);

  if (isLoading && (!allDepartamentData || allDepartamentData.length === 0)) {
    return (
      <section className="flex min-h-[40vh] items-center justify-center">
        <LoadingSpinner size={64} key={"loading"} />
      </section>
    );
  }

  return (
    <EntityPageLayout
      title={pageTitle}
      isLoading={
        isLoading && (!allDepartamentData || allDepartamentData.length === 0)
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
      {paginatedData.map((departamento) => (
        <EntityCard
          key={departamento.id || departamento.name}
          entity={departamento}
          type="departamento"
        />
      ))}
    </EntityPageLayout>
  );
}
