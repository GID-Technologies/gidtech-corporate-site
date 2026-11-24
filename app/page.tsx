import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Layers3,
  Workflow,
} from "lucide-react";
import ProductScreenshot from "./_components/ProductScreenshot";

export const metadata: Metadata = {
  title: "Business Websites, Software & Digital Solutions",
  description:
    "GID Technologies builds professional business websites, custom software and practical digital solutions for growing organisations.",
  alternates: { canonical: "/" },
};

const websiteEssentials = [
  "Mobile-ready design",
  "Clear service information",
  "Customer enquiry paths",
];

const otherServices = [
  {
    number: "02",
    title: "Custom Software",
    description:
      "Dashboards, internal tools and web platforms built around how your organisation works.",
    href: "/solutions#custom-platforms",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Visibility & Automation",
    description:
      "Improve how customers reach you and simplify repetitive business processes.",
    href: "/solutions#visibility-systems",
    icon: Workflow,
  },
];

const process = [
  {
    step: "01",
    title: "Discuss",
    detail: "Understand your business and what needs to change.",
  },
  {
    step: "02",
    title: "Define",
    detail: "Agree on the work, timeline and cost.",
  },
  {
    step: "03",
    title: "Deliver",
    detail: "Build, test and hand over the solution.",
  },
];

function ProductionHero() {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="section-shell relative overflow-hidden px-5 pb-12 pt-28 md:px-8 md:pb-16 md:pt-36 lg:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-grid-pattern bg-[size:64px_64px] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />

      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-white/[0.045] blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:min-h-[540px] lg:grid-cols-[1.07fr_0.93fr] lg:gap-12">
        <div className="animate-fade-up">
          <p className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium text-neutral-200">
            GID Technologies · Lagos, Nigeria
          </p>

          <h1
            id="home-title"
            className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-[4rem] lg:leading-[1.07]"
          >
            Professional websites and software for growing businesses.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-neutral-400 md:text-lg">
            We help businesses present their services clearly, make customer
            enquiries easier and improve daily work with practical digital
            solutions.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Explore services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              href="/contact?service=consultation#contact-form"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Discuss a project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-xs text-neutral-500">
            <span>Registered company · RC 9595315</span>
            <span>Live product · StatBet</span>
          </div>
        </div>

        <div className="relative animate-fade-up">
          <div className="premium-border glass overflow-hidden rounded-[1.75rem] p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Work from our team
                </p>

                <p className="mt-2 text-base font-semibold text-white">
                  StatBet · Football Intelligence
                </p>
              </div>

              <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-neutral-300">
                Live
              </span>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
              <ProductScreenshot
                src="/work/StatBet Homepage.png"
                alt="Screenshot of StatBet, a live GID Technologies product"
                priority
                cropTop={10}
                zoom={1.14}
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-neutral-500">
                Explore a working digital product.
              </p>

              <a
                href="https://statbet.gidtechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white transition hover:text-neutral-300"
              >
                Visit StatBet
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <ProductionHero />

      {/* COMMERCIAL SERVICES */}
      <section
        id="solutions"
        aria-labelledby="home-services-title"
        className="section-shell px-5 py-14 md:px-8 md:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                What we do
              </p>

              <h2
                id="home-services-title"
                className="max-w-2xl text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl"
              >
                Digital solutions for real business needs.
              </h2>
            </div>

            <Link
              href="/solutions"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white transition hover:text-neutral-300"
            >
              View all services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            {/* PRIMARY COMMERCIAL SERVICE */}
            <article className="premium-border glass flex flex-col justify-between overflow-hidden rounded-[1.75rem] p-6 md:p-8">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                    <Globe2 className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>

                  <span className="text-xs font-medium tracking-[0.2em] text-neutral-500">
                    01 / DIGITAL PRESENCE
                  </span>
                </div>

                <h3 className="mt-7 max-w-md text-2xl font-semibold tracking-[-0.035em] text-white md:text-3xl">
                  Business Websites & Digital Showrooms
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-7 text-neutral-400 md:text-base">
                  Give your business a professional online home where customers
                  can understand what you offer and get in touch.
                </p>
              </div>

              <div className="mt-8 grid gap-2 sm:grid-cols-3">
                {websiteEssentials.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 rounded-xl border border-white/10 bg-black/30 p-3 text-xs leading-5 text-neutral-300"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neutral-300"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact?service=business-website#contact-form"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Discuss a business website
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>

            {/* SECONDARY SERVICES */}
            <div className="grid gap-4">
              {otherServices.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.number}
                    className="glass flex flex-col justify-between rounded-[1.75rem] p-6 md:p-7"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                        <Icon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </span>

                      <span className="text-xs font-medium tracking-[0.2em] text-neutral-600">
                        {service.number}
                      </span>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-xl font-semibold tracking-tight text-white">
                        {service.title}
                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-6 text-neutral-400">
                        {service.description}
                      </p>
                    </div>

                    <Link
                      href={service.href}
                      className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition hover:text-neutral-300"
                    >
                      Explore service
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* GENUINE PRODUCT EVIDENCE */}
      <section
        id="work"
        aria-labelledby="home-work-title"
        className="section-shell px-5 py-12 md:px-8 md:py-16"
      >
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center p-7 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
              Proof of work
            </p>

            <h2
              id="home-work-title"
              className="mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl"
            >
              Built, launched and available to explore.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-neutral-400 md:text-base">
              StatBet is a live football-intelligence platform built by GID
              Technologies. Explore the product or see how we present our work.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://statbet.gidtechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Explore StatBet
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <Link
                href="/statbet"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Our work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center border-t border-white/10 bg-black/40 p-4 sm:p-6 lg:border-l lg:border-t-0">
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="text-xs font-medium text-neutral-300">
                StatBet · Performance Tracking
              </span>

              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                Product screenshot
              </span>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
              <ProductScreenshot
                src="/work/StatBet Performance.png"
                alt="StatBet performance tracking interface"
                cropTop={3}
                zoom={1.03}
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMPACT DELIVERY PROCESS */}
      <section
        aria-labelledby="home-process-title"
        className="section-shell px-5 py-12 md:px-8 md:py-14"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-3 border-b border-white/10 pb-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                Working with GID
              </p>

              <h2
                id="home-process-title"
                className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl"
              >
                A straightforward way to get started.
              </h2>
            </div>

            <Link
              href="/contact?service=consultation#contact-form"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition hover:text-neutral-300"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-4 pt-6 md:grid-cols-3 md:gap-6">
            {process.map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <span className="text-sm font-semibold text-neutral-500">
                  {item.step}
                </span>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-neutral-400">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL COMMERCIAL CTA */}
      <section
        id="contact"
        aria-labelledby="home-contact-title"
        className="section-shell px-5 pb-20 pt-8 md:px-8 md:pb-24"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-[1.75rem] border border-white/15 bg-white/[0.045] p-7 md:p-10 lg:flex-row lg:items-center">
          <div>
            <h2
              id="home-contact-title"
              className="text-balance text-2xl font-semibold tracking-[-0.035em] text-white md:text-3xl"
            >
              Have a project in mind?
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-7 text-neutral-400">
              Tell us what you need. We&apos;ll discuss the right scope and next
              steps with you.
            </p>
          </div>

          <Link
            href="/contact?service=consultation#contact-form"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
          >
            Discuss your project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
