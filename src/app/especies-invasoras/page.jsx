"use client";

import React, { useContext, isLoading, useEffect } from "react";
import { AppContext } from "@/context";
import Image from "next/image";

import CardList from "@/components/cardList";
import CardDivider from "@/components/Chakra/Card/CardDivider";
import CardDetail from "@/components/Chakra/Card/CardDetail";

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
        <h1>Invasive Specie</h1>
      </div>
      <CardDetail />
      {/* <CardList cards="invasiveSpecieData" /> */}
      <div>
        {invasiveSpecieData.map((specie, index) => (
          <Image
            key={index}
            src={specie.urlImage}
            alt={`Invasive Specie ${index + 1}`}
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
