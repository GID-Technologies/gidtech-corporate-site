import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Eye,
  FileText,
  Layers3,
  MapPin,
  Megaphone,
  Monitor,
  Network,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about GID Technologies, a practical technology company building digital products, business visibility systems, and future connection platforms.",
};

const principles = [
  {
    title: "Practical execution over empty noise",
    icon: CheckCircle2,
  },
  {
    title: "Trust-first business positioning",
    icon: ShieldCheck,
  },
  {
    title: "Clear communication and honest scope",
    icon: FileText,
  },
  {
    title: "Digital systems built around real needs",
    icon: Monitor,
  },
  {
    title: "Long-term ecosystem thinking",
    icon: Network,
  },
];

const focusAreas = [
  {
    title: "Digital Products",
    text: "We build practical platforms and digital systems designed around real problems, clear user flows, and long-term growth.",
    icon: Layers3,
  },
  {
    title: "Business Visibility Systems",
    text: "We help businesses improve online presence, customer trust, enquiry flow, campaign visibility, and professional presentation.",
    icon: Megaphone,
  },
  {
    title: "Technology Solutions",
    text: "We support companies with landing pages, digital showrooms, website planning, software direction, and business presentation tools.",
    icon: Monitor,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="section-shell mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Link
              href="/"
              className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              ← Back to Home
            </Link>

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
              About GID Technologies
            </p>

            <h1 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              A practical technology company building digital systems with
              proof.
            </h1>

            <p className="mt-8 text-lg leading-8 text-neutral-400 md:text-xl">
              GID Technologies builds practical digital products, business
              visibility systems, and technology solutions for modern
              businesses. Our work connects software, strategy, online presence,
              business presentation, and disciplined execution.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-400">
              The company exists to help businesses and communities become
              easier to find, easier to trust, and easier to contact through
              useful technology, clear positioning, and reliable execution.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/statbet"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                View StatBet Case Study
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/solutions#visibility-systems"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Explore Visibility Solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="premium-border overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-5">
            <div className="rounded-[1.5rem] bg-white p-8 shadow-premium md:p-12">
              <Image
                src="/brand/GID black.png"
                alt="GID Technologies official logo"
                width={900}
                height={900}
                className="mx-auto h-auto w-full max-w-sm object-contain"
                priority
              />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-neutral-600">
                  Company
                </p>
                <p className="mt-2 font-semibold text-white">
                  GID Technologies
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-neutral-600">
                  Status
                </p>
                <p className="mt-2 font-semibold text-white">
                  Proof-led technology company
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {focusAreas.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="glass rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/25"
              >
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <Icon className="h-5 w-5 text-white" />
                </div>

                <h2 className="text-xl font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-4 leading-7 text-neutral-400">{item.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Proof-led approach
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
              We build before we sell.
            </h2>

            <p className="mt-5 leading-8 text-neutral-400">
              StatBet is GIDTech’s live proof product. It demonstrates that the
              company can move beyond ideas into a public digital platform with
              real positioning, a custom domain, visibility monitoring, and a
              clear product experience.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-black/50 p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-neutral-500">Live proof product</p>
                  <p className="mt-1 text-2xl font-semibold text-white">
                    StatBet
                  </p>
                </div>

                <Link
                  href="/statbet"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
                >
                  View Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Operating principles
            </p>

            <ul className="mt-6 space-y-4">
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <li
                    key={principle.title}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-neutral-300"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                      <Icon className="h-4 w-4 text-white" />
                    </span>
                    <span>{principle.title}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Company details
          </p>

          <div className="mt-6 grid gap-5 text-neutral-400 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <p className="text-sm text-neutral-500">Company</p>
              <p className="mt-1 font-semibold text-white">GID Technologies</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
              <p className="text-sm text-neutral-500">Registration</p>
              <p className="mt-1 font-semibold text-white">RC 9595315</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <p className="text-sm text-neutral-500">Base</p>
              <p className="mt-1 font-semibold text-white">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
