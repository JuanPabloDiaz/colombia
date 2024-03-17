"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";
import Image from "next/image";

import Info from "@/components/info.jsx";
import { metadata } from "@/components/metadata";

export default function Home() {
  const pageTitle = metadata.home.title;

  const { generalData } = useContext(AppContext);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <section className="h-screen w-full bg-slate-950/90">
          <title>{`${pageTitle} • AmoCol`}</title>
          <h1 className="mb-8 text-4xl font-bold text-white/60">{pageTitle}</h1>
          <div className="grid w-full max-w-[1400px] gap-10 bg-slate-500 lg:grid-cols-2 xl:grid-cols-3">
            <Info />
          </div>
        </section>
      </main>
      <h1>{generalData.name}</h1>
      <h2>
        Capital: <span>{generalData.stateCapital}</span>
      </h2>

      <div className="flex flex-col items-start justify-normal gap-2">
        <p>
          Population: <span>{generalData.population}</span>
        </p>
        <p>
          Surface: <span>{generalData.surface}</span>
        </p>
        <p>
          currency: <span>{generalData.currency}</span>
          <span>{generalData.currencyCode}</span>
          <span>{generalData.currencySymbol}</span>
        </p>
        <p>
          Description: <span>{generalData.description}</span>
        </p>
        <p>
          languages: <span>{generalData.languages}</span>
        </p>
        <div>
          {generalData.languages?.map((language, index) => (
            <p key={index}>{language}</p>
          ))}
        </div>
        <p>
          timeZone: <span>{generalData.timeZone}</span>
        </p>
        <p>
          isoCode: <span>{generalData.isoCode}</span>
        </p>
        <p>
          internetDomain: <span>{generalData.internetDomain}</span>
        </p>
        <p>
          phonePrefix: <span>{generalData.phonePrefix}</span>
        </p>
        <p>
          radioPrefix: <span>{generalData.radioPrefix}</span>
        </p>
        <p>
          aircraftPrefix: <span>{generalData.aircraftPrefix}</span>
        </p>
        <p>
          subRegion: <span>{generalData.subRegion}</span>
        </p>
        <p>
          region: <span>{generalData.region}</span>
        </p>
        <p>borders:</p>
        <div>
          {generalData.borders?.map((countries, index) => (
            <p key={index}>{countries}</p>
          ))}
        </div>
        <div>
          {generalData.flags && (
            <Image
              src={generalData.flags[0]}
              alt={generalData.name}
              width={500}
              height={300}
            />
          )}
        </div>
        <div>
          {generalData.borders?.map((countries, index) => (
            <p key={index}>{countries}</p>
          ))}
        </div>
      </div>
    </>
  );
}
