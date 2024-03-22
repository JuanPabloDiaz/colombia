import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

export default function CardShad({ title, text, className, icon }) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <Typography variant="h4">{text}</Typography>
        <div className="w-8 pl-2">{icon}</div>
      </CardContent>
    </Card>
  );
}
