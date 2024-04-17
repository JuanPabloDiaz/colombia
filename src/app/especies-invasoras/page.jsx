"use client";

import React, { useContext, isLoading, useEffect } from "react";
import { AppContext } from "@/context";

import CardDetail from "@/components/ChakraCard/CardDetail";

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
        <h1 className="mx-auto mb-8 w-fit rounded-xl bg-slate-950/90 p-4 text-4xl font-bold text-white/60">
          {pageTitle}
        </h1>
        <section className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {invasiveSpecieData.map((specie, index) => (
              <CardDetail
                key={index}
                title={specie.name}
                subtitle={specie.scientificName}
                description={specie.impact}
                imageUrl={specie.urlImage}
                alt={specie.scientificName}
                imageWidth={320}
                imageHeight={213}
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
