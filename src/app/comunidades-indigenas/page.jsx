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
      <main className="min-h-screen pb-16">
        <h1 className="mx-auto mb-10 w-fit rounded-xl bg-slate-950/90 p-6 text-4xl font-extrabold text-white/80 shadow-md tracking-tight">
          {pageTitle}
        </h1>
        <section className="flex items-center justify-center px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl">
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
          </div>
        </section>
      </main>
    </>
  );
}
