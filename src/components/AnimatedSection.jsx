"use client";

import { motion } from "framer-motion";

export default function AnimatedSection({ children, className = "", delay = 0, ...props }) {
  return (
    <motion.section
      className={className}
      {...props}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
