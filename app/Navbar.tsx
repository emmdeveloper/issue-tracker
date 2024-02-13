"use client";
import React from "react";
import Link from "next/link";
const Navbar = () => {
  type linksType = {
    href: string;
    label: string;
  };
  const links: linksType[] = [
    {
      href: "/",
      label: "Dashboard",
    },
    {
      href: "/issues",
      label: "Issues",
    },
  ];
  return (
    <header>
      <nav className="flex space-x-6 items-center border-b px-5 h-14">
        <Link href={"/"}>
          <img src="/bug.png" alt="" className="w-[25px]" />
        </Link>
        <ul className="flex space-x-6">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                className="text-zinc-500 hover:text-zinc-800 transition-color"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
