import Link from "next/link";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Car,
  Code2,
  Eye,
  Handshake,
  House,
  ExternalLink,
  Mail,
  Sparkles,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Connect With GID",
  description:
    "Choose how you want to connect with GID Technologies after the Aptech Graduation presentation.",
};

type ConnectionPath = {
  title: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  icon: LucideIcon;
};

const connectionPaths: ConnectionPath[] = [
  {
    title: "Hire GID",
    label: "Businesses & Organizations",
    description:
      "Discuss a business website, digital showroom, visibility system, custom platform, automation workflow, or ongoing digital-support need.",
    href: "/contact?service=consultation#contact-form",
    cta: "Discuss a Business Project",
    icon: BriefcaseBusiness,
  },
  {
    title: "Build With GID",
    label: "Builders & Contributors",
    description:
      "Explore ways to contribute through development, design, research, marketing, product thinking, operations, testing, or other practical skills.",
    href: "/build-with-gid",
    cta: "Explore Build With GID",
    icon: Code2,
  },
  {
    title: "Partner With GID",
    label: "Companies & Institutions",
    description:
      "Start a conversation around technology, distribution, media, data, product testing, institutional access, referrals, or shared opportunities.",
    href: "/contact?service=partnership#contact-form",
    cta: "Discuss a Partnership",
    icon: Handshake,
  },
  {
    title: "Support GID",
    label: "Sponsors & Strategic Supporters",
    description:
      "Explore sponsorship, investment conversations, mentorship, strategic guidance, infrastructure support, or useful introductions.",
    href: "/contact?service=build-with-gid&path=strategic-support#contact-form",
    cta: "Explore Support",
    icon: ShieldCheck,
  },
  {
    title: "Explore the Products",
    label: "Products & Early Users",
    description:
      "View StatBet, follow PaperTalk’s development, understand the mechanic and property concepts, and explore future testing opportunities.",
    href: "/products",
    cta: "View the Product Roadmap",
    icon: Eye,
  },
];

const presentationProducts = [
  {
    name: "StatBet",
    status: "Live",
    description:
      "GID Technologies’ live football-intelligence product and strongest public proof of execution.",
    icon: BarChart3,
  },
  {
    name: "PaperTalk",
    status: "Active Development",
    description:
      "An accessibility-focused product being developed to interpret printed material and make it available through audio.",
    icon: Accessibility,
  },
  {
    name: "Mechanic Connection",
    status: "Concept Validation",
    description:
      "A connection concept being researched before its users, trust systems, and operating model are locked.",
    icon: Car,
  },
  {
    name: "Property Connection",
    status: "Concept Validation",
    description:
      "A housing and property-discovery concept still undergoing research and validation before development.",
    icon: House,
  },
];

type GraduationSearchParams = Record<string, string | string[] | undefined>;

function getFirstParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
}

function addTrackingToHref(href: string, tracking: Record<string, string>) {
  const [pathAndQuery, hash] = href.split("#");
  const [pathname, existingQuery = ""] = pathAndQuery.split("?");

  const params = new URLSearchParams(existingQuery);

  Object.entries(tracking).forEach(([key, value]) => {
    if (value) {
      params.set(key, value);
    }
  });

  const queryString = params.toString();

  return `${pathname}${queryString ? `?${queryString}` : ""}${
    hash ? `#${hash}` : ""
  }`;
}

const reasonsToConnect = [
  {
    title: "Hire",
    text: "Discuss a practical digital solution for your business or organization.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Build",
    text: "Contribute useful technical, creative, commercial, or operational skills.",
    icon: Code2,
  },
  {
    title: "Partner",
    text: "Create shared opportunities through access, distribution, data, or collaboration.",
    icon: Network,
  },
  {
    title: "Support",
    text: "Provide mentorship, sponsorship, resources, guidance, or strategic introductions.",
    icon: ShieldCheck,
  },
];

const founders = [
  {
    name: "Ashaolu David Ismaila",
    initials: "AD",
    title: "Co-Founder — Product & Company Direction",
    description:
      "David shapes GID Technologies’ product direction and company strategy, leading the formation and execution of ideas across StatBet, PaperTalk, and the wider product roadmap.",
    strength: "Ideas and execution of ideas",
    linkedin: "",
  },
  {
    name: "Gabriel Godwin Enemona",
    initials: "GE",
    title: "Co-Founder — Business Operations & Growth",
    description:
      "Gabriel strengthens GID Technologies through idea refinement, operational coordination, visibility direction, and growth activity, helping turn company plans into organised execution.",
    strength: "Idea refinement and operational management",
    linkedin: "https://www.linkedin.com/in/goddywin10/",
  },
];

export default async function GraduationPage({
  searchParams,
}: {
  searchParams: Promise<GraduationSearchParams>;
}) {
  const incomingParams = await searchParams;

  const tracking = {
    source: getFirstParam(incomingParams.source) || "aptech-graduation",
    utm_source: getFirstParam(incomingParams.utm_source),
    utm_medium: getFirstParam(incomingParams.utm_medium),
    utm_campaign: getFirstParam(incomingParams.utm_campaign),
  };
  const statBetCaseStudyHref = addTrackingToHref("/statbet", tracking);

  const productRoadmapHref = addTrackingToHref("/products", tracking);
  const founderContactHref = addTrackingToHref(
    "/contact?service=partnership#contact-form",
    tracking,
  );
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="section-shell mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
        <Link
          href="/"
          className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.08] hover:text-white"
        >
          ← Visit GID Technologies
        </Link>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
              Aptech Graduation 2026
            </p>

            <h1 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              Choose how you want to connect with GID Technologies.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400 md:text-xl">
              The presentation may end on the stage, but the conversation does
              not have to end there. Choose the path that best describes what
              you need, what you can contribute, or what you want to explore.
            </p>

            <a
              href="#connection-paths"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Choose Your Path
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="premium-border rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 md:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
              <Users className="h-6 w-6 text-white" />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Different people. Different opportunities.
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              You do not need to fit into one box.
            </h2>

            <p className="mt-5 leading-8 text-neutral-400">
              You may be a business owner, builder, partner, supporter, early
              user, sponsor, marketer, investor, connector, or simply someone
              interested in what GID Technologies is building.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {reasonsToConnect.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.title}
                    className="rounded-2xl border border-white/10 bg-black/50 p-4"
                  >
                    <Icon className="h-4 w-4 text-white" />
                    <p className="mt-4 font-semibold text-white">
                      {reason.title}
                    </p>
                    <p className="mt-2 text-xs leading-6 text-neutral-500">
                      {reason.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <a
              href="#founders"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 transition hover:text-white"
            >
              Meet the people behind GIDTech
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <section className="mt-24">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="border-b border-white/10 p-8 md:p-10 lg:border-b-0 lg:border-r">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                  What you saw today
                </p>

                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                  One company. Two connected directions.
                </h2>

                <p className="mt-6 text-lg leading-8 text-neutral-400">
                  GID Technologies is a proof-led technology company building
                  practical business solutions and its own digital products.
                </p>

                <p className="mt-5 leading-8 text-neutral-400">
                  One side of the company helps businesses solve practical
                  digital, visibility, communication, and workflow problems. The
                  other develops GID-owned products around problems we believe
                  deserve serious, scalable solutions.
                </p>

                <div className="mt-8 rounded-2xl border border-white/10 bg-black/50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">
                    Our execution approach
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Research",
                      "Plan",
                      "Build",
                      "Launch",
                      "Monitor",
                      "Improve",
                    ].map((step) => (
                      <span
                        key={step}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-neutral-300"
                      >
                        {step}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4">
                  <Link
                    href={statBetCaseStudyHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
                  >
                    View the StatBet Product Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href={productRoadmapHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                  >
                    Explore the Product Roadmap
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8">
                {presentationProducts.map((product) => {
                  const Icon = product.icon;

                  return (
                    <article
                      key={product.name}
                      className="rounded-[1.5rem] border border-white/10 bg-black/50 p-6"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                          <Icon className="h-5 w-5 text-white" />
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
                          {product.status}
                        </span>
                      </div>

                      <h3 className="mt-7 text-xl font-semibold text-white">
                        {product.name}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-neutral-400">
                        {product.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section id="connection-paths" className="mt-24 scroll-mt-28">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
              Connection paths
            </p>

            <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              Hire. Build. Partner. Support. Explore.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-400 md:text-lg">
              Choose the path that best describes what you need, what you can
              contribute, or what you want to explore after the presentation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {connectionPaths.map((path) => {
              const Icon = path.icon;
              const trackedHref = addTrackingToHref(path.href, tracking);

              return (
                <article
                  key={path.title}
                  className="glass rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/25"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                      <Icon className="h-5 w-5 text-white" />
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                      {path.label}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">
                    {path.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-400">
                    {path.description}
                  </p>

                  <Link
                    href={trackedHref}
                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
                  >
                    {path.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
        //Founders Section
        <section id="founders" className="mt-24 scroll-mt-28">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
              Meet the builders
            </p>

            <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              The people shaping GID Technologies.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-400 md:text-lg">
              GID Technologies is being built through shared leadership across
              product direction, company strategy, operations, visibility,
              growth, and execution.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 md:p-9"
              >
                <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-white/[0.035] blur-3xl" />

                <div className="relative">
                  <div className="flex flex-wrap items-start justify-between gap-5">
                    <div className="flex items-center gap-5">
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.5rem] border border-white/15 bg-white/[0.06] text-2xl font-semibold tracking-[-0.04em] text-white">
                        {founder.initials}
                      </div>

                      <div>
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                          Co-Founder
                        </span>

                        <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                          {founder.name}
                        </h3>
                      </div>
                    </div>

                    <Sparkles className="h-5 w-5 text-neutral-700" />
                  </div>

                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    {founder.title}
                  </p>

                  <p className="mt-5 leading-8 text-neutral-400">
                    {founder.description}
                  </p>

                  <div className="mt-7 rounded-2xl border border-white/10 bg-black/50 p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-600">
                      Core contribution
                    </p>

                    <p className="mt-3 text-sm font-semibold leading-6 text-neutral-200">
                      {founder.strength}
                    </p>
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={founderContactHref}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
                    >
                      <Mail className="h-4 w-4" />
                      Contact Through GIDTech
                    </Link>

                    {founder.linkedin ? (
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View LinkedIn
                      </a>
                    ) : (
                      <span className="inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm text-neutral-600">
                        LinkedIn profile coming soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 text-center">
            <p className="mx-auto max-w-3xl text-sm leading-7 text-neutral-500">
              Founder roles describe the areas each person currently leads
              within GID Technologies. Responsibilities may continue evolving as
              the company, team, and product portfolio grow.
            </p>
          </div>
        </section>
        <section className="mt-24 rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 md:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Clear expectations
          </p>

          <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
            A form submission starts a conversation, not an automatic promise.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-neutral-400">
            Submitting an enquiry helps GID Technologies understand your
            interest and determine the appropriate next step. It does not
            automatically create an employment, investment, sponsorship,
            partnership, contributor, product-acceptance, or payment agreement.
          </p>
        </section>
        <section className="mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-white p-8 text-center text-black md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Continue the conversation
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
            The right person, business, opportunity, or partnership could begin
            here.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-600">
            Choose the path that fits you and introduce yourself clearly.
          </p>

          <a
            href="#connection-paths"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Choose Your Path
            <ArrowRight className="h-4 w-4" />
          </a>
        </section>
      </section>
    </main>
  );
}
