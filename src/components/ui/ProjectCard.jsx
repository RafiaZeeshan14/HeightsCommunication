import { FiCalendar, FiMapPin, FiPlay } from "react-icons/fi";

export default function ProjectCard({ project, onPlay }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_24px_60px_rgba(7,94,255,0.14)]">
      <button
        type="button"
        className="block w-full text-left"
        onClick={() => onPlay(project)}
        aria-label={`Play ${project.title} video`}
      >
        <span className="relative block aspect-video overflow-hidden bg-[#020b1d]">
          <img
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
            src={project.poster}
            alt=""
            loading="lazy"
            decoding="async"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-[#020b1d]/85 via-[#020b1d]/10 to-transparent" />

          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#020b1d]/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
            {project.category}
          </span>
          <span className="absolute bottom-4 right-4 rounded-md bg-[#020b1d]/75 px-2 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
            {project.duration}
          </span>

          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-14 w-14 place-items-center rounded-full border border-white/50 bg-white/15 text-xl text-white shadow-[0_12px_35px_rgba(0,0,0,0.3)] backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:border-[#9be10c] group-hover:bg-[#9be10c] group-hover:text-[#020b1d]">
              <FiPlay className="ml-1" aria-hidden="true" />
            </span>
          </span>
        </span>

        <span className="block p-5">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5fa800]">
            {project.client}
          </span>
          <span className="mt-2 block text-xl font-extrabold leading-tight text-[#06122f] transition group-hover:text-[#075eff]">
            {project.title}
          </span>
          <span className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-500">
            <span className="inline-flex items-center gap-1.5"><FiMapPin aria-hidden="true" />{project.location}</span>
            <span className="inline-flex items-center gap-1.5"><FiCalendar aria-hidden="true" />{project.year}</span>
          </span>
        </span>
      </button>
    </article>
  );
}
