import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Briefcase,
  Building2,
  ExternalLink,
  FileText,
  Globe2,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  Monitor,
  ShieldCheck,
} from "lucide-react";
import { Suspense } from "react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact GID Technologies for digital products, business visibility systems, online presence, and practical technology solutions.",
};

const projectTypes = [
  {
    title: "Business visibility setup",
    icon: Megaphone,
  },
  {
    title: "Digital showroom or landing page",
    icon: Monitor,
  },
  {
    title: "Company profile or business presentation",
    icon: FileText,
  },
  {
    title: "Website planning or technology solution",
    icon: Globe2,
  },
  {
    title: "Business visibility review",
    icon: Briefcase,
  },
  {
    title: "Partnership or business discussion",
    icon: MessageCircle,
  },
];

const contactRoutes = [
  {
    title: "Email GID Technologies",
    text: "For project discussions, proposals, business visibility, and company enquiries.",
    href: "mailto:gidtech8@gmail.com",
    label: "gidtech8@gmail.com",
    icon: Mail,
  },
  {
    title: "View StatBet",
    text: "Explore GIDTech’s live proof product before starting a business conversation.",
    href: "https://statbet.gidtechnologies.com/",
    label: "Visit StatBet",
    icon: ExternalLink,
  },
  {
    title: "Explore Business Visibility Systems",
    text: "See how GID Technologies supports business presentation, discoverability, enquiry flow, campaign planning, and visibility improvement.",
    href: "/solutions#visibility-systems",
    label: "View Visibility Solutions",
    icon: Megaphone,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="section-shell mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
        <Link
          href="/"
          className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.08] hover:text-white"
        >
          ← Back to Home
        </Link>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
              Contact GID Technologies
            </p>

            <h1 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              Start a project, request a visibility proposal, or discuss a
              digital product.
            </h1>

            <p className="mt-8 text-lg leading-8 text-neutral-400 md:text-xl">
              Work with GID Technologies on practical digital products, business
              visibility systems, online presence, business presentation, and
              technology solutions.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Start Your Enquiry
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/solutions#visibility-systems"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Request Visibility Support
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="premium-border overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-5">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/70 p-6">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <Building2 className="h-6 w-6 text-white" />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                Company contact
              </p>

              <div className="mt-6 space-y-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <p className="text-sm text-neutral-500">Email</p>
                  <a
                    href="mailto:gidtech8@gmail.com"
                    className="mt-1 block break-all font-semibold text-white hover:text-neutral-200"
                  >
                    gidtech8@gmail.com
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <p className="text-sm text-neutral-500">Base</p>
                  <p className="mt-1 font-semibold text-white">
                    Lagos, Nigeria
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <p className="text-sm text-neutral-500">Registration</p>
                  <p className="mt-1 font-semibold text-white">RC 9595315</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <p className="text-sm text-neutral-500">Focus</p>
                  <p className="mt-1 font-semibold text-white">
                    Digital products, business visibility, and practical
                    technology solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="contact-form" className="mt-20 scroll-mt-28">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Tell us what you need
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              Start with the problem, opportunity, or outcome.
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-400">
              Select the solution, visibility service, partnership path, or
              Build With GID opportunity that best describes your reason for
              contacting us.
            </p>
          </div>

          <Suspense
            fallback={
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 text-neutral-400">
                Loading enquiry form…
              </div>
            }
          >
            <ContactForm />
          </Suspense>
        </section>

        <div className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            What you can contact us for
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
            Clear business conversations, scoped properly from the start.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projectTypes.map((type) => {
              const Icon = type.icon;

              return (
                <div
                  key={type.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-5 text-neutral-300"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                      <Icon className="h-4 w-4 text-white" />
                    </span>
                    <span>{type.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {contactRoutes.map((route) => {
            const isExternal = route.href.startsWith("http");
            const Icon = route.icon;

            return (
              <div
                key={route.title}
                className="glass rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/25"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <Icon className="h-5 w-5 text-white" />
                </div>

                <h2 className="text-xl font-semibold text-white">
                  {route.title}
                </h2>

                <p className="mt-4 leading-7 text-neutral-400">{route.text}</p>

                {isExternal || route.href.startsWith("mailto:") ? (
                  <a
                    href={route.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                  >
                    {route.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    href={route.href}
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                  >
                    {route.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
          <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>

          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Before execution
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-center text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
            Serious work starts with clear scope, timeline, deliverables, and
            approved expenses.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center leading-8 text-neutral-400">
            GID Technologies works best when expectations are clear from the
            beginning. Project scope, professional service fees, third-party
            costs, campaign budgets, revisions, and timelines should be agreed
            before execution.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Start Your Enquiry
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
