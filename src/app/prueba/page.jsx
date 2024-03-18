"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";
import CardDivider from "@/components/Card/CardDivider";
import CardDetail from "@/components/Card/CardDetail";
import Card from "@/components/Card/Card";

import { metadata } from "@/components/metadata";

export default function Prueba() {
  const pageTitle = metadata.test.title;

  return (
    <>
      <title>{`${pageTitle} • AmoCol`}</title>
      <h1 className="mx-auto mb-8 w-fit rounded-xl bg-slate-950/90 p-4 text-4xl font-bold text-white/60">
        {pageTitle}
      </h1>

      <div className="flex items-center justify-around">
        <Card title="Card Title" text="Card Text" />
        <Card title="Card Title" text="Card Text" />
      </div>
      <CardDivider
        mainHeading={"Heading"}
        boxTitleOne={"Title One"}
        boxTextOne={"Text"}
        boxTitleTwo={"Title Two"}
        boxTextTwo={"Text Two"}
      />
      <CardDetail />
    </>
  );
}
