"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";

export default function CategoriasNaturaleza() {
  const pageTitle = metadata.catNat.title;
  return (
    <>
      <title>{`${pageTitle} • AmoCol`}</title>
      <h1>{pageTitle}</h1>
    </>
  );
}
