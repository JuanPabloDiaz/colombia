"use client";
import React, { useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// import mapaColombia from "@/components/mapa_colombia.js";
import colombiaGeoJSON from "/public/assets/mapas/colombia.geo.json";

export function ColombiaMap() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://simplemaps.com/static/demos/countrymap/1.0.0/countrymap.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <ComposableMap
      height={750}
      projection="geoMercator"
      projectionConfig={{
        scale: 2000,
        center: [-71, 3],
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
  );
}
