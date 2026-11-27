import Link from "next/link";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  LayoutDashboard,
  Mail,
  Megaphone,
  Wrench,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Websites & Digital Services",
  description:
    "Explore GID Business Presence, custom software, business visibility, automation and website maintenance services from GID Technologies.",
  alternates: {
    canonical: "/solutions",
  },
};

type SupportingService = {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  serviceType: string;
  icon: LucideIcon;
};

const presenceDeliverables = [
  "Responsive business website",
  "Clear products and services presentation",
  "Customer contact and enquiry options",
  "Basic search and social sharing setup",
  "Testing, launch and handover",
];

const supportingServices: SupportingService[] = [
  {
    id: "visibility-systems",
    number: "02",
    title: "Business Visibility",
    description:
      "Improve how customers discover, understand and connect with your business.",
    features: [
      "Digital presence review",
      "Business profile and positioning",
      "Campaign and enquiry guidance",
    ],
    serviceType: "visibility-system",
    icon: Megaphone,
  },
  {
    id: "custom-platforms",
    number: "03",
    title: "Custom Software",
    description:
      "Web platforms, dashboards and internal tools designed around your requirements.",
    features: [
      "Workflow and requirements planning",
      "Custom interface development",
      "Testing and deployment support",
    ],
    serviceType: "custom-platform",
    icon: LayoutDashboard,
  },
  {
    id: "automation",
    number: "04",
    title: "Business Automation",
    description:
      "Reduce repetitive tasks and connect processes through practical digital workflows.",
    features: [
      "Workflow assessment",
      "Forms and information routing",
      "Notifications and follow-up systems",
    ],
    serviceType: "automation",
    icon: Workflow,
  },
  {
    id: "digital-care",
    number: "05",
    title: "Digital Care",
    description:
      "Keep your existing website or digital service maintained and properly supported.",
    features: [
      "Website and content updates",
      "Technical maintenance",
      "Agreed monitoring and support",
    ],
    serviceType: "digital-care",
    icon: Wrench,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share your business goals, current challenges or project idea.",
  },
  {
    number: "02",
    title: "Agree on the scope",
    description: "We define deliverables, responsibilities, cost and timeline.",
  },
  {
    number: "03",
    title: "Build and deliver",
    description: "We execute the agreed work, test it and complete handover.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* PAGE INTRODUCTION */}
      <section
        aria-labelledby="solutions-title"
        className="section-shell relative overflow-hidden px-5 pb-14 pt-32 md:px-8 md:pb-20 md:pt-40"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              GID Technologies · Services
            </p>

            <h1
              id="solutions-title"
              className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl"
            >
              Better digital presence. Better ways to work.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-400 md:text-lg">
              We build business websites, digital tools and practical solutions
              that help organisations present themselves clearly and work more
              effectively.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#business-websites"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Explore Business Presence
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                href="/contact?service=consultation#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.07]"
              >
                Talk to GID
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Compact service introduction */}
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              What we can help with
            </p>

            <div className="mt-6 grid gap-3">
              {[
                "Establish a professional online presence",
                "Present products and services clearly",
                "Improve customer contact paths",
                "Build tools for specific business needs",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-white/10 pb-3 text-sm leading-6 text-neutral-300 last:border-0 last:pb-0"
                >
                  <CheckCircle2
                    className="mt-1 h-4 w-4 shrink-0 text-white"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRIMARY COMMERCIAL SERVICE */}
      <section
        id="business-websites"
        aria-labelledby="presence-title"
        className="section-shell scroll-mt-28 px-5 py-12 md:px-8 md:py-16"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.035]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                  <Globe2 className="h-6 w-6 text-white" aria-hidden="true" />
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  01 · Business Presence
                </span>
              </div>

              <h2
                id="presence-title"
                className="mt-8 max-w-xl text-balance text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl"
              >
                Give your business a professional home online.
              </h2>

              <p className="mt-5 max-w-lg text-base leading-8 text-neutral-400">
                A well-structured website helps customers understand your
                business, explore what you offer and know how to reach you.
              </p>

              <p className="mt-5 max-w-lg text-sm leading-7 text-neutral-300">
                Suitable for growing businesses, professional services, schools,
                organisations and brands establishing a stronger digital
                presence.
              </p>

              <Link
                href="/contact?service=business-website#contact-form"
                className="mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Discuss Your Website
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="border-t border-white/10 bg-black/35 p-7 md:p-10 lg:border-l lg:border-t-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Typical deliverables
              </p>

              <div className="mt-7 grid gap-3">
                {presenceDeliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-4"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-white"
                      aria-hidden="true"
                    />

                    <span className="text-sm leading-6 text-neutral-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold text-white">
                  Scoped to your business
                </p>

                <p className="mt-2 text-sm leading-7 text-neutral-400">
                  Project fees, delivery time, hosting, domain costs and
                  optional integrations are confirmed in the agreed proposal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORTING COMMERCIAL SERVICES */}
      <section
        aria-labelledby="more-services-title"
        className="section-shell px-5 py-12 md:px-8 md:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              More ways we can help
            </p>

            <h2
              id="more-services-title"
              className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl"
            >
              Solutions shaped around your work.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {supportingServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.id}
                  id={service.id}
                  aria-labelledby={`${service.id}-title`}
                  className="glass scroll-mt-28 rounded-[1.75rem] p-6 md:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                      <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </span>

                    <span className="text-xs font-semibold tracking-[0.2em] text-neutral-600">
                      {service.number}
                    </span>
                  </div>

                  <h3
                    id={`${service.id}-title`}
                    className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-white"
                  >
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-neutral-400">
                    {service.description}
                  </p>

                  <div className="mt-6 grid gap-2">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-neutral-300"
                      >
                        <CheckCircle2
                          className="mt-1 h-3.5 w-3.5 shrink-0 text-neutral-500"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/contact?service=${service.serviceType}#contact-form`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-neutral-300"
                  >
                    Discuss this service
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT PROCESS */}
      <section
        aria-labelledby="process-title"
        className="section-shell px-5 py-12 md:px-8 md:py-14"
      >
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Working with GID
            </p>

            <h2
              id="process-title"
              className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl"
            >
              Clear scope. Practical delivery.
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.number} className="flex items-start gap-4">
                <span className="text-sm font-semibold text-neutral-500">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CUSTOMER ACTION */}
      <section
        aria-labelledby="solutions-contact-title"
        className="section-shell px-5 pb-24 pt-8 md:px-8 md:pb-28"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 rounded-[1.75rem] border border-white/15 bg-white/[0.05] p-7 md:p-10 lg:flex-row lg:items-center">
          <div>
            <h2
              id="solutions-contact-title"
              className="text-balance text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl"
            >
              Tell us what your business needs.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-400">
              Whether you need a website, a digital tool or help improving an
              existing process, start with a conversation.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact?service=consultation#contact-form"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <a
              href="mailto:gidtech8@gmail.com?subject=Business%20Enquiry%20-%20GID%20Technologies"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email GID
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
