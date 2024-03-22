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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CardAccordion({
  title,
  cardDescription,
  cardContent,
  buttonOne,
  buttonTwo,
}) {
  return (
    <Card className="w-[350px] border-none bg-black/80 text-white">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{cardContent}</AccordionTrigger>
            <AccordionContent>{cardDescription}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="border-none bg-red-500" variant="outline">
          {buttonOne}
        </Button>
        <Button className="border-none bg-green-500">{buttonTwo}</Button>
      </CardFooter>
    </Card>
  );
}
