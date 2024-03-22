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
  cardTitle,
  cardDescription,
  cardContent,
  buttonOne,
  buttonTwo,
  imageUrl,
}) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
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
