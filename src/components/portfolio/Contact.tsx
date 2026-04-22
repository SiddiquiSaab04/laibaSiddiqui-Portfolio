import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import FloatingTech from "./FloatingTech";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <FloatingTech
        items={[
          { name: "react", label: "React", top: "8%", right: "4%", anim: "slow", delay: "0s", hideMobile: true },
          { name: "node", label: "Node", top: "75%", left: "3%", anim: "tilt", delay: "1.5s" },
        ]}
      />

      <div className="container relative">
        <div className="card-soft relative overflow-hidden p-8 md:p-14 reveal">
          {/* glow blobs */}
          <div
            className="absolute -top-32 -left-32 h-72 w-72 rounded-full opacity-60"
            style={{ background: "var(--gradient-blob-2)", filter: "blur(80px)" }}
          />
          <div
            className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full opacity-50"
            style={{ background: "var(--gradient-blob-1)", filter: "blur(80px)" }}
          />

          {/* terminal header */}
          <div className="relative flex items-center gap-2 font-mono text-xs text-foreground/55">
            <span className="h-2 w-2 rounded-full bg-destructive" />
            <span className="h-2 w-2 rounded-full bg-warning/90" />
            <span className="h-2 w-2 rounded-full bg-neon" />
            <span className="ml-2">~/contact $ initiate --connection</span>
          </div>

          <div className="relative mt-8 grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <span className="chip">
                <span className="text-neon">$</span> let's connect
              </span>
              <h2 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl">
                got a <span className="text-neon-glow">{"<project/>"}</span>
                <br />
                <span className="font-sans-accent italic text-neon animate-neon-pulse">
                  let's build it.
                </span>
              </h2>
              <p className="mt-6 font-sans-accent max-w-xl text-lg text-foreground/70 leading-relaxed">
                I'm open to <span className="text-neon-glow font-mono">freelance</span>,
                <span className="text-neon-glow font-mono"> full-time</span> roles and interesting
                collaborations. Drop a line & I'll respond within 24 hours.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:devlaiba04@gmail.com" className="btn-primary">
                  <Send className="h-4 w-4" /> devlaiba04@gmail.com
                </a>
                <a href="tel:+923081138997" className="btn-ghost">
                  <Phone className="h-4 w-4" /> +92 308 1138997
                </a>
              </div>

              <p className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-foreground/55">
                <MapPin className="h-3.5 w-3.5 text-neon" /> Lahore, Pakistan · working worldwide
              </p>
            </div>

            <div className="lg:col-span-5 grid gap-3">
              <a
                href="https://github.com/SiddiquiSaab04"
                target="_blank"
                rel="noreferrer noopener"
                className="card-soft p-5 flex items-center gap-4 group"
              >
                <span className="grid h-11 w-11 place-items-center rounded-md border border-neon/30 bg-background text-neon-glow group-hover:border-neon transition-colors">
                  <Github className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neon-glow/70">
                    github.com/
                  </p>
                  <p className="font-mono text-sm mt-0.5">SiddiquiSaab04</p>
                </div>
                <span className="font-mono text-neon-glow/60 group-hover:text-neon group-hover:translate-x-1 transition-all">→</span>
              </a>
              <a
                href="https://www.linkedin.com/in/laiba-siddiqui-29408a265/"
                target="_blank"
                rel="noreferrer noopener"
                className="card-soft p-5 flex items-center gap-4 group"
              >
                <span className="grid h-11 w-11 place-items-center rounded-md border border-neon/30 bg-background text-neon-glow group-hover:border-neon transition-colors">
                  <Linkedin className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neon-glow/70">
                    linkedin.com/in/
                  </p>
                  <p className="font-mono text-sm mt-0.5">laiba-siddiqui</p>
                </div>
                <span className="font-mono text-neon-glow/60 group-hover:text-neon group-hover:translate-x-1 transition-all">→</span>
              </a>
              <a
                href="mailto:devlaiba04@gmail.com"
                className="card-soft p-5 flex items-center gap-4 group"
              >
                <span className="grid h-11 w-11 place-items-center rounded-md border border-neon/30 bg-background text-neon-glow group-hover:border-neon transition-colors">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neon-glow/70">
                    mailto:
                  </p>
                  <p className="font-mono text-sm mt-0.5">devlaiba04@gmail.com</p>
                </div>
                <span className="font-mono text-neon-glow/60 group-hover:text-neon group-hover:translate-x-1 transition-all">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
