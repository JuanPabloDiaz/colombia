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
        "flex min-h-72 w-full flex-col justify-between border-none bg-slate-900/90 text-white/90 shadow-xl transition-shadow duration-200 hover:shadow-2xl",
        className,
      )}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-primary-400 mb-1 text-2xl font-bold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-2">
        <p className="mb-2 line-clamp-4 text-base leading-relaxed text-white/80">
          {text}
        </p>
        {badge && badge[1] && (
          <div className="mt-auto flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-700/80 px-2 py-1 text-xs font-semibold text-white">
              {badge[0]}
            </span>
            {Array.isArray(badge[1]) ? (
              badge[1].map((lang, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-emerald-900/60 px-2 py-1 text-xs text-white"
                >
                  {lang}
                </span>
              ))
            ) : (
              <span className="rounded-full bg-emerald-900/60 px-2 py-1 text-xs text-white">
                {badge[1]}
              </span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
