import Image from "next/image";
import type { ReactNode } from "react";

export const metadata = {
  title: "GID Technologies — Career Quest Backup",
  robots: {
    index: false,
    follow: false,
  },
};

const businessProblems = [
  ["Enquiries", "Lost inside chats"],
  ["Customers", "Records scattered"],
  ["Orders", "Tracked manually"],
  ["Inventory", "Stock uncertain"],
  ["Payments", "Records fragmented"],
  ["Decisions", "Based on assumptions"],
];

const businessSolutions = [
  "Websites & Digital Presence",
  "Visibility & Enquiry Systems",
  "Configured Business Systems",
  "Automation",
  "Custom Platforms",
  "Digital Support",
];

const products = ["StatBet", "GID Platform", "GID Business AI", "PaperTalk"];

const workWithGid = [
  ["People are not finding the business.", "Visibility & Digital Presence"],
  ["Daily operations are scattered.", "Business Systems"],
  ["Too much work repeats manually.", "Automation & Workflow"],
  ["The business has data but lacks clarity.", "Business Intelligence"],
  ["The organisation needs something specific.", "Custom Digital Solution"],
  ["There is an opportunity to explore together.", "Partnership"],
];

export default function CareerQuestBackupPage() {
  return (
    <main className="min-h-screen bg-[#020307] text-white">
      <BackupScene number="01" label="GID Technologies">
        <div className="text-center">
          <Image
            src="/brand/GID Logo white.svg"
            alt="GID Technologies"
            width={100}
            height={100}
            priority
            className="mx-auto h-24 w-24 scale-[1.7] object-contain"
          />

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/60">
            Aptech Career Quest 2026
          </p>

          <h1 className="mx-auto mt-6 max-w-6xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-8xl">
            Technology should change what a business can do.
          </h1>

          <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 text-neutral-400 md:text-xl">
            GID Technologies builds practical digital solutions around
            visibility, operations, intelligence, accessibility and growth.
          </p>
        </div>
      </BackupScene>

      <BackupScene
        number="02"
        label="Live Experience"
        title="Explore GID while the presentation continues."
      >
        <div className="rounded-[2rem] border border-cyan-200/15 bg-cyan-200/[0.035] p-7 text-center">
          <p className="text-xl font-semibold text-white">
            gidtechnologies.com/career-quest/live
          </p>

          <p className="mt-4 text-neutral-400">
            Company · Products · Business opportunities · Contact routes
          </p>
        </div>
      </BackupScene>

      <BackupScene
        number="03"
        label="Business Reality"
        title="Small operational gaps become expensive business problems."
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {businessProblems.map(([area, problem]) => (
            <article
              key={area}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-600">
                {area}
              </p>

              <h2 className="mt-4 text-2xl font-semibold">{problem}</h2>
            </article>
          ))}
        </div>

        <p className="mt-6 rounded-2xl border border-amber-300/15 bg-amber-300/[0.035] p-5 text-center text-lg font-semibold">
          Lost customers · Wasted time · Slow decisions · Lost money
        </p>
      </BackupScene>

      <BackupScene
        number="04"
        label="How GID Operates"
        title="One company. Two ways technology creates value."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <BackupPanel eyebrow="Hire GID" title="Business Solutions">
            <div className="grid gap-2 sm:grid-cols-2">
              {businessSolutions.map((item) => (
                <BackupChip key={item}>{item}</BackupChip>
              ))}
            </div>

            <p className="mt-6 font-semibold text-neutral-300">
              Problem → Assessment → Solution → Launch → Support
            </p>
          </BackupPanel>

          <BackupPanel eyebrow="GID-Owned" title="Products & Infrastructure">
            <div className="grid gap-2 sm:grid-cols-2">
              {products.map((item) => (
                <BackupChip key={item}>{item}</BackupChip>
              ))}
            </div>

            <p className="mt-6 font-semibold text-neutral-300">
              Problem → Product → Public Use → Learn → Scale
            </p>
          </BackupPanel>
        </div>
      </BackupScene>

      <BackupScene
        number="05"
        label="StatBet"
        title="From idea to a live public product."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {["Identify", "Build", "Launch", "Operate & Improve"].map(
            (step, index) => (
              <article
                key={step}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-center"
              >
                <p className="text-xs text-neutral-600">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h2 className="mt-8 text-2xl font-semibold">{step}</h2>
              </article>
            ),
          )}
        </div>

        <p className="mt-7 text-center text-lg font-semibold text-neutral-300">
          StatBet demonstrates that GID can take a product beyond the idea stage
          and continue operating it after launch.
        </p>
      </BackupScene>

      <BackupScene
        number="06"
        label="GID Platform"
        title="Turn scattered activity into a clearer operating system."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <BackupPanel eyebrow="Before" title="Disconnected">
            <div className="grid gap-2">
              {[
                "WhatsApp conversations",
                "Paper records",
                "Spreadsheets",
                "Different staff phones",
                "Staff memory",
              ].map((item) => (
                <BackupChip key={item}>{item}</BackupChip>
              ))}
            </div>
          </BackupPanel>

          <div className="text-center text-4xl text-neutral-700">→</div>

          <BackupPanel eyebrow="With GID" title="Connected">
            <div className="grid gap-2">
              {[
                "Customers",
                "Orders",
                "Inventory",
                "Invoices",
                "Communication",
                "Management view",
              ].map((item) => (
                <BackupChip key={item}>{item}</BackupChip>
              ))}
            </div>
          </BackupPanel>
        </div>

        <p className="mt-7 rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.035] p-5 text-center font-semibold">
          Start with the problem costing the organisation the most.
        </p>
      </BackupScene>

      <BackupScene
        number="07"
        label="GID Business AI"
        title="Turn business information into decisions that deserve attention."
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Four invoices are overdue.",
            "Inventory may finish in six days.",
            "Five shipments need attention.",
            "Returning customers are increasing.",
            "A campaign produced no conversions.",
            "Today's priorities can be ranked.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-lg font-semibold"
            >
              {item}
            </div>
          ))}
        </div>

        <p className="mt-7 text-center text-neutral-400">
          Risks earlier · Opportunities sooner · Priorities clearer · Decisions
          faster
        </p>
      </BackupScene>

      <BackupScene
        number="08"
        label="PaperTalk"
        title="One document can become information a person can read or hear."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {["Document", "Extract", "Read", "Listen"].map((step, index) => (
            <article
              key={step}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-center"
            >
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs text-neutral-500">
                0{index + 1}
              </span>

              <h2 className="mt-6 text-2xl font-semibold">{step}</h2>
            </article>
          ))}
        </div>

        <p className="mt-7 text-center text-neutral-400">
          Schools · Workplaces · Institutions · Organisations · Accessibility
          programmes
        </p>
      </BackupScene>

      <BackupScene
        number="09"
        label="Work With GID"
        title="You do not need to know what software you need."
      >
        <div className="grid gap-3 md:grid-cols-2">
          {workWithGid.map(([problem, route]) => (
            <article
              key={problem}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-lg font-semibold">{problem}</p>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100/55">
                {route}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-7 rounded-3xl border border-cyan-200/15 bg-cyan-200/[0.035] p-7 text-center">
          <p className="text-2xl font-semibold">
            Start with the problem. We just need a clear starting point.
          </p>

          <p className="mt-4 text-neutral-400">
            gidtechnologies.com/career-quest/live
          </p>
        </div>
      </BackupScene>

      <BackupScene number="10" label="Closing">
        <div className="text-center">
          <Image
            src="/brand/GID Logo white.svg"
            alt="GID Technologies"
            width={90}
            height={90}
            className="mx-auto h-20 w-20 scale-[1.7] object-contain"
          />

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/55">
            GID Technologies
          </p>

          <h1 className="mx-auto mt-8 max-w-6xl text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-8xl">
            Bring us one problem worth solving.
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-xl leading-8 text-neutral-400">
            You do not need to arrive with the technology figured out. Start
            with what needs to change.
          </p>

          <p className="mt-9 font-semibold">gidtechnologies.com</p>
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
  children: ReactNode;
}) {
  return (
    <section className="flex min-h-screen items-center border-b border-white/10 px-5 py-20 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/55">
          {number} · {label}
        </p>

        {title ? (
          <h1 className="mt-5 max-w-6xl text-4xl font-semibold leading-[0.96] tracking-[-0.05em] md:text-6xl">
            {title}
          </h1>
        ) : null}

        <div className={title ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

function BackupPanel({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-semibold">{title}</h2>

      <div className="mt-6">{children}</div>
    </article>
  );
}

function BackupChip({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-sm font-semibold text-neutral-300">
      {children}
    </div>
  );
}
