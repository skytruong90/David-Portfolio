import { useEffect } from "react";
import { animate, inView, spring } from "motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Use Vite base so it works on GitHub Pages (/David-Portfolio/)
const RESUME_URL = `${import.meta.env.BASE_URL}Resume_David.pdf`;

// ✅ Named export to match: import { Home } from "./assets/components/sections/Home";
export const Home = () => {
  useEffect(() => {
    const section = document.getElementById("home");
    if (!section) return;

    const stop = inView(section, () => {
      const headline = section.querySelector("[data-hero=headline]");
      const welcome = section.querySelector("[data-hero=welcome]");
      const sub = section.querySelector("[data-hero=sub]");
      const ctas = section.querySelectorAll("[data-hero=cta]");
      const socials = section.querySelectorAll("[data-hero=social]");

      headline &&
        animate(
          headline,
          { opacity: [0, 1], y: [24, 0] },
          { duration: 0.7, easing: "ease-out" }
        );

      welcome &&
        animate(
          welcome,
          { opacity: [0, 1], y: [20, 0] },
          { duration: 0.6, delay: 0.1 }
        );

      sub &&
        animate(sub, { opacity: [0, 1], y: [18, 0] }, { duration: 0.6, delay: 0.2 });

      ctas.length &&
        animate(
          ctas,
          { opacity: [0, 1], y: [18, 0] },
          { duration: 0.5, delay: 0.3, stagger: 0.08 }
        );

      socials.length &&
        animate(
          socials,
          { opacity: [0, 1], y: [12, 0] },
          { duration: 0.45, delay: 0.4, stagger: 0.06 }
        );
    });

    return () => stop && stop();
  }, []);

  const hoverLift = (el) =>
    animate(
      el,
      { y: -3, scale: 1.02 },
      { duration: 0.18, easing: spring({ stiffness: 700, damping: 28 }) }
    );
  const hoverDrop = (el) =>
    animate(
      el,
      { y: 0, scale: 1 },
      { duration: 0.18, easing: spring({ stiffness: 700, damping: 28 }) }
    );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
      style={{ fontFamily: "Orbitron, sans-serif" }}
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-32 opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(60rem 60rem at 50% 40%, rgba(37,99,235,0.25), transparent 55%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute w-[52rem] h-[52rem] rounded-full border border-white/10 left-1/2 -translate-x-1/2 -top-40"
        style={{
          boxShadow:
            "0 0 40px 6px rgba(59,130,246,0.15), inset 0 0 60px rgba(59,130,246,0.05)",
          animation: "spin 22s linear infinite",
        }}
      />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>

      <div className="relative z-10 max-w-5xl w-full px-6 text-center">
        <h1
          data-hero="headline"
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
        >
          Hi! I'm <span className="text-blue-500">David Tan</span>
        </h1>

        {/* 👋 Welcome line */}
        <p
          data-hero="welcome"
          className="mt-2 text-sm md:text-base text-blue-400 uppercase tracking-wide"
        >
          👋 Welcome to my portfolio
        </p>

        <p
          data-hero="sub"
          className="mt-4 text-base md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Software &amp; DevOps Engineer — I build fast, reliable systems and sleek UIs.
          Kubernetes, CI/CD, Git wizardry, and performance-minded React.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            data-hero="cta"
            href="#projects"
            onMouseEnter={(e) => hoverLift(e.currentTarget)}
            onMouseLeave={(e) => hoverDrop(e.currentTarget)}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
          >
            View Projects
          </a>

          <a
            data-hero="cta"
            href={RESUME_URL}
            onMouseEnter={(e) => hoverLift(e.currentTarget)}
            onMouseLeave={(e) => hoverDrop(e.currentTarget)}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg_white/15 border border-white/15 transition-colors"
            download
          >
            Download Resume
          </a>

          <a
            data-hero="cta"
            href="#contact"
            onMouseEnter={(e) => hoverLift(e.currentTarget)}
            onMouseLeave={(e) => hoverDrop(e.currentTarget)}
            className="px-6 py-3 rounded-xl bg-transparent hover:bg-white/10 border border-white/15 transition-colors"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5">
          <a
            data-hero="social"
            href="mailto:your.email@example.com"
            aria-label="Email"
            className="text-white/80 hover:text-white transition-colors"
            onMouseEnter={(e) => hoverLift(e.currentTarget)}
            onMouseLeave={(e) => hoverDrop(e.currentTarget)}
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
          </a>
          <a
            data-hero="social"
            href="https://github.com/skytruong90"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-white/80 hover:text-white transition-colors"
            onMouseEnter={(e) => hoverLift(e.currentTarget)}
            onMouseLeave={(e) => hoverDrop(e.currentTarget)}
          >
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
          </a>
          <a
            data-hero="social"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-white/80 hover:text-white transition-colors"
            onMouseEnter={(e) => hoverLift(e.currentTarget)}
            onMouseLeave={(e) => hoverDrop(e.currentTarget)}
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
          </a>
        </div>

        <div className="mt-10 h-px w-40 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
};

