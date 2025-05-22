"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import PageSection from "@/components/PageSection";
import LoadingCardDetail from "@/components/Loading/LoadingCardDetail";
import DepartamentoCard from "@/components/Card/DepartamentoCard";
import Pagination from "@/components/ui/Pagination"; // Import the Pagination component

export default function CategoriasNaturaleza() {
  const pageTitle = metadata.catNat.title;

  const {
    categoryNaturalAreaData, // This is the paginated slice
    isLoading,
    categoryNaturalAreaCurrentPage,
    categoryNaturalAreaTotalPages,
    goToCategoryNaturalAreaPage,
  } = useContext(AppContext);

  // Show loading state only if data hasn't been loaded yet for the first time
  if (isLoading && (!categoryNaturalAreaData || categoryNaturalAreaData.length === 0)) {
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
      <PageSection title={pageTitle} isLoading={isLoading && (!categoryNaturalAreaData || categoryNaturalAreaData.length === 0)} gridCols="md:grid-cols-2 lg:grid-cols-4">
        {(Array.isArray(categoryNaturalAreaData) ? categoryNaturalAreaData : [])
          .sort((a, b) => a.id - b.id) // Existing sort maintained
          .map((category) => (
            <DepartamentoCard
              key={category.id || category.name} // Use item.id or item.name for key
              departamento={category}
            />
          ))}
      </PageSection>
      {!isLoading && categoryNaturalAreaTotalPages > 1 && (
        <div className="flex justify-center mt-8 mb-8">
          <Pagination
            currentPage={categoryNaturalAreaCurrentPage}
            totalPages={categoryNaturalAreaTotalPages}
            onPageChange={goToCategoryNaturalAreaPage}
          />
        </div>
      )}
    </>
  );
}
