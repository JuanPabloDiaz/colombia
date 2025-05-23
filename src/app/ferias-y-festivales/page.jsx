"use client";

import React, { useContext, useState } from "react";
import Head from "next/head";
import { AppContext } from "@/context";
// import { metadata } from "@/components/metadata"; // Assuming this will be updated
import PageSection from "@/components/PageSection";
import LoadingCardDetail from "@/components/Loading/LoadingCardDetail";
import CardDetail from "@/components/ChakraCard/CardDetail";
import Pagination from "@/components/ui/Pagination";

// Placeholder for metadata - replace with actual import and usage later
const metadata = {
  traditionalFairAndFestival: {
    title: "Ferias y Festivales",
  },
};

export default function FeriasYFestivales() {
  const pageTitle = metadata.traditionalFairAndFestival.title;

  const {
    traditionalFairAndFestivalData,
    isLoading,
    traditionalFairAndFestivalCurrentPage,
    traditionalFairAndFestivalTotalPages,
    goToTraditionalFairAndFestivalPage,
    searchTraditionalFairAndFestivalByName,
    searchTraditionalFairAndFestivalByKeyword,
  } = useContext(AppContext);

  const [nameSearch, setNameSearch] = useState("");
  const [keywordSearch, setKeywordSearch] = useState("");

  if (isLoading && traditionalFairAndFestivalData.length === 0) {
    return (
      <section className="flex items-center justify-center py-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <LoadingCardDetail key={index} />
          ))}
        </div>
      </section>
    );
  }

  // Sort data alphabetically by name before rendering
  const sortedData = [...traditionalFairAndFestivalData].sort((a, b) => 
    a.name && b.name ? a.name.localeCompare(b.name) : 0
  );

  return (
    <>
      <Head>
        <title>{`${pageTitle} • Colombia 360`}</title>
      </Head>

      <div className="mb-8 px-4">
        <h2 className="text-2xl font-bold text-center my-4">Buscar Ferias y Festivales</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="flex flex-col items-center">
            <input
              type="text"
              value={nameSearch}
              onChange={(e) => setNameSearch(e.target.value)}
              placeholder="Buscar por nombre..."
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={() => searchTraditionalFairAndFestivalByName(nameSearch)}
              className="mt-2 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Buscar Nombre
            </button>
          </div>
          <div className="flex flex-col items-center">
            <input
              type="text"
              value={keywordSearch}
              onChange={(e) => setKeywordSearch(e.target.value)}
              placeholder="Buscar por palabra clave..."
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            <button
              onClick={() => searchTraditionalFairAndFestivalByKeyword(keywordSearch)}
              className="mt-2 px-6 py-2 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Buscar Palabra Clave
            </button>
          </div>
        </div>
      </div>

      <PageSection title={pageTitle} isLoading={isLoading && traditionalFairAndFestivalData.length === 0} gridCols="md:grid-cols-2 lg:grid-cols-4">
        {sortedData.map((item) => (
          <CardDetail
            key={item.id || item.name} // Ensure unique key, fallback to name if id is missing
            title={item.name || "Nombre no disponible"}
            description={item.description || "Descripción no disponible."} // Add truncation if necessary
            // Assuming item.image is the correct field based on previous context setup. Adjust if it's item.imageUrl or similar.
            // The API documentation for TraditionalFairAndFestival doesn't explicitly state an image field.
            // Using a placeholder if no image is available.
            imageUrl={item.image || item.imageUrl || "https://via.placeholder.com/300x200?text=Imagen+no+disponible"}
            alt={item.name || "Imagen de feria o festival"}
            viewMoreHref={`/ferias-y-festivales/${item.id || item.name}`} // Use name as fallback for ID if necessary
            badgeText={item.city?.name || item.municipality || "Ubicación no disponible"} // Example: using city name if available
            titleWordsCount={4} // Adjust as needed
          />
        ))}
      </PageSection>

      {!isLoading && traditionalFairAndFestivalTotalPages > 1 && (
        <div className="my-10 flex justify-center">
          <Pagination
            currentPage={traditionalFairAndFestivalCurrentPage}
            totalPages={traditionalFairAndFestivalTotalPages}
            onPageChange={goToTraditionalFairAndFestivalPage}
          />
        </div>
      )}
    </>
  );
}
