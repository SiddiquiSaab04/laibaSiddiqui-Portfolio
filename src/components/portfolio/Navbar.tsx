import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

const links = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "work" },
  { href: "#experience", label: "experience" },
  { href: "#skills", label: "stack" },
  { href: "#contact", label: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const upd = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    upd();
    const id = setInterval(upd, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 z-50 w-[min(96%,1180px)] -translate-x-1/2 transition-all duration-300 ${
        scrolled ? "scale-[0.99]" : ""
      }`}
    >
      <nav
        className={`flex items-center justify-between gap-4 rounded-lg border px-3 py-2 backdrop-blur-xl transition-all ${
          scrolled
            ? "bg-background/60 border-neon/30 shadow-[0_10px_40px_-10px_hsl(280_100%_30%/0.5)]"
            : "bg-card/30 border-border"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 pl-2">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-neon/50 bg-background text-neon">
            <Terminal className="h-3.5 w-3.5" />
          </span>
          <span className="font-mono text-sm leading-none">
            <span className="text-neon-glow">~/</span>
            <span className="text-foreground">laiba</span>
            <span className="text-neon animate-blink ml-0.5">_</span>
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group rounded-md px-3 py-2 font-mono text-[13px] text-foreground/65 transition-colors hover:text-neon-glow hover:bg-neon/5"
              >
                <span className="text-neon/60 group-hover:text-neon">$</span> {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <span className="hidden lg:inline-flex items-center gap-2 font-mono text-[11px] text-foreground/50">
            <span className="h-1.5 w-1.5 rounded-full bg-neon animate-neon-pulse" />
            {time}
          </span>
          <a href="#contact" className="btn-primary text-xs px-4 py-2">
            ./connect
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
