"use client";

import React, { useContext } from "react"; // Removed useState, useMemo as pagination state comes from context
import { AppContext } from "@/context";
import { metadata } from "@/components/metadata"; // Assuming metadata will have an entry for typical dishes
import CardDetail from "@/components/ChakraCard/CardDetail";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import LoadingCardDetail from "@/components/Loading/LoadingCardDetail";
import ImageChecker from "@/components/ImageChecker/ImageChecker";
import Pagination from "@/components/ui/Pagination";

export default function PlatosTipicosPage() { // Renamed component for clarity
  // Attempt to get a title from metadata, or use a default
  const pageTitle = metadata.typicalDish?.title || "Platos Típicos"; // Added a fallback title

  const {
    typicalDishData, // This is the paginated data from context
    isLoading,
    typicalDishCurrentPage,
    typicalDishTotalPages,
    goToTypicalDishPage,
    // It's good practice to also get allTypicalDishData to check if initial load is done
    allTypicalDishData 
  } = useContext(AppContext);

  // Show loading state if isLoading is true AND (allTypicalDishData is not yet populated OR typicalDishData is empty)
  // This handles initial load correctly.
  if (isLoading && (!allTypicalDishData || allTypicalDishData.length === 0)) {
    return (
      <section className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <LoadingCardDetail key={index} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
      <title>{`${pageTitle} • Colombia 360`}</title>
      <EntityPageLayout
        title={pageTitle}
        // Pass isLoading considering if allTypicalDishData is empty, to prevent brief flash of "no items"
        isLoading={isLoading && (!allTypicalDishData || allTypicalDishData.length === 0)}
        gridCols="md:grid-cols-2 lg:grid-cols-4" // Standard grid layout
        // pageSizeSelector is not needed as ITEMS_PER_PAGE is global in context
        pagination={
          typicalDishTotalPages > 1 && (
            <div className="flex justify-center mt-8 mb-8">
              <Pagination
                currentPage={typicalDishCurrentPage}
                totalPages={typicalDishTotalPages}
                onPageChange={goToTypicalDishPage}
              />
            </div>
          )
        }
      >
        {typicalDishData && typicalDishData.length > 0 ? ( // Check if typicalDishData has items
          typicalDishData.map((dish) => (
            <ImageChecker
              key={dish.id || dish.name} // Use dish.id, fallback to name
              imageUrl={dish.imageUrl} // Assuming imageUrl is a direct string link
              // Pass unique identifiers for ImageChecker if it uses them internally
              imageId={dish.id} 
              imageName={dish.name}
            >
              <CardDetail
                title={dish.name}
                description={dish.description || "Descripción no disponible"}
                imageUrl={dish.imageUrl} // Ensure this is the correct prop for the image source
                alt={dish.name || "Imagen de plato típico"}
                imageWidth={320} // Consistent with turismo example if applicable
                imageHeight={213} // Consistent with turismo example if applicable
                imageStyle="cover" // Consistent with turismo example
                viewMoreHref={`/platos-tipicos/${dish.id}`} // Link for "Ver más"
                titleWordsCount={3} // Or adjust as needed
                // fallbackAvatar={false} // Set based on image type, typical dishes are not avatars
              />
            </ImageChecker>
          ))
        ) : (
          // Optional: Display a message if no data is available after loading
          !isLoading && <p className="text-center col-span-full">No hay platos típicos para mostrar en este momento.</p>
        )}
      </EntityPageLayout>
    </>
  );
}
