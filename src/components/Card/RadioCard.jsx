import React from "react";

export default function RadioCard({ fm }) {
  return (
    <div className="rounded-xl bg-slate-950/90 text-white/90 shadow-xl flex flex-col gap-2 p-5 min-h-40 w-[250px] border-none">
      <div className="text-lg font-bold mb-1 truncate text-primary-400">{fm.name}</div>
      <div className="text-sm text-white/70 mb-2 truncate">{fm.city?.name}</div>
      <div className="flex-1 text-xs text-white/60 line-clamp-2 mb-2">{fm.city?.description}</div>
      <a
        href={fm.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto bg-primary-500 hover:bg-primary-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow transition-colors text-center"
      >
        Escuchar radio
      </a>
    </div>
  );
}
