import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about GID Technologies, a practical technology company building digital products, business visibility systems, and future connection platforms.",
};

const principles = [
  "Practical execution over empty noise",
  "Trust-first business positioning",
  "Clear communication and honest scope",
  "Digital systems built around real needs",
  "Long-term ecosystem thinking",
];

const focusAreas = [
  {
    title: "Digital Products",
    text: "We build practical platforms and digital systems designed around real problems, clear user flows, and long-term growth.",
  },
  {
    title: "Business Visibility Systems",
    text: "We help businesses improve online presence, customer trust, enquiry flow, campaign visibility, and professional presentation.",
  },
  {
    title: "Technology Solutions",
    text: "We support companies with landing pages, digital showrooms, website planning, software direction, and business presentation tools.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Link
          href="/"
          className="mb-10 inline-flex rounded-full border border-cyan-300/20 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-300/10"
        >
          ← Back to Home
        </Link>

        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            About GID Technologies
          </p>

          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
            A practical technology company building digital systems with proof.
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-300 md:text-xl">
            GID Technologies builds practical digital products, business
            visibility systems, and technology solutions for modern businesses.
            Our work connects software, strategy, online presence, business
            presentation, and execution.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            The company exists to help businesses and communities become easier
            to find, easier to trust, and easier to contact through useful
            technology, clear positioning, and disciplined execution.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {focusAreas.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/20"
            >
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Proof-led approach
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
              We build before we sell.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              StatBet is GIDTech’s live proof product. It demonstrates that the
              company can move beyond ideas into a public digital platform with
              real positioning, a custom domain, visibility monitoring, and a
              clear product experience.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/statbet"
                className="rounded-full bg-cyan-300 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                View StatBet Case Study
              </Link>
              <Link
                href="/gidads"
                className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
              >
                Explore GidAds
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Operating principles
            </p>

            <ul className="mt-6 space-y-4">
              {principles.map((principle) => (
                <li
                  key={principle}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4 text-slate-200"
                >
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.06] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Company details
          </p>

          <div className="mt-6 grid gap-5 text-slate-300 md:grid-cols-3">
            <div>
              <p className="text-sm text-slate-500">Company</p>
              <p className="mt-1 font-semibold text-white">GID Technologies</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Registration</p>
              <p className="mt-1 font-semibold text-white">RC 9595315</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Base</p>
              <p className="mt-1 font-semibold text-white">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
