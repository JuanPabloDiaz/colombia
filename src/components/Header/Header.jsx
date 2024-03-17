import Link from "next/link";
import React from "react";

export const Header = () => {
  const links = [
    {
      title: "Inicio",
      href: "/",
    },
    {
      title: "General",
      href: "/general",
    },
    {
      title: "Prueba",
      href: "/prueba",
    },
    {
      title: "Departamentos",
      href: "/departamentos",
    },
    {
      title: "Regiones",
      href: "/regiones",
    },
    {
      title: "Turismo",
      href: "/turismo",
    },
    {
      title: "Presidentes",
      href: "/presidentes",
    },
    {
      title: "Naturaleza",
      href: "/naturaleza",
    },
    {
      title: "Categorías Naturaleza",
      href: "/categorias-naturaleza",
    },
    {
      title: "Mapas",
      href: "/mapas",
    },
    {
      title: "Especies Invasoras",
      href: "especies-invasoras",
    },
    {
      title: "Comunidades Indígenas",
      href: "/comunidades-indigenas",
    },
    {
      title: "Aeropuertos",
      href: "/aeropuertos",
    },
    {
      title: "Constitution",
      href: "/constitution",
    },
  ];

  return (
    <div className="mt-2 w-full bg-slate-800/80 py-4 font-semibold">
      <div>
        <ul className="flex items-center justify-around">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              <li>{link.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
