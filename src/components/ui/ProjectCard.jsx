export default function ProjectCard({ project }) {
  return (
    <article>
      <div className="aspect-[1.45] overflow-hidden rounded-lg bg-slate-200 shadow-lg shadow-slate-900/10">
        <img className="h-full w-full object-cover transition duration-500 hover:scale-105" src={project.image} alt="" />
      </div>
      <h3 className="mt-4 text-sm font-bold text-[#06122f]">{project.title}</h3>
      <p className="text-xs font-medium text-[#617089]">{project.category}</p>
    </article>
  );
}
