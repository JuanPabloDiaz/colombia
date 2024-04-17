// "use client";
// import React, { useEffect } from "react";

import "./mapas.css";

import { ColombiaMap } from "@/components/Map/ColombiaMap";

import { metadata } from "@/components/metadata";

export default function Prueba() {
  const pageTitle = metadata.test.title;

  return (
    <>
      <title>{`${pageTitle} • Colombia 360`}</title>
      <h1 className="mx-auto mb-8 w-fit rounded-xl bg-slate-950/90 p-4 text-4xl font-bold text-white/60">
        {pageTitle}
      </h1>
      <section className="flex w-full items-center justify-center rounded-lg bg-slate-950/90">
        <div
          id="map"
          className="mapaColombia flex w-1/2 items-center justify-start"
        >
          <ColombiaMap />
        </div>
        <div className=" h-vh w-1/2 bg-slate-50">
          <p>Prueba</p>
        </div>
      </section>
    </>
  );
}
