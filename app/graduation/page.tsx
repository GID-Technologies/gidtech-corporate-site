import Link from "next/link";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Eye,
  Handshake,
  Megaphone,
  Network,
  Rocket,
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
    title: "I Need a Business Solution",
    label: "Businesses & Organizations",
    description:
      "Discuss a business website, digital showroom, custom platform, automation workflow, maintenance need, or practical technology problem.",
    href: "/contact?service=consultation&source=aptech-graduation#contact-form",
    cta: "Discuss Your Business",
    icon: BriefcaseBusiness,
  },
  {
    title: "My Business Needs Visibility",
    label: "Business Visibility Systems",
    description:
      "Request support with business presentation, discoverability, enquiry flow, campaign planning, online presence, and practical visibility review.",
    href: "/contact?service=visibility-system&source=aptech-graduation#contact-form",
    cta: "Request a Visibility Review",
    icon: Megaphone,
  },
  {
    title: "I Want to Build With GID",
    label: "Builders & Contributors",
    description:
      "Introduce yourself as a developer, designer, product thinker, marketer, business connector, tester, or practical contributor.",
    href: "/contact?service=build-with-gid&source=aptech-graduation#contact-form",
    cta: "Introduce Yourself",
    icon: Code2,
  },
  {
    title: "I Want to Partner or Support",
    label: "Partners & Strategic Support",
    description:
      "Start a conversation around partnership, sponsorship, investment interest, institutional access, referrals, resources, or strategic guidance.",
    href: "/contact?service=partnership&source=aptech-graduation#contact-form",
    cta: "Start a Strategic Conversation",
    icon: Handshake,
  },
  {
    title: "I Want to Explore StatBet",
    label: "Live Product Proof",
    description:
      "See the football intelligence platform that demonstrates GID Technologies’ ability to build, launch, position, and monitor a real digital product.",
    href: "/statbet?source=aptech-graduation",
    cta: "Explore StatBet",
    icon: Eye,
  },
  {
    title: "I Want to Follow the GID Journey",
    label: "Early Users & Supporters",
    description:
      "Explore the company, understand the ecosystem, join future pilots, provide feedback, and stay connected to what GID Technologies builds next.",
    href: "/build-with-gid",
    cta: "Explore Build With GID",
    icon: Rocket,
  },
];

const reasonsToConnect = [
  {
    title: "Build",
    text: "Contribute technical, creative, commercial, product, or operational value.",
    icon: Code2,
  },
  {
    title: "Hire",
    text: "Discuss a practical business solution, visibility system, or digital product.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Partner",
    text: "Create strategic access, support, resources, referrals, or shared opportunities.",
    icon: Network,
  },
  {
    title: "Test",
    text: "Join early product use, pilots, feedback programmes, and validation activities.",
    icon: Users,
  },
];

export default function GraduationPage() {
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
          </div>
        </div>

        <section id="connection-paths" className="mt-24 scroll-mt-28">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
              Connection paths
            </p>

            <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              Select the conversation that makes sense for you.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-400 md:text-lg">
              Each path directs you to the most relevant GIDTech information or
              enquiry form.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {connectionPaths.map((path) => {
              const Icon = path.icon;

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
                    href={path.href}
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
            Submitting an enquiry does not automatically create employment,
            partnership, investment, sponsorship, project approval, payment, or
            acceptance. GID Technologies will review each serious introduction
            according to current priorities, capacity, fit, and mutual value.
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
