"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  name: string;
  description: string;
  stack: string[];
  live?: string;
  repo?: string;
};

const PERSONAL: Project[] = [
  {
    name: "Edwise",
    description:
      "AI-powered learning platform with Chat with PDF, MCQ generator, study groups, and centralized video library.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Gemini", "Qdrant", "langchain", "Postgres", "Prisma", "Tanstack Query", "Shadcn UI", "Node.js", "Express", "Socket.io", "Turborepo"],
    live: "https://edwise.adityakarn.tech",
    repo: "https://github.com/adityakarn06/edwise",
  },
  {
    name: "Collaborative Canvas App",
    description:
      "Realtime whiteboard built from scratch with video calling and chat.",
    stack: ["NextJS", "WebRTC", "WebSockets", "Node.js", "Postgres", "Prisma", "Tanstack Query", "Tailwind", "Turborepo"],
    live: "https://canvas.adityakarn.tech",
    repo: "https://github.com/adityakarn06/collaborative-drawing-app",
  },
  {
    name: "Heyycutie",
    description: "Online dating app.",
    stack: ["React Native", "Firebase", "In progress"],
    live: "https://heyycutie.com",
  },
];

const FREELANCE: Project[] = [
  {
    name: "Vessara",
    description: "E-commerce app for a jewellery brand.",
    stack: ["Next.js", "Razorpay", "PostgreSQL", "Prisma", "Tanstack Query", "Tailwind", "Cloudinary", "AWS", "Clerk"],
    live: "https://vessara.co.in",
  },
  {
    name: "Mithilangan",
    description: "Online shopping app for Mithila paintings.",
    stack: ["NextJS", "Express", "PostgreSQL", "In progress"],
    live: "https://mithilangan.in",
  },
];

export default function Projects() {
  const [tab, setTab] = useState<"personal" | "freelance">("personal");
  const projects = tab === "personal" ? PERSONAL : FREELANCE;

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Projects
        </motion.h2>

        <div className="mt-6 inline-flex rounded-lg border border-white/10 bg-black/40 p-1 text-white/80">
          <button
            onClick={() => setTab("personal")}
            className={`rounded-md px-3 py-1.5 text-sm transition ${
              tab === "personal" ? "bg-white/10 text-white" : "hover:bg-white/5"
            }`}
          >
            Personal Projects
          </button>
          <button
            onClick={() => setTab("freelance")}
            className={`rounded-md px-3 py-1.5 text-sm transition ${
              tab === "freelance" ? "bg-white/10 text-white" : "hover:bg-white/5"
            }`}
          >
            Freelance Projects
          </button>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((p) => (
              <article
                key={p.name}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 text-white/80 shadow-sm transition hover:bg-white/10"
              >
                <h3 className="text-base font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-md bg-black/30 px-2 py-1 text-xs text-white/70">
                      {s}
                    </span>
                  ))}
                </div>
                {(p.live || p.repo) && (
                  <div className="mt-4 flex items-center gap-3">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-transparent px-2.5 py-1.5 text-xs text-white/80 hover:text-white hover:bg-white/5"
                      >
                        <ExternalLink size={14} /> Live
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-transparent px-2.5 py-1.5 text-xs text-white/80 hover:text-white hover:bg-white/5"
                      >
                        <Github size={14} /> Code
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
} 