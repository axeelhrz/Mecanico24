import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · Mecánica 24 horas en Montevideo`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "mecánica 24 horas",
    "taller mecánico Montevideo",
    "emergencia mecánica",
    "auxilio automotriz",
  ],
  openGraph: {
    title: `${site.name} · Montevideo`,
    description: site.description,
    locale: "es_UY",
    type: "website",
  },
  metadataBase: new URL("https://mecanica24horas.uy"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-carbon text-warm">
        {children}
      </body>
    </html>
  );
}
