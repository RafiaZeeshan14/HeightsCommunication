"use client";

import { m } from "framer-motion";
import Image from "next/image";
import {
  FiAward,
  FiBarChart2,
  FiCalendar,
  FiEdit3,
  FiGlobe,
  FiMapPin,
  FiPieChart,
  FiSettings,
  FiSmile,
  FiTarget,
  FiUsers,
} from "react-icons/fi";
import { BsInfinity } from "react-icons/bs";

const cards = [
  {
    icon: FiCalendar,
    title: "SINCE 2007",
    text: "Over 19 years of experience in delivering exceptional advertising solutions.",
    tone: "lime",
  },
  {
    icon: FiUsers,
    title: "500+ PROJECTS",
    text: "Successfully executed campaigns across diverse industries with lasting impact.",
    tone: "blue",
  },
  {
    icon: FiMapPin,
    title: "NATIONWIDE REACH",
    text: "Strong presence across Pakistan with an extensive media network.",
    tone: "lime",
  },
  {
    icon: BsInfinity,
    title: "END-TO-END SOLUTIONS",
    text: "From strategy to execution, we handle everything to deliver measurable results.",
    tone: "purple",
  },
];

const stats = [
  { icon: FiSmile, value: "200+", label: "Happy Clients", sub: "Across Pakistan", tone: "lime" },
  { icon: FiPieChart, value: "500+", label: "Successful", sub: "Campaigns", tone: "blue" },
  { icon: FiAward, value: "19+", label: "Years of", sub: "Excellence", tone: "purple" },
  { icon: FiGlobe, value: "30+", label: "Cities", sub: "Covered", tone: "lime" },
];

const tones = {
  lime: { text: "text-lime-600", border: "bg-lime-500", soft: "bg-lime-50", ring: "border-lime-200" },
  blue: { text: "text-blue-600", border: "bg-blue-600", soft: "bg-blue-50", ring: "border-blue-200" },
  purple: { text: "text-purple-600", border: "bg-purple-600", soft: "bg-purple-50", ring: "border-purple-200" },
};

const orbitItems = [
  { label: "STRATEGY", icon: FiTarget, className: "left-1/2 top-0 -translate-x-1/2", tone: "lime" },
  { label: "IDEA", icon: FiTarget, className: "left-0 top-[36%]", tone: "blue" },
  { label: "CREATIVE", icon: FiEdit3, className: "right-0 top-[36%]", tone: "lime" },
  { label: "EXECUTION", icon: FiSettings, className: "bottom-0 left-[14%]", tone: "purple" },
  { label: "RESULTS", icon: FiBarChart2, className: "bottom-0 right-[14%]", tone: "purple" },
];

export default function AboutSection() {
  return (
    <section id="about" className="about-reference relative overflow-hidden bg-white py-14 text-slate-950 lg:py-20">
      <div className="about-reference-grid absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 xl:grid-cols-[0.86fr_1.18fr_0.9fr] xl:gap-8 2xl:gap-12">
          <m.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 text-xs font-extrabold tracking-[0.32em] text-lime-600 sm:text-sm">
              ABOUT US
              <span className="h-0.5 w-16 bg-blue-600" />
            </div>

            <h2 className="mt-8 text-[42px] font-extrabold leading-[1.12] sm:text-5xl xl:text-[46px] 2xl:text-[54px]">
              Driven by Purpose.<br />
              Built for <span className="text-lime-600">Impact.</span>
            </h2>

            <div className="mt-8 h-[3px] w-20 bg-blue-600" />

            <p className="mt-8 max-w-[520px] text-[15px] leading-8 text-slate-600">
              Since 2007, Heights Communications has empowered brands to stand out,
              connect deeply, and grow fearlessly. We blend creativity, strategy,
              and flawless execution to deliver advertising that drives real results.
            </p>

          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.05, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-square w-full max-w-[590px]"
          >
            <div className="absolute inset-[9%] rounded-full border border-lime-400/50" />
            <div className="absolute inset-[18%] rounded-full border border-dashed border-blue-300/60" />
            <div className="absolute inset-[27%] rounded-full border border-slate-200 shadow-[0_25px_80px_rgba(37,99,235,0.13)]" />
            <div className="absolute inset-[30%] flex items-center justify-center rounded-full bg-white shadow-[0_20px_55px_rgba(15,23,42,0.14)]">
              <Image src="/abtlogo.webp" alt="Heights Communications" className="w-[82%]" width={474} height={474} loading="lazy" />
            </div>

            {orbitItems.map(({ label, icon: Icon, className, tone }) => {
              const theme = tones[tone];
              return (
                <div key={label} className={`absolute flex flex-col items-center gap-1.5 ${className}`}>
                  <span className={`text-[11px] font-extrabold sm:text-sm ${theme.text}`}>{label}</span>
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full text-xl text-white shadow-lg sm:h-13 sm:w-13 ${theme.border}`}>
                    <Icon />
                  </span>
                </div>
              );
            })}
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1"
          >
            {cards.map(({ icon: Icon, title, text, tone }, index) => {
              const theme = tones[tone];
              return (
                <m.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.24 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="relative min-h-[132px] overflow-hidden rounded-2xl bg-white p-4 shadow-[0_12px_42px_rgba(15,23,42,0.09)] ring-1 ring-slate-100"
                >
                  <div className="flex h-full items-center gap-4">
                    <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border text-2xl ${theme.soft} ${theme.ring} ${theme.text}`}>
                      <Icon />
                    </span>
                    <div>
                      <h3 className={`text-lg font-extrabold ${theme.text}`}>{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                    </div>
                  </div>
                </m.div>
              );
            })}
          </m.div>
        </div>

        <m.div
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="about-stats-glass mt-12 grid grid-cols-2 overflow-hidden rounded-2xl xl:grid-cols-4"
        >
          {stats.map(({ icon: Icon, value, label, sub, tone }, index) => {
            const theme = tones[tone];
            return (
              <m.div
                key={value + label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.2 + index * 0.14, ease: [0.22, 1, 0.36, 1] }}
                className="about-stat-item flex items-center gap-4 border-slate-200 p-5 xl:border-r xl:last:border-r-0"
              >
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-2xl ${theme.soft} ${theme.text}`}><Icon /></span>
                <div>
                  <strong className={`text-3xl font-extrabold ${theme.text}`}>{value}</strong>
                  <p className="text-sm font-semibold text-slate-700">{label}</p>
                  <p className="text-xs text-slate-500">{sub}</p>
                </div>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}
