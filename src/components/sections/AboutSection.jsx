"use client";

import { motion } from "framer-motion";
import {
  FiTarget,
  FiEye,
  FiUsers,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";
import { BsRocketTakeoff } from "react-icons/bs";

export default function AboutSection() {
  const purposeItems = [
    {
      icon: <FiTarget />,
      title: "Our Mission",
      text: "To create meaningful communication that builds strong brands and lasting connections.",
      color: "text-lime-600",
      border: "border-lime-500/30",
      bg: "bg-lime-50",
    },
    {
      icon: <FiEye />,
      title: "Our Vision",
      text: "To be the most trusted and innovative advertising partner across every platform and region.",
      color: "text-blue-600",
      border: "border-blue-500/30",
      bg: "bg-blue-50",
    },
    {
      icon: <FiUsers />,
      title: "Our Values",
      text: "Integrity, Innovation, Collaboration and Excellence in everything we do.",
      color: "text-purple-600",
      border: "border-purple-500/30",
      bg: "bg-purple-50",
    },
  ];

  const cards = [
    {
      icon: <FiCalendar />,
      title: "SINCE 2007",
      text: "Over 19 years of experience in delivering exceptional advertising solutions.",
      color: "lime",
    },
    {
      icon: <FiUsers />,
      title: "500+ CAMPAIGNS",
      text: "Successfully executed campaigns across diverse industries.",
      color: "blue",
    },
    {
      icon: <FiMapPin />,
      title: "NATIONWIDE REACH",
      text: "Strong presence across Pakistan with extensive media network.",
      color: "lime",
    },
    {
      icon: <BsRocketTakeoff />,
      title: "END-TO-END SOLUTIONS",
      text: "From strategy and creative to execution and evaluation, we handle it all.",
      color: "purple",
    },
  ];

  const colorMap = {
    lime: {
      text: "text-lime-600",
      border: "border-lime-500/30",
      glow: "shadow-[0_15px_45px_rgba(132,204,22,0.10)]",
      dot: "bg-lime-500 shadow-[0_0_25px_#84cc16]",
    },
    blue: {
      text: "text-blue-600",
      border: "border-blue-500/30",
      glow: "shadow-[0_15px_45px_rgba(59,130,246,0.08)]",
      dot: "bg-blue-500 shadow-[0_0_25px_#3b82f6]",
    },
    purple: {
      text: "text-purple-600",
      border: "border-purple-500/30",
      glow: "shadow-[0_15px_45px_rgba(168,85,247,0.08)]",
      dot: "bg-purple-500 shadow-[0_0_25px_#a855f7]",
    },
  };

  return (
    <section className="about-blueprint relative overflow-hidden bg-white py-16 text-slate-900 sm:py-20 lg:py-24">
      <div className="about-blueprint-grid" aria-hidden="true" />
      <div className="about-blueprint-rings" aria-hidden="true" />
      <img
        className="about-blueprint-logo"
        src="/abtlogo.svg"
        alt=""
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.2fr_0.95fr] lg:gap-14">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-full"
          >
            <div className="mb-5 flex items-center gap-4">
              <span className="text-xs font-bold tracking-[0.35em] text-lime-600 sm:text-sm">
                ABOUT US
              </span>
              <span className="h-[2px] w-20 bg-gradient-to-r from-lime-500 to-blue-500 sm:w-24" />
            </div>

            <h2 className="w-full max-w-[560px] text-[42px] font-extrabold leading-[1.08] text-slate-900 sm:text-5xl lg:w-[500px]">
              Driven by Purpose.
              <br />
              <span className="text-lime-600">Built for Impact.</span>
            </h2>

            <p className="mt-6 max-w-[560px] text-[15px] leading-8 text-slate-600 sm:mt-7">
              Since 2007, Heights Communications has been a trusted partner for
              brands that want to be seen, heard, and remembered. We blend
              creativity, strategy, and execution to build powerful campaigns
              that deliver real results.
            </p>

            <div className="mt-7 h-[3px] w-20 bg-lime-500 sm:mt-8" />

            <div className="mt-8 space-y-6">
              {purposeItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4 sm:gap-5">
                  <div
                    className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-xl border ${item.border} ${item.bg} ${item.color} text-2xl shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:h-14 sm:w-14`}
                  >
                    {item.icon}
                  </div>

                  <div className="max-w-[520px]">
                    <h4 className={`text-lg font-bold ${item.color}`}>
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CENTER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex min-h-[430px] items-center justify-center overflow-hidden sm:min-h-[520px] lg:min-h-[610px]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute h-[310px] w-[310px] rounded-full border border-lime-400/20 sm:h-[390px] sm:w-[390px] lg:top-[70px] lg:h-[440px] lg:w-[440px]"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
              className="absolute h-[250px] w-[250px] rounded-full border border-lime-400/30 sm:h-[320px] sm:w-[320px] lg:top-[110px] lg:h-[360px] lg:w-[360px]"
            />

            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.75, 0.35] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[230px] w-[230px] rounded-full bg-gradient-to-r from-blue-500/15 via-lime-500/25 to-blue-500/10 blur-[70px] sm:h-[300px] sm:w-[300px] lg:h-[330px] lg:w-[330px]"
            />

            <span className="about-orbit-label about-orbit-label-strategy absolute top-[50px] text-xs font-extrabold text-lime-600 sm:top-[70px] sm:text-sm lg:top-[83px]">
              STRATEGY
            </span>
            <span className="about-orbit-label about-orbit-label-idea absolute left-1 top-[195px] text-xs font-extrabold text-blue-600 sm:left-[35px] sm:top-[245px] sm:text-sm lg:left-[42px] lg:top-[270px]">
              IDEA
            </span>
            <span className="about-orbit-label about-orbit-label-creative absolute right-1 top-[195px] text-xs font-extrabold text-lime-600 sm:right-[28px] sm:top-[245px] sm:text-sm lg:right-[34px] lg:top-[270px]">
              CREATIVE
            </span>
            <span className="about-orbit-label about-orbit-label-execution absolute bottom-[92px] left-[35px] text-xs font-extrabold text-blue-600 sm:bottom-[125px] sm:left-[70px] sm:text-sm lg:bottom-[155px] lg:left-[72px]">
              EXECUTION
            </span>
            <span className="about-orbit-label about-orbit-label-results absolute bottom-[92px] right-[35px] text-xs font-extrabold text-purple-600 sm:bottom-[125px] sm:right-[70px] sm:text-sm lg:bottom-[155px] lg:right-[75px]">
              RESULTS
            </span>

            <div className="about-orbit-dot about-orbit-dot-strategy absolute top-[82px] h-3 w-3 rounded-full bg-lime-500 shadow-[0_0_28px_#84cc16] sm:top-[112px] sm:h-4 sm:w-4 lg:top-[125px]" />
            <div className="about-orbit-dot about-orbit-dot-idea absolute left-[45px] top-[205px] h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_28px_#3b82f6] sm:left-[75px] sm:top-[260px] sm:h-4 sm:w-4 lg:left-[88px] lg:top-[292px]" />
            <div className="about-orbit-dot about-orbit-dot-creative absolute right-[45px] top-[205px] h-3 w-3 rounded-full bg-lime-500 shadow-[0_0_28px_#84cc16] sm:right-[75px] sm:top-[260px] sm:h-4 sm:w-4 lg:right-[92px] lg:top-[292px]" />
            <div className="about-orbit-dot about-orbit-dot-execution absolute bottom-[125px] left-[75px] h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_28px_#3b82f6] sm:bottom-[165px] sm:left-[108px] sm:h-4 sm:w-4 lg:bottom-[195px] lg:left-[115px]" />
            <div className="about-orbit-dot about-orbit-dot-results absolute bottom-[125px] right-[75px] h-3 w-3 rounded-full bg-purple-500 shadow-[0_0_28px_#a855f7] sm:bottom-[165px] sm:right-[115px] sm:h-4 sm:w-4 lg:bottom-[195px] lg:right-[125px]" />

            <div className="relative z-10 flex flex-col items-center">
              <img
                src="/abtlogo.svg"
                alt="Heights Communications"
                className="w-[250px] sm:w-[300px] lg:mt-4 lg:w-[340px]"
              />

              <div className="mt-3 h-[54px] w-[320px] max-w-[88vw] rounded-[50%] bg-gradient-to-r from-blue-500/10 via-lime-400/20 to-blue-500/10 ring-1 ring-lime-400/20 sm:mt-5 sm:h-[70px] sm:w-[400px] lg:mt-6 lg:h-[82px] lg:w-[450px]" />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-5 sm:grid-cols-2 lg:block lg:space-y-6"
          >
            {cards.map((card, index) => {
              const theme = colorMap[card.color];

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className={`relative rounded-[22px] border ${theme.border} bg-white/90 p-5 backdrop-blur-xl ${theme.glow} sm:p-6 lg:min-h-[132px] lg:rounded-[24px] lg:p-7`}
                >
                  <div className="absolute left-[-70px] top-1/2 hidden h-px w-16 bg-gradient-to-r from-transparent to-slate-300 lg:block" />
                  <div
                    className={`absolute left-[-76px] top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full ${theme.dot} lg:block`}
                  />

                  <div className="flex items-center gap-4 sm:gap-5 lg:gap-6">
                    <div
                      className={`flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full border ${theme.border} ${theme.text} text-2xl sm:h-[70px] sm:w-[70px] sm:text-3xl lg:h-[76px] lg:w-[76px]`}
                    >
                      {card.icon}
                    </div>

                    <div className="pr-0 lg:pr-5">
                      <h3 className={`text-lg font-extrabold ${theme.text}`}>
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
