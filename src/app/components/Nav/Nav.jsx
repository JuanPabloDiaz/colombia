import Link from "next/link";
import React from "react";


export const Nav = () => {
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Departments",
      href: "/col",
    },
    {
      title: "Region",
      href: ""
    },
    {

    title: "Tourists",
      href: "",
    },
    {
    title: "Presidents",
      href: "",
    },
    {
    title: "Natural Area",
      href: "",
    },
    {
    title: "Category Natural Area",
      href: "",
    },
    {
    title: "Map",
      href: "",
    },
    {
    title: "Invasive Specie",
      href: "",
    },
    {
    title: "Native Community",
      href: "",
    },
    {
    title: "Indigenous Reservation",
      href: "",
    },
    {
    title: "Airport",
      href: "",
    },
    {
    title: "Constitution Article",
      href: "",
    }
  ];

  return (
    <div className="mt-2 w-full py-4 bg-slate-800">
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
