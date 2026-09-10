import { IconArrow, IconWhatsApp } from "@/components/Icons";
import { site, telUrl, whatsappUrl } from "@/lib/site";

export function Emergency() {
  return (
    <section
      id="como-trabajamos"
      className="relative overflow-hidden bg-amber py-20 text-carbon sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,14,17,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(11,14,17,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-carbon/55">
              Emergencias · 24 horas
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[0.98] tracking-tight">
              ¿El auto te dejó
              <span className="block">en el camino?</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-carbon/75 sm:text-lg lg:justify-self-end lg:text-right">
            No hace falta explicar mil cosas. En dos mensajes te orientamos y
            arrancamos a resolverlo.
          </p>
        </div>

        <ol className="reveal relative mt-14 grid gap-4 md:grid-cols-3 md:gap-0">
          {site.emergencySteps.map((step, index) => (
            <li
              key={step.step}
              className="relative rounded-2xl border border-carbon/10 bg-carbon/[0.06] p-6 sm:p-7 md:rounded-none md:border-0 md:border-l md:border-carbon/15 md:bg-transparent md:first:border-l-0 md:first:pl-0 md:pl-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-carbon font-display text-sm font-semibold text-amber">
                  {step.step}
                </span>
                {index < site.emergencySteps.length - 1 ? (
                  <span
                    className="hidden h-px flex-1 bg-carbon/20 md:block"
                    aria-hidden
                  />
                ) : null}
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-carbon/70">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="reveal mt-12 flex flex-col gap-5 rounded-2xl bg-carbon p-6 text-warm sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Estamos disponibles ahora.
            </p>
            <p className="mt-2 text-sm text-muted sm:text-base">
              O llamá al{" "}
              <a href={telUrl()} className="text-warm transition hover:text-amber">
                {site.phoneDisplay}
              </a>
            </p>
          </div>
          <a
            href={whatsappUrl(
              "Hola, el auto me dejó tirado. Necesito asistencia ahora. Estoy en:",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-semibold text-carbon hover:bg-amber-deep"
          >
            <IconWhatsApp className="h-4 w-4" />
            Pedir asistencia
            <IconArrow className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
