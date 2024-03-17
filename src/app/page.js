import Info from "@/components/info.jsx";
import { metadata } from "@/components/metadata";
export default function Home() {
  const pageTitle = metadata.home.title;

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center px-4 py-24 md:px-8 xl:px-10">
        <section className="h-screen w-full bg-slate-950/90">
          <title>{`${pageTitle} • AmoCol`}</title>
          <h1 className="mb-8 text-4xl font-bold text-white/60">{pageTitle}</h1>
          <div className="grid w-full max-w-[1400px] gap-10 bg-slate-500 lg:grid-cols-2 xl:grid-cols-3">
            <Info />
          </div>
        </section>
      </main>
    </>
  );
}
