'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from '@/app/components/Logo';


const ALL_GUIDELINES = [
  {
    id: 1,
    cat: 'prevention',
    catLabel: 'Prevention',
    title: 'Screen for low-speed airflow flammability',
    desc: 'Materials safe in still air or 1 g buoyant flow can burn under gentle ventilation.',
    evidence: 'BASS / BASS-II',
    badge: 'P',
    priority: 'Critical'
  },
  {
    id: 2,
    cat: 'prevention',
    catLabel: 'Prevention',
    title: 'Account for higher oxygen in exploration atmospheres',
    desc: '34% O₂ at 8.2 psia significantly increases material flammability compared to ISS levels.',
    evidence: 'SoFIE',
    badge: 'P',
    priority: 'High'
  },
  {
    id: 3,
    cat: 'prevention',
    catLabel: 'Prevention',
    title: 'Separate wire bundles to prevent flame jumping',
    desc: 'In microgravity, narrow gaps between hot wires promote rapid thermal feedback.',
    evidence: 'ACME',
    badge: 'P',
    priority: 'Medium'
  },
  {
    id: 4,
    cat: 'prevention',
    catLabel: 'Prevention',
    title: 'Limit total flammable mass in sealed compartments',
    desc: 'Large fuel mass increases peak pressure and toxic gas generation during a fire event.',
    evidence: 'Saffire I–VI',
    badge: 'P',
    priority: 'High'
  },
  {
    id: 5,
    cat: 'detection',
    catLabel: 'Detection',
    title: 'Combine optical cameras with gas & smoke sensors',
    desc: 'Microgravity flames can burn with faint blue light that optical cameras easily miss.',
    evidence: 'FLEX',
    badge: 'D',
    priority: 'Critical'
  },
  {
    id: 6,
    cat: 'detection',
    catLabel: 'Detection',
    title: 'Place sensors near ventilation return ducts',
    desc: 'Without buoyancy, smoke follows cabin airflow lines directly to return grilles.',
    evidence: 'BASS-II',
    badge: 'D',
    priority: 'High'
  },
  {
    id: 7,
    cat: 'detection',
    catLabel: 'Detection',
    title: 'Monitor CO and CO₂ levels continuously',
    desc: 'Gas composition changes happen rapidly even before large temperature spikes occur.',
    evidence: 'Saffire I–VI',
    badge: 'D',
    priority: 'High'
  },
  {
    id: 8,
    cat: 'suppression',
    catLabel: 'Suppression',
    title: 'Shut off ventilation as first response',
    desc: 'Removing forced airflow deprives the flame of oxygen and drastically reduces spread rate.',
    evidence: 'BASS / Saffire',
    badge: 'S',
    priority: 'Critical'
  },
  {
    id: 9,
    cat: 'suppression',
    catLabel: 'Suppression',
    title: 'Maintain suppressant concentration for cool flames',
    desc: 'Invisible low-temperature reactions persist after visible flame extinction.',
    evidence: 'FLEX',
    badge: 'S',
    priority: 'Critical'
  },
  {
    id: 10,
    cat: 'suppression',
    catLabel: 'Suppression',
    title: 'Isolate power to affected equipment rack',
    desc: 'Electrical heating can maintain hot spots and trigger re-ignition after suppression.',
    evidence: 'ISS Flight Rules',
    badge: 'S',
    priority: 'High'
  },
  {
    id: 11,
    cat: 'mission',
    catLabel: 'Mission design',
    title: 'Re-evaluate for Moon and Mars gravity',
    desc: 'Some materials may be more flammable at partial gravity (0.16 g, 0.38 g) than in 1 g or microgravity. Test for it.',
    evidence: 'Partial-g studies',
    badge: 'M',
    priority: 'High'
  },
  {
    id: 12,
    cat: 'mission',
    catLabel: 'Mission design',
    title: 'Design for pressure rise',
    desc: 'A fire in a sealed volume raises pressure. Size relief paths and module isolation accordingly.',
    evidence: 'Saffire',
    badge: 'M',
    priority: 'Medium'
  }
];

export default function GuidelinesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [reviewed, setReviewed] = useState<number[]>([]);
  const [downloading, setDownloading] = useState(false);

  const toggleReview = (id: number) => {
    setReviewed((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  const filtered = ALL_GUIDELINES.filter((g) => {
    if (activeFilter === 'all') return true;
    return g.cat === activeFilter;
  });

  return (
    <div className="min-h-screen bg-[#05070D] text-[#EEF1F7] font-['Plus_Jakarta_Sans'] flex flex-col md:flex-row selection:bg-[#FF6A28] selection:text-white">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 p-6 border-r border-white/5 bg-[#080B13]/90 backdrop-blur-md flex flex-col gap-8 flex-none md:sticky md:top-0 md:h-screen overflow-y-auto">
        <div className="flex items-center transition-all duration-300 drop-shadow-[0_0_12px_rgba(255,138,61,0.6)] cursor-pointer">
                    <Logo />
            </div>
        <nav className="flex flex-col gap-1.5">
          <div className="text-[11px] font-semibold text-[#6F7A8F] tracking-widest px-3 pb-2 uppercase">MENU</div>
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A9B2C3] hover:text-white hover:bg-white/5 font-medium text-sm transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="9" rx="2"/><rect x="14" y="3" width="7" height="5" rx="2"/><rect x="14" y="12" width="7" height="9" rx="2"/><rect x="3" y="16" width="7" height="5" rx="2"/></svg>
            Dashboard
          </Link>
          <Link href="/chat" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A9B2C3] hover:text-white hover:bg-white/5 font-medium text-sm transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>
            AI Chat
          </Link>
          <Link href="/experiments" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A9B2C3] hover:text-white hover:bg-white/5 font-medium text-sm transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
            Experiments
          </Link>
          <Link href="/guidelines" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[rgba(255,106,40,0.18)] to-[rgba(255,106,40,0.04)] text-white font-medium text-sm">
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
            <span className="w-2.5 h-2.5 rounded-full bg-[#3DDC97] animate-ping" /> Guidelines Synced
          </div>
          <div className="text-xs text-[#A9B2C3]">NASA-STD-6001 · Active</div>
        </div>
      </aside>

      {/* Main Content Workspace */}
      <main className="flex-1 p-6 md:p-10 flex flex-col gap-8 max-w-[1300px] overflow-x-hidden">
        
        {/* Top Tag & Header */}
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-[700px]">
            <span className="self-start inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5FE3AA]/10 border border-[#5FE3AA]/30 text-xs font-semibold text-[#5FE3AA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5FE3AA]" /> AI-derived · evidence-linked
            </span>
            <h1 className="m-0 font-['Space_Grotesk'] font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Fire safety guidelines for human spaceflight
            </h1>
            <p className="m-0 text-[#A9B2C3] text-base leading-relaxed">
              Twelve recommendations distilled from NASA microgravity combustion research. Each one links to the experiments that support it.
            </p>
          </div>

          {/* Download Checklist & Progress Box */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-3 min-w-[280px]">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#A9B2C3] font-medium">Review progress</span>
              <span className="font-mono font-bold text-white">{reviewed.length}/12</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#FF8A3D] to-[#3DDC97] transition-all duration-300" 
                style={{ width: `${(reviewed.length / 12) * 100}%` }}
              />
            </div>
            <button 
              onClick={handleDownload}
              className={`mt-1 w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer border-0 shadow-lg ${
                downloading 
                  ? 'bg-[#3DDC97] text-black shadow-green-500/20' 
                  : 'bg-gradient-to-r from-[#FF8A3D] to-[#FF5A1F] text-white shadow-orange-500/20 hover:brightness-110'
              }`}
            >
              {downloading ? (
                <>✓ Checklist Downloaded Successfully!</>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download checklist (PDF)
                </>
              )}
            </button>
          </div>
        </div>

        {/* Response Sequence Box */}
        <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-[#FF6A28]/15 via-[#FF6A28]/5 to-transparent border border-[#FF8A4C]/30 flex flex-col gap-6 shadow-xl">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-[#FF6A28] flex items-center justify-center text-white font-bold text-lg">⚠️</span>
              <h2 className="m-0 font-['Space_Grotesk'] font-bold text-2xl text-white">If a fire starts: response sequence</h2>
            </div>
            <Link href="/chat" className="text-xs font-semibold text-[#FFB38A] hover:text-white transition-colors">
              Ask AI why this order &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-4 rounded-2xl bg-[#0E1320]/80 border border-white/10 flex flex-col gap-2 hover:border-[#FF8A4C]/50 transition-all duration-300 hover:-translate-y-1">
              <span className="font-['Space_Grotesk'] font-bold text-2xl text-[#FF8A4C]">01</span>
              <h3 className="m-0 font-bold text-sm text-white">Stop the airflow</h3>
              <p className="m-0 text-xs text-[#A9B2C3] leading-relaxed">Shut off ventilation in the affected module.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0E1320]/80 border border-white/10 flex flex-col gap-2 hover:border-[#FF8A4C]/50 transition-all duration-300 hover:-translate-y-1">
              <span className="font-['Space_Grotesk'] font-bold text-2xl text-[#FF8A4C]">02</span>
              <h3 className="m-0 font-bold text-sm text-white">Cut the power</h3>
              <p className="m-0 text-xs text-[#A9B2C3] leading-relaxed">Isolate the affected rack or device.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0E1320]/80 border border-white/10 flex flex-col gap-2 hover:border-[#FF8A4C]/50 transition-all duration-300 hover:-translate-y-1">
              <span className="font-['Space_Grotesk'] font-bold text-2xl text-[#FF8A4C]">03</span>
              <h3 className="m-0 font-bold text-sm text-white">Extinguish</h3>
              <p className="m-0 text-xs text-[#A9B2C3] leading-relaxed">CO₂ or water mist, aimed at the source.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0E1320]/80 border border-white/10 flex flex-col gap-2 hover:border-[#FF8A4C]/50 transition-all duration-300 hover:-translate-y-1">
              <span className="font-['Space_Grotesk'] font-bold text-2xl text-[#FF8A4C]">04</span>
              <h3 className="m-0 font-bold text-sm text-white">Watch for re-ignition</h3>
              <p className="m-0 text-xs text-[#A9B2C3] leading-relaxed">Invisible cool flames can persist.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0E1320]/80 border border-white/10 flex flex-col gap-2 hover:border-[#FF8A4C]/50 transition-all duration-300 hover:-translate-y-1">
              <span className="font-['Space_Grotesk'] font-bold text-2xl text-[#FF8A4C]">05</span>
              <h3 className="m-0 font-bold text-sm text-white">Clear the air</h3>
              <p className="m-0 text-xs text-[#A9B2C3] leading-relaxed">Masks on; monitor CO, O₂ and pressure.</p>
            </div>
          </div>
        </div>

        {/* Filter Categories Chips */}
        <div className="flex flex-wrap gap-2 pt-2">
          {[
            { id: 'all', label: 'All 12' },
            { id: 'prevention', label: 'Prevention 4' },
            { id: 'detection', label: 'Detection 3' },
            { id: 'suppression', label: 'Suppression 3' },
            { id: 'mission', label: 'Mission design 2' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                activeFilter === cat.id
                  ? 'bg-white text-[#05070D] border-white'
                  : 'bg-white/[0.03] text-[#C3CAD8] border-white/10 hover:border-white/25'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Guidelines Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((item) => {
            const isChecked = reviewed.includes(item.id);
            return (
              <div
                key={item.id}
                className={`p-6 rounded-3xl bg-gradient-to-b from-white/[0.045] to-white/[0.02] border transition-all duration-300 flex flex-col gap-4 justify-between hover:-translate-y-1 ${
                  isChecked ? 'border-[#3DDC97]/40 bg-[#3DDC97]/[0.02]' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-[#7DB8FF]/15 text-[#7DB8FF] flex items-center justify-center font-bold text-xs">
                        {item.badge}
                      </span>
                      <span className="text-xs font-semibold text-[#A9B2C3]">{item.catLabel}</span>
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                      item.priority === 'Critical' 
                        ? 'bg-[#FF6A28]/20 text-[#FF8A4C]' 
                        : item.priority === 'High' 
                        ? 'bg-[#FFC15A]/20 text-[#FFC15A]' 
                        : 'bg-white/10 text-[#C3CAD8]'
                    }`}>
                      {item.priority}
                    </span>
                  </div>

                  <h3 className="m-0 font-['Space_Grotesk'] font-bold text-xl text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="m-0 text-sm text-[#A9B2C3] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-2 border-t border-white/6">
                  <div className="flex items-center gap-2 text-xs text-[#8E98AB]">
                    <span>EVIDENCE</span>
                    <span className="px-2.5 py-1 rounded-full bg-[#7DB8FF]/12 text-[#7DB8FF] font-semibold text-[11px]">
                      {item.evidence}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleReview(item.id)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isChecked
                        ? 'bg-[#3DDC97]/20 border-[#3DDC97]/40 text-[#5FE3AA]'
                        : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${isChecked ? 'bg-[#3DDC97] border-[#3DDC97]' : 'border-white/40'}`}>
                      {isChecked && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
                    </span>
                    {isChecked ? 'Marked as reviewed' : 'Mark as reviewed'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Not Sure How A Guideline Applies Box */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-white/[0.04] to-white/[0.01] border border-white/10 flex flex-wrap items-center justify-between gap-6 my-4">
          <div className="flex flex-col gap-2 max-w-[600px]">
            <h3 className="m-0 font-['Space_Grotesk'] font-bold text-xl text-white">Not sure how a guideline applies to your mission?</h3>
            <p className="m-0 text-sm text-[#A9B2C3]">
              These recommendations support, not replace, NASA standards and flight rules. Ask the assistant to explain the evidence.
            </p>
          </div>
          <Link href="/chat" className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#FF8A3D] to-[#FF5A1F] text-white font-semibold text-sm shadow-lg shadow-orange-500/20 hover:brightness-110 transition-all no-underline">
            Ask the AI
          </Link>
        </div>

      </main>
    </div>
  );
}