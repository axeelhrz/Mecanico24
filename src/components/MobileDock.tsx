import { IconPhone, IconWhatsApp } from "@/components/Icons";
import { telUrl, whatsappUrl } from "@/lib/site";

export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-carbon/95 p-2 backdrop-blur-xl md:hidden pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={telUrl()}
          className="btn inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-graphite px-3 py-3.5 text-sm font-semibold text-warm"
        >
          <IconPhone className="h-4 w-4 text-amber" />
          Llamar
        </a>
        <a
          href={whatsappUrl("Hola, necesito asistencia mecánica.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn inline-flex items-center justify-center gap-2 rounded-xl bg-amber px-3 py-3.5 text-sm font-semibold text-carbon"
        >
          <IconWhatsApp className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
