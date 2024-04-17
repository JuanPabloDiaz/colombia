"use client";

import React, { useContext, isLoading, useEffect } from "react";
import { AppContext } from "@/context";

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
      <h1 className="mx-auto mb-8 w-fit rounded-xl bg-slate-950/90 p-4 text-4xl font-bold text-white/60">
        {pageTitle}
      </h1>

      <section className="flex items-center justify-center">
        {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"> */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          {departamentData.map((departament, index) => (
            <>
              <Accordion
                type="single"
                collapsible
                className="bg-slate-950/90"
                key={index}
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>{departament.name}</AccordionTrigger>
                  <AccordionContent>
                    <div>
                      <p>
                        <span className="font-bold text-red-800">Id: </span>
                        {departament.id}
                      </p>
                      <p>
                        <span className="font-bold text-red-800">Nombre: </span>
                        {departament.name}
                      </p>
                      <p>
                        <span className="font-bold text-red-800">
                          Descripcion:{" "}
                        </span>
                        {departament.description}
                      </p>
                      <p>
                        <span className="font-bold text-red-800">
                          Superficie:{" "}
                        </span>
                        {departament.surface}
                      </p>
                      <p>
                        <span className="font-bold text-red-800">
                          Población:{" "}
                        </span>
                        {departament.population}
                      </p>
                      <p>
                        <span className="font-bold text-red-800">
                          Municipios:{" "}
                        </span>
                        {departament.municipalities}
                      </p>
                      <p>
                        <span className="font-bold text-red-800">
                          cityCapitalId:{" "}
                        </span>
                        {departament.cityCapitalId}
                      </p>
                      <p>
                        <span className="font-bold text-red-800">
                          Region ID:{" "}
                        </span>
                        {departament.regionId}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </>
          ))}
        </div>
      </section>
    </>
  );
}
