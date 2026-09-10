import { site } from "@/lib/site";

export function WhyUs() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-graphite py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-amber/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-amber/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber">
              Por qué elegirnos
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.1rem,4.8vw,3.75rem)] font-semibold leading-[1.02] tracking-tight text-warm">
              Necesitás una solución.
              <span className="block text-muted">No una vuelta más.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted lg:justify-self-end lg:text-right">
            Cuando el auto falla, cada minuto cuenta. Por eso priorizamos
            respuesta rápida, claridad y un camino concreto para resolverlo.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-3 sm:grid-cols-2">
          {site.whyUs.map((item) => (
            <article
              key={item.code}
              className="group relative overflow-hidden rounded-2xl border border-line bg-carbon/55 p-6 transition duration-250 hover:border-amber/30 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-xs tracking-[0.2em] text-amber">
                  {item.code}
                </span>
                <span className="font-display text-3xl font-semibold tracking-tight text-warm/90 sm:text-4xl">
                  {item.stat}
                </span>
              </div>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-amber/50 via-line to-transparent" />

              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-warm">
                {item.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
