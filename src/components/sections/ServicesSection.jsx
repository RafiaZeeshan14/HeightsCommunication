"use client";

import { motion } from "framer-motion";
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
          </div>
        </div>
        <motion.div
          className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 42 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.58, ease: "easeOut" },
                },
              }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
