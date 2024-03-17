"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";

export default function Constitution() {
  const pageTitle = metadata.ley.title;
  return (
    <>
      <title>{`${pageTitle} • AmoCol`}</title>
      <h1>{pageTitle}</h1>
    </>
  );
}
