"use client";

import React, { useContext, useState, useMemo, useEffect } from "react";
import { AppContext } from "@/context";
import Pagination from "@/components/ui/Pagination";
import PageSizeSelector from "@/components/ui/PageSizeSelector";
import { metadata } from "@/components/metadata";
import CardDetail from "@/components/ChakraCard/CardDetail";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import ImageChecker from "@/components/ImageChecker/ImageChecker";

const pageTitle = metadata.tur.title;

export default function TurismoClient() {
  const { allTouristicAttractionData, isLoading } = useContext(AppContext);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  // Ordena y calcula los datos paginados
  const sortedData = useMemo(
    () => (allTouristicAttractionData ? [...allTouristicAttractionData].sort((a, b) => a.id - b.id) : []),
    [allTouristicAttractionData],
  );
  const totalPages = useMemo(
    () => Math.ceil(sortedData.length / pageSize) || 1,
    [sortedData, pageSize],
  );
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);

  // Reset page if pageSize or data changes
  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize, sortedData]);

  if (isLoading) {
    return (
      <>
        <LoadingSpinner size={56} key={"loading"} />
      </>
    );
  }

  return (
    <EntityPageLayout
      title={pageTitle}
      isLoading={isLoading}
      gridCols="md:grid-cols-2 lg:grid-cols-4"
      pageSizeSelector={
        <PageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />
      }
      pagination={
        totalPages > 1 && (
          <div className="mb-8 mt-8 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )
      }
    >
      {paginatedData && paginatedData.length > 0
        ? paginatedData.map((tour) => {
            const fullName = tour.name;
            return (
              <ImageChecker
              key={tour.id || fullName}
              imageUrl={tour.images}
              imageId={tour.id}
              imageName={fullName}
            >
              <CardDetail
                key={tour.id || fullName}
                title={fullName}
                description={tour.description}
                imageUrl={tour.images}
                alt={fullName}
                imageWidth={320}
                imageHeight={213}
                imageStyle="cover"
                viewMoreHref={`/turismo/${tour.id}`}
                titleWordsCount={3}
              />
            </ImageChecker>
            );
          })
        : !isLoading && (
            <p className="col-span-full text-center">
              No hay turismo para mostrar en este momento.
            </p>
          )}
    </EntityPageLayout>
  );
}
