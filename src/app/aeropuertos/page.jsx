"use client";

import React, { useContext, useState, useMemo } from "react";
import { AppContext } from "@/context";
import PageSizeSelector from "@/components/ui/PageSizeSelector";

import { metadata } from "@/components/metadata"; 
import CardDetail from "@/components/ChakraCard/CardDetail";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import LoadingCardDetail from "@/components/Loading/LoadingCardDetail";
// Airports generally don't have images in this dataset, so ImageChecker might not be necessary.
// import ImageChecker from "@/components/ImageChecker/ImageChecker"; 
import Pagination from "@/components/ui/Pagination";

export default function Aeropuertos() {
  const pageTitle = metadata.air.title; 

  const { allAirportData, isLoading } = useContext(AppContext);
  const [pageSize, setPageSize] = useState(12); 
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = useMemo(() => (allAirportData ? [...allAirportData].sort((a, b) => a.id - b.id) : []), [allAirportData]);
  const totalPages = useMemo(() => Math.ceil(sortedData.length / pageSize) || 1, [sortedData, pageSize]);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const page = sortedData.slice(start, start + pageSize);
    return page;
  }, [sortedData, currentPage, pageSize]);

  React.useEffect(() => { 
    setCurrentPage(1); 
  }, [pageSize, sortedData]);

  // Show loading state
  if (isLoading && (!allAirportData || allAirportData.length === 0)) {
    return (
      <section className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: pageSize }).map((_, index) => (
            <LoadingCardDetail key={index} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
      <title>{`${pageTitle} • Colombia 360`}</title>
      <EntityPageLayout
        title={pageTitle}
        isLoading={isLoading && (!allAirportData || allAirportData.length === 0)}
        gridCols="md:grid-cols-2 lg:grid-cols-4" 
        pageSizeSelector={<PageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />}
        pagination={
          totalPages > 1 && (
            <div className="flex justify-center mt-8 mb-8">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )
        }
      >
        {paginatedData.map((airport) => (
          <CardDetail
            key={airport.id || airport.name}
            title={airport.name}
            description={`IATA: ${airport.iataCode || "N/A"} • OACI: ${airport.oaciCode || "N/A"} • Tipo: ${airport.type || "N/A"}`}
            badgeText={airport.city?.name || "Ciudad no disponible"}
            // No imageUrl for airports in this dataset
            alt={airport.name || "Aeropuerto"}
            viewMoreHref={`/aeropuertos/${airport.id}`}
            titleWordsCount={7} // Airport names can be longer
          />
        ))}
      </EntityPageLayout>
    </>
  );
}
