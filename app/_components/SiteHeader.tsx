"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type NavigationItem = {
  label: string;
  href: string;
  description: string;
  meta?: string;
};

type NavigationGroup = {
  id: "solutions" | "products" | "company";
  label: string;
  href: string;
  overviewLabel: string;
  items: NavigationItem[];
};

const navigationGroups: NavigationGroup[] = [
  {
    id: "solutions",
    label: "Solutions",
    href: "/solutions",
    overviewLabel: "View All Solutions",
    items: [
      {
        label: "Business Websites",
        href: "/solutions#business-websites",
        description:
          "Professional websites and digital showrooms that strengthen credibility and customer enquiry flow.",
      },
      {
        label: "Visibility Systems",
        href: "/solutions#visibility-systems",
        description:
          "Structured positioning, discoverability, campaign direction, and public business presentation.",
      },
      {
        label: "Custom Platforms",
        href: "/solutions#custom-platforms",
        description:
          "Web platforms, portals, dashboards, internal tools, and MVPs built around real workflows.",
      },
      {
        label: "Automation",
        href: "/solutions#automation",
        description:
          "Practical workflows that reduce repetitive tasks and improve communication and organisation.",
      },
      {
        label: "Digital Care",
        href: "/solutions#digital-care",
        description:
          "Ongoing technical maintenance, content updates, monitoring, and improvement support.",
      },
    ],
  },
  {
    id: "products",
    label: "Products",
    href: "/products",
    overviewLabel: "View Products & Infrastructure",
    items: [
      {
        label: "StatBet",
        href: "/statbet",
        description:
          "GID Technologies’ live football-intelligence product and strongest public proof of execution.",
        meta: "Live",
      },
      {
        label: "GID Platform Core",
        href: "/products#gid-platform-core",
        description:
          "Reusable backend infrastructure being developed around customers, products, inventory, orders, and invoices.",
        meta: "Active Backend",
      },
      {
        label: "PaperTalk",
        href: "/products#papertalk",
        description:
          "Working accessibility-focused software prototype for making documents readable and audible.",
        meta: "Prototype",
      },
      {
        label: "GID Track Ecosystem",
        href: "/products#gid-track",
        description:
          "Future shipment tracking, notification, delivery-intelligence, and logistics-integration layers.",
        meta: "Roadmap",
      },
      {
        label: "Exploring Further",
        href: "/products#long-term-validation",
        description:
          "Mechanic Connection, Property Connection, and GID Car Tracker remain under long-term validation.",
        meta: "Validation",
      },
    ],
  },
  {
    id: "company",
    label: "Company",
    href: "/about",
    overviewLabel: "About GID Technologies",
    items: [
      {
        label: "About GID Technologies",
        href: "/about",
        description:
          "Understand the company, its proof-led model, execution principles, and long-term direction.",
      },
      {
        label: "Build With GID",
        href: "/build-with-gid",
        description:
          "Explore contributor, builder, business-partner, early-user, and strategic-support paths.",
      },
      {
        label: "Contact",
        href: "/contact",
        description:
          "Start a business, product, partnership, support, or contributor conversation.",
      },
      {
        label: "Aptech Graduation 2026",
        href: "/graduation",
        description:
          "Review the presentation, product roadmap, and participation paths from the graduation event.",
        meta: "Event",
      },
    ],
  },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const desktopNavigationRef = useRef<HTMLElement | null>(null);
  const desktopCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopGroup, setDesktopGroup] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setDesktopGroup(null);
    setMobileGroup(null);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;

    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;

      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDesktopGroup(null);
        setMobileOpen(false);
        setMobileGroup(null);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (!desktopNavigationRef.current?.contains(target)) {
        setDesktopGroup(null);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);

      if (desktopCloseTimerRef.current) {
        clearTimeout(desktopCloseTimerRef.current);
      }
    };
  }, []);

  function cancelDesktopClose() {
    if (desktopCloseTimerRef.current) {
      clearTimeout(desktopCloseTimerRef.current);
      desktopCloseTimerRef.current = null;
    }
  }

  function openDesktopGroup(groupId: string) {
    cancelDesktopClose();
    setDesktopGroup(groupId);
  }

  function scheduleDesktopClose() {
    cancelDesktopClose();

    desktopCloseTimerRef.current = setTimeout(() => {
      setDesktopGroup(null);
    }, 140);
  }

  function cleanHref(href: string) {
    return href.split("#")[0].split("?")[0];
  }

  function isActive(href: string) {
    const target = cleanHref(href);

    if (target === "/") {
      return pathname === "/";
    }

    return pathname === target || pathname.startsWith(`${target}/`);
  }

  function isGroupActive(group: NavigationGroup) {
    return (
      isActive(group.href) ||
      group.items.some(
        (item) => cleanHref(item.href) !== "/statbet" && isActive(item.href),
      )
    );
  }

  function closeMobileNavigation() {
    setMobileOpen(false);
    setMobileGroup(null);
  }

  const activeDesktopGroup =
    navigationGroups.find((group) => group.id === desktopGroup) ?? null;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[9999] isolate border-b border-white/10 bg-black/95 md:backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            onClick={closeMobileNavigation}
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

          {/* Desktop navigation */}
          <nav
            ref={desktopNavigationRef}
            aria-label="Primary navigation"
            onMouseEnter={cancelDesktopClose}
            onMouseLeave={scheduleDesktopClose}
            className="relative hidden items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.035] p-1 lg:flex"
          >
            <Link
              href="/"
              className={`rounded-full px-3 py-2 text-sm transition ${
                isActive("/")
                  ? "bg-white text-black"
                  : "text-neutral-300 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              Home
            </Link>

            {navigationGroups.map((group) => {
              const expanded = desktopGroup === group.id;
              const active = isGroupActive(group);
              return (
                <div
                  key={group.id}
                  onMouseEnter={() => openDesktopGroup(group.id)}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={expanded}
                    onClick={() => {
                      cancelDesktopClose();

                      setDesktopGroup((current) =>
                        current === group.id ? null : group.id,
                      );
                    }}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm transition ${
                      active
                        ? "bg-white text-black"
                        : "text-neutral-300 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    {group.label}

                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        expanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              );
            })}

            <Link
              href="/statbet"
              className={`rounded-full px-3 py-2 text-sm transition ${
                isActive("/statbet")
                  ? "bg-white text-black"
                  : "text-neutral-300 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              StatBet
            </Link>

            {activeDesktopGroup ? (
              <div
                onMouseEnter={cancelDesktopClose}
                onMouseLeave={scheduleDesktopClose}
                className="absolute left-1/2 top-full z-50 w-[680px] max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-3"
              >
                <div className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#050505] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.98)]">
                  <div className="grid grid-cols-2 gap-2">
                    {activeDesktopGroup.items.map((item) => (
                      <Link
                        key={`${activeDesktopGroup.id}-${item.label}`}
                        href={item.href}
                        onClick={() => setDesktopGroup(null)}
                        className="group rounded-2xl border border-transparent p-4 transition hover:border-white/10 hover:bg-white/[0.055]"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-sm font-semibold text-white">
                            {item.label}
                          </p>

                          {item.meta ? (
                            <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.05] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                              {item.meta}
                            </span>
                          ) : null}
                        </div>

                        <p className="mt-3 text-xs leading-5 text-neutral-500 transition group-hover:text-neutral-400">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>

                  <Link
                    href={activeDesktopGroup.href}
                    onClick={() => setDesktopGroup(null)}
                    className="mt-3 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                  >
                    {activeDesktopGroup.overviewLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ) : null}
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
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              setMobileOpen((current) => !current);
              setMobileGroup(null);
            }}
            className="relative z-[10001] flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08] lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {mobileOpen ? (
        <div
          className="fixed inset-x-0 bottom-0 top-[77px] z-[9998] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMobileNavigation}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <div
            id="mobile-navigation"
            className="relative z-10 max-h-full overflow-y-auto border-t border-white/10 bg-black px-5 py-6 shadow-[0_30px_100px_rgba(0,0,0,0.98)]"
          >
            <nav
              aria-label="Mobile navigation"
              className="mx-auto flex max-w-7xl flex-col gap-2"
            >
              <Link
                href="/"
                onClick={closeMobileNavigation}
                className={`rounded-2xl px-4 py-4 text-sm font-semibold transition ${
                  isActive("/")
                    ? "bg-white text-black"
                    : "border border-white/10 bg-white/[0.025] text-neutral-300"
                }`}
              >
                Home
              </Link>

              {navigationGroups.map((group) => {
                const expanded = mobileGroup === group.id;
                const active = isGroupActive(group);

                return (
                  <div
                    key={group.id}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015]"
                  >
                    <button
                      type="button"
                      aria-expanded={expanded}
                      aria-controls={`mobile-group-${group.id}`}
                      onClick={() => {
                        setMobileGroup((current) =>
                          current === group.id ? null : group.id,
                        );
                      }}
                      className={`flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-semibold transition ${
                        active
                          ? "bg-white text-black"
                          : "bg-white/[0.025] text-neutral-300"
                      }`}
                    >
                      <span>{group.label}</span>

                      <ChevronDown
                        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                          expanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expanded ? (
                      <div
                        id={`mobile-group-${group.id}`}
                        className="border-t border-white/10 bg-black p-2"
                      >
                        <Link
                          href={group.href}
                          onClick={closeMobileNavigation}
                          className="flex items-center justify-between gap-4 rounded-xl bg-white/[0.07] px-4 py-3.5 text-sm font-semibold text-white"
                        >
                          <span>{group.overviewLabel}</span>
                          <ArrowRight className="h-4 w-4 shrink-0" />
                        </Link>

                        <div className="mt-2 grid gap-1">
                          {group.items.map((item) => (
                            <Link
                              key={`${group.id}-mobile-${item.label}`}
                              href={item.href}
                              onClick={closeMobileNavigation}
                              className="rounded-xl px-4 py-3.5 transition active:bg-white/[0.08]"
                            >
                              <div className="flex items-start justify-between gap-4">
                                <span className="text-sm font-semibold text-neutral-200">
                                  {item.label}
                                </span>

                                {item.meta ? (
                                  <span className="max-w-[42%] shrink-0 text-right text-[9px] font-semibold uppercase leading-4 tracking-[0.1em] text-neutral-600">
                                    {item.meta}
                                  </span>
                                ) : (
                                  <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neutral-600" />
                                )}
                              </div>

                              <p className="mt-2 text-xs leading-5 text-neutral-600">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}

              <Link
                href="/statbet"
                onClick={closeMobileNavigation}
                className={`rounded-2xl border px-4 py-4 text-sm font-semibold transition ${
                  isActive("/statbet")
                    ? "border-white bg-white text-black"
                    : "border-white/10 bg-white/[0.025] text-neutral-300"
                }`}
              >
                StatBet
              </Link>

              <Link
                href="/contact?service=consultation"
                onClick={closeMobileNavigation}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-black"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
