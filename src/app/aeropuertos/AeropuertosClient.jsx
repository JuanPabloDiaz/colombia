"use client";
import React, { useContext, useState, useMemo, useEffect } from "react";
import { AppContext } from "@/context";
import PageSizeSelector from "@/components/ui/PageSizeSelector";
import Link from "next/link";
import Pagination from "@/components/ui/Pagination";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import { metadata } from "@/components/metadata";

const pageTitle = metadata.air.title;

export default function AeropuertosClient() {
  const { allAirportData, isLoading } = useContext(AppContext);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = useMemo(
    () => (allAirportData ? [...allAirportData].sort((a, b) => a.id - b.id) : []),
    [allAirportData],
  );
  const totalPages = useMemo(
    () => Math.ceil(sortedData.length / pageSize) || 1,
    [sortedData, pageSize],
  );
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);
  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize]);

  if (isLoading) {
    return (
      <section className="flex flex-col items-center justify-center">
        <LoadingSpinner size={64} />
      </section>
    );
  }

  return (
    <EntityPageLayout
      title={pageTitle}
      isLoading={
        isLoading && (!allAirportData || allAirportData.length === 0)
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
      {paginatedData.map((airport) => (
        <div
          key={airport.id || airport.name}
          className="flex min-h-60 flex-col gap-3 rounded-xl bg-slate-950/90 p-6 text-white/90 shadow-xl"
        >
          <h2 className="text-primary-400 mb-1 text-2xl font-bold">
            {airport.name}
          </h2>
          <p className="mb-2 line-clamp-3 text-base leading-relaxed text-white/80">
            {airport.description}
          </p>
          <div className="mb-4 flex flex-wrap gap-4 text-sm">
            <div>
              <span className="font-semibold text-white/70">Ciudad:</span>{" "}
              {airport.city?.name || "Ciudad no disponible"}
            </div>
            <div>
              <span className="font-semibold text-white/70">Tipo:</span>{" "}
              {airport.type || "Tipo no disponible"}
            </div>
            <div>
              <span className="font-semibold text-white/70">IATA:</span>{" "}
              {airport.iataCode || "IATA no disponible"}
            </div>
            <div>
              <span className="font-semibold text-white/70">OACI:</span>{" "}
              {airport.oaciCode || "OACI no disponible"}
            </div>
          </div>
          <Link href={`/aeropuertos/${airport.id}`} passHref legacyBehavior>
            <a className="mt-auto inline-block rounded-lg bg-gray-800 px-5 py-2 text-center text-base font-medium text-white shadow transition-colors hover:bg-gray-700">
              Ver más
            </a>
          </Link>
        </div>
      ))}
    </EntityPageLayout>
  );
}
