"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

type SiteChromeProps = {
  children: ReactNode;
};

export default function SiteChrome({
  children,
}: SiteChromeProps) {
  const pathname = usePathname();

  const isPresentationRoute =
    pathname === "/graduation/present" ||
    pathname.startsWith("/graduation/present/");

  if (isPresentationRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}