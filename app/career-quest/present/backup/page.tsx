import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GID Graduation Presentation Backup",
  robots: {
    index: false,
    follow: false,
  },
};

const companyStatuses = [
  ["Live", "StatBet"],
  ["Active Backend Development", "GID Platform Core"],
  ["Working Software Prototype", "PaperTalk"],
  ["Available Now", "GID Business Solutions"],
  ["Roadmap", "GID Track Ecosystem"],
  [
    "Long-Term Validation",
    "Mechanic Connection · Property Connection · GID Car Tracker",
  ],
];

export default function PresentationBackupPage() {
  return (
    <main className="bg-[#020307] text-white">
      <BackupScene number="01" label="Opening">
        <div className="text-center">
          <Image
            src="/brand/GID Logo white.svg"
            alt="GID Technologies"
            width={100}
            height={100}
            priority
            className="mx-auto h-24 w-24 scale-[1.7] object-contain"
          />

          <p className="mt-10 text-xl text-neutral-500">
            What are we building with what we learned?
          </p>

          <h1 className="mt-6 text-6xl font-semibold tracking-[-0.06em] md:text-8xl">
            GID Technologies
          </h1>

          <p className="mx-auto mt-7 max-w-4xl text-xl leading-8 text-neutral-400">
            An early-stage technology startup building practical digital
            solutions, reusable infrastructure and proof-led products.
          </p>
        </div>
      </BackupScene>

      <BackupScene
        number="02"
        label="The Problem"
        title="Value exists. Systems are missing."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Businesses need visibility.",
            "People need access.",
            "Ideas need structure.",
            "Operations need better systems.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-2xl font-semibold"
            >
              {item}
            </div>
          ))}
        </div>
      </BackupScene>

      <BackupScene
        number="03"
        label="How GID Operates"
        title="One company. Two connected operating arms."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <BackupCard
            status="Business Solutions"
            title="Solve practical digital problems."
            text="Websites, visibility systems, custom platforms, automation and ongoing digital support."
          />

          <BackupCard
            status="Products & Infrastructure"
            title="Build systems owned by GID."
            text="StatBet, GID Platform Core, PaperTalk and future tracking and logistics services."
          />
        </div>
      </BackupScene>

      <BackupScene
        number="04"
        label="Proof 001 — StatBet"
        title="From idea to live public product."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            [
              "/presentation/statbet/historical/portugal-croatia-analysis.png",
              "Original analysis",
            ],
            [
              "/presentation/statbet/historical/portugal-croatia-result.png",
              "Completed result",
            ],
            [
              "/presentation/statbet/historical/portugal-croatia-outcome-review.png",
              "Outcome Review",
            ],
            [
              "/presentation/statbet/historical/july-2-performance-review.png",
              "Daily Performance Review",
            ],
          ].map(([src, label]) => (
            <div
              key={src}
              className="overflow-hidden rounded-3xl border border-white/10 bg-black"
            >
              <p className="border-b border-white/10 px-5 py-4 text-sm font-semibold">
                {label}
              </p>

              <div className="relative aspect-[16/9]">
                <Image src={src} alt={label} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </BackupScene>

      <BackupScene
        number="05"
        label="Proof 002 — GID Platform Core"
        title="A real backend foundation is already under engineering."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <BackupEvidenceImage
            title="Structured Spring Boot Project"
            src="/presentation/platform-core/project-overview.png"
            alt="GID Platform Core project structure in IntelliJ"
          />

          <BackupEvidenceImage
            title="Documented API Surface"
            src="/presentation/platform-core/swagger-api-overview.png"
            alt="Swagger API documentation for GID Platform Core"
          />

          <BackupEvidenceImage
            title="Operational Database Schema"
            src="/presentation/platform-core/database-schema.png"
            alt="TiDB schema containing GID Platform Core tables"
          />

          <BackupEvidenceImage
            title="Persisted Database Records"
            src="/presentation/platform-core/database-query-redacted.png"
            alt="Redacted database query returning stored records"
          />
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Layered Backend",
              text: "Controllers, services, repositories, entities, security structure and application configuration.",
            },
            {
              title: "Business Domains",
              text: "Customers, products, orders, invoices, organisations, inventory movements, roles, permissions and other operational structures.",
            },
            {
              title: "Persistent Data",
              text: "The backend is connected to the gid_platform database and contains stored operational records.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>

              <p className="mt-4 text-sm leading-7 text-neutral-500">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-7 rounded-2xl border border-amber-300/15 bg-amber-300/[0.035] p-5 leading-7 text-neutral-400">
          GID Platform Core is not being presented as a completed ERP or
          customer-ready dashboard. The current proof is the connected backend
          foundation: domain models, database persistence, application logic,
          REST controllers and documented API contracts.
        </p>
      </BackupScene>

      <BackupScene
        number="06"
        label="Proof 003 — PaperTalk"
        title="Printed information, made audible."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {[
            "Document Input",
            "Text Recognition",
            "Readable Output",
            "Read Aloud",
          ].map((step, index) => (
            <div
              key={step}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-xs text-neutral-600">0{index + 1}</p>

              <p className="mt-8 text-xl font-semibold">{step}</p>
            </div>
          ))}
        </div>

        <p className="mt-7 text-xl font-semibold text-neutral-300">
          Working software prototype · Active development
        </p>
      </BackupScene>

      <BackupScene
        number="07"
        label="Platform Roadmap"
        title="Build the core once. Extend it carefully."
      >
        <div className="space-y-3">
          {[
            "GID Platform Core — Active backend development",
            "GID Track — Roadmap",
            "GID Notify — Roadmap",
            "GID AI Delivery Assistant — Roadmap",
            "Public GID Logistics API — Long-term roadmap",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-lg font-semibold"
            >
              {item}
            </div>
          ))}
        </div>
      </BackupScene>

      <BackupScene
        number="08"
        label="Company Position"
        title="Early—but not imaginary."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {companyStatuses.map(([status, product]) => (
            <BackupCard key={status} status={status} title={product} text="" />
          ))}
        </div>
      </BackupScene>

      <BackupScene
        number="09"
        label="Proof 004 — GID Pulse"
        title="Where do you fit?"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <div className="grid gap-3 md:grid-cols-2">
            {[
              "I need a digital solution",
              "I want to support GID",
              "I can contribute a skill",
              "I can make an introduction",
              "I want to test a product",
              "I want to follow the journey",
            ].map((path) => (
              <div
                key={path}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 font-semibold"
              >
                {path}
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-white p-6 text-center text-black">
            <Image
              src="/qr/graduation-qr.png"
              alt="Connect with GID Technologies"
              width={420}
              height={420}
              className="mx-auto aspect-square w-full max-w-[330px]"
            />

            <p className="mt-4 font-semibold">gidtechnologies.com/graduation</p>
          </div>
        </div>
      </BackupScene>

      <BackupScene number="10" label="Closing">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              We are not presenting a finished company.
            </h1>

            <p className="mt-8 text-3xl font-medium text-neutral-400">
              We are presenting a startup that has started proving itself.
            </p>

            <p className="mt-9 text-2xl font-semibold">
              Build with us. Support the journey.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 text-center text-black">
            <Image
              src="/qr/graduation-qr.png"
              alt="Connect with GID Technologies"
              width={420}
              height={420}
              className="mx-auto aspect-square w-full"
            />
          </div>
        </div>
      </BackupScene>
    </main>
  );
}

function BackupScene({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen break-after-page items-center border-b border-white/10 px-6 py-20 print:min-h-[100vh] md:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/60">
          {number} · {label}
        </p>

        {title ? (
          <h1 className="mt-5 max-w-6xl text-4xl font-semibold leading-[0.96] tracking-[-0.055em] md:text-6xl">
            {title}
          </h1>
        ) : null}

        <div className={title ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

function BackupEvidenceImage({
  title,
  src,
  alt,
}: {
  title: string;
  src: string;
  alt: string;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-black">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
        <p className="text-sm font-semibold text-white">{title}</p>

        <span className="rounded-full border border-cyan-200/15 bg-cyan-200/[0.05] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-cyan-100/60">
          Real Evidence
        </span>
      </div>

      <div className="relative aspect-[16/9] overflow-hidden bg-[#05080b]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
        />
      </div>
    </article>
  );
}

function BackupCard({
  status,
  title,
  text,
}: {
  status: string;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600">
        {status}
      </p>

      <h2 className="mt-5 text-2xl font-semibold">{title}</h2>

      {text ? <p className="mt-4 leading-7 text-neutral-500">{text}</p> : null}
    </article>
  );
}
