import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  url: string;
  displayUrl: string;
  tags: string[];
  bg: string;
  status?: string;
};

const projects: Project[] = [
  {
    title: "KwiikPay",
    description:
      "Modern fintech platform for fast, secure payments. Built the marketing site & product UI with a focus on trust and clarity.",
    url: "https://kwiikpay.io/",
    displayUrl: "kwiikpay.io",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    bg: "bg-primary-soft",
  },
  {
    title: "Snoo News",
    description:
      "A clean, fast news reader experience. Component-driven UI with smooth navigation and great readability.",
    url: "https://snoonews.vercel.app/",
    displayUrl: "snoonews.vercel.app",
    tags: ["React", "Vite", "Tailwind"],
    bg: "bg-secondary-soft",
  },
  {
    title: "BeatYou",
    description:
      "Wellness & habit-tracking web app — engaging visual language, motion, and a friendly, motivating UX.",
    url: "https://beatyou.app/",
    displayUrl: "beatyou.app",
    tags: ["Next.js", "Animation", "UI/UX"],
    bg: "bg-accent-soft",
  },
  {
    title: "Touri",
    description:
      "Currently working on a scalable admin dashboard with rich data tables, auth, and role-based access.",
    url: "https://main.dlu1p384goa9z.amplifyapp.com/",
    displayUrl: "main.dlu1p384goa9z.amplifyapp.com",
    tags: ["React", "Redux", "AWS Amplify"],
    bg: "bg-primary-soft",
    status: "Working on",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6 reveal">
          <div>
            <span className="chip">selected work</span>
            <h2 className="mt-6 font-serif-display text-5xl leading-[1.05] md:text-6xl">
              Projects I'm <span className="italic text-neon-soft">proud</span> of.
            </h2>
          </div>
          <p className="max-w-md text-foreground/70">
            A handful of products I've designed and developed — from fintech to news to wellness.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer noopener"
              data-reveal-delay={i * 80}
              className={`card-3d group relative overflow-hidden p-7 md:p-8 reveal ${p.bg}`}
            >
              {/* Browser-style preview frame */}
              <div className="rounded-2xl border-2 border-foreground bg-card overflow-hidden shadow-[3px_3px_0_0_hsl(var(--foreground))]">
                <div className="flex items-center gap-1.5 border-b-2 border-foreground bg-muted px-3 py-2">
                  <span className="h-3 w-3 rounded-full border border-foreground bg-destructive" />
                  <span className="h-3 w-3 rounded-full border border-foreground bg-accent" />
                  <span className="h-3 w-3 rounded-full border border-foreground bg-secondary" />
                  <span className="ml-3 truncate text-xs text-foreground/70">{p.displayUrl}</span>
                </div>
                <div className="relative h-48 md:h-56">
                  <div className="absolute inset-0" style={{ background: "var(--gradient-bg)" }} />
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <div className="relative flex h-full items-center justify-center">
                    <span className="font-serif-display text-5xl md:text-6xl headline-gradient">
                      {p.title}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif-display text-3xl">{p.title}</h3>
                    {p.status && (
                      <span className="rounded-full border-2 border-foreground bg-accent px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide">
                        {p.status}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-foreground/75">{p.description}</p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-foreground bg-card transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border-2 border-foreground bg-card px-3 py-1 text-xs font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
