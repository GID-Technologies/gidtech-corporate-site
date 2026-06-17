import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "StatBet", href: "/statbet" },
  { label: "GidAds", href: "/gidads" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-12 text-slate-400 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-lg font-black text-cyan-200">
              G
            </div>

            <div>
              <p className="text-sm font-bold tracking-[0.2em] text-white">
                GIDTECH
              </p>
              <p className="text-xs text-slate-500">GID Technologies</p>
            </div>
          </div>

          <p className="mt-5 max-w-md leading-7">
            Digital products, business visibility systems, and practical
            technology solutions for modern businesses.
          </p>

          <p className="mt-5 text-sm text-slate-500">
            RC 9595315 · Lagos, Nigeria
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Explore
          </p>

          <div className="mt-5 grid gap-3">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm transition hover:text-cyan-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Contact
          </p>

          <a
            href="mailto:gidtech8@gmail.com"
            className="mt-5 block text-sm transition hover:text-cyan-200"
          >
            gidtech8@gmail.com
          </a>

          <p className="mt-4 text-sm leading-6">
            For business discussions, visibility proposals, digital products,
            and practical technology solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
