import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Braces,
  Boxes,
  CheckCircle2,
  Database,
  Layers3,
  Network,
  ServerCog,
} from "lucide-react";
import type { PresentationMode } from "../presentation-data";

type GidPlatformCoreProofSequenceProps = {
  activeStep: number;
  mode: PresentationMode;
};

type ProofStep = {
  label: string;
  title: string;
  description: string;
  evidence: string;
  context: string;
  icon: LucideIcon;
  visual:
    | "single"
    | "architecture"
    | "models"
    | "controllers"
    | "database"
    | "summary";
  src?: string;
};

const proofSteps: ProofStep[] = [
  {
    label: "Real Project Foundation",
    title: "The backend exists as a structured engineering project.",
    description:
      "GID Platform Core is being developed as a Java Spring Boot backend with organised source packages, configuration, business-domain classes, security structure, and application services.",
    evidence: "Java · Spring Boot · Structured Backend Project",
    context:
      "Current evidence shows a real codebase rather than a proposed dashboard or presentation mock-up.",
    icon: ServerCog,
    visual: "single",
    src: "/presentation/platform-core/project-overview.png",
  },
  {
    label: "Layered Architecture",
    title: "The system separates responsibilities across reusable layers.",
    description:
      "Controllers receive requests, services contain application logic, repositories handle persistence, and entities represent business data stored by the platform.",
    evidence: "Controllers → Services → Repositories → Entities",
    context:
      "This structure supports maintainability and future reuse across operational modules.",
    icon: Layers3,
    visual: "architecture",
  },
  {
    label: "Business-Domain Models",
    title: "The platform is modelling real operational information.",
    description:
      "Current entities cover customers, users, organisations, products, orders, invoices, inventory movements, campaigns, contacts, messages, shipments, permissions, roles, departments, and activity records.",
    evidence: "Operational Data · Relationships · Audit Structure",
    context:
      "Visible classes prove model and implementation work—not that every module is fully completed.",
    icon: Boxes,
    visual: "models",
  },
  {
    label: "REST API Structure",
    title:
      "Business operations are being exposed through controllers and documented APIs.",
    description:
      "The project contains controllers for customers, orders, authentication, campaigns, shipments, users, invoices, inventory movements, and other business areas.",
    evidence: "Mapped Endpoints · Controllers · OpenAPI Documentation",
    context:
      "Swagger currently demonstrates endpoint definitions, parameters, and expected response contracts.",
    icon: Braces,
    visual: "controllers",
  },
  {
    label: "Database Persistence",
    title: "The backend is connected to a real operational database.",
    description:
      "The gid_platform database contains tables for customers, products, orders, invoices, organisations, permissions, campaigns, contacts, inventory movements, shipment activity, and other platform records.",
    evidence: "TiDB Cloud · gid_platform · Persisted Records",
    context:
      "A database query returns stored user records. Public screenshots use redacted test-data values.",
    icon: Database,
    visual: "database",
  },
  {
    label: "Engineering Proof",
    title: "The proof is the connected backend foundation.",
    description:
      "GID Technologies is not presenting a finished ERP or customer-ready dashboard. It is presenting a real backend foundation with domain models, persistence, application logic, controllers, and inspectable API contracts.",
    evidence:
      "Models → Persistence → Services → Controllers → APIs → Future Interfaces",
    context:
      "Multi-organisation support and customer-facing interfaces remain active development directions.",
    icon: CheckCircle2,
    visual: "summary",
  },
];

const architectureImages = [
  {
    label: "Controllers",
    src: "/presentation/platform-core/controller-architecture.png",
  },
  {
    label: "Services",
    src: "/presentation/platform-core/service-architecture.png",
  },
  {
    label: "Repositories",
    src: "/presentation/platform-core/repository-architecture.png",
  },
  {
    label: "Entities",
    src: "/presentation/platform-core/entity-architecture.png",
  },
];

const platformFlow = [
  {
    title: "Entities",
    text: "Represent operational and organisational data.",
    icon: Boxes,
  },
  {
    title: "Repositories",
    text: "Connect application modules to persistent storage.",
    icon: Database,
  },
  {
    title: "Services",
    text: "Apply business rules and reusable application logic.",
    icon: Layers3,
  },
  {
    title: "Controllers",
    text: "Expose structured operations through REST endpoints.",
    icon: Braces,
  },
  {
    title: "API Contracts",
    text: "Document how future interfaces and integrations communicate.",
    icon: Network,
  },
];

export default function GidPlatformCoreProofSequence({
  activeStep,
  mode,
}: GidPlatformCoreProofSequenceProps) {
  const stepOrder = mode === "core" ? [0, 3, 4, 5] : [0, 1, 2, 3, 4, 5];

  const safeActiveStep = Math.min(activeStep, stepOrder.length - 1);

  const actualStepIndex = stepOrder[safeActiveStep];
  const step = proofSteps[actualStepIndex];
  const StepIcon = step.icon;

  return (
    <section className="w-full max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-center xl:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.04]">
              <StepIcon className="h-4 w-4 text-cyan-100/70" />
            </span>

            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/60">
              Proof 002 — GID Platform
            </p>
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">
            {step.label}
          </p>

          <h1 className="mt-5 text-balance text-[clamp(2.35rem,4.3vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-white">
            {step.title}
          </h1>

          <p className="mt-6 max-w-2xl text-[clamp(0.95rem,1.15vw,1.2rem)] leading-8 text-neutral-400">
            {step.description}
          </p>

          <div className="mt-7 rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.035] p-5">
            <div className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-200" />

              <div>
                <p className="text-sm font-semibold leading-6 text-cyan-50">
                  {step.evidence}
                </p>

                <p className="mt-2 text-xs leading-5 text-cyan-100/40">
                  {step.context}
                </p>
              </div>
            </div>
          </div>
        </div>

        <PlatformVisual step={step} />
      </div>
    </section>
  );
}

function PlatformVisual({ step }: { step: ProofStep }) {
  if (step.visual === "single" && step.src) {
    return (
      <EvidenceFrame title="GID Platform Core" label={step.label}>
        <Image
          src={step.src}
          alt="GID Platform Core IntelliJ project structure"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 900px"
          className="object-contain"
        />
      </EvidenceFrame>
    );
  }

  if (step.visual === "architecture") {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {architectureImages.map((image) => (
          <div
            key={image.label}
            className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#05080b]"
          >
            <div className="border-b border-white/10 px-4 py-3">
              <p className="text-xs font-semibold text-neutral-300">
                {image.label}
              </p>
            </div>

            <div className="relative aspect-[16/9] bg-black">
              <Image
                src={image.src}
                alt={`${image.label} package structure`}
                fill
                sizes="(max-width: 1024px) 50vw, 440px"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (step.visual === "models") {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        <EvidenceImage
          title="Customer Entity"
          src="/presentation/platform-core/customer-entity.png"
          alt="Customer entity model in GID Platform Core"
        />

        <EvidenceImage
          title="Activity Log Entity"
          src="/presentation/platform-core/activity-log-entity.png"
          alt="Activity log entity model in GID Platform Core"
        />
      </div>
    );
  }

  if (step.visual === "controllers") {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        <EvidenceImage
          title="Customer Controller"
          src="/presentation/platform-core/customer-controller.png"
          alt="Customer controller endpoint code"
        />

        <EvidenceImage
          title="Order Controller"
          src="/presentation/platform-core/order-controller.png"
          alt="Order controller endpoint code"
        />

        <div className="sm:col-span-2">
          <EvidenceImage
            title="Swagger API Overview"
            src="/presentation/platform-core/swagger-api-overview.png"
            alt="Swagger OpenAPI documentation for GID Platform Core"
            wide
          />
        </div>
      </div>
    );
  }

  if (step.visual === "database") {
    return (
      <div className="grid gap-3">
        <EvidenceImage
          title="gid_platform Database Schema"
          src="/presentation/platform-core/database-schema.png"
          alt="TiDB Cloud schema showing GID Platform Core database tables"
          wide
        />

        <EvidenceImage
          title="Redacted Database Query"
          src="/presentation/platform-core/database-query-redacted.png"
          alt="Redacted SQL query returning persisted GID Platform Core records"
          wide
        />
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-white/15 bg-[#05080b] p-7 shadow-[0_35px_120px_rgba(0,0,0,0.82)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">
            Connected engineering foundation
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
            What the current evidence proves
          </h2>
        </div>

        <span className="rounded-full border border-cyan-200/15 bg-cyan-200/[0.05] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-cyan-100/60">
          Active Development
        </span>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {platformFlow.map((item, index) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className={`rounded-[1.4rem] border border-white/10 bg-black/55 p-5 ${
                index === platformFlow.length - 1 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <Icon className="h-4 w-4 text-white" />
                </span>

                <span className="text-xs font-semibold text-neutral-700">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                {item.text}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function EvidenceFrame({
  title,
  label,
  children,
}: {
  title: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-[#05080b] shadow-[0_35px_120px_rgba(0,0,0,0.82)]">
      <div className="flex items-center justify-between gap-5 border-b border-white/10 px-5 py-4">
        <div>
          <p className="text-sm font-semibold text-white">{title}</p>

          <p className="mt-1 text-xs text-neutral-600">{label}</p>
        </div>

        <span className="shrink-0 rounded-full border border-cyan-200/15 bg-cyan-200/[0.06] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-100/70">
          Engineering Evidence
        </span>
      </div>

      <div className="relative aspect-[16/9] overflow-hidden bg-black">
        {children}
      </div>
    </div>
  );
}

function EvidenceImage({
  title,
  src,
  alt,
  wide = false,
}: {
  title: string;
  src: string;
  alt: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#05080b] ${
        wide ? "w-full" : ""
      }`}
    >
      <div className="border-b border-white/10 px-4 py-3">
        <p className="text-xs font-semibold text-neutral-300">{title}</p>
      </div>

      <div
        className={`relative bg-black ${
          wide ? "aspect-[16/7]" : "aspect-[16/9]"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 900px"
          className="object-contain"
        />
      </div>
    </div>
  );
}
