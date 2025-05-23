import React from "react";

export default function RadioCard({ fm }) {
  return (
    <div className="flex min-h-40 w-[250px] flex-col gap-2 rounded-xl border-none bg-slate-950/90 p-5 text-white/90 shadow-xl">
      <div className="text-primary-400 mb-1 truncate text-lg font-bold">
        {fm.name}
      </div>
      <div className="mb-2 truncate text-sm text-white/70">{fm.city?.name}</div>
      <div className="mb-2 line-clamp-2 flex-1 text-xs text-white/60">
        {fm.city?.description}
      </div>
      <a
        href={fm.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary-500 hover:bg-primary-600 mt-auto rounded-full px-4 py-2 text-center text-xs font-semibold text-white shadow transition-colors"
      >
        Escuchar radio
      </a>
    </div>
  );
}
