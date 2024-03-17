"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";

export default function Regiones() {
  const pageTitle = metadata.reg.title;
  return (
    <>
      <title>{`${pageTitle} • AmoCol`}</title>
      <h1>{pageTitle}</h1>
    </>
  );
}
