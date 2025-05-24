"use client";

import React, { useContext, useState, useEffect, useMemo } from "react";
import { AppContext } from "@/context";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import EntityCard from "@/components/ui/EntityCard";
import Pagination from "@/components/ui/Pagination";
import PageSizeSelector from "@/components/ui/PageSizeSelector";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";

export default function ArticulosConstitucionClient() {
  const {
    constitutionArticlesPagedData,
    constitutionArticleCurrentPage: contextCurrentPage, // Renamed to avoid conflict
    constitutionArticleTotalPages: contextTotalPages,
    goToConstitutionArticlePage, // This is for the main paged list
    searchConstitutionArticlesByKeyword,
    searchConstitutionArticlesByChapter,
    searchedConstitutionArticles,
    isLoading: contextIsLoading,
  } = useContext(AppContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("keyword"); // "keyword" or "chapter"
  const [isSearching, setIsSearching] = useState(false); // For local search operation
  const [localCurrentPage, setLocalCurrentPage] = useState(1);

  // Determine if a search is currently active and has results
  const isSearchActive = useMemo(
    () =>
      searchedConstitutionArticles &&
      searchedConstitutionArticles.data?.length > 0,
    [searchedConstitutionArticles],
  );

  // Determine if a search has been attempted (even if no results)
  const searchAttempted = useMemo(
    () =>
      searchedConstitutionArticles && searchedConstitutionArticles.pagination, // Check if pagination object exists, indicating a search was made
    [searchedConstitutionArticles],
  );

  useEffect(() => {
    // If not searching, sync local page with context's current page for the main list
    if (!searchAttempted) {
      setLocalCurrentPage(contextCurrentPage);
    }
    // If search becomes active, reset local page to 1 or to search result's current page
    else if (isSearchActive) {
      setLocalCurrentPage(
        searchedConstitutionArticles.pagination?.currentPage || 1,
      );
    }
    // If search was attempted but no results, reset to page 1 for display purposes
    else if (searchAttempted && !isSearchActive) {
      setLocalCurrentPage(1);
    }
  }, [
    contextCurrentPage,
    searchedConstitutionArticles,
    isSearchActive,
    searchAttempted,
  ]);

  const articlesToDisplay = useMemo(() => {
    if (isSearchActive) {
      return searchedConstitutionArticles.data;
    }
    return constitutionArticlesPagedData?.data || [];
  }, [
    isSearchActive,
    searchedConstitutionArticles,
    constitutionArticlesPagedData,
  ]);

  const totalPages = useMemo(() => {
    if (isSearchActive) {
      return searchedConstitutionArticles.pagination?.totalPages || 1;
    }
    return contextTotalPages || 1;
  }, [isSearchActive, searchedConstitutionArticles, contextTotalPages]);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    setIsSearching(true);
    setLocalCurrentPage(1); // Reset to page 1 for new search
    if (searchType === "keyword") {
      await searchConstitutionArticlesByKeyword(searchTerm.trim(), 1);
    } else {
      await searchConstitutionArticlesByChapter(searchTerm.trim(), 1);
    }
    setIsSearching(false);
  };

  const handleClearSearch = async () => {
    setIsSearching(true);
    setSearchTerm("");
    // Reset search results in context by calling the function with null/empty params
    // For now, we'll just clear the search and go back to the first page of the main list
    await searchConstitutionArticlesByKeyword("", 1); // Effectively clears by searching for empty string
    // Go back to the main list's first page
    goToConstitutionArticlePage(1);
    setLocalCurrentPage(1);
    setIsSearching(false);
  };

  const handlePageChange = async (newPage) => {
    setLocalCurrentPage(newPage);
    if (isSearchActive) {
      setIsSearching(true);
      if (searchType === "keyword") {
        await searchConstitutionArticlesByKeyword(searchTerm.trim(), newPage);
      } else {
        await searchConstitutionArticlesByChapter(searchTerm.trim(), newPage);
      }
      setIsSearching(false);
    } else {
      goToConstitutionArticlePage(newPage);
    }
  };

  const isLoading = contextIsLoading || isSearching;

  const DEFAULT_PAGE_SIZE = 4;
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <EntityPageLayout 
      title="Artículos de la Constitución"
      isLoading={isLoading}
      gridCols="md:grid-cols-2 lg:grid-cols-3"
      pageSizeSelector={
        <PageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />
      }
      pagination={
        totalPages > 1 && (
          <div className="mb-8 mt-8 flex justify-center">
            <Pagination
              currentPage={localCurrentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )
      }
    >
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
              className="bg-primary-600 hover:bg-primary-700 flex-1 rounded-md px-4 py-2 text-white disabled:opacity-50"
            >
              {isLoading && searchType ? "Buscando..." : "Buscar"}
            </button>
            <button
              onClick={handleClearSearch}
              disabled={isLoading}
              className="flex-1 rounded-md bg-slate-600 px-4 py-2 text-white hover:bg-slate-500 disabled:opacity-50"
            >
              Limpiar
            </button>
          </div>
        </div>
      </div>

      {isLoading && articlesToDisplay.length === 0 && <LoadingSpinner />}
      {!isLoading && articlesToDisplay.length === 0 && (
        <div className="mt-10 text-center text-xl text-white/70">
          {searchAttempted
            ? "No se encontraron artículos con los criterios de búsqueda."
            : "No hay artículos para mostrar."}
        </div>
      )}

      {articlesToDisplay.length > 0 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articlesToDisplay.map((article) => (
            <EntityCard
              key={article.id || article.name}
              entity={article}
              type="articulos-constitucion"
              linkBase={`/constitucion/${article.id || article.name}`}
            />
          ))}
        </div>
      )}

      {articlesToDisplay.length > 0 && totalPages > 1 && (
        <Pagination
          currentPage={localCurrentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </EntityPageLayout>
  );
}
