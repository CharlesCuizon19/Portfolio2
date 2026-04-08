"use client";

import { useTheme } from "next-themes";
import { MouseEvent } from "react";

const NAV_HEIGHT = 80;

export default function Navbar({ activeSection }: { activeSection: string }) {
  const { theme, setTheme } = useTheme();

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;

    // Ripple effect
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    btn.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());

    const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top, behavior: "smooth" });

    setTimeout(() => {
      target.classList.add("section-highlight");
      target.addEventListener("animationend", () => target.classList.remove("section-highlight"), { once: true });
    }, 600);
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-200 dark:border-slate-800/50 bg-bg-light/80 dark:bg-bg-dark/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-display font-extrabold tracking-tight text-primary">
          CABC<span className="text-secondary">.</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 font-medium">
          {["home", "skills", "projects"].map((id) => (
            <a
              key={id}
              className={`nav-link hover:text-secondary ${activeSection === id ? "active" : ""}`}
              href={`#${id}`}
              onClick={(e) => handleLinkClick(e, id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
        {/* <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined block dark:hidden">dark_mode</span>
            <span className="material-symbols-outlined hidden dark:block">light_mode</span>
          </button>
        </div> */}
      </div>
    </nav>
  );
}
