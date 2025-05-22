"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import CardDetail from "@/components/ChakraCard/CardDetail";
import PageSection from "@/components/PageSection";

import { metadata } from "@/components/metadata";
import LoadingCardDetail from "@/components/Loading/LoadingCardDetail";
import Pagination from "@/components/ui/Pagination"; // Import the Pagination component

export default function EspeciesInvasoras() {
  const pageTitle = metadata.espInv.title;

  const {
    invasiveSpecieData, // This is the paginated slice
    isLoading,
    invasiveSpecieCurrentPage,
    invasiveSpecieTotalPages,
    goToInvasiveSpeciePage,
  } = useContext(AppContext);

  // Show loading state only if data hasn't been loaded yet for the first time
  if (isLoading && (!invasiveSpecieData || invasiveSpecieData.length === 0)) {
    return (
      <section className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Original loading skeleton had 8 items, preserving that */}
          {Array.from({ length: 8 }).map((_, index) => (
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
        <PageSection title={pageTitle} isLoading={isLoading && (!invasiveSpecieData || invasiveSpecieData.length === 0)} gridCols="md:grid-cols-2 lg:grid-cols-4">
          {(Array.isArray(invasiveSpecieData) ? invasiveSpecieData : [])
            .sort((a, b) => a.id - b.id) // Existing sort maintained
            .map((species) => ( // Changed key from index to species.id
              <CardDetail
                key={species.id || species.name} // Use item.id or item.name for key
                title={species.name}
                subtitle={species.scientificName}
                description={species.impact}
                imageUrl={species.urlImage}
                alt={species.scientificName}
                imageWidth={320}
                imageHeight={213}
                imageStyle="cover"
                viewMoreHref={`/especies-invasoras/${species.id}`}
                titleWordsCount={4}
              />
            ))}
        </PageSection>
        {!isLoading && invasiveSpecieTotalPages > 1 && (
          <div className="flex justify-center mt-8 mb-8">
            <Pagination
              currentPage={invasiveSpecieCurrentPage}
              totalPages={invasiveSpecieTotalPages}
              onPageChange={goToInvasiveSpeciePage}
            />
          </div>
        )}
      </main>
    </>
  );
}
