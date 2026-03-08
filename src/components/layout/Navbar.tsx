
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ActiveLink from "@/components/blocks/ActiveLink";
import { cn } from "@/app/lib/cn";
import { Menu, X, ChevronDown } from "lucide-react"; 

export default function Navbar() {
  const pathname = usePathname();
  const onProjects = pathname.startsWith("/projects");

 
  const [open, setOpen] = useState(false);
  const [projOpen, setProjOpen] = useState(false); 

  
  useEffect(() => {
    setOpen(false);
    setProjOpen(false);
  }, [pathname]);

  return (
    <header className="w-full border-b bg-white">
      <nav className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          <Image src="/logo.jpg" width={50} height={40} alt="Logo" />
          <span className="text-2xl font-bold leading-none -ml-1">UENTRA</span>
        </Link>

       
        <ul className="hidden md:flex items-center gap-6 font-medium text-lg">
          <li>
            <ActiveLink href="/" exact>
              Home
            </ActiveLink>
          </li>

          <li>
            <ActiveLink href="/about">About Us</ActiveLink>
          </li>

          
          <li className="relative group">
            <div
              className={cn(
                "relative inline-block px-1 py-2 transition-colors cursor-default",
                onProjects ? "text-black" : "text-gray-800 group-hover:text-black",
                "after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:rounded-full after:transition-all after:duration-200",
                onProjects
                  ? "after:w-full after:bg-black"
                  : "after:w-0 after:bg-black/50 group-hover:after:w-full"
              )}
            >
              Our Projects ▾
            </div>

           
            <ul className="absolute left-0 top-full text-center hidden group-hover:block group-focus-within:block bg-white border mt-2 rounded-lg shadow-md w-56 z-40">
              <li>
                <ActiveLink href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Core Towers
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Blueberry Villas
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/pride-bungalow" className="block px-4 py-2 hover:bg-gray-100">
                  Mayor House
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Pride Bungalow
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Sheraton House
                </ActiveLink>
              </li>
            </ul>
          </li>

          <li>
            <ActiveLink href="/Blogs">Blogs</ActiveLink>
          </li>
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 transition"
        >
          Let’s Connect
        </Link>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu (slide down) */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height] duration-300 border-b",
          open ? "max-h-[520px]" : "max-h-0"
        )}
      >
        <ul className="flex flex-col px-6 py-4 gap-2 text-lg font-medium">
          <li>
            <ActiveLink href="/" exact className="block px-2 py-2 rounded hover:bg-gray-100">
              Home
            </ActiveLink>
          </li>

          <li>
            <ActiveLink href="/about" className="block px-2 py-2 rounded hover:bg-gray-100">
              About Us
            </ActiveLink>
          </li>

          {/* Mobile Projects accordion */}
          <li>
            <button
              className="w-full flex items-center justify-between px-2 py-2 rounded hover:bg-gray-100"
              onClick={() => setProjOpen((v) => !v)}
              aria-expanded={projOpen}
            >
              <span className={cn(onProjects ? "text-black" : "text-gray-800")}>Our Projects</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 transition-transform",
                  projOpen ? "rotate-180" : "rotate-0"
                )}
              />
            </button>

            <ul
              className={cn(
                "pl-4 pr-2 mt-1 flex flex-col gap-1 overflow-hidden transition-[max-height] duration-300",
                projOpen ? "max-h-80" : "max-h-0"
              )}
            >
              <li>
                <ActiveLink href="#" className="block px-2 py-2 rounded hover:bg-gray-100">
                  Core Towers
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="#" className="block px-2 py-2 rounded hover:bg-gray-100">
                  Blueberry Villas
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/pride-bungalow" className="block px-2 py-2 rounded hover:bg-gray-100">
                  Mayor House
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="#" className="block px-2 py-2 rounded hover:bg-gray-100">
                  Pride Bungalow
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="#" className="block px-2 py-2 rounded hover:bg-gray-100">
                  Sheraton House
                </ActiveLink>
              </li>
            </ul>
          </li>

          <li>
            <ActiveLink href="/Blogs" className="block px-2 py-2 rounded hover:bg-gray-100">
              Blogs
            </ActiveLink>
          </li>

          {/* Mobile CTA */}
          <li className="pt-2">
            <Link
              href="/contact"
              className="block text-center rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 transition"
            >
              Let’s Connect
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
