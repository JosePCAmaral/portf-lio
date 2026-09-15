import { profile } from "../data/profile";
import { TimelineItem } from "../components/TimelineItem";

export function Experiencia() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-gray-100">Experiência</h1>
      <ul className="flex flex-col gap-8">
        {profile.experience.map((entry, index) => (
          <TimelineItem key={index} entry={entry} />
        ))}
      </ul>
    </section>
  );
}
