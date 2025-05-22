"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import CardDetail from "@/components/ChakraCard/CardDetail";
import PageSection from "@/components/PageSection";

import { metadata } from "@/components/metadata";
import LoadingCardDetail from "@/components/Loading/LoadingCardDetail";

export default function EspeciesInvasoras() {
  const pageTitle = metadata.espInv.title;

  const { invasiveSpecieData, isLoading } = useContext(AppContext);

  if (isLoading) {
    return (
      <section className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <LoadingCardDetail key={index} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
      <title>{`${pageTitle} • Colombia 360`}</title>
      <main>
        <PageSection title={pageTitle} isLoading={isLoading} gridCols="md:grid-cols-2 lg:grid-cols-4">
          {invasiveSpecieData
            .sort((a, b) => a.id - b.id)
            .map((species, index) => (
              <CardDetail
                key={index}
                title={species.name}
                subtitle={species.scientificName}
                description={species.impact}
                imageUrl={species.urlImage}
                alt={species.scientificName}
                imageWidth={320}
                imageHeight={213}
                imageStyle="cover"
                viewMoreHref={`/especies-invasoras/${species.id}`}
                // buttonTwo="Comprar"
                titleWordsCount={4}
              />
            ))}
        </PageSection>
      </main>
    </>
  );
}
