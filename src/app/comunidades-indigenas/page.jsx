"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import CardBadge from "@/components/Card/CardBadge";
import LoadingCard from "@/components/Loading/LoadingCard"; // This was used before, will adapt to LoadingCardDetail for consistency if needed or keep if it's different
import LoadingCardDetail from "@/components/Loading/LoadingCardDetail"; // Assuming this is preferred for consistency
import PageSection from "@/components/PageSection";
import Pagination from "@/components/ui/Pagination"; // Import the Pagination component

export default function ComunidadesIndigenas() {
  const pageTitle = metadata.ind.title;

  const {
    nativeCommunityData, // This is the paginated slice
    isLoading,
    nativeCommunityCurrentPage,
    nativeCommunityTotalPages,
    goToNativeCommunityPage,
  } = useContext(AppContext);

  // Show loading state only if data hasn't been loaded yet for the first time
  if (isLoading && (!nativeCommunityData || nativeCommunityData.length === 0)) {
    return (
      // Using LoadingCardDetail for consistency with other pages, assuming 12 items for loading skeleton
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
      <main className="min-h-screen pb-16">
        <PageSection title={pageTitle} isLoading={isLoading && (!nativeCommunityData || nativeCommunityData.length === 0)} gridCols="md:grid-cols-2 lg:grid-cols-4">
          {(Array.isArray(nativeCommunityData) ? nativeCommunityData : [])
            .sort((a, b) => a.id - b.id) // Existing sort maintained
            .map((ind) => (
              <CardBadge
                key={ind.id || ind.name} // Use item.id or item.name for key
                title={ind.name}
                text={ind.description}
                badge={["Lengua(s):", ind.languages]}
                className="min-h-72" // Existing class maintained
              />
            ))}
        </PageSection>
        {!isLoading && nativeCommunityTotalPages > 1 && (
          <div className="flex justify-center mt-8 mb-8">
            <Pagination
              currentPage={nativeCommunityCurrentPage}
              totalPages={nativeCommunityTotalPages}
              onPageChange={goToNativeCommunityPage}
            />
          </div>
        )}
      </main>
    </>
  );
}
