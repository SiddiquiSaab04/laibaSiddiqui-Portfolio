const BackgroundScene = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* terminal grid */}
      <div className="absolute inset-0 grid-bg opacity-80" />

      {/* purple atmospheric blobs */}
      <div
        className="blob animate-float-slow"
        style={{ width: 600, height: 600, top: "-160px", left: "-160px", background: "var(--gradient-blob-1)" }}
      />
      <div
        className="blob animate-float-rev"
        style={{ width: 520, height: 520, top: "8%", right: "-180px", background: "var(--gradient-blob-2)" }}
      />
      <div
        className="blob animate-float-slow"
        style={{ width: 700, height: 700, bottom: "-220px", left: "15%", background: "var(--gradient-blob-4)" }}
      />
      <div
        className="blob animate-float-rev"
        style={{ width: 420, height: 420, top: "55%", right: "8%", background: "var(--gradient-blob-3)" }}
      />

      {/* CRT scanlines */}
      <div className="absolute inset-0 scanlines opacity-40 mix-blend-overlay" />

      {/* film grain overlay */}
      <div className="absolute inset-0 noise opacity-[0.05] mix-blend-overlay" />

      {/* slow vignette */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at center, transparent 40%, hsl(var(--background) / 0.85) 100%)"
      }} />
    </div>
  );
};

export default BackgroundScene;
