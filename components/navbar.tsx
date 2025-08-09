"use client";

import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-2.5 text-sm text-white/80 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <Link href="#home" className="font-semibold tracking-tight text-white">
            Aditya Raj
          </Link>
          <nav className="hidden gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
} 