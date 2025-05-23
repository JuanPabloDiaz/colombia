"use client";

import React, { useContext, useState, useMemo } from "react";
import { AppContext } from "@/context";
import PageSizeSelector from "@/components/ui/PageSizeSelector";
import Link from "next/link";
import Pagination from "@/components/ui/Pagination";
import PageSection from "@/components/PageSection";
import Head from "next/head";
import { metadata } from "@/components/metadata";


export default function FeriasYFestivales() {
  const pageTitle = metadata.traditionalFairAndFestival.title;
  const {
    traditionalFairAndFestivalData,
    isLoading,
  } = useContext(AppContext);

  const [pageSize, setPageSize] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState(null);
  const [searching, setSearching] = useState(false);

  // Sort and filter data
  const sortedData = useMemo(() => {
    const data = filteredData !== null ? filteredData : traditionalFairAndFestivalData;
    return data ? [...data].sort((a, b) => (a.name && b.name ? a.name.localeCompare(b.name) : 0)) : [];
  }, [filteredData, traditionalFairAndFestivalData]);

  const totalPages = useMemo(() => Math.ceil(sortedData.length / pageSize) || 1, [sortedData, pageSize]);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);

  React.useEffect(() => { setCurrentPage(1); }, [pageSize, sortedData]);

  const handleSearch = async () => {
    if (!searchInput.trim()) {
      setFilteredData(null);
      return;
    }
    setSearching(true);
    try {
      // Use context search functions if available, otherwise filter locally
      // This assumes you have searchTraditionalFairAndFestivalByName and searchTraditionalFairAndFestivalByKeyword
      if (typeof traditionalFairAndFestivalData !== "undefined") {
        const q = searchInput.toLowerCase();
        const byName = traditionalFairAndFestivalData.filter(item => item.name?.toLowerCase().includes(q));
        const byKeyword = traditionalFairAndFestivalData.filter(item => item.keywords?.some(kw => kw.toLowerCase().includes(q)));
        // Merge and deduplicate by id
        const merged = [...byName, ...byKeyword].reduce((acc, curr) => {
          if (!acc.some(item => item.id === curr.id)) acc.push(curr);
          return acc;
        }, []);
        setFilteredData(merged);
      }
    } catch (err) {
      setFilteredData([]);
    } finally {
      setSearching(false);
    }
  };

  // Loading state
  if (isLoading && (!traditionalFairAndFestivalData || traditionalFairAndFestivalData.length === 0)) {
    return (
      <section className="flex items-center justify-center py-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="rounded-xl bg-slate-950/90 text-white/90 shadow-xl flex flex-col gap-3 p-6 min-h-60 animate-pulse" />
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
      <div className="mb-8 px-4">
        <h2 className="text-2xl font-bold text-center my-4">Buscar Ferias y Festivales</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="flex flex-col items-center w-full md:w-1/2">
            <input
              type="text"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              placeholder="Buscar por nombre o palabra clave..."
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 w-full"
              onKeyDown={e => { if (e.key === "Enter") handleSearch(); }}
              disabled={searching}
            />
            <button
              onClick={handleSearch}
              className="mt-2 px-6 py-2 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-full"
              disabled={searching}
            >
              {searching ? "Buscando..." : "Buscar"}
            </button>
          </div>
        </div>
      </div>
      <PageSection
        title={pageTitle}
        isLoading={isLoading && (!traditionalFairAndFestivalData || traditionalFairAndFestivalData.length === 0)}
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
        {paginatedData.length === 0 ? (
          <div className="col-span-full text-center text-gray-400 py-8">
            No se encontraron ferias ni festivales.
          </div>
        ) : (
          paginatedData.map(item => (
            <div
              key={item.id || item.name}
              className="rounded-xl bg-slate-950/90 text-white/90 shadow-xl flex flex-col gap-3 p-6 min-h-60"
            >
              <h2 className="text-2xl font-bold mb-1 text-primary-400 line-clamp-1">
                {item.name || "Nombre no disponible"}
              </h2>
              <p className="text-base leading-relaxed mb-2 text-white/80 line-clamp-3">
                {item.description || "Descripción no disponible."}
              </p>
              <div className="flex flex-wrap gap-4 text-sm mb-4">
                <div>
                  <span className="font-semibold text-white/70">Mes:</span> {item.month || "No disponible"}
                </div>
                <div>
                  <span className="font-semibold text-white/70">Ciudad:</span> {item.city?.name || "No disponible"}
                </div>
              </div>
              <Link href={`/ferias-y-festivales/${item.id || item.name}`} passHref legacyBehavior>
                <a className="inline-block mt-auto px-5 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition-colors text-base font-medium text-center">
                  Ver más
                </a>
              </Link>
            </div>
          ))
        )}
      </PageSection>
    </>
  );
}
