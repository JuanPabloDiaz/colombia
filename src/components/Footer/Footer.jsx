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
      <p className="text-center">
        Developed by
        <a
          href="https://jpdiaz.dev/"
          className="px-2 text-white/40 hover:underline"
        >
          Juan Diaz
        </a>
      </p>
    </div>
  );
};
