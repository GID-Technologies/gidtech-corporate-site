import Link from "next/link";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  ArrowRight,
  BadgeCheck,
  Car,
  CheckCircle2,
  CircleDot,
  House,
  Layers3,
  Lightbulb,
  Network,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Products & Platforms",
  description:
    "Explore the GID Technologies product roadmap: StatBet, PaperTalk, mechanic connection technology, and property connection concepts.",
};

type Product = {
  name: string;
  status: string;
  role: string;
  description: string;
  direction: string[];
  href: string;
  cta: string;
  icon: LucideIcon;
};

const products: Product[] = [
  {
    name: "StatBet",
    status: "Live",
    role: "Football intelligence platform",
    description:
      "A live football intelligence platform focused on structured match analysis, confidence tiers, outcome review, public transparency, and performance tracking.",
    direction: [
      "Live public platform",
      "Football intelligence and analysis",
      "Outcome review and performance tracking",
      "Current user and visibility growth",
    ],
    href: "/statbet",
    cta: "View StatBet Case Study",
    icon: BadgeCheck,
  },
  {
    name: "PaperTalk",
    status: "Active Development",
    role: "Assistive document-reading technology — working title",
    description:
      "An assistive technology concept designed to help users place a printed document or paper into a system that can interpret the content and read it aloud.",
    direction: [
      "Printed-document reading",
      "Text-to-speech experience",
      "Accessibility and independent information access",
      "Product name currently under review",
    ],
    href: "/contact?service=partnership",
    cta: "Discuss PaperTalk",
    icon: Accessibility,
  },
  {
    name: "Mechanic Connection Platform",
    status: "Concept Validation",
    role: "Roadside and local vehicle-support connection",
    description:
      "A planned platform that helps vehicle owners find nearby mechanics, roadside assistance, and relevant car-part sources whether they are at home or stranded on the road.",
    direction: [
      "Nearby mechanic discovery",
      "Roadside support requests",
      "Location-based service matching",
      "Car-parts discovery and access",
    ],
    href: "/contact?service=partnership",
    cta: "Discuss the Mechanic Concept",
    icon: Car,
  },
  {
    name: "Property Connection Platform",
    status: "Concept Validation",
    role: "Housing and property opportunity connection",
    description:
      "A planned property platform focused on helping people discover housing opportunities, connect with property owners or verified agents, and navigate enquiries more clearly.",
    direction: [
      "Property and housing discovery",
      "Owner, agent, tenant, and buyer connection",
      "Clearer enquiry and contact flow",
      "Trust and verification direction",
    ],
    href: "/contact?service=partnership",
    cta: "Discuss the Property Concept",
    icon: House,
  },
];

const roadmapLogic = [
  {
    title: "Live proof first",
    text: "StatBet remains the company’s live public proof that GID Technologies can build, launch, position, monitor, and improve a real digital product.",
    icon: CheckCircle2,
  },
  {
    title: "Active product development",
    text: "PaperTalk represents the next active product mission, with its product identity, technical direction, prototype path, and real user value still being refined.",
    icon: Rocket,
  },
  {
    title: "Validate before expansion",
    text: "The mechanic and property concepts remain in validation until the user problem, operating model, trust systems, and MVP scope are strong enough.",
    icon: Layers3,
  },
];

const statusGuide = [
  {
    status: "Live",
    meaning:
      "Publicly accessible, actively positioned, and available for people to inspect or use.",
  },
  {
    status: "Active Development",
    meaning:
      "Currently being researched, designed, prototyped, or developed as an active company priority.",
  },
  {
    status: "Concept Validation",
    meaning:
      "A serious future direction that is still being tested before full product development begins.",
  },
];

export default function ProductsPage() {
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
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
              Products & Platforms
            </p>

            <h1 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              A focused product roadmap built around proof, accessibility,
              mobility, and connection.
            </h1>

            <p className="mt-8 text-lg leading-8 text-neutral-400 md:text-xl">
              GID Technologies is building a product ecosystem in stages.
              StatBet is live. PaperTalk is in active development. Mechanic and
              property connection platforms remain serious future directions
              undergoing concept validation.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <CircleDot className="h-5 w-5 text-white" />
              </div>

              <div>
                <p className="text-sm text-neutral-500">
                  Current product state
                </p>
                <p className="mt-1 text-2xl font-semibold text-white">
                  1 live · 1 active · 2 validating
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {[
                "Build real proof",
                "Develop the next active product",
                "Validate future platforms before expansion",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-neutral-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <article
                key={product.name}
                className="glass rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/25"
              >
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-white">
                        {product.name}
                      </h2>

                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-600">
                        {product.role}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-black">
                    {product.status}
                  </span>
                </div>

                <p className="mt-6 leading-7 text-neutral-400">
                  {product.description}
                </p>

                <div className="mt-7 rounded-2xl border border-white/10 bg-black/50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">
                    Current direction
                  </p>

                  <div className="mt-4 space-y-3">
                    {product.direction.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-neutral-300"
                      >
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-neutral-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={product.href}
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  {product.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>

        <section className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Product roadmap logic
          </p>

          <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
            Ambition stays high. Public positioning stays honest.
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {roadmapLogic.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-black/50 p-6"
                >
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-400">{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.025] p-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
            <Lightbulb className="h-6 w-6 text-white" />
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Status transparency
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
            Every status means something specific.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {statusGuide.map((item) => (
              <article
                key={item.status}
                className="rounded-[1.5rem] border border-white/10 bg-black/50 p-6"
              >
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-neutral-300">
                  {item.status}
                </span>

                <p className="mt-5 text-sm leading-7 text-neutral-400">
                  {item.meaning}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-white p-8 text-center text-black md:p-12">
          <Network className="mx-auto h-7 w-7" />

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Build the next product chapter
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
            GID Technologies is building products that solve practical problems
            and create useful connections.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-600">
            Builders, testers, users, partners, sponsors, and domain experts can
            help shape the next stage of the product ecosystem.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/build-with-gid"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Build With GID
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
            >
              Explore Client Solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
