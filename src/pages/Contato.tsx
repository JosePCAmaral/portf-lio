import { profile } from "../data/profile";

const links = [
  { label: "GitHub", href: profile.contact.github, display: profile.contact.github },
  { label: "LinkedIn", href: profile.contact.linkedin, display: profile.contact.linkedin },
  { label: "Instagram", href: profile.contact.instagram, display: profile.contact.instagram },
  { label: "WhatsApp", href: profile.contact.whatsapp, display: "(43) 99927-3855" },
  { label: "E-mail", href: `mailto:${profile.contact.email}`, display: profile.contact.email },
];

export function Contato() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-gray-100">Contato</h1>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-md border border-neutral-800 px-4 py-3 text-gray-200 transition-colors hover:border-emerald-400 hover:text-emerald-400"
            >
              <span className="font-mono text-sm text-gray-500">{link.label}</span>
              <span className="truncate text-sm">{link.display}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
