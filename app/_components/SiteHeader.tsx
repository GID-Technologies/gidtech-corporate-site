"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "StatBet", href: "/statbet" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[9999] isolate border-b border-white/10 bg-black/95 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04]">
              <Image
                src="/brand/GID Logo white.svg"
                alt="GID Technologies eagle mark"
                width={44}
                height={44}
                className="h-10 w-10 scale-[1.9] object-contain"
                priority
              />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-bold tracking-[0.22em] text-white">
                GIDTECH
              </p>
              <p className="truncate text-xs text-neutral-500">
                GID Technologies
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.035] p-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm transition ${
                  isActive(item.href)
                    ? "bg-white text-black"
                    : "text-neutral-300 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Link
              href="/contact?service=consultation"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
            className="relative z-[10001] flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
            className="fixed inset-x-0 bottom-0 top-[77px] z-[9997] bg-black/70 lg:hidden"
          />

          <div
            id="mobile-navigation"
            className="fixed inset-x-0 top-[77px] z-[9998] max-h-[calc(100dvh-77px)] overflow-y-auto border-t border-white/10 bg-black px-5 py-6 shadow-[0_30px_80px_rgba(0,0,0,0.95)] lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-4 text-sm font-semibold transition ${
                    isActive(item.href)
                      ? "bg-white text-black"
                      : "text-neutral-300 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact?service=consultation"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </div>
        </>
      ) : null}
    </>
  );
}
