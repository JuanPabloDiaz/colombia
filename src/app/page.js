"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";
import Image from "next/image";
import CardDivider from "@/components/Chakra/Card/CardDivider";
import CardDetail from "@/components/Chakra/Card/CardDetail";
import Card from "@/components/Chakra/Card/Card";
import CardHorizontal from "@/components/Chakra/Card/CardHorizontal";

import { metadata } from "@/components/metadata";
import { Airport } from "@/components/icons";
import Head from "next/head";

export default function Home() {
  const pageTitle = metadata.home.title;

  const { generalData } = useContext(AppContext);
  return (
    <>
      <Head>
        <title>{`${pageTitle} • AmoCol`}</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <section className="h-screen w-full bg-slate-950/90">
          <h1 className="mb-8 text-4xl font-bold text-white/60">{pageTitle}</h1>
          <div className="w-full max-w-[1400px] gap-10 lg:grid-cols-2 xl:grid-cols-3">
            <section>
              <article className="mb-10 flex flex-col items-center gap-6 md:mb-0 xl:flex-row xl:items-start">
                <CardDivider
                  className="w-1/2"
                  mainHeading={generalData.name}
                  boxTitleOne="Description"
                  boxTextOne={generalData.description}
                  boxTitleTwo="Bordering Countries"
                  boxTextTwo={generalData.borders?.map((countries, index) => (
                    <p key={index}>{countries}</p>
                  ))}
                  classnameBoxTextTwo="flex justify-between w-full p-4 rounded-lg bg-slate-400 items-center"
                />
                <div className="w-1/2">
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
                </div>
              </article>
            </section>
            <div className="grid grid-cols-4 gap-4 pt-6">
              <Card
                title="Capital"
                text={generalData.stateCapital}
                className="flex"
                IconClassName="h-8 w-8"
                icon=<Airport />
              />
              <Card title="Population" text={generalData.population} />
              <Card title="Surface" text={generalData.surface} />
              <Card title="Region" text={generalData.region} />
              <Card title="Sub Region" text={generalData.subRegion} />
              <Card
                title="Languages"
                text={generalData.languages?.map((language, index) => (
                  <p key={index}>{language}</p>
                ))}
              />
              <Card
                title="Currency"
                text={`${generalData.currencyCode} ${generalData.currencySymbol}`}
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
