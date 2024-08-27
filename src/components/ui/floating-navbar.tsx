"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      console.log(scrollYProgress.get());

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-[90%] h-[60px] md:h-[80px] mx-auto fixed top-8 inset-x-0 border border-transparent dark:border-white/[0.2] rounded-[20px] dark:bg-black bg-white shadow-shadow z-[5000] px-8 py-2 items-center space-x-4 justify-between text-[16px]",
          className
        )}
      >
        <Image src={"/NAVBAR.svg"} width={100} height={100} alt="logo" />
        <div className="hidden lg:flex gap-6 text-[16px]">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex gap-1 space-x-1 text-black dark:hover:text-neutral-300 hover:text-neutral-500 text-[16px]"
              )}
            >
              <span className="hidden sm:block text-[16px] font-medium">
                {navItem.name}
              </span>
              <span>{navItem.icon}</span>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex gap-2 text-[16px]">
          <button className="border font-medium relative border-primary dark:border-white/[0.2] text-secondary-foreground dark:text-white px-4 py-2 rounded-[8px] bg-secondary text-[16px]">
            <span>Log in</span>
          </button>
          <button className="font-medium relative dark:text-white px-4 py-2 rounded-[8px] bg-primary text-white">
            <span>Sign in</span>
          </button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="lg:hidden">
            <RxHamburgerMenu className="lg:hidden w-6 h-6" />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="mt-10">
            <DropdownMenuGroup>
              {navItems.map((navItem: any, idx: number) => (
                <DropdownMenuItem key={idx}>
                  <Link
                    key={`link=${idx}`}
                    href={navItem.link}
                    className={cn(
                      "relative dark:text-neutral-50 items-center flex gap-1 space-x-1 text-black dark:hover:text-neutral-300 hover:text-neutral-500 text-[16px]"
                    )}
                  >
                    <span className="text-[16px] font-medium">
                      {navItem.name}
                    </span>
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem>
                <Link
                  href={"/"}
                  className={cn(
                    "relative dark:text-neutral-50 items-center flex gap-1 space-x-1 text-black dark:hover:text-neutral-300 hover:text-neutral-500 text-[16px]"
                  )}
                >
                  <span className="text-[16px] font-medium">Log in</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={"/"}
                  className={cn(
                    "relative dark:text-neutral-50 items-center flex gap-1 space-x-1 text-black dark:hover:text-neutral-300 hover:text-neutral-500 text-[16px]"
                  )}
                >
                  <span className="text-[16px] font-medium">Sign in</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>
    </AnimatePresence>
  );
};
