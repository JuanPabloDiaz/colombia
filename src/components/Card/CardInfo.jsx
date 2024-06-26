import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function CardInfo({
  title,
  description,
  buttonOne,
  buttonTwo,
  imageUrl,
  className,
}) {
  return (
    <Card
      className={cn(
        "w-[350px] border-none bg-slate-950/90 text-white/80",
        className,
      )}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={imageUrl ?? "/assets/images/avatar.png"}
          alt="alt img"
          width={350}
          height={200}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">{buttonOne}</Button>
        <Button>{buttonTwo}</Button>
      </CardFooter>
    </Card>
  );
}
