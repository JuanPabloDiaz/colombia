"use client";

import React, { useContext, useState, useMemo, useEffect } from "react";
import { AppContext } from "@/context";
import PageSizeSelector from "@/components/ui/PageSizeSelector";
import Pagination from "@/components/ui/Pagination";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import CardDetail from "@/components/ChakraCard/CardDetail";
import { metadata } from "@/components/metadata";

const pageTitle = metadata.espInv.title;
const DEFAULT_PAGE_SIZE = 4;

export default function EspeciesInvasorasClient() {
  const { allInvasiveSpecieData, isLoading } = useContext(AppContext);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = useMemo(
    () =>
      allInvasiveSpecieData
        ? [...allInvasiveSpecieData].sort((a, b) => a.id - b.id)
        : [],
    [allInvasiveSpecieData],
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

  if (
    isLoading &&
    (!allInvasiveSpecieData || allInvasiveSpecieData.length === 0)
  ) {
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
        isLoading &&
        (!allInvasiveSpecieData || allInvasiveSpecieData.length === 0)
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
      {paginatedData && paginatedData.length > 0
        ? paginatedData.map((species) => (
            <CardDetail
              key={species.id || species.name}
              title={species.name}
              subtitle={species.category}
              description={species.description}
              imageUrl={species.urlImage}
              alt={species.name}
              imageWidth={320}
              imageHeight={213}
              imageStyle="cover"
              viewMoreHref={`/especies-invasoras/${species.id}`}
              titleWordsCount={6}
            />
          ))
        : !isLoading && (
            <p className="col-span-full text-center">
              No hay platos típicos para mostrar en este momento.
            </p>
          )}{" "}
    </EntityPageLayout>
  );
}
