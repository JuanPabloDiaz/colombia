"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import DepartamentoCard from "@/components/Card/DepartamentoCard";
import LoadingCardDetail from "@/components/Loading/LoadingCardDetail";
import PageSection from "@/components/PageSection";

import { metadata } from "@/components/metadata";

export default function Departamentos() {
  const pageTitle = metadata.dep.title;

  const { departamentData, isLoading } = useContext(AppContext);

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
      <main>
        <PageSection title={pageTitle} isLoading={isLoading} gridCols="md:grid-cols-2 lg:grid-cols-4">
          {departamentData
            .sort((a, b) => a.id - b.id)
            .map((departament, index) => (
              <DepartamentoCard
                key={index}
                departamento={departament}
              />
            ))}
        </PageSection>
      </main>
    </>
  );
}
