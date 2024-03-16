import Link from "next/link";
import React from "react";

import { Api, Github, Linkedin, Twitter } from "../icons";

export const Footer = () => {
  const socials = [
    {
      href: "https://github.com/juanpablodiaz",
      icon: <Github className="h-4 w-4" />,
    },
    {
      href: "https://www.linkedin.com/in/1diazdev/",
      icon: <Linkedin className="h-4 w-4" />,
    },
    {
      href: "https://twitter.com/1diazdev",
      icon: <Twitter className="h-4 w-4" />,
    },
  ];

  return (
    <div className="mt-2 w-full py-4">
      <div>
        <ul className="flex items-center justify-center gap-4">
          {socials.map((social, index) => (
            <Link href={social.href} key={index}>
              <li>{social.icon}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex items-center justify-around gap-4">
        <p className="text-center">
          © {new Date().getFullYear()}
          <a
            href="https://jpdiaz.dev/"
            className="px-2 text-white/40 hover:underline"
          >
            Juan Diaz
          </a>
        </p>
        <p className="text-center">
          <a
            href="https://github.com/JuanPabloDiaz/amoCol?tab=MIT-1-ov-file"
            className="px-2 text-white/70 hover:underline"
          >
            licencia MIT
          </a>
        </p>
        <p className="text-center">
          <a
            href="https://github.com/JuanPabloDiaz/amoCol"
            className="px-2 text-white/70 hover:underline"
          >
            Repo
          </a>
        </p>
        <p className="text-center">
          <a
            href="https://api-colombia.com/"
            className="px-2 text-white/80 hover:underline"
          >
            API Colombia
          </a>
        </p>
      </div>
    </div>
  );
};
