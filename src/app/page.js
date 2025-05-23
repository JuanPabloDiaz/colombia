"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";
import Image from "next/image";
import CardInfo from "@/components/ChakraCard/CardInfo";
import Card from "@/components/ChakraCard/Card";
import CardArray from "@/components/ChakraCard/CardArray";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";

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
  const { generalData, isLoading } = useContext(AppContext);

  if (isLoading) {
    return (
      <section className="flex flex-col items-center justify-center">
        <LoadingSpinner size={64} />
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
    <main className="mt-8 md:mt-12">
      <section>
        <div className="w-full max-w-[1400px] gap-10 lg:grid-cols-2 xl:grid-cols-3">
          <section>
            <article
              className="mb-6 flex flex-col-reverse md:mb-0 md:grid md:w-full md:items-center md:gap-6"
              style={{ gridTemplateColumns: "65% 35%" }}
            >
              <CardInfo
                title={
                  generalData.name + ", el riesgo es que te quieras quedar!"
                }
                subtitle="Description"
                description={generalData.description}
              />
              <div className="flex items-center justify-center p-2 md:p-0">
                {generalData.flags && (
                  <div className="relative h-[250px] w-[250px] overflow-hidden rounded-lg md:h-[400px] md:w-[400px]">
                    <Image
                      src={generalData.flags[0]}
                      alt={generalData.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                )}
              </div>
            </article>
          </section>

          <section className="grid grid-cols-1 gap-3 pt-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
            <Card
              title="Capital"
              text={generalData.stateCapital}
              classNameCard="flex"
              IconClassName="h-6 w-6 md:h-8 md:w-8"
              icon={<Landmark />}
            />
            <Card
              title="población"
              text={generalData.population}
              IconClassName="h-6 w-6 md:h-8 md:w-8"
              icon={<UsersRound />}
            />
            <Card
              title="Superficie"
              text={generalData.surface}
              IconClassName="h-6 w-6 md:h-8 md:w-8"
              icon={<MapPin />}
            />
            <Card
              title="Region"
              text={generalData.region}
              IconClassName="h-6 w-6 md:h-8 md:w-8"
              icon={<LandPlot />}
            />
            <Card
              title="Sub Region"
              text={generalData.subRegion}
              IconClassName="h-6 w-6 md:h-8 md:w-8"
              icon={<Map />}
            />
            <Card
              title="Moneda"
              text={`Colombian Peso • ${generalData.currencyCode}`}
              IconClassName="h-6 w-6 md:h-8 md:w-8"
              icon={<CircleDollarSign />}
            />
          </section>
          <section className="grid grid-cols-1 gap-3 pt-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            <CardArray
              title="Idiomas"
              text={generalData.languages}
              classNameText={"flex flex-wrap gap-2 md:gap-8"}
              IconClassName="h-6 w-6 md:h-8 md:w-8"
              icon={<Languages />}
            />
            <CardArray
              title="Países Vecinos"
              text={generalData.borders}
              classNameText={"flex flex-wrap gap-2 md:gap-8"}
            />
            <CardArray
              title="Grupos Étnicos"
              text={ethnicGroups}
              classNameText={"flex flex-wrap gap-2 md:gap-8"}
            />
          </section>
        </div>
      </section>
    </main>
  );
}
