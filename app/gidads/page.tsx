import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GidAds",
  description:
    "GidAds is the business visibility systems arm of GID Technologies, helping businesses become easier to find, trust, and contact.",
};

const deliverables = [
  {
    title: "Digital showroom setup",
    text: "Structure a clean online presentation for a business, its products, services, contact flow, and credibility details.",
  },
  {
    title: "Business profile writing",
    text: "Turn scattered business information into clear, professional copy that customers and partners can understand.",
  },
  {
    title: "WhatsApp and enquiry flow",
    text: "Make it easier for interested customers to contact the business through clearer call, WhatsApp, and message paths.",
  },
  {
    title: "Social media positioning",
    text: "Review, clean up, and improve how the business appears across public social channels.",
  },
  {
    title: "Campaign planning",
    text: "Plan visibility campaigns around business goals, target customers, available offers, and approved budgets.",
  },
  {
    title: "Reporting and review",
    text: "Track visible activity, enquiries where available, campaign direction, and improvement opportunities.",
  },
];

const boundaries = [
  "Visibility support, not guaranteed sales",
  "Strategy and execution support, not fake promises",
  "Campaign expenses handled separately after approval",
  "Clear scope, timeline, deliverables, and review points",
];

const process = [
  "Business discovery",
  "Visibility plan",
  "Digital setup",
  "Campaign support",
  "Monitoring",
  "Review and improve",
];

export default function GidAdsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Link
          href="/"
          className="mb-10 inline-flex rounded-full border border-cyan-300/20 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-300/10"
        >
          ← Back to Home
        </Link>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Business Visibility Systems
            </p>

            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              GidAds helps businesses become easier to find, trust, and contact.
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-300 md:text-xl">
              GidAds is the business visibility arm of GID Technologies. It
              supports businesses with digital showrooms, social media
              positioning, online campaign planning, field advertising support,
              enquiry flow setup, and practical visibility reporting.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-cyan-300 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                Request a Visibility Proposal
              </Link>
              <Link
                href="/statbet"
                className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
              >
                View Proof of Execution
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-6 shadow-2xl shadow-cyan-950/40">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Positioning
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                Not just advert posting.
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                The goal is to build a visibility system around the business:
                better presentation, clearer contact paths, stronger public
                trust, and more structured campaign support.
              </p>

              <div className="mt-6 grid gap-3">
                {boundaries.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            What GidAds can support
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            A structured visibility layer for serious businesses.
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            How the work flows
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            Discovery first. Execution after clarity.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {process.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-5"
              >
                <p className="text-sm font-semibold text-cyan-300">
                  Step {index + 1}
                </p>
                <p className="mt-3 text-lg font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.06] p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Clear promise
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            We help businesses improve visibility, trust, presentation, and
            enquiry flow — without promising guaranteed buyers.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-300">
            Serious visibility work should be scoped properly. Project fees,
            campaign budgets, third-party costs, media spend, photography,
            printing, logistics, and other external expenses should be discussed
            and approved clearly before execution.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-cyan-300 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              Request a Visibility Proposal
            </Link>
            <Link
              href="/products"
              className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              View GIDTech Ecosystem
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
