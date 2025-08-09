import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";
import SectionDivider from "./(components)/section-divider";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Contact />
      </main>
      <footer className="mt-10 border-t border-white/10 py-10 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Aditya Raj. All rights reserved.
      </footer>
    </div>
  );
}
