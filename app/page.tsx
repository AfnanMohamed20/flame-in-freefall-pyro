'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "@/app/components/Logo";

export default function Home() {
  const [activeGravityTab, setActiveGravityTab] = useState<'micro' | 'earth'>('micro');

  return (
    <div className="min-h-screen bg-transparent text-[#EEF1F7] font-['Plus_Jakarta_Sans'] relative overflow-x-hidden selection:bg-[#FF6A28] selection:text-white z-10">
      {/* Ambient Cosmic Background Glows */}
      <div className="absolute top-[-260px] left-1/2 w-[1200px] h-[850px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(255,106,40,0.22),rgba(77,140,255,0.12)_55%,rgba(5,7,13,0)_100%)] pointer-events-none animate-pulse duration-[4000ms]" />
      <div className="absolute top-[1400px] right-[-200px] w-[800px] h-[800px] bg-[radial-gradient(closest-side,rgba(125,184,255,0.08),rgba(5,7,13,0)_100%)] pointer-events-none" />
      <div className="absolute top-[2800px] left-[-200px] w-[900px] h-[900px] bg-[radial-gradient(closest-side,rgba(255,106,40,0.07),rgba(5,7,13,0)_100%)] pointer-events-none" />

      {/* Top Ambient Darkness Vignette */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#030509]/95 via-[#030509]/60 to-transparent pointer-events-none z-40" />

      {/* SpaceX-Inspired Hero & Seamless Navbar Container */}
      <div className="relative w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] max-w-[1440px] mx-auto mt-3 sm:mt-5 rounded-[26px] md:rounded-[36px] border border-white/10 bg-[#060913]/90 backdrop-blur-md overflow-hidden min-h-[600px] md:min-h-[720px] flex flex-col justify-between shadow-[0_25px_80px_rgba(0,0,0,0.85)] z-20">
        
        {/* Professional Top Darkness Gradient - Concentrated on Navbar & Left while keeping Astronaut Helmet visible */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#030509]/80 via-[#030509]/30 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 left-0 w-3/4 md:w-1/2 h-44 bg-gradient-to-br from-[#030509]/95 via-[#030509]/60 to-transparent pointer-events-none z-10" />

        {/* Astronaut Photo Shifted to the Right Side with Helmet Clearly Visible & Transparent Left Fade */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-full sm:w-[80%] md:w-[70%] lg:w-[65%] xl:w-[60%] h-full z-0 overflow-hidden pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 15%, rgba(0,0,0,0.8) 35%, black 60%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 15%, rgba(0,0,0,0.8) 35%, black 60%)'
          }}
        >
          <Image
            src="/hero-astronaut.jpg"
            alt="Astronaut engulfed in cosmic microgravity flames"
            fill
            priority
            className="object-cover object-[82%_20%] sm:object-[84%_18%] md:object-[86%_16%] lg:object-[88%_15%]"
          />

          {/* Soft gradients to blend photo edges while preserving the glowing helmet */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030509]/20 via-transparent to-[#060913]/75 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060913] via-transparent/20 to-transparent pointer-events-none" />
        </div>

        {/* Ambient Dark/Starfield overlay on the Left where text resides */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060913] via-[#060913]/85 md:via-[#060913]/30 to-transparent pointer-events-none z-[1]" />

        {/* Top Seamless Navbar */}
        <header className="relative z-30 w-full px-5 sm:px-8 lg:px-12 pt-6 pb-4 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Center: Nav links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
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

          {/* Right: Log in & Sign up buttons */}
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
        </header>

        {/* Hero Main Content (Center-Left) */}
        <div className="relative z-20 w-full px-6 sm:px-10 lg:px-14 py-10 md:py-16 my-auto">
          <div className="max-w-[620px] flex flex-col items-start text-left gap-6">
            
            {/* Title in pure white color */}
            <h1 className="m-0 font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl lg:text-[4.15rem] leading-[1.08] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              Without gravity, fire plays by different rules.
            </h1>

            {/* Subtext in white color */}
            <p className="m-0 text-sm sm:text-base text-white leading-relaxed max-w-[540px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Explore NASA&apos;s microgravity fire experiments, ask an AI that cites
              its sources, and get fire-safety guidelines for crews heading to the
              Moon and Mars.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/dashboard"
                className="border border-white/60 text-white text-xs font-semibold tracking-[0.22em] uppercase px-8 py-3.5 hover:bg-white hover:text-black transition-all backdrop-blur-sm shadow-lg shadow-black/40"
              >
                EXPLORE DASHBOARD
              </Link>

              <Link
                href="/chat"
                className="text-xs font-semibold tracking-[0.2em] uppercase text-white hover:text-[#FF8A3D] px-3 py-3.5 flex items-center gap-2 transition-colors"
              >
                <span>ASK THE AI</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Telemetry & Pagination Bar (matching the SpaceX mockup) */}
        <div className="relative z-20 w-full px-6 sm:px-10 lg:px-14 pb-7 pt-4 flex items-center justify-between text-xs text-white/60 border-t border-white/5">
          {/* Left: Pagination dots and index */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
              <span className="w-2 h-2 rounded-full border border-white/40" />
              <span className="w-2 h-2 rounded-full border border-white/40" />
            </div>
            <span className="font-mono text-xs tracking-[0.2em] text-white/85 font-medium">
              01 / 03
            </span>
          </div>

          {/* Right: Telemetry label without social icons */}
          <div className="font-mono text-[11px] tracking-[0.22em] text-white/40 uppercase">
            FLIGHT DATA ARCHIVE // 0-G
          </div>
        </div>

      </div>

      {/* DATA SOURCES & FLIGHT PROVENANCE BAR */}
      <section className="relative w-[calc(100%-3rem)] mx-auto my-12 py-5 px-6 rounded-2xl bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-white/[0.04] border border-white/10 backdrop-blur-md">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs tracking-widest font-mono text-[#FF9E66] uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#FF7A2E] animate-ping" />
            Verified Flight Research Archives
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-[#C3CAD8]">
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#7DB8FF]/40 hover:text-white transition-all">
              ISS · CIR Rack
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#FF8A4C]/40 hover:text-white transition-all">
              Cygnus Saffire Missions
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#5FE3AA]/40 hover:text-white transition-all">
              NASA Glenn Drop Towers
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#B9A5FF]/40 hover:text-white transition-all">
              NASA PSI Archive
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-white/40 hover:text-white transition-all">
              NASA NTRS Reports
            </span>
          </div>
        </div>
      </section>

      {/* THE SCIENCE SECTION - ZERO ICONS ON CARDS */}
      <section className="relative max-w-[1240px] w-[calc(100%-3rem)] mx-auto py-16 flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF8A4C]/10 border border-[#FF8A4C]/30 text-xs font-mono font-bold text-[#FFA26B] tracking-wider uppercase">
            MICROGRAVITY COMBUSTION PHYSICS
          </div>
          <h2 className="m-0 font-['Space_Grotesk'] font-bold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
            What changes when fire floats
          </h2>
          <p className="m-0 text-[#A9B2C3] text-base md:text-lg max-w-[660px] leading-relaxed">
            Four fundamental physical anomalies every spacecraft architect, safety engineer,
            and astronaut crew must master.
          </p>
        </div>

        {/* 4 Cards with Dynamic Fire Frames (Matching the Flame Border Reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="relative group p-[2.5px] rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 animate-fire-frame">
            {/* Dynamic Outer Flame Aura */}
            <div 
              className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,#FF1100_0deg,#FF7700_40deg,#FFF176_80deg,#FF3300_130deg,#FFAA00_180deg,#FFF9C4_230deg,#FF2200_280deg,#FF8800_330deg,#FF1100_360deg)] animate-fire-spin-reverse opacity-85 group-hover:opacity-100 pointer-events-none"
              style={{ filter: 'blur(8px)' }}
            />

            {/* Dynamic Inner Burning Flame Rim */}
            <div 
              className="absolute -inset-[150%] bg-[conic-gradient(from_180deg,#FF2B00_0deg,#FF9900_45deg,#FFF59D_90deg,#FF4400_140deg,#FFA726_190deg,#FFF8E1_240deg,#FF1A00_290deg,#FF8A00_335deg,#FF2B00_360deg)] animate-fire-spin opacity-95 group-hover:opacity-100 pointer-events-none"
              style={{ filter: 'blur(1.5px)' }}
            />

            {/* Top & Bottom Subtle Flame Licking Highlights */}
            <div className="absolute top-0 inset-x-4 h-[2px] bg-gradient-to-r from-transparent via-[#FFF59D] to-transparent shadow-[0_0_10px_#FFA726,0_-2px_6px_#FF3D00] pointer-events-none z-20" />
            <div className="absolute bottom-0 inset-x-4 h-[2px] bg-gradient-to-r from-transparent via-[#FFF59D] to-transparent shadow-[0_0_10px_#FFA726,0_2px_6px_#FF3D00] pointer-events-none z-20" />

            {/* Inner Card Content */}
            <div className="relative h-full w-full rounded-[21.5px] bg-[#070B16] p-7 flex flex-col gap-4 z-10 shadow-[inset_0_0_22px_rgba(255,106,40,0.18)] border border-orange-500/25 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-1 flex-wrap">
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#7DB8FF] bg-[#7DB8FF]/10 px-2.5 py-1 rounded-md border border-[#7DB8FF]/25 whitespace-nowrap">
                  01 // DYNAMICS
                </span>
                <span className="text-[10px] font-mono text-[#8E98AB] whitespace-nowrap">
                  g = 0 m/s²
                </span>
              </div>

              <h3 className="m-0 font-['Space_Grotesk'] text-2xl font-bold text-white group-hover:text-[#FFB067] transition-colors">
                Spheres, not teardrops
              </h3>

              <p className="m-0 text-[#A9B2C3] text-sm leading-relaxed">
                Without gravity, hot combustion gases do not rise. Oxygen arrives solely through slow,
                radial molecular diffusion, causing flames to round out into perfect floating spheres.
              </p>

              <div className="mt-auto pt-4 border-t border-white/10 flex flex-col gap-1.5 text-xs">
                <div className="flex justify-between items-center text-[#8E98AB]">
                  <span>Geometry:</span>
                  <span className="text-white font-mono font-medium">360° Radial Sphere</span>
                </div>
                <div className="flex justify-between items-center text-[#8E98AB]">
                  <span>Buoyant Lift:</span>
                  <span className="text-[#7DB8FF] font-mono font-medium">Zero (Pure Diffusion)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group p-[2.5px] rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 animate-fire-frame">
            {/* Dynamic Outer Flame Aura */}
            <div 
              className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,#FF1100_0deg,#FF7700_40deg,#FFF176_80deg,#FF3300_130deg,#FFAA00_180deg,#FFF9C4_230deg,#FF2200_280deg,#FF8800_330deg,#FF1100_360deg)] animate-fire-spin-reverse opacity-85 group-hover:opacity-100 pointer-events-none"
              style={{ filter: 'blur(8px)' }}
            />

            {/* Dynamic Inner Burning Flame Rim */}
            <div 
              className="absolute -inset-[150%] bg-[conic-gradient(from_180deg,#FF2B00_0deg,#FF9900_45deg,#FFF59D_90deg,#FF4400_140deg,#FFA726_190deg,#FFF8E1_240deg,#FF1A00_290deg,#FF8A00_335deg,#FF2B00_360deg)] animate-fire-spin opacity-95 group-hover:opacity-100 pointer-events-none"
              style={{ filter: 'blur(1.5px)' }}
            />

            {/* Top & Bottom Subtle Flame Licking Highlights */}
            <div className="absolute top-0 inset-x-4 h-[2px] bg-gradient-to-r from-transparent via-[#FFF59D] to-transparent shadow-[0_0_10px_#FFA726,0_-2px_6px_#FF3D00] pointer-events-none z-20" />
            <div className="absolute bottom-0 inset-x-4 h-[2px] bg-gradient-to-r from-transparent via-[#FFF59D] to-transparent shadow-[0_0_10px_#FFA726,0_2px_6px_#FF3D00] pointer-events-none z-20" />

            {/* Inner Card Content */}
            <div className="relative h-full w-full rounded-[21.5px] bg-[#070B16] p-7 flex flex-col gap-4 z-10 shadow-[inset_0_0_22px_rgba(255,106,40,0.18)] border border-orange-500/25 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-1 flex-wrap">
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#B9A5FF] bg-[#B9A5FF]/10 px-2.5 py-1 rounded-md border border-[#B9A5FF]/25 whitespace-nowrap">
                  02 // SPECTRUM
                </span>
                <span className="text-[10px] font-mono text-[#8E98AB] whitespace-nowrap">
                  λ = 431 nm
                </span>
              </div>

              <h3 className="m-0 font-['Space_Grotesk'] text-2xl font-bold text-white group-hover:text-[#FFB067] transition-colors">
                Dimmer and bluer
              </h3>

              <p className="m-0 text-[#A9B2C3] text-sm leading-relaxed">
                Lower temperatures and slower residence times inhibit incandescent soot agglomeration.
                Flames burn in a faint, ethereal blue chemiluminescence—nearly invisible to standard cabin cameras.
              </p>

              <div className="mt-auto pt-4 border-t border-white/10 flex flex-col gap-1.5 text-xs">
                <div className="flex justify-between items-center text-[#8E98AB]">
                  <span>Soot Yield:</span>
                  <span className="text-[#5FE3AA] font-mono font-medium">Near Zero</span>
                </div>
                <div className="flex justify-between items-center text-[#8E98AB]">
                  <span>Visual Visibility:</span>
                  <span className="text-[#FF8A4C] font-mono font-medium">Extremely Low</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group p-[2.5px] rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 animate-fire-frame">
            {/* Dynamic Outer Flame Aura */}
            <div 
              className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,#FF1100_0deg,#FF7700_40deg,#FFF176_80deg,#FF3300_130deg,#FFAA00_180deg,#FFF9C4_230deg,#FF2200_280deg,#FF8800_330deg,#FF1100_360deg)] animate-fire-spin-reverse opacity-85 group-hover:opacity-100 pointer-events-none"
              style={{ filter: 'blur(8px)' }}
            />

            {/* Dynamic Inner Burning Flame Rim */}
            <div 
              className="absolute -inset-[150%] bg-[conic-gradient(from_180deg,#FF2B00_0deg,#FF9900_45deg,#FFF59D_90deg,#FF4400_140deg,#FFA726_190deg,#FFF8E1_240deg,#FF1A00_290deg,#FF8A00_335deg,#FF2B00_360deg)] animate-fire-spin opacity-95 group-hover:opacity-100 pointer-events-none"
              style={{ filter: 'blur(1.5px)' }}
            />

            {/* Top & Bottom Subtle Flame Licking Highlights */}
            <div className="absolute top-0 inset-x-4 h-[2px] bg-gradient-to-r from-transparent via-[#FFF59D] to-transparent shadow-[0_0_10px_#FFA726,0_-2px_6px_#FF3D00] pointer-events-none z-20" />
            <div className="absolute bottom-0 inset-x-4 h-[2px] bg-gradient-to-r from-transparent via-[#FFF59D] to-transparent shadow-[0_0_10px_#FFA726,0_2px_6px_#FF3D00] pointer-events-none z-20" />

            {/* Inner Card Content */}
            <div className="relative h-full w-full rounded-[21.5px] bg-[#070B16] p-7 flex flex-col gap-4 z-10 shadow-[inset_0_0_22px_rgba(255,106,40,0.18)] border border-orange-500/25 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-1 flex-wrap">
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#5FE3AA] bg-[#5FE3AA]/10 px-2.5 py-1 rounded-md border border-[#5FE3AA]/25 whitespace-nowrap">
                  03 // CONVECTION
                </span>
                <span className="text-[10px] font-mono text-[#8E98AB] whitespace-nowrap">
                  v &gt; 0.05 m/s
                </span>
              </div>

              <h3 className="m-0 font-['Space_Grotesk'] text-2xl font-bold text-white group-hover:text-[#FFB067] transition-colors">
                Airflow decides
              </h3>

              <p className="m-0 text-[#A9B2C3] text-sm leading-relaxed">
                In dead air, a flame smothers itself in its own blanket of CO₂ and water vapor. A gentle
                whisper of ventilation airflow—as low as 2 cm/s—replenishes oxygen and drives rapid spread.
              </p>

              <div className="mt-auto pt-4 border-t border-white/10 flex flex-col gap-1.5 text-xs">
                <div className="flex justify-between items-center text-[#8E98AB]">
                  <span>Still Cabin Air:</span>
                  <span className="text-white font-mono font-medium">Auto-Extinguishment</span>
                </div>
                <div className="flex justify-between items-center text-[#8E98AB]">
                  <span>AC Circulation:</span>
                  <span className="text-[#FF5A1F] font-mono font-medium">Accelerated Burn</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative group p-[2.5px] rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 animate-fire-frame">
            {/* Dynamic Outer Flame Aura */}
            <div 
              className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,#FF1100_0deg,#FF7700_40deg,#FFF176_80deg,#FF3300_130deg,#FFAA00_180deg,#FFF9C4_230deg,#FF2200_280deg,#FF8800_330deg,#FF1100_360deg)] animate-fire-spin-reverse opacity-85 group-hover:opacity-100 pointer-events-none"
              style={{ filter: 'blur(8px)' }}
            />

            {/* Dynamic Inner Burning Flame Rim */}
            <div 
              className="absolute -inset-[150%] bg-[conic-gradient(from_180deg,#FF2B00_0deg,#FF9900_45deg,#FFF59D_90deg,#FF4400_140deg,#FFA726_190deg,#FFF8E1_240deg,#FF1A00_290deg,#FF8A00_335deg,#FF2B00_360deg)] animate-fire-spin opacity-95 group-hover:opacity-100 pointer-events-none"
              style={{ filter: 'blur(1.5px)' }}
            />

            {/* Top & Bottom Subtle Flame Licking Highlights */}
            <div className="absolute top-0 inset-x-4 h-[2px] bg-gradient-to-r from-transparent via-[#FFF59D] to-transparent shadow-[0_0_10px_#FFA726,0_-2px_6px_#FF3D00] pointer-events-none z-20" />
            <div className="absolute bottom-0 inset-x-4 h-[2px] bg-gradient-to-r from-transparent via-[#FFF59D] to-transparent shadow-[0_0_10px_#FFA726,0_2px_6px_#FF3D00] pointer-events-none z-20" />

            {/* Inner Card Content */}
            <div className="relative h-full w-full rounded-[21.5px] bg-[#070B16] p-7 flex flex-col gap-4 z-10 shadow-[inset_0_0_22px_rgba(255,106,40,0.18)] border border-orange-500/25 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-1 flex-wrap">
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#FF8A4C] bg-[#FF8A4C]/10 px-2.5 py-1 rounded-md border border-[#FF8A4C]/25 whitespace-nowrap">
                  04 // ANOMALY
                </span>
                <span className="text-[10px] font-mono text-[#8E98AB] whitespace-nowrap">
                  T ≈ 450°C
                </span>
              </div>

              <h3 className="m-0 font-['Space_Grotesk'] text-2xl font-bold text-white group-hover:text-[#FFB067] transition-colors">
                Invisible cool flames
              </h3>

              <p className="m-0 text-[#A9B2C3] text-sm leading-relaxed">
                Discovered during FLEX on the ISS: after the visible hot flame extinguishes, heptane droplets
                continue steady, low-temperature catalytic combustion with zero visible light emission.
              </p>

              <div className="mt-auto pt-4 border-t border-white/10 flex flex-col gap-1.5 text-xs">
                <div className="flex justify-between items-center text-[#8E98AB]">
                  <span>Combustion Mode:</span>
                  <span className="text-white font-mono font-medium">Flameless Oxidation</span>
                </div>
                <div className="flex justify-between items-center text-[#8E98AB]">
                  <span>Crew Hazard:</span>
                  <span className="text-[#FF8A4C] font-mono font-medium">Silent Re-ignition</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS SECTION - DYNAMIC CONNECTED INFOGRAPHIC (Photo 1 Content in Photo 2 Design) */}
      <section className="relative max-w-[1240px] w-[calc(100%-3rem)] mx-auto py-20 z-10">
        {/* Section Header with Photo 1 content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3.5 max-w-[700px] text-left">
            <div className="text-xs font-mono font-bold text-[#FF8A4C] tracking-widest uppercase">
              HOW IT WORKS
            </div>
            <h2 className="m-0 font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              From scattered reports to clear decisions
            </h2>
            <p className="m-0 text-[#A9B2C3] text-base md:text-lg leading-relaxed">
              Decades of results live in papers, technical reports and raw datasets.
              Flame in Freefall connects them into one place you can search, compare and act on.
            </p>
          </div>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all text-sm w-fit h-fit backdrop-blur-sm shadow-lg shadow-black/40 group self-start md:self-auto"
          >
            <span>See the data</span>
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

        {/* Dynamic Ribbon Flowing Infographic Pipeline (Matching Photo 2) */}
        <div className="relative pt-4">
          
          {/* 3 Step Cards Connected Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 items-stretch">
            
            {/* Step 1 Card */}
            <div className="relative flex flex-col justify-between rounded-[26px] bg-gradient-to-b from-[#0F1E42]/90 via-[#09112B]/95 to-[#050A1C]/98 border border-[#2563EB]/40 p-7 sm:p-8 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.7),inset_0_0_25px_rgba(37,99,235,0.15)] hover:border-[#60A5FA] hover:shadow-[0_20px_50px_rgba(37,99,235,0.35),inset_0_0_35px_rgba(59,130,246,0.25)] transition-all duration-300 hover:-translate-y-2 group overflow-hidden min-h-[310px]">
              
              {/* Inner ambient blue corner glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[radial-gradient(circle,rgba(59,130,246,0.2),transparent_70%)] pointer-events-none" />

              <div className="flex flex-col gap-3 relative z-10 text-left">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#60A5FA] uppercase bg-[#3B82F6]/10 border border-[#3B82F6]/30 px-3 py-1 rounded-full w-fit">
                  FIRST STEP
                </span>

                <h3 className="m-0 font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white group-hover:text-[#93C5FD] transition-colors">
                  Ingest
                </h3>

                <p className="m-0 text-[#C3CAD8] text-sm sm:text-base leading-relaxed">
                  Experiment datasets and reports from NASA PSI and the Technical
                  Reports Server are parsed into one catalog.
                </p>
              </div>

              {/* Bottom Ribbon Cradle with Number 01 on Left */}
              <div className="relative z-10 mt-8 pt-5 border-t border-blue-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] flex items-center justify-center font-['Space_Grotesk'] font-bold text-2xl text-white shadow-[0_0_25px_rgba(59,130,246,0.9),inset_0_0_12px_rgba(255,255,255,0.4)] border border-[#93C5FD]">
                    01
                  </div>
                  <span className="text-xs font-mono font-semibold tracking-wider text-[#93C5FD]">
                    CATALOGING
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#8E98AB]">NASA PSI / NTRS</span>
              </div>

              {/* Glowing bottom ribbon bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#2563EB] shadow-[0_0_15px_rgba(59,130,246,0.9)]" />
            </div>

            {/* Step 2 Card */}
            <div className="relative flex flex-col justify-between rounded-[26px] bg-gradient-to-b from-[#0F1E42]/90 via-[#09112B]/95 to-[#050A1C]/98 border border-[#2563EB]/40 p-7 sm:p-8 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.7),inset_0_0_25px_rgba(37,99,235,0.15)] hover:border-[#60A5FA] hover:shadow-[0_20px_50px_rgba(37,99,235,0.35),inset_0_0_35px_rgba(59,130,246,0.25)] transition-all duration-300 hover:-translate-y-2 group overflow-hidden min-h-[310px]">
              
              <div className="absolute top-0 right-0 w-36 h-36 bg-[radial-gradient(circle,rgba(59,130,246,0.2),transparent_70%)] pointer-events-none" />

              <div className="flex flex-col gap-3 relative z-10 text-left">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#60A5FA] uppercase bg-[#3B82F6]/10 border border-[#3B82F6]/30 px-3 py-1 rounded-full w-fit">
                  SECOND STEP
                </span>

                <h3 className="m-0 font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white group-hover:text-[#93C5FD] transition-colors">
                  Understand with AI
                </h3>

                <p className="m-0 text-[#C3CAD8] text-sm sm:text-base leading-relaxed">
                  A retrieval-backed LLM summarizes each campaign and compares fuel,
                  airflow, oxygen and pressure — with citations.
                </p>
              </div>

              {/* Bottom Ribbon Cradle with Number 02 on Right (matching alternating pattern in Photo 2) */}
              <div className="relative z-10 mt-8 pt-5 border-t border-blue-500/20 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#8E98AB]">RAG SYNTHESIS</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-semibold tracking-wider text-[#93C5FD]">
                    CROSS-PARAM
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] flex items-center justify-center font-['Space_Grotesk'] font-bold text-2xl text-white shadow-[0_0_25px_rgba(59,130,246,0.9),inset_0_0_12px_rgba(255,255,255,0.4)] border border-[#93C5FD]">
                    02
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.9)]" />
            </div>

            {/* Step 3 Card */}
            <div className="relative flex flex-col justify-between rounded-[26px] bg-gradient-to-b from-[#0F1E42]/90 via-[#09112B]/95 to-[#050A1C]/98 border border-[#2563EB]/40 p-7 sm:p-8 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.7),inset_0_0_25px_rgba(37,99,235,0.15)] hover:border-[#60A5FA] hover:shadow-[0_20px_50px_rgba(37,99,235,0.35),inset_0_0_35px_rgba(59,130,246,0.25)] transition-all duration-300 hover:-translate-y-2 group overflow-hidden min-h-[310px]">
              
              <div className="absolute top-0 right-0 w-36 h-36 bg-[radial-gradient(circle,rgba(59,130,246,0.2),transparent_70%)] pointer-events-none" />

              <div className="flex flex-col gap-3 relative z-10 text-left">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#60A5FA] uppercase bg-[#3B82F6]/10 border border-[#3B82F6]/30 px-3 py-1 rounded-full w-fit">
                  THIRD STEP
                </span>

                <h3 className="m-0 font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white group-hover:text-[#93C5FD] transition-colors">
                  Act safely
                </h3>

                <p className="m-0 text-[#C3CAD8] text-sm sm:text-base leading-relaxed">
                  Findings become prevention, detection, suppression and habitat-design
                  guidelines linked to their evidence.
                </p>
              </div>

              {/* Bottom Ribbon Cradle with Number 03 on Left */}
              <div className="relative z-10 mt-8 pt-5 border-t border-blue-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] flex items-center justify-center font-['Space_Grotesk'] font-bold text-2xl text-white shadow-[0_0_25px_rgba(59,130,246,0.9),inset_0_0_12px_rgba(255,255,255,0.4)] border border-[#93C5FD]">
                    03
                  </div>
                  <span className="text-xs font-mono font-semibold tracking-wider text-[#93C5FD]">
                    PROTOCOLS
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#8E98AB]">HABITAT &amp; CREW</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#2563EB] shadow-[0_0_15px_rgba(59,130,246,0.9)]" />
            </div>

          </div>

          {/* Connected Ribbon Arch Connectors between the cards (matching Photo 2) */}
          <div className="hidden md:block absolute bottom-0 left-0 right-0 h-[80px] pointer-events-none z-0">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 80">
              <defs>
                <linearGradient id="infographic-ribbon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1D4ED8" />
                  <stop offset="30%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#60A5FA" />
                  <stop offset="70%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
                <filter id="ribbon-glow-filter" x="-20%" y="-40%" width="140%" height="180%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Continuous curved ribbon line that arches up between card 1 & 2, and card 2 & 3 */}
              <path
                d="M 20,70 L 300,70 C 315,70 325,10 345,10 C 365,10 375,70 390,70 L 610,70 C 625,70 635,10 655,10 C 675,10 685,70 700,70 L 980,70"
                fill="none"
                stroke="url(#infographic-ribbon-grad)"
                strokeWidth="8"
                strokeLinecap="round"
                filter="url(#ribbon-glow-filter)"
                className="opacity-80"
              />
              <path
                d="M 20,70 L 300,70 C 315,70 325,10 345,10 C 365,10 375,70 390,70 L 610,70 C 625,70 635,10 655,10 C 675,10 685,70 700,70 L 980,70"
                fill="none"
                stroke="#BFDBFE"
                strokeWidth="2"
                strokeLinecap="round"
                className="opacity-90"
              />
            </svg>
          </div>

        </div>
      </section>

      {/* INTERACTIVE COMPARISON LABORATORY: EARTH (1 g) VS SPACE (0 g) */}
      <section className="relative max-w-[1240px] w-[calc(100%-3rem)] mx-auto py-12">
        <div className="rounded-[32px] border border-white/15 bg-[radial-gradient(ellipse_at_top,rgba(255,106,40,0.12),transparent_50%),#090D18] p-8 md:p-12 shadow-2xl overflow-hidden relative">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex flex-col gap-2 max-w-[620px]">
              <div className="text-xs font-mono font-bold tracking-widest text-[#7DB8FF] uppercase">
                COMPARATIVE COMBUSTION LABORATORY
              </div>
              <h2 className="m-0 font-['Space_Grotesk'] font-bold text-3xl md:text-4xl text-white tracking-tight">
                Earth Gravity (1 g) vs. Microgravity (0 g)
              </h2>
              <p className="m-0 text-[#A9B2C3] text-sm md:text-base leading-relaxed">
                Toggle between gravitational environments to see how fire physics flips completely in space.
              </p>
            </div>

            {/* Toggle switch */}
            <div className="flex p-1.5 rounded-full bg-white/5 border border-white/10 self-start md:self-auto backdrop-blur-md">
              <button
                onClick={() => setActiveGravityTab('micro')}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  activeGravityTab === 'micro'
                    ? 'bg-gradient-to-r from-[#FF8A3D] to-[#FF5A1F] text-white shadow-lg shadow-orange-500/30'
                    : 'text-[#A9B2C3] hover:text-white'
                }`}
              >
                MICROGRAVITY (0 g)
              </button>
              <button
                onClick={() => setActiveGravityTab('earth')}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  activeGravityTab === 'earth'
                    ? 'bg-gradient-to-r from-[#7DB8FF] to-[#3D7BFF] text-white shadow-lg shadow-blue-500/30'
                    : 'text-[#A9B2C3] hover:text-white'
                }`}
              >
                TERRESTRIAL (1 g)
              </button>
            </div>
          </div>

          {/* Comparison Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 items-center">
            
            {/* Visual simulation representation */}
            <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-[#060810] border border-white/10 relative overflow-hidden min-h-[300px]">
              {activeGravityTab === 'micro' ? (
                <>
                  <div className="w-36 h-36 rounded-full bg-[radial-gradient(circle,rgba(125,184,255,0.9)_0%,rgba(77,140,255,0.5)_50%,rgba(255,106,40,0.15)_75%,transparent_100%)] shadow-[0_0_60px_rgba(125,184,255,0.4)] animate-pulse duration-[3000ms] flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(142,197,255,0.7)_60%,transparent_100%)]" />
                  </div>
                  <div className="mt-6 text-center">
                    <span className="text-xs font-mono font-bold text-[#7DB8FF] tracking-wider uppercase block">
                      SPHERICAL DIFFUSION FLAME
                    </span>
                    <span className="text-xs text-[#8E98AB]">
                      Faint blue chemiluminescence, isotropic heat field
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-24 h-40 rounded-t-full rounded-b-xl bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,200,0.95)_0%,rgba(255,138,60,0.9)_45%,rgba(255,60,20,0.6)_75%,transparent_100%)] shadow-[0_0_50px_rgba(255,106,40,0.5)] animate-flame flex items-end justify-center pb-3">
                    <div className="w-8 h-12 rounded-t-full bg-white/90" />
                  </div>
                  <div className="mt-6 text-center">
                    <span className="text-xs font-mono font-bold text-[#FFA26B] tracking-wider uppercase block">
                      BUOYANT TEARDROP FLAME
                    </span>
                    <span className="text-xs text-[#8E98AB]">
                      Bright yellow soot incandescence, upward heat plume
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Parameter specs */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 flex flex-col gap-2">
                <span className="text-xs font-mono text-[#8E98AB] uppercase tracking-wider">Combustion Driving Mechanism</span>
                <span className="text-lg font-bold text-white font-['Space_Grotesk']">
                  {activeGravityTab === 'micro' ? 'Pure Molecular Diffusion' : 'Strong Natural Convection'}
                </span>
                <p className="m-0 text-xs text-[#A9B2C3] leading-relaxed">
                  {activeGravityTab === 'micro'
                    ? 'No density-driven buoyancy occurs. Oxygen arrives only by slow thermal and molecular diffusion across concentric spherical gradients.'
                    : 'Hot light gas rushes upward at 2–3 m/s, continuously sucking dense cold oxygenated air into the base of the fire.'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 flex flex-col gap-2">
                <span className="text-xs font-mono text-[#8E98AB] uppercase tracking-wider">Visual Appearance & Luminance</span>
                <span className="text-lg font-bold text-white font-['Space_Grotesk']">
                  {activeGravityTab === 'micro' ? 'Ghostly Blue / Low-Temp Cool' : 'Intense Radiant Yellow-Orange'}
                </span>
                <p className="m-0 text-xs text-[#A9B2C3] leading-relaxed">
                  {activeGravityTab === 'micro'
                    ? 'Zero soot agglomeration produces a very faint blue CH* radical emission. Cool flames emit almost no visible photons while actively reacting.'
                    : 'Abundant high-temperature soot particles incandesce brilliantly at 1,400°C–1,800°C, illuminating the entire room.'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 flex flex-col gap-2">
                <span className="text-xs font-mono text-[#8E98AB] uppercase tracking-wider">Behavior In Stagnant Air</span>
                <span className="text-lg font-bold text-white font-['Space_Grotesk']">
                  {activeGravityTab === 'micro' ? 'Auto-Suffocation' : 'Self-Sustaining Burning'}
                </span>
                <p className="m-0 text-xs text-[#A9B2C3] leading-relaxed">
                  {activeGravityTab === 'micro'
                    ? 'Without cabin air movement, combustion products (CO₂ and H₂O) accumulate around the flame sphere until oxygen is totally depleted.'
                    : 'The fire naturally generates its own vigorous fresh-air updraft regardless of whether room fans are on or off.'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 flex flex-col gap-2">
                <span className="text-xs font-mono text-[#8E98AB] uppercase tracking-wider">Crew Suppression Protocol</span>
                <span className="text-lg font-bold text-white font-['Space_Grotesk']">
                  {activeGravityTab === 'micro' ? 'Isolate Module Ventilation First' : 'Aim At Fuel Base Direct'}
                </span>
                <p className="m-0 text-xs text-[#A9B2C3] leading-relaxed">
                  {activeGravityTab === 'micro'
                    ? 'Cutting ventilation cuts off the primary oxygen supply. Flooding with gas suppressant requires tracking temperature due to invisible cool flame reignition.'
                    : 'Direct liquid or chemical powder streams onto the burning base to cool solid mass below its flash pyrolysis threshold.'}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>




      {/* WHY NOW: THE ARTEMIS CHALLENGE - NO ICONS */}
      <section className="relative max-w-[1240px] w-[calc(100%-3rem)] mx-auto py-12">
        <div className="rounded-[32px] border border-white/10 bg-[radial-gradient(ellipse_at_0%_0%,rgba(255,106,40,0.18),transparent_55%),radial-gradient(ellipse_at_100%_100%,rgba(77,163,255,0.18),transparent_55%),#0A0E18] p-8 md:p-14 flex flex-col gap-10 shadow-2xl">
          
          <div className="flex flex-col gap-3.5 max-w-[760px] text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7DB8FF]/10 border border-[#7DB8FF]/30 text-xs font-mono font-bold text-[#7DB8FF] tracking-wider uppercase w-fit">
              MISSION CRITICAL // ARTEMIS CHALLENGE
            </div>
            
            <h2 className="m-0 font-['Space_Grotesk'] font-bold text-3xl md:text-5xl text-white leading-tight">
              Artemis brings new air, lower pressure, higher fire risk.
            </h2>
            
            <p className="m-0 text-[#A9B2C3] text-base md:text-lg leading-relaxed">
              NASA&apos;s proposed Exploration Atmosphere for lunar habitats and Gateway reduces cabin pressure 
              and increases oxygen concentration to eliminate lengthy spacewalk pre-breathe times. 
              Both changes fundamentally increase material flammability.
            </p>
          </div>

          {/* 3 Telemetry Metric Cards with NO icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF8A3D]/40 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#FF8A3D] uppercase tracking-wider font-semibold">Oxygen Ratio</span>
                <span className="text-[11px] font-mono text-[#8E98AB]">ISS: 21%</span>
              </div>
              <div className="font-['Space_Grotesk'] font-bold text-5xl md:text-6xl bg-gradient-to-r from-[#FFB067] to-[#FF5A1F] bg-clip-text text-transparent">
                34%
              </div>
              <div className="text-[#A9B2C3] text-sm leading-relaxed">
                Oxygen fraction in the Exploration Atmosphere. Materials certified as fire-retardant in Earth air ignite and burn aggressively at 34% O₂.
              </div>
              <div className="mt-auto pt-3 border-t border-white/5 text-[11px] font-mono text-[#FF8A4C]">
                STATUS: Elevated Flammability Hazard
              </div>
            </div>

            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#7DB8FF]/40 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#7DB8FF] uppercase tracking-wider font-semibold">Cabin Pressure</span>
                <span className="text-[11px] font-mono text-[#8E98AB]">Sea Level: 14.7 psia</span>
              </div>
              <div className="font-['Space_Grotesk'] font-bold text-5xl md:text-6xl bg-gradient-to-r from-[#FFB067] via-[#FF5A1F] to-[#7DB8FF] bg-clip-text text-transparent">
                8.2 psia
              </div>
              <div className="text-[#A9B2C3] text-sm leading-relaxed">
                Cabin atmosphere pressure (56.5 kPa). Lower ambient gas density impairs heat dissipation away from ignited electrical components.
              </div>
              <div className="mt-auto pt-3 border-t border-white/5 text-[11px] font-mono text-[#7DB8FF]">
                STATUS: Reduced Thermal Damping
              </div>
            </div>

            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#5FE3AA]/40 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#5FE3AA] uppercase tracking-wider font-semibold">Lunar Gravity</span>
                <span className="text-[11px] font-mono text-[#8E98AB]">Earth: 1.0 g</span>
              </div>
              <div className="font-['Space_Grotesk'] font-bold text-5xl md:text-6xl bg-gradient-to-r from-[#5FE3AA] to-[#7DB8FF] bg-clip-text text-transparent">
                0.16 g
              </div>
              <div className="text-[#A9B2C3] text-sm leading-relaxed">
                Weak lunar gravity creates low-speed upward buoyancy—providing just enough convective draft to sustain combustion without blowing it out.
              </div>
              <div className="mt-auto pt-3 border-t border-white/5 text-[11px] font-mono text-[#5FE3AA]">
                STATUS: Critical Low-Flow Hazard
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* EVERYTHING IN ONE PLATFORM - NO ICONS ON CARDS */}
      <section className="relative max-w-[1240px] w-[calc(100%-3rem)] mx-auto py-16 flex flex-col gap-10">
        <div className="text-center flex flex-col items-center gap-3">
          <div className="text-xs font-mono font-bold text-[#FF8A4C] tracking-widest uppercase">
            UNIFIED PLATFORM SUITE
          </div>
          <h2 className="m-0 font-['Space_Grotesk'] font-bold text-3xl md:text-5xl text-white tracking-tight">
            Everything in one platform
          </h2>
          <p className="m-0 text-[#A9B2C3] text-base max-w-[560px]">
            Designed for aerospace combustion researchers, space habitat system designers, and flight controllers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Dashboard - NO ICONS */}
          <Link
            href="/dashboard"
            className="group rounded-3xl border border-white/10 bg-white/[0.03] hover:border-[#FF8A3D]/50 hover:bg-white/[0.05] p-7 flex flex-col gap-5 no-underline transition-all hover:-translate-y-1.5 shadow-lg"
          >
            {/* Visual Preview */}
            <div className="h-[160px] rounded-2xl bg-[#090D1A] border border-white/10 p-4 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#8E98AB]">
                <span>CAMPAIGN ANALYTICS</span>
                <span className="text-[#FF8A3D]">7 MISSIONS</span>
              </div>
              <div className="flex items-end gap-2 h-20 pt-4">
                <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                  <span className="w-full h-[55%] rounded-t-md bg-[#FF7A2E]/80 group-hover:bg-[#FF7A2E] transition-all" />
                  <span className="text-[10px] font-mono text-[#8E98AB]">FLEX</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                  <span className="w-full h-[85%] rounded-t-md bg-[#FFB067]/80 group-hover:bg-[#FFB067] transition-all" />
                  <span className="text-[10px] font-mono text-[#8E98AB]">Saffire</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                  <span className="w-full h-[40%] rounded-t-md bg-[#7DB8FF]/80 group-hover:bg-[#7DB8FF] transition-all" />
                  <span className="text-[10px] font-mono text-[#8E98AB]">BASS</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                  <span className="w-full h-[70%] rounded-t-md bg-[#5FE3AA]/80 group-hover:bg-[#5FE3AA] transition-all" />
                  <span className="text-[10px] font-mono text-[#8E98AB]">ACME</span>
                </div>
              </div>
              <div className="flex gap-2 text-[10px] font-mono text-[#A9B2C3]">
                <span className="px-1.5 py-0.5 rounded bg-white/5">Liquid</span>
                <span className="px-1.5 py-0.5 rounded bg-white/5">Solid</span>
                <span className="px-1.5 py-0.5 rounded bg-white/5">Gas</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="font-['Space_Grotesk'] font-bold text-2xl text-white flex items-center justify-between group-hover:text-[#FF8A4C] transition-colors">
                <span>Research Dashboard</span>
                <span>&rarr;</span>
              </div>
              <p className="m-0 text-[#A9B2C3] text-sm leading-relaxed">
                Filter and compare every flight campaign by fuel, atmosphere, apparatus, 
                and year with AI summaries and key findings.
              </p>
            </div>
          </Link>

          {/* Card 2: AI Chat - NO ICONS */}
          <Link
            href="/chat"
            className="group rounded-3xl border border-white/10 bg-white/[0.03] hover:border-[#7DB8FF]/50 hover:bg-white/[0.05] p-7 flex flex-col gap-5 no-underline transition-all hover:-translate-y-1.5 shadow-lg"
          >
            {/* Visual Preview */}
            <div className="h-[160px] rounded-2xl bg-[#090D1A] border border-white/10 p-4 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#8E98AB]">
                <span>GROUNDED RAG CHAT</span>
                <span className="text-[#7DB8FF]">PSI CITED</span>
              </div>
              <div className="flex flex-col gap-2 py-1">
                <div className="self-end max-w-[85%] bg-gradient-to-r from-[#FF7A2E] to-[#FF5A1F] text-white px-3 py-1.5 rounded-xl rounded-br-xs text-xs">
                  Why do µg flames burn faint blue?
                </div>
                <div className="self-start max-w-[88%] bg-white/10 text-[#E2E6EE] px-3 py-1.5 rounded-xl rounded-bl-xs text-xs">
                  Less glowing soot forms. Peak CH* radical emission is at 431 nm...
                </div>
              </div>
              <div className="text-[10px] font-mono text-[#5FE3AA] flex items-center gap-1">
                <span>&bull;</span> Citations: FLEX (ISS), NASA-TP-2016
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="font-['Space_Grotesk'] font-bold text-2xl text-white flex items-center justify-between group-hover:text-[#7DB8FF] transition-colors">
                <span>Combustion AI Chat</span>
                <span>&rarr;</span>
              </div>
              <p className="m-0 text-[#A9B2C3] text-sm leading-relaxed">
                Ask in plain language. Every answer is backed by flight experimental datasets 
                with full bibliographic citations.
              </p>
            </div>
          </Link>

          {/* Card 3: Safety Guidelines - NO ICONS */}
          <Link
            href="/guidelines"
            className="group rounded-3xl border border-white/10 bg-white/[0.03] hover:border-[#5FE3AA]/50 hover:bg-white/[0.05] p-7 flex flex-col gap-5 no-underline transition-all hover:-translate-y-1.5 shadow-lg"
          >
            {/* Visual Preview */}
            <div className="h-[160px] rounded-2xl bg-[#090D1A] border border-white/10 p-4 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#8E98AB]">
                <span>CREW PROTOCOL ENGINE</span>
                <span className="text-[#5FE3AA]">ACTIVE</span>
              </div>
              <div className="flex flex-col gap-2 py-1">
                <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 text-xs text-white">
                  <span>1. Module Ventilation Cut-off</span>
                  <span className="font-mono text-[10px] text-[#5FE3AA]">PRIORITY 1</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 text-xs text-white">
                  <span>2. Equipment Rack Power Kill</span>
                  <span className="font-mono text-[10px] text-[#7DB8FF]">PRIORITY 2</span>
                </div>
              </div>
              <div className="text-[10px] font-mono text-[#A9B2C3]">
                Evidence-verified by BASS &amp; Saffire flight tests
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="font-['Space_Grotesk'] font-bold text-2xl text-white flex items-center justify-between group-hover:text-[#5FE3AA] transition-colors">
                <span>Safety Guidelines</span>
                <span>&rarr;</span>
              </div>
              <p className="m-0 text-[#A9B2C3] text-sm leading-relaxed">
                Actionable operational protocols for fire prevention, rapid detection, 
                and post-fire habitat air scrubbing.
              </p>
            </div>
          </Link>

        </div>
      </section>


      {/* SAMPLE RESEARCH QUERIES SECTION */}
      <section className="relative max-w-[1240px] w-[calc(100%-3rem)] mx-auto py-12">
        <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono font-bold text-[#FF8A3D] tracking-wider uppercase">
                EXPLORE WITH ONE CLICK
              </div>
              <h3 className="m-0 font-['Space_Grotesk'] text-2xl md:text-3xl font-bold text-white">
                Frequent Combustion Inquiries
              </h3>
            </div>
            <Link
              href="/chat"
              className="text-xs font-semibold text-[#7DB8FF] hover:text-white transition-colors"
            >
              Open Interactive AI Workspace &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/chat"
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/[0.05] transition-all flex flex-col gap-1.5 no-underline group"
            >
              <div className="text-sm font-semibold text-white group-hover:text-[#FF8A3D] transition-colors">
                &ldquo;Why do flames form spheres in microgravity instead of teardrops?&rdquo;
              </div>
              <div className="text-xs text-[#8E98AB]">
                Explains buoyancy cessation, molecular diffusion gradients, and the FLEX droplet discoveries.
              </div>
            </Link>

            <Link
              href="/chat"
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/[0.05] transition-all flex flex-col gap-1.5 no-underline group"
            >
              <div className="text-sm font-semibold text-white group-hover:text-[#FF8A3D] transition-colors">
                &ldquo;What is the cool flame phenomenon discovered on the ISS?&rdquo;
              </div>
              <div className="text-xs text-[#8E98AB]">
                Details low-temperature oxidation, flameless reactions, and why visual extinction can be deceptive.
              </div>
            </Link>

            <Link
              href="/chat"
              className="p-4 rounded-2xl bg-white/[0.03] border border-blue-500/50 hover:border-blue-500 hover:bg-blue-500/[0.05] transition-all flex flex-col gap-1.5 no-underline group"
            >
              <div className="text-sm font-semibold text-white group-hover:text-[#7DB8FF] transition-colors">
                &ldquo;Why is NASA-STD-6001 Test 1 not always conservative for spacecraft?&rdquo;
              </div>
              <div className="text-xs text-[#8E98AB]">
                Compares terrestrial upward-burning flammability tests with low-flow microgravity conditions.
              </div>
            </Link>

            <Link
              href="/chat"
              className="p-4 rounded-2xl bg-white/[0.03] border border-emerald-500/50 hover:border-emerald-500 hover:bg-emerald-500/[0.05] transition-all flex flex-col gap-1.5 no-underline group"
            >
              <div className="text-sm font-semibold text-white group-hover:text-[#5FE3AA] transition-colors">
                &ldquo;What are the immediate suppression steps for an in-cabin fire?&rdquo;
              </div>
              <div className="text-xs text-[#8E98AB]">
                Lists critical order: ventilation shutdown, rack power isolation, CO₂/mist discharge, gas monitoring.
              </div>
            </Link>
          </div>
        </div>
      </section>


      {/* FINAL CALL TO ACTION */}
      <section className="relative max-w-[1240px] w-[calc(100%-3rem)] mx-auto my-16">
        <div className="relative rounded-[32px] border border-orange-500/30 bg-gradient-to-b from-[#101626] to-[#080B14] p-10 md:p-16 text-center flex flex-col items-center gap-6 overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(255,106,40,0.2),transparent_70%)] pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FFB067]">
            OPEN RESEARCH ACCESS
          </div>

          <h2 className="m-0 font-['Space_Grotesk'] font-bold text-3xl md:text-5xl text-white max-w-[700px] tracking-tight">
            Ready to explore the physics of fire in microgravity?
          </h2>

          <p className="m-0 text-[#A9B2C3] text-base md:text-lg max-w-[580px] leading-relaxed">
            Access indexed experiment data from the ISS and Cygnus, or chat directly 
            with our combustion research assistant.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 z-10">
            <Link
              href="/dashboard"
              className="bg-gradient-to-r from-[#FF8A3D] to-[#FF5A1F] hover:brightness-110 text-white font-semibold px-8 py-3.5 rounded-full shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-95 transition-all"
            >
              Launch Dashboard
            </Link>
            <Link
              href="/chat"
              className="text-white font-semibold px-8 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 active:scale-95 transition-all backdrop-blur-md"
            >
              Start AI Query
            </Link>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="relative border-t border-white/10 mt-16 bg-[rgba(14,18,28,0.85)] backdrop-blur-md">
        <div className="max-w-[1240px] w-[calc(100%-3rem)] mx-auto py-14 flex flex-col gap-10">
          
          <div className="flex flex-col md:flex-row justify-between gap-8 text-sm">
            <div className="flex flex-col gap-3 max-w-[420px] text-left">
              <Logo />
              <p className="m-0 text-[#8E98AB] text-xs leading-relaxed">
                Synthesizing 60 years of NASA microgravity combustion research to empower safer 
                crewed missions to the Moon, Mars, and beyond. Built for the NASA Space Apps Challenge.
              </p>
              <div className="text-[11px] font-mono text-[#5FE3AA] flex items-center gap-2 pt-1">
                <span className="w-2 h-2 rounded-full bg-[#5FE3AA] animate-pulse" />
                NASA PSI &amp; NTRS ARCHIVES CONNECTED
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-left">
              <div className="flex flex-col gap-2.5">
                <div className="text-white font-semibold text-xs font-mono uppercase tracking-wider">Navigation</div>
                <Link href="/" className="text-[#A9B2C3] hover:text-white transition-colors text-xs">Home</Link>
                <Link href="/dashboard" className="text-[#A9B2C3] hover:text-white transition-colors text-xs">Dashboard</Link>
                <Link href="/chat" className="text-[#A9B2C3] hover:text-white transition-colors text-xs">AI Chat</Link>
                <Link href="/guidelines" className="text-[#A9B2C3] hover:text-white transition-colors text-xs">Guidelines</Link>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="text-white font-semibold text-xs font-mono uppercase tracking-wider">Flight Experiments</div>
                <span className="text-[#A9B2C3] text-xs">FLEX &amp; FLEX-2 (ISS)</span>
                <span className="text-[#A9B2C3] text-xs">Saffire I–VI (Cygnus)</span>
                <span className="text-[#A9B2C3] text-xs">BASS / BASS-II (MSG)</span>
                <span className="text-[#A9B2C3] text-xs">ACME &amp; SoFIE</span>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="text-white font-semibold text-xs font-mono uppercase tracking-wider">Data Provenance</div>
                <a
                  href="https://psi.nasa.gov"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#FF8A3D] hover:text-white transition-colors text-xs"
                >
                  NASA Physical Sciences &rarr;
                </a>
                <a
                  href="https://ntrs.nasa.gov"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#FF8A3D] hover:text-white transition-colors text-xs"
                >
                  NASA Technical Reports &rarr;
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6F7A8F]">
            <div>
              &copy; {new Date().getFullYear()} PyroNova. Not an official NASA product. All experimental research rights belong to NASA and participating universities.
            </div>
            <div className="font-mono text-[11px] text-[#8E98AB]">
              MISSION TELEMETRY: READY
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
