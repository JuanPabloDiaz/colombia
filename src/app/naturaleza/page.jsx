"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";

import { metadata } from "@/components/metadata";
import PageSection from "@/components/PageSection";

export default function Naturaleza() {
  const pageTitle = metadata.nat.title;
  return (
    <>
      <title>{`${pageTitle} • Colombia 360`}</title>
      <PageSection title={pageTitle}>
      </PageSection>
    </>
  );
}
