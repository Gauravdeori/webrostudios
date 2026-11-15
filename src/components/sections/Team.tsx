import { ExternalLink, Github, Instagram, Linkedin } from "lucide-react";
import { isPlaceholder, site, team } from "@/data/content";
import { PixelAvatar, Reveal, Section, SectionHeading } from "@/components/site/primitives";

export function Team({ label = "// 10 — Team" }: { label?: string }) {
  const members = team.filter((m) => !isPlaceholder(m.name));
  if (!members.length) return null;
  const solo = members.length === 1;
  const socials = [
    { href: site.socials.github, label: "GitHub", I: Github },
    { href: site.socials.linkedin, label: "LinkedIn", I: Linkedin },
    { href: site.socials.instagram, label: "Instagram", I: Instagram },
  ];
  return (
    <Section id="team" label="Team" tone="navy">
      <SectionHeading
        tone="navy"
        label={label}
        title={
          <>
            The People Behind the <span className="hl">Pixels</span>
          </>
        }
        subtitle={solo ? "Founder-led, hands-on on every project." : "Small team, big ambitions."}
      />
      <div className={solo ? "max-w-3xl" : "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"}>
        {members.map((m, i) => (
          <Reveal key={m.name} delay={i * 70}>
            <div
              className={
                solo
                  ? "notch flex flex-col gap-6 border-2 border-lime bg-navy-soft p-8 sm:flex-row sm:items-center"
                  : "notch h-full border-2 border-slate-px bg-navy-soft p-6 transition-colors hover:border-lime"
              }
            >
              <PixelAvatar initials={m.initials} className={solo ? "h-28 w-28 text-4xl" : ""} />
              <div>
                <h3 className="text-2xl font-bold">{m.name}</h3>
                <p className="font-mono text-sm font-bold text-lime">{m.role}</p>
                <p className="mt-2 text-sm text-slate-light">
                  {m.line}
                  {solo &&
                    " CSE student at DUIET, Dibrugarh University — building products like Present IQ, theposterzz and WasteWise."}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-slate-light">
                  {i === 0 &&
                    socials.map(({ href, label: l, I }) => (
                      <a
                        key={l}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${m.name} on ${l}`}
                        className="transition-colors hover:text-lime"
                      >
                        <I className="h-4 w-4" />
                      </a>
                    ))}
                  {m.url && (
                    <a
                      href={m.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs font-bold text-lime hover:underline"
                    >
                      Portfolio <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
