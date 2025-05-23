"use client";

import React, { useContext, useState, useMemo } from "react";
import { AppContext } from "@/context";
import PageSizeSelector from "@/components/ui/PageSizeSelector";
import Link from "next/link";
import Pagination from "@/components/ui/Pagination";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import { metadata } from "@/components/metadata";
import Head from "next/head";

const pageTitle = metadata.dep.title;
export default function Departamentos() {
  const { allDepartamentData, isLoading } = useContext(AppContext);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = useMemo(
    () =>
      allDepartamentData
        ? [...allDepartamentData].sort((a, b) => a.id - b.id)
        : [],
    [allDepartamentData],
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
  return (
    <>
      <Head>
        <title>{`${pageTitle} • Colombia 360`}</title>
      </Head>
      <EntityPageLayout
        title={pageTitle}
        isLoading={
          isLoading && (!allDepartamentData || allDepartamentData.length === 0)
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
        {paginatedData.map((departament) => (
          <div
            key={departament.id || departament.name}
            className="flex min-h-60 flex-col gap-3 rounded-xl bg-slate-950/90 p-6 text-white/90 shadow-xl"
          >
            <h2 className="text-primary-400 mb-1 text-2xl font-bold">
              {departament.name}
            </h2>
            <p className="mb-2 line-clamp-3 text-base leading-relaxed text-white/80">
              {departament.description}
            </p>
            <div className="mb-4 flex flex-wrap gap-4 text-sm">
              <div>
                <span className="font-semibold text-white/70">Superficie:</span>{" "}
                {departament.surface?.toLocaleString()} km²
              </div>
              <div>
                <span className="font-semibold text-white/70">Población:</span>{" "}
                {departament.population?.toLocaleString()}
              </div>
              <div>
                <span className="font-semibold text-white/70">Municipios:</span>{" "}
                {departament.municipalities}
              </div>
            </div>
            <Link
              href={`/departamentos/${departament.id}`}
              passHref
              legacyBehavior
            >
              <a className="mt-auto inline-block rounded-lg bg-gray-800 px-5 py-2 text-center text-base font-medium text-white shadow transition-colors hover:bg-gray-700">
                Ver más
              </a>
            </Link>
          </div>
        ))}
      </EntityPageLayout>
    </>
  );
}
