import { clients } from "@/data/content";
export function Clients() {
  const row = [...clients, ...clients];
  return (
    <section aria-label="Clients" className="border-y-2 border-ink bg-surface py-8">
      <p className="mb-5 text-center font-mono text-xs font-bold tracking-widest text-muted-foreground">
        TRUSTED BY STARTUPS, BRANDS & INSTITUTIONS
      </p>
      <div className="group overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <ul className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused]">
          {row.map((c, i) => (
            <li
              key={i}
              aria-hidden={i >= clients.length}
              className="whitespace-nowrap font-display text-2xl font-bold text-slate-px transition-colors duration-300 hover:text-ink"
            >
              ◆ {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
