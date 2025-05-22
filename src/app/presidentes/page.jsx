"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import Card from "@/components/ChakraCard/Card";
import CardDetail from "@/components/ChakraCard/CardDetail";

import { metadata } from "@/components/metadata";
import PageSection from "@/components/PageSection";
import ImageChecker from "@/components/ImageChecker/ImageChecker";

export default function Presidentes() {
  const pageTitle = metadata.pre.title;

  const { presidentData } = useContext(AppContext);

  return (
    <>
      <title>{`${pageTitle} • Colombia 360`}</title>
      <main>
        <PageSection title={pageTitle} isLoading={false} gridCols="md:grid-cols-2 lg:grid-cols-4">
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
                      fallbackAvatar={true}
                      alt={president.lastName}
                      imageWidth={300}
                      imageHeight={300}
                      imageStyle="contain"
                      viewMoreHref={`/presidentes/${president.id}`}
                      titleWordsCount={3}
                    />
                  </ImageChecker>
                </React.Fragment>
              );
            })}
        </PageSection>
      </main>
    </>
  );
}
