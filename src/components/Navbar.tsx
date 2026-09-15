import { NavLink } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/projetos", label: "Projetos" },
  { to: "/experiencia", label: "Experiência" },
  { to: "/contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? "text-emerald-400" : "text-gray-300 hover:text-emerald-400"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <NavLink to="/" className="font-mono text-lg font-semibold text-gray-100">
          JP.dev
        </NavLink>

        <button
          className="sm:hidden text-gray-300"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <span className="mb-1 block h-0.5 w-6 bg-current" />
          <span className="mb-1 block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
        </button>

        <ul className="hidden sm:flex sm:gap-2">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} end={link.to === "/"}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul className="border-t border-neutral-800 px-4 pb-3 sm:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={linkClass}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
