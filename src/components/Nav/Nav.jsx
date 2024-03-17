import Link from "next/link";
import React from "react";

import {
  Home,
  MapPin,
  Landmark,
  TreePine,
  FerrisWheel,
  Tent,
  Scale,
  Trees,
  LandPlot,
  Plane,
  ShieldPlus,
  Cannabis,
} from "lucide-react";

import { Airport, Community, Indigena, Invasive } from "../icons";

export const Nav = ({ ul_className }) => {
  const links = [
    {
      title: "Inicio",
      href: "/",
      icon: <Home />,
    },
    {
      title: "Prueba",
      href: "/prueba",
      icon: <Landmark />,
    },
    {
      title: "Departamentos",
      href: "/departamentos",
      icon: <ShieldPlus />,
    },
    {
      title: "Regiones",
      href: "/regiones",
      icon: <LandPlot />,
    },
    {
      title: "Turismo",
      href: "/turismo",
      icon: <FerrisWheel />,
    },
    {
      title: "Presidentes",
      href: "/presidentes",
      icon: <Scale />,
    },
    {
      title: "Naturaleza",
      href: "/naturaleza",
      icon: <Trees />,
    },
    {
      title: "Categorías Naturaleza",
      href: "/categorias-naturaleza",
      icon: <TreePine />,
    },
    {
      title: "Mapas",
      href: "/mapas",
      icon: <MapPin />,
    },
    {
      title: "Especies Invasoras",
      href: "especies-invasoras",
      icon: <Cannabis />,
    },
    {
      title: "Comunidades Indígenas",
      href: "/comunidades-indigenas",
      icon: <Tent />,
    },
    {
      title: "Aeropuertos",
      href: "/aeropuertos",
      icon: <Plane />,
    },
    {
      title: "Constitution",
      href: "/constitution",
      icon: <Landmark />,
    },
  ];

  return (
    // flex items-center justify-around
    <ul className={ul_className}>
      {links.map((link, index) => (
        <Link href={link.href} key={index}>
          <li className="flex items-center">
            <span className="w-20 px-4">{link.icon}</span>
            {link.title}
          </li>
        </Link>
      ))}
    </ul>
  );
};
