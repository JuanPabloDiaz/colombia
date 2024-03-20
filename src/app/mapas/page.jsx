"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import CardDetail from "@/components/ChakraCard/CardDetail";

export default function Mapas() {
  const pageTitle = metadata.map.title;

  const { mapData, isLoading } = useContext(AppContext);

  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }

  return (
    <>
      <title>{`${pageTitle} • AmoCol`}</title>
      <main>
        <h1 className="mx-auto mb-8 w-fit rounded-xl bg-slate-950/90 p-4 text-4xl font-bold text-white/60">
          {pageTitle}
        </h1>
        <section className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mapData
              // .sort((a, b) => a.id - b.id)
              .map((mapa, index) => (
                <CardDetail
                  key={index}
                  title={mapa.name}
                  // subtitle={tour.scientificName}
                  description={mapa.description}
                  imageUrl={mapa.urlImages}
                  // alt={tour.scientificName}
                  imageWidth={300}
                  imageHeight={350}
                  imageStyle="cover"
                  buttonOne="Ver más"
                  // buttonTwo="Comprar"
                />
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
