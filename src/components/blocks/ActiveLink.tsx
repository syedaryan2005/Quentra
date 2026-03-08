
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  exact?: boolean; 
  className?: string; 
};

export default function ActiveLink({ href, children, exact = false }: Props) {
  const pathname = usePathname();
  const isActive = exact
    ? pathname === href
    : pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative inline-block px-2 py-1 transition-colors",
        isActive ? "text-gray-900" : "text-gray-900 hover:text-gray-500",
        
        "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:rounded-full",
     isActive
  ? "text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-black"
  : "text-gray-700 hover:text-black hover:after:w-full after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all"
      )}
    >
      {children}
    </Link>
  );
}
