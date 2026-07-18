import { MotionConfig } from "framer-motion";
import { About } from "./components/sections/About";
import { Achievements } from "./components/sections/Achievements";
import { Contact } from "./components/sections/Contact";
import { Experience } from "./components/sections/Experience";
import { FeaturedWork } from "./components/sections/FeaturedWork";
import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { Nav } from "./components/sections/Nav";
import { Skills } from "./components/sections/Skills";
import { CustomCursor } from "./components/ui/CustomCursor";
import { GrainOverlay } from "./components/ui/GrainOverlay";
import { Preloader } from "./components/ui/Preloader";
import { ScrollProgress } from "./components/ui/ScrollProgress";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        <Preloader />
        <GrainOverlay />
        <CustomCursor />
        <ScrollProgress />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-paper"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content">
          <Hero />
          <About />
          <Experience />
          <FeaturedWork />
          <Skills />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
