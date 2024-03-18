"use client";

import React, { useContext, isLoading, useEffect } from "react";
import { AppContext } from "@/context";
import Image from "next/image";

import CardDivider from "@/components/ChakraCard/CardDivider";
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
      <div>
        <h1 className="mx-auto mb-8 w-fit rounded-xl bg-slate-950/90 p-4 text-4xl font-bold text-white/60">
          {pageTitle}
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {invasiveSpecieData.map((specie, index) => (
          <CardDetail
            key={index}
            title={specie.name}
            description={specie.impact}
            imageUrl={specie.urlImage}
            alt={specie.scientificName}
            nombreCientifico={specie.scientificName}
            buttonOne="Ver más"
            // buttonTwo="Comprar"
          />
        ))}
      </div>
    </>
  );
}
