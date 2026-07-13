"use client";

import { m } from "framer-motion";
import { projectFilters, projects } from "@/data/site";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

const containerMotion = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.12,
    },
  },
};

const itemMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio-section px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <m.div
        className="relative z-10 mx-auto w-full max-w-[96rem]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        variants={containerMotion}
      >
        <m.div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between" variants={itemMotion}>
          <SectionHeading eyebrow="Our Work" title="Featured Projects" />
          <div className="flex gap-3 overflow-x-auto pb-2">
            {projectFilters.map((filter, index) => (
              <button key={filter} className={`filter-pill ${index === 0 ? "filter-pill-active" : ""}`}>
                {filter}
              </button>
            ))}
          </div>
        </m.div>
        <m.div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5" variants={containerMotion}>
          {projects.map((project) => (
            <m.div key={project.title} variants={itemMotion}>
              <ProjectCard project={project} />
            </m.div>
          ))}
        </m.div>
      </m.div>
    </section>
  );
}
