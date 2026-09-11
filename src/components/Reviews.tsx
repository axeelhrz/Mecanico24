import { CountUp } from "@/components/CountUp";
import { IconArrow } from "@/components/Icons";
import { site } from "@/lib/site";

const highlights = [
  {
    title: "Buenas valoraciones",
    text: "5,0 estrellas en Google: reputación construida con trabajos bien hechos.",
  },
  {
    title: "Atención clara",
    text: "Te explicamos el problema y cómo seguir, sin rodeos.",
  },
  {
    title: "Ubicación cómoda",
    text: "García de Zúñiga 2376, Montevideo. Fácil de llegar y de contactar.",
  },
];

export function Reviews() {
  const hasReviews = site.reviews.length > 0;

  return (
    <section id="opiniones" className="bg-carbon py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-3xl border border-line bg-graphite/70 p-7 sm:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber">
              Google Reviews
            </p>
            <p className="mt-5 font-display text-[clamp(4.5rem,12vw,7rem)] font-semibold leading-none tracking-tight text-warm">
              <CountUp value={site.rating} decimals={1} />
            </p>
            <div className="mt-3 flex items-center gap-1 text-amber" aria-label="5 estrellas">
              <span className="text-xl tracking-wide star-pop">★★★★★</span>
            </div>
            <p className="mt-4 text-base text-muted">
              Basado en{" "}
              <span className="font-medium text-warm">
                <CountUp value={site.reviewCount} /> reseñas
              </span>{" "}
              verificadas en Google
            </p>
            <div className="mt-8">
              <a
                href={site.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-warm hover:border-amber/40"
              >
                Ver opiniones en Google
                <IconArrow className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-warm sm:text-4xl md:text-[2.75rem] md:leading-tight">
              La confianza se gana
              <span className="block text-muted">trabajo a trabajo.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              No inventamos testimonios. Las opiniones reales están en Google:
              leelas ahí y después escribinos si necesitás ayuda con tu auto.
            </p>

            {hasReviews ? (
              <div className="mt-8 grid gap-3 sm:grid-cols-1">
                {site.reviews.map((review) => (
                  <article
                    key={`${review.name}-${review.text.slice(0, 16)}`}
                    className="rounded-2xl border border-line bg-graphite/50 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber/15 font-display text-sm font-semibold text-amber">
                        {review.initial}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-warm">
                          {review.name}
                        </p>
                        <p className="text-sm text-amber">
                          {"★".repeat(review.stars)}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      “{review.text}”
                    </p>
                  </article>
                ))}
              </div>
            ) : (
              <ul className="mt-8 space-y-3">
                {highlights.map((item, index) => (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-line bg-graphite/40 p-5 transition hover:border-amber/25"
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-display text-sm tracking-[0.16em] text-amber">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-warm">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
