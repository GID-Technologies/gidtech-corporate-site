import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  ArrowRight,
  Blocks,
  Building2,
  CheckCircle2,
  Church,
  Database,
  GraduationCap,
  Hotel,
  Layers3,
  Network,
  Plug,
  ShoppingBag,
  Sprout,
  Truck,
  Users,
  Workflow,
} from "lucide-react";
import type { PresentationMode } from "../presentation-data";

type GidBusinessPlatformSequenceProps = {
  activeStep: number;
  mode: PresentationMode;
};

type VisualKind =
  | "ecosystem"
  | "suite"
  | "configured"
  | "api"
  | "industries"
  | "start"
  | "foundation";

type PlatformStep = {
  label: string;
  title: string;
  description: string;
  outcome: string;
  context: string;
  icon: LucideIcon;
  visual: VisualKind;
};

const platformSteps: PlatformStep[] = [
  {
    label: "The Platform Model",
    title: "One platform. Three ways businesses can use it.",
    description:
      "GID Platform is being designed so organisations can use GID applications directly, combine selected capabilities into a configured business system, or eventually embed GID services inside platforms they already operate.",
    outcome:
      "Use directly · Configure for your workflow · Integrate through APIs",
    context:
      "GID Platform Core is the shared technical foundation beneath these delivery models.",
    icon: Network,
    visual: "ecosystem",
  },
  {
    label: "GID Suite",
    title: "Use only the GID services that fit the job.",
    description:
      "The GID Suite direction is a family of connected business applications and services. An organisation should be able to use the particular tools it needs without adopting an unnecessarily large system.",
    outcome:
      "Customers · Orders · Inventory · Invoices · Notifications · Access Control",
    context:
      "The complete Suite is a product direction. Individual capabilities remain under active development.",
    icon: AppWindow,
    visual: "suite",
  },
  {
    label: "Configured Business Systems",
    title: "Connect the important parts of your operation into one system.",
    description:
      "GID can select and configure relevant capabilities around how a business actually works—from its first customer enquiry to service delivery, billing, communication and management review.",
    outcome:
      "One connected operating flow instead of scattered records and repeated explanations",
    context:
      "This is the strongest near-term commercial offer: understand the workflow, build the right system, launch it and support its growth.",
    icon: Blocks,
    visual: "configured",
  },
  {
    label: "Embedded Services",
    title: "Bring GID capabilities into the systems you already use.",
    description:
      "A business with an existing website, mobile application, customer portal or internal platform may eventually connect directly to supported GID services through APIs.",
    outcome: "Your platform → GID APIs → operational capability",
    context:
      "Public and self-service APIs remain a roadmap direction rather than a currently launched public service.",
    icon: Plug,
    visual: "api",
  },
  {
    label: "Industry Possibilities",
    title: "Different organisations can use the same foundation differently.",
    description:
      "The platform is not limited to one industry. GID can study an organisation’s workflow and configure the relevant customer, operational, financial, communication and access-control capabilities.",
    outcome:
      "Schools · Churches · Hospitality · Retail · Logistics · Farms and Services",
    context:
      "These are illustrative systems that would be scoped around each organisation’s genuine needs.",
    icon: Building2,
    visual: "industries",
  },
  {
    label: "Commercial Entry Point",
    title: "Start with the problem costing the business the most.",
    description:
      "A business does not need to replace everything at once. GID can begin with one expensive workflow problem, implement the first useful system and extend it as the organisation becomes ready.",
    outcome: "Audit → First module → Pilot → Launch → Support → Expansion",
    context:
      "The first conversation should identify the operational problem, affected people, existing tools and expected business outcome.",
    icon: Workflow,
    visual: "start",
  },
  {
    label: "Supporting Foundation",
    title: "The commercial direction is backed by real engineering work.",
    description:
      "Behind the business-facing platform is an active backend foundation containing operational data models, persistence, application services, controllers, access structures and documented API contracts.",
    outcome: "Business vision supported by an active technical foundation",
    context:
      "This technical branch is reserved for extended presentations and deeper partner discussions.",
    icon: Database,
    visual: "foundation",
  },
];

const suiteServices = [
  "Customer Hub",
  "Products & Services",
  "Orders",
  "Inventory",
  "Invoices",
  "Team Access",
  "Notifications",
  "Activity Records",
];

const operatingFlow = [
  "Customer Enquiry",
  "Customer Record",
  "Order or Service Request",
  "Products, Stock or Resources",
  "Invoice and Payment Record",
  "Communication and Follow-up",
];

const apiCapabilities = [
  "Customer Services",
  "Order Services",
  "Invoice Services",
  "Notification Services",
  "Tracking Services",
];

const industries = [
  {
    name: "Schools",
    description: "Admissions, records, fees, announcements and staff access.",
    icon: GraduationCap,
  },
  {
    name: "Churches & Associations",
    description:
      "Members, departments, events, communication and coordination.",
    icon: Church,
  },
  {
    name: "Hotels & Hospitality",
    description:
      "Bookings, service orders, inventory, invoices and customer records.",
    icon: Hotel,
  },
  {
    name: "Retail & Wholesale",
    description: "Products, stock movements, customers, orders and invoices.",
    icon: ShoppingBag,
  },
  {
    name: "Logistics",
    description:
      "Shipments, movement events, exceptions, updates and tracking.",
    icon: Truck,
  },
  {
    name: "Farms & Service Companies",
    description:
      "Customers, products or services, orders, resources and distribution.",
    icon: Sprout,
  },
];

const engagementSteps = [
  {
    number: "01",
    title: "Study the Workflow",
    description:
      "Understand how work currently moves and where value is being lost.",
  },
  {
    number: "02",
    title: "Choose the First Problem",
    description:
      "Identify the process with the strongest operational or financial impact.",
  },
  {
    number: "03",
    title: "Build the First System",
    description:
      "Configure or develop the relevant modules, interface and integrations.",
  },
  {
    number: "04",
    title: "Launch and Expand",
    description:
      "Support adoption, improve the workflow and add capabilities gradually.",
  },
];

export default function GidBusinessPlatformSequence({
  activeStep,
  mode,
}: GidBusinessPlatformSequenceProps) {
  const stepOrder =
    mode === "core"
      ? [0, 2, 4, 5]
      : mode === "extended"
        ? [0, 1, 2, 3, 4, 5, 6]
        : [0, 1, 2, 3, 4, 5];

  const safeActiveStep = Math.min(activeStep, stepOrder.length - 1);

  const actualStepIndex = stepOrder[safeActiveStep];
  const step = platformSteps[actualStepIndex];
  const StepIcon = step.icon;

  return (
    <section className="w-full max-w-[1450px]">
      <div className="grid gap-7 lg:grid-cols-[0.52fr_1.48fr] lg:items-center xl:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.04]">
              <StepIcon className="h-4 w-4 text-cyan-100/70" />
            </span>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/60">
              GID Platform · Business Infrastructure
            </p>
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-600">
            {step.label}
          </p>

          <h1 className="mt-4 text-balance text-[clamp(2.15rem,3.75vw,4.4rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-white">
            {step.title}
          </h1>

          <p className="mt-4 max-w-2xl text-[clamp(0.88rem,1vw,1.08rem)] leading-7 text-neutral-400">
            {step.description}
          </p>

          <div className="mt-5 rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.035] p-4">
            <p className="text-sm font-semibold leading-6 text-cyan-50">
              {step.outcome}
            </p>

            <p className="mt-2 text-xs leading-5 text-cyan-100/40">
              {step.context}
            </p>
          </div>
        </div>

        <PlatformVisual visual={step.visual} />
      </div>

      <div
        className={`mt-4 grid gap-2 ${
          stepOrder.length === 4
            ? "sm:grid-cols-4"
            : stepOrder.length === 7
              ? "sm:grid-cols-7"
              : "sm:grid-cols-6"
        }`}
      >
        {stepOrder.map((stepIndex, sequenceIndex) => {
          const sequenceStep = platformSteps[stepIndex];
          const active = sequenceIndex === safeActiveStep;
          const passed = sequenceIndex < safeActiveStep;

          return (
            <div
              key={sequenceStep.label}
              className={`min-w-0 rounded-xl border px-3 py-2 ${
                active
                  ? "border-cyan-200/30 bg-cyan-200/[0.07]"
                  : passed
                    ? "border-white/10 bg-white/[0.035]"
                    : "border-white/[0.06] bg-black/20"
              }`}
            >
              <p
                className={`text-[9px] font-semibold uppercase leading-4 tracking-[0.1em] ${
                  active ? "text-white" : "text-neutral-600"
                }`}
              >
                {String(sequenceIndex + 1).padStart(2, "0")}
              </p>

              <p
                className={`mt-1 truncate text-[9px] font-semibold leading-4 ${
                  active ? "text-neutral-200" : "text-neutral-700"
                }`}
              >
                {sequenceStep.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function PlatformVisual({ visual }: { visual: VisualKind }) {
  if (visual === "ecosystem") {
    return <EcosystemVisual />;
  }

  if (visual === "suite") {
    return <SuiteVisual />;
  }

  if (visual === "configured") {
    return <ConfiguredSystemVisual />;
  }

  if (visual === "api") {
    return <ApiVisual />;
  }

  if (visual === "industries") {
    return <IndustriesVisual />;
  }

  if (visual === "start") {
    return <StartVisual />;
  }

  return <FoundationVisual />;
}

function EcosystemVisual() {
  const deliveryModels = [
    {
      title: "GID Suite",
      status: "Product Direction",
      description:
        "Use individual GID-owned business applications and services directly.",
      icon: AppWindow,
    },
    {
      title: "GID Business Systems",
      status: "Commercial Offer",
      description:
        "Combine selected capabilities into a system configured around one organisation.",
      icon: Blocks,
    },
    {
      title: "GID APIs",
      status: "Integration Roadmap",
      description:
        "Embed supported GID capabilities inside existing business products and platforms.",
      icon: Plug,
    },
  ];

  return (
    <div className="rounded-[2rem] border border-white/15 bg-[#05080b] p-5 shadow-[0_35px_120px_rgba(0,0,0,0.82)]">
      <div className="rounded-[1.5rem] border border-cyan-200/20 bg-cyan-200/[0.045] p-5 text-center">
        <Layers3 className="mx-auto h-7 w-7 text-cyan-100/70" />

        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/50">
          Shared Foundation
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
          GID Platform Core
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-500">
          Shared operational services, data structures, security, business rules
          and integration capabilities.
        </p>
      </div>

      <div className="my-4 flex justify-center">
        <ArrowRight className="h-5 w-5 rotate-90 text-neutral-700" />
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {deliveryModels.map((model) => {
          const Icon = model.icon;

          return (
            <article
              key={model.title}
              className="rounded-[1.4rem] border border-white/10 bg-black/55 p-4"
            >
              <Icon className="h-5 w-5 text-white" />

              <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.15em] text-neutral-600">
                {model.status}
              </p>

              <h3 className="mt-2 text-lg font-semibold text-white">
                {model.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-neutral-500">
                {model.description}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function SuiteVisual() {
  return (
    <div className="rounded-[2rem] border border-white/15 bg-[#05080b] p-7 shadow-[0_35px_120px_rgba(0,0,0,0.82)]">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-600">
            GID Suite direction
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
            Connected services. Used as needed.
          </h2>
        </div>

        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
          Developing
        </span>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {suiteServices.map((service, index) => (
          <article
            key={service}
            className="rounded-[1.35rem] border border-white/10 bg-black/55 p-5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[10px] font-semibold text-neutral-500">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="mt-6 text-lg font-semibold text-white">{service}</h3>
          </article>
        ))}
      </div>
    </div>
  );
}

function ConfiguredSystemVisual() {
  return (
    <div className="rounded-[2rem] border border-white/15 bg-[#05080b] p-7 shadow-[0_35px_120px_rgba(0,0,0,0.82)]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-600">
          Connected operating flow
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
          From first enquiry to management review.
        </h2>
      </div>

      <div className="mt-7 grid gap-2">
        {operatingFlow.map((item, index) => (
          <div key={item}>
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/55 px-5 py-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-[10px] font-semibold text-neutral-500">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="text-sm font-semibold text-neutral-200">{item}</p>
            </div>

            {index < operatingFlow.length - 1 ? (
              <div className="flex h-4 justify-center">
                <ArrowRight className="h-3.5 w-3.5 rotate-90 text-neutral-700" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function ApiVisual() {
  return (
    <div className="rounded-[2rem] border border-white/15 bg-[#05080b] p-7 shadow-[0_35px_120px_rgba(0,0,0,0.82)]">
      <div className="grid gap-4 lg:grid-cols-[0.85fr_auto_1fr_auto_1.25fr] lg:items-center">
        <SystemBlock
          icon={Building2}
          eyebrow="Already exists"
          title="Business Platform"
          description="Website, mobile app, portal or internal operating system."
        />

        <ArrowRight className="mx-auto hidden h-5 w-5 text-neutral-700 lg:block" />

        <SystemBlock
          icon={Plug}
          eyebrow="Connection layer"
          title="GID APIs"
          description="Secure access to supported GID operational capabilities."
          active
        />

        <ArrowRight className="mx-auto hidden h-5 w-5 text-neutral-700 lg:block" />

        <div className="grid gap-2">
          {apiCapabilities.map((capability) => (
            <div
              key={capability}
              className="rounded-xl border border-white/10 bg-black/55 px-4 py-3 text-xs font-semibold text-neutral-300"
            >
              {capability}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-7 rounded-2xl border border-amber-300/15 bg-amber-300/[0.035] p-5 text-xs leading-6 text-neutral-500">
        Public GID APIs are a future integration layer. The presentation
        communicates the intended business model, not a currently launched
        self-service API marketplace.
      </p>
    </div>
  );
}

function IndustriesVisual() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {industries.map((industry) => {
        const Icon = industry.icon;

        return (
          <article
            key={industry.name}
            className="rounded-[1.45rem] border border-white/10 bg-[#05080b] p-5"
          >
            <Icon className="h-5 w-5 text-white" />

            <h2 className="mt-5 text-lg font-semibold text-white">
              {industry.name}
            </h2>

            <p className="mt-3 text-sm leading-6 text-neutral-500">
              {industry.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}

function StartVisual() {
  return (
    <div className="rounded-[2rem] border border-white/15 bg-[#05080b] p-7 shadow-[0_35px_120px_rgba(0,0,0,0.82)]">
      <div className="grid gap-3 sm:grid-cols-2">
        {engagementSteps.map((step) => (
          <article
            key={step.number}
            className="rounded-[1.4rem] border border-white/10 bg-black/55 p-5"
          >
            <span className="text-xs font-semibold text-neutral-700">
              {step.number}
            </span>

            <h2 className="mt-5 text-xl font-semibold text-white">
              {step.title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-neutral-500">
              {step.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {[
          "Paid Custom Project",
          "Pilot Implementation",
          "Setup & Onboarding",
          "Ongoing Technical Support",
        ].map((model) => (
          <span
            key={model}
            className="rounded-full border border-cyan-200/15 bg-cyan-200/[0.035] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-cyan-100/60"
          >
            {model}
          </span>
        ))}
      </div>
    </div>
  );
}

function FoundationVisual() {
  const foundation = [
    {
      title: "Operational Models",
      description:
        "Business-domain structures for customers, products, orders, invoices, organisations and related operations.",
      icon: Layers3,
    },
    {
      title: "API Structure",
      description:
        "Controllers and documented contracts for future interfaces and integrations.",
      icon: Network,
    },
    {
      title: "Persistent Data",
      description:
        "A connected operational database containing platform tables and records.",
      icon: Database,
    },
  ];

  return (
    <div className="rounded-[2rem] border border-white/15 bg-[#05080b] p-7 shadow-[0_35px_120px_rgba(0,0,0,0.82)]">
      <div className="grid gap-3 md:grid-cols-3">
        {foundation.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-[1.4rem] border border-white/10 bg-black/55 p-5"
            >
              <Icon className="h-5 w-5 text-white" />

              <h2 className="mt-6 text-xl font-semibold text-white">
                {item.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-100/60" />

        <p className="text-xs leading-6 text-neutral-500">
          The existing technical evidence remains available for deeper
          conversations, but it no longer controls the main commercial
          presentation.
        </p>
      </div>
    </div>
  );
}

function SystemBlock({
  icon: Icon,
  eyebrow,
  title,
  description,
  active = false,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  active?: boolean;
}) {
  return (
    <article
      className={`rounded-[1.4rem] border p-5 ${
        active
          ? "border-cyan-200/20 bg-cyan-200/[0.045]"
          : "border-white/10 bg-black/55"
      }`}
    >
      <Icon
        className={`h-5 w-5 ${active ? "text-cyan-100/70" : "text-white"}`}
      />

      <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.15em] text-neutral-600">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-xl font-semibold text-white">{title}</h2>

      <p className="mt-3 text-sm leading-6 text-neutral-500">{description}</p>
    </article>
  );
}
