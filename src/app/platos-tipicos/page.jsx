"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context"; 
import { metadata } from "@/components/metadata";
import CardDetail from "@/components/ChakraCard/CardDetail";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import LoadingCardDetail from "@/components/Loading/LoadingCardDetail";
import Pagination from "@/components/ui/Pagination";

export default function PlatosTipicosPage() {
  const pageTitle = metadata.plato?.title || "Platos Típicos"; 

  const {
    typicalDishData, 
    isLoading,
    typicalDishCurrentPage,
    typicalDishTotalPages,
    goToTypicalDishPage,
    allTypicalDishData 
  } = useContext(AppContext);

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
      <title>{`${pageTitle} • Colombia 360`}</title>
      <EntityPageLayout
        title={pageTitle}
        isLoading={isLoading && (!allTypicalDishData || allTypicalDishData.length === 0)}
        gridCols="md:grid-cols-2 lg:grid-cols-4"
        pagination={
          typicalDishTotalPages > 1 && (
            <div className="flex justify-center mt-8 mb-8">
              <Pagination
                currentPage={typicalDishCurrentPage}
                totalPages={typicalDishTotalPages}
                onPageChange={goToTypicalDishPage}
              />
            </div>
          )
        }
      >
        {typicalDishData && typicalDishData.length > 0 ? (
          typicalDishData.map((dish) => (
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
