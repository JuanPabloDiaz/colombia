import Link from "next/link";
import React from "react";

import { Api, Github, Linkedin, Twitter } from "../icons";

export const Footer = () => {
  const socials = [
    {
      href: "https://github.com/juanpablodiaz",
      icon: <Github className="h-4 w-4" />,
      ariaLabel: "Github profile for Juan Diaz",
    },
    {
      href: "https://www.linkedin.com/in/1diazdev/",
      icon: <Linkedin className="h-4 w-4" />,
      ariaLabel: "Linkedin profile for Juan Diaz",
    },
    {
      href: "https://twitter.com/1diazdev",
      icon: <Twitter className="h-4 w-4" />,
      ariaLabel: "Twitter profile for Juan Diaz",
    },
  ];

  return (
    <main className="w-full bg-slate-950/95 py-3 font-medium md:py-4 md:font-semibold">
      <section>
        <div className="flex items-center justify-center gap-6">
          {socials.map((social, index) => (
            <Link href={social.href} key={index} aria-label={social.ariaLabel}>
              <div className="rounded-full p-1 hover:bg-gray-800 active:bg-gray-700">
                {social.icon}
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="mt-3 flex flex-wrap items-center justify-center gap-2 px-2 text-xs md:mt-4 md:flex-row md:justify-around md:gap-4 md:text-sm">
        <p className="text-center">
          © 2023 {new Date().getFullYear()}
          <a
            href="https://jpdiaz.dev/"
            className="px-1 text-white/40 hover:underline md:px-2"
          >
            Juan Diaz
          </a>
        </p>
        <p className="text-center">
          <a
            href="https://github.com/JuanPabloDiaz/colombia?tab=MIT-1-ov-file"
            className="px-1 text-white/70 hover:underline md:px-2"
          >
            licencia MIT
          </a>
        </p>
        <p className="text-center">
          <a
            href="https://github.com/JuanPabloDiaz/colombia"
            className="px-1 text-white/70 hover:underline md:px-2"
          >
            Repo
          </a>
        </p>
        <p className="text-center">
          <a
            href="https://api-colombia.com/"
            className="px-1 text-white/80 hover:underline md:px-2"
          >
            API Colombia
          </a>
        </p>
      </section>
    </main>
  );
};
