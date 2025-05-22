"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import Card from "@/components/ChakraCard/Card";
import CardDetail from "@/components/ChakraCard/CardDetail";

import { metadata } from "@/components/metadata";
import ImageChecker from "@/components/ImageChecker/ImageChecker";

export default function Presidentes() {
  const pageTitle = metadata.pre.title;

  const { presidentData } = useContext(AppContext);

  return (
    <>
      <title>{`${pageTitle} • Colombia 360`}</title>
      <main>
        <h1 className="mx-auto mb-8 w-fit rounded-xl bg-slate-950/90 p-4 text-4xl font-bold text-white/60">
          {pageTitle}
        </h1>
        <section className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {presidentData
              ?.sort((a, b) => a.id - b.id)
              .map((president) => {
                const fullName = president.name + " " + president.lastName;
                const yStart = (president.startPeriodDate ?? "N-A").split(
                  "-",
                )[0];
                const yEnd = (president.endPeriodDate ?? "A-N").split("-")[0];
                const date = `${yStart} - ${yEnd}`;
                return (
                  <React.Fragment key={president.id}>
                    <ImageChecker
                      imageUrl={president.image}
                      imageId={president.id}
                      imageName={president.name}
                    >
                      <CardDetail
                        title={fullName}
                        badgeText={date}
                        description={president.description}
                        imageUrl={president.image}
                        alt={president.lastName}
                        imageWidth={300}
                        imageHeight={300}
                        imageStyle="contain"
                        buttonOne="Ver más"
                        titleWordsCount={3}
                      />
                    </ImageChecker>
                  </React.Fragment>
                );
              })}
          </div>
        </section>
      </main>
    </>
  );
}
