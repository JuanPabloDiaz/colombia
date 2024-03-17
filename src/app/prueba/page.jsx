"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";
import CardDivider from "@/components/Chakra/Card/CardDivider";
import CardDetail from "@/components/Chakra/Card/CardDetail";
import Card from "@/components/Chakra/Card/Card";

import { metadata } from "@/components/metadata";

export default function Prueba() {
  const pageTitle = metadata.test.title;

  return (
    <>
      <title>{`${pageTitle} • AmoCol`}</title>
      <h1>{pageTitle}</h1>

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
