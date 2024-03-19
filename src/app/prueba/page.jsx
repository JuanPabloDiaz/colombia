"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import CardHorizontal from "@/components/ChakraCard/CardHorizontal";
import CardInfo from "@/components/ChakraCard/CardInfo";

export default function Prueba() {
  const pageTitle = metadata.test.title;
  const { generalData } = useContext(AppContext);

  return (
    <>
      <title>{`${pageTitle} • AmoCol`}</title>
      <h1 className="mx-auto mb-8 w-fit rounded-xl bg-slate-950/90 p-4 text-4xl font-bold text-white/60">
        {pageTitle}
      </h1>
      <main>
        <CardHorizontal
          title="South America"
          text="South America"
          imageUrl="https://flagcdn.com/w320/co.png"
          imageAlt="Colombian Flag"
          buttonText="Learn More"
        />
        <CardHorizontal
          title={generalData.name}
          text="South America"
          imageUrl="https://flagcdn.com/w320/co.png"
          imageAlt="Colombian Flag"
          buttonText="Learn More"
        />
        <CardInfo title="Heading" subtitle="Title One" desciption="Text" />
      </main>
    </>
  );
}
