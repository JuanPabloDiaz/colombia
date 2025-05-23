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
  CookingPot,
  Trees,
  LandPlot,
  Plane,
  PartyPopper,
  ShieldPlus,
  Cannabis,
  RadioTower,
} from "lucide-react";

import { useToast } from "@/components/ui/use-toast";

export const Nav = ({ setOpen, ul_className }) => {
  const { toast } = useToast();

  const links = [
    {
      title: "Inicio",
      href: "/",
      icon: <Home />,
    },
    // {
    //   title: "Prueba",
    //   href: "/prueba",
    //   icon: <Landmark />,
    // },
    {
      title: "Departamentos",
      href: "/departamentos",
      icon: <ShieldPlus />,
    },
    // {
    //   title: "Regiones",
    //   href: "/regiones",
    //   icon: <LandPlot />,
    // },
    {
      title: "Ferias y Festivales",
      href: "/ferias-y-festivales",
      icon: <PartyPopper />,
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
    // {
    //   title: "Naturaleza",
    //   href: "/naturaleza",
    //   icon: <Trees />,
    // },
    // {
    //   title: "Categorías Naturaleza",
    //   href: "/categorias-naturaleza",
    //   icon: <TreePine />,
    // },
    {
      title: "Mapas",
      href: "/mapas",
      icon: <MapPin />,
    },
    {
      title: "Especies Invasoras",
      href: "/especies-invasoras",
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
      title: "Platos Típicos",
      href: "/platos-tipicos",
      icon: <CookingPot />,
    },
    // {
    //   title: "Constitution",
    //   href: "/constitution",
    //   icon: <Landmark />,
    // },
    {
      title: "Radio",
      href: "/radio",
      icon: <RadioTower />,
    },
  ];

  // Sort links alphabetically and move "Inicio" to the top
  links.sort((a, b) => {
    if (a.title === "Inicio") return -1;
    if (b.title === "Inicio") return 1;
    if (a.title === "Prueba" && b.title !== "Inicio") return -1; // removed after testing
    if (b.title === "Prueba" && a.title !== "Inicio") return 1; // removed after testing
    return a.title.localeCompare(b.title);
  });

  return (
    // <ul className={ul_className}>
    //   {links.map((link, index) => (
    //     <Link href={link.href || "/"} key={index}>
    //       <li className="flex items-center">
    //         <span className="w-20 px-4">{link.icon}</span>
    //         {link.title}
    //       </li>
    //     </Link>
    //   ))}
    // </ul>

    <nav className={ul_className}>
      {links.map((link, index) => {
        // Specify the routes you want to allow navigation to
        const allowedRoutes = [
          "/",
          "/prueba",
          "/presidentes",
          "/turismo",
          "/mapas",
          "/departamentos",
          "/radio",
          "/especies-invasoras",
          "/comunidades-indigenas",
          "/aeropuertos",
          "/platos-tipicos",
          "/ferias-y-festivales",
        ];

        const isAllowedRoute = allowedRoutes.includes(link.href);

        const handleClick = (e) => {
          if (!isAllowedRoute) {
            e.preventDefault();
            toast({
              title: "Proximamente...",
              description:
                "Esta página está en construcción. Por favor, vuelve más tarde.",
              status: "info",
              duration: 3000,
              className:
                "bg-slate-950/90 text-white border-none shadow-sm shadow-gray-600",
            });
          }
          setOpen && setOpen(false); // Close the mobile menu
        };

        return (
          <Link
            href={link.href || "/"}
            key={index}
            aria-label={link.title}
            className="w-full cursor-pointer rounded-lg py-2 transition duration-300 ease-in-out hover:bg-gray-600"
          >
            <div
              className="flex items-center"
              style={{
                color: isAllowedRoute ? "white" : "gray",
              }}
              onClick={handleClick}
            >
              <span className="w-20 px-4">{link.icon}</span>
              {link.title}
            </div>
          </Link>
        );
      })}
    </nav>
  );
};
