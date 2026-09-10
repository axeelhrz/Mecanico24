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
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-carbon/90 shadow-[0_1px_0_0_rgba(255,122,61,0.18)] backdrop-blur-xl"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <a href="#inicio" className="shrink-0 group">
          <span className="font-display text-lg font-semibold tracking-tight text-warm sm:text-xl">
            Mecánica{" "}
            <span className="text-amber transition group-hover:tracking-wide">
              24
            </span>
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
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-warm transition ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span className={`h-px w-full bg-warm transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-full bg-warm transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 top-16 bg-carbon/98 backdrop-blur-xl transition lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center gap-2 px-5 pt-4 text-sm text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-green/60" />
            <span className="relative h-2 w-2 rounded-full bg-green" />
          </span>
          {site.hours}
        </div>
        <nav className="flex flex-col px-5 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`border-b border-line py-4 font-display text-2xl font-medium transition ${
                active === link.id ? "text-amber" : "text-warm"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="grid gap-3 px-5 pt-4">
          <a
            href={telUrl()}
            onClick={() => setOpen(false)}
            className="btn inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3.5 text-base font-medium text-warm"
          >
            Llamar {site.phoneDisplay}
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn inline-flex items-center justify-center gap-2 rounded-full bg-amber px-5 py-3.5 text-base font-semibold text-carbon"
          >
            WhatsApp 24 h
          </a>
        </div>
      </div>
    </header>
  );
}
