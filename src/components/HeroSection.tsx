"use client";

import React, { useEffect, useState } from "react";
import OrbitingCircles from "./magicui/orbiting-circles";
import { IoMdArrowForward } from "react-icons/io";
import Image from "next/image";

function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section>
      <div className="relative flex h-full py-20 md:p-0 min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-background">
        <div className="pointer-events-none text-center leading-none text-black z-[10] dark:from-white dark:to-black flex flex-col items-center gap-6 w-full px-4">
          <h1 className="sm:text-[60px] text-[50px] font-semibold w-full">
            We&apos;ve really sped up our workflow
          </h1>
          <div className="text-lg w-full max-w-[800px] text-center text-gray-600 flex flex-col gap-2">
            <p>
              <span className="font-medium">
                We&apos;ve just released a new update!{" "}
              </span>
              Check out the all new dashboard view. Pages and now load
              faster.you can try us for free for 30 days.
            </p>
            <p> Join 4,000+ companies already growing</p>
          </div>
          <div className="flex flex-col-reverse sm:flex-row items-center gap-2 sm:gap-6 mt-4">
            <button className="h-12 items-center justify-center rounded-[8px] border border-slate-200 bg-white px-6 font-medium text-slate-700 cursor-pointer z-[10] flex gap-2 sm:w-fit w-full">
              <IoMdArrowForward className="w-5 h-5" />
              Start Learning Today
            </button>
            <button className="h-12 items-center justify-center rounded-[8px] border border-slate-200 bg-primary px-6 font-medium text-white cursor-pointer z-[10] flex gap-2 sm:w-fit w-full">
              Join Now
            </button>
          </div>
        </div>

        {/* Inner Circles */}
        <OrbitingCircles
          className="border-none bg-transparent"
          duration={20}
          delay={20}
          radius={isMobile ? 100 : 220}
        ></OrbitingCircles>

        <OrbitingCircles
          className="border-none bg-transparent"
          duration={20}
          delay={20}
          radius={isMobile ? 160 : 300}
        >
          <Image
            src={"/icons/css.svg"}
            width={isMobile ? 40 : 60}
            height={isMobile ? 40 : 60}
            alt="logo"
            className="opacity-50"
          />
        </OrbitingCircles>

        <OrbitingCircles
          className="border-none bg-transparent"
          duration={20}
          radius={isMobile ? 160 : 300}
        >
          <Image
            src={"/icons/gitlab.svg"}
            width={isMobile ? 40 : 60}
            height={isMobile ? 40 : 60}
            alt="logo"
            className="opacity-50"
          />
        </OrbitingCircles>

        <OrbitingCircles
          className="border-none bg-transparent"
          duration={20}
          radius={isMobile ? 220 : 380}
          delay={2}
          reverse
        >
          <Image
            src={"/icons/react.svg"}
            width={isMobile ? 40 : 60}
            height={isMobile ? 40 : 60}
            alt="logo"
            className="opacity-50"
          />
        </OrbitingCircles>

        <OrbitingCircles
          className="border-none bg-transparent"
          duration={20}
          radius={isMobile ? 220 : 380}
          delay={12}
          reverse
        >
          <Image
            src={"/icons/aws.svg"}
            width={isMobile ? 40 : 60}
            height={isMobile ? 40 : 60}
            alt="logo"
            className="opacity-50"
          />
        </OrbitingCircles>

        <OrbitingCircles
          className="border-none bg-transparent"
          duration={20}
          radius={isMobile ? 280 : 460}
          delay={4}
        >
          <Image
            src={"/icons/nodejs.svg"}
            width={isMobile ? 40 : 60}
            height={isMobile ? 40 : 60}
            alt="logo"
            className="opacity-50"
          />
        </OrbitingCircles>

        <OrbitingCircles
          className="border-none bg-transparent"
          duration={20}
          radius={isMobile ? 280 : 460}
          delay={14}
        >
          <Image
            src={"/icons/flutter.svg"}
            width={isMobile ? 40 : 60}
            height={isMobile ? 40 : 60}
            alt="logo"
            className="opacity-50"
          />
        </OrbitingCircles>

        <OrbitingCircles
          className="border-none bg-transparent"
          duration={20}
          radius={isMobile ? 340 : 540}
          delay={6}
          reverse
        >
          <Image
            src={"/icons/html5.svg"}
            width={isMobile ? 40 : 60}
            height={isMobile ? 40 : 60}
            alt="logo"
            className="opacity-50"
          />
        </OrbitingCircles>

        <OrbitingCircles
          className="border-none bg-transparent"
          duration={20}
          radius={isMobile ? 340 : 540}
          delay={1}
          reverse
        >
          <Image
            src={"/icons/android.svg"}
            width={isMobile ? 40 : 60}
            height={isMobile ? 40 : 60}
            alt="logo"
            className="opacity-50"
          />
        </OrbitingCircles>

        <OrbitingCircles
          className="border-none bg-transparent"
          duration={20}
          radius={isMobile ? 420 : 620}
        ></OrbitingCircles>
      </div>
    </section>
  );
}

export default HeroSection;
