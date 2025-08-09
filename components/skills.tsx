"use client";

import { motion } from "framer-motion";

type SkillGroup = {
  title: string;
  items: string[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "C++", "HTML", "CSS"],
  },
  {
    title: "Libraries & Frameworks",
    items: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js"],
  },
  {
    title: "Database & ORMs",
    items: ["PostgreSQL", "MongoDB", "Mongoose", "Prisma"],
  },
  {
    title: "Technologies & Tools",
    items: [
      "WebSockets",
      "Git & GitHub",
      "Docker",
      "AWS",
      "TanStack Query",
      "Clerk",
      "Turborepo",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Skills
        </motion.h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm"
            >
              <h3 className="text-sm font-medium uppercase tracking-wide text-white/70">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 