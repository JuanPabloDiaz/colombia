"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import CardDetail from "@/components/ChakraCard/CardDetail";
import LoadingCard from "@/components/Loading/LoadingCard";
import PageSection from "@/components/PageSection";

export default function Mapas() {
  const pageTitle = metadata.map.title;

  const { mapData, isLoading } = useContext(AppContext);

  if (isLoading) {
    return (
      <>
        <LoadingCard />
      </>
    );
  }

  return (
    <>
      <title>{`${pageTitle} • Colombia 360`}</title>
      <main>
        <PageSection title={pageTitle} isLoading={isLoading} gridCols="md:grid-cols-2 lg:grid-cols-4">
          {mapData
            .sort((a, b) => a.id - b.id)
            .map((mapa, index) => (
              <CardDetail
                key={index}
                title={mapa.name}
                description={mapa.description}
                imageUrl={mapa.images}
                imageWidth={320}
                imageHeight={213}
                imageStyle="cover"
                buttonOne="Ver más"
                // buttonTwo="Comprar"
                titleWordsCount={10}
              />
            ))}
        </PageSection>
      </main>
    </>
  );
}
