"use client";

import React, { useContext, isLoading, useEffect } from "react";
import { AppContext } from "@/context";

import CardDetail from "@/components/ChakraCard/CardDetail";

import { metadata } from "@/components/metadata";
import LoadingCard from "@/components/Loading/LoadingCard";

export default function EspeciesInvasoras() {
  const pageTitle = metadata.espInv.title;

  const { invasiveSpecieData, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <LoadingCard />;
  }

  return (
    <>
      <title>{`${pageTitle} • AmoCol`}</title>
      <main>
        <div>
          <h1 className="mx-auto mb-8 w-fit rounded-xl bg-slate-950/90 p-4 text-4xl font-bold text-white/60">
            {pageTitle}
          </h1>
        </div>
        <section className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {invasiveSpecieData.map((specie, index) => (
              <CardDetail
                key={index}
                title={specie.name}
                description={specie.impact}
                imageUrl={specie.urlImage}
                alt={specie.scientificName}
                imageWidth={320}
                imageHeight={213}
                imageStyle="cover"
                nombreCientifico={specie.scientificName}
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
