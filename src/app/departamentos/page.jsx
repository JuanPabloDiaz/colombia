"use client";

import React, { useContext, isLoading, useEffect } from "react";
import { AppContext } from "@/context";

import DepartamentoCard from "@/components/Card/DepartamentoCard";
import LoadingCardDetail from "@/components/Loading/LoadingCardDetail";

import { metadata } from "@/components/metadata";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      <h1 className="mx-auto mb-10 w-fit rounded-xl bg-slate-950/90 p-6 text-4xl font-extrabold text-white/80 shadow-md tracking-tight">
        {pageTitle}
      </h1>

      <section className="flex items-center justify-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl">
          {departamentData.map((departament) => (
            <DepartamentoCard key={departament.id} departamento={departament} />
          ))}
        </div>
      </section>
    </>
  );
}
