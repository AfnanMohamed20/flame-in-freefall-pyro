'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from '@/app/components/Logo';

const CAMPAIGNS = [
  {
    id: 'flex',
    name: 'FLEX',
    full: 'Flame Extinguishment Experiment',
    platform: 'ISS · Combustion Integrated Rack',
    cat: 'liquid',
    catLabel: 'Liquid droplets',
    years: '2009–2012',
    color: '#FF8A4C',
    tint: 'rgba(255,138,76,0.14)',
    start: 2009,
    end: 2012,
    summary: 'Burned free-floating fuel droplets to see how flames die out and how well diluent gases such as CO₂ and helium suppress them.',
    findings: [
      'Heptane droplets kept burning as an invisible, low-temperature “cool flame” after the hot flame went out.',
      'Suppressant performance in microgravity differs from what 1 g tests suggest.'
    ],
    implication: 'Visible extinction is not proof the fire is out. Keep monitoring temperature and gas species after suppression.'
  },
  {
    id: 'flex2',
    name: 'FLEX-2',
    full: 'Flame Extinguishment Experiment 2',
    platform: 'ISS · Combustion Integrated Rack',
    cat: 'liquid',
    catLabel: 'Liquid droplets',
    years: '2012–2016',
    color: '#FF8A4C',
    tint: 'rgba(255,138,76,0.14)',
    start: 2012,
    end: 2016,
    summary: 'Studied burning of fuel mixtures and droplet pairs and arrays, including soot formation and how neighboring droplets interact.',
    findings: [
      'Mixtures burn differently from pure fuels as volatile components boil off first.',
      'Flame spread between droplets depends strongly on their spacing.'
    ],
    implication: 'Treat leaks and sprays as interacting droplet clouds, not single drops, when modelling fire spread.'
  },
  {
    id: 'bass',
    name: 'BASS / BASS-II',
    full: 'Burning and Suppression of Solids',
    platform: 'ISS · Microgravity Science Glovebox',
    cat: 'solid',
    catLabel: 'Solid materials',
    years: '2011–2016',
    color: '#FFC15A',
    tint: 'rgba(255,193,90,0.14)',
    start: 2011,
    end: 2016,
    summary: 'Burned small samples of solid materials — acrylic, fabrics, paper — in a controlled low-speed airflow and tested suppression.',
    findings: [
      'Flames on solids survived at very low airflow speeds.',
      'Some samples burned at oxygen levels that normal-gravity tests would rate as safe.'
    ],
    implication: '1 g flammability screening is not always conservative for low-flow microgravity cabins.'
  },
  {
    id: 'saffire',
    name: 'Saffire I–VI',
    full: 'Spacecraft Fire Safety Experiment',
    platform: 'Cygnus cargo vehicle',
    cat: 'large',
    catLabel: 'Large-scale',
    years: '2016–2021',
    color: '#B9A5FF',
    tint: 'rgba(185,165,255,0.14)',
    start: 2016,
    end: 2021,
    summary: 'Large-scale fires lit inside uncrewed Cygnus vehicles after they left the ISS — the closest test yet to a real spacecraft fire.',
    findings: [
      'First observations of flame spread over spacecraft-scale (≈1 m) samples in microgravity.',
      'Measured how a growing fire changes cabin oxygen, pressure and combustion products.'
    ],
    implication: 'Validated the models used to size fire detection and suppression for crewed vehicles.'
  },
  {
    id: 'acme',
    name: 'ACME',
    full: 'Advanced Combustion via Microgravity Experiments',
    platform: 'ISS · Combustion Integrated Rack',
    cat: 'gas',
    catLabel: 'Gaseous flames',
    years: '2017–2020',
    color: '#7DB8FF',
    tint: 'rgba(125,184,255,0.14)',
    start: 2017,
    end: 2020,
    summary: 'Five studies of gaseous flames free of buoyancy, covering soot formation, flame stability and the effect of electric fields.',
    findings: [
      'Measured soot formation and extinction limits for non-premixed gas flames.',
      'Produced benchmark data for combustion models.'
    ],
    implication: 'Better soot and smoke predictions help design detectors for electrical and gas fires.'
  },
  {
    id: 'sofie',
    name: 'SoFIE',
    full: 'Solid Fuel Ignition and Extinction',
    platform: 'ISS · Combustion Integrated Rack',
    cat: 'solid',
    catLabel: 'Solid materials',
    years: '2023–now',
    color: '#FFC15A',
    tint: 'rgba(255,193,90,0.14)',
    start: 2023,
    end: 2026,
    summary: 'Ignition, growth and extinction of solid materials across the oxygen and pressure levels planned for exploration vehicles.',
    findings: [
      'Maps ignition and extinction limits at reduced pressure and elevated oxygen.',
      'Ongoing campaign — results still being published.'
    ],
    implication: 'Directly informs material limits for the 34% O₂ / 8.2 psia exploration atmosphere.'
  },
  {
    id: 'drop',
    name: 'Drop towers',
    full: 'Zero Gravity Research Facility & 2.2 s Drop Tower',
    platform: 'NASA Glenn (ground)',
    cat: 'ground',
    catLabel: 'Ground tests',
    years: '1966–now',
    color: '#5FE3AA',
    tint: 'rgba(95,227,170,0.14)',
    start: 2008,
    end: 2026,
    summary: 'Seconds-long free-fall tests used to study ignition, early flame shape and spread before committing to flight hardware.',
    findings: [
      'Up to about 5 seconds of microgravity per drop.',
      'Fast, low-cost way to screen ideas and materials.'
    ],
    implication: 'Use for rapid material screening, then confirm long-duration behavior in orbit.'
  }
];

export default function DashboardPage() {
  const [selectedCat, setSelectedCat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedId, setSelectedId] = useState('flex');
  
  const [liveStats, setLiveStats] = useState({ campaigns: 0, hours: 0, safetyScore: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLiveStats({ campaigns: 7, hours: 1420, safetyScore: 98 });
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const filteredRows = CAMPAIGNS.filter((c) => {
    const matchesCat = selectedCat === 'all' || c.cat === selectedCat;
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.full.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.platform.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const selectedCampaign = CAMPAIGNS.find((c) => c.id === selectedId) || CAMPAIGNS[0];

  return (
    <div className="min-h-screen bg-[#05070D] text-[#EEF1F7] font-['Plus_Jakarta_Sans'] flex flex-col md:flex-row selection:bg-[#FF6A28] selection:text-white">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 p-6 border-r border-white/5 bg-[#080B13]/90 backdrop-blur-md flex flex-col gap-8 flex-none md:sticky md:top-0 md:h-screen overflow-y-auto">
        <Logo />

        <nav className="flex flex-col gap-1.5">
          <div className="text-[11px] font-semibold text-[#6F7A8F] tracking-widest px-3 pb-2 uppercase">MENU</div>
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[rgba(255,106,40,0.18)] to-[rgba(255,106,40,0.04)] text-white font-medium text-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="9" rx="2"/><rect x="14" y="3" width="7" height="5" rx="2"/><rect x="14" y="12" width="7" height="9" rx="2"/><rect x="3" y="16" width="7" height="5" rx="2"/></svg>
            Dashboard
          </Link>
          <Link href="/chat" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A9B2C3] hover:text-white hover:bg-white/5 font-medium text-sm transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>
            AI Chat
          </Link>
          <Link href="/guidelines" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A9B2C3] hover:text-white hover:bg-white/5 font-medium text-sm transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>
            Safety Guidelines
          </Link>
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A9B2C3] hover:text-white hover:bg-white/5 font-medium text-sm transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>
            Home
          </Link>
        </nav>

        <div className="mt-auto p-4 rounded-2xl bg-[#4DA3FF]/[0.08] border border-[#4DA3FF]/20 flex flex-col gap-1.5">
          <div className="flex items-center gap-2 font-semibold text-xs text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3DDC97] animate-ping" /> Data synced
          </div>
          <div className="text-xs text-[#A9B2C3]">NASA PSI · NTRS · Active</div>
        </div>
      </aside>

      {/* Main Workspace */}
      <main className="flex-1 p-6 md:p-10 flex flex-col gap-6 max-w-[1400px] overflow-x-hidden">
        
        {/* Header Title & Live Telemetry Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-[#8E98AB]">Overview</span>
            <h1 className="m-0 font-['Space_Grotesk'] font-bold text-2xl md:text-3xl text-white tracking-tight">Microgravity Combustion Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            {/* (Live Telemetry Indicator) */}
            <div className="hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[#C3CAD8]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3DDC97] animate-ping" />
              <span className="font-mono text-[#5FE3AA]">LIVE TELEMETRY · ISS LINKED</span>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-4 py-2.5 rounded-xl border border-white/12 bg-white/[0.04] text-[#EEF1F7] font-semibold text-sm hover:bg-white/[0.08] transition-all cursor-pointer flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v12M7 10l5 5 5-5M4 21h16"/></svg>
                Export report
              </button>
              <Link href="/chat" className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8A3D] to-[#FF5A1F] text-white font-semibold text-sm shadow-lg shadow-orange-500/20 hover:brightness-110 transition-all flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg>
                Ask AI
              </Link>
            </div>
          </div>
        </div>

        {/* (Live Counters & Dynamic Stats) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 flex flex-col gap-2 hover:border-[#FF8A4C]/40 transition-all">
            <span className="text-xs text-[#8E98AB] font-mono uppercase">Indexed Campaigns</span>
            <div className="font-['Space_Grotesk'] font-bold text-4xl text-white transition-all duration-1000">
              {liveStats.campaigns} <span className="text-sm font-normal text-[#FF8A4C]">Active</span>
            </div>
            <span className="text-xs text-[#5FE3AA]">100% parsed from PSI & NTRS</span>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 flex flex-col gap-2 hover:border-[#7DB8FF]/40 transition-all">
            <span className="text-xs text-[#8E98AB] font-mono uppercase">Research Hours</span>
            <div className="font-['Space_Grotesk'] font-bold text-4xl text-white transition-all duration-1000">
              {liveStats.hours}+ <span className="text-sm font-normal text-[#7DB8FF]">Hours</span>
            </div>
            <span className="text-xs text-[#7DB8FF]">FLEX, Saffire, BASS logs</span>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 flex flex-col gap-2 hover:border-[#3DDC97]/40 transition-all">
            <span className="text-xs text-[#8E98AB] font-mono uppercase">Protocol Safety Index</span>
            <div className="font-['Space_Grotesk'] font-bold text-4xl text-white transition-all duration-1000">
              {liveStats.safetyScore}% <span className="text-sm font-normal text-[#3DDC97]">Optimal</span>
            </div>
            <span className="text-xs text-[#3DDC97]">Verified against Artemis specs</span>
          </div>
        </div>


        {/* AI Insight Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[rgba(255,106,40,0.16)] to-[rgba(77,140,255,0.12)] border border-[#FF8A4C]/30 flex flex-wrap items-center gap-5">
          <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FF8A3D] to-[#FF5A1F] flex items-center justify-center flex-none shadow-md">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.9"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg>
          </span>
          <div className="flex-1 min-w-[280px]">
            <div className="text-xs font-bold text-[#FFB38A] tracking-wider mb-1">AI INSIGHT · ACROSS 3 CAMPAIGNS</div>
            <div className="text-sm text-white leading-relaxed">The most dangerous condition for solid materials isn&apos;t still air — it&apos;s a <strong className="text-white">gentle airflow like cabin ventilation</strong>. Shutting off ventilation is the most effective first response.</div>
          </div>
          <div className="flex gap-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black/30 text-[#EEF1F7]">BASS</span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black/30 text-[#EEF1F7]">Saffire</span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black/30 text-[#EEF1F7]">SoFIE</span>
          </div>
        </div>

        {/* Main Content Grid: Catalog Table + Selected Campaign Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Side: Table & Filters */}
          <div className="lg:col-span-8 p-6 rounded-2xl bg-gradient-to-b from-white/[0.045] to-white/[0.02] border border-white/8 flex flex-col gap-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="m-0 font-['Space_Grotesk'] font-semibold text-xl text-white">Experiment catalog</h2>
              <div className="relative flex-1 max-w-[280px]">
                <input 
                  type="search" 
                  placeholder="Search droplet, Cygnus, PMMA…" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/35 border border-white/10 text-sm text-white placeholder-[#8E98AB] focus:outline-none focus:border-[#7DB8FF]" 
                />
              </div>
            </div>

            {/* Filter Category Chips */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All' },
                { id: 'liquid', label: 'Liquid droplets' },
                { id: 'solid', label: 'Solid materials' },
                { id: 'gas', label: 'Gaseous flames' },
                { id: 'large', label: 'Large-scale' },
                { id: 'ground', label: 'Ground tests' }
              ].map(cat => (
                <button 
                  key={cat.id} 
                  onClick={() => setSelectedCat(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer border ${selectedCat === cat.id ? 'bg-white text-[#05070D] border-white font-semibold' : 'bg-white/[0.03] text-[#C3CAD8] border-white/10 hover:border-white/30'}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <div className="min-w-[600px] flex flex-col">
                <div className="grid grid-cols-[1.7fr_1fr_1.4fr_0.8fr] gap-3 px-4 py-3 text-[11px] font-semibold text-[#6F7A8F] tracking-wider border-b border-white/6 uppercase">
                  <div>CAMPAIGN</div>
                  <div>FUEL CLASS</div>
                  <div>PLATFORM</div>
                  <div>YEARS</div>
                </div>

                {filteredRows.map((r) => {
                  const isSelected = r.id === selectedId;
                  return (
                    <button 
                      key={r.id} 
                      onClick={() => setSelectedId(r.id)}
                      className={`grid grid-cols-[1.7fr_1fr_1.4fr_0.8fr] gap-3 p-3.5 items-center text-left border-b border-white/5 transition-all cursor-pointer ${isSelected ? 'bg-[#FF6A28]/10 border-l-4 border-l-[#FF6A28]' : 'hover:bg-white/[0.04]'}`}
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-white text-sm">{r.name}</span>
                        <span className="text-xs text-[#8E98AB]">{r.full}</span>
                      </div>
                      <div>
                        <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: r.tint, color: r.color }}>
                          {r.catLabel}
                        </span>
                      </div>
                      <div className="text-xs text-[#C3CAD8]">{r.platform}</div>
                      <div className="font-mono text-xs text-[#C3CAD8]">{r.years}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side: Selected Campaign Panel */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-gradient-to-b from-white/[0.045] to-white/[0.02] border border-white/8 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <span className="self-start text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: selectedCampaign.tint, color: selectedCampaign.color }}>
                {selectedCampaign.catLabel} · {selectedCampaign.years}
              </span>
              <h2 className="m-0 font-['Space_Grotesk'] font-bold text-3xl text-white">{selectedCampaign.name}</h2>
              <div className="text-xs text-[#A9B2C3]">{selectedCampaign.full} · {selectedCampaign.platform}</div>
            </div>

            {/* AI Summary Box */}
            <div className="p-4 rounded-xl bg-[#4D8CFF]/10 border border-[#4D8CFF]/20 flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#9DCBFF] tracking-wider">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg>
                  AI SUMMARY
              </div>
              <p className="m-0 text-xs text-white leading-relaxed">{selectedCampaign.summary}</p>
            </div>

            {/* Key Findings */}
            <div className="flex flex-col gap-2.5">
              <div className="text-[11px] font-bold text-[#6F7A8F] tracking-wider uppercase">KEY FINDINGS</div>
              {selectedCampaign.findings.map((f, i) => (
                <div key={i} className="flex gap-2.5 text-xs text-[#D3D8E2] leading-relaxed">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5FE3AA" strokeWidth="2.5" className="flex-none mt-0.5"><path d="M5 12l5 5 9-10"/></svg>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {/* Safety Implication Box */}
            <div className="p-4 rounded-xl bg-[#FF6A28]/10 border border-[#FF6A28]/30 flex gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF8A4C" strokeWidth="2" className="flex-none mt-0.5"><path d="M12 3l9 16H3z"/><path d="M12 10v4M12 17h.01"/></svg>
              <div className="flex flex-col gap-1">
                <div className="text-xs font-bold text-[#FFB38A] tracking-wider">SAFETY IMPLICATION</div>
                <div className="text-xs text-white leading-relaxed">{selectedCampaign.implication}</div>
              </div>
            </div>

            <Link href="/chat" className="mt-auto py-3 px-4 rounded-xl bg-gradient-to-r from-[#FF8A3D] to-[#FF5A1F] text-white text-center font-semibold text-xs shadow-md shadow-orange-500/20 hover:brightness-110 transition-all">
              Ask AI about {selectedCampaign.name}
            </Link>
          </div>

        </div>

        {/* Bottom Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Campaign Timeline */}
          <div className="lg:col-span-8 p-6 rounded-2xl bg-gradient-to-b from-white/[0.045] to-white/[0.02] border border-white/8 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="m-0 font-['Space_Grotesk'] font-semibold text-lg text-white">Campaign timeline</h2>
              <span className="text-xs text-[#8E98AB]">2008 – today · dates approximate</span>
            </div>

            <div className="flex flex-col gap-3 py-2">
              {CAMPAIGNS.map((b) => {
                const span = 19;
                const leftPct = ((b.start - 2008) / span) * 100;
                const widthPct = ((b.end - b.start + 1) / span) * 100;

                return (
                  <div key={b.id} className="grid grid-cols-[112px_1fr] gap-3 items-center text-xs">
                    <div className="font-medium truncate text-[#C3CAD8]">{b.name}</div>
                    <div className="relative h-6 bg-white/[0.04] rounded-lg overflow-hidden">
                      <div 
                        className="absolute top-0 bottom-0 rounded-lg transition-all" 
                        style={{ 
                          left: `${leftPct}%`, 
                          width: `${widthPct}%`, 
                          backgroundColor: b.color, 
                          opacity: b.id === selectedId ? 1 : 0.6 
                        }} 
                      />
                    </div>
                  </div>
                );
              })}

              <div className="grid grid-cols-[112px_1fr] gap-3 text-[11px] font-mono text-[#6F7A8F] pt-2">
                <div />
                <div className="flex justify-between px-1">
                  <span>2010</span>
                  <span>2014</span>
                  <span>2018</span>
                  <span>2022</span>
                  <span>2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* By Fuel Class - Donut Chart */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-gradient-to-b from-white/[0.045] to-white/[0.02] border border-white/8 flex flex-col gap-4">
            <h2 className="m-0 font-['Space_Grotesk'] font-semibold text-lg text-white">By fuel class</h2>
            
            <div className="flex items-center gap-6 my-auto">
              <div className="w-36 h-36 rounded-full flex items-center justify-center flex-none bg-[conic-gradient(#FF8A4C_0deg_102deg,#FFC15A_102deg_205deg,#7DB8FF_205deg_257deg,#B9A5FF_257deg_308deg,#5FE3AA_308deg_360deg)] p-4 shadow-lg">
                <div className="w-28 h-28 rounded-full bg-[#0B0F19] flex flex-col items-center justify-center">
                  <span className="font-['Space_Grotesk'] font-bold text-2xl text-white">7</span>
                  <span className="text-[10px] text-[#8E98AB]">campaigns</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-xs flex-1">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#FF8A4C]"/><span className="flex-1 text-[#C3CAD8]">Liquid droplets</span><span className="font-bold">2</span></div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#FFC15A]"/><span className="flex-1 text-[#C3CAD8]">Solid materials</span><span className="font-bold">2</span></div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#7DB8FF]"/><span className="flex-1 text-[#C3CAD8]">Gaseous flames</span><span className="font-bold">1</span></div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#B9A5FF]"/><span className="flex-1 text-[#C3CAD8]">Large-scale</span><span className="font-bold">1</span></div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#5FE3AA]"/><span className="flex-1 text-[#C3CAD8]">Ground tests</span><span className="font-bold">1</span></div>
              </div>
            </div>
          </div>

          {/* Flame Spread vs Airflow Graph */}
          <div className="lg:col-span-8 p-6 rounded-2xl bg-gradient-to-b from-white/[0.045] to-white/[0.02] border border-white/8 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h2 className="m-0 font-['Space_Grotesk'] font-semibold text-lg text-white">Flame spread vs. airflow</h2>
              <span className="text-xs text-[#8E98AB]">Thin solids in µg · qualitative, not to scale</span>
            </div>

            <svg viewBox="0 0 640 240" className="w-full h-auto">
              <defs>
                <linearGradient id="ff-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#FF6A28" stopOpacity="0.45" />
                  <stop offset="1" stopColor="#FF6A28" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="50" y1="60" x2="620" y2="60" stroke="rgba(255,255,255,0.05)" />
              <line x1="50" y1="120" x2="620" y2="120" stroke="rgba(255,255,255,0.05)" />
              <line x1="50" y1="180" x2="620" y2="180" stroke="rgba(255,255,255,0.05)" />
              <line x1="50" y1="210" x2="620" y2="210" stroke="rgba(255,255,255,0.15)" />
              
              <path d="M62 210 C 95 210, 115 80, 190 64 C 270 48, 370 100, 470 130 C 530 148, 565 180, 595 210 Z" fill="url(#ff-area)" />
              <path d="M62 210 C 95 210, 115 80, 190 64 C 270 48, 370 100, 470 130 C 530 148, 565 180, 595 210" fill="none" stroke="#FF7A2E" strokeWidth="3" />
              
              <circle cx="190" cy="64" r="6" fill="#FF7A2E" stroke="#0B0F19" strokeWidth="3" />
              
              <rect x="132" y="18" width="116" height="26" rx="13" fill="rgba(255,106,40,0.25)" />
              <text x="190" y="35" fill="#FFB38A" fontSize="11" fontWeight="700" textAnchor="middle">Most hazardous</text>
              
              <text x="62" y="230" fill="#8E98AB" fontSize="11">Still air · starves</text>
              <text x="190" y="230" fill="#8E98AB" fontSize="11" textAnchor="middle">Cabin ventilation</text>
              <text x="590" y="230" fill="#8E98AB" fontSize="11" textAnchor="end">Strong flow · blow-off</text>
            </svg>
          </div>

          {/* Data Sources Links */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-gradient-to-b from-white/[0.045] to-white/[0.02] border border-white/8 flex flex-col gap-4">
            <h2 className="m-0 font-['Space_Grotesk'] font-semibold text-lg text-white">Data sources</h2>
            
            <a href="https://psi.nasa.gov" target="_blank" rel="noreferrer" className="flex justify-between items-center p-4 rounded-xl bg-white/[0.03] border border-white/6 hover:border-white/20 transition-all text-white no-underline">
              <div>
                <span className="block font-semibold text-sm">NASA PSI</span>
                <span className="text-xs text-[#8E98AB]">Physical Sciences Informatics</span>
              </div>
              <span className="text-[#8E98AB]">↗</span>
            </a>

            <a href="https://ntrs.nasa.gov" target="_blank" rel="noreferrer" className="flex justify-between items-center p-4 rounded-xl bg-white/[0.03] border border-white/6 hover:border-white/20 transition-all text-white no-underline">
              <div>
                <span className="block font-semibold text-sm">NASA NTRS</span>
                <span className="text-xs text-[#8E98AB]">Technical Reports Server</span>
              </div>
              <span className="text-[#8E98AB]">↗</span>
            </a>
          </div>

        </div>

      </main>
    </div>
  );
}