"use client";

import React from "react";

import { metadata } from "@/components/metadata";
import PageSection from "@/components/PageSection";

export default function Constitution() {
  const pageTitle = metadata.ley.title;
  return (
    <>
      <title>{`${pageTitle} • Colombia 360`}</title>
      <PageSection title={pageTitle}>
      </PageSection>
    </>
  );
}
