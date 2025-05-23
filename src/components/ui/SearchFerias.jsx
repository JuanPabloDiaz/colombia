export default function SearchFerias({
  searchInput,
  setSearchInput,
  handleSearch,
  searching,
}) {
  return (
    <div className="mb-8 px-4">
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <div className="flex w-full flex-col items-center md:w-1/2">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Buscar Ferias y Festivales por nombre o palabra clave..."
            className="w-full rounded-md bg-slate-950/90 px-4 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            disabled={searching}
          />
          <button
            onClick={handleSearch}
            className="mt-2 w-full rounded-md bg-primary px-6 py-2 font-semibold text-white shadow-md hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            disabled={searching}
          >
            {searching ? "Buscando..." : "Buscar"}
          </button>
        </div>
      </div>
    </div>
  );
}
