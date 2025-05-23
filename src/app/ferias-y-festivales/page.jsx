"use client";

import React, { useContext, useState, useMemo } from "react";
import { AppContext } from "@/context";
import PageSizeSelector from "@/components/ui/PageSizeSelector";
import Link from "next/link";
import Pagination from "@/components/ui/Pagination";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import SearchFerias from "@/components/ui/SearchFerias";

import { metadata } from "@/components/metadata";

export default function FeriasYFestivales() {
  const pageTitle = metadata.traditionalFairAndFestival.title;
  const { allTraditionalFairAndFestivalData, isLoading } =
    useContext(AppContext);

  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState(null);
  const [searching, setSearching] = useState(false);

  // Sort and filter data
  const sortedData = useMemo(() => {
    const data =
      filteredData !== null ? filteredData : allTraditionalFairAndFestivalData;
    if (!data) return [];
    // Si todos tienen id numérico, ordena por id
    if (data.every((item) => typeof item.id === "number")) {
      return [...data].sort((a, b) => a.id - b.id);
    }
    // Si no, ordena por nombre
    return [...data].sort((a, b) =>
      a.name && b.name ? a.name.localeCompare(b.name) : 0,
    );
  }, [filteredData, allTraditionalFairAndFestivalData]);

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

  const handleSearch = async () => {
    if (!searchInput.trim()) {
      setFilteredData(null);
      return;
    }
    setSearching(true);
    try {
      // Use context search functions if available, otherwise filter locally
      // This assumes you have searchTraditionalFairAndFestivalByName and searchTraditionalFairAndFestivalByKeyword
      if (typeof allTraditionalFairAndFestivalData !== "undefined") {
        const q = searchInput.toLowerCase();
        const byName = allTraditionalFairAndFestivalData.filter((item) =>
          item.name?.toLowerCase().includes(q),
        );
        const byKeyword = allTraditionalFairAndFestivalData.filter((item) =>
          item.keywords?.some((kw) => kw.toLowerCase().includes(q)),
        );
        // Merge and deduplicate by id
        const merged = [...byName, ...byKeyword].reduce((acc, curr) => {
          if (!acc.some((item) => item.id === curr.id)) acc.push(curr);
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
  if (
    isLoading &&
    (!allTraditionalFairAndFestivalData ||
      allTraditionalFairAndFestivalData.length === 0)
  ) {
    return (
      <section className="flex items-center justify-center py-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="flex min-h-60 animate-pulse flex-col gap-3 rounded-xl bg-slate-950/90 p-6 text-white/90 shadow-xl"
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
      <EntityPageLayout
        title={pageTitle}
        isLoading={
          isLoading &&
          (!allTraditionalFairAndFestivalData ||
            allTraditionalFairAndFestivalData.length === 0)
        }
        gridCols=""
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
        <SearchFerias
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSearch={handleSearch}
          searching={searching}
        />
        <article className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* md:grid-cols-2 lg:grid-cols-4 */}
          {paginatedData.length === 0 ? (
            <div className="col-span-full py-8 text-center text-gray-400">
              No se encontraron ferias ni festivales.
            </div>
          ) : (
            paginatedData.map((item) => (
              <div
                key={item.id || item.name}
                className="flex min-h-60 flex-col gap-3 rounded-xl bg-slate-950/90 p-6 text-white/90 shadow-xl"
              >
                <h2 className="text-primary-400 mb-1 line-clamp-1 text-2xl font-bold">
                  {item.name || "Nombre no disponible"}
                </h2>
                <p className="mb-2 line-clamp-3 text-base leading-relaxed text-white/80">
                  {item.description || "Descripción no disponible."}
                </p>
                <div className="mb-4 flex flex-wrap gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-white/70">Mes:</span>{" "}
                    {item.month || "No disponible"}
                  </div>
                  <div>
                    <span className="font-semibold text-white/70">Ciudad:</span>{" "}
                    {item.city?.name || "No disponible"}
                  </div>
                </div>
                {item.id && typeof item.id === "number" ? (
                  <Link
                    href={`/ferias-y-festivales/${item.id}`}
                    passHref
                    legacyBehavior
                  >
                    <a className="mt-auto inline-block rounded-lg bg-gray-800 px-5 py-2 text-center text-base font-medium text-white shadow transition-colors hover:bg-gray-700">
                      Ver más
                    </a>
                  </Link>
                ) : (
                  <span className="mt-auto inline-block px-5 py-2 italic text-gray-400">
                    Sin detalle
                  </span>
                )}
              </div>
            ))
          )}
        </article>
      </EntityPageLayout>
    </>
  );
}
