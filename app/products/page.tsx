import Link from "next/link";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  ArrowRight,
  BadgeCheck,
  Bell,
  BrainCircuit,
  BriefcaseBusiness,
  Bot,
  Car,
  CheckCircle2,
  CircleDot,
  Database,
  House,
  Lightbulb,
  Network,
  ServerCog,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Products & Infrastructure",
  description:
    "Explore GID Technologies’ live product, active engineering work, software prototype, logistics roadmap, and long-term validation directions.",
};

type Product = {
  id: string;
  name: string;
  status: string;
  role: string;
  description: string;
  direction: string[];
  href: string;
  cta: string;
  icon: LucideIcon;
};

type ProductGroup = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  products: Product[];
  quiet?: boolean;
};

const productGroups: ProductGroup[] = [
  {
    id: "live",
    eyebrow: "Live",
    title: "Public product proof",
    description:
      "Publicly deployed products that people can inspect and use today.",
    products: [
      {
        id: "statbet",
        name: "StatBet",
        status: "Live",
        role: "Football-intelligence platform",
        description:
          "A live football-intelligence platform focused on structured match analysis, confidence tiers, Outcome Review, public transparency, and performance tracking.",
        direction: [
          "Live public platform",
          "Structured football intelligence",
          "Outcome Review",
          "Public performance tracking",
        ],
        href: "/statbet",
        cta: "View StatBet Case Study",
        icon: BadgeCheck,
      },
    ],
  },
  {
    id: "active-development",
    eyebrow: "Active Development",
    title: "What GID is engineering now",
    description:
      "Current company priorities that have moved beyond concept discussion into active technical or functional development.",
    products: [
      {
        id: "gid-platform-core",
        name: "GID Platform",
        status: "Active Product Development",
        role: "Configurable business operations system",
        description:
          "A flexible business system designed to help organisations manage customers, orders, inventory, invoices, communication and daily operations through one clearer workflow.",
        direction: [
          "Organised customer and business records",
          "Connected orders, inventory and invoices",
          "Workflows configured around the organisation",
          "Clearer operational visibility and control",
        ],
        href: "/contact?service=business-system#contact-form",
        cta: "Discuss a Business System",
        icon: BriefcaseBusiness,
      },
      {
        id: "gid-business-ai",
        name: "GID Business AI",
        status: "Active AI Development",
        role: "Executive business-intelligence system",
        description:
          "An AI system being developed to interpret business activity, identify risks, find opportunities, explain performance, and recommend useful executive action.",
        direction: [
          "Executive morning briefings",
          "Risk and opportunity detection",
          "Department-level intelligence",
          "Prioritised recommended actions",
        ],
        href: "/products/gid-business-ai",
        cta: "Explore GID Business AI",
        icon: BrainCircuit,
      },
      {
        id: "papertalk",
        name: "PaperTalk",
        status: "Working Software Prototype",
        role: "Accessibility-focused document-reading software",
        description:
          "A software product in active development exploring how printed and digital documents can be interpreted, displayed clearly, and made audible.",
        direction: [
          "Document input",
          "Text recognition and extraction",
          "Readable text output",
          "Read Aloud workflow",
        ],
        href: "/contact?service=papertalk#contact-form",
        cta: "Discuss PaperTalk",
        icon: Accessibility,
      },
    ],
  },
  {
    id: "roadmap",
    eyebrow: "Roadmap",
    title: "What may grow from GID Platform Core",
    description:
      "Planned platform layers that remain future work and are not yet publicly operational.",
    products: [
      {
        id: "gid-track",
        name: "GID Track",
        status: "Roadmap",
        role: "Shipment-management and tracking module",
        description:
          "A future system for tracking-number generation, shipment status, delivery timelines, driver information, and customer tracking.",
        direction: [
          "Shipment creation",
          "Tracking-number generation",
          "Status and event management",
          "Customer tracking portal",
        ],
        href: "/contact?service=build-with-gid&path=follow-journey#contact-form",
        cta: "Follow the Roadmap",
        icon: Truck,
      },
      {
        id: "gid-notify",
        name: "GID Notify",
        status: "Roadmap",
        role: "Event-driven notification infrastructure",
        description:
          "A future communication layer for operational events and customer updates across supported channels.",
        direction: [
          "Email notifications",
          "SMS direction",
          "WhatsApp direction",
          "In-app notifications",
        ],
        href: "/contact?service=build-with-gid&path=follow-journey#contact-form",
        cta: "Follow the Roadmap",
        icon: Bell,
      },
      {
        id: "gid-ai-delivery-assistant",
        name: "GID AI Delivery Assistant",
        status: "Roadmap",
        role: "Future delivery-intelligence layer",
        description:
          "A future assistant for contextual delivery updates, delay communication, delivery questions, and automatic customer support.",
        direction: [
          "Shipment-status interpretation",
          "Delay communication",
          "Delivery questions",
          "Contextual customer support",
        ],
        href: "/contact?service=build-with-gid&path=follow-journey#contact-form",
        cta: "Follow the Roadmap",
        icon: Bot,
      },
      {
        id: "public-gid-logistics-api",
        name: "Public GID Logistics API",
        status: "Long-Term Roadmap",
        role: "External logistics integration layer",
        description:
          "A future public integration layer that may allow external businesses and platforms to connect with GID logistics services.",
        direction: [
          "External integrations",
          "Business platform access",
          "Tracking-service access",
          "Developer-facing documentation",
        ],
        href: "/contact?service=partnership#contact-form",
        cta: "Discuss Future Integration",
        icon: Network,
      },
    ],
  },
  {
    id: "long-term-validation",
    eyebrow: "Long-Term Validation",
    title: "Exploring further",
    description:
      "Serious future directions that remain under research and validation rather than active product development.",
    quiet: true,
    products: [
      {
        id: "mechanic-connection",
        name: "Mechanic Connection",
        status: "Long-Term Validation",
        role: "Vehicle-support connection concept",
        description:
          "A future direction around nearby mechanics, roadside support, and relevant car-part access.",
        direction: [
          "User-problem research",
          "Service-provider trust",
          "Location-based matching",
          "Operating-model validation",
        ],
        href: "/contact?service=partnership#contact-form",
        cta: "Discuss the Direction",
        icon: Car,
      },
      {
        id: "property-connection",
        name: "Property Connection",
        status: "Long-Term Validation",
        role: "Property-discovery connection concept",
        description:
          "A future direction around housing discovery, clearer enquiries, and trusted property connections.",
        direction: [
          "Housing-discovery research",
          "Trust and verification",
          "Owner and agent connection",
          "Enquiry-flow validation",
        ],
        href: "/contact?service=partnership#contact-form",
        cta: "Discuss the Direction",
        icon: House,
      },
      {
        id: "gid-car-tracker",
        name: "GID Car Tracker",
        status: "Research / Future Validation",
        role: "Separate vehicle-location research direction",
        description:
          "A separate future product direction involving vehicle location, route history, geofencing, and possible fleet monitoring.",
        direction: [
          "Vehicle-location research",
          "Route-history direction",
          "Geofencing possibilities",
          "Hardware and operating-model validation",
        ],
        href: "/contact?service=partnership#contact-form",
        cta: "Discuss the Direction",
        icon: Car,
      },
    ],
  },
];

const roadmapLogic = [
  {
    title: "Prove through operation",
    text: "StatBet remains the live proof that GID Technologies can build, deploy, operate, review, and improve a public product.",
    icon: CheckCircle2,
  },
  {
    title: "Build solutions organisations can use",
    text: "GID Platform, GID Business AI, and PaperTalk turn operational, decision-making, and accessibility problems into practical products.",
    icon: Database,
  },
  {
    title: "Expand only with evidence",
    text: "Tracking services and wider connection concepts remain clearly labelled until their foundations and operating models are ready.",
    icon: Network,
  },
];

const statusGuide = [
  {
    status: "Live",
    meaning: "Publicly accessible and available for people to inspect or use.",
  },
  {
    status: "Active Product Development",
    meaning:
      "A real product is being developed around practical business workflows and organisational needs.",
  },
  {
    status: "Active AI Development",
    meaning:
      "Core AI foundations exist and additional executive-intelligence capabilities are actively being developed.",
  },
  {
    status: "Working Software Prototype",
    meaning:
      "A useful software workflow can be demonstrated, but the product is not yet finished.",
  },
  {
    status: "Roadmap",
    meaning:
      "A planned future layer that is not currently available or operational.",
  },
  {
    status: "Long-Term Validation",
    meaning:
      "A future direction undergoing research before active development begins.",
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
              Products & Infrastructure
            </p>

            <h1 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              Live proof, active engineering, and carefully staged expansion.
            </h1>

            <p className="mt-8 text-lg leading-8 text-neutral-400 md:text-xl">
              StatBet is live. GID Platform and GID Business AI are under active
              product development. PaperTalk is a working software prototype.
              Tracking and logistics services remain on the roadmap, while wider
              concepts stay under long-term validation.
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
                  1 live · 3 active · 4 roadmap · 3 validating
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {[
                "Operate the live proof",
                "Build the active foundations",
                "Extend the platform carefully",
                "Validate before full development",
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

        {productGroups.map((group) => (
          <section key={group.id} id={group.id} className="mt-20 scroll-mt-28">
            <div className="mb-10 max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                {group.eyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                {group.title}
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
                {group.description}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {group.products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  quiet={group.quiet}
                  featured={
                    product.id === "statbet" ||
                    product.id === "gid-platform-core" ||
                    product.id === "gid-business-ai"
                  }
                />
              ))}
            </div>
          </section>
        ))}

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
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-white" />
                  </span>

                  <h3 className="mt-7 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-400">{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.025] p-8">
          <Lightbulb className="h-7 w-7 text-white" />

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Status transparency
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
            Every public status means something specific.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {statusGuide.map((item) => (
              <article
                key={item.status}
                className="rounded-[1.5rem] border border-white/10 bg-black/50 p-5"
              >
                <span className="text-xs font-semibold text-neutral-300">
                  {item.status}
                </span>

                <p className="mt-5 text-sm leading-7 text-neutral-500">
                  {item.meaning}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-white p-8 text-center text-black md:p-12">
          <Network className="mx-auto h-7 w-7" />

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Enter the next product chapter
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
            Follow the builds, test a product, contribute a skill, or create a
            useful introduction.
          </h2>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/build-with-gid"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Build With GID
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact?service=build-with-gid&path=follow-journey#contact-form"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
            >
              Follow Development
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}

function ProductCard({
  product,
  quiet = false,
  featured = false,
}: {
  product: Product;
  quiet?: boolean;
  featured?: boolean;
}) {
  const Icon = product.icon;

  return (
    <article
      id={product.id}
      className={`scroll-mt-28 rounded-[1.75rem] border p-7 ${
        featured
          ? "border-cyan-200/20 bg-cyan-200/[0.035]"
          : quiet
            ? "border-white/[0.07] bg-white/[0.015]"
            : "border-white/10 bg-white/[0.025]"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
            <Icon className="h-5 w-5 text-white" />
          </span>

          <div>
            <h3 className="text-2xl font-semibold text-white">
              {product.name}
            </h3>

            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600">
              {product.role}
            </p>
          </div>
        </div>

        <span className="rounded-full border border-white/10 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-black">
          {product.status}
        </span>
      </div>

      <p className="mt-6 leading-7 text-neutral-400">{product.description}</p>

      <div className="mt-7 rounded-2xl border border-white/10 bg-black/50 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
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
}
