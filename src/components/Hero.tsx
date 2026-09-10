"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IconArrow, IconPhone, IconWhatsApp } from "@/components/Icons";
import { site, telUrl, whatsappUrl } from "@/lib/site";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (window.innerWidth < 768) {
        setOffset(0);
        return;
      }
      setOffset(Math.min(window.scrollY, 420));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${offset * 0.28}px) scale(1.08)` }}
      >
        <Image
          src="/images/hero-taller.jpg"
          alt="Mecánico trabajando debajo de un vehículo en el taller"
          fill
          priority
          className="object-cover object-[center_45%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/82 to-carbon/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon/90 via-carbon/50 to-transparent" />
      </div>

      <div
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-32 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8 lg:pb-28"
        style={{ transform: offset ? `translateY(${offset * -0.08}px)` : undefined }}
      >
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.75fr)] lg:gap-12">
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-line bg-carbon/70 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-green/70" />
                <span className="relative h-2 w-2 rounded-full bg-green" />
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-warm/90 sm:text-xs">
                Abiertos ahora · Montevideo
              </span>
            </div>

            <h1 className="animate-fade-up-1 mt-5 max-w-3xl font-display text-[clamp(2.15rem,9vw,4.85rem)] font-semibold leading-[1.02] tracking-tight text-warm sm:mt-6">
              Mecánica cuando la necesitás.
              <span className="mt-1 block text-amber text-shimmer">
                Las 24 horas.
              </span>
            </h1>

            <p className="animate-fade-up-2 mt-4 max-w-lg text-[15px] leading-relaxed text-muted sm:mt-5 sm:text-lg">
              Diagnóstico y reparación rápida. Escribinos o llamá: te
              atendemos de día, de noche y los feriados.
            </p>

            <div className="animate-fade-up-3 mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <a
                href={whatsappUrl(
                  "Hola, necesito asistencia mecánica. ¿Me pueden ayudar?",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber px-7 py-4 text-base font-semibold text-carbon hover:bg-amber-deep sm:w-auto"
              >
                <IconWhatsApp className="h-5 w-5" />
                WhatsApp ahora
                <IconArrow className="h-5 w-5" />
              </a>
              <a
                href={telUrl()}
                className="btn inline-flex w-full items-center justify-center gap-2 rounded-full border border-warm/20 bg-carbon/60 px-7 py-4 text-base font-medium text-warm hover:border-warm/40 sm:w-auto"
              >
                <IconPhone className="h-4 w-4 text-amber" />
                Llamar {site.phoneDisplay}
              </a>
            </div>

            <ul className="animate-fade-up-3 mt-8 grid grid-cols-3 gap-3 border-t border-line/80 pt-6 sm:mt-10 sm:flex sm:max-w-2xl sm:gap-0 sm:pt-7">
              <li className="sm:flex-1 sm:pr-6">
                <p className="font-display text-xl font-semibold text-warm sm:text-[1.75rem]">
                  24/7
                </p>
                <p className="mt-1 text-[11px] leading-snug text-muted sm:text-sm">
                  Disponibles siempre
                </p>
              </li>
              <li className="sm:flex-1 sm:border-l sm:border-line/80 sm:px-6">
                <p className="font-display text-xl font-semibold text-warm sm:text-[1.75rem]">
                  {site.rating.toFixed(1)}
                  <span className="ml-0.5 text-amber sm:ml-1">★★★★★</span>
                </p>
                <p className="mt-1 text-[11px] leading-snug text-muted sm:text-sm">
                  {site.reviewCount} reseñas
                </p>
              </li>
              <li className="sm:flex-1 sm:border-l sm:border-line/80 sm:pl-6">
                <p className="font-display text-xl font-semibold text-warm sm:text-[1.75rem]">
                  Local
                </p>
                <p className="mt-1 text-[11px] leading-snug text-muted sm:text-sm">
                  Montevideo
                </p>
              </li>
            </ul>
          </div>

          <aside className="animate-fade-up-3 interactive-panel w-full justify-self-start overflow-hidden rounded-2xl border border-amber/30 bg-graphite shadow-[0_20px_50px_rgba(0,0,0,0.35)] lg:justify-self-end">
            <div className="border-b border-line bg-amber/10 px-5 py-3.5 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-green/70" />
                  <span className="relative h-2 w-2 rounded-full bg-green" />
                </span>
                <p className="text-sm font-semibold text-amber">
                  Emergencia mecánica
                </p>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <p className="font-display text-xl font-semibold leading-snug text-warm">
                ¿El auto no arranca o te dejó en el camino?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Mandanos el problema y tu zona. Te respondemos al momento.
              </p>
              <a
                href={whatsappUrl(
                  "Hola, tengo una emergencia con el auto. El problema es: . Estoy en:",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber px-5 py-3.5 text-sm font-semibold text-carbon hover:bg-amber-deep"
              >
                Pedir ayuda por WhatsApp
                <IconArrow className="card-arrow h-4 w-4" />
              </a>
              <p className="mt-3 text-center text-xs text-muted">
                O llamá al{" "}
                <a
                  href={telUrl()}
                  className="font-medium text-warm hover:text-amber"
                >
                  {site.phoneDisplay}
                </a>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
