// "use client";
// import React, { useEffect } from "react";

import "./mapas.css";

import { ColombiaMap } from "@/components/Map/ColombiaMap";
import PageSection from "@/components/PageSection";

import { metadata } from "@/components/metadata";

export default function Prueba() {
  const pageTitle = metadata.test.title;

  return (
    <>
      <PageSection title={pageTitle}>
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
      </PageSection>
    </>
  );
}
