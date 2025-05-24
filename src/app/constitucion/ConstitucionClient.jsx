"use client";

import React, { useContext, useState, useEffect, useMemo } from "react";
import { AppContext } from "@/context";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import EntityCard from "@/components/ui/EntityCard";
import Pagination from "@/components/ui/Pagination";
import PageSizeSelector from "@/components/ui/PageSizeSelector";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import { metadata } from "@/components/metadata";

const pageTitle = metadata.ley?.title || "Constitución de Colombia";
const DEFAULT_PAGE_SIZE = 4;

export default function ConstitucionClient() {
  const {
    constitutionArticlesPagedData,
    constitutionArticleCurrentPage,
    constitutionArticleTotalPages,
    goToConstitutionArticlePage,
    searchConstitutionArticlesByKeyword,
    searchConstitutionArticlesByChapter,
    searchedConstitutionArticles,
    isLoading: contextIsLoading,
  } = useContext(AppContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("keyword");
  const [isSearching, setIsSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);

  // Determine if a search is active and has results
  const isSearchActive = useMemo(
    () => searchedConstitutionArticles && searchedConstitutionArticles.data?.length > 0,
    [searchedConstitutionArticles]
  );

  // Check if a search has been attempted
  const searchAttempted = useMemo(
    () => searchedConstitutionArticles && searchedConstitutionArticles.pagination,
    [searchedConstitutionArticles]
  );

  // Sync with context page
  useEffect(() => {
    if (!searchAttempted) {
      setCurrentPage(constitutionArticleCurrentPage || 1);
    } else if (isSearchActive) {
      setCurrentPage(searchedConstitutionArticles.pagination?.currentPage || 1);
    }
  }, [constitutionArticleCurrentPage, searchedConstitutionArticles, isSearchActive, searchAttempted]);

  // Reset to page 1 when page size changes
  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize]);

  // Get articles to display
  const articlesToDisplay = useMemo(() => {
    if (isSearchActive) {
      return searchedConstitutionArticles.data || [];
    }
    return constitutionArticlesPagedData?.data || [];
  }, [isSearchActive, searchedConstitutionArticles, constitutionArticlesPagedData]);

  // Calculate total pages
  const totalPages = useMemo(() => {
    if (isSearchActive) {
      return searchedConstitutionArticles.pagination?.totalPages || 1;
    }
    return constitutionArticleTotalPages || 1;
  }, [isSearchActive, searchedConstitutionArticles, constitutionArticleTotalPages]);

  // Handle search
  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    setIsSearching(true);
    try {
      if (searchType === "keyword") {
        await searchConstitutionArticlesByKeyword(searchTerm.trim(), 1);
      } else {
        await searchConstitutionArticlesByChapter(searchTerm.trim(), 1);
      }
      setCurrentPage(1);
    } catch (error) {
      console.error("Error searching:", error);
    } finally {
      setIsSearching(false);
    }
  };

  // Clear search
  const handleClearSearch = async () => {
    setIsSearching(true);
    setSearchTerm("");
    try {
      await searchConstitutionArticlesByKeyword("", 1);
      goToConstitutionArticlePage(1);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error clearing search:", error);
    } finally {
      setIsSearching(false);
    }
  };

  // Handle page change
  const handlePageChange = async (newPage) => {
    setCurrentPage(newPage);
    if (isSearchActive) {
      setIsSearching(true);
      try {
        if (searchType === "keyword") {
          await searchConstitutionArticlesByKeyword(searchTerm.trim(), newPage);
        } else {
          await searchConstitutionArticlesByChapter(searchTerm.trim(), newPage);
        }
      } catch (error) {
        console.error("Error changing page:", error);
      } finally {
        setIsSearching(false);
      }
    } else {
      goToConstitutionArticlePage(newPage);
    }
  };

  const isLoading = contextIsLoading || isSearching;

  return (
    <div className="container mx-auto min-h-screen p-4 antialiased">
      <section className="rounded-xl bg-slate-900/80 p-6 shadow-xl md:p-8">
        <h1 className="text-primary-400 mb-6 text-center text-3xl font-bold md:text-4xl">
          {pageTitle}
        </h1>

        {/* Search bar */}
        <div className="mb-6 rounded-lg bg-slate-800 p-4 shadow">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <input
              type="text"
              placeholder="Buscar artículo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="focus:border-primary-500 focus:ring-primary-500 rounded-md border border-slate-600 bg-slate-700 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-1 md:col-span-1"
            />
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="focus:border-primary-500 focus:ring-primary-500 rounded-md border border-slate-600 bg-slate-700 px-3 py-2 text-white focus:outline-none focus:ring-1 md:col-span-1"
            >
              <option value="keyword">Por Palabra Clave</option>
              <option value="chapter">Por Número de Capítulo</option>
            </select>
            <div className="flex space-x-2 md:col-span-1">
              <button
                onClick={handleSearch}
                disabled={isLoading || !searchTerm.trim()}
                className="bg-primary-600 hover:bg-primary-700 flex-1 rounded-md px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading ? "Buscando..." : "Buscar"}
              </button>
              <button
                onClick={handleClearSearch}
                disabled={isLoading}
                className="flex-1 rounded-md bg-slate-600 px-4 py-2 text-white hover:bg-slate-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Limpiar
              </button>
            </div>
          </div>
        </div>

        {/* Page size selector */}
        <div className="mb-4 flex justify-end">
          <PageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />
        </div>

        {/* Loading spinner */}
        {isLoading && (
          <div className="flex justify-center py-8">
            <LoadingSpinner size={64} />
          </div>
        )}

        {/* No results message */}
        {!isLoading && articlesToDisplay.length === 0 && (
          <div className="mt-10 text-center text-xl text-white/70">
            {searchAttempted
              ? "No se encontraron artículos con los criterios de búsqueda."
              : "No hay artículos para mostrar."}
          </div>
        )}

        {/* Articles grid */}
        {!isLoading && articlesToDisplay.length > 0 && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {articlesToDisplay.map((article) => (
              <EntityCard
                key={article.id || article.name}
                entity={article}
                type="articulos-constitucion"
                linkBase={`/constitucion`}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        {!isLoading && articlesToDisplay.length > 0 && totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </section>
    </div>
  );
}
