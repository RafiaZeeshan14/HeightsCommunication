import { projectFilters, projects } from "@/data/site";
import ButtonLink from "@/components/ui/ButtonLink";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-white px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Our Work" title="Featured Projects" />
          <div className="flex gap-3 overflow-x-auto pb-2">
            {projectFilters.map((filter, index) => (
              <button key={filter} className={`filter-pill ${index === 0 ? "filter-pill-active" : ""}`}>
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="#portfolio" variant="light">
            View All Projects
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
