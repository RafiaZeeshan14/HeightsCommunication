"use client";

import { motion } from "framer-motion";
import { advantages, clients } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ClientsSection() {
  const loopClients = [...clients, ...clients];

  return (
    <section
      id="clients"
      className="fixed bottom-0 left-0 right-0 z-50 px-4 py-8 backdrop-blur-md sm:px-6 lg:px-10 pointer-events-none"
    >
      <div className="mx-auto w-full max-w-[96rem]">
        <p className="text-center text-xs font-bold uppercase tracking-wide text-[#7ac70c]">
         trusted by 
        </p>

        <div className="mt-6">
          <motion.div
            className="flex w-max items-center gap-12"
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
                className="flex shrink-0 items-center justify-center pointer-events-auto"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain opacity-100 transition-all duration-300 hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hidden">
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