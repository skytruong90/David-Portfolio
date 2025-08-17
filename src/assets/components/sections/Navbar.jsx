import { useEffect } from "react";
import { animate, press } from "motion";

// Use Vite's base URL so links work both locally and on GitHub Pages
const RESUME_URL = `${import.meta.env.BASE_URL}Resume_David.pdf`;

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Click/press micro-interaction on nav links
  useEffect(() => {
    const cleanup = press("nav a", (el) => {
      animate(el, { scale: 0.95 }, { type: "spring", stiffness: 600 });
      return () =>
        animate(el, { scale: 1 }, { type: "spring", stiffness: 400 });
    });
    return () => cleanup();
  }, []);

  const navLinks = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT", href: "#contact" },
    { label: "RESUME", href: RESUME_URL }, // ✅ base-path aware resume link
  ];

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10 shadow-md"
      role="navigation"
      aria-label="Main"
      style={{ fontFamily: "Orbitron, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono font-bold text-white text-xl md:text-3xl tracking-tight"
            aria-label="Go to home"
          >
            {"{ "}David <span className="text-blue-500">.Tan{" }"}</span>
          </a>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            className="relative w-8 h-6 flex flex-col justify-between items-center cursor-pointer z-50 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            <span
              className={`block h-[2px] w-full bg-white transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-[9px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-white transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
            />
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/90 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black/95 flex flex-col items-center py-8 space-y-6 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white text-lg hover:text-blue-400 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

