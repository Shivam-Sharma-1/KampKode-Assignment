"use-client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
  return (
    <main className="px-12">
      <FloatingNav
        navItems={[
          {
            name: "Home",
            link: "/",
          },
          {
            name: "Products",
            link: "/",
            icon: <IoIosArrowDown className="h-5 w-5" />,
          },
          {
            name: "Resources",
            link: "/",
            icon: <IoIosArrowDown className="h-5 w-5" />,
          },
          { name: "Pricing", link: "/" },
        ]}
        className="w-full"
      />
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
