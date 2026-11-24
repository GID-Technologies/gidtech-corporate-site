import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Globe2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore StatBet, a live football intelligence platform built by GID Technologies, and discover the business services we provide.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black px-5 pb-24 pt-32 text-white md:px-8 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
          Our work
        </p>

        <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
          Technology you can see in action.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-400 md:text-lg">
          We build digital products and business solutions with a focus on clear
          experiences and practical execution. Here&apos;s a product you can
          explore today.
        </p>

        <section
          aria-labelledby="statbet-product-title"
          className="mt-12 grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-neutral-300">
              <Globe2 className="h-3.5 w-3.5" aria-hidden="true" />
              Live public product
            </div>

            <h2
              id="statbet-product-title"
              className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl"
            >
              StatBet
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-400">
              A football-intelligence platform bringing match analysis, outcome
              review and performance tracking together in one public experience.
            </p>

            <p className="mt-5 flex items-start gap-2 text-sm leading-6 text-neutral-300">
              <ShieldCheck
                className="mt-0.5 h-4 w-4 shrink-0"
                aria-hidden="true"
              />
              Developed and operated under GID Technologies.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="https://statbet.gidtechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Explore StatBet
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <Link
              href="/statbet"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06]"
            >
              View case study
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-7 text-neutral-400">
            Need a website, a business tool or a custom digital solution?
          </p>

          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-neutral-300"
          >
            Explore our services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}
