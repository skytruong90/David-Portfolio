import { useState } from "react";

// Sections / components (named exports)
import { Navbar } from "./assets/components/sections/Navbar";
import { MobileMenu } from "./assets/components/sections/MobileMenu";
import { Home } from "./assets/components/sections/Home";
import { About } from "./assets/components/sections/About";
import { Skills } from "./assets/components/sections/Skills";
import { Projects } from "./assets/components/sections/Projects";
import { Contacts } from "./assets/components/sections/Contacts";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="pt-16">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </main>
    </>
  );
}

