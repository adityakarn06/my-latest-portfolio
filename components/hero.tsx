"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">Portfolio</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Aditya Raj – <span className="text-white/80">Full Stack Developer & UI/UX Designer</span>
          </h1>
          <p className="mt-6 text-lg text-white/70">
            Building impactful digital experiences with code and design.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-white/10 transition hover:bg-white/20"
            >
              Get in touch
            </a>
            <a
              href="mailto:adityakarn06@gmail.com"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-transparent px-5 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition"
            >
              Email me
            </a>
          </div>
        </motion.div>
      </div>
      <DecorativeGlow />
    </section>
  );
}

function DecorativeGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-fuchsia-500/10 via-indigo-500/10 to-cyan-400/10 blur-3xl" />
    </div>
  );
} 