export default function SearchFerias({ searchInput, setSearchInput, handleSearch, searching }) {
    return (
      <div className="mb-8 px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="flex flex-col items-center w-full md:w-1/2">
            <input
              type="text"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              placeholder="Buscar Ferias y Festivales por nombre o palabra clave..."
              className="px-4 py-2 rounded-md shadow-sm bg-slate-950/90 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary w-full"
              onKeyDown={e => { if (e.key === "Enter") handleSearch(); }}
              disabled={searching}
            />
            <button
              onClick={handleSearch}
              className="mt-2 px-6 py-2 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 w-full"
              disabled={searching}
            >
              {searching ? "Buscando..." : "Buscar"}
            </button>
          </div>
        </div>
      </div>
    );
}