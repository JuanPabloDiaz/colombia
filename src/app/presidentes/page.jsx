"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

// import Card from "@/components/ChakraCard/Card"; // Not used, can be removed
import CardDetail from "@/components/ChakraCard/CardDetail";

import { metadata } from "@/components/metadata";
import PageSection from "@/components/PageSection";
import ImageChecker from "@/components/ImageChecker/ImageChecker"; // This component is used
import LoadingCardDetail from "@/components/Loading/LoadingCardDetail"; // For loading state
import Pagination from "@/components/ui/Pagination"; // Import the Pagination component

export default function Presidentes() {
  const pageTitle = metadata.pre.title;

  const {
    presidentData, // This is the paginated slice
    isLoading,
    presidentAdminCurrentPage, // Use presidentAdmin prefix for pagination state
    presidentAdminTotalPages,
    goToPresidentAdminPage,
  } = useContext(AppContext);

  // Show loading state only if data hasn't been loaded yet for the first time
  if (isLoading && (!presidentData || presidentData.length === 0)) {
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
        <PageSection title={pageTitle} isLoading={isLoading && (!presidentData || presidentData.length === 0)} gridCols="md:grid-cols-2 lg:grid-cols-4">
          {(Array.isArray(presidentData) ? presidentData : [])
            ?.sort((a, b) => a.id - b.id) // Existing sort maintained
            .map((president) => {
              const fullName = president.name + " " + president.lastName;
              const yStart = (president.startPeriodDate ?? "N-A").split(
                "-",
              )[0];
              const yEnd = (president.endPeriodDate ?? "A-N").split("-")[0];
              const date = `${yStart} - ${yEnd}`;
              return (
                // The ImageChecker component wraps CardDetail, this structure is preserved.
                // React.Fragment key was already on president.id, which is good.
                <ImageChecker
                  key={president.id} // Moved key to the direct child of map if ImageChecker is the root, or ensure it's on ImageChecker.
                  imageUrl={president.image}
                  imageId={president.id}
                  imageName={president.name}
                >
                  <CardDetail
                    title={fullName}
                    badgeText={date}
                    description={president.description}
                    imageUrl={president.image}
                    fallbackAvatar={true}
                    alt={president.lastName}
                    imageWidth={300}
                    imageHeight={300}
                    imageStyle="contain"
                    viewMoreHref={`/presidentes/${president.id}`}
                    titleWordsCount={3}
                  />
                </ImageChecker>
              );
            })}
        </PageSection>
        {!isLoading && presidentAdminTotalPages > 1 && (
          <div className="flex justify-center mt-8 mb-8">
            <Pagination
              currentPage={presidentAdminCurrentPage}
              totalPages={presidentAdminTotalPages}
              onPageChange={goToPresidentAdminPage}
            />
          </div>
        )}
      </main>
    </>
  );
}
