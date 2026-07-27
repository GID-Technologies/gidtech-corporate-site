import Link from "next/link";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Globe2,
  Megaphone,
  ShieldCheck,
  Wrench,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Solutions",
  description:
    "Explore practical business websites, visibility systems, custom platforms, automation workflows, and ongoing digital support from GID Technologies.",
};

type Solution = {
  title: string;
  shortTitle: string;
  problem: string;
  description: string;
  outcomes: string[];
  deliverables: string[];
  timeline: string;
  audience: string;
  href: string;
  icon: LucideIcon;
};

const solutions: Solution[] = [
  {
    title: "Business Websites & Digital Showrooms",
    shortTitle: "Business Websites",
    problem:
      "Customers struggle to understand the business, confirm its credibility, or find a reliable way to make enquiries.",
    description:
      "We create professional websites and digital showrooms that explain what a business offers, strengthen public trust, and make customer contact easier.",
    outcomes: [
      "Stronger business credibility",
      "Clearer presentation of products and services",
      "Better customer enquiry flow",
      "A professional link for outreach and promotion",
    ],
    deliverables: [
      "Business website or landing page",
      "Mobile-responsive design",
      "Products and services presentation",
      "WhatsApp, email, and call contact paths",
      "Basic search and social sharing setup",
    ],
    timeline: "Typical delivery: 2–6 weeks",
    audience:
      "Local businesses, schools, churches, hospitality businesses, service providers, property businesses, and growing brands.",
    href: "/contact?service=business-website",
    icon: Globe2,
  },
  {
    title: "Business Visibility Systems",
    shortTitle: "Visibility Systems",
    problem:
      "The business exists, but people cannot easily discover it, understand it, trust it, or know how to contact it.",
    description:
      "We structure the business’s online presence, public positioning, enquiry paths, campaign direction, and visibility review process.",
    outcomes: [
      "Improved discoverability",
      "Stronger online presentation",
      "Clearer customer communication",
      "More structured visibility activity",
    ],
    deliverables: [
      "Visibility assessment",
      "Business profile and positioning",
      "Digital showroom direction",
      "Social media cleanup and guidance",
      "Campaign planning and review",
      "WhatsApp and enquiry flow setup",
    ],
    timeline: "Timeline depends on scope and campaign direction",
    audience:
      "Businesses that need stronger visibility, public trust, professional presentation, and clearer enquiry systems.",
    href: "/contact?service=visibility-system",
    icon: Megaphone,
  },
  {
    title: "Custom Web Platforms & Business Tools",
    shortTitle: "Custom Platforms",
    problem:
      "Generic tools do not properly match the business process, product idea, customer journey, or internal workflow.",
    description:
      "We plan and build practical web platforms, dashboards, portals, internal tools, and MVPs around specific business requirements.",
    outcomes: [
      "Technology built around the real workflow",
      "Reduced dependence on scattered manual tools",
      "A clearer digital customer experience",
      "A foundation that can grow over time",
    ],
    deliverables: [
      "Product and requirements planning",
      "Interface and workflow design",
      "Web application development",
      "Database and backend direction",
      "Testing and launch support",
    ],
    timeline: "Typical delivery: 4–12+ weeks",
    audience:
      "Startups, organizations, founders, schools, service companies, and businesses with a defined digital product or process problem.",
    href: "/contact?service=custom-platform",
    icon: AppWindow,
  },
  {
    title: "Automation & Intelligent Workflows",
    shortTitle: "Automation",
    problem:
      "The team spends too much time repeating tasks, answering the same enquiries, transferring information manually, or managing disconnected processes.",
    description:
      "We identify repetitive workflows and design practical automation systems that improve response, organization, communication, and operational efficiency.",
    outcomes: [
      "Less repetitive manual work",
      "Faster handling of enquiries",
      "More organized business information",
      "Improved operational consistency",
    ],
    deliverables: [
      "Workflow discovery",
      "Automation opportunity mapping",
      "Forms and enquiry routing",
      "Notification and follow-up workflows",
      "Intelligent assistance where appropriate",
    ],
    timeline: "Typical delivery: 2–8 weeks",
    audience:
      "Businesses with repeated enquiries, manual reporting, customer follow-up challenges, or fragmented internal workflows.",
    href: "/contact?service=automation",
    icon: Workflow,
  },
  {
    title: "Ongoing Digital Care & Maintenance",
    shortTitle: "Digital Care",
    problem:
      "Websites and digital systems become outdated, insecure, broken, or neglected after launch.",
    description:
      "We provide structured post-launch support to keep websites, content, integrations, and digital systems functional and professionally maintained.",
    outcomes: [
      "Reduced website downtime",
      "Faster issue resolution",
      "Updated business information",
      "Better long-term system reliability",
    ],
    deliverables: [
      "Website updates",
      "Technical monitoring",
      "Content and information changes",
      "Performance review",
      "Basic improvement recommendations",
    ],
    timeline: "Monthly or agreed support period",
    audience:
      "Businesses that already have a website or digital system but need reliable ongoing technical and content support.",
    href: "/contact?service=digital-care",
    icon: Wrench,
  },
];

const engagementSteps = [
  {
    number: "01",
    title: "Discovery",
    text: "We understand the business, current problem, customers, available resources, and intended outcome.",
  },
  {
    number: "02",
    title: "Solution Scope",
    text: "We define the recommended solution, deliverables, responsibilities, timeline, professional fees, and external expenses.",
  },
  {
    number: "03",
    title: "Execution",
    text: "The approved work is designed, built, reviewed, and prepared for deployment or campaign activity.",
  },
  {
    number: "04",
    title: "Launch & Improvement",
    text: "We launch, monitor the agreed areas, collect useful feedback, and identify the next improvement opportunities.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="section-shell mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
        <Link
          href="/"
          className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.08] hover:text-white"
        >
          ← Back to Home
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
              Business Solutions
            </p>

            <h1 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              Practical technology solutions built around real business
              problems.
            </h1>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-neutral-400 md:text-xl">
              GID Technologies helps businesses improve credibility,
              discoverability, customer communication, operational efficiency,
              and digital execution through clearly scoped solutions.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact?service=consultation"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Discuss Your Business
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

          <div className="premium-border rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Outcome-first direction
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              Clients do not need technology for decoration.
            </h2>

            <p className="mt-5 leading-8 text-neutral-400">
              They need clearer customer journeys, stronger trust, better
              visibility, smoother operations, and systems that support real
              growth.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                "More professional public presence",
                "Clearer enquiry and customer contact paths",
                "More efficient digital workflows",
                "Technology designed around real needs",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-sm text-neutral-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-white" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 space-y-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <article
                key={solution.title}
                id={solution.shortTitle
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replaceAll("&", "and")}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]"
              >
                <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
                  <div className="border-b border-white/10 p-7 md:p-9 lg:border-b-0 lg:border-r">
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                        <Icon className="h-6 w-6 text-white" />
                      </div>

                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-700">
                        Solution {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className="mt-10 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
                      {solution.title}
                    </h2>

                    <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-neutral-600">
                      The business problem
                    </p>

                    <p className="mt-3 leading-8 text-neutral-400">
                      {solution.problem}
                    </p>

                    <div className="mt-8 rounded-2xl border border-white/10 bg-black/50 p-5">
                      <div className="flex items-start gap-3">
                        <Clock3 className="mt-1 h-4 w-4 shrink-0 text-neutral-500" />
                        <div>
                          <p className="text-sm font-semibold text-white">
                            Typical timeline
                          </p>
                          <p className="mt-2 text-sm leading-6 text-neutral-400">
                            {solution.timeline}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-7 md:p-9">
                    <p className="text-lg leading-8 text-neutral-300">
                      {solution.description}
                    </p>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
                          Business outcomes
                        </p>

                        <div className="mt-4 space-y-3">
                          {solution.outcomes.map((outcome) => (
                            <div
                              key={outcome}
                              className="flex items-start gap-3 text-sm leading-6 text-neutral-300"
                            >
                              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-neutral-500" />
                              <span>{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
                          Possible deliverables
                        </p>

                        <div className="mt-4 space-y-3">
                          {solution.deliverables.map((deliverable) => (
                            <div
                              key={deliverable}
                              className="flex items-start gap-3 text-sm leading-6 text-neutral-300"
                            >
                              <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-neutral-500" />
                              <span>{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 rounded-2xl border border-white/10 bg-black/50 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
                        Who this is for
                      </p>
                      <p className="mt-3 text-sm leading-7 text-neutral-300">
                        {solution.audience}
                      </p>
                    </div>

                    <Link
                      href={solution.href}
                      className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
                    >
                      Discuss This Solution
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <section className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            How engagements work
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
            Clear scope before execution.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {engagementSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-[1.5rem] border border-white/10 bg-black/50 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
                  {step.number}
                </p>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-400">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-white p-8 text-center text-black md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Start with the business problem
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
            You do not need to know the exact technology before speaking with
            us.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-600">
            Tell us what the business is trying to improve. We will help define
            the right digital solution, scope, timeline, and next step.
          </p>

          <Link
            href="/contact?service=consultation"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Start a Business Conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </section>
    </main>
  );
}
