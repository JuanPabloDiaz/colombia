import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

export default function CardBadge({ title, text, className, badge }) {
  return (
    <Card
      className={cn(
        "w-full border-none bg-slate-950/90 text-white/80",
        className,
      )}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{badge}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <Typography variant="h4">{text}</Typography>
      </CardContent>
    </Card>
  );
}
