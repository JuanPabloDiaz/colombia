import { MapPin } from "lucide-react";

const TourismMap = () => {
  return (
    <div className="container mx-auto px-2 py-8 md:px-4">
      {/* Encabezado con gradiente e ícono */}
      <div className="mb-8 flex flex-col items-center justify-center">
        <div className="mb-4 flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-primary/80 to-blue-500/80 p-3 shadow-lg">
          <MapPin className="h-8 w-8 text-white drop-shadow-md" />
        </div>
        <h1 className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-center text-4xl font-extrabold text-transparent md:text-5xl">
          Mapa Turístico de Colombia
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
          Explora los mejores destinos turísticos de Colombia en este mapa
          interactivo
        </p>
      </div>

      {/* Mapa con borde, sombra y transición */}
      <div className="relative mx-auto h-[55vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-blue-200 bg-white/80 shadow-2xl backdrop-blur-md transition-all duration-300 hover:shadow-blue-400">
        <iframe
          src="https://turismo.colombia.jpdiaz.dev/"
          width="100%"
          height="100%"
          className="border-0"
          title="Mapa Turístico de Colombia"
          loading="lazy"
          allowFullScreen
          style={{ minHeight: 340 }}
        />
      </div>

      {/* Tarjeta informativa moderna */}
      <div className="relative z-10 mx-auto mt-10 max-w-3xl rounded-2xl bg-white/70 p-8 shadow-xl ring-1 ring-blue-100 backdrop-blur-lg">
        <h2 className="mb-2 flex items-center gap-2 text-2xl font-semibold text-primary">
          <MapPin className="h-6 w-6 text-blue-500" /> Acerca de este mapa
        </h2>
        <p className="mb-2 text-gray-700">
          Este mapa interactivo muestra los principales destinos turísticos de
          Colombia, permitiéndote explorar la diversidad cultural, histórica y
          natural del país.
        </p>
        <p className="text-gray-700">
          Puedes hacer clic en los marcadores para obtener más información sobre
          cada destino, incluyendo descripciones, imágenes y consejos para
          visitantes.
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="https://turismo.colombia.jpdiaz.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-500 hover:to-primary/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Ver en pantalla completa
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourismMap;
