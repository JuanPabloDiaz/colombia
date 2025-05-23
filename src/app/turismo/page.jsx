"use client";

import React, { useContext, useState, useMemo } from "react";
import { AppContext } from "@/context";
import PageSizeSelector from "@/components/ui/PageSizeSelector";

import { metadata } from "@/components/metadata";
import CardDetail from "@/components/ChakraCard/CardDetail";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import ImageChecker from "@/components/ImageChecker/ImageChecker";
import Pagination from "@/components/ui/Pagination";
import Head from "next/head";

export default function Turismo() {
  const pageTitle = metadata.tur.title;

  const { allTouristicAttractionData, isLoading } = useContext(AppContext);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = useMemo(() => (allTouristicAttractionData ? [...allTouristicAttractionData].sort((a, b) => a.id - b.id) : []), [allTouristicAttractionData]);
  const totalPages = useMemo(() => Math.ceil(sortedData.length / pageSize) || 1, [sortedData, pageSize]);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const page = sortedData.slice(start, start + pageSize);
    return page;
  }, [sortedData, currentPage, pageSize]);
  React.useEffect(() => { setCurrentPage(1); }, [pageSize, sortedData]);

  // Show loading state only if data hasn't been loaded yet for the first time
  if (isLoading && (!allTouristicAttractionData || allTouristicAttractionData.length === 0)) {
    return (
      <section className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, index) => ( // Default to 12 loading cards
            <LoadingSpinner size={56} key={index}/>
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
      <EntityPageLayout
        title={pageTitle}
        isLoading={isLoading && (!allTouristicAttractionData || allTouristicAttractionData.length === 0)}
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
        {paginatedData.map((tour) => (
          <ImageChecker
            key={tour.id || tour.name}
            imageUrl={tour.images}
            imageId={tour.id}
            imageName={tour.name}
          >
            <CardDetail
              title={tour.name}
              description={tour.description || "Descripción no disponible"}
              imageUrl={Array.isArray(tour.images) ? tour.images[0] : tour.images}
              alt={tour.name || "Imagen de turismo"}
              imageWidth={320}
              imageHeight={213}
              imageStyle="cover"
              viewMoreHref={`/turismo/${tour.id}`}
              titleWordsCount={3}
            />
          </ImageChecker>
        ))}
      </EntityPageLayout>
    </>
  );
}
