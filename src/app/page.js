"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";
import Image from "next/image";
import CardInfo from "@/components/ChakraCard/CardInfo";
import Card from "@/components/ChakraCard/Card";
import CardArray from "@/components/ChakraCard/CardArray";
import LoadingCard from "@/components/Loading/LoadingCard";
import LoadingCardInfo from "@/components/Loading/LoadingCardInfo";

import { metadata } from "@/components/metadata";
import {
  CircleDollarSign,
  LandPlot,
  Landmark,
  Languages,
  Map,
  MapPin,
  UsersRound,
} from "lucide-react";

export default function Home() {
  const pageTitle = metadata.home.title;

  const { generalData, isLoading } = useContext(AppContext);

  if (isLoading) {
    return (
      <section className="flex flex-col items-center justify-center">
        <LoadingCardInfo />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <LoadingCard key={index} />
          ))}
        </div>
      </section>
    );
  }

  const ethnicGroups = [
    "87% Mestizo-White",
    "7% Afro-Col",
    "4% Indigenous",
    "2% Other",
  ];

  return (
    <>
      <title>{`${pageTitle} • Juan Diaz`}</title>
      <main className="">
        {/* <section className="h-full w-full"> */}
        <section>
          <h1 className="mx-auto mb-8 w-fit rounded-xl bg-slate-950/90 p-4 text-4xl font-bold text-white/60">
            {pageTitle}
          </h1>
          <div className="w-full max-w-[1400px] gap-10 lg:grid-cols-2 xl:grid-cols-3">
            <section>
              <article
                className="mb-10 flex flex-col-reverse md:mb-0 md:grid md:w-full md:items-center md:gap-6"
                style={{ gridTemplateColumns: "65% 35%" }}
              >
                <CardInfo
                  title={generalData.name}
                  subtitle="Description"
                  description={generalData.description}
                />
                <div className="flex items-center justify-center p-4 md:p-0">
                  {generalData.flags && (
                    <Image
                      src={generalData.flags[0]}
                      alt={generalData.name}
                      width={400}
                      height={400}
                      sizes="100vw"
                      className="rounded-lg"
                    />
                  )}
                </div>
              </article>
            </section>

            <section className="grid grid-cols-1 gap-2 pt-6 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
              <Card
                title="Capital"
                text={generalData.stateCapital}
                classNameCard="flex"
                IconClassName="h-8 w-8"
                icon={<Landmark />}
              />
              <Card
                title="Population"
                text={generalData.population}
                icon={<UsersRound />}
              />
              <Card
                title="Surface"
                text={generalData.surface}
                icon={<MapPin />}
              />
              <Card
                title="Region"
                text={generalData.region}
                icon={<LandPlot />}
              />
              <Card
                title="Sub Region"
                text={generalData.subRegion}
                icon={<Map />}
              />
              <Card
                title="Currency"
                text={`Colombian Peso • ${generalData.currencyCode}`}
                icon={<CircleDollarSign />}
              />
            </section>
            <section className="grid grid-cols-1 gap-2 pt-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
              <CardArray
                title="Languages"
                text={generalData.languages}
                classNameText={"flex gap-8"}
                icon={<Languages />}
              />
              <CardArray
                title="Bordering Countries"
                text={generalData.borders}
                classNameText={"flex gap-8"}
              />
              <CardArray
                title="Ethnic Groups"
                text={ethnicGroups}
                classNameText={"flex gap-8"}
              />
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
