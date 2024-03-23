"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import CardInfo from "@/components/ChakraCard/CardInfo";

export default function Prueba() {
  const pageTitle = metadata.test.title;
  const { generalData, isloading } = useContext(AppContext);

  return (
    <>
      <title>{`${pageTitle} • AmoCol`}</title>
      <h1 className="mx-auto mb-8 w-fit rounded-xl bg-slate-950/90 p-4 text-4xl font-bold text-white/60">
        {pageTitle}
      </h1>
      <main>
        <CardInfo title="Heading" subtitle="Title One" desciption="Text" />
      </main>
    </>
  );
}
