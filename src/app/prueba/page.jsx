"use client";

import React, { useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import "./mapas.css";
// import mapaColombia from "@/components/mapa_colombia.js";
import colombiaGeoJSON from "/public/assets/mapas/colombia.geo.json";

import { metadata } from "@/components/metadata";

export default function Prueba() {
  const pageTitle = metadata.test.title;

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://simplemaps.com/static/demos/countrymap/1.0.0/countrymap.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <title>{`${pageTitle} • AmoCol`}</title>
      <h1 className="mx-auto mb-8 w-fit rounded-xl bg-slate-950/90 p-4 text-4xl font-bold text-white/60">
        {pageTitle}
      </h1>
      <div id="map" className="mapaColombia">
        {/* <ComposableMap> */}
        <ComposableMap
          width={1900}
          height={905}
          projectionConfig={{
            scale: 750,
            rotation: [-11, 0, 0],
          }}
        >
          <Geographies geography={colombiaGeoJSON}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </>
  );
}
