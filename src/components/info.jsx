"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";
import { Loading } from "./Loading";

export default function Info() {
  const { generalData, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <h1>{generalData.name}</h1>
      <h2>
        Capital: <span>{generalData.stateCapital}</span>
      </h2>
    </>
  );
}
