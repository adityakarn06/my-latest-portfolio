"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { FormEvent } from "react";

export default function Contact() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };
    const subject = encodeURIComponent(`Portfolio contact from ${form.name.value}`);
    const body = encodeURIComponent(`${form.message.value}\n\n— ${form.name.value} (${form.email.value})`);
    window.location.href = `mailto:adityakarn06@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Contact
        </motion.h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm">
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="text-sm text-white/70">Name</label>
                <input id="name" name="name" required className="mt-1 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-white/70">Email</label>
                <input id="email" type="email" name="email" required className="mt-1 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="adityakarn06@gmail.com" />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-white/70">Message</label>
                <textarea id="message" name="message" required rows={4} className="mt-1 w-full resize-none rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="How can I help?" />
              </div>
            </div>
            <div className="mt-5">
              <button type="submit" className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-medium text-white shadow-sm ring-1 ring-white/10 transition hover:bg-white/20">
                Send email
              </button>
            </div>
          </form>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-white/75">
            <p className="text-sm">Prefer socials?</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://github.com/adityakarn06" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm hover:bg-black/40">
                <Github size={16} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/adityakarn06/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm hover:bg-black/40">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://www.instagram.com/karnadityaa/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm hover:bg-black/40">
                <Instagram size={16} /> Instagram
              </a>
              <a href="https://x.com/adityakarn06" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm hover:bg-black/40">
                <Twitter size={16} /> Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 