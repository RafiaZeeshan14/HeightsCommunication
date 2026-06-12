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
    <section className="relative overflow-hidden bg-white py-24 text-slate-900">
      {/* Base white background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#fbfffa_100%)]" />

      {/* Subtle dotted pattern */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(circle,#84cc16_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Premium Moving Aurora Background */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 -top-32 h-[700px] w-[700px] rounded-full bg-blue-500/15 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 -left-40 h-[800px] w-[800px] rounded-full bg-lime-400/15 blur-[180px]"
      />

      <motion.div
        animate={{
          rotate: [0, 20, 0],
          x: [0, 60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-0 h-full w-[500px] bg-gradient-to-b from-lime-400/20 via-transparent to-transparent blur-[120px]"
      />

      <motion.div
        animate={{
          rotate: [0, -15, 0],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 h-full w-[450px] bg-gradient-to-t from-blue-500/15 via-transparent to-transparent blur-[120px]"
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            opacity: [0.15, 0.75, 0.15],
          }}
          transition={{
            duration: 4 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.35,
            ease: "easeInOut",
          }}
          className="absolute h-2 w-2 rounded-full bg-lime-400/50"
          style={{
            left: `${10 + i * 7}%`,
            top: `${20 + (i % 5) * 15}%`,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-[1800px] px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.2fr_0.95fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="text-sm font-bold tracking-[0.4em] text-lime-600">
                ABOUT US
              </span>
              <span className="h-[2px] w-24 bg-gradient-to-r from-lime-500 to-blue-500" />
            </div>

            <h2 className="w-[400px] text-5xl font-extrabold leading-[1.08] text-slate-900">
              Driven by Purpose.
              <br />
              <span className="text-lime-600">Built for Impact.</span>
            </h2>

            <p className="mt-7 max-w-[430px] text-[17px] leading-8 text-slate-600">
              Since 2007, Heights Communications has been a trusted partner for
              brands that want to be seen, heard, and remembered. We blend
              creativity, strategy, and execution to build powerful campaigns
              that deliver real results.
            </p>

            <div className="mt-8 h-[3px] w-20 bg-lime-500" />

            <div className="mt-8 space-y-6">
              {purposeItems.map((item, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border ${item.border} ${item.bg} ${item.color} text-2xl shadow-[0_12px_30px_rgba(15,23,42,0.08)]`}
                  >
                    {item.icon}
                  </div>

                  <div className="max-w-[360px]">
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
            className="relative flex min-h-[610px] items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-[70px] h-[440px] w-[440px] rounded-full border border-lime-400/20"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
              className="absolute top-[110px] h-[360px] w-[360px] rounded-full border border-lime-400/30"
            />

            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.75, 0.35] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[330px] w-[330px] rounded-full bg-gradient-to-r from-blue-500/15 via-lime-500/25 to-blue-500/10 blur-[85px]"
            />

            <span className="absolute top-[83px] text-sm font-extrabold text-lime-600">
              STRATEGY
            </span>
            <span className="absolute left-[42px] top-[270px] text-sm font-extrabold text-blue-600">
              IDEA
            </span>
            <span className="absolute right-[34px] top-[270px] text-sm font-extrabold text-lime-600">
              CREATIVE
            </span>
            <span className="absolute bottom-[155px] left-[72px] text-sm font-extrabold text-blue-600">
              EXECUTION
            </span>
            <span className="absolute bottom-[155px] right-[75px] text-sm font-extrabold text-purple-600">
              RESULTS
            </span>

            <div className="absolute top-[125px] h-4 w-4 rounded-full bg-lime-500 shadow-[0_0_28px_#84cc16]" />
            <div className="absolute left-[88px] top-[292px] h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_28px_#3b82f6]" />
            <div className="absolute right-[92px] top-[292px] h-4 w-4 rounded-full bg-lime-500 shadow-[0_0_28px_#84cc16]" />
            <div className="absolute bottom-[195px] left-[115px] h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_28px_#3b82f6]" />
            <div className="absolute bottom-[195px] right-[125px] h-4 w-4 rounded-full bg-purple-500 shadow-[0_0_28px_#a855f7]" />

            <div className="relative z-10 flex flex-col items-center">
              <img
                src="/logo.svg"
                alt="Heights Communications"
                className="mt-4 w-[340px] drop-shadow-[0_0_35px_rgba(132,204,22,0.25)]"
              />

              <div className="mt-6 h-[82px] w-[450px] rounded-[50%] bg-gradient-to-r from-blue-500/10 via-lime-400/20 to-blue-500/10 shadow-[0_25px_60px_rgba(132,204,22,0.18)] ring-1 ring-lime-400/20" />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {cards.map((card, index) => {
              const theme = colorMap[card.color];

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className={`relative min-h-[132px] rounded-[24px] border ${theme.border} bg-white/90 p-7 backdrop-blur-xl ${theme.glow}`}
                >
                  <div className="absolute left-[-70px] top-1/2 hidden h-px w-16 bg-gradient-to-r from-transparent to-slate-300 lg:block" />
                  <div
                    className={`absolute left-[-76px] top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full ${theme.dot} lg:block`}
                  />

                  <div className="flex items-center gap-6">
                    <div
                      className={`flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border ${theme.border} ${theme.text} text-3xl`}
                    >
                      {card.icon}
                    </div>

                    <div className="pr-5">
                      <h3 className={`text-xl font-extrabold ${theme.text}`}>
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