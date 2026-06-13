"use client";

import { motion } from "framer-motion";
import { advantages, clients } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ClientsSection() {
  const loopClients = [...clients, ...clients];

  return (
    <section
      id="clients"
      className="soft-section overflow-hidden px-4 py-16 sm:px-6 lg:px-10 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[96rem]">
        <p className="text-center text-xs font-bold uppercase tracking-wide text-[#7ac70c]">
         trusted by 
        </p>

        {/* Auto Loop Logos */}
        <div className="relative mt-8 overflow-hidden">
          <motion.div
            className="flex w-max items-center gap-16"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {loopClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex shrink-0 items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto object-contain opacity-80 transition-all duration-300 hover:scale-105 hover:opacity-100"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="We Deliver More Than Just Campaigns"
            align="center"
          />

          <div className="why-glass-panel mt-10">
            {advantages.map((advantage) => {
              const Icon = advantage.icon;

              return (
                <article key={advantage.title} className="why-glass-item">
                  <span
                    className={`why-glass-icon why-glass-icon-${advantage.accent} ${advantage.color}`}
                  >
                    <Icon aria-hidden="true" />
                  </span>

                  <div>
                    <h3 className={`why-glass-title ${advantage.color}`}>
                      {advantage.title}
                    </h3>
                    <p className="why-glass-text">{advantage.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}