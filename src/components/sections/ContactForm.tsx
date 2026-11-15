import { useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { budgets, site } from "@/data/content";
import {
  submitForm,
  validateContact,
  whatsappLink,
  type ContactData,
  type Errors,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

const field =
  "w-full border-2 border-ink bg-surface px-3 py-2.5 text-sm text-ink placeholder:text-muted-foreground transition-colors duration-200 focus:bg-lime/15 focus:outline-none focus-visible:shadow-[var(--shadow-px)] aria-[invalid=true]:border-destructive";
const labelCls = "mb-1 block font-mono text-xs font-bold uppercase tracking-wider text-ink";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [last, setLast] = useState<ContactData>({});

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as ContactData;
    const e = validateContact(data);
    setErrors(e);
    if (Object.keys(e).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(e)[0]}"]`)?.focus();
      return;
    }
    if (data._honey) {
      setStatus("sent");
      return;
    } // bot filled the hidden field
    setLast(data);
    setStatus("sending");
    const ok = await submitForm({
      name: data.name ?? "",
      email: data.email ?? "",
      phone: data.phone ?? "",
      "project type": data.type ?? "",
      budget: data.budget ?? "",
      timeline: data.timeline ?? "",
      message: data.message ?? "",
      _replyto: data.email ?? "",
      _subject: `New project enquiry from ${data.name} — Webro Studios`,
    });
    if (ok) {
      setStatus("sent");
      form.reset();
    } else setStatus("error");
  };

  const Err = ({ k }: { k: keyof Errors }) =>
    errors[k] ? (
      <p id={`${k}-err`} className="mt-1 font-mono text-xs font-bold text-destructive">
        {errors[k]}
      </p>
    ) : null;

  if (status === "sent") {
    return (
      <div className="animate-page-in py-12 text-center" role="status">
        <p className="font-pixel text-6xl text-ink">✓</p>
        <h3 className="mt-4 text-3xl font-bold text-ink">Message received!</h3>
        <p className="mt-2 text-muted-foreground">
          Thanks — we'll get back to you within 24 hours.
        </p>
        <Button variant="pxOutline" size="px" className="mt-6" onClick={() => setStatus("idle")}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="grid gap-5 sm:grid-cols-2"
      aria-busy={status === "sending"}
    >
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div>
        <label htmlFor="name" className={labelCls}>
          Name *
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          className={field}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-err" : undefined}
        />
        <Err k="name" />
      </div>
      <div>
        <label htmlFor="email" className={labelCls}>
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={field}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-err" : undefined}
        />
        <Err k="email" />
      </div>
      <div>
        <label htmlFor="phone" className={labelCls}>
          Phone / WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={field}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-err" : undefined}
        />
        <Err k="phone" />
      </div>
      <div>
        <label htmlFor="type" className={labelCls}>
          Project type
        </label>
        <select id="type" name="type" className={field}>
          <option>Website</option>
          <option>Web App</option>
          <option>Mobile App / PWA</option>
          <option>E-commerce</option>
          <option>UI/UX Design</option>
          <option>Branding</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="budget" className={labelCls}>
          Budget range
        </label>
        <select id="budget" name="budget" className={field}>
          {budgets.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="timeline" className={labelCls}>
          Timeline
        </label>
        <select id="timeline" name="timeline" className={field}>
          <option>ASAP</option>
          <option>2–4 weeks</option>
          <option>1–2 months</option>
          <option>Flexible</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelCls}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={field}
          placeholder="Tell us about your idea, goals and any links…"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-err" : undefined}
        />
        <Err k="message" />
      </div>
      {status === "error" && (
        <div
          className="border-2 border-destructive bg-destructive/10 p-4 text-sm text-ink sm:col-span-2"
          role="alert"
        >
          <p className="font-bold">Couldn't send right now.</p>
          <p className="mt-1 text-muted-foreground">
            Your message is still here — send it instantly on WhatsApp or by email instead:
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Button asChild variant="pxLime" size="px">
              <a href={whatsappLink(last)} target="_blank" rel="noreferrer">
                <MessageCircle /> Send on WhatsApp
              </a>
            </Button>
            <Button asChild variant="pxOutline" size="px">
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Project enquiry")}&body=${encodeURIComponent(last.message ?? "")}`}
              >
                <Mail /> Email us
              </a>
            </Button>
          </div>
        </div>
      )}
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <Button type="submit" variant="px" size="px" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              Sending<span className="animate-sending">▮</span>
            </>
          ) : (
            <>
              Send Message <Send />
            </>
          )}
        </Button>
        <p className="font-mono text-xs text-muted-foreground">Usually replies within 24 hours.</p>
      </div>
    </form>
  );
}

export function ContactDetails({ className }: { className?: string }) {
  return (
    <aside className={cn("space-y-5", className)}>
      {[
        { I: MessageCircle, t: "WhatsApp", v: site.phone, href: site.whatsapp },
        { I: Mail, t: "Email", v: site.email, href: `mailto:${site.email}` },
        { I: MapPin, t: "Location", v: site.location },
        { I: Clock, t: "Office hours", v: site.hours },
      ].map(({ I, t, v, href }) => (
        <div key={t} className="px-card flex items-center gap-4 p-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center border-2 border-navy bg-lime text-navy">
            <I className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {t}
            </p>
            {href ? (
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="break-all font-bold text-ink hover:underline"
              >
                {v}
              </a>
            ) : (
              <p className="font-bold text-ink">{v}</p>
            )}
          </div>
        </div>
      ))}
      <div className="px-card overflow-hidden">
        <iframe
          title="Map of Dibrugarh, Assam"
          src="https://www.google.com/maps?q=Dibrugarh,Assam&output=embed"
          className="h-56 w-full dark:opacity-90 dark:[filter:invert(.9)_hue-rotate(180deg)]"
          loading="lazy"
        />
      </div>
    </aside>
  );
}
