import Info from "@/components/info.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-24 md:px-8 xl:px-10">
      <h1 className="mb-8 text-4xl font-bold text-white/60">Amo Colombia</h1>
      <h2 className="mb-8 text-2xl font-semibold text-white/40">
        Uncover Colombia&apos;s rich tapestry
      </h2>
      <h2 className="mb-8 text-2xl font-semibold text-white/40">
        Explore Colombia comprehensively with amoCol, a web application designed
        for in-depth learning. Delve into national topics, departmental details,
        and cultural insights, all in one user-friendly platform.
      </h2>
      <h2 className="mb-8 text-2xl font-semibold text-white/40">
        Amocol is a comprehensive web app that offers in-depth exploration of
        departments, regions, cities, presidents, and more. Responsive design
        ensures seamless access across all devices.
      </h2>
      <h2 className="mb-8 text-2xl font-semibold text-white/40">
        Colombia es un país de América ubicado en la región noroccidental de
        América del Sur. Limita al este con Venezuela y Brasil, al sur con Perú
        y Ecuador, y al noroeste con Panamá; en cuanto a límites marítimos,
        limita con Panamá, Costa Rica, Nicaragua, Honduras, Jamaica, Haití,
        República Dominicana y Venezuela en el mar Caribe, y con Panamá, Costa
        Rica y Ecuador en el océano Pacífico. Su capital es Bogotá.
      </h2>
      <div className="grid w-full max-w-[1400px] gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <Info />
      </div>
    </main>
  );
}
