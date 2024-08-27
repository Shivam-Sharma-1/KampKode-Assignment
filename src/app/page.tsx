"use-client";

import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ScrollSection from "@/components/ScrollSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ScrollSection />
    </main>
  );
}
