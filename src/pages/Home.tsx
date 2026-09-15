import { Link } from "react-router-dom";
import { profile } from "../data/profile";

export function Home() {
  return (
    <section className="flex min-h-[70vh] flex-col items-start justify-center gap-6">
      <p className="font-mono text-emerald-400">Olá, eu sou</p>
      <h1 className="text-4xl font-bold text-gray-100 sm:text-5xl">
        {profile.name}
      </h1>
      <h2 className="text-xl text-gray-400 sm:text-2xl">{profile.title}</h2>
      <div className="flex gap-4">
        <Link
          to="/projetos"
          className="rounded-md border border-emerald-400 px-5 py-2 font-medium text-emerald-400 transition-colors hover:bg-emerald-400 hover:text-neutral-950"
        >
          Ver projetos
        </Link>
        <Link
          to="/contato"
          className="rounded-md border border-neutral-700 px-5 py-2 font-medium text-gray-300 transition-colors hover:border-gray-400 hover:text-gray-100"
        >
          Contato
        </Link>
      </div>
    </section>
  );
}
