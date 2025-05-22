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
  // badge: [label, value]
  return (
    <Card
      className={cn(
        "w-full border-none bg-slate-900/90 text-white/90 shadow-xl hover:shadow-2xl transition-shadow duration-200 flex flex-col justify-between min-h-72",
        className,
      )}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-primary-400 mb-1">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 flex-1">
        <p className="text-base text-white/80 leading-relaxed line-clamp-4 mb-2">{text}</p>
        {badge && badge[1] && (
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="bg-emerald-700/80 text-white text-xs px-2 py-1 rounded-full font-semibold">
              {badge[0]}
            </span>
            {Array.isArray(badge[1])
              ? badge[1].map((lang, idx) => (
                  <span
                    key={idx}
                    className="bg-emerald-900/60 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {lang}
                  </span>
                ))
              : (
                  <span className="bg-emerald-900/60 text-white text-xs px-2 py-1 rounded-full">
                    {badge[1]}
                  </span>
                )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
