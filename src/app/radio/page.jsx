"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import CardDetail from "@/components/ChakraCard/CardDetail";
// import Card from "@/components/ChakraCard/Card";
import RadioCard from "@/components/Card/RadioCard";
import CardInfo from "@/components/Card/CardInfo";
import CardAccordion from "@/components/Card/CardAccordion";
import LoadingCard from "@/components/Loading/LoadingCard";

export default function Radio() {
  const pageTitle = metadata.fm.title;
  const { radioData, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <LoadingCard />;
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
            {radioData
              .sort((a, b) => a.id - b.id)
              .map((fm) => (
                <RadioCard key={fm.id} fm={fm} />
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
