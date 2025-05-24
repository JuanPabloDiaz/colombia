"use client";

import React, { useContext, useState, useMemo, useEffect } from "react";
import { AppContext } from "@/context";
import Pagination from "@/components/ui/Pagination";
import PageSizeSelector from "@/components/ui/PageSizeSelector";
import { metadata } from "@/components/metadata";
import CardDetail from "@/components/ChakraCard/CardDetail";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
// Line removed as it was unused.

const pageTitle = metadata.food?.title;
const DEFAULT_PAGE_SIZE = 4;

export default function PlatosTipicosClient() {
  const { allTypicalDishData, isLoading } = useContext(AppContext);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [currentPage, setCurrentPage] = useState(1);

  // Ordena y calcula los datos paginados
  const sortedData = useMemo(
    () =>
      allTypicalDishData
        ? [...allTypicalDishData].sort((a, b) => a.id - b.id)
        : [],
    [allTypicalDishData],
  );
  const totalPages = useMemo(
    () => Math.ceil(sortedData.length / pageSize) || 1,
    [sortedData, pageSize],
  );
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);

  // Reset page if pageSize or data changes
  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize, sortedData]);

  if (isLoading) {
    return (
      <>
        <LoadingSpinner size={56} key={"loading"} />
      </>
    );
  }

  return (
    <EntityPageLayout
      title={pageTitle}
      isLoading={isLoading}
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
        ? paginatedData.map((dish) => (
            <CardDetail
              key={dish.id}
              title={dish.name}
              description={dish.description || "Descripción no disponible"}
              imageUrl={dish.imageUrl}
              alt={dish.name || "Imagen de plato típico"}
              imageWidth={320}
              imageHeight={213}
              imageStyle="cover"
              viewMoreHref={`/platos-tipicos/${dish.id}`}
              titleWordsCount={3}
            />
          ))
        : !isLoading && (
            <p className="col-span-full text-center">
              No hay platos típicos para mostrar en este momento.
            </p>
          )}
    </EntityPageLayout>
  );
}
