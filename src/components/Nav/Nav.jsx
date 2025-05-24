import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

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
  LayoutGrid,
  Building2,
  FileText,
  CalendarDays,
} from "lucide-react";

import { useToast } from "@/components/ui/use-toast";

export const Nav = ({ setOpen, ul_className }) => {
  const pathname = usePathname();
  const { toast } = useToast();

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
      title: "Prueba2",
      href: "/prueba2",
      icon: <Landmark />,
    },
    {
      title: "Departamentos",
      href: "/departamentos",
      icon: <ShieldPlus />,
    },

    {
      title: "Ciudades",
      href: "/ciudades",
      icon: <Building2 />,
    },

    // icon: <FileText />,
    // //   icon: <Landmark />,

    {
      title: "Constitución",
      href: "/constitucion",
      icon: <FileText />,
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
    {
      title: "Radio",
      href: "/radio",
      icon: <RadioTower />,
    },
    {
      title: "Regiones",
      href: "/regiones",
      icon: <LayoutGrid />,
    },
    {
      title: "Festivos",
      href: "/festivos",
      icon: <CalendarDays />,
    },
  ];

  // Sort links alphabetically and move "Inicio" to the top
  links.sort((a, b) => {
    if (a.title === "Inicio") return -1;
    if (b.title === "Inicio") return 1;
    if (a.title === "Prueba" && b.title !== "Inicio") return -1; // removed after testing
    if (b.title === "Prueba" && a.title !== "Inicio") return 1; // removed after testing
    if (a.title === "Prueba 2" && b.title !== "Inicio") return -1; // removed after testing
    if (b.title === "Prueba 2" && a.title !== "Inicio") return 1; // removed after testing
    return a.title.localeCompare(b.title);
  });

  return (
    <nav className={ul_className}>
      {links.map((link, index) => {
        // Specify the routes you want to allow navigation to
        const allowedRoutes = [
          "/",
          "/prueba",
          "/prueba2",
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
          "/regiones",
          "/ciudades",
          "/constitucion",
          "/festivos", // New allowed route for Días Festivos
        ];

        const isAllowedRoute = allowedRoutes.includes(link.href);
        const isActive = pathname === link.href;

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
            className={`w-full cursor-pointer rounded-lg py-2 transition duration-300 ease-in-out hover:bg-gray-600 ${isActive ? "bg-primary font-bold text-primary-foreground shadow" : ""}`}
          >
            <div
              className="flex items-center justify-center md:justify-start"
              style={{
                color: isAllowedRoute
                  ? isActive
                    ? "var(--primary-foreground)"
                    : "white"
                  : "gray",
              }}
              onClick={handleClick}
            >
              <span className="flex w-8 items-center justify-center md:w-16 md:px-2">
                {link.icon}
              </span>
              <span className="ml-2 text-sm md:text-base">{link.title}</span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
};
