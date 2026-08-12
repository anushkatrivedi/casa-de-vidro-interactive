import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { House } from "@/components/House";
import { Manifesto } from "@/components/Manifesto";
import { MapSection } from "@/components/MapSection";
import { Record } from "@/components/Record";
import { SiteStrip } from "@/components/SiteStrip";
import { Spaces } from "@/components/Spaces";
import { Viewing } from "@/components/Viewing";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <MapSection />
        <House />
        <Gallery />
        <Spaces />
        <SiteStrip />
        <Record />
      </main>
      <Viewing />
    </>
  );
}
