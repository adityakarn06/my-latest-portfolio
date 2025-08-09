"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-6 max-w-3xl text-balance text-lg leading-relaxed text-white/75"
        >
          I’m Aditya Raj, Full Stack developer and UI/UX designer with a thing for clean code and beautiful interfaces. I build apps that don’t just work, they feel good to use. My projects range from e-commerce stores and event apps to community-driven platforms, handling everything from backend logic to polished front-end design.

          I work with JavaScript, TypeScript, React, Next.js, Tailwind, Node.js, Express, PostgreSQL, MongoDB, and Prisma, and I design in Figma like it’s second nature.

          Always looking for the next challenge worth building. I value minimalism, accessibility, and clear visual hierarchy, shipping with care from concept to production.
        </motion.p>
      </div>
    </section>
  );
} 