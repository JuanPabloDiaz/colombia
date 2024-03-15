import { Button } from "./components/ui/button";
import  Info  from "./components/info.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-24">
      <h1 className="text-4xl font-bold text-white/60 mb-8">
      Amo Colombia
      </h1>
      <h2 className="text-2xl font-semibold text-white/40 mb-8">
      Colombia es un país de América ubicado en la región noroccidental de América del Sur. Limita al este con Venezuela y Brasil, al sur con Perú y Ecuador, y al noroeste con Panamá; en cuanto a límites marítimos, limita con Panamá, Costa Rica, Nicaragua, Honduras, Jamaica, Haití, República Dominicana y Venezuela en el mar Caribe, y con Panamá, Costa Rica y Ecuador en el océano Pacífico. Su capital es Bogotá.
      </h2>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1400px]">

      <GridItem title="General">
          <Info/>
        </GridItem>
        <GridItem title="Departments">
        </GridItem>
        <GridItem title="Region">
        </GridItem>
        <GridItem title="Tourists">
        </GridItem>
        <GridItem title="Presidents">
        </GridItem>
        <GridItem title="Natural Area">
        </GridItem>
        <GridItem title="Category Natural Area">
        </GridItem>
        <GridItem title="Map">
        </GridItem>
        <GridItem title="Invasive Specie">
        </GridItem>
        <GridItem title="Native Community">
        </GridItem>
        <GridItem title="Indigenous Reservation">
        </GridItem>
        <GridItem title="Airport">
        </GridItem>
        <GridItem title="Constitution Article">
        </GridItem>



      </div>
    </main>
  );
}

function GridItem({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl h-[400px]">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}
