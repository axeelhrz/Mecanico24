"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IconArrow, IconPhone, IconWhatsApp } from "@/components/Icons";
import { site, telUrl, whatsappUrl } from "@/lib/site";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setOffset(0);
        return;
      }
      setOffset(Math.min(window.scrollY, 480));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <div
        className="absolute inset-[-12%] will-change-transform"
        style={{
          transform: `translate3d(0, ${offset * 0.22}px, 0)`,
        }}
      >
        <div className="hero-drift absolute inset-0">
          <Image
            src="/images/hero-taller.jpg"
            alt="Trabajo mecánico en Taller 2001"
            fill
            priority
            className="object-cover object-[center_40%]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/78 to-carbon/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon/92 via-carbon/45 to-carbon/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(201,209,92,0.14),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-32 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8 lg:pb-28">
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.75fr)] lg:gap-12">
          <div>
            <div className="animate-fade-up inline-flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-amber/30 bg-amber/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber">
                Taller mecánico
              </span>
              <span className="rounded-full border border-line bg-carbon/70 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-warm/85">
                Montevideo
              </span>
            </div>

            <h1 className="animate-fade-up-1 mt-6 max-w-3xl font-display text-[clamp(2.1rem,7vw,4.2rem)] font-semibold leading-[1.02] tracking-tight text-warm">
              Mecánica seria.
              <span className="mt-1 block text-amber">Trabajo bien hecho.</span>
            </h1>

            <p className="animate-fade-up-2 mt-3 max-w-lg text-[15px] leading-relaxed text-muted sm:text-base">
              En García de Zúñiga 2376 atendemos tu auto con criterio y sin
              vueltas. Lun a vie en horario comercial.
            </p>

            <div className="animate-fade-up-3 mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <a
                href={whatsappUrl(
                  "Hola, quiero consultar en Taller 2001 por una falla del auto.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber px-7 py-4 text-base font-semibold text-carbon hover:bg-amber-deep sm:w-auto"
              >
                <IconWhatsApp className="h-5 w-5" />
                Consultar por WhatsApp
                <IconArrow className="h-5 w-5" />
              </a>
              <a
                href={telUrl()}
                className="btn inline-flex w-full items-center justify-center gap-2 rounded-full border border-warm/20 bg-carbon/65 px-7 py-4 text-base font-medium text-warm hover:border-amber/40 sm:w-auto"
              >
                <IconPhone className="h-4 w-4 text-amber" />
                {site.phoneDisplay}
              </a>
            </div>

            <ul className="animate-fade-up-3 mt-8 grid grid-cols-3 gap-3 border-t border-line/80 pt-6 sm:mt-10 sm:flex sm:max-w-2xl sm:gap-0 sm:pt-7">
              <li className="sm:flex-1 sm:pr-6">
                <p className="font-display text-xl font-semibold text-warm sm:text-[1.75rem]">
                  {site.rating.toFixed(1)}
                  <span className="ml-0.5 text-amber sm:ml-1">★★★★★</span>
                </p>
                <p className="mt-1 text-[11px] leading-snug text-muted sm:text-sm">
                  {site.reviewCount} reseñas
                </p>
              </li>
              <li className="sm:flex-1 sm:border-l sm:border-line/80 sm:px-6">
                <p className="font-display text-xl font-semibold text-warm sm:text-[1.75rem]">
                  Lun–Vie
                </p>
                <p className="mt-1 text-[11px] leading-snug text-muted sm:text-sm">
                  {site.hoursShort}
                </p>
              </li>
              <li className="sm:flex-1 sm:border-l sm:border-line/80 sm:pl-6">
                <p className="font-display text-xl font-semibold text-warm sm:text-[1.75rem]">
                  2376
                </p>
                <p className="mt-1 text-[11px] leading-snug text-muted sm:text-sm">
                  García de Zúñiga
                </p>
              </li>
            </ul>
          </div>

          <aside className="animate-fade-up-3 interactive-panel w-full justify-self-start overflow-hidden rounded-2xl border border-amber/25 bg-graphite shadow-[0_20px_50px_rgba(0,0,0,0.4)] lg:justify-self-end">
            <div className="border-b border-line bg-amber/10 px-5 py-3.5 sm:px-6">
              <p className="text-sm font-semibold text-amber">Agendar visita</p>
            </div>
            <div className="p-5 sm:p-6">
              <p className="font-display text-xl font-semibold leading-snug text-warm">
                Contanos qué le pasa al auto
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Te respondemos para coordinar el ingreso al taller según
                disponibilidad.
              </p>
              <dl className="mt-4 space-y-2 border-t border-line pt-4 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-muted">WhatsApp</dt>
                  <dd className="font-medium text-warm">{site.phoneDisplay}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-muted">Fijo</dt>
                  <dd className="font-medium text-warm">
                    {site.phoneSecondaryDisplay}
                  </dd>
                </div>
              </dl>
              <a
                href={whatsappUrl(
                  "Hola, quiero agendar en Taller 2001. El problema del auto es:",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber px-5 py-3.5 text-sm font-semibold text-carbon hover:bg-amber-deep"
              >
                Escribir ahora
                <IconArrow className="card-arrow h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
