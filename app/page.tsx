import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle2,
  Eye,
  FileText,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Megaphone,
  Monitor,
  Network,
  Rocket,
  Search,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const credibilityItems = [
  "Registered company: RC 9595315",
  "Live proof product: StatBet",
  "Business visibility systems",
  "Based in Lagos, Nigeria",
];

const whatWeDo: {
  title: string;
  copy: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Digital Products",
    copy: "We build practical platforms and digital systems designed around real problems, clear user flows, and long-term growth.",
    icon: Layers3,
  },
  {
    title: "Business Visibility Systems",
    copy: "We help businesses improve online presence, customer trust, enquiry flow, campaign visibility, and professional presentation.",
    icon: Megaphone,
  },
  {
    title: "Technology Solutions",
    copy: "We support companies with landing pages, digital showrooms, website planning, software direction, and business presentation tools.",
    icon: Monitor,
  },
];

const statBetChips: {
  label: string;
  icon: LucideIcon;
}[] = [
  { label: "Live public website", icon: Globe2 },
  { label: "Custom domain", icon: Network },
  { label: "Analytics setup", icon: BarChart3 },
  { label: "Outcome review", icon: CheckCircle2 },
  { label: "Performance tracking", icon: Eye },
  { label: "Public football intelligence pages", icon: FileText },
];

const gidadsCards: {
  title: string;
  icon: LucideIcon;
}[] = [
  { title: "Digital showroom setup", icon: Monitor },
  { title: "WhatsApp/contact flow", icon: Mail },
  { title: "Social media cleanup", icon: ShieldCheck },
  { title: "Campaign planning", icon: Workflow },
  { title: "Field advertising support", icon: MapPin },
  { title: "Monthly reporting", icon: BarChart3 },
];

const roadmap = [
  {
    name: "StatBet",
    category: "Football intelligence platform",
    status: "Live",
  },
  {
    name: "GidAds",
    category: "Business visibility systems",
    status: "Current focus",
  },
  {
    name: "GidConnect",
    category: "Property and opportunity connection concept",
    status: "Planned",
  },
  {
    name: "CleanConnect",
    category: "Service connection concept",
    status: "Planned",
  },
];

const process = [
  {
    step: "Discover",
    copy: "Understand the business, product, market, and current visibility gap.",
  },
  {
    step: "Plan",
    copy: "Define scope, structure, messaging, tools, and the execution route.",
  },
  {
    step: "Build / Set Up",
    copy: "Create the platform, showroom, page, campaign setup, or support system.",
  },
  {
    step: "Launch",
    copy: "Release the work publicly with clean contact paths and clear presentation.",
  },
  {
    step: "Monitor",
    copy: "Track activity, visibility signals, enquiries, and operational feedback.",
  },
  {
    step: "Improve",
    copy: "Improve the system based on evidence, client goals, and market response.",
  },
];

const principles: {
  title: string;
  icon: LucideIcon;
}[] = [
  { title: "Practical execution", icon: Rocket },
  { title: "Trust-first positioning", icon: ShieldCheck },
  { title: "Clear communication", icon: FileText },
  { title: "Measurable visibility", icon: Eye },
  { title: "Long-term ecosystem thinking", icon: Network },
];

const statBetScreenshots = [
  {
    title: "Homepage",
    label: "Football intelligence platform",
    src: "/work/image.png",
  },
  {
    title: "Performance Tracker",
    label: "Public outcome review and tracking",
    src: "/work/statbet-performance-tracker.png",
  },
  {
    title: "World Cup Board",
    label: "Tournament intelligence experience",
    src: "/work/statbet-worldcup-page.png",
  },
];

function SmartLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className: string;
}) {
  const isExternal = href.startsWith("http");
  const isMail = href.startsWith("mailto:");

  if (isExternal || isMail) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-400 md:text-lg">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function PrimaryButton({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <SmartLink
      href={href}
      className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-neutral-200"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </SmartLink>
  );
}

function SecondaryButton({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <SmartLink
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08]"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </SmartLink>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="section-shell relative min-h-[92vh] overflow-hidden px-5 pb-16 pt-32 md:px-8 md:pt-36 lg:pt-40"
    >
      <div className="absolute inset-0 -z-20 bg-grid-pattern bg-[size:64px_64px] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      <div className="absolute left-1/2 top-20 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/[0.045] blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium text-neutral-200">
            <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.55)]" />
            Proof-led technology company
          </div>

          <h1 className="text-balance max-w-5xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Building digital infrastructure for products, businesses, and
            connected ecosystems.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400 md:text-xl">
            GID Technologies creates practical digital products, business
            visibility systems, and technology solutions that help companies
            become more trusted, discoverable, and ready for modern growth.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton href="/statbet">View Proof of Work</PrimaryButton>
            <SecondaryButton href="/contact">Start a Project</SecondaryButton>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {credibilityItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-neutral-300 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up lg:pl-8">
          <div className="premium-border glass relative overflow-hidden rounded-[2rem] p-5">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-white/[0.035] blur-3xl" />

            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  GIDTech command view
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  Product and visibility ecosystem
                </h3>
              </div>

              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
                Active
              </span>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-premium">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-white">StatBet</p>
                  <p className="text-xs text-neutral-500">Live proof product</p>
                </div>

                <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                  Live
                </span>
              </div>

              <div className="relative aspect-[16/9]">
                <Image
                  src="/work/image.png"
                  alt="StatBet live platform screenshot"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 560px"
                  priority
                />
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { label: "StatBet", status: "Live" },
                { label: "GidAds", status: "Current" },
                { label: "GidConnect", status: "Planned" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                >
                  <p className="text-sm font-semibold text-white">
                    {item.label}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-600">
                    {item.status}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.035] p-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm leading-7 text-neutral-300">
                  Public trust layer for products, visibility work, and serious
                  business conversations.
                </p>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-2 hidden rounded-3xl border border-white/15 bg-white/[0.06] px-5 py-4 text-sm text-neutral-200 shadow-card backdrop-blur md:block">
            Live product proof, not empty positioning.
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandProof() {
  return (
    <section className="section-shell px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[1.5rem] bg-white p-8 shadow-premium md:p-12">
            <div className="mx-auto max-w-sm">
              <Image
                src="/brand/GID black.png"
                alt="GID Technologies official logo"
                width={700}
                height={700}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>

          <div className="p-2 md:p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
              Official company identity
            </p>

            <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              The parent company behind practical products and visibility
              systems.
            </h2>

            <p className="mt-6 text-base leading-8 text-neutral-400 md:text-lg">
              GID Technologies is the public trust layer behind StatBet, GidAds,
              and the company’s future connection ecosystem. The website exists
              to show the company clearly, professionally, and honestly before
              deeper business conversations begin.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Registered company: RC 9595315",
                "Live proof product: StatBet",
                "Business visibility systems",
                "Based in Lagos, Nigeria",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-neutral-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section id="about" className="section-shell px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What we do"
          title="Practical technology work with a clear business purpose."
          copy="GID Technologies connects product building, online presence, campaign visibility, and business presentation into one serious execution layer."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {whatWeDo.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="glass group rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/25"
              >
                <span className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-neutral-400">{item.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatBetProof() {
  return (
    <section id="statbet" className="section-shell px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="premium-border glass overflow-hidden rounded-[2rem]">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/10 p-8 md:p-12 lg:border-b-0 lg:border-r lg:border-white/10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                Proof of execution
              </p>

              <h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
                StatBet proves GIDTech can build beyond theory.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-400">
                StatBet is a live football intelligence platform built under GID
                Technologies. It demonstrates our ability to build, launch,
                monitor, and publicly position a real digital product.
              </p>

              <div className="mt-8 grid gap-3">
                {statBetChips.map((chip) => {
                  const Icon = chip.icon;

                  return (
                    <div
                      key={chip.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-sm font-medium text-neutral-200"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-neutral-500" />
                        <span>{chip.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton href="https://statbet.gidtechnologies.com">
                  Visit StatBet
                </PrimaryButton>
                <SecondaryButton href="/statbet">
                  View Case Study
                </SecondaryButton>
              </div>
            </div>

            <div className="relative overflow-hidden p-5 md:p-8">
              <div className="absolute inset-0 bg-grid-pattern bg-[size:42px_42px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />

              <div className="relative space-y-5">
                <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-black/50 p-5">
                  <div>
                    <p className="text-sm text-neutral-500">
                      Live product preview
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold text-white">
                      StatBet
                    </h3>
                  </div>

                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-black">
                    Live
                  </span>
                </div>

                <div className="grid gap-5">
                  {statBetScreenshots.map((shot, index) => (
                    <div
                      key={shot.title}
                      className={`overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] shadow-premium ${
                        index === 0 ? "" : "md:ml-10"
                      }`}
                    >
                      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {shot.title}
                          </p>
                          <p className="text-xs text-neutral-500">
                            {shot.label}
                          </p>
                        </div>

                        <div className="flex gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                        </div>
                      </div>

                      <div className="relative aspect-[16/8.5] bg-black">
                        <Image
                          src={shot.src}
                          alt={`StatBet ${shot.title} screenshot`}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, 650px"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-sm leading-7 text-neutral-300">
                    This is the credibility bridge: GIDTech does not only talk
                    about digital platforms and visibility. It already has a
                    live product that can be visited, reviewed, monitored, and
                    improved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function GidAds() {
  return (
    <section id="gidads" className="section-shell px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Business visibility systems"
          title="GidAds — visibility infrastructure for serious businesses."
          copy="GidAds helps businesses become more visible, trusted, discoverable, and professionally presented through digital showrooms, online campaigns, social media positioning, field advertising support, and enquiry flow setup."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gidadsCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-neutral-400">
                  Structured support designed to improve business presentation,
                  discovery, contact flow, and campaign clarity.
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-sm leading-7 text-neutral-300">
          GidAds is not positioned as a promise of guaranteed sales. It is a
          practical visibility system focused on trust, presentation, discovery,
          campaign support, and clearer enquiry paths.
        </div>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <PrimaryButton href="/contact">
            Request a Visibility Proposal
          </PrimaryButton>
          <SecondaryButton href="/statbet">
            View Proof of Execution
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section id="products" className="section-shell px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Ecosystem roadmap"
          title="A controlled product ecosystem, built in stages."
          copy="The website presents what is live, what is commercially active, and what is planned without overstating company scale."
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {roadmap.map((item) => (
            <article
              key={item.name}
              className="glass rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25"
            >
              <div className="mb-10 flex items-center justify-between gap-4">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-neutral-200">
                  {item.status}
                </span>
                <span className="h-2 w-2 rounded-full bg-white/70" />
              </div>
              <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
              <p className="mt-4 min-h-14 text-sm leading-6 text-neutral-400">
                {item.category}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section className="section-shell px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How we work"
          title="A simple execution process from idea to visibility."
        />

        <div className="glass rounded-[2rem] p-5 md:p-8">
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="relative rounded-3xl border border-white/10 bg-white/[0.035] p-5"
              >
                <span className="text-xs font-bold text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {item.step}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section className="section-shell px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Operating principles"
          title="Serious work needs clear standards."
          copy="The site should make GIDTech feel disciplined: practical, truthful, measurable, and built for long-term conversations."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <div
                key={principle.title}
                className="rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/[0.055] to-white/[0.02] p-6"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold leading-7 text-white">
                  {principle.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section id="contact" className="section-shell px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="premium-border relative overflow-hidden rounded-[2rem] bg-black p-8 md:p-14">
          <div className="absolute inset-0 bg-premium-radial opacity-70" />
          <div className="absolute inset-0 bg-grid-pattern bg-[size:58px_58px] opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Contact
            </p>
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              Ready to build stronger digital presence?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
              Work with GID Technologies on digital products, business
              visibility, online presence, or practical technology solutions.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <PrimaryButton href="mailto:gidtech8@gmail.com?subject=Start%20a%20Project%20with%20GID%20Technologies">
                Start a Project
              </PrimaryButton>
              <SecondaryButton href="mailto:gidtech8@gmail.com?subject=Request%20a%20Visibility%20Proposal">
                Request a Visibility Proposal
              </SecondaryButton>
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
      <div className="noise" />
      <Hero />
      <BrandProof />
      <WhatWeDo />
      <StatBetProof />
      <GidAds />
      <Roadmap />
      <HowWeWork />
      <Principles />
      <ContactCTA />
    </main>
  );
}
