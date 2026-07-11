"use client";

import { motion } from "framer-motion";
import { services } from "@/data/site";

const cardDescriptions = [
  "Strategic media planning and powerful advertising that amplifies your brand.",
  "Building strong identities that communicate your vision and values.",
  "Creating memorable experiences that connect brands with people.",
  "Capturing moments, crafting stories, and producing impactful content.",
  "High-quality printing delivered with precision and professionalism.",
  "Creative merchandise and giveaways that leave a lasting impression.",
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-premium relative overflow-hidden px-5 py-16 text-white sm:px-8 lg:py-24">
      <div className="services-architecture" aria-hidden="true" />
      <div className="services-monogram" aria-hidden="true">
        <span>H</span>
        <span>C</span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1800px]">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.22em] text-lime-600 sm:text-sm">
              What We Do
              <span className="h-px w-14 bg-blue-400/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            </div>

            <h2 className="mt-7 text-[48px] font-extrabold leading-[1.04] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
              Our Services,<br />
              Your <span className="text-lime-600">Success.</span>
            </h2>

            <div className="mt-7 h-0.5 w-16 bg-blue-500" />
            <p className="services-editorial-copy mt-6 max-w-[650px] text-base leading-8 text-white/68 sm:text-lg">
              End-to-end solutions designed to elevate your brand, engage your audience,
              and drive <span className="text-lime-600">measurable results.</span>
            </p>
          </motion.div>

        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 38 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -7 }}
                className="service-premium-card group"
              >
                <span className="absolute right-8 top-5 text-5xl font-extrabold text-white/[0.075]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center gap-6">
                    <span className="grid h-[82px] w-[82px] shrink-0 place-items-center rounded-full border border-blue-400/70 bg-[#061326]/70 text-3xl text-blue-300 shadow-[inset_0_0_30px_rgba(59,130,246,0.07)] transition-colors group-hover:border-lime-400/70 group-hover:text-lime-400">
                      <Icon />
                    </span>
                    <div>
                      <h3 className="max-w-[220px] text-xl font-bold leading-tight sm:text-2xl">{service.title}</h3>
                      <span className="mt-3 block h-px w-10 bg-blue-500" />
                    </div>
                  </div>

                  <p className="services-editorial-copy mt-5 max-w-[320px] text-sm leading-6 text-white/65 sm:text-[15px]">
                    {cardDescriptions[index]}
                  </p>

                  <div className="mt-auto pt-5">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-white/35">
                      {service.items[0]}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
