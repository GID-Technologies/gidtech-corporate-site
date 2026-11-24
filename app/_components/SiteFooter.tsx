import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, MapPin, ShieldCheck } from "lucide-react";

const serviceLinks = [
  {
    label: "Business Websites",
    href: "/solutions#business-websites",
  },
  {
    label: "Business Visibility",
    href: "/solutions#visibility-systems",
  },
  {
    label: "Custom Platforms",
    href: "/solutions#custom-platforms",
  },
  {
    label: "Automation",
    href: "/solutions#automation",
  },
];

const companyLinks = [
  {
    label: "About GID",
    href: "/about",
  },
  {
    label: "Our Work",
    href: "/products",
  },
  {
    label: "StatBet Case Study",
    href: "/statbet",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-14 text-neutral-400 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1fr]">
          {/* Company identity */}
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04]">
                <Image
                  src="/brand/GID Logo white.svg"
                  alt="GID Technologies eagle mark"
                  width={48}
                  height={48}
                  className="h-11 w-11 scale-[1.9] object-contain"
                />
              </div>

              <div>
                <p className="text-sm font-bold tracking-[0.22em] text-white">
                  GIDTECH
                </p>

                <p className="text-xs text-neutral-500">GID Technologies</p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-neutral-400">
              Professional websites, custom digital tools and practical business
              solutions designed around real needs.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Registered company · RC 9595315</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Commercial services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Services
            </p>

            <div className="mt-5 grid gap-3">
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Company
            </p>

            <div className="mt-5 grid gap-3">
              {companyLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Primary customer contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Start a conversation
            </p>

            <p className="mt-5 max-w-xs text-sm leading-6 text-neutral-400">
              Tell us about the website, system or business problem you&apos;re
              working on.
            </p>

            <a
              href="mailto:gidtech8@gmail.com"
              className="mt-5 inline-flex max-w-full items-center gap-2 break-all text-sm transition hover:text-white"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>gidtech8@gmail.com</span>
            </a>

            <div className="mt-5">
              <Link
                href="/contact?service=consultation#contact-form"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Start a Project
              </Link>
            </div>

            <a
              href="https://statbet.gidtechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-xs transition hover:text-white"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              Visit StatBet
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-neutral-600">
          © {new Date().getFullYear()} GID Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
