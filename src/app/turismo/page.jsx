"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import CardDetail from "@/components/ChakraCard/CardDetail";
import PageSection from "@/components/PageSection";
import LoadingCardDetail from "@/components/Loading/LoadingCardDetail"; // For loading state
import ImageChecker from "@/components/ImageChecker/ImageChecker";
import Pagination from "@/components/ui/Pagination"; // Import the Pagination component

export default function Turismo() {
  const pageTitle = metadata.tur.title;

  const {
    touristicAttractionData, // This is the paginated slice
    isLoading,
    touristicAttractionCurrentPage,
    touristicAttractionTotalPages,
    goToTouristicAttractionPage,
  } = useContext(AppContext);

  // Show loading state only if data hasn't been loaded yet for the first time
  if (isLoading && (!touristicAttractionData || touristicAttractionData.length === 0)) {
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
        <PageSection title={pageTitle} isLoading={isLoading && (!touristicAttractionData || touristicAttractionData.length === 0)} gridCols="md:grid-cols-2 lg:grid-cols-4">
          {(Array.isArray(touristicAttractionData) ? touristicAttractionData : [])
            .sort((a, b) => a.id - b.id) // Existing sort maintained
            .map((tour) => ( // Key was on ImageChecker, which is correct. Using tour.id for key.
              <ImageChecker
                key={tour.id || tour.name} // Use item.id or item.name for key
                imageUrl={tour.images} // Assuming tour.images is a string URL, if it's an array, CardDetail might need adjustment or take the first image.
                imageId={tour.id}
                imageName={tour.name}
              >
                <CardDetail
                  // The inner key={index} was redundant if ImageChecker has the key.
                  title={tour.name}
                  // subtitle={tour.scientificName} // No subtitle in original
                  description={tour.description || "Descripción no disponible"} // Added description if available
                  imageUrl={Array.isArray(tour.images) ? tour.images[0] : tour.images} // Handle if images is an array
                  alt={tour.name || "Imagen de turismo"} // More descriptive alt
                  imageWidth={320}
                  imageHeight={213}
                  imageStyle="cover"
                  viewMoreHref={`/turismo/${tour.id}`}
                  titleWordsCount={3}
                />
              </ImageChecker>
            ))}
        </PageSection>
        {!isLoading && touristicAttractionTotalPages > 1 && (
          <div className="flex justify-center mt-8 mb-8">
            <Pagination
              currentPage={touristicAttractionCurrentPage}
              totalPages={touristicAttractionTotalPages}
              onPageChange={goToTouristicAttractionPage}
            />
          </div>
        )}
      </main>
    </>
  );
}
