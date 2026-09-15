import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-6 text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
