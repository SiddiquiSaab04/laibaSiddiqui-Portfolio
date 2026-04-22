import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { TechIcon, type TechName } from "./TechIcons";

const navLinks = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "work" },
  { href: "#experience", label: "experience" },
  { href: "#skills", label: "stack" },
  { href: "#contact", label: "contact" },
];

const stack: TechName[] = ["react", "typescript", "tailwind", "vue", "node", "mongo", "next", "git"];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-12 border-t border-neon/15 bg-background/60 backdrop-blur-xl">
      <div className="container py-14">
        {/* terminal status bar */}
        <div className="mb-10 flex flex-wrap items-center gap-3 font-mono text-[11px] text-foreground/55  rounded-md px-3 py-2">
          <a
            href="#top"
            className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-neon/30 px-2.5 py-1 text-neon-glow hover:border-neon hover:bg-neon/5 transition-colors"
          >
            <ArrowUp className="h-3 w-3" /> back to top
          </a>
        </div>

        <div className=" gap-10 flex flex-wrap justify-between">
          {/* Brand */}
          <div className="">
            <a href="#top" className="inline-flex items-center gap-2 font-mono text-base">
              <span className="text-neon-glow">~/</span>
              <span>laiba.dev</span>
              <span className="text-neon animate-blink">_</span>
            </a>
            <p className="mt-5 font-sans-accent text-foreground/65 max-w-sm leading-relaxed">
              Frontend developer crafting alive web experiences with React, Next.js, Vue & TypeScript.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://github.com/SiddiquiSaab04"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-md border border-border bg-card/60 text-foreground/70 hover:text-neon-glow hover:border-neon/50 transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/laiba-siddiqui-29408a265/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-md border border-border bg-card/60 text-foreground/70 hover:text-neon-glow hover:border-neon/50 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:devlaiba04@gmail.com"
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-md border border-border bg-card/60 text-foreground/70 hover:text-neon-glow hover:border-neon/50 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div className="">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neon-glow/70">
              // sitemap
            </p>
            <ul className="mt-5 space-y-2.5 font-mono text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-foreground/70 hover:text-neon-glow transition-colors"
                  >
                    <span className="text-neon/50 group-hover:text-neon">$</span>
                    cd ./{l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
