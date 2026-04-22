import { Code2, Layers, Rocket } from "lucide-react";
import FloatingTech from "./FloatingTech";

const features = [
  {
    icon: Code2,
    cmd: "lint --strict",
    title: "Clean, scalable code",
    text: "Reusable components, typed contracts, and patterns that grow with the product.",
  },
  {
    icon: Layers,
    cmd: "build:design-system",
    title: "Design-systems mindset",
    text: "Pixel-perfect translation of Figma into accessible, themeable UI.",
  },
  {
    icon: Rocket,
    cmd: "ship --fast",
    title: "Performance first",
    text: "Optimizing for real users — fast loads, smooth interactions, low bundle weight.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <FloatingTech
        items={[
          {
            name: "react",
            label: "React",
            top: "10%",
            right: "4%",
            anim: "tilt",
            delay: "0s",
          },
          {
            name: "typescript",
            label: "TS",
            top: "75%",
            left: "3%",
            anim: "slow",
            delay: "1s",
            hideMobile: true,
          },
          {
            name: "tailwind",
            label: "Tailwind",
            top: "85%",
            right: "8%",
            anim: "rev",
            delay: "2s",
            hideMobile: true,
          },
        ]}
      />
      <div className="container relative">
        <div className="grid items-start gap-12 md:grid-cols-12 reveal">
          <div className="md:col-span-5">
            <span className="chip">
              <span className="text-neon">$</span> cat ./about.md
            </span>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">
              Frontend dev
              <br />
              with a{" "}
              <span className="font-sans-accent italic font-light text-neon-soft">
                product
              </span>{" "}
              brain<span className="text-neon">.</span>
            </h2>
          </div>

          <div className="md:col-span-7">
            <div className="term-window">
              <div className="term-bar">
                <span className="term-dot bg-destructive" />
                <span className="term-dot bg-warning/90" />
                <span className="term-dot bg-neon" />
                <span className="ml-2 font-mono text-[11px] text-foreground/50">
                  about.md
                </span>
              </div>
              <div className="px-6 py-6 font-mono text-[15px] leading-relaxed text-foreground/80 space-y-4">
                <p>
                  <span className="text-neon">▸</span> I'm{" "}
                  <span className="text-neon-glow">
                    frontend focused Full Stack Developer
                  </span>{" "}
                  with over 1.5 years of experience building scalable and
                  user-centered web applications. I specialize in creating
                  intuitive interfaces and connecting them with reliable backend
                  systems to deliver seamless end-to-end solutions.
                </p>
                <p>
                  <span className="text-neon">▸</span>        I’ve worked on real-world products including dashboards, admin
                  panels, KDS, POS Inventory management systems, where I focused on performance,
                  usability, and maintainable architecture. My experience
                  includes developing APIs, managing databases, and deploying
                  production-ready applications.
                </p>
                <p>
                  <span className="text-neon">▸</span>
                 I enjoy solving practical problems, writing clean and
                  efficient code, and continuously improving my backend skills
                  to become a more well-rounded engineer.
                </p>
                <div className="pt-4">
                  <a
                    href="/assets/laiba.pdf"
                    download="laiba.pdf"
                    className="inline-flex items-center gap-2 rounded-md border border-neon/30 bg-background px-4 py-2 font-mono text-xs text-neon-glow transition-all hover:border-neon hover:shadow-[0_0_15px_rgba(5,255,161,0.2)]"
                  >
                    <span>./download-cv.sh</span>
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-reveal-delay={i * 100}
              className="card-soft p-7 group reveal relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-md border border-neon/30 bg-background text-neon-glow transition-colors group-hover:border-neon group-hover:text-neon">
                  <f.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-[10px] text-neon-glow/60">
                  $ {f.cmd}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl">{f.title}</h3>
              <p className="mt-3 font-sans-accent text-foreground/65 leading-relaxed">
                {f.text}
              </p>
              <div className="mt-5 flex items-center gap-2 font-mono text-[11px] text-neon/70">
                <span className="h-1 w-1 rounded-full bg-neon" />
                process exited 0
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
