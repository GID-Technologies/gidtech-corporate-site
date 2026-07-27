import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Accessibility,
  BarChart3,
  Briefcase,
  Building2,
  Car,
  CheckCircle2,
  Eye,
  FileText,
  Globe2,
  Handshake,
  House,
  Layers3,
  Mail,
  MapPin,
  Megaphone,
  Monitor,
  Network,
  Rocket,
  Search,
  ShieldCheck,
  Users,
  Wrench,
  Workflow,
} from "lucide-react";
import ProductScreenshot from "./_components/ProductScreenshot";

const credibilityItems = [
  "Registered company: RC 9595315",
  "Live proof product: StatBet",
  "Business visibility systems",
  "Based in Lagos, Nigeria",
];

const businessProblems: {
  problem: string;
  solution: string;
  outcome: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    problem: "Your business does not look credible enough online.",
    solution: "Business Websites",
    outcome:
      "Present the business professionally, explain its offers clearly, and create reliable customer contact paths.",
    href: "/solutions#business-websites",
    icon: Globe2,
  },
  {
    problem: "People struggle to find, understand, or contact the business.",
    solution: "Visibility Systems",
    outcome:
      "Improve public presentation, discoverability, campaign direction, and enquiry flow through structured visibility systems.",
    href: "/solutions#visibility-systems",
    icon: Search,
  },
  {
    problem: "Manual and repetitive work slows the team down.",
    solution: "Automation",
    outcome:
      "Organize forms, enquiries, notifications, follow-ups, and repeated workflows into a clearer system.",
    href: "/solutions#automation",
    icon: Workflow,
  },
  {
    problem: "Generic tools do not fit the business or product idea.",
    solution: "Custom Platforms",
    outcome:
      "Plan and build dashboards, portals, internal tools, MVPs, and practical web platforms around real requirements.",
    href: "/solutions#custom-platforms",
    icon: Layers3,
  },
];

const featuredSolutions: {
  title: string;
  description: string;
  outcome: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Business Websites & Digital Showrooms",
    description:
      "Professional digital presence that explains the business, presents its offers, strengthens trust, and supports customer enquiries.",
    outcome: "Better credibility and clearer customer journeys.",
    href: "/solutions#business-websites",
    icon: Globe2,
  },
  {
    title: "Business Visibility Systems",
    description:
      "Structured positioning, visibility assessment, campaign planning, social direction, and enquiry-flow support for serious businesses.",
    outcome: "Improved discoverability, trust, and public presentation.",
    href: "/solutions#visibility-systems",
    icon: Megaphone,
  },
  {
    title: "Custom Platforms & Business Tools",
    description:
      "Practical web applications, dashboards, portals, MVPs, and internal tools designed around specific business workflows.",
    outcome: "Technology that fits the actual process.",
    href: "/solutions#custom-platforms",
    icon: Monitor,
  },
  {
    title: "Automation & Intelligent Workflows",
    description:
      "Forms, enquiry routing, follow-up systems, notifications, and intelligent assistance for repetitive business processes.",
    outcome: "Less manual work and more operational consistency.",
    href: "/solutions#automation",
    icon: Workflow,
  },
  {
    title: "Ongoing Digital Care",
    description:
      "Structured post-launch maintenance for websites, content, integrations, performance, and essential business information.",
    outcome: "Better reliability after launch.",
    href: "/solutions#digital-care",
    icon: Wrench,
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

const visibilityCards: {
  title: string;
  copy: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Business presentation",
    copy: "Professional websites, digital showrooms, business profiles, and clearer public positioning.",
    icon: Monitor,
  },
  {
    title: "Customer enquiry flow",
    copy: "Clear WhatsApp, email, call, form, and message routes for interested customers.",
    icon: Mail,
  },
  {
    title: "Online discoverability",
    copy: "Search visibility, social positioning, business information, and stronger digital presence.",
    icon: Search,
  },
  {
    title: "Campaign direction",
    copy: "Structured campaign planning around business goals, target customers, available offers, and approved budgets.",
    icon: Workflow,
  },
  {
    title: "Offline visibility support",
    copy: "Field promotion, physical materials, event visibility, and local awareness where appropriate.",
    icon: MapPin,
  },
  {
    title: "Monitoring and improvement",
    copy: "Practical reporting, enquiry review, visibility signals, and improvement recommendations.",
    icon: BarChart3,
  },
];
const industries: {
  title: string;
  copy: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Local Businesses",
    copy: "Professional presence, clearer offers, customer contact paths, and visibility support.",
    icon: Briefcase,
  },
  {
    title: "Schools & Training",
    copy: "Websites, admission information, portals, enquiry systems, and parent communication flows.",
    icon: FileText,
  },
  {
    title: "Churches & Events",
    copy: "Event registration, information pages, donation direction, communication, and public visibility.",
    icon: Users,
  },
  {
    title: "Hospitality & Food",
    copy: "Menus, booking and enquiry routes, business information, promotions, and customer discovery.",
    icon: Building2,
  },
  {
    title: "Property & Real Estate",
    copy: "Property showcases, lead capture, enquiry systems, digital presentation, and campaign support.",
    icon: MapPin,
  },
  {
    title: "Service Companies",
    copy: "Clear service presentation, customer intake, workflow support, and ongoing digital care.",
    icon: Workflow,
  },
];

const roadmap: {
  name: string;
  category: string;
  status: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    name: "StatBet",
    category: "Live football intelligence platform",
    status: "Live",
    href: "/statbet",
    icon: BarChart3,
  },
  {
    name: "PaperTalk",
    category:
      "Assistive document-reading technology — working title under review",
    status: "Active development",
    href: "/products",
    icon: Accessibility,
  },
  {
    name: "Mechanic Connection",
    category:
      "Nearby mechanic, roadside support, and car-parts connection concept",
    status: "Concept validation",
    href: "/products",
    icon: Car,
  },
  {
    name: "Property Connection",
    category: "Housing discovery and property-enquiry connection concept",
    status: "Concept validation",
    href: "/products",
    icon: House,
  },
];

const process = [
  {
    step: "Discover",
    copy: "Understand the business, product, market, customers, and current gap.",
  },
  {
    step: "Plan",
    copy: "Define the solution, scope, messaging, tools, responsibilities, and execution route.",
  },
  {
    step: "Build / Set Up",
    copy: "Create the platform, website, showroom, workflow, campaign setup, or support system.",
  },
  {
    step: "Launch",
    copy: "Release the work publicly with clear contact paths and professional presentation.",
  },
  {
    step: "Monitor",
    copy: "Review activity, visibility signals, enquiries, performance, and operational feedback.",
  },
  {
    step: "Improve",
    copy: "Refine the system based on evidence, business goals, and real market response.",
  },
];

const buildWithGidPaths: {
  title: string;
  copy: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Build Products With Us",
    copy: "For developers, designers, product thinkers, and technical contributors interested in practical digital products.",
    icon: Layers3,
  },
  {
    title: "Become a Business Partner",
    copy: "For people who can introduce businesses, support sales, create opportunities, or expand GIDTech’s reach.",
    icon: Handshake,
  },
  {
    title: "Explore Strategic Support",
    copy: "For potential sponsors, investors, institutions, and partners interested in the company’s product direction.",
    icon: Network,
  },
  {
    title: "Become an Early User",
    copy: "For businesses and individuals willing to test products, join pilots, give feedback, and shape future releases.",
    icon: Rocket,
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
      className="section-shell relative min-h-[90vh] overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pt-36 lg:pt-40"
    >
      <div className="absolute inset-0 -z-20 bg-grid-pattern bg-[size:64px_64px] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      <div className="absolute left-1/2 top-20 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/[0.045] blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="animate-fade-up">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium text-neutral-200">
            <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.55)]" />
            Proof-led technology company
          </div>

          <h1 className="text-balance max-w-5xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Practical digital solutions that help businesses earn trust, improve
            visibility, and operate better.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-400 md:mt-8 md:text-xl">
            GID Technologies builds business websites, visibility systems,
            custom platforms, automation workflows, and digital products around
            real business problems and measurable outcomes.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton href="/solutions">
              Explore Business Solutions
            </PrimaryButton>
            <SecondaryButton href="/statbet">
              View Proof of Work
            </SecondaryButton>
          </div>

          <div className="mt-6">
            <Link
              href="/build-with-gid"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 transition hover:text-white"
            >
              Build, partner, or grow with GID
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
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
                <h2 className="mt-2 text-xl font-semibold text-white">
                  Product and solution ecosystem
                </h2>
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

              <ProductScreenshot
                src="/work/image.png"
                alt="StatBet live football intelligence platform"
                priority
                cropTop={10}
                zoom={1.14}
              />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Solutions", status: "Client work" },
                { label: "StatBet", status: "Live product" },
                { label: "PaperTalk", status: "In development" },
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
                  One company connecting client solutions, live products,
                  assistive technology, and future connection platforms.
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

function BusinessProblems() {
  return (
    <section className="section-shell px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Start with the problem"
          title="Business owners should recognize their challenge before thinking about the technology."
          copy="These are the practical problems GID Technologies is structured to help solve."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {businessProblems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.problem}
                className="glass group rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/25"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-white" />
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    {item.solution}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">
                  {item.problem}
                </h3>

                <p className="mt-4 leading-7 text-neutral-400">
                  {item.outcome}
                </p>

                <Link
                  href={item.href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:gap-3"
                >
                  See the solution
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedSolutions() {
  return (
    <section id="solutions" className="section-shell px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured business solutions"
          title="Clear solutions clients can understand, evaluate, and hire."
          copy="The emphasis is not technology for decoration. It is stronger credibility, better customer journeys, improved visibility, and smoother operations."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredSolutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <article
                key={solution.title}
                className={`glass group rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/25 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-white" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-700">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-9 text-2xl font-semibold tracking-[-0.03em] text-white">
                  {solution.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-400">
                  {solution.description}
                </p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-600">
                    Business outcome
                  </p>
                  <p className="mt-2 text-sm leading-6 text-neutral-300">
                    {solution.outcome}
                  </p>
                </div>

                <Link
                  href={solution.href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:gap-3"
                >
                  Explore this solution
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-9 flex justify-center">
          <PrimaryButton href="/solutions">
            View All Business Solutions
          </PrimaryButton>
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
              The registered company behind client solutions, StatBet,
              PaperTalk, and future connection platforms.
            </h2>

            <p className="mt-6 text-base leading-8 text-neutral-400 md:text-lg">
              GID Technologies exists as the public trust layer behind practical
              client solutions, live digital products, assistive technology, and
              the company’s future connection platforms.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {credibilityItems.map((item) => (
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
                Technologies. It demonstrates our ability to plan, build,
                launch, monitor, and publicly position a real digital product.
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
                  Read the Case Study
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

                      <ProductScreenshot
                        src={shot.src}
                        alt={`StatBet ${shot.title} screenshot`}
                        cropTop={10}
                        zoom={1.14}
                      />
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-sm leading-7 text-neutral-300">
                    StatBet gives potential clients and partners something real
                    to inspect: a public platform, product structure, live
                    pages, transparent tracking, and continuous improvement.
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

function WhoWeHelp() {
  return (
    <section className="section-shell px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Who we help"
          title="Solutions should feel relevant to the business reading the page."
          copy="These are examples of organizations and business categories that can benefit from GIDTech’s current capabilities."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.055]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <Icon className="h-5 w-5 text-white" />
                </span>

                <h3 className="mt-8 text-xl font-semibold text-white">
                  {industry.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-400">
                  {industry.copy}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-9 flex justify-center">
          <SecondaryButton href="/contact?service=consultation">
            Discuss Your Business Type
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}

function BusinessVisibility() {
  return (
    <section
      id="business-visibility"
      className="section-shell px-5 py-24 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Business visibility systems"
          title="Help customers find, understand, trust, and contact your business."
          copy="GID Technologies supports businesses with professional presentation, online discoverability, enquiry systems, campaign planning, field visibility, and practical performance review."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visibilityCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <Icon className="h-5 w-5 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-400">
                  {card.copy}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.035] p-6">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold text-white">
                Visibility support, not fake promises
              </p>

              <p className="mt-3 max-w-4xl text-sm leading-7 text-neutral-400">
                GID Technologies does not guarantee buyers or sales. We improve
                how a business is presented, discovered, understood, contacted,
                promoted, monitored, and refined.
              </p>
            </div>

            <ShieldCheck className="h-8 w-8 text-neutral-500" />
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <PrimaryButton href="/contact?service=visibility-system">
            Request a Visibility Review
          </PrimaryButton>

          <SecondaryButton href="/solutions#visibility-systems">
            Explore Visibility Solutions
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
          eyebrow="Product ecosystem"
          title="Live proof today. Active development next. Future platforms validated carefully."
          copy="StatBet is live, PaperTalk is in active development, and the mechanic and property platforms remain under concept validation."
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {roadmap.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className="glass group rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25"
              >
                <div className="mb-10 flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-white" />
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {item.name}
                </h3>

                <p className="mt-4 min-h-20 text-sm leading-7 text-neutral-400">
                  {item.category}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:gap-3">
                  Explore direction
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-9 flex justify-center">
          <SecondaryButton href="/products">
            Explore the Product Roadmap
          </SecondaryButton>
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
          eyebrow="How engagements work"
          title="A clear process from business problem to launch and improvement."
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

function BuildWithGID() {
  return (
    <section className="section-shell px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="premium-border overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
          <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="border-b border-white/10 p-8 md:p-12 lg:border-b-0 lg:border-r">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                Build With GID
              </p>

              <h2
                className="mt-5 
              text-balance text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl"
              >
                Some people will hire GID. Others may help build what comes
                next.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-400">
                GID Technologies is open to serious conversations with builders,
                business partners, strategic supporters, sponsors, early users,
                and people who can create meaningful opportunities.
              </p>

              <div className="mt-9">
                <PrimaryButton href="/build-with-gid">
                  Explore a Path With GID
                </PrimaryButton>
              </div>
            </div>

            <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8">
              {buildWithGidPaths.map((path) => {
                const Icon = path.icon;

                return (
                  <article
                    key={path.title}
                    className="rounded-[1.5rem] border border-white/10 bg-black/50 p-6"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                      <Icon className="h-5 w-5 text-white" />
                    </span>

                    <h3 className="mt-7 text-xl font-semibold text-white">
                      {path.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-neutral-400">
                      {path.copy}
                    </p>
                  </article>
                );
              })}
            </div>
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
          copy="GIDTech is positioned around practical execution, honest communication, measurable work, and long-term thinking."
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
              Start with the business problem
            </p>

            <h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              Tell us what you are trying to improve.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
              You do not need to know the exact technology. Explain the business
              problem, intended outcome, and current situation. GIDTech will
              help define the most practical next step.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <PrimaryButton href="/contact?service=consultation">
                Start a Business Conversation
              </PrimaryButton>
              <SecondaryButton href="/solutions">
                Review the Solutions
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
      <BusinessProblems />
      <FeaturedSolutions />
      <BrandProof />
      <StatBetProof />
      <WhoWeHelp />
      <BusinessVisibility />
      <Roadmap />
      <HowWeWork />
      <BuildWithGID />
      <Principles />
      <ContactCTA />
    </main>
  );
}
