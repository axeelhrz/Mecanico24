import Image from "next/image";
import { IconArrow, IconWhatsApp } from "@/components/Icons";
import { site, telUrl, whatsappUrl } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0">
        <Image
          src="/images/cta.jpg"
          alt="Detalle de trabajo mecánico en taller"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-carbon/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/80 to-carbon/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-carbon/50 px-3 py-1.5 backdrop-blur-sm">
            <span className="pulse-dot h-2 w-2 rounded-full bg-green" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-warm/90">
              Abiertos ahora · 24 horas
            </span>
          </div>

          <h2 className="mt-6 font-display text-[clamp(2.3rem,5.5vw,4.25rem)] font-semibold leading-[1.02] tracking-tight text-warm">
            Cuando el auto falla,
            <span className="block text-amber">nosotros respondemos.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            No esperes al lunes. Escribinos ahora y te ayudamos a resolverlo
            desde Montevideo, a cualquier hora.
          </p>

          <div className="mt-9">
            <a
              href={whatsappUrl(
                "Hola, necesito asistencia mecánica ahora.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex items-center justify-center gap-2 rounded-full bg-amber px-7 py-4 text-base font-semibold text-carbon hover:bg-amber-deep"
            >
              <IconWhatsApp className="h-5 w-5" />
              WhatsApp ahora
              <IconArrow className="h-5 w-5" />
            </a>
          </div>

          <p className="mt-6 text-sm text-muted">
            También podés llamar al{" "}
            <a
              href={telUrl()}
              className="font-medium text-warm transition hover:text-amber"
            >
              {site.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
