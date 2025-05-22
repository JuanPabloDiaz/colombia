"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import PageSection from "@/components/PageSection";
import LoadingCardDetail from "@/components/Loading/LoadingCardDetail";
import DepartamentoCard from "@/components/Card/DepartamentoCard";

export default function Aeropuertos() {
  const pageTitle = metadata.air.title;

  const { airportData, isLoading } = useContext(AppContext);

  if (isLoading) {
    return (
      <section className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <LoadingCardDetail key={index} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
      <title>{`${pageTitle} • Colombia 360`}</title>
      <PageSection title={pageTitle} isLoading={isLoading} gridCols="md:grid-cols-2 lg:grid-cols-4">
        {airportData
          .sort((a, b) => a.id - b.id)
          .map((airport, index) => (
            <DepartamentoCard
              key={index}
              departamento={airport}
            />
          ))}
      </PageSection>
    </>
  );
}
