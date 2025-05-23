"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import DepartamentoCard from "@/components/Card/DepartamentoCard";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
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
          {Array.from({ length: 6 }).map(
            (
              _,
              index, // Regions are fewer, so 6 loading cards
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
        isLoading={isLoading && (!regionData || regionData.length === 0)}
        gridCols="md:grid-cols-2 lg:grid-cols-3"
        pagination={
          !isLoading &&
          regionTotalPages > 1 && (
            <div className="mb-8 mt-8 flex justify-center">
              <Pagination
                currentPage={regionCurrentPage}
                totalPages={regionTotalPages}
                onPageChange={goToRegionPage}
              />
            </div>
          )
        }
      >
        {(Array.isArray(regionData) ? regionData : [])
          .sort((a, b) => (a.id || 0) - (b.id || 0))
          .map((region) => (
            <DepartamentoCard
              key={region.id || region.name}
              departamento={region}
            />
          ))}
      </EntityPageLayout>
    </>
  );
}
