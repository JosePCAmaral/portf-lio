import { profile } from "../data/profile";
import { ProjectCard } from "../components/ProjectCard";

export function Projetos() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-gray-100">Projetos</h1>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {profile.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
    </section>
  );
}
