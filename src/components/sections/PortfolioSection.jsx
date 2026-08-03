"use client";

import { useCallback, useState } from "react";
import { m } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { projects } from "@/data/site";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectVideoModal from "@/components/ui/ProjectVideoModal";
import SectionHeading from "@/components/ui/SectionHeading";

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

const containerMotion = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <section id="portfolio" className="portfolio-section px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <m.div
        className="relative z-10 mx-auto w-full max-w-[96rem]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={containerMotion}
      >
        <m.div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" variants={itemMotion}>
          <SectionHeading eyebrow="Our Work" title="Events That Made an Impact">
            A glimpse of the experiences, launches and activations we have delivered for leading brands.
          </SectionHeading>

          <a
            href="/projects"
            className="hidden h-11 w-fit shrink-0 items-center justify-center gap-3 rounded-lg border border-[#075eff]/20 bg-white px-5 text-sm font-bold text-[#075eff] shadow-sm transition hover:-translate-y-0.5 hover:border-[#075eff] hover:bg-blue-50 md:inline-flex"
          >
            View All Projects <FiArrowRight aria-hidden="true" />
          </a>
        </m.div>

        <m.div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3" variants={containerMotion}>
          {featuredProjects.map((project) => (
            <m.div key={project.slug} variants={itemMotion}>
              <ProjectCard project={project} onPlay={setSelectedProject} />
            </m.div>
          ))}
        </m.div>

        <m.div className="mt-10 flex justify-center md:hidden" variants={itemMotion}>
          <a
            href="/projects"
            className="inline-flex h-12 items-center justify-center gap-3 rounded-lg bg-[#075eff] px-7 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-[#0050da]"
          >
            View All Projects <FiArrowRight aria-hidden="true" />
          </a>
        </m.div>
      </m.div>

      {selectedProject && <ProjectVideoModal project={selectedProject} onClose={closeModal} />}
    </section>
  );
}
