"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import Card from "@/components/ChakraCard/Card";
import CardDetail from "@/components/ChakraCard/CardDetail";

import { metadata } from "@/components/metadata";

export default function Presidentes() {
  const pageTitle = metadata.pre.title;

  const { presidentData } = useContext(AppContext);

  return (
    <>
      <title>{`${pageTitle} • AmoCol`}</title>
      {/* <main className="flex flex-col items-center justify-center"> */}
      <section className="h-full w-full">
        <h1 className="mx-auto mb-8 w-fit rounded-xl bg-slate-950/90 p-4 text-4xl font-bold text-white/60">
          {pageTitle}
        </h1>
        <div className="w-full max-w-[1400px] gap-10 lg:grid-cols-2 xl:grid-cols-3">
          <section className="grid grid-cols-4 gap-4 pt-6">
            {presidentData?.map((president) => (
              <React.Fragment key={president.id}>
                <CardDetail
                  title={president.name + " " + president.lastName}
                  // description={president.description}
                  imageUrl={president.image}
                  alt={president.lastName}
                  imageWidth={300}
                  imageHeight={300}
                  imageStyle="contain"
                  buttonOne="Ver más"
                />
              </React.Fragment>
            ))}
          </section>
        </div>
      </section>
      {/* </main> */}
    </>
  );
}
