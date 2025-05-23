"use client";

import React, { useContext, useState, useMemo, useEffect } from "react";
import { AppContext } from "@/context";
import PageSizeSelector from "@/components/ui/PageSizeSelector";
import Link from "next/link";
import Pagination from "@/components/ui/Pagination";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import { metadata } from "@/components/metadata";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import Head from "next/head";

const pageTitle = metadata.air.title;

export default function Aeropuertos() {
  const { allAirportData, isLoading } = useContext(AppContext);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = useMemo(() => (
    allAirportData ? [...allAirportData].sort((a, b) => a.id - b.id) : []
  ), [allAirportData]);
  const totalPages = useMemo(() => Math.ceil(sortedData.length / pageSize) || 1, [sortedData, pageSize]);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);
  useEffect(() => { setCurrentPage(1); }, [pageSize, sortedData]);

  if (isLoading && allAirportData.length === 0) {
    return (
      <section className="flex items-center justify-center min-h-[40vh]">
        <LoadingSpinner size={64} key={"loading"}/>
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
          <div key={airport.id || airport.name} className="rounded-xl bg-slate-950/90 text-white/90 shadow-xl flex flex-col gap-3 p-6 min-h-60">
            <h2 className="text-2xl font-bold mb-1 text-primary-400">{airport.name}</h2>
            <p className="text-base leading-relaxed mb-2 text-white/80 line-clamp-3">{airport.description}</p>
            <div className="flex flex-wrap gap-4 text-sm mb-4">
              <div><span className="font-semibold text-white/70">Ciudad:</span> {airport.city?.name || "Ciudad no disponible"}</div>
              <div><span className="font-semibold text-white/70">Tipo:</span> {airport.type || "Tipo no disponible"}</div>
              <div><span className="font-semibold text-white/70">IATA:</span> {airport.iataCode || "IATA no disponible"}</div>
              <div><span className="font-semibold text-white/70">OACI:</span> {airport.oaciCode || "OACI no disponible"}</div>
            </div>
            <Link href={`/aeropuertos/${airport.id}`} passHref legacyBehavior>
              <a className="inline-block mt-auto px-5 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition-colors text-base font-medium text-center">Ver más</a>
            </Link>
          </div>
        ))}
      </EntityPageLayout>
    </>
  );
}