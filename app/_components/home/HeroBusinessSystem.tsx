export default function HeroBusinessSystem() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* deep ambient fields */}
      <div className="absolute right-[-8%] top-[5%] h-[760px] w-[760px] rounded-full bg-white/[0.035] blur-[130px]" />

      <div className="absolute bottom-[-30%] left-[25%] h-[520px] w-[900px] rounded-full bg-white/[0.018] blur-[140px]" />

      {/* technical grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:58px_58px] opacity-[0.18] [mask-image:radial-gradient(ellipse_at_72%_45%,black,transparent_72%)]" />

      {/* huge background typography */}
      <div className="absolute right-[4%] top-[18%] hidden select-none lg:block">
        <p className="text-[clamp(7rem,13vw,13rem)] font-semibold leading-none tracking-[-0.08em] text-white/[0.018]">
          GID
        </p>

        <p className="-mt-5 text-right text-[10px] font-semibold uppercase tracking-[0.55em] text-white/[0.12]">
          connected systems
        </p>
      </div>

      {/* main infrastructure */}
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="gid-route" x1="650" y1="0" x2="1500" y2="900">
            <stop stopColor="white" stopOpacity="0.02" />
            <stop offset="0.48" stopColor="white" stopOpacity="0.24" />
            <stop offset="1" stopColor="white" stopOpacity="0.025" />
          </linearGradient>

          <radialGradient id="gid-core">
            <stop stopColor="white" stopOpacity="0.16" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* outer routes */}
        <path
          d="M790 90 H1050 Q1090 90 1090 130 V280"
          stroke="url(#gid-route)"
        />

        <path
          d="M1580 190 H1370 Q1330 190 1330 230 V330"
          stroke="url(#gid-route)"
        />

        <path
          d="M900 770 H1090 Q1130 770 1130 730 V610"
          stroke="url(#gid-route)"
        />

        <path
          d="M1560 710 H1370 Q1325 710 1325 670 V570"
          stroke="url(#gid-route)"
        />

        <path d="M690 450 H920" stroke="white" strokeOpacity="0.08" />

        <path d="M1420 450 H1600" stroke="white" strokeOpacity="0.08" />

        {/* secondary circuitry */}
        <path
          d="M860 155 H970 V205 H1030"
          stroke="white"
          strokeOpacity="0.055"
        />

        <path
          d="M1465 275 H1390 V310 H1350"
          stroke="white"
          strokeOpacity="0.055"
        />

        <path
          d="M930 690 H1010 V650 H1065"
          stroke="white"
          strokeOpacity="0.055"
        />

        <path
          d="M1480 615 H1400 V650 H1350"
          stroke="white"
          strokeOpacity="0.055"
        />

        {/* central cross infrastructure */}
        <path d="M1115 260 V640" stroke="white" strokeOpacity="0.07" />

        <path d="M920 450 H1420" stroke="white" strokeOpacity="0.07" />

        {/* oversized core glow */}
        <circle cx="1190" cy="450" r="220" fill="url(#gid-core)" />

        {/* connection nodes */}
        {[
          [790, 90],
          [1090, 280],
          [1580, 190],
          [1330, 330],
          [900, 770],
          [1130, 610],
          [1560, 710],
          [1325, 570],
          [920, 450],
          [1420, 450],
        ].map(([cx, cy]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="3"
            fill="#050505"
            stroke="white"
            strokeOpacity="0.25"
          />
        ))}

        {/* signal points */}
        <circle
          cx="1090"
          cy="280"
          r="4"
          fill="white"
          fillOpacity="0.8"
          className="animate-pulse"
        />

        <circle
          cx="1325"
          cy="570"
          r="4"
          fill="white"
          fillOpacity="0.6"
          className="animate-pulse"
        />
      </svg>

      {/* main system core */}
      <div className="absolute right-[12%] top-1/2 hidden h-[330px] w-[330px] -translate-y-1/2 lg:block">
        {/* rings */}
        <div className="absolute inset-0 rounded-full border border-white/[0.055]" />

        <div className="absolute inset-[38px] rounded-full border border-white/[0.08]" />

        <div className="absolute inset-[82px] rounded-full border border-white/[0.13]" />

        {/* crosshair */}
        <div className="absolute left-1/2 top-[-35px] h-[400px] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.09] to-transparent" />

        <div className="absolute left-[-35px] top-1/2 h-px w-[400px] -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.09] to-transparent" />

        {/* orbit nodes */}
        <span className="absolute left-[37px] top-[42px] h-2 w-2 rounded-full border border-white/30 bg-black shadow-[0_0_20px_rgba(255,255,255,0.2)]" />

        <span className="absolute right-[12px] top-[143px] h-2 w-2 rounded-full border border-white/30 bg-black" />

        <span className="absolute bottom-[24px] left-[112px] h-2 w-2 rounded-full border border-white/30 bg-black" />

        {/* core */}
        <div className="absolute inset-[105px] flex flex-col items-center justify-center rounded-[1.6rem] border border-white/20 bg-black/90 shadow-[0_30px_100px_rgba(0,0,0,0.95),0_0_70px_rgba(255,255,255,0.035)] backdrop-blur-xl">
          <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
            system
          </span>

          <span className="mt-2 text-3xl font-semibold tracking-[-0.06em] text-white">
            GID
          </span>
        </div>

        {/* system labels */}
        <div className="absolute left-[-85px] top-[52px]">
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Presence
          </p>

          <p className="mt-1 text-[9px] text-neutral-700">
            Find · Trust · Contact
          </p>
        </div>

        <div className="absolute right-[-105px] top-[135px]">
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Operations
          </p>

          <p className="mt-1 text-[9px] text-neutral-700">Connect · Organise</p>
        </div>

        <div className="absolute bottom-[10px] right-[-70px]">
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Automation
          </p>

          <p className="mt-1 text-[9px] text-neutral-700">Move work faster</p>
        </div>

        <div className="absolute bottom-[28px] left-[-105px]">
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Intelligence
          </p>

          <p className="mt-1 text-[9px] text-neutral-700">
            Understand · Decide
          </p>
        </div>
      </div>

      {/* infrastructure annotations */}
      <div className="absolute right-[37%] top-[19%] hidden lg:block">
        <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-white/[0.18]">
          Customers
        </p>
      </div>

      <div className="absolute right-[7%] top-[30%] hidden lg:block">
        <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-white/[0.16]">
          Orders
        </p>
      </div>

      <div className="absolute bottom-[16%] right-[30%] hidden lg:block">
        <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-white/[0.16]">
          Inventory
        </p>
      </div>

      <div className="absolute bottom-[20%] right-[5%] hidden lg:block">
        <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-white/[0.16]">
          Business signals
        </p>
      </div>

      {/* mobile atmospheric system */}
      <div className="absolute bottom-[-80px] left-1/2 h-[430px] w-[430px] -translate-x-1/2 lg:hidden">
        <div className="absolute inset-0 rounded-full border border-white/[0.05]" />
        <div className="absolute inset-[55px] rounded-full border border-white/[0.07]" />
        <div className="absolute inset-[115px] rounded-full border border-white/[0.1]" />

        <div className="absolute inset-[170px] flex items-center justify-center rounded-2xl border border-white/15 bg-black/90 text-lg font-semibold text-white">
          GID
        </div>
      </div>

      {/* readability layers */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.96)_27%,rgba(0,0,0,0.68)_49%,rgba(0,0,0,0.12)_75%,rgba(0,0,0,0.3)_100%)]" />

      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/70 to-transparent" />

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
    </div>
  );
}
