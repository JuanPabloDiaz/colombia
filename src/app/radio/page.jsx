"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import RadioCard from "@/components/Card/RadioCard";
import LoadingCard from "@/components/Loading/LoadingCard";
import PageSection from "@/components/PageSection";

export default function Radio() {
  const pageTitle = metadata.fm.title;
  const { radioData, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <LoadingCard />;
  }

  return (
    <>
      <title>{`${pageTitle} • Colombia 360`}</title>
      <main>
        <PageSection title={pageTitle} isLoading={isLoading} gridCols="md:grid-cols-2 lg:grid-cols-4">
          {radioData
              .sort((a, b) => a.id - b.id)
              .map((fm) => (
                <RadioCard key={fm.id} fm={fm} />
              ))}
        </PageSection>
      </main>
    </>
  );
}
