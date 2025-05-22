"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import PageSection from "@/components/PageSection";
import CardDetail from "@/components/ChakraCard/CardDetail"; // Using CardDetail as a placeholder
import LoadingCardDetail from "@/components/Loading/LoadingCardDetail";
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
          {Array.from({ length: 12 }).map((_, index) => ( // Default to 12 loading cards
            <LoadingCardDetail key={index} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
      <title>{`${pageTitle} • Colombia 360`}</title>
      <main>
        <PageSection title={pageTitle} isLoading={isLoading && (!naturalAreaData || naturalAreaData.length === 0)} gridCols="md:grid-cols-2 lg:grid-cols-4">
          {(Array.isArray(naturalAreaData) ? naturalAreaData : [])
            .sort((a, b) => { // Assuming items have a 'name' property for sorting, or 'id'
              if (a.name && b.name) {
                return a.name.localeCompare(b.name);
              }
              return (a.id || 0) - (b.id || 0);
            })
            .map((area) => (
              <CardDetail
                key={area.id || area.name} // Use item.id or item.name for key
                title={area.name || "Nombre no disponible"}
                // subtitle={area.category?.name} // Example: if category is available
                description={area.description || "Descripción no disponible"}
                imageUrl={area.urlImage || "/placeholder-image.jpg"} // Provide a fallback image
                alt={area.name || "Imagen de área natural"}
                imageWidth={320}
                imageHeight={213}
                imageStyle="cover"
                viewMoreHref={`/naturaleza/${area.id}`} // Assuming a detail page structure
                titleWordsCount={6} // Adjust as needed
              />
            ))}
        </PageSection>
        {!isLoading && naturalAreaTotalPages > 1 && (
          <div className="flex justify-center mt-8 mb-8">
            <Pagination
              currentPage={naturalAreaCurrentPage}
              totalPages={naturalAreaTotalPages}
              onPageChange={goToNaturalAreaPage}
            />
          </div>
        )}
      </main>
    </>
  );
}
