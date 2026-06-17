import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact GID Technologies for digital products, business visibility systems, online presence, and practical technology solutions.",
};

const projectTypes = [
  "Business visibility setup",
  "Digital showroom or landing page",
  "Company profile or business presentation",
  "Website planning or technology solution",
  "GidAds visibility proposal",
  "Partnership or business discussion",
];

const contactRoutes = [
  {
    title: "Email GID Technologies",
    text: "For project discussions, proposals, business visibility, and company enquiries.",
    href: "mailto:gidtech8@gmail.com",
    label: "gidtech8@gmail.com",
  },
  {
    title: "View StatBet",
    text: "Explore GIDTech’s live proof product before starting a business conversation.",
    href: "https://statbet.gidtechnologies.com/",
    label: "Visit StatBet",
  },
  {
    title: "Explore GidAds",
    text: "Learn how GIDTech supports business visibility, presentation, campaign planning, and enquiry flow.",
    href: "/gidads",
    label: "View Business Visibility Systems",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Link
          href="/"
          className="mb-10 inline-flex rounded-full border border-cyan-300/20 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-300/10"
        >
          ← Back to Home
        </Link>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Contact GID Technologies
            </p>

            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              Start a project, request a visibility proposal, or discuss a
              digital product.
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-300 md:text-xl">
              Work with GID Technologies on practical digital products, business
              visibility systems, online presence, business presentation, and
              technology solutions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:gidtech8@gmail.com?subject=Project%20Enquiry%20-%20GID%20Technologies"
                className="rounded-full bg-cyan-300 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                Email GID Technologies
              </a>
              <Link
                href="/gidads"
                className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
              >
                Request Visibility Support
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-6 shadow-2xl shadow-cyan-950/40">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Company contact
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <a
                    href="mailto:gidtech8@gmail.com"
                    className="mt-1 block font-semibold text-white hover:text-cyan-200"
                  >
                    gidtech8@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Base</p>
                  <p className="mt-1 font-semibold text-white">
                    Lagos, Nigeria
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Registration</p>
                  <p className="mt-1 font-semibold text-white">RC 9595315</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Focus</p>
                  <p className="mt-1 font-semibold text-white">
                    Digital products, business visibility, and practical
                    technology solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            What you can contact us for
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            Clear business conversations, scoped properly from the start.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projectTypes.map((type) => (
              <div
                key={type}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-slate-200"
              >
                {type}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {contactRoutes.map((route) => {
            const isExternal = route.href.startsWith("http");

            return (
              <div
                key={route.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h2 className="text-xl font-semibold text-white">
                  {route.title}
                </h2>
                <p className="mt-4 leading-7 text-slate-300">{route.text}</p>

                {isExternal || route.href.startsWith("mailto:") ? (
                  <a
                    href={route.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="mt-7 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    {route.label}
                  </a>
                ) : (
                  <Link
                    href={route.href}
                    className="mt-7 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    {route.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.06] p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Before execution
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            Serious work starts with clear scope, timeline, deliverables, and
            approved expenses.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-300">
            GID Technologies works best when expectations are clear from the
            beginning. Project scope, professional service fees, third-party
            costs, campaign budgets, revisions, and timelines should be agreed
            before execution.
          </p>

          <div className="mt-8">
            <a
              href="mailto:gidtech8@gmail.com?subject=Business%20Visibility%20Proposal%20Request"
              className="inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              Request a Proposal
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
