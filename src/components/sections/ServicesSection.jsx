import { services } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services" className="dark-section px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto w-full px-10">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading eyebrow="What We Do" title="Our Services" dark />
          <div className="hidden gap-3 md:flex" aria-hidden="true">
            <button className="slider-button">‹</button>
            <button className="slider-button">›</button>
          </div>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
