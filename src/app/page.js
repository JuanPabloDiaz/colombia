"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";
import Image from "next/image";
import CardDivider from "@/components/Chakra/Card/CardDivider";
import CardDetail from "@/components/Chakra/Card/CardDetail";
import Card from "@/components/Chakra/Card/Card";
import CardHorizontal from "@/components/Chakra/Card/CardHorizontal";

import { metadata } from "@/components/metadata";
import Head from "next/head";
import {
  CircleDollarSign,
  LandPlot,
  Landmark,
  Languages,
  Map,
  MapPin,
  UsersRound,
} from "lucide-react";
import { Box } from "@chakra-ui/react";

export default function Home() {
  const pageTitle = metadata.home.title;

  const { generalData } = useContext(AppContext);
  const ethnicGroups = [
    "87% Mestizo-White",
    "7% Afro-Col",
    "4% Indigenous",
    "2% Other",
  ];
  return (
    <>
      <Head>
        <title>{`${pageTitle} • AmoCol`}</title>
      </Head>
      <main className="flex flex-col items-center justify-center">
        <section className="h-full w-full">
          <h1 className="mx-auto mb-8 w-fit rounded-xl bg-slate-950/90 p-4 text-4xl font-bold text-white/60">
            {pageTitle}
          </h1>
          <div className="w-full max-w-[1400px] gap-10 lg:grid-cols-2 xl:grid-cols-3">
            <section>
              <article
                className="mb-10 grid w-full items-center gap-6 md:mb-0"
                style={{ gridTemplateColumns: "65% 35%" }}
              >
                <CardDivider
                  mainHeading={generalData.name}
                  boxTitleOne="Description"
                  boxTextOne={generalData.description}
                  boxTitleTwo="Bordering Countries"
                  boxTextTwo={
                    generalData.borders ? (
                      generalData.borders.map((country, index) => (
                        <Box key={index}>{country}</Box>
                      ))
                    ) : (
                      <Box>Loading...</Box>
                    )
                  }
                  classnameBoxTextTwo="flex justify-between w-full mt-2 font-bold text-yellow-500 p-4 rounded-lg items-center"
                  boxTitleThree="Ethnic groups"
                  boxTextThree={
                    ethnicGroups ? (
                      ethnicGroups.map((ethnicGroup, index) => (
                        <Box key={index}>{ethnicGroup}</Box>
                      ))
                    ) : (
                      <Box>Loading...</Box>
                    )
                  }
                  classnameBoxTextThree="flex justify-between w-full mt-2 font-bold text-yellow-500 p-4 rounded-lg items-center"
                />

                <div className="flex items-center justify-center">
                  {generalData.flags && (
                    <Image
                      src={generalData.flags[0]}
                      alt={generalData.name}
                      width={800}
                      height={500}
                      sizes="100vw"
                      className="rounded-lg"
                    />
                  )}
                </div>
              </article>
            </section>
            <div className="grid grid-cols-4 gap-4 pt-6">
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
                title="Languages"
                text={generalData.languages?.map((language, index) => (
                  <Box key={index}>{language}</Box>
                ))}
                classNameText={"flex gap-8"}
                icon={<Languages />}
              />
              <Card
                title="Currency"
                text={`Colombian Peso • ${generalData.currencyCode}`}
                icon={<CircleDollarSign />}
              />
            </div>
            {/* <CardHorizontal
              title={generalData.name}
              text="South America"
              imageUrl="https://flagcdn.com/w320/co.png"
              imageAlt="Colombian Flag"
              buttonText="Learn More"
            /> */}
            {/* <CardDivider
              mainHeading="Heading"
              boxTitleOne="Title One"
              boxTextOne="Text"
              boxTitleTwo="Title Two"
              boxTextTwo="Text Two"
            /> */}
            {/* <CardDetail /> */}
            {/* <CardHorizontal
              title="South America"
              text="South America"
              imageUrl="https://flagcdn.com/w320/co.png"
              imageAlt="Colombian Flag"
              buttonText="Learn More"
            /> */}
          </div>
        </section>
      </main>
    </>
  );
}
