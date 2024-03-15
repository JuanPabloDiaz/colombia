import Link from "next/link";
import React from "react";

import { Api, Github, Linkedin, Twitter } from "../icons";

export const Footer = () => {
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
