"use client";

import { useCallback, useMemo, useState } from "react";
import { m } from "framer-motion";
import { projectFilters, projects } from "@/data/site";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectVideoModal from "@/components/ui/ProjectVideoModal";

const cardMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState(projectFilters[0]);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(
    () => activeFilter === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <section className="portfolio-section px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <div className="relative z-10 mx-auto w-full max-w-[96rem]">
        <div className="flex flex-col gap-5 border-b border-slate-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#5fa800]">Complete Portfolio</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#06122f] sm:text-4xl">Explore All Projects</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Browse our work by category and watch highlights from selected events and projects.
            </p>
          </div>
          <p className="text-sm font-semibold text-slate-500">
            Showing <span className="text-[#075eff]">{filteredProjects.length}</span> projects
          </p>
        </div>

        <label className="relative mt-7 block sm:hidden">
          <span className="sr-only">Filter projects by category</span>
          <select
            value={activeFilter}
            onChange={(event) => setActiveFilter(event.target.value)}
            className="project-filter-select"
          >
            {projectFilters.map((filter) => (
              <option key={filter} value={filter}>{filter}</option>
            ))}
          </select>
        </label>

        <div className="project-filter-bar mt-7 hidden sm:flex" role="group" aria-label="Filter projects by category">
          {projectFilters.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                type="button"
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`filter-pill ${isActive ? "filter-pill-active" : ""}`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div key={activeFilter} className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <m.div
              key={project.slug}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardMotion}
            >
              <ProjectCard project={project} onPlay={setSelectedProject} />
            </m.div>
          ))}
        </div>
      </div>

      {selectedProject && <ProjectVideoModal project={selectedProject} onClose={closeModal} />}
    </section>
  );
}
