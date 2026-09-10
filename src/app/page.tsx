import { Contact } from "@/components/Contact";
import { CursorGlow } from "@/components/CursorGlow";
import { Emergency } from "@/components/Emergency";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileDock } from "@/components/MobileDock";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Reviews } from "@/components/Reviews";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Services } from "@/components/Services";
import { TrustBar } from "@/components/TrustBar";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <RevealOnScroll />
      <Header />
      <main className="mobile-dock-safe flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <Emergency />
        <WhyUs />
        <Reviews />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <MobileDock />
    </>
  );
}
