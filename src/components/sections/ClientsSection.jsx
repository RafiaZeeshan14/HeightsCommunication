"use client";

import { motion } from "framer-motion";
import { advantages, clients } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ClientsSection() {
  const loopClients = [...clients, ...clients];

  return (
    <section
      id="clients"
      className="clients-loop-backdrop fixed z-50 px-4 py-3 sm:px-6 lg:px-10 pointer-events-none"
    >
      <div className="mx-auto w-full max-w-[96rem]">
        <div>
          <motion.div
            className="flex w-max items-center gap-10"
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
                  className={`h-12 w-auto object-contain opacity-100 transition-all duration-300 hover:scale-105 sm:h-14 md:h-16 ${
                    client.name === "Ghandhara"
                      ? "client-logo-wide"
                      : client.name === "outfitter"
                        ? "client-logo-outfitter"
                      : client.name === "DIB"
                        ? "client-logo-compact"
                        : ""
                  }`}
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
