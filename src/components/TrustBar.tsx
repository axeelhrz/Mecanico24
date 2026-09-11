"use client";

import {
  IconClock,
  IconPin,
  IconStar,
  IconZap,
} from "@/components/Icons";
import { site } from "@/lib/site";

const items = [
  { icon: IconStar, label: `${site.rating.toFixed(1)} ★ en Google` },
  { icon: IconPin, label: site.addressShort },
  { icon: IconClock, label: site.hoursShort },
  { icon: IconZap, label: "Atención directa" },
];

export function TrustBar() {
  const row = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-line bg-graphite">
      <div className="trust-marquee flex w-max gap-10 py-5 pl-4">
        {row.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="flex items-center gap-2.5 whitespace-nowrap text-sm text-muted"
          >
            <item.icon className="h-4 w-4 text-amber" />
            <span>{item.label}</span>
            <span className="text-amber/40" aria-hidden>
              ●
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
