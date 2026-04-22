import { useState } from "react";
import { ChevronRight, Building2, Calendar, ArrowUpRight } from "lucide-react";
import FloatingTech from "./FloatingTech";

type Role = {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  stack: string[];
  points: string[];
};

const roles: Role[] = [
  {
    role: "Junior Fullstack Developer",
    company: "dedev.co",
    period: "Jul 2025 — Present",
    location: "Remote",
    type: "Full-time",
    stack: ["React", "Redux", "Zustand", "Node.js", "Express", "MongoDB", "MySQL", "Prisma"],
    points: [
      "Building scalable dashboards with React, Redux & Zustand",
      "Designing secure REST APIs in Node.js + Express",
      "Working across MongoDB, MySQL & Prisma",
      "Owning end-to-end feature delivery from spec to ship",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Teams.pk",
    period: "Sep 2024 — Jun 2025",
    location: "Lahore, PK",
    type: "Full-time",
    stack: ["Vue.js", "Pinia", "Tailwind", "Axios", "REST"],
    points: [
      "Rebuilt POS & KDS UI with Vue.js + Tailwind",
      "Created reusable, modular Vue components",
      "Integrated REST APIs with Axios + Pinia",
      "Collaborated with design to pixel-perfect spec",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Teams.pk",
    period: "Jun 2024 — Sep 2024",
    location: "Lahore, PK",
    type: "Internship",
    stack: ["HTML", "CSS", "JavaScript", "Vue.js", "Git"],
    points: [
      "Built responsive UI with HTML/CSS/JS + Vue",
      "Converted Figma designs to pixel-perfect interfaces",
      "Collaborated using Git in an Agile team",
    ],
  },
];

const Experience = () => {
  const [active, setActive] = useState(0);
  const r = roles[active];

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      <FloatingTech
        items={[
          { name: "node", label: "Node", top: "12%", left: "3%", anim: "slow", delay: "0s", hideMobile: true },
          { name: "vue", label: "Vue", top: "65%", right: "4%", anim: "tilt", delay: "1.5s" },
          { name: "git", label: "Git", top: "85%", left: "8%", anim: "rev", delay: "2s", hideMobile: true },
        ]}
      />

      <div className="container relative">
        <div className="flex flex-wrap items-end justify-between gap-6 reveal">
          <div>
            <span className="chip">
              <span className="text-neon">$</span> history --career
            </span>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">
              system <span className="font-sans-accent italic text-neon-soft">.log</span>
              <span className="text-neon">_</span>
            </h2>
            <p className="mt-4 font-sans-accent text-foreground/65 max-w-lg">
              A short timeline of where I've shipped, what I've built, and the stack I used.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="/public/assets/laiba.pdf"
                download="laiba.pdf"
                className="flex items-center gap-2 rounded-full border border-neon/50 bg-neon/10 px-6 py-2.5 font-grotesk text-sm text-neon-glow transition-all hover:bg-neon hover:text-background"
              >
                <ArrowUpRight className="h-4 w-4 rotate-90" />
                Download CV
              </a>
            </div>
          </div>
          <div className="font-mono text-xs text-foreground/50">
            <span className="text-neon-glow">{roles.length}</span> entries · sorted desc
          </div>
        </div>

        {/* Tabs + Detail */}
        <div className="mt-12 reveal grid gap-6 lg:grid-cols-12">
          {/* Tabs */}
          <div className="lg:col-span-4">
            <div className="term-window">
              <div className="term-bar">
                <span className="term-dot bg-destructive" />
                <span className="term-dot bg-warning/90" />
                <span className="term-dot bg-neon" />
                <span className="ml-2 font-mono text-[11px] text-foreground/50">~/career.log</span>
              </div>
              <div className="py-16 px-5">
                {roles.map((role, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={role.role + role.period}
                      onMouseEnter={() => setActive(i)}
                      className={`group flex w-full items-start gap-3 rounded-md border p-4 text-left font-mono transition-all ${
                        isActive
                          ? "border-neon/60 bg-neon/5 shadow-[inset_2px_0_0_0_hsl(var(--neon))]"
                          : "border-transparent hover:border-neon/30 hover:bg-neon/5"
                      }`}
                    >
                      <ChevronRight
                        className={`h-4 w-4 mt-0.5 shrink-0 transition-all ${
                          isActive ? "text-neon translate-x-0.5" : "text-foreground/40"
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-neon-glow/70">
                          [{String(i + 1).padStart(2, "0")}] {role.type}
                        </p>
                        <p className={`mt-1 text-sm leading-tight ${isActive ? "text-foreground" : "text-foreground/75"}`}>
                          {role.role}
                        </p>
                        <p className="text-[11px] text-foreground/50 mt-0.5">
                          @ {role.company} · {role.period.split(" — ")[0]}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Detail */}
          <div className="lg:col-span-8">
            <div className="card-soft p-7 md:p-9 relative overflow-hidden">
              {/* scan line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-b from-neon/40 to-transparent animate-scan" />

              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neon-glow">
                    [{String(active + 1).padStart(2, "0")} / {String(roles.length).padStart(2, "0")}]
                    {" · "}{r.type}
                  </p>
                  <h3 className="mt-2 font-display text-3xl md:text-4xl leading-tight">
                    {r.role}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-sm text-foreground/70">
                    <span className="inline-flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5 text-neon" />
                      <span className="text-neon-glow">@{r.company}</span>
                    </span>
                    <span className="text-foreground/30">·</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-neon" />
                      {r.period}
                    </span>
                    <span className="text-foreground/30">·</span>
                    <span>{r.location}</span>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-neon-glow/60" />
              </div>

              <div className="divider-glow my-6" />

              <ul className="grid gap-3 font-mono text-sm">
                {r.points.map((p) => (
                  <li key={p} className="flex gap-3 text-foreground/80 leading-relaxed">
                    <span className="text-neon mt-0.5 shrink-0">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/50">
                  // stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {r.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-neon/25 bg-neon/5 px-3 py-1 font-mono text-xs text-neon-glow"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
