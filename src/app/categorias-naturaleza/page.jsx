"use client";

import React, { useContext, useState, useMemo } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import PageSection from "@/components/PageSection";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import DepartamentoCard from "@/components/Card/DepartamentoCard";
import Pagination from "@/components/ui/Pagination";
import PageSizeSelector from "@/components/ui/PageSizeSelector";
import Head from "next/head";

export default function CategoriasNaturaleza() {
  const pageTitle = metadata.catNat.title;

  const { allCategoryNaturalAreaData, isLoading } = useContext(AppContext);

  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = useMemo(
    () =>
      allCategoryNaturalAreaData
        ? [...allCategoryNaturalAreaData].sort((a, b) => a.id - b.id)
        : [],
    [allCategoryNaturalAreaData],
  );

  const totalPages = Math.ceil(sortedData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = sortedData.slice(startIndex, endIndex);

  // Show loading state only if data hasn't been loaded yet for the first time
  if (
    isLoading &&
    (!allCategoryNaturalAreaData || allCategoryNaturalAreaData.length === 0)
  ) {
    return (
      <section className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, index) => (
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
      <PageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />
      <PageSection
        title={pageTitle}
        isLoading={
          isLoading &&
          (!allCategoryNaturalAreaData ||
            allCategoryNaturalAreaData.length === 0)
        }
        gridCols="md:grid-cols-2 lg:grid-cols-4"
      >
        {paginatedData.map((category) => (
          <DepartamentoCard
            key={category.id || category.name}
            departamento={category}
          />
        ))}
      </PageSection>
      {!isLoading && totalPages > 1 && (
        <div className="mb-8 mt-8 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </>
  );
}
