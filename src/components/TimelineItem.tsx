import { ExperienceEntry } from "../data/profile";

export function TimelineItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <li className="relative border-l border-neutral-800 pl-6">
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-400" />
      <p className="font-mono text-sm text-emerald-400">{entry.period}</p>
      <h3 className="text-lg font-semibold text-gray-100">{entry.company}</h3>
      <p className="text-sm text-gray-400">{entry.role}</p>
      <p className="mt-2 leading-relaxed text-gray-300">{entry.description}</p>
    </li>
  );
}
