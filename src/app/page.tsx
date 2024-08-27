"use-client";

import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="px-12">
      <Navbar />
      <HeroSection />
      <div className="grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
        <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
          Scroll back up to reveal Navbar
        </p>
        <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
      </div>
      <div className="grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
        <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
          Scroll back up to reveal Navbar
        </p>
        <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
      </div>
    </main>
  );
}
