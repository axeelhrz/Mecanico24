import { IconArrow, IconPhone, IconPin, IconWhatsApp } from "@/components/Icons";
import { site, telSecondaryUrl, telUrl, whatsappUrl } from "@/lib/site";

export function Contact() {
  return (
    <section id="contacto" className="bg-graphite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber">
              Contacto
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,3.75rem)] font-semibold leading-[1.02] tracking-tight text-warm">
              Escribinos o
              <span className="block text-muted">pasá por el taller.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted lg:justify-self-end lg:text-right">
            {site.hours}. Estamos en {site.addressShort}.
          </p>
        </div>

        <div className="reveal mt-10 grid gap-4 lg:grid-cols-2">
          <a
            href={whatsappUrl(
              "Hola, quiero consultar por el taller. El problema es:",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover group relative overflow-hidden rounded-3xl border border-amber/20 bg-carbon p-7 sm:p-8"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber/10 blur-2xl transition group-hover:bg-amber/16" />
            <div className="relative flex h-full min-h-[230px] flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber text-carbon">
                    <IconWhatsApp className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-green/30 bg-green/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-green">
                    Más rápido
                  </span>
                </div>
                <h3 className="mt-7 font-display text-3xl font-semibold tracking-tight text-warm">
                  WhatsApp
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                  Mandanos el problema del auto y te respondemos para coordinar.
                </p>
              </div>
              <span className="card-arrow mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber">
                Escribir ahora
                <IconArrow className="h-4 w-4" />
              </span>
            </div>
          </a>

          <div className="card-hover group relative overflow-hidden rounded-3xl border border-line bg-carbon p-7 sm:p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-warm/[0.04] blur-2xl" />
            <div className="relative flex h-full min-h-[230px] flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line text-amber">
                  <IconPhone className="h-5 w-5" />
                </div>
                <h3 className="mt-7 font-display text-3xl font-semibold tracking-tight text-warm">
                  Teléfonos
                </h3>
                <a
                  href={telUrl()}
                  className="mt-3 block font-display text-3xl font-semibold tracking-tight text-warm transition hover:text-amber sm:text-4xl"
                >
                  {site.phoneDisplay}
                </a>
                <a
                  href={telSecondaryUrl()}
                  className="mt-2 block text-lg text-muted transition hover:text-amber"
                >
                  Fijo: {site.phoneSecondaryDisplay}
                </a>
              </div>
              <a
                href={telUrl()}
                className="card-arrow mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber"
              >
                Llamar ahora
                <IconArrow className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="reveal mt-4 overflow-hidden rounded-3xl border border-line bg-carbon">
          <div className="flex flex-col gap-4 border-b border-line px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line text-amber">
                <IconPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-warm">
                  {site.name}
                </p>
                <p className="mt-0.5 text-sm text-muted">{site.address}</p>
              </div>
            </div>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex items-center justify-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-medium text-warm hover:border-amber/40 hover:text-amber"
            >
              Cómo llegar
              <IconArrow className="h-4 w-4" />
            </a>
          </div>

          <div className="relative">
            <iframe
              title="Ubicación de Taller 2001 en Google Maps"
              src={site.mapsEmbed}
              className="h-[300px] w-full sm:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-carbon/50 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-carbon/55 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-5 sm:w-[280px]">
              <div className="rounded-2xl border border-line bg-carbon p-4 shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">
                  {site.hoursShort}
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-warm">
                  {site.name}
                </p>
                <p className="mt-1 text-xs text-muted">
                  {site.lat.toFixed(4)}° · {site.lng.toFixed(4)}°
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
