"use client";

import { useEffect, useState } from "react";
import { IconPhone, IconWhatsApp } from "@/components/Icons";
import { site, telUrl, whatsappUrl } from "@/lib/site";

const links = [
  { href: "#inicio", id: "inicio", label: "Inicio" },
  { href: "#servicios", id: "servicios", label: "Servicios" },
  { href: "#como-trabajamos", id: "como-trabajamos", label: "Cómo trabajamos" },
  { href: "#opiniones", id: "opiniones", label: "Opiniones" },
  { href: "#contacto", id: "contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.dataset.menuOpen = open ? "true" : "false";
    return () => {
      document.body.style.overflow = "";
      delete document.documentElement.dataset.menuOpen;
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-300 ${
          open
            ? "bg-carbon"
            : scrolled
              ? "bg-carbon/95 shadow-[0_1px_0_0_rgba(255,122,61,0.18)] backdrop-blur-xl"
              : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
          <a
            href="#inicio"
            className="shrink-0 group"
            onClick={() => setOpen(false)}
          >
            <span className="font-display text-lg font-semibold tracking-tight text-warm sm:text-xl">
              Mecánica{" "}
              <span className="text-amber">24</span>
              <span className="text-warm"> Horas</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 xl:flex">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-3 py-2 text-sm transition-colors duration-200 ${
                    isActive ? "text-warm" : "text-muted hover:text-warm"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-amber transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="mr-1 hidden items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs text-muted xl:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-green/60" />
                <span className="relative h-2 w-2 rounded-full bg-green" />
              </span>
              {site.hours}
            </div>
            <a
              href={telUrl()}
              className="btn inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-medium text-warm hover:border-warm/30"
            >
              <IconPhone className="h-4 w-4" />
              Llamar
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex items-center gap-2 rounded-full bg-amber px-4 py-2.5 text-sm font-semibold text-carbon hover:bg-amber-deep"
            >
              <IconWhatsApp className="h-4 w-4" />
              WhatsApp 24 h
            </a>
          </div>

          <button
            type="button"
            className="relative z-[80] flex h-11 w-11 items-center justify-center rounded-full border border-line bg-graphite lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full rounded-full bg-warm transition duration-300 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-warm transition duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-warm transition duration-300 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[65] bg-carbon transition-opacity duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-5 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-24">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-graphite px-3 py-2 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-green/60" />
              <span className="relative h-2 w-2 rounded-full bg-green" />
            </span>
            {site.hours}
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl border px-4 py-4 font-display text-2xl font-semibold transition ${
                  active === link.id
                    ? "border-amber/30 bg-amber/10 text-amber"
                    : "border-transparent text-warm active:bg-graphite"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 grid gap-3 border-t border-line pt-6">
            <a
              href={telUrl()}
              onClick={() => setOpen(false)}
              className="btn inline-flex items-center justify-center gap-2 rounded-full border border-line bg-graphite px-5 py-4 text-base font-semibold text-warm"
            >
              <IconPhone className="h-4 w-4 text-amber" />
              Llamar {site.phoneDisplay}
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn inline-flex items-center justify-center gap-2 rounded-full bg-amber px-5 py-4 text-base font-semibold text-carbon"
            >
              <IconWhatsApp className="h-4 w-4" />
              WhatsApp 24 h
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
