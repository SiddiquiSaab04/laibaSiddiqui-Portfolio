import { TechIcon, type TechName } from "./TechIcons";

type Item = {
  name: TechName;
  label: string;
  top: string;
  left?: string;
  right?: string;
  size?: number;
  anim?: "slow" | "rev" | "tilt";
  delay?: string;
  hideMobile?: boolean;
};

const DEFAULT_ITEMS: Item[] = [
  { name: "react", label: "React", top: "8%", left: "4%", anim: "slow", delay: "0s" },
  { name: "next", label: "Next.js", top: "14%", right: "5%", anim: "rev", delay: "1s", size: 26 },
  { name: "typescript", label: "TS", top: "44%", left: "2%", anim: "tilt", delay: "2s", hideMobile: true },
  { name: "tailwind", label: "Tailwind", top: "60%", right: "3%", anim: "slow", delay: "0.5s" },
  { name: "node", label: "Node", top: "78%", left: "6%", anim: "rev", delay: "1.5s", hideMobile: true },
  { name: "vue", label: "Vue", top: "32%", right: "10%", anim: "tilt", delay: "2.5s", size: 26 },
  { name: "mongo", label: "Mongo", top: "88%", right: "8%", anim: "slow", delay: "3s", hideMobile: true },
  { name: "express", label: "Express", top: "70%", left: "12%", anim: "tilt", delay: "1.2s", hideMobile: true },
];

type Props = { items?: Item[]; density?: "low" | "high" };

const FloatingTech = ({ items, density = "low" }: Props) => {
  const list = items ?? (density === "high" ? DEFAULT_ITEMS : DEFAULT_ITEMS.slice(0, 5));
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {list.map((it, i) => {
        const animClass =
          it.anim === "rev" ? "animate-float-rev" : it.anim === "tilt" ? "animate-float-tilt" : "animate-float-slow";
        return (
          <div
            key={`${it.name}-${i}`}
            className={`tech-float ${animClass} ${it.hideMobile ? "hidden md:grid" : ""}`}
            style={{
              top: it.top,
              left: it.left,
              right: it.right,
              animationDelay: it.delay,
            }}
          >
            <TechIcon name={it.name} size={it.size ?? 24} />
            <span className="font-crt text-[11px] mt-1 leading-none text-neon-glow/80">
              {it.label.toLowerCase()}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FloatingTech;
