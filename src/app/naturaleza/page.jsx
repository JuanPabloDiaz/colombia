"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";

export default function Naturaleza() {
  const pageTitle = metadata.nat.title;
  return (
    <>
      <title>{`${pageTitle} • AmoCol`}</title>
      <h1 className="mx-auto mb-8 w-fit rounded-xl bg-slate-950/90 p-4 text-4xl font-bold text-white/60">
        {pageTitle}
      </h1>
    </>
  );
}
