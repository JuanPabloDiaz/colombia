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

const pageTitle = metadata.pre.title;
const DEFAULT_PAGE_SIZE = 4;

export default function PresidentesClient() {
  const { allPresidentData, isLoading } = useContext(AppContext);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [currentPage, setCurrentPage] = useState(1);

  // Ordena y calcula los datos paginados
  const sortedData = useMemo(
    () =>
      allPresidentData ? [...allPresidentData].sort((a, b) => a.id - b.id) : [],
    [allPresidentData],
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
        ? paginatedData.map((president) => {
            const fullName = president.name + " " + president.lastName;
            const yStart = (president.startPeriodDate ?? "N-A").split("-")[0];
            const yEnd = (president.endPeriodDate ?? "A-N").split("-")[0];
            return (
              <ImageChecker
                key={president.id || fullName}
                imageUrl={president.image}
                imageId={president.id}
                imageName={fullName}
              >
                <CardDetail
                  key={president.id || fullName}
                  title={fullName}
                  subtitle={`${yStart} - ${yEnd}`}
                  description={president.description}
                  imageUrl={president.image}
                  fallbackAvatar={true}
                  alt={fullName}
                  imageWidth={320}
                  imageHeight={213}
                  imageStyle="cover"
                  viewMoreHref={`/presidentes/${president.id}`}
                  titleWordsCount={3}
                />
              </ImageChecker>
            );
          })
        : !isLoading && (
            <p className="col-span-full text-center">
              No hay presidentes para mostrar en este momento.
            </p>
          )}
    </EntityPageLayout>
  );
}
