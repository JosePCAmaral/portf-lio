import { profile } from "../data/profile";

export function Sobre() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-gray-100">Sobre</h1>

      <p className="leading-relaxed text-gray-300">{profile.about}</p>

      <div>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-400">
          Formação
        </h2>
        <p className="text-gray-300">{profile.education}</p>
      </div>

      <div>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-400">
          Linguagens
        </h2>
        <ul className="flex flex-wrap gap-2">
          {profile.languages.map((lang) => (
            <li
              key={lang}
              className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-gray-300"
            >
              {lang}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-400">
          Ferramentas e frameworks
        </h2>
        <ul className="flex flex-wrap gap-2">
          {profile.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-gray-300"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-400">
          Bancos de Dados
        </h2>
        <ul className="flex flex-wrap gap-2">
          {profile.databases.map((db) => (
            <li
              key={db}
              className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-gray-300"
            >
              {db}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
