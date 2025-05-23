"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import RadioCard from "@/components/Card/RadioCard";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import PageSection from "@/components/PageSection";
import Pagination from "@/components/ui/Pagination"; // Import the Pagination component


export default function Radio() {
  const pageTitle = metadata.fm.title;
  const {
    radioData, // This is the paginated slice
    isLoading,
    radioCurrentPage,
    radioTotalPages,
    goToRadioPage,
  } = useContext(AppContext);

  // Show loading state only if data hasn't been loaded yet for the first time
  if (isLoading && (!radioData || radioData.length === 0)) {
    return (
      <section className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <LoadingSpinner size={56} key={index} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
      
      <main>
        <PageSection
          title={pageTitle}
          isLoading={isLoading && (!radioData || radioData.length === 0)}
          gridCols="md:grid-cols-2 lg:grid-cols-4"
        >
          {(Array.isArray(radioData) ? radioData : [])
            .sort((a, b) => a.id - b.id) // Existing sort maintained
            .map((fm) => (
              <RadioCard key={fm.id || fm.name} fm={fm} /> // Use item.id or item.name for key
            ))}
        </PageSection>
        {!isLoading && radioTotalPages > 1 && (
          <div className="mb-8 mt-8 flex justify-center">
            <Pagination
              currentPage={radioCurrentPage}
              totalPages={radioTotalPages}
              onPageChange={goToRadioPage}
            />
          </div>
        )}
      </main>
    </>
  );
}
