export default function ProjectCard({ project }) {
  return (
    <article className="group">
      <div className="relative aspect-[1.45] overflow-hidden rounded-lg border border-[#dbe7f6] bg-slate-200 shadow-lg shadow-slate-900/10 transition duration-300 group-hover:-translate-y-1 group-hover:border-[#7ac70c]/60 group-hover:shadow-[0_24px_55px_rgba(7,94,255,0.16)]">
        <img className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.08]" src={project.image} alt="" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020b1d]/45 via-transparent to-white/10 opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>
      <h3 className="mt-4 text-sm font-bold text-[#06122f] transition duration-300 group-hover:text-[#075eff]">{project.title}</h3>
      <p className="text-xs font-medium text-[#617089] transition duration-300 group-hover:text-[#5fa800]">{project.category}</p>
    </article>
  );
}
