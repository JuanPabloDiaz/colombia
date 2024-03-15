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
    // {
    //   title: "Departments",
    //   href: "/",
    // },
    // {
    //   title: "Region",
    //   href: "",
    // },
    // {
    //   title: "Tourists",
    //   href: "",
    // },
    // {
    //   title: "Presidents",
    //   href: "",
    // },
    // {
    //   title: "Natural Area",
    //   href: "",
    // },
    // {
    //   title: "Category Natural Area",
    //   href: "",
    // },
    // {
    //   title: "Map",
    //   href: "",
    // },
    {
      title: "Especies Invasoras",
      href: "invasive-specie",
    },
    // {
    //   title: "Native Community",
    //   href: "",
    // },
    // {
    //   title: "Indigenous Reservation",
    //   href: "",
    // },
    // {
    //   title: "Airport",
    //   href: "",
    // },
    // {
    //   title: "Constitution Article",
    //   href: "",
    // },
  ];

  return (
    <div className="mt-2 w-full bg-slate-800 py-4">
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
