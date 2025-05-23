"use client";

import React, { useContext, useState, useMemo, useEffect } from "react";
import { AppContext } from "@/context";
import Pagination from "@/components/ui/Pagination";
import PageSizeSelector from "@/components/ui/PageSizeSelector";
import { metadata } from "@/components/metadata";
import CardDetail from "@/components/ChakraCard/CardDetail";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import EntityPageLayout from "@/components/ui/EntityPageLayout";

const pageTitle = metadata.map.title;

export default function MapasClient() {
  const { mapData, isLoading } = useContext(AppContext);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  // Ordena y calcula los datos paginados
  const sortedData = useMemo(
    () => (mapData ? [...mapData].sort((a, b) => a.id - b.id) : []),
    [mapData],
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
        ? paginatedData.map((mapa) => (
            <CardDetail
              key={mapa.id || mapa.name}
              title={mapa.name}
              subtitle={mapa.category}
          description={mapa.description}
          imageUrl={mapa.urlImages}
          alt={mapa.name}
          imageWidth={320}
          imageHeight={213}
          imageStyle="cover"
          viewMoreHref={`/mapas/${mapa.id}`}
          titleWordsCount={6}
        />
        ))
        : !isLoading && (
          <p className="col-span-full text-center">
            No hay mapas para mostrar en este momento.
          </p>
        )}
    </EntityPageLayout>
  );
}
