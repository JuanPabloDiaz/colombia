"use client";

import React, { useContext, isLoading, useEffect } from "react";
import { AppContext } from "@/context";
import Image from "next/image";

import CardDivider from "@/components/ChakraCard/CardDivider";
import CardDetail from "@/components/ChakraCard/CardDetail";

import { metadata } from "@/components/metadata";

export default function EspeciesInvasoras() {
  const pageTitle = metadata.espInv.title;

  const { invasiveSpecieData, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <title>{`${pageTitle} • AmoCol`}</title>
      <div>
        <h1 className="mx-auto mb-8 w-fit rounded-xl bg-slate-950/90 p-4 text-4xl font-bold text-white/60">
          {pageTitle}
        </h1>
      </div>
      <CardDetail />
      <div>
        {invasiveSpecieData.map((specie, index) => (
          <Image
            key={index}
            src={specie.urlImage}
            alt={`Especies Invasoras ${index + 1}`}
            width={320}
            height={213}
          />
        ))}
      </div>
      {/* <CardDivider />
       */}
    </>
  );
}
