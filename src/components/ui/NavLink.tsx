"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  icon: ReactNode;
}

const NavLink = ({ href, children, icon }: NavLinkProps) => {
  const pathName = usePathname();

  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`mr-3 ${isActive ? "btn bg-amber-300 text-white" : "btn btn-ghost"}`}
    >
      {" "}
      {icon}
      {children}{" "}
    </Link>
  );
};

export default NavLink;
