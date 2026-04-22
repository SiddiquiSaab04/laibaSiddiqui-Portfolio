import { useEffect, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import FloatingTech from "./FloatingTech";

const COMMANDS = [
  "whoami",
  "cat about.md",
  "ls ./projects",
  "npm run build --prod",
];

const Hero = () => {
  const [cmdIdx, setCmdIdx] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const cmd = COMMANDS[cmdIdx];
    if (typed.length < cmd.length) {
      const t = setTimeout(() => setTyped(cmd.slice(0, typed.length + 1)), 70);
      return () => clearTimeout(t);
    }
    const hold = setTimeout(() => {
      setTyped("");
      setCmdIdx((i) => (i + 1) % COMMANDS.length);
    }, 1800);
    return () => clearTimeout(hold);
  }, [typed, cmdIdx]);

  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <FloatingTech density="high" />

      <div className="container relative">
        <div className="mx-auto max-w-5xl text-center ">
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-neon animate-neon-pulse" />
            <span className="text-neon-glow">$</span> status: available_for_hire
          </span>

          <h1 className="mt-8 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-[7.5rem] capitalize">
            <span className="block text-foreground/95">Code <span className="text-neon animate-neon-pulse">{"build"}</span></span>
            <span className="block">
              <span className="text-neon animate-neon-pulse">{"scale"}</span>
              <span className="font-sans-accent italic font-light text-foreground/85"> repeat </span>
            </span>
          </h1>

          <p className="mx-auto mt-10 max-w-2xl font-sans-accent text-lg text-foreground/65 md:text-xl leading-relaxed">
            Hi, I'm <span className="text-neon-glow font-mono font-medium">Laiba Siddiqui</span> a frontend-focused full-stack developer delivering reliable and user-centered web applications.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#projects" className="btn-primary">
              <span className="text-background/80">$</span> view --work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              ./contact.sh
            </a>
          </div>

          {/* Live terminal preview */}
          <div className="mx-auto mt-14 max-w-2xl text-left">
            <div className="term-window">
              <div className="term-bar">
                <span className="term-dot bg-destructive" />
                <span className="term-dot bg-warning/90" />
                <span className="term-dot bg-neon" />
                <span className="ml-2 font-mono text-[11px] text-foreground/50">
                  laiba@portfolio: ~/now
                </span>
                <span className="ml-auto font-mono text-[10px] text-neon-glow/70 hidden sm:inline">
                  zsh — 80×24
                </span>
              </div>
              <div className="px-5 py-4 font-mono text-sm leading-relaxed">
                <p className="text-foreground/60">
                  <span className="text-neon">➜</span>{" "}
                  <span className="text-neon-glow">~/laiba</span>{" "}
                  <span className="text-foreground/40">git:(</span>
                  <span className="text-neon-coral">main</span>
                  <span className="text-foreground/40">)</span>
                </p>
                <p className="mt-1">
                  <span className="text-neon">$</span> {typed}
                  <span className="inline-block h-4 w-[8px] ml-0.5 -mb-0.5 bg-neon animate-blink" />
                </p>
                <p className="mt-3 text-foreground/70 text-xs">
                  <Sparkles className="inline h-3 w-3 text-neon-glow mr-1" />
                  shipping at <span className="text-neon-glow">dedev.co</span> · open to freelance & full-time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
