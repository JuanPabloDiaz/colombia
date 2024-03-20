"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import CardDetail from "@/components/ChakraCard/CardDetail";
import CardHorizontal from "@/components/ChakraCard/CardHorizontal";
import Card from "@/components/ChakraCard/Card";

export default function Radio() {
  const pageTitle = metadata.fm.title;
  const { radioData, isLoading } = useContext(AppContext);

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
            {radioData
              .sort((a, b) => a.id - b.id)
              .map((fm, index) => (
                <>
                  <Card
                    key={index}
                    title={fm.name}
                    // subtitle={fm.scientificName}
                    // description={fm.impact}
                    // imageUrl={fm.images}
                    // alt={fm.scientificName}
                    // imageWidth={320}
                    // imageHeight={213}
                    // imageStyle="cover"
                    // buttonOne="Ver más"
                    // buttonTwo="Comprar"
                  />
                  <a href={fm.url} target="_blank" rel="noopener noreferrer">
                    {fm.name}
                  </a>
                </>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
