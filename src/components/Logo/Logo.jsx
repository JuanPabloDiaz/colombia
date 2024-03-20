import Image from "next/image";
import Link from "next/link";

import { Typography } from "@/components/ui/typography";

export function Logo({ width, height }) {
  return (
    <Link href="/" className="flex items-center justify-center md:mb-20">
      <div>
        <Image
          src="/assets/images/escudo.webp"
          alt="Escudo de Colombia"
          width={width}
          height={height}
          // className="rounded-xl shadow-md shadow-gray-600"
        />
      </div>
      <Typography
        variant="span"
        className="self-center whitespace-nowrap pl-2 text-xl font-semibold"
      >
        {"AMO COL"}
      </Typography>
    </Link>
  );
}
