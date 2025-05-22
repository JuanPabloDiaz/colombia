"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import CardDetail from "@/components/ChakraCard/CardDetail";
import PageSection from "@/components/PageSection";

import ImageChecker from "@/components/ImageChecker/ImageChecker";

export default function Turismo() {
  const pageTitle = metadata.tur.title;

  const { touristicAttractionData, isLoading } = useContext(AppContext);

  return (
    <>
      <title>{`${pageTitle} • Colombia 360`}</title>
      <main>
        <PageSection title={pageTitle} isLoading={isLoading} gridCols="md:grid-cols-2 lg:grid-cols-4">
          {touristicAttractionData
            .sort((a, b) => a.id - b.id)
            .map((tour, index) => (
              <ImageChecker
                imageUrl={tour.images}
                imageId={tour.id}
                imageName={tour.name}
                key={index}
              >
                <CardDetail
                  key={index}
                  title={tour.name}
                  // subtitle={tour.scientificName}
                  // description={tour.impact}
                  imageUrl={tour.images}
                  alt="turismo"
                  imageWidth={320}
                  imageHeight={213}
                  imageStyle="cover"
                  viewMoreHref={`/turismo/${tour.id}`}
                  // buttonTwo="Comprar"
                  titleWordsCount={3}
                />
              </ImageChecker>
            ))}
        </PageSection>
      </main>
    </>
  );
}
