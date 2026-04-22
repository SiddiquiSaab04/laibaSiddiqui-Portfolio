import { useEffect } from "react";
import BackgroundScene from "@/components/portfolio/BackgroundScene";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import Cursor from "@/components/portfolio/Cursor";
import RecruiterCommandBar from "@/components/portfolio/RecruiterCommandBar";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  const ref = useReveal<HTMLDivElement>();

  useEffect(() => {
    document.title = "Laiba Siddiqui — Frontend Developer Portfolio";
    const desc =
      "Portfolio of Laiba Siddiqui, a frontend developer building vibrant, responsive web apps with React, Next.js, Vue and TypeScript.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <div ref={ref} className="relative min-h-screen">
      <BackgroundScene />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <RecruiterCommandBar />
    </div>
  );
};

export default Index;
