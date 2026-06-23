import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, MapPin, ShieldCheck } from "lucide-react";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "StatBet", href: "/statbet" },
  { label: "GidAds", href: "/gidads" },
  { label: "Contact", href: "/contact" },
];

const productLinks = [
  { label: "StatBet", href: "/statbet", status: "Live" },
  { label: "GidAds", href: "/gidads", status: "Current focus" },
  { label: "GidConnect", href: "/products", status: "Planned" },
  { label: "CleanConnect", href: "/products", status: "Planned" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-14 text-neutral-400 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.9fr_0.9fr]">
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

            <p className="mt-6 max-w-md leading-7 text-neutral-400">
              Digital products, business visibility systems, and practical
              technology solutions for modern businesses.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-neutral-400" />
                <span>Registered company: RC 9595315</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-neutral-400" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Explore
            </p>

            <div className="mt-5 grid gap-3">
              {footerLinks.map((item) => (
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

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Ecosystem
            </p>

            <div className="mt-5 grid gap-3">
              {productLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3 transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <span className="text-sm text-neutral-300 transition group-hover:text-white">
                    {item.label}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-600">
                    {item.status}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Contact
            </p>

            <div className="mt-5 grid gap-4">
              <a
                href="mailto:gidtech8@gmail.com"
                className="inline-flex max-w-full items-center gap-2 break-all text-sm transition hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>gidtech8@gmail.com</span>
              </a>

              <a
                href="https://statbet.gidtechnologies.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm transition hover:text-white"
              >
                <ExternalLink className="h-4 w-4 shrink-0" />
                <span>View StatBet</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200 sm:w-fit"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-neutral-600 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} GID Technologies. All rights reserved.
          </p>
          <p>Built as GIDTech’s official digital trust layer.</p>
        </div>
      </div>
    </footer>
  );
}
