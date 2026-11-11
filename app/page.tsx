import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/components/Logo";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-[#EEF1F7] font-['Plus_Jakarta_Sans'] relative overflow-x-hidden selection:bg-[#FF6A28] selection:text-white z-10">
      {/* Background Glow */}
      <div className="absolute top-[-260px] left-1/2 w-[1100px] h-[800px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(255,106,40,0.22),rgba(77,140,255,0.1)_55%,rgba(5,7,13,0)_100%)] pointer-events-none animate-pulse duration-[4000ms]" />

      {/* Navbar */}
      <header className="relative pt-5 px-6 z-50">
        <div className="max-w-[1200px] mx-auto px-5 py-2.5 flex items-center justify-between bg-[rgba(14,18,28,0.7)] border border-white/10 rounded-full backdrop-blur-md shadow-2xl">
          <Logo />

          <nav className="hidden md:flex gap-1 text-sm font-medium">
            <Link
              href="/"
              className="text-white bg-white/10 px-4 py-2 rounded-full transition-all"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="text-[#C3CAD8] hover:text-white hover:bg-white/5 px-4 py-2 rounded-full transition-all"
            >
              Dashboard
            </Link>
            <Link
              href="/chat"
              className="text-[#C3CAD8] hover:text-white hover:bg-white/5 px-4 py-2 rounded-full transition-all"
            >
              AI Chat
            </Link>
            <Link
              href="/guidelines"
              className="text-[#C3CAD8] hover:text-white hover:bg-white/5 px-4 py-2 rounded-full transition-all"
            >
              Guidelines
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden sm:inline-block text-[#EEF1F7] hover:text-white font-semibold text-sm px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-all"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="text-white font-semibold text-sm px-4.5 py-2 rounded-full bg-gradient-to-r from-[#FF8A3D] to-[#FF5A1F] hover:brightness-110 shadow-lg shadow-orange-500/25 transition-all"
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-white w-[calc(100%-3rem)] mx-auto mt-6 md:mt-8 rounded-[32px] border border-white/10 flex items-center overflow-hidden z-10">
        {/* Background Photo */}
        <Image
          src="/hero-flame.jpg"
          alt="NASA Microgravity Cosmic Flame Combustion"
          fill
          priority
          className="object-cover object-center -z-20"
        />

        {/* Dark overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A13]/95 via-[#070A13]/70 to-[#070A13]/20 -z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070A13] via-transparent to-[#070A13]/40 -z-10" />

        {/* Content */}
        <div className="relative max-w-[1240px] w-full mx-auto px-6 pt-6 pb-8 md:pt-8 md:pb-10 z-10">
          <div className="max-w-[640px] flex flex-col items-start text-left gap-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-[#C3CAD8] backdrop-blur-md shadow-inner">
              <span className="bg-gradient-to-r from-[#FF8A3D] to-[#FF5A1F] text-white font-bold text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                NEW
              </span>
              <span>AI insights from 60 years of NASA combustion research</span>
            </div>

            <h1 className="m-0 font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-tight">
              Without gravity, fire plays by{" "}
              <span className="bg-gradient-to-r from-[#FFB067] via-[#FF5A1F] to-[#7DB8FF] bg-clip-text text-transparent">
                different rules.
              </span>
            </h1>

            <p className="m-0 text-base sm:text-lg text-[#C3CAD8] leading-relaxed max-w-[540px]">
              Explore NASA&apos;s microgravity fire experiments, ask an AI that
              cites its sources, and get fire-safety guidelines for crews
              heading to the Moon and Mars.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/dashboard"
                className="group bg-gradient-to-r from-[#FF8A3D] to-[#FF5A1F] hover:brightness-110 text-white font-semibold px-7 py-3.5 rounded-full shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
              >
                <span>Explore the dashboard</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>

              <Link
                href="/chat"
                className="text-white font-semibold px-7 py-3.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 active:scale-95 transition-all flex items-center gap-2 backdrop-blur-sm shadow-md"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
                </svg>
                <span>Ask the AI</span>
              </Link>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-[#8E98AB]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A2E]" />
                <span className="font-medium text-white/90">
                  60+ Years
                </span>{" "}
                NASA Archives
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7DB8FF]" />
                <span className="font-medium text-white/90">
                  7 Campaigns
                </span>{" "}
                ISS & Cygnus
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC97]" />
                <span className="font-medium text-white/90">
                  100% Citable
                </span>{" "}
                Ground Truth
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Data Sources Bar */}
      <section className="border-t border-b border-white/5 bg-white/[0.015] my-12">
        <div className="max-w-[1200px] mx-auto py-7 px-6 flex flex-wrap items-center justify-center gap-6 md:gap-14 text-[#8E98AB] font-['Space_Grotesk'] font-semibold text-base">
          <span className="font-['Plus_Jakarta_Sans'] font-medium text-xs text-[#6F7A8F] tracking-widest">
            DATA FROM
          </span>
          <span className="hover:text-white transition-colors">
            International Space Station
          </span>
          <span className="hover:text-white transition-colors">
            Cygnus Vehicles
          </span>
          <span className="hover:text-white transition-colors">
            NASA Glenn Drop Towers
          </span>
          <span className="hover:text-white transition-colors">
            NASA PSI Archive
          </span>
        </div>
      </section>

      {/* THE SCIENCE SECTION */}
      <section className="relative max-w-[1200px] mx-auto py-16 px-6 flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-3.5">
          <div className="text-xs font-bold text-[#FF8A4C] tracking-widest uppercase">
            THE SCIENCE
          </div>
          <h2 className="m-0 font-['Space_Grotesk'] font-bold text-4xl md:text-6xl text-white tracking-tight">
            What changes when fire floats
          </h2>
          <p className="m-0 text-[#A9B2C3] text-lg max-w-[620px]">
            Four behaviors every spacecraft designer and crew member should
            understand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="group bg-gradient-to-b from-white/[0.05] to-white/[0.015] border border-white/10 hover:border-[#FF8A4C]/50 rounded-3xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1">
            <span className="w-12 h-12 rounded-2xl bg-[#7DB8FF]/15 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7DB8FF"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </span>
            <h3 className="m-0 font-['Space_Grotesk'] text-2xl font-semibold text-white">
              Spheres, not teardrops
            </h3>
            <p className="m-0 text-[#A9B2C3] text-sm leading-relaxed">
              No buoyancy means hot gas doesn&apos;t rise. Oxygen arrives only
              by slow diffusion, so flames round out into spheres.
            </p>
          </div>

          <div className="group bg-gradient-to-b from-white/[0.05] to-white/[0.015] border border-white/10 hover:border-[#FF8A4C]/50 rounded-3xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1">
            <span className="w-12 h-12 rounded-2xl bg-[#B9A5FF]/15 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#B9A5FF"
                strokeWidth="1.8"
              >
                <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </span>
            <h3 className="m-0 font-['Space_Grotesk'] text-2xl font-semibold text-white">
              Dimmer and bluer
            </h3>
            <p className="m-0 text-[#A9B2C3] text-sm leading-relaxed">
              Less glowing soot means many flames burn a faint blue — harder for
              crews and cameras to spot.
            </p>
          </div>

          <div className="group bg-gradient-to-b from-white/[0.05] to-white/[0.015] border border-white/10 hover:border-[#FF8A4C]/50 rounded-3xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1">
            <span className="w-12 h-12 rounded-2xl bg-[#5FE3AA]/15 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5FE3AA"
                strokeWidth="1.8"
              >
                <path d="M3 8h11a3 3 0 1 0-3-3" />
                <path d="M3 12h16a3 3 0 1 1-3 3" />
                <path d="M3 16h7" />
              </svg>
            </span>
            <h3 className="m-0 font-['Space_Grotesk'] text-2xl font-semibold text-white">
              Airflow decides
            </h3>
            <p className="m-0 text-[#A9B2C3] text-sm leading-relaxed">
              In still air a flame can starve itself. A gentle breeze — like
              cabin ventilation — keeps it alive and spreading.
            </p>
          </div>

          <div className="group bg-gradient-to-b from-white/[0.05] to-white/[0.015] border border-white/10 hover:border-[#FF8A4C]/50 rounded-3xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1">
            <span className="w-12 h-12 rounded-2xl bg-[#FF8A4C]/15 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF8A4C"
                strokeWidth="1.8"
              >
                <path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-4-1-6 1-9z" />
              </svg>
            </span>
            <h3 className="m-0 font-['Space_Grotesk'] text-2xl font-semibold text-white">
              Invisible cool flames
            </h3>
            <p className="m-0 text-[#A9B2C3] text-sm leading-relaxed">
              On the ISS, FLEX saw heptane droplets keep reacting at low
              temperature after the visible flame went out.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="relative max-w-[1200px] mx-auto py-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-5 text-left">
            <div className="text-xs font-bold text-[#FF8A4C] tracking-widest uppercase">
              HOW IT WORKS
            </div>
            <h2 className="m-0 font-['Space_Grotesk'] font-bold text-4xl md:text-5xl text-white leading-tight">
              From scattered reports to clear decisions
            </h2>
            <p className="m-0 text-[#A9B2C3] text-lg leading-relaxed">
              Decades of results live in papers, technical reports and raw
              datasets. Flame in Freefall connects them into one place you can
              search, compare and act on.
            </p>
            <div className="pt-2">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-all"
              >
                See the data
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-5 items-start p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
              <span className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF8A3D] to-[#FF5A1F] flex items-center justify-center font-['Space_Grotesk'] font-bold text-lg text-white flex-none">
                1
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-xl text-white m-0">Ingest</h3>
                <p className="m-0 text-[#A9B2C3] text-sm leading-relaxed">
                  Experiment datasets and reports from NASA PSI and the
                  Technical Reports Server are parsed into one catalog.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
              <span className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7DB8FF] to-[#3D7BFF] flex items-center justify-center font-['Space_Grotesk'] font-bold text-lg text-white flex-none">
                2
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-xl text-white m-0">
                  Understand with AI
                </h3>
                <p className="m-0 text-[#A9B2C3] text-sm leading-relaxed">
                  A retrieval-backed LLM summarizes each campaign and compares
                  fuel, airflow, oxygen and pressure — with citations.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
              <span className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5FE3AA] to-[#22A971] flex items-center justify-center font-['Space_Grotesk'] font-bold text-lg text-[#04140C] flex-none">
                3
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-xl text-white m-0">Act safely</h3>
                <p className="m-0 text-[#A9B2C3] text-sm leading-relaxed">
                  Findings become prevention, detection, suppression and
                  habitat-design guidelines linked to their evidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOW SECTION */}
      <section className="relative max-w-[1200px] mx-auto py-12 px-6">
        <div className="rounded-[32px] border border-white/10 bg-[radial-gradient(ellipse_at_0%_0%,rgba(255,106,40,0.16),transparent_55%),radial-gradient(ellipse_at_100%_100%,rgba(77,163,255,0.16),transparent_55%),#0A0E18] p-8 md:p-14 flex flex-col gap-10 shadow-2xl">
          <div className="flex flex-col gap-3.5 max-w-[720px] text-left">
            <div className="text-xs font-bold text-[#7DB8FF] tracking-widest uppercase">
              WHY NOW
            </div>
            <h2 className="m-0 font-['Space_Grotesk'] font-bold text-3xl md:text-5xl text-white leading-tight">
              Artemis brings new air, new gravity, new fire risk.
            </h2>
            <p className="m-0 text-[#A9B2C3] text-base leading-relaxed">
              NASA&apos;s proposed exploration atmosphere lowers pressure and
              raises oxygen to shorten spacewalk prep. Both make materials burn
              more readily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex flex-col gap-2 pt-5 border-t border-white/10">
              <div className="font-['Space_Grotesk'] font-bold text-5xl md:text-6xl bg-gradient-to-r from-[#FFB067] to-[#FF5A1F] bg-clip-text text-transparent">
                34%
              </div>
              <div className="text-[#A9B2C3] text-sm">
                Oxygen in the exploration atmosphere, vs. 21% on the ISS
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-5 border-t border-white/10">
              <div className="font-['Space_Grotesk'] font-bold text-5xl md:text-6xl bg-gradient-to-r from-[#FFB067] to-[#7DB8FF] bg-clip-text text-transparent">
                8.2 psia
              </div>
              <div className="text-[#A9B2C3] text-sm">
                Cabin pressure (56.5 kPa), vs. 14.7 psia at sea level
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-5 border-t border-white/10">
              <div className="font-['Space_Grotesk'] font-bold text-5xl md:text-6xl bg-gradient-to-r from-[#FF5A1F] to-[#7DB8FF] bg-clip-text text-transparent">
                0.16 g
              </div>
              <div className="text-[#A9B2C3] text-sm">
                Lunar gravity — weak buoyancy can make some materials more
                flammable than in 1 g
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVERYTHING IN ONE PLATFORM SECTION */}
      <section className="relative max-w-[1200px] mx-auto py-16 px-6 flex flex-col gap-10">
        <div className="text-center">
          <h2 className="m-0 font-['Space_Grotesk'] font-bold text-3xl md:text-5xl text-white tracking-tight">
            Everything in one platform
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Dashboard */}
          <Link
            href="/dashboard"
            className="group rounded-3xl border border-white/10 bg-white/[0.03] hover:border-white/20 p-7 flex flex-col gap-4 no-underline transition-all hover:-translate-y-1.5"
          >
            <div className="h-[150px] rounded-2xl bg-[#0B1020] border border-white/5 p-4 flex items-end gap-2.5 overflow-hidden">
              <span className="flex-1 h-[40%] rounded-md bg-[#FF7A2E]" />
              <span className="flex-1 h-[70%] rounded-md bg-[#FFB067]" />
              <span className="flex-1 h-[55%] rounded-md bg-[#7DB8FF]" />
              <span className="flex-1 h-[90%] rounded-md bg-[#FF5A1F]" />
              <span className="flex-1 h-[65%] rounded-md bg-[#3D7BFF]" />
            </div>
            <div className="font-['Space_Grotesk'] font-semibold text-2xl text-white flex items-center gap-2 group-hover:text-[#FF8A4C] transition-colors">
              Dashboard &rarr;
            </div>
            <p className="m-0 text-[#A9B2C3] text-sm leading-relaxed">
              Filter every campaign by fuel, platform and year, with AI
              summaries.
            </p>
          </Link>

          {/* Card 2: AI Chat */}
          <Link
            href="/chat"
            className="group rounded-3xl border border-white/10 bg-white/[0.03] hover:border-white/20 p-7 flex flex-col gap-4 no-underline transition-all hover:-translate-y-1.5"
          >
            <div className="h-[150px] rounded-2xl bg-[#0B1020] border border-white/5 p-4 flex flex-col justify-center gap-2.5 overflow-hidden">
              <span className="self-end bg-[#FF6A28] rounded-2xl rounded-br-xs px-3 py-2 text-xs text-white">
                Why are µg flames blue?
              </span>
              <span className="self-start bg-white/10 rounded-2xl rounded-bl-xs px-3 py-2 text-xs text-[#C3CAD8]">
                Less soot forms, so less glow...
              </span>
            </div>
            <div className="font-['Space_Grotesk'] font-semibold text-2xl text-white flex items-center gap-2 group-hover:text-[#FF8A4C] transition-colors">
              AI Chat &rarr;
            </div>
            <p className="m-0 text-[#A9B2C3] text-sm leading-relaxed">
              Ask in plain language. Every answer cites the experiments behind
              it.
            </p>
          </Link>

          {/* Card 3: Safety Guidelines */}
          <Link
            href="/guidelines"
            className="group rounded-3xl border border-white/10 bg-white/[0.03] hover:border-white/20 p-7 flex flex-col gap-4 no-underline transition-all hover:-translate-y-1.5"
          >
            <div className="h-[150px] rounded-2xl bg-[#0B1020] border border-white/5 p-4 flex flex-col justify-center gap-2.5 text-xs text-[#C3CAD8]">
              <span className="flex gap-2 items-center">
                <span className="w-4 h-4 rounded bg-[#22A971]" />
                Shut off ventilation first
              </span>
              <span className="flex gap-2 items-center">
                <span className="w-4 h-4 rounded bg-[#22A971]" />
                Isolate rack power
              </span>
              <span className="flex gap-2 items-center">
                <span className="w-4 h-4 rounded border border-[#4A5468]" />
                Watch for re-ignition
              </span>
            </div>
            <div className="font-['Space_Grotesk'] font-semibold text-2xl text-white flex items-center gap-2 group-hover:text-[#FF8A4C] transition-colors">
              Safety Guidelines &rarr;
            </div>
            <p className="m-0 text-[#A9B2C3] text-sm leading-relaxed">
              Evidence-backed rules for prevention, detection and suppression.
            </p>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10 mt-16 bg-[rgba(14,18,28,0.7)]">
        <div className="max-w-[1200px] mx-auto py-12 px-6 flex flex-wrap gap-8 justify-between text-[#8E98AB] text-sm">
          <div className="flex flex-col gap-2 max-w-[420px] text-left">
            <div className="text-white font-['Space_Grotesk'] font-bold text-lg">
              PyroNova
            </div>
            <div>
              Built for the NASA Space Apps Challenge. Not an official NASA
              product.
            </div>
          </div>
          <div className="flex flex-col gap-2 text-left">
            <div className="text-white font-semibold">Data sources</div>
            <a
              href="https://psi.nasa.gov"
              target="_blank"
              rel="noreferrer"
              className="text-[#FF6A28] hover:text-white transition-colors"
            >
              NASA Physical Sciences Informatics
            </a>
            <a
              href="https://ntrs.nasa.gov"
              target="_blank"
              rel="noreferrer"
              className="text-[#FF6A28] hover:text-white transition-colors"
            >
              NASA Technical Reports Server
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
