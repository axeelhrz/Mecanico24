import { IconArrow, ServiceIcon } from "@/components/Icons";
import { SpotlightCard } from "@/components/SpotlightCard";
import { site, whatsappUrl } from "@/lib/site";

export function Services() {
  return (
    <section id="servicios" className="bg-carbon py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber">
              Servicios
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-warm sm:text-4xl md:text-5xl">
              Lo resolvemos para que vuelvas a circular.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted md:text-right">
            Contanos qué le pasa al auto. Te orientamos al instante y
            coordinamos la solución más rápida.
          </p>
        </div>

        <div className="reveal mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((service, index) => (
            <SpotlightCard
              key={service.id}
              href={whatsappUrl(`Hola, necesito ayuda con: ${service.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group flex min-h-[200px] flex-col justify-between rounded-2xl border border-line bg-graphite/50 p-6 sm:p-7"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-carbon/60 text-amber transition duration-250 group-hover:border-amber/40 group-hover:scale-110">
                    <ServiceIcon id={service.id} className="h-5 w-5" />
                  </div>
                  <span className="font-display text-xs tracking-[0.16em] text-muted/50 transition group-hover:text-amber/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-warm sm:text-[1.35rem]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.text}
                </p>
              </div>
              <span className="card-arrow mt-7 inline-flex items-center gap-2 text-sm font-medium text-muted group-hover:text-amber">
                Consultar
                <IconArrow className="h-4 w-4" />
              </span>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
