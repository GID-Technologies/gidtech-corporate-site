import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Eye,
  FileText,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  Monitor,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "GidAds",
  description:
    "GidAds is the business visibility systems arm of GID Technologies, helping businesses become easier to find, trust, and contact.",
};

const deliverables = [
  {
    title: "Digital showroom setup",
    text: "Structure a clean online presentation for a business, its products, services, contact flow, and credibility details.",
    icon: Monitor,
  },
  {
    title: "Business profile writing",
    text: "Turn scattered business information into clear, professional copy that customers and partners can understand.",
    icon: FileText,
  },
  {
    title: "WhatsApp and enquiry flow",
    text: "Make it easier for interested customers to contact the business through clearer call, WhatsApp, and message paths.",
    icon: MessageCircle,
  },
  {
    title: "Social media positioning",
    text: "Review, clean up, and improve how the business appears across public social channels.",
    icon: Eye,
  },
  {
    title: "Campaign planning",
    text: "Plan visibility campaigns around business goals, target customers, available offers, and approved budgets.",
    icon: ClipboardList,
  },
  {
    title: "Reporting and review",
    text: "Track visible activity, enquiries where available, campaign direction, and improvement opportunities.",
    icon: BarChart3,
  },
];

const boundaries = [
  {
    title: "Visibility support, not guaranteed sales",
    icon: ShieldCheck,
  },
  {
    title: "Strategy and execution support, not fake promises",
    icon: CheckCircle2,
  },
  {
    title: "Campaign expenses handled separately after approval",
    icon: BarChart3,
  },
  {
    title: "Clear scope, timeline, deliverables, and review points",
    icon: Workflow,
  },
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
    <main className="min-h-screen bg-black text-white">
      <section className="section-shell mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
        <Link
          href="/"
          className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.08] hover:text-white"
        >
          ← Back to Home
        </Link>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
              Business Visibility Systems
            </p>

            <h1 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              GidAds helps businesses become easier to find, trust, and contact.
            </h1>

            <p className="mt-8 text-lg leading-8 text-neutral-400 md:text-xl">
              GidAds is the business visibility arm of GID Technologies. It
              supports businesses with digital showrooms, social media
              positioning, online campaign planning, field advertising support,
              enquiry flow setup, and practical visibility reporting.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Request a Visibility Proposal
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/statbet"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                View Proof of Execution
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="premium-border overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-5">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/70 p-6">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <Megaphone className="h-6 w-6 text-white" />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                Positioning
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
                Not just advert posting.
              </h2>

              <p className="mt-4 leading-7 text-neutral-400">
                The goal is to build a visibility system around the business:
                better presentation, clearer contact paths, stronger public
                trust, and more structured campaign support.
              </p>

              <div className="mt-6 grid gap-3">
                {boundaries.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-sm text-neutral-300"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-neutral-500" />
                        <span>{item.title}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            What GidAds can support
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
            A structured visibility layer for serious businesses.
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="glass rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/25"
                >
                  <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-neutral-400">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            How the work flows
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
            Discovery first. Execution after clarity.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {process.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-black/50 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">
                  Step {index + 1}
                </p>
                <p className="mt-4 text-lg font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Visibility system scope
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/50 p-6">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <Monitor className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Presentation</h3>
              <p className="mt-4 leading-7 text-neutral-400">
                Clean business profile, product/service clarity, digital
                showroom structure, and stronger public appearance.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/50 p-6">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Discovery</h3>
              <p className="mt-4 leading-7 text-neutral-400">
                Social positioning, online campaign direction, field support
                where needed, and structured visibility planning.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/50 p-6">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Enquiry flow</h3>
              <p className="mt-4 leading-7 text-neutral-400">
                Clear WhatsApp, email, call, and message paths that make it
                easier for serious customers to reach the business.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-black p-8 text-center md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Clear promise
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
            We help businesses improve visibility, trust, presentation, and
            enquiry flow — without promising guaranteed buyers.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-400">
            Serious visibility work should be scoped properly. Project fees,
            campaign budgets, third-party costs, media spend, photography,
            printing, logistics, and other external expenses should be discussed
            and approved clearly before execution.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Request a Visibility Proposal
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              View GIDTech Ecosystem
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
