"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import CardDetail from "@/components/ChakraCard/CardDetail";
import CardHorizontal from "@/components/ChakraCard/CardHorizontal";
import Card from "@/components/ChakraCard/Card";

export default function ComunidadesIndigenas() {
  const pageTitle = metadata.ind.title;

  const { nativeCommunityData, isLoading } = useContext(AppContext);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Loading...</h1>
      </div>
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {nativeCommunityData
              .sort((a, b) => a.id - b.id)
              .map((ind, index) => (
                <>
                  <Card
                    key={index}
                    title={ind.name}
                    // subtitle={ind.scientificName}
                    // description={ind.impact}
                    // imageUrl={ind.images}
                    // alt={ind.scientificName}
                    // imageWidth={320}
                    // imageHeight={213}
                    // imageStyle="cover"
                    // buttonOne="Ver más"
                    // buttonTwo="Comprar"
                  />
                </>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
