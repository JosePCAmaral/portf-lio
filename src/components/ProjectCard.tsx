import { Project } from "../data/profile";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="rounded-lg border border-neutral-800 p-5 transition-colors hover:border-emerald-400">
      <h3 className="text-lg font-semibold text-gray-100">{project.name}</h3>
      <p className="mt-2 leading-relaxed text-gray-300">{project.description}</p>
      {project.technologies.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-neutral-700 px-2.5 py-0.5 text-xs text-gray-400"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block font-mono text-sm text-emerald-400 hover:underline"
      >
        Ver repositório →
      </a>
    </li>
  );
}
