"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import PageSection from "@/components/PageSection";
import LoadingCardDetail from "@/components/Loading/LoadingCardDetail";
import DepartamentoCard from "@/components/Card/DepartamentoCard";
import Pagination from "@/components/ui/Pagination"; // Import the Pagination component
import Head from "next/head";

export default function Aeropuertos() {
  const pageTitle = metadata.air.title;

  const {
    airportData, // This is now the paginated slice
    isLoading,
    airportCurrentPage,
    airportTotalPages,
    goToAirportPage,
  } = useContext(AppContext);

  if (isLoading && airportData.length === 0) { // Show loading state only if data hasn't been loaded yet for the first time
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
      <Head>
        <title>{`${pageTitle} • Colombia 360`}</title>
      </Head>
      <PageSection title={pageTitle} isLoading={isLoading && airportData.length === 0} gridCols="md:grid-cols-2 lg:grid-cols-4">
        {/* Sorting is applied to the paginated slice. This is acceptable per instructions. */}
        {airportData
          .sort((a, b) => a.id - b.id) 
          .map((airport) => ( // Using airport.id for key if available, assuming it's unique
            <DepartamentoCard
              key={airport.id || airport.name} // Fallback to name if id is not present
              departamento={airport}
            />
          ))}
      </PageSection>
      {!isLoading && airportTotalPages > 1 && (
        <div className="flex justify-center mt-8 mb-8"> {/* Added centering and margin for pagination */}
          <Pagination
            currentPage={airportCurrentPage}
            totalPages={airportTotalPages}
            onPageChange={goToAirportPage}
          />
        </div>
      )}
    </>
  );
}
