import { useEffect, useState } from "react";
import {
  Briefcase,
  Calendar,
  Command as CommandIcon,
  Copy,
  Download,
  FolderOpen,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Search,
  Sparkles,
  User,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { toast } from "sonner";

type Action = {
  group: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  hint?: string;
  run: () => void;
  keywords?: string;
};

const RecruiterCommandBar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  const open_ = (url: string) => {
    setOpen(false);
    window.open(url, "_blank", "noreferrer noopener");
  };

  const copyEmail = async () => {
    setOpen(false);
    try {
      await navigator.clipboard.writeText("devlaiba04@gmail.com");
      toast.success("Email copied to clipboard", { description: "devlaiba04@gmail.com" });
    } catch {
      toast.error("Couldn't copy email");
    }
  };

  const downloadCV = () => {
    setOpen(false);
    const a = document.createElement("a");
    a.href = "/assets/laiba.pdf";
    a.download = "laiba.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    toast.success("Downloading CV…", { description: "If nothing happens, the file is missing." });
  };

  const actions: Action[] = [
    { group: "For Recruiters", icon: Download, label: "Download my CV", hint: "PDF", run: downloadCV, keywords: "resume cv download pdf hire" },
    { group: "For Recruiters", icon: Calendar, label: "Book a 15-min intro call", hint: "Calendly", run: () => open_("https://cal.com/laiba"), keywords: "schedule meeting interview" },
    { group: "For Recruiters", icon: Mail, label: "Email me", hint: "devlaiba04@gmail.com", run: () => open_("mailto:devlaiba04@gmail.com"), keywords: "contact reach hire" },
    { group: "For Recruiters", icon: Copy, label: "Copy email address", run: copyEmail, keywords: "clipboard contact" },

    { group: "Navigate", icon: User, label: "About me", run: () => go("about") },
    { group: "Navigate", icon: FolderOpen, label: "Selected work", run: () => go("projects") },
    { group: "Navigate", icon: Briefcase, label: "Experience", run: () => go("experience") },
    { group: "Navigate", icon: Sparkles, label: "Tech stack", run: () => go("skills") },
    { group: "Navigate", icon: MessageSquare, label: "Contact", run: () => go("contact") },

    { group: "Social", icon: Github, label: "GitHub — SiddiquiSaab04", run: () => open_("https://github.com/SiddiquiSaab04") },
    { group: "Social", icon: Linkedin, label: "LinkedIn — Laiba Siddiqui", run: () => open_("https://www.linkedin.com/in/laiba-siddiqui-29408a265/") },
  ];

  const grouped = actions.reduce<Record<string, Action[]>>((acc, a) => {
    (acc[a.group] ||= []).push(a);
    return acc;
  }, {});

  return (
    <>
      {/* Floating launcher pill */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open command bar"
        className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 flex items-center gap-3 rounded-full border border-border bg-card/80 px-5 py-3 backdrop-blur-xl shadow-[0_10px_40px_-10px_hsl(345_60%_4%/0.8)] hover:border-neon/60 transition-colors"
      >
        <Search className="h-4 w-4 text-neon-glow" />
        <span className="font-grotesk text-sm text-foreground/80">
          Hi recruiter — start here
        </span>
        <kbd className="font-mono text-[10px] px-2 py-1 rounded-md border border-border bg-primary-soft text-foreground/70">
          ⌘K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search actions… (try 'CV', 'email', 'projects')" />
        <CommandList>
          <CommandEmpty>No matches.</CommandEmpty>
          {Object.entries(grouped).map(([group, items], gi) => (
            <div key={group}>
              {gi > 0 && <CommandSeparator />}
              <CommandGroup heading={group}>
                {items.map((a) => (
                  <CommandItem
                    key={a.label}
                    onSelect={a.run}
                    keywords={[a.keywords ?? "", a.label].filter(Boolean) as string[]}
                    className="gap-3"
                  >
                    <a.icon className="h-4 w-4 text-neon-glow" />
                    <span>{a.label}</span>
                    {a.hint && (
                      <span className="ml-auto font-mono text-[10px] text-muted-foreground">{a.hint}</span>
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </div>
          ))}
          <CommandSeparator />
          <div className="flex items-center justify-between px-3 py-2 text-[10px] font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CommandIcon className="h-3 w-3" /> Press ⌘K anywhere to open
            </span>
            <span>↵ to run · esc to close</span>
          </div>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default RecruiterCommandBar;
