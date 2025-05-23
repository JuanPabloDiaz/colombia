"use client";

import React from "react";

import { metadata } from "@/components/metadata";
import PageSection from "@/components/PageSection";
import Head from "next/head";

export default function Constitution() {
  const pageTitle = metadata.ley.title;
  return (
    <>
      <Head>
        <title>{`${pageTitle} • Colombia 360`}</title>
      </Head>
      <PageSection title={pageTitle}>
      </PageSection>
    </>
  );
}
