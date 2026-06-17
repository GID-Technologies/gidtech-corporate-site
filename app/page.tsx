const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "StatBet", href: "/statbet" },
  { label: "GidAds", href: "/gidads" },
  { label: "Contact", href: "/contact" },
];
const credibilityItems = [
  "Registered company: RC 9595315",
  "Live proof product: StatBet",
  "Business visibility systems",
  "Based in Lagos, Nigeria",
];

const whatWeDo = [
  {
    title: "Digital Products",
    copy: "We build practical platforms and digital systems designed around real problems, clear user flows, and long-term growth.",
  },
  {
    title: "Business Visibility Systems",
    copy: "We help businesses improve online presence, customer trust, enquiry flow, and campaign visibility.",
  },
  {
    title: "Technology Solutions",
    copy: "We support companies with landing pages, digital showrooms, website planning, software direction, and business presentation tools.",
  },
];

const statBetChips = [
  "Live public website",
  "Custom domain",
  "Analytics setup",
  "Outcome review",
  "Performance tracking",
  "Public football intelligence pages",
];

const gidadsCards = [
  "Digital showroom setup",
  "WhatsApp/contact flow",
  "Social media cleanup",
  "Campaign planning",
  "Field advertising support",
  "Monthly reporting",
];

const roadmap = [
  {
    name: "StatBet",
    category: "Football intelligence platform",
    status: "Live",
    tone: "bg-emerald-400/10 text-emerald-200 ring-emerald-300/20",
  },
  {
    name: "GidAds",
    category: "Business visibility systems",
    status: "Current focus",
    tone: "bg-sky-400/10 text-sky-200 ring-sky-300/20",
  },
  {
    name: "GidConnect",
    category: "Property and opportunity connection concept",
    status: "Planned",
    tone: "bg-slate-400/10 text-slate-200 ring-slate-300/20",
  },
  {
    name: "CleanConnect",
    category: "Service connection concept",
    status: "Planned",
    tone: "bg-slate-400/10 text-slate-200 ring-slate-300/20",
  },
];

const process = [
  "Discover",
  "Plan",
  "Build / Set Up",
  "Launch",
  "Monitor",
  "Improve",
];

const principles = [
  "Practical execution",
  "Trust-first positioning",
  "Clear communication",
  "Measurable visibility",
  "Long-term ecosystem thinking",
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="none">
      <path
        d="M5 10h10m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
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
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-white"
    >
      {children}
      <ArrowIcon />
    </a>
  );
}

function SecondaryButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-300/10"
    >
      {children}
      <ArrowIcon />
    </a>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-slate-950/65 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-black text-cyan-200 shadow-glow">
            G
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-wide text-white">
              GID Technologies
            </span>
            <span className="hidden text-xs text-slate-400 sm:block">
              Practical technology systems
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-cyan-300/30 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10"
        >
          Start a Project
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="section-shell relative min-h-[92vh] overflow-hidden px-5 pb-16 pt-32 md:px-8 md:pt-36 lg:pt-40"
    >
      <div className="absolute left-1/2 top-28 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute inset-0 -z-20 bg-grid-pattern bg-[size:64px_64px] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="animate-fade-up">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-4 py-2 text-xs font-medium text-cyan-100">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
            Proof-led technology company
          </div>

          <h1 className="text-balance max-w-5xl text-5xl font-semibold tracking-[-0.045em] text-white md:text-6xl lg:text-7xl">
            Building practical digital products and business visibility systems.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            GID Technologies creates digital platforms, online presence systems,
            and business growth tools that help companies become easier to find,
            easier to trust, and easier to contact.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton href="/statbet">View Proof of Work</PrimaryButton>
            <SecondaryButton href="/contact">Start a Project</SecondaryButton>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {credibilityItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-slate-200 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up lg:pl-8">
          <div className="premium-border glass relative overflow-hidden rounded-[2rem] p-5">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Execution Model
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  GIDTech execution model
                </h3>
              </div>
              <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100 ring-1 ring-cyan-300/20">
                Active
              </span>
            </div>

            <div className="space-y-4">
              {[
                [
                  "01",
                  "Build live products",
                  "StatBet proves real product execution.",
                ],
                [
                  "02",
                  "Create visibility systems",
                  "GidAds supports business trust and discovery.",
                ],
                [
                  "03",
                  "Prepare ecosystem platforms",
                  "Connection products planned with controlled growth.",
                ],
              ].map(([num, title, copy]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-slate-950/40 p-5 transition duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.045]"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-sm font-bold text-cyan-200 ring-1 ring-cyan-300/20">
                      {num}
                    </span>
                    <div>
                      <h4 className="font-semibold text-white">{title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {copy}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.035] p-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-slate-300">
                  Public trust layer for products, visibility work, and serious
                  business conversations.
                </p>
                <div className="h-12 w-12 shrink-0 rounded-full bg-premium-radial ring-1 ring-cyan-300/20" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-2 hidden rounded-3xl border border-cyan-300/20 bg-cyan-300/10 px-5 py-4 text-sm text-cyan-50 shadow-glow backdrop-blur md:block">
            Live product proof, not empty positioning.
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section id="about" className="section-shell px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What we do"
          title="Practical technology work with a clear business purpose."
          copy="GID Technologies connects product building, online presence, campaign visibility, and business presentation into one serious execution layer."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {whatWeDo.map((item, index) => (
            <article
              key={item.title}
              className="glass group rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
            >
              <span className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-sm font-bold text-cyan-200 ring-1 ring-cyan-300/20">
                0{index + 1}
              </span>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-400">{item.copy}</p>
            </article>
          ))}
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
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="border-b border-white/10 p-8 md:p-12 lg:border-b-0 lg:border-r">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
                Proof of execution
              </p>
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Proof of execution: StatBet
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                StatBet is a live football intelligence platform built under GID
                Technologies. It demonstrates our ability to build, launch,
                monitor, and publicly position a real digital product.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton href="https://statbet.gidtechnologies.com">
                  Visit StatBet
                </PrimaryButton>
                <SecondaryButton href="/products">
                  View Ecosystem Roadmap
                </SecondaryButton>
              </div>
            </div>

            <div className="relative overflow-hidden p-8 md:p-12">
              <div className="absolute inset-0 bg-grid-pattern bg-[size:42px_42px] opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
              <div className="relative">
                <div className="mb-8 flex items-center justify-between rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                  <div>
                    <p className="text-sm text-slate-400">Flagship product</p>
                    <h3 className="mt-1 text-2xl font-semibold text-white">
                      StatBet
                    </h3>
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-200 ring-1 ring-emerald-300/20">
                    Live
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {statBetChips.map((chip) => (
                    <div
                      key={chip}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-medium text-slate-200"
                    >
                      {chip}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.055] p-6">
                  <p className="text-sm leading-7 text-cyan-50/90">
                    StatBet acts as public proof that GIDTech can move beyond
                    ideas into execution: a live platform, a custom domain,
                    public positioning, visibility monitoring, and structured
                    product presentation.
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

function GidAds() {
  return (
    <section id="gidads" className="section-shell px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Business visibility systems"
          title="GidAds — Business Visibility Systems"
          copy="GidAds helps businesses become more visible, trusted, discoverable, and professionally presented through digital showrooms, online campaigns, social media positioning, field advertising support, and enquiry flow setup."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gidadsCards.map((card) => (
            <div
              key={card}
              className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/[0.055]"
            >
              <div className="mb-8 h-10 w-10 rounded-2xl bg-cyan-300/10 ring-1 ring-cyan-300/20" />
              <h3 className="text-xl font-semibold text-white">{card}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                Structured support designed to improve business presentation,
                discovery, contact flow, and campaign clarity.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/50 p-6 text-sm leading-7 text-slate-300">
          GidAds is not positioned as a promise of guaranteed sales. It is a
          practical visibility system focused on trust, presentation, discovery,
          campaign support, and clearer enquiry paths.
        </div>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <PrimaryButton href="/contact">
            Request a Visibility Proposal
          </PrimaryButton>
          <SecondaryButton href="/statbet">
            View Proof of Execution
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
          eyebrow="Ecosystem roadmap"
          title="A controlled product ecosystem, built in stages."
          copy="The website presents what is live, what is commercially active, and what is planned without overstating company scale."
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {roadmap.map((item) => (
            <article
              key={item.name}
              className="glass rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25"
            >
              <div className="mb-10 flex items-center justify-between gap-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ring-1 ${item.tone}`}
                >
                  {item.status}
                </span>
                <span className="h-2 w-2 rounded-full bg-cyan-300/70" />
              </div>
              <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
              <p className="mt-4 min-h-14 text-sm leading-6 text-slate-400">
                {item.category}
              </p>
            </article>
          ))}
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
          eyebrow="How we work"
          title="A simple execution process from idea to visibility."
        />

        <div className="glass rounded-[2rem] p-5 md:p-8">
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {process.map((step, index) => (
              <div
                key={step}
                className="relative rounded-3xl border border-white/10 bg-white/[0.035] p-5"
              >
                <span className="text-xs font-bold text-cyan-300/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {step}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {index === 0 &&
                    "Understand the business, product, market, and current visibility gap."}
                  {index === 1 &&
                    "Define scope, structure, messaging, tools, and the execution route."}
                  {index === 2 &&
                    "Create the platform, showroom, page, campaign setup, or support system."}
                  {index === 3 &&
                    "Release the work publicly with clean contact paths and clear presentation."}
                  {index === 4 &&
                    "Track activity, visibility signals, enquiries, and operational feedback."}
                  {index === 5 &&
                    "Improve the system based on evidence, client goals, and market response."}
                </p>
              </div>
            ))}
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
          copy="The site should make GIDTech feel disciplined: practical, truthful, measurable, and built for long-term conversations."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {principles.map((principle) => (
            <div
              key={principle}
              className="rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/[0.055] to-white/[0.02] p-6"
            >
              <div className="mb-8 h-px w-16 bg-gradient-to-r from-cyan-300 to-transparent" />
              <h3 className="text-lg font-semibold leading-7 text-white">
                {principle}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section id="contact" className="section-shell px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="premium-border relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 md:p-14">
          <div className="absolute inset-0 bg-premium-radial opacity-80" />
          <div className="absolute inset-0 bg-grid-pattern bg-[size:58px_58px] opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Contact
            </p>
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Ready to build stronger digital presence?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Work with GID Technologies on digital products, business
              visibility, online presence, or practical technology solutions.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <PrimaryButton href="mailto:gidtech8@gmail.com?subject=Start%20a%20Project%20with%20GID%20Technologies">
                Start a Project
              </PrimaryButton>
              <SecondaryButton href="mailto:gidtech8@gmail.com?subject=Request%20a%20Visibility%20Proposal">
                Request a Visibility Proposal
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="section-shell border-t border-white/10 px-5 py-12 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="text-xl font-semibold text-white">GID Technologies</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
            Digital products, business visibility, and practical technology
            solutions.
          </p>
        </div>

        <div className="grid gap-2 text-sm text-slate-400 md:text-right">
          <a
            href="mailto:gidtech8@gmail.com"
            className="text-cyan-200 hover:text-white"
          >
            gidtech8@gmail.com
          </a>
          <span>Lagos, Nigeria</span>
          <span>RC 9595315</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <div className="noise" />
      <Hero />
      <WhatWeDo />
      <StatBetProof />
      <GidAds />
      <Roadmap />
      <HowWeWork />
      <Principles />
      <ContactCTA />
    </main>
  );
}
