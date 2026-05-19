export default function Terminal() {
  const lines = [
    ["status", "building motion-first portfolio system"],
    ["stack", "Next.js 15 / React 19 / Tailwind v3 / Framer Motion"],
    ["focus", "premium loader, reusable sections, route-driven content"],
    ["note", "designed to feel sharp, dark, and editorial"],
  ];

  return (
    <div className="dp-panel rounded-[32px] p-6">
      <div className="flex items-center justify-between border-b border-dp-border-primary pb-4">
        <div className="font-mono text-[11px] tracking-[0.32em] text-dp-text-secondary">TERMINAL.LOG</div>
        <div className="dp-chip text-dp-orange">ACTIVE</div>
      </div>
      <div className="mt-5 space-y-3 font-mono text-sm leading-7 text-dp-text-primary">
        {lines.map(([label, value]) => (
          <div key={label} className="flex flex-col gap-1 rounded-2xl border border-dp-border-secondary bg-dp-bg-3 px-4 py-3 sm:flex-row sm:items-center sm:gap-4">
            <span className="w-24 text-dp-text-secondary">[{label}]</span>
            <span className="text-dp-text-primary">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}