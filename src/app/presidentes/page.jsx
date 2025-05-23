"use client";

import React, { useContext, useState, useMemo } from "react";
import { AppContext } from "@/context";
import PageSizeSelector from "@/components/ui/PageSizeSelector";

import CardDetail from "@/components/ChakraCard/CardDetail";
import { metadata } from "@/components/metadata";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import Pagination from "@/components/ui/Pagination";
import Head from "next/head";

export default function Presidentes() {
  const pageTitle = metadata.pre.title;

  const { allPresidentData, isLoading } = useContext(AppContext);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

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
  React.useEffect(() => {
    setCurrentPage(1);
  }, [pageSize, sortedData]);

  // Show loading state only if data hasn't been loaded yet for the first time
  if (isLoading && (!allPresidentData || allPresidentData.length === 0)) {
    return (
      <section className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <LoadingSpinner size={56} key={index} />
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
        isLoading={
          isLoading && (!allPresidentData || allPresidentData.length === 0)
        }
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
        {paginatedData.map((president) => {
          const fullName = president.name + " " + president.lastName;
          const yStart = (president.startPeriodDate ?? "N-A").split("-")[0];
          const yEnd = (president.endPeriodDate ?? "A-N").split("-")[0];
          return (
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
          );
        })}
      </EntityPageLayout>
    </>
  );
}
