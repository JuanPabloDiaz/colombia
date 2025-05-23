"use client";

import React, { useContext, useState, useMemo, useEffect } from "react";
import { AppContext } from "@/context"; 
import { metadata } from "@/components/metadata";
import CardDetail from "@/components/ChakraCard/CardDetail";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import LoadingCardDetail from "@/components/Loading/LoadingCardDetail";
import Pagination from "@/components/ui/Pagination";
import PageSizeSelector from "@/components/ui/PageSizeSelector"; 
import Head from "next/head";

export default function PlatosTipicosPage() {
  const pageTitle = metadata.plato?.title;

  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const {
    isLoading,
    allTypicalDishData 
  } = useContext(AppContext);

  // Ordena los datos por id para consistencia
  const sortedData = useMemo(
    () => (allTypicalDishData ? [...allTypicalDishData].sort((a, b) => a.id - b.id) : []),
    [allTypicalDishData]
  );

  const totalPages = useMemo(
    () => Math.ceil(sortedData.length / pageSize) || 1,
    [sortedData, pageSize]
  );

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);

  // Reset page if pageSize or data changes
  useEffect(() => { setCurrentPage(1); }, [pageSize, sortedData]);

  if (isLoading && (!allTypicalDishData || allTypicalDishData.length === 0)) {
    return (
      <section className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <LoadingCardDetail key={index} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
      <Head>
        <title>{`${pageTitle} • Colombia 360`}</title>
      </Head>
      <PageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />
      <EntityPageLayout
        title={pageTitle}
        isLoading={isLoading && (!allTypicalDishData || allTypicalDishData.length === 0)}
        pagination={
          totalPages > 1 && (
            <div className="flex justify-center mt-8 mb-8">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )
        }
      >
        {paginatedData && paginatedData.length > 0 ? (
          paginatedData.map((dish) => (
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
        ) : (
          !isLoading && <p className="text-center col-span-full">No hay platos típicos para mostrar en este momento.</p>
        )}
      </EntityPageLayout>
    </>
  );
}
