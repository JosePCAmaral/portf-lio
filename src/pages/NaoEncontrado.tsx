import { Link } from "react-router-dom";

export function NaoEncontrado() {
  return (
    <section className="flex min-h-[50vh] flex-col items-start justify-center gap-4">
      <h1 className="text-3xl font-bold text-gray-100">Página não encontrada</h1>
      <p className="text-gray-300">A página que você procura não existe.</p>
      <Link
        to="/"
        className="rounded-md border border-emerald-400 px-5 py-2 font-medium text-emerald-400 transition-colors hover:bg-emerald-400 hover:text-neutral-950"
      >
        Voltar para Home
      </Link>
    </section>
  );
}
