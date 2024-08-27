import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IoIosArrowDown } from "react-icons/io";

const navItems = [
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
];

function Navbar() {
  return <FloatingNav navItems={navItems} className="w-full" />;
}

export default Navbar;
