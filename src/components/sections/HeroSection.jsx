"use client";

import { motion } from "framer-motion";
import { FaArrowRight, heroSlides, heroStats } from "@/data/site";
import ButtonLink from "@/components/ui/ButtonLink";
import HeroShowcase from "@/components/ui/HeroShowcase";
import StatItem from "@/components/ui/StatItem";

const leftParent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const leftItem = {
  hidden: { opacity: 0, x: -55, filter: "blur(8px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const rightShowcase = {
  hidden: { opacity: 0, x: 80, scale: 0.96, filter: "blur(10px)" },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const statsParent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  return (
    <section
      id="home"
    className="hero-surface relative overflow-hidden px-5 pb-10 pt-[120px] text-white sm:px-8 sm:pt-[130px] lg:px-12 lg:pb-12 lg:pt-36 2xl:px-16"
    >
      {/* Mobile premium glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[430px] bg-[radial-gradient(circle_at_50%_18%,rgba(122,199,12,0.18),transparent_58%),radial-gradient(circle_at_20%_18%,rgba(7,94,255,0.16),transparent_46%)] lg:hidden" />

      <div className="grid w-full gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-center">
        {/* LEFT CONTENT */}
        <motion.div
          className="hero-copy relative z-10 text-center lg:text-left"
          variants={leftParent}
          initial="hidden"
          animate="show"
        >
          <div className="hero-copy-ambient" aria-hidden="true" />
          <div className="hero-bubble hero-bubble-blue" aria-hidden="true" />
          <div className="hero-bubble hero-bubble-green" aria-hidden="true" />

          <motion.p
            className="text-xs font-bold uppercase tracking-[0.25em] text-[#7ac70c] sm:text-sm"
            variants={leftItem}
          >
            Since 2007
          </motion.p>

          <motion.h1
            className="mx-auto mt-5 max-w-[360px] text-[44px] font-bold leading-[1.02] sm:max-w-2xl sm:text-6xl lg:mx-0 lg:text-5xl xl:text-7xl"
            variants={leftItem}
          >
            Advertising <br />
            <span className="whitespace-nowrap">That Creates</span> <br />
            <span className="text-[#7ac70c]">Impact.</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-[350px] text-[15px] leading-7 text-white/82 sm:max-w-lg sm:text-base sm:leading-8 lg:mx-0"
            variants={leftItem}
          >
            Heights Communications delivers creative advertising, branding, and
            outdoor media solutions that help brands connect, engage and grow.
          </motion.p>

          <motion.div
            className="mx-auto mt-8 flex max-w-[360px] flex-col gap-4 about me  lg:mx-0 lg:mt-9"
            variants={leftItem}
          >
            <ButtonLink href="#services">Explore Services</ButtonLink>
            <ButtonLink href="#portfolio" variant="outline">
              View Portfolio
            </ButtonLink>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="hero-showcase-shell relative z-10 mx-auto min-h-[420px] w-full max-w-[380px] rounded-[32px] border border-white/10 bg-white/[0.03] p-4 shadow-[0_0_60px_rgba(37,99,235,0.12)] sm:max-w-[520px] lg:min-h-[570px] lg:max-w-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
          variants={rightShowcase}
          initial="hidden"
          animate="show"
        >
          <div className="hero-showcase-mobile-glow absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_50%_45%,rgba(122,199,12,0.12),transparent_55%)] lg:hidden" />
          <div className="relative h-full">
            <HeroShowcase items={heroSlides} />
          </div>
        </motion.div>
      </div>

      {/* STATS */}
      <motion.div
        className="hero-stats relative z-10 mt-10 w-full border-t border-white/15 pt-7 lg:mt-10"
        variants={statsParent}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-x-12 sm:gap-y-5 xl:gap-x-8">
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={statItem}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-md sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-0"
            >
              <StatItem isPrimary={index === 0} {...stat} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <a className="sr-only" href="#about">
        Next section <FaArrowRight aria-hidden="true" />
      </a>
    </section>
  );
}
