import FloatingTech from "./FloatingTech";
import { TechIcon, type TechName } from "./TechIcons";

type Skill = { name: string; tech?: TechName; level: number };

const groups: { title: string; cmd: string; items: Skill[] }[] = [
  {
    title: "Languages",
    cmd: "ls ./languages",
    items: [
      { name: "TypeScript", tech: "typescript", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "HTML5", tech: "html", level: 96 },
      { name: "CSS3", tech: "css", level: 94 },
    ],
  },
  {
    title: "Frameworks",
    cmd: "ls ./frameworks",
    items: [
      { name: "React.js", tech: "react", level: 92 },
      { name: "Next.js", tech: "next", level: 86 },
      { name: "Vue.js", tech: "vue", level: 88 },
      { name: "Express.js", tech: "express", level: 78 },
    ],
  },
  {
    title: "Styling",
    cmd: "ls ./styling",
    items: [
      { name: "Tailwind CSS", tech: "tailwind", level: 95 },
      { name: "Bootstrap", level: 80 },
      { name: "CSS Modules", level: 85 },
      { name: "Animations", level: 82 },
      { name: "Locomotive scroll", level: 82 },
      { name: "GSAP", level: 82 },

    ],
  },
  {
    title: "State & Data",
    cmd: "ls ./state",
    items: [
      { name: "Redux", level: 84 },
      { name: "Zustand", level: 86 },
      { name: "Pinia", level: 80 },
      { name: "TanStack Query", level: 78 },
    ],
  },
  {
    title: "Backend & DB",
    cmd: "ls ./backend",
    items: [
      { name: "Node.js", tech: "node", level: 80 },
      { name: "MongoDB", tech: "mongo", level: 78 },
      { name: "MySQL", tech: "mysql", level: 75 },
      { name: "Prisma", tech: "prisma", level: 76 },
    ],
  },
  {
    title: "Tools",
    cmd: "ls ./tools",
    items: [
      { name: "Git", tech: "git", level: 90 },
      { name: "Firebase", tech: "firebase", level: 78 },
      { name: "Vercel", level: 88 },
      { name: "Netlify", level: 84 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <FloatingTech
        items={[
          { name: "react", label: "React", top: "8%", left: "4%", anim: "tilt", delay: "0s", hideMobile: true },
          { name: "next", label: "Next", top: "20%", right: "3%", anim: "slow", delay: "1s" },
          { name: "mongo", label: "Mongo", top: "70%", left: "2%", anim: "rev", delay: "2s", hideMobile: true },
          { name: "tailwind", label: "Tailwind", top: "85%", right: "5%", anim: "tilt", delay: "1.5s" },
        ]}
      />

      <div className="container relative">
        <div className="text-center reveal max-w-2xl mx-auto">
          <span className="chip">
            <span className="text-neon">$</span> stack --list
          </span>
          <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">
            tools.<span className="text-neon">map</span>(
            <span className="font-sans-accent italic font-light text-neon-soft">daily</span>)
          </h2>
          <p className="mt-4 font-sans-accent text-foreground/65">
            The frameworks, languages and tooling I reach for on every build.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, idx) => (
            <div
              key={g.title}
              data-reveal-delay={idx * 70}
              className="card-soft p-6 group reveal relative overflow-hidden"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-xl">
                  <span className="text-neon">~/</span>
                  {g.title.toLowerCase()}
                </h3>
                <span className="font-mono text-[10px] text-neon-glow/60">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-1 font-mono text-[11px] text-foreground/45">$ {g.cmd}</p>
              <div className="divider-glow my-4" />

              <ul className="space-y-3">
                {g.items.map((s) => (
                  <li key={s.name}>
                    <div className="flex items-center justify-between gap-3 font-mono text-[13px]">
                      <span className="flex items-center gap-2 text-foreground/85">
                        {s.tech && (
                          <span className="text-neon-glow">
                            <TechIcon name={s.tech} size={14} />
                          </span>
                        )}
                        {s.name}
                      </span>
                      <span className="text-neon-glow/70 text-[11px]">{s.level}%</span>
                    </div>
                    <div className="mt-1.5 h-1 w-full rounded-full bg-neon/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-neon to-neon-coral shadow-[0_0_10px_hsl(var(--neon)/0.6)]"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
