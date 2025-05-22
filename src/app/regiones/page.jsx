"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import PageSection from "@/components/PageSection";
import DepartamentoCard from "@/components/Card/DepartamentoCard"; // Using DepartamentoCard as it's used for similar overview cards
import LoadingCardDetail from "@/components/Loading/LoadingCardDetail";
import Pagination from "@/components/ui/Pagination";

export default function Regiones() {
  const pageTitle = metadata.reg.title;

  const {
    regionData, // This is the paginated slice
    isLoading,
    regionCurrentPage,
    regionTotalPages,
    goToRegionPage,
  } = useContext(AppContext);

  // Show loading state only if data hasn't been loaded yet for the first time
  if (isLoading && (!regionData || regionData.length === 0)) {
    return (
      <section className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 6 }).map((_, index) => ( // Regions are fewer, so 6 loading cards
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
        <PageSection title={pageTitle} isLoading={isLoading && (!regionData || regionData.length === 0)} gridCols="md:grid-cols-2 lg:grid-cols-3"> {/* Adjusted grid for typically fewer regions */}
          {(Array.isArray(regionData) ? regionData : [])
            .sort((a, b) => (a.id || 0) - (b.id || 0)) // Sort by ID, or adapt if name is preferred
            .map((region) => (
              <DepartamentoCard // Re-using DepartamentoCard; ensure props match or adapt
                key={region.id || region.name}
                departamento={region} // Pass region object; card needs to handle its properties
                // section="regiones" // Optional: if card needs to adapt display
              />
            ))}
        </PageSection>
        {!isLoading && regionTotalPages > 1 && (
          <div className="flex justify-center mt-8 mb-8">
            <Pagination
              currentPage={regionCurrentPage}
              totalPages={regionTotalPages}
              onPageChange={goToRegionPage}
            />
          </div>
        )}
      </main>
    </>
  );
}
