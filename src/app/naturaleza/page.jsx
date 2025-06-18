"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import CardDetail from "@/components/ChakraCard/CardDetail"; // Using CardDetail as a placeholder
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import Pagination from "@/components/ui/Pagination";

export default function Naturaleza() {
  const pageTitle = metadata.nat.title;

  const {
    naturalAreaData, // This is the paginated slice
    isLoading,
    naturalAreaCurrentPage,
    naturalAreaTotalPages,
    goToNaturalAreaPage,
  } = useContext(AppContext);

  // Show loading state only if data hasn't been loaded yet for the first time
  if (isLoading && (!naturalAreaData || naturalAreaData.length === 0)) {
    return (
      <section className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 12 }).map(
            (
              _,
              index, // Default to 12 loading cards
            ) => (
              <LoadingSpinner size={56} key={index} />
            ),
          )}
        </div>
      </section>
    );
  }

  return (
    <>
      <EntityPageLayout
        title={pageTitle}
        isLoading={
          isLoading && (!naturalAreaData || naturalAreaData.length === 0)
        }
        gridCols="md:grid-cols-2 lg:grid-cols-4"
        pagination={
          !isLoading &&
          naturalAreaTotalPages > 1 && (
            <div className="mb-8 mt-8 flex justify-center">
              <Pagination
                currentPage={naturalAreaCurrentPage}
                totalPages={naturalAreaTotalPages}
                onPageChange={goToNaturalAreaPage}
              />
            </div>
          )
        }
      >
        {(Array.isArray(naturalAreaData) ? naturalAreaData : [])
          .sort((a, b) => {
            if (a.name && b.name) {
              return a.name.localeCompare(b.name);
            }
            return (a.id || 0) - (b.id || 0);
          })
          .map((area) => (
            <CardDetail
              key={area.id || area.name}
              title={area.name || "Nombre no disponible"}
              // subtitle={area.category?.name}
              description={area.description || "Descripción no disponible"}
              imageUrl={area.urlImage || "/placeholder-image.jpg"}
              alt={area.name || "Imagen de área natural"}
              imageWidth={320}
              imageHeight={213}
              imageStyle="cover"
              viewMoreHref={`/naturaleza/${area.id}`}
              titleWordsCount={6}
            />
          ))}
      </EntityPageLayout>
    </>
  );
}
