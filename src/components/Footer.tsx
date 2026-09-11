import Image from "next/image";
import { site, telUrl, whatsappUrl } from "@/lib/site";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-carbon">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Image
            src="/images/logo-taller-2001-light.png"
            alt="Taller 2001"
            width={200}
            height={75}
            className="h-12 w-auto"
          />
          <p className="mt-3 text-sm text-muted">{site.tagline}</p>
          <p className="mt-4 text-sm text-muted">{site.address}</p>
          <p className="mt-6 text-sm text-muted">Teléfono / WhatsApp</p>
          <a
            href={telUrl()}
            className="mt-1 block font-display text-lg text-warm transition hover:text-amber"
          >
            {site.whatsappDisplay}
          </a>
          <a
            href={`tel:${site.phoneSecondaryTel}`}
            className="mt-1 block text-sm text-muted transition hover:text-amber"
          >
            Fijo: {site.phoneSecondaryDisplay}
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            Navegación
          </p>
          <nav className="mt-4 flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-warm transition hover:text-amber"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            Horario
          </p>
          <ul className="mt-4 space-y-2 text-sm text-warm">
            {site.hoursDetail.map((item) => (
              <li key={item.day} className="flex justify-between gap-4">
                <span className="text-muted">{item.day}</span>
                <span>{item.time}</span>
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-muted transition hover:text-amber"
          >
            Escribir por WhatsApp →
          </a>
        </div>
      </div>
      <div className="border-t border-line px-4 py-5 text-center text-xs text-muted sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
