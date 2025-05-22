"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import CardBadge from "@/components/Card/CardBadge";
import LoadingCard from "@/components/Loading/LoadingCard";
import PageSection from "@/components/PageSection";

export default function ComunidadesIndigenas() {
  const pageTitle = metadata.ind.title;

  const { nativeCommunityData, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <LoadingCard />;
  }

  return (
    <>
      <title>{`${pageTitle} • Colombia 360`}</title>
      <main className="min-h-screen pb-16">
        <PageSection title={pageTitle} isLoading={isLoading} gridCols="md:grid-cols-2 lg:grid-cols-4">
          {nativeCommunityData
            .sort((a, b) => a.id - b.id)
            .map((ind) => (
                <CardBadge
                  key={ind.id}
                  title={ind.name}
                  text={ind.description}
                  badge={["Lengua(s):", ind.languages]}
                  className="min-h-72"
                />
              ))}
        </PageSection>
      </main>
    </>
  );
}
