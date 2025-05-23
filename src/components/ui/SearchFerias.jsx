import { Search } from "lucide-react";

export default function SearchFerias({
  searchInput,
  setSearchInput,
  handleSearch,
  searching,
}) {
  return (
    <div className="mb-8 px-4">
      <div className="flex w-full items-center justify-center md:w-1/2 mx-auto">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Buscar por nombre o palabra clave..."
          className="flex-1 rounded-l-md bg-slate-950/90 px-4 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary border-r-0 border border-slate-800"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          disabled={searching}
          aria-label="Buscar Ferias y Festivales"
        />
        <button
          onClick={handleSearch}
          className="rounded-r-md bg-primary px-4 py-2 text-white shadow-md hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 border-l-0 border border-slate-800 disabled:opacity-60 flex items-center justify-center"
          disabled={searching}
          aria-label="Buscar"
          type="button"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

