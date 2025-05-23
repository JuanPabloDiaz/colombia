"use client";

import React, { useContext, useState, useMemo } from "react";
import { AppContext } from "@/context";
import PageSizeSelector from "@/components/ui/PageSizeSelector";

import CardDetail from "@/components/ChakraCard/CardDetail";
import EntityPageLayout from "@/components/ui/EntityPageLayout";

import { metadata } from "@/components/metadata";
import LoadingCardDetail from "@/components/Loading/LoadingCardDetail";
import Pagination from "@/components/ui/Pagination"; // Import the Pagination component
import Head from "next/head";

export default function EspeciesInvasoras() {
  const pageTitle = metadata.espInv.title;

  const { allInvasiveSpecieData, isLoading } = useContext(AppContext);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = useMemo(() => (allInvasiveSpecieData ? [...allInvasiveSpecieData].sort((a, b) => a.id - b.id) : []), [allInvasiveSpecieData]);
  const totalPages = useMemo(() => Math.ceil(sortedData.length / pageSize) || 1, [sortedData, pageSize]);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);
  React.useEffect(() => { setCurrentPage(1); }, [pageSize, sortedData]);

  // Show loading state only if data hasn't been loaded yet for the first time
  if (isLoading && (!allInvasiveSpecieData || allInvasiveSpecieData.length === 0)) {
    return (
      <section className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Original loading skeleton had 8 items, preserving that */}
          {Array.from({ length: 8 }).map((_, index) => (
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
      <EntityPageLayout
        title={pageTitle}
        isLoading={isLoading && (!allInvasiveSpecieData || allInvasiveSpecieData.length === 0)}
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
        {paginatedData.map((species) => (
            <CardDetail
              key={species.id || species.name}
              title={species.name}
              subtitle={species.category}
              description={species.description}
              imageUrl={species.urlImage}
              alt={species.name}
              imageWidth={320}
              imageHeight={213}
              imageStyle="cover"
              viewMoreHref={`/especies-invasoras/${species.id}`}
              titleWordsCount={6}
            />
          ))}
      </EntityPageLayout>
    </>
  );
}
