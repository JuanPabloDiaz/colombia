"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import CardBadge from "@/components/Card/CardBadge";
import LoadingCard from "@/components/Loading/LoadingCard";

export default function ComunidadesIndigenas() {
  const pageTitle = metadata.ind.title;

  const { nativeCommunityData, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <LoadingCard />;
  }

  return (
    <>
      <title>{`${pageTitle} • Colombia 360`}</title>
      <main>
        <h1 className="mx-auto mb-8 w-fit rounded-xl bg-slate-950/90 p-4 text-4xl font-bold text-white/60">
          {pageTitle}
        </h1>
        <section className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {nativeCommunityData
              .sort((a, b) => a.id - b.id)
              .map((ind, index) => (
                <>
                  <CardBadge
                    key={index}
                    title={ind.name}
                    text={ind.description}
                    badge={["Dialecto(s): ", ind.languages]}
                    className="h-64 overflow-hidden overflow-ellipsis"
                  />
                </>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
