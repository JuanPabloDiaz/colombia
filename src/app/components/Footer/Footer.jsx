import Link from "next/link";
import React from "react";

import { Api, Github, Linkedin, Twitter } from "../icons";

export const Footer = () => {
  const links = [
    { href: "api/area", text: "Area" },

  ];
  const socials = [
    {
      href: "https://github.com/juanpablodiaz",
      icon: <Github className="w-4 h-4" />,
    },
    {
      href: "https://www.linkedin.com/in/1diazdev/",
      icon: <Linkedin className="w-4 h-4" />,
    },
    {
      href: "https://twitter.com/1diazdev",
      icon: <Twitter className="w-4 h-4" />,
    },
  ];

  return (
    <div className="mt-2 py-4 w-full">
      <div className="text-center pb-10">
        <div className="text-white/40 pb-5 flex justify-center">
          <Api className="w-8 h-8" />
        </div>

        <p className="text-yellow-200/60 p-4">
          Data sources I used to create the charts
        </p>
        {/* <ul className="grid grid-rows-1 grid-flow-col gap-4"> */}
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              <li className="mx-12 bg-slate-600 hover:bg-slate-800 rounded-xl transition duration-300 ease-in-out">
                {link.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <ul className="flex justify-center gap-4 items-center">
          {socials.map((social, index) => (
            <Link href={social.href} key={index}>
              <li>{social.icon}</li>
            </Link>
          ))}
        </ul>
      </div>
      <p className="text-center">
        Developed by
        <a
          href="https://jpdiaz.dev/"
          className="text-white/40 px-2 hover:underline"
        >
          Juan Diaz
        </a>
      </p>
    </div>
  );
};
