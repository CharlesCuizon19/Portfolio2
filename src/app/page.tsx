"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const NAV_HEIGHT = 80;

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
      const progressBar = document.getElementById("scroll-progress");
      if (progressBar) progressBar.style.width = pct + "%";

      const scrollY = window.scrollY + NAV_HEIGHT + 10;
      const sections = document.querySelectorAll("header[id], section[id], footer[id]");

      let current = sections[0]?.id || "hero";
      sections.forEach((sec) => {
        if ((sec as HTMLElement).offsetTop <= scrollY) {
          current = sec.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="scroll-progress" className="fixed top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-primary to-secondary z-[100] transition-[width] duration-100 ease-linear"></div>
      <Navbar activeSection={activeSection} />
      <Hero />
      <Summary />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}
